import Link from "next/link";
import { HomeIcon, MagnifyingGlassIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import GoBackButton from "@/components/GoBackButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 flex items-center justify-center px-4">
      {/* Floating Elements */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="h-96 w-96 rounded-full bg-gradient-to-r from-red-400 to-orange-400 blur-3xl"></div>
      </div>

      <div className="relative text-center">
        {/* 404 Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <ExclamationTriangleIcon className="h-16 w-16 text-red-600 dark:text-red-400" />
            </div>
            <div className="absolute -top-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30">
              <MagnifyingGlassIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12 space-y-4">
          <h1 className="text-8xl font-extrabold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 dark:from-red-400 dark:via-orange-400 dark:to-yellow-400 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Page Not Found</h2>
          <p className="mx-auto max-w-md text-lg text-gray-600 dark:text-gray-300">
            {`Oops! The page you're looking for seems to have wandered off into cyberspace. Let's get you back on track.`}
          </p>
        </div>

        {/* Error Details Card */}
        <div className="mb-12 mx-auto max-w-md">
          <div className="rounded-2xl bg-white/80 dark:bg-gray-800/80 p-6 shadow-xl backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">What you can do:</h3>
            <ul className="space-y-2 text-left text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                Check the URL for typos
              </li>
              <li className="flex items-center">
                <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                Go back to the previous page
              </li>
              <li className="flex items-center">
                <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                Visit our homepage
              </li>
              <li className="flex items-center">
                <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                Contact us if the problem persists
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:scale-105"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Back to Home
          </Link>

          <GoBackButton />
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">Still need help?</p>
          <Link
            href="/contact"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            Contact Support →
          </Link>
        </div>
      </div>
    </div>
  );
}
