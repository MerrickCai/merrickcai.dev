import type { Metadata } from "next";
import { DocumentTextIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Development Notes | MerrickCai.dev",
  description:
    "Detailed documentation of my learning journey, best practices, and insights from frontend development projects",
};

export default function Notes() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Header Section */}
      <section className="relative px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="relative z-2 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-200">
            <DocumentTextIcon className="mr-2 h-4 w-4" />
            Development Documentation
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-orange-900 to-red-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-orange-100 dark:to-red-100">
            Development Notes
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 dark:text-gray-300">
            Explore my comprehensive documentation of frontend development concepts, best practices, and project
            insights.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 opacity-25">
          <div className="h-72 w-72 rounded-full bg-gradient-to-r from-orange-400 to-red-400 blur-3xl sm:h-96 sm:w-96"></div>
        </div>
      </section>

      {/* Notion Embed Section */}
      <section className="relative px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Embed Container */}
          <div className="overflow-hidden rounded-2xl bg-white/80 shadow-2xl backdrop-blur-sm dark:bg-gray-800/80">
            {/* Embed Header */}
            <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-3 md:px-6 md:py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-red-900/20">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <DocumentTextIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Development Notes</h2>
                  </div>
                </div>
                <Link
                  href="https://merrickcai.notion.site/frontend-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-orange-100 px-3 py-2 text-sm font-medium text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-200 dark:hover:bg-orange-900/50"
                >
                  Open in Notion
                  <ArrowLeftIcon className="ml-1 h-3 w-3 rotate-45" />
                </Link>
              </div>
            </div>

            {/* Notion Iframe */}
            <div className="relative">
              <iframe
                src="https://merrickcai.notion.site/ebd/188e3a07cc988036a524c65fb43d2d06"
                width="100%"
                height="600"
                frameBorder="0"
                allowFullScreen
                className="w-full"
                title="Merrick's Development Notes"
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              📝 This documentation is continuously updated with new insights and learnings from my development journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
