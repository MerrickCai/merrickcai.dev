export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section Skeleton */}
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 mx-auto h-8 w-40 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-6 mx-auto h-16 w-72 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700"></div>
          <div className="mx-auto h-6 w-[500px] animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </section>

      {/* Projects Grid Skeleton */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Project Card Skeletons */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-[700px] animate-pulse rounded-3xl bg-white/80 dark:bg-gray-800/80 p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-600"></div>
                    <div className="space-y-2">
                      <div className="h-8 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                      <div className="h-4 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                    <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                    <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <div className="h-5 w-1/3 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                    <div className="flex flex-wrap gap-2">
                      {[...Array(6)].map((_, j) => (
                        <div key={j} className="h-7 w-20 animate-pulse rounded-full bg-gray-200 dark:bg-gray-600"></div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="h-5 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                    <div className="space-y-2">
                      {[...Array(4)].map((_, k) => (
                        <div key={k} className="h-4 w-4/5 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <div className="h-12 w-32 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-600"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section Skeleton */}
          <div className="mt-12">
            <div className="h-80 animate-pulse rounded-3xl bg-white/80 dark:bg-gray-800/80 p-8">
              <div className="space-y-6 text-center">
                <div className="mx-auto h-16 w-16 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-600"></div>
                <div className="mx-auto h-8 w-64 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                <div className="mx-auto h-6 w-96 animate-pulse rounded bg-gray-200 dark:bg-gray-600"></div>
                <div className="mx-auto h-12 w-48 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
