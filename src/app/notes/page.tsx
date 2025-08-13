import type { Metadata } from "next";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import NotionContainer from "@/app/notes/components/NotionContainer";

export const metadata: Metadata = {
  title: "Development Notes | MerrickCai.dev",
  description:
    "Detailed documentation of my learning journey, best practices, and insights from frontend development projects",
  alternates: { canonical: "/notes" },
};

export default function Notes() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Header Section */}
      <section className="relative px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="relative z-2 mx-auto max-w-6xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-200">
            <DocumentTextIcon className="mr-2 h-4 w-4" />
            Development Documentation
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-orange-900 to-red-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-orange-100 dark:to-red-100">
            Development Notes
          </h1>

          <p className="mx-auto mb-6 max-w-4xl text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 dark:text-gray-300">
            Explore my comprehensive documentation of frontend development concepts, best practices, and project
            insights.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-30">
          <div className="h-60 w-60 rounded-full bg-gradient-to-r from-orange-400 to-red-400 blur-3xl sm:h-72 sm:w-72"></div>
        </div>
      </section>

      {/* Notion Section */}
      <section className="relative px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Notion Container */}
          <NotionContainer />

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
