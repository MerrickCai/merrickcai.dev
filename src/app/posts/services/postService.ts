import { boxLog } from "@/lib/console/boxLog";
import type { PostMetadata, PostData, AllPosts, PostDetail } from "@/app/posts/types/posts.types";
import { readdir } from "node:fs/promises";
import path from "node:path";

// Automatically get all post slugs from file system
async function getFileNameList(): Promise<string[]> {
  try {
    // Get the posts directory: /src/content/posts
    const postsDirectory = path.join(process.cwd(), "src", "content", "posts");

    // Read the MDX files in the posts directory
    const fileNameList = (await readdir(postsDirectory)).filter((file) => file.endsWith(".mdx"));
    boxLog(`Found posts (${fileNameList.length}):`, fileNameList);
    return fileNameList;
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

async function getAllPosts(fileNameList: string[]): Promise<AllPosts> {
  if (fileNameList.length === 0) {
    return { postDataList: [], postsMap: new Map() };
  }

  // Hashmap of all posts: <slug, {metadata, content}>
  const postsMap = new Map<string, PostDetail>();

  const postDataList = await Promise.all(
    fileNameList.map(async (fileName) => {
      try {
        const { metadata, default: content } = await import(`@/content/posts/${fileName}`);
        const slug = fileName.replace(".mdx", "");
        const postData: PostData = {
          slug,
          metadata: metadata as PostMetadata,
          content: content as React.FunctionComponent,
        };
        if (slug !== postData.metadata.slug) {
          throw new Error(`Slug mismatch: ${slug} !== ${postData.metadata.slug}`);
        }
        postsMap.set(slug, { metadata, content });
        return postData;
      } catch (error) {
        throw new Error(`Failed to load post (${fileName}): ${(error as Error).message}`);
      }
    }),
  );

  // Sort the posts by published date (newest first)
  const postDataListSorted = postDataList.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime() ||
      a.slug.localeCompare(b.slug)
    );
  });

  return { postsMap, postDataList: postDataListSorted };
}

export function selectPost(allPosts: AllPosts, slug: string): PostDetail {
  const post = allPosts.postsMap.get(slug);
  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }
  return post;
}

const fileNameList = await getFileNameList();
export const allPosts = await getAllPosts(fileNameList);
export const allPostsMetadata = allPosts.postDataList.map((p) => p.metadata);
export const postSlugs = allPosts.postDataList.map((p) => p.slug);
