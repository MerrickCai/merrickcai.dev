export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section Skeleton */}
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 h-8 w-32 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mx-auto mb-6 h-16 w-80 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700"></div>
          <div className="mx-auto h-6 w-96 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </section>

      {/* Contact Content Skeleton */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info Skeleton */}
            <div className="h-[500px] animate-pulse rounded-3xl bg-white/80 p-8 dark:bg-gray-800/80">
              <div className="space-y-6">
                <div className="h-8 w-1/3 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="h-12 w-12 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-600"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-1/4 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                      <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Links Skeleton */}
            <div className="h-[500px] animate-pulse rounded-3xl bg-white/80 p-8 dark:bg-gray-800/80">
              <div className="space-y-6">
                <div className="h-8 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="h-20 animate-pulse rounded-2xl bg-gray-100 dark:bg-gray-700"></div>
                ))}
                <div className="mt-8 h-24 animate-pulse rounded-2xl bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
