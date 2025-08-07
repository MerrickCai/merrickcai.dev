import { SparklesIcon } from "@heroicons/react/24/outline";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 flex items-center justify-center">
      {/* Floating Elements */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="h-96 w-96 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative text-center">
        {/* Loading Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer spinning ring */}
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-200 dark:border-blue-800"></div>
            {/* Inner spinning dot */}
            <div className="absolute top-0 left-0 h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-blue-600 dark:border-t-blue-400"></div>
            {/* Center icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <SparklesIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
            Loading
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Please wait while we prepare something amazing...</p>
        </div>

        {/* Animated Dots */}
        <div className="mt-6 flex justify-center space-x-1">
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-blue-600 dark:bg-blue-400"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-blue-600 dark:bg-blue-400"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="h-2 w-2 animate-bounce rounded-full bg-blue-600 dark:bg-blue-400"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
