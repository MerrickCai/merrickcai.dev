export default function Loading() {
  return (
    <div className="flex flex-col h-auto w-full flex-grow px-4 py-8 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded mb-8 mx-auto w-64"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-12 mx-auto w-96"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-3/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-3 w-1/2"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-16"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-20"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-24"></div>
              </div>
              <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
            </div>

            <div className="p-6 border rounded-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4 w-3/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-3 w-1/2"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-16"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-20"></div>
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded-full w-24"></div>
              </div>
              <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
