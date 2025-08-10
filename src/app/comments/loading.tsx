import RevealOnScroll from "@/components/layout/RevealOnScroll";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function Loading() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Floating Particles Background */}
      <FloatingParticles count={20} />

      <div className="px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Hero Section Skeleton */}
          <RevealOnScroll>
            <div className="mb-16 text-center">
              <div className="mx-auto mb-6 h-8 w-32 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="mx-auto mb-6 h-16 w-80 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
              <div className="mx-auto h-6 w-96 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700"></div>
            </div>
          </RevealOnScroll>

          {/* Form Skeleton */}
          <RevealOnScroll delay={0.2}>
            <div className="mb-12 rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:bg-gray-800/80">
              <div className="mb-6 h-8 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="h-12 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"></div>
                  <div className="h-12 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="h-32 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-12 w-40 animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Comments Section Skeleton */}
          <RevealOnScroll delay={0.4}>
            <div className="rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm dark:bg-gray-800/80">
              <div className="mb-8 h-8 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              <div className="py-12 text-center">
                <div className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="mx-auto mb-2 h-6 w-48 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                <div className="mx-auto h-4 w-64 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
