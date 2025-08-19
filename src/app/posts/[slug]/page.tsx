import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ClockIcon,
  TagIcon,
  SparklesIcon,
  PencilIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { postSlugs, allPosts, selectPost } from "@/app/posts/services/postService";
import { formatDate, formatModifiedDate } from "@/lib/utils/dateUtils";

// Generate static params for dynamic routes
export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

// Ignore other slugs not in the file system
export const dynamicParams = false;

// Generate metadata for the post page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = selectPost(allPosts, slug);

  return {
    title: `${metadata.title} | MerrickCai.dev`,
    description: metadata.description,
    alternates: { canonical: `/posts/${slug}` },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { metadata, content: PostContent } = selectPost(allPosts, slug);

  return (
    <div className="relative flex min-h-screen w-full justify-center bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-6xl">
        {/* Navigation */}
        <nav className="mx-6 mt-4 sm:mx-8 sm:mt-6">
          <Link
            href="/posts"
            className="group relative inline-flex items-center overflow-hidden rounded-xl bg-white/90 px-4 py-2.5 text-sm font-medium text-gray-700 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 sm:rounded-2xl sm:px-6 sm:py-3 sm:text-base dark:bg-gray-800/90 dark:text-gray-300 dark:hover:shadow-blue-400/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
            <ArrowLeftIcon className="relative mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 sm:mr-3 sm:h-5 sm:w-5" />
            <span className="relative">Back to Posts</span>
          </Link>
        </nav>

        {/* Post Header */}
        <header className="mx-4 my-6 sm:mx-6 sm:my-8 lg:mx-8">
          <div className="text-center">
            {/* Featured Badge */}
            {metadata.featured && (
              <div className="mb-4 inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
                <SparklesIcon className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                Featured Post
              </div>
            )}

            {/* Tags */}
            <div className="mb-4 flex flex-wrap justify-center gap-2 px-4 sm:mb-6 sm:gap-3 sm:px-0">
              {metadata.tags.map((tag) => (
                <span
                  key={tag}
                  className="group/tag relative inline-flex items-center overflow-hidden rounded-full bg-blue-100/80 px-3 py-1.5 text-xs font-medium text-blue-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg sm:px-4 sm:py-2 sm:text-sm dark:bg-blue-900/40 dark:text-blue-200"
                >
                  <TagIcon className="mr-1.5 h-2.5 w-2.5 transition-transform duration-300 group-hover/tag:rotate-12 sm:mr-2 sm:h-3 sm:w-3" />
                  <span className="relative z-10">{tag}</span>
                  <div className="absolute inset-0 -z-1 rounded-full bg-blue-200/60 opacity-0 transition-opacity duration-300 group-hover/tag:opacity-100 dark:bg-blue-800/40"></div>
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text px-4 text-2xl leading-tight font-bold tracking-tight text-transparent transition-all duration-300 sm:mb-6 sm:px-0 sm:text-3xl md:text-4xl lg:text-5xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
              {metadata.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-col items-center justify-center gap-2 px-4 text-sm text-gray-600 sm:flex-row sm:gap-6 sm:px-0 sm:text-base dark:text-gray-400">
              <time
                dateTime={metadata.publishedAt}
                className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {formatDate(metadata.publishedAt)}
              </time>
              <span className="hidden text-gray-400 sm:inline">•</span>
              <span className="flex items-center transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
                <ClockIcon className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                {metadata.readTime}
              </span>
              {metadata.modifiedAt && metadata.modifiedAt !== metadata.publishedAt && (
                <>
                  <span className="hidden text-gray-400 sm:inline">•</span>
                  <span className="flex items-center transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">
                    <PencilIcon className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                    {formatModifiedDate(metadata.modifiedAt)}
                  </span>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Post Content */}
        <main className="mx-4 mb-8 sm:mx-6 sm:mb-10 lg:mx-8">
          <PostContent />
        </main>

        {/* Post Footer */}
        <footer className="mx-4 mb-8 sm:mx-6 sm:mb-10 lg:mx-8">
          <div className="relative overflow-hidden rounded-xl bg-white/90 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-101 hover:shadow-2xl sm:rounded-3xl sm:p-8 dark:bg-gray-800/90">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10"></div>

            <div className="relative text-center">
              <div className="mb-4 sm:mb-6">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg sm:mb-4 sm:h-16 sm:w-16">
                  <SparklesIcon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 sm:mb-3 sm:text-2xl dark:text-white">
                  Thanks for reading!
                </h3>
                <p className="mx-auto px-4 text-sm text-gray-600 sm:px-0 sm:text-base dark:text-gray-300">
                  If you found this post helpful, check out more of my technical writings and insights.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <Link
                  href="/posts"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <span className="relative mr-2 sm:mr-3">Explore More Posts</span>
                  <ArrowRightIcon className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
                </Link>

                <Link
                  href="/contact"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl border-2 border-blue-500 bg-transparent px-6 py-3 text-sm font-medium text-blue-600 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg sm:w-auto sm:rounded-2xl sm:px-8 sm:py-4 sm:text-base dark:text-blue-400"
                >
                  <span className="relative">Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
