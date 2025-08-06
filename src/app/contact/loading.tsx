export default function Loading() {
  return (
    <div className="flex flex-col h-auto w-full flex-grow px-4 py-8 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded mb-8 mx-auto w-64"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information Skeleton */}
            <div className="p-8 border rounded-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-6 w-48"></div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="ml-4 flex-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-16"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-48"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="ml-4 flex-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-16"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="ml-4 flex-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-20"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-40"></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="ml-4 flex-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-24"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-36"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Links Skeleton */}
            <div className="p-8 border rounded-xl bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-6 w-48"></div>
              <div className="space-y-4">
                <div className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="ml-4 flex-1">
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-20"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
                  </div>
                  <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
                <div className="flex items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                  <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="ml-4 flex-1">
                    <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-20"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
                  </div>
                  <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-2 w-24"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-1 w-48"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-32"></div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4 mx-auto w-96"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mx-auto w-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
