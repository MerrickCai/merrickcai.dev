export interface PostMetadata {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export interface PostData {
  slug: string;
  metadata: PostMetadata;
  content: React.FunctionComponent;
}

export type PostDetail = Omit<PostData, "slug">;

export interface AllPosts {
  postDataList: PostData[];
  postsMap: Map<string, PostDetail>;
}
