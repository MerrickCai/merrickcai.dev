import type { Metadata } from "next";
import Link from "next/link";
import { SparklesIcon, ClockIcon, TagIcon, PencilIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { allPostsMetadata } from "@/app/posts/services/postService";
import { formatDate, formatModifiedDate } from "@/lib/utils/dateUtils";

export const metadata: Metadata = {
  title: "Posts | MerrickCai.dev",
  description: "Technical posts about modern web development, React, and cutting-edge frontend technologies",
  alternates: { canonical: "/posts" },
};

export default async function PostsPage() {
  const posts = allPostsMetadata;

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="relative z-2 mx-auto max-w-6xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
            <SparklesIcon className="mr-2 h-4 w-4" />
            Latest insights & tutorials
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
            Technical Posts
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Exploring modern web development, React innovations, and the latest frontend technologies
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-30">
          <div className="h-60 w-60 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl sm:h-72 sm:w-72"></div>
        </div>
      </section>

      {/* Posts Grid or Empty State */}
      <section className="px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <div className="mx-auto max-w-6xl">
          {/* Posts Grid */}
          {posts.length > 0 && (
            <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className={
                    "group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-101 hover:shadow-2xl sm:rounded-3xl dark:bg-gray-800/80"
                  }
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>

                  <div className="relative flex h-full flex-col items-start p-4 sm:p-6 lg:p-8">
                    {/* Featured Badge */}
                    {post.featured && (
                      <div className="mb-3 inline-flex w-auto items-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-2.5 py-1 text-xs font-medium text-white sm:mb-4 sm:px-3 sm:py-1">
                        <SparklesIcon className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                        Featured
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="group/tag relative inline-flex items-center overflow-hidden rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg sm:px-3 sm:py-1 sm:text-sm dark:bg-blue-900/30 dark:text-blue-200"
                        >
                          <TagIcon className="mr-1 h-2.5 w-2.5 transition-transform duration-300 group-hover/tag:rotate-12 sm:h-3 sm:w-3" />
                          <span className="relative z-10">{tag}</span>
                          <div className="absolute inset-0 -z-1 rounded-full bg-blue-300 opacity-0 transition-opacity duration-300 group-hover/tag:opacity-100 dark:bg-blue-800/50"></div>
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <Link href={`/posts/${post.slug}`} className="group/title">
                      <h2
                        className={
                          "mb-3 text-lg leading-tight font-bold text-gray-900 transition-colors duration-200 group-hover/title:text-blue-600 sm:mb-4 sm:text-xl lg:text-2xl dark:text-white dark:group-hover/title:text-blue-400"
                        }
                      >
                        {post.title}
                      </h2>
                    </Link>

                    {/* Description */}
                    <p className="mb-3 text-sm leading-relaxed text-gray-600 sm:mb-4 sm:text-base dark:text-gray-300">
                      {post.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex w-full flex-grow items-end justify-between">
                      <div className="flex h-auto w-full justify-between border-t border-gray-100 pt-3 sm:pt-4 dark:border-gray-700">
                        <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
                          <div className="flex items-center space-x-2 text-xs text-gray-500 sm:space-x-4 sm:text-sm dark:text-gray-400">
                            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                            <span className="flex items-center">
                              <ClockIcon className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                              {post.readTime}
                            </span>
                          </div>

                          {post.modifiedAt && post.modifiedAt !== post.publishedAt && (
                            <div className="flex items-center text-xs text-gray-400 dark:text-gray-500">
                              <PencilIcon className="mr-1 h-2.5 w-2.5 sm:h-3 sm:w-3" />
                              {formatModifiedDate(post.modifiedAt)}
                            </div>
                          )}
                        </div>

                        <Link
                          href={`/posts/${post.slug}`}
                          className="group/link inline-flex items-center text-xs font-medium text-blue-600 transition-colors hover:text-blue-800 sm:text-sm dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <span className="hidden sm:inline">Read post</span>
                          <span className="sm:hidden">Read</span>
                          <ChevronRightIcon className="ml-1 h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-1 sm:ml-2 sm:h-4 sm:w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Empty State */}
          {posts.length === 0 && (
            <div className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/80 p-6 text-center shadow-xl shadow-blue-500/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-101 hover:shadow-2xl hover:shadow-blue-500/20 sm:rounded-3xl sm:p-12 lg:p-16 dark:border-gray-600/50 dark:bg-gray-800/80 dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>

              <div className="relative z-10">
                <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent sm:mb-6 sm:text-3xl lg:text-4xl dark:from-white dark:to-gray-200">
                  Coming Soon
                </h2>

                <p className="mx-auto mb-6 max-w-lg text-base leading-relaxed text-gray-600 sm:mb-10 sm:text-lg dark:text-gray-300">
                  {`I'm working on some exciting content covering technology, personal insights, and creative projects.
                  Check back soon for fresh perspectives and stories!`}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                  <Link
                    href="/about"
                    className="group/btn relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25 sm:px-8 sm:py-4 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600"
                  >
                    <span className="relative z-10 inline-flex items-center">
                      Learn more about me
                      <ChevronRightIcon className="ml-2 h-4 w-4 transition-all duration-200 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"></div>
                  </Link>

                  <Link
                    href="/projects"
                    className="group/btn relative overflow-hidden rounded-full border-2 border-blue-600/20 bg-white/50 px-6 py-3 text-sm font-medium text-blue-600 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-600/40 hover:bg-blue-50/80 hover:shadow-lg sm:px-8 sm:py-4 dark:border-blue-400/20 dark:bg-gray-800/50 dark:text-blue-400 dark:hover:border-blue-400/40 dark:hover:bg-blue-950/30"
                  >
                    <span className="relative z-10 inline-flex items-center">
                      View my projects
                      <ChevronRightIcon className="ml-2 h-4 w-4 transition-all duration-200 group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
                    </span>
                    <div className="absolute inset-0 bg-blue-50/50 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100 dark:bg-blue-950/20"></div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
