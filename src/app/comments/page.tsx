import type { Metadata } from "next";
import { ChatBubbleLeftRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import CommentForm from "@/app/comments/components/CommentForm";
import CommentList from "@/app/comments/components/CommentList";

export const metadata: Metadata = {
  title: "Comments | MerrickCai.dev",
  description: "Leave a comment and share your thoughts",
};

export default function CommentsPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="relative z-2 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
            <HeartIcon className="mr-2 h-4 w-4" />
            Guest Comments
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
            Leave a Comment
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
            {`Share your thoughts, feedback, or just say hello! I'd love to hear from you.`}
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <div className="h-96 w-96 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl"></div>
        </div>
      </section>

      {/* Content */}
      <section className="relative px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Comment Form */}
          <div className="group relative mb-12 overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative">
              <h2 className="mb-6 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                <ChatBubbleLeftRightIcon className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Write a Comment
              </h2>
              <CommentForm />
            </div>
          </div>

          {/* Comments List */}
          <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl dark:bg-gray-800/80">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="relative">
              <h2 className="mb-8 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                <SparklesIcon className="mr-3 h-6 w-6 text-blue-600 dark:text-blue-400" />
                Recent Comments
              </h2>
              <CommentList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
