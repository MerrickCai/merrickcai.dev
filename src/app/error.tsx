"use client";

import { useEffect } from "react";
import Link from "next/link";

import { BugAntIcon, ArrowPathIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-white/80 p-8 text-center shadow-2xl backdrop-blur-sm sm:p-12 dark:bg-gray-800/90">
            <BugAntIcon className="mx-auto mb-6 h-16 w-16 text-red-500 sm:h-20 sm:w-20" />

            <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
              Something went wrong
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-300">
              {`An unexpected error occurred while loading this page. Don't worry, it's not your fault!`}
            </p>

            {/* Error details */}
            <div className="mb-8 space-y-4">
              {/* Error ID - Always show */}
              {error.digest && (
                <div className="mx-auto max-w-md rounded-xl border border-blue-200 bg-blue-50/80 p-4 backdrop-blur-sm dark:border-blue-800 dark:bg-blue-900/30">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Error ID:</span>
                    <code className="rounded bg-blue-100 px-2 py-1 font-mono text-sm text-blue-800 dark:bg-blue-800/50 dark:text-blue-200">
                      {error.digest}
                    </code>
                  </div>
                </div>
              )}

              {/* Technical details - Development only */}
              {process.env.NODE_ENV === "development" && (
                <div className="mx-auto max-w-2xl rounded-xl border border-orange-200 bg-orange-50/80 p-6 text-left backdrop-blur-sm dark:border-orange-800 dark:bg-orange-900/30">
                  <div className="mb-3 flex items-center justify-center">
                    <h3 className="text-sm font-semibold text-orange-800 dark:text-orange-200">Technical Details</h3>
                  </div>
                  <div className="rounded-lg bg-orange-100/80 p-3 dark:bg-orange-800/40">
                    <p className="font-mono text-xs leading-relaxed break-all text-orange-900 dark:text-orange-100">
                      {error.message}
                    </p>
                  </div>
                  <p className="mt-2 text-center text-xs text-orange-600 dark:text-orange-400">
                    This detailed error information is only visible in development mode
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={reset}
                className="group inline-flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
              >
                <ArrowPathIcon className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
                Try Again
              </button>

              <Link
                href="/"
                className="group inline-flex min-w-[160px] items-center justify-center rounded-xl border-2 border-gray-300 bg-white/80 px-8 py-4 text-lg font-semibold text-gray-900 backdrop-blur-sm transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-100 dark:hover:bg-blue-900/20"
              >
                <HomeIcon className="mr-2 h-5 w-5" />
                Back to Home
              </Link>

              <Link
                href="/projects"
                className="group inline-flex min-w-[160px] items-center justify-center rounded-xl bg-gray-100/80 px-8 py-4 text-lg font-semibold text-gray-700 backdrop-blur-sm transition-all duration-200 hover:bg-gray-200 hover:text-gray-800 dark:bg-gray-700/80 dark:text-gray-300 dark:hover:bg-gray-600/80 dark:hover:text-white"
              >
                View Projects
              </Link>
            </div>

            <div className="mt-8 rounded-xl bg-blue-50/80 p-4 backdrop-blur-sm dark:bg-blue-900/20">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {`If this problem persists, please `}
                <Link
                  href="/contact"
                  className="cursor-pointer text-blue-600 underline transition-all duration-200 hover:text-blue-700 hover:no-underline dark:text-blue-400 dark:hover:text-blue-300"
                >
                  contact me
                </Link>
                {` and I'll look into it.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
