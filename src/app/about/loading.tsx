export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section Skeleton */}
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 h-8 w-32 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mx-auto mb-6 h-16 w-80 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Large card skeleton */}
            <div className="lg:col-span-2">
              <div className="h-96 animate-pulse rounded-3xl bg-white/80 p-8 dark:bg-gray-800/80">
                <div className="space-y-4">
                  <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                  <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                  <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                  <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                </div>
              </div>
            </div>

            {/* Small card skeleton */}
            <div className="h-96 animate-pulse rounded-3xl bg-white/80 p-8 dark:bg-gray-800/80">
              <div className="space-y-4">
                <div className="h-6 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                <div className="space-y-3">
                  <div className="h-16 animate-pulse rounded-lg bg-gray-100 dark:bg-gray-700"></div>
                  <div className="h-16 animate-pulse rounded-lg bg-gray-100 dark:bg-gray-700"></div>
                  <div className="h-16 animate-pulse rounded-lg bg-gray-100 dark:bg-gray-700"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="h-[600px] animate-pulse rounded-3xl bg-white/80 dark:bg-gray-800/80"></div>
            <div className="h-[600px] animate-pulse rounded-3xl bg-white/80 dark:bg-gray-800/80"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
