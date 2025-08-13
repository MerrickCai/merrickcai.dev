import type { Metadata } from "next";
import { SparklesIcon, CubeIcon } from "@heroicons/react/24/outline";
import ThreeDShowcase from "./components/ThreeDShowcase";

export const metadata: Metadata = {
  title: "3D Playground | MerrickCai.dev",
  description: "A minimal 3D playground built with React Three Fiber.",
  alternates: { canonical: "/3d" },
};

export default function ThreeDPage() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="relative z-2 mx-auto max-w-6xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
            <CubeIcon className="mr-2 h-4 w-4" />
            3D Playground
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
            Interactive 3D Experience
          </h1>

          <p className="mx-auto mb-6 max-w-4xl text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 dark:text-gray-300">
            Dive into an immersive 3D world crafted with React Three Fiber—featuring glass materials, dynamic
            animations, and interactive controls.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-30">
          <div className="h-60 w-60 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl sm:h-72 sm:w-72"></div>
        </div>
      </section>

      {/* 3D Canvas Section */}
      <section className="px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* 3D Canvas */}
          <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-slate-100/80 to-blue-100/80 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-blue-300 hover:shadow-md sm:aspect-[16/9] dark:border-blue-800/80 dark:from-gray-900/80 dark:to-blue-900/80 dark:hover:border-blue-500/80">
            <ThreeDShowcase />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* Feature & Tech Stack Card */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Feature Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-3 flex items-center sm:mb-4">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 sm:mr-4 sm:h-12 sm:w-12 dark:bg-blue-900/30">
                      <SparklesIcon className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6 dark:text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">{`What's Inside`}</h2>
                      <p className="text-xs font-medium tracking-wide text-blue-600 uppercase sm:text-sm dark:text-blue-400">
                        Features & Technologies
                      </p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-base dark:text-gray-300">
                    Interactive orbit controls with smooth auto-rotation, physically-based glass materials, dynamic mesh
                    animations, and ambient particle effects with realistic lighting.
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-3 transition-colors dark:bg-blue-900/20">
                      <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Orbit Controls + Auto-rotate
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-3 transition-colors dark:bg-indigo-900/20">
                      <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Physical Glass Materials
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-3 transition-colors dark:bg-emerald-900/20">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Dynamic Mesh Animation
                      </span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-3 transition-colors dark:bg-purple-900/20">
                      <span className="h-2 w-2 rounded-full bg-purple-500"></span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        Particle Effects & Lighting
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Stack Card */}
              <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                    Built With
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 transition-all hover:scale-105 sm:px-4 sm:py-2 sm:text-sm dark:bg-blue-900/40 dark:text-blue-200">
                      React Three Fiber
                    </span>
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 transition-all hover:scale-105 sm:px-4 sm:py-2 sm:text-sm dark:bg-indigo-900/40 dark:text-indigo-200">
                      Drei
                    </span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 transition-all hover:scale-105 sm:px-4 sm:py-2 sm:text-sm dark:bg-emerald-900/40 dark:text-emerald-200">
                      Three.js
                    </span>
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 transition-all hover:scale-105 sm:px-4 sm:py-2 sm:text-sm dark:bg-purple-900/40 dark:text-purple-200">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <h3 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl dark:text-white">
                  Interaction Guide
                </h3>

                {/* Desktop Controls */}
                <div className="mb-4 sm:mb-5">
                  <h4 className="mb-2 text-sm font-semibold tracking-wide text-gray-700 uppercase sm:text-base dark:text-gray-200">
                    Desktop Controls
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 sm:space-y-3 sm:text-base dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"></span>
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-100">Left Click + Drag:</span>
                        <span className="ml-1">Orbit around the scene</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"></span>
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-100">Mouse Wheel:</span>
                        <span className="ml-1">Zoom in and out</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500"></span>
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-100">
                          Right Click / Middle Click + Drag:
                        </span>
                        <span className="ml-1">Pan the camera view</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Mobile Controls */}
                <div className="mb-4 sm:mb-5">
                  <h4 className="mb-2 text-sm font-semibold tracking-wide text-gray-700 uppercase sm:text-base dark:text-gray-200">
                    Mobile & Touch
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 sm:space-y-3 sm:text-base dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500"></span>
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-100">Single Finger Drag:</span>
                        <span className="ml-1">Orbit around objects</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500"></span>
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-100">Pinch Gesture:</span>
                        <span className="ml-1">Zoom in and out smoothly</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-500"></span>
                      <div>
                        <span className="font-medium text-gray-800 dark:text-gray-100">Two Finger Drag:</span>
                        <span className="ml-1">Pan the camera view</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Additional Tips */}
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <h4 className="mb-2 text-sm font-semibold text-blue-800 dark:text-blue-200">Pro Tips</h4>
                  <ul className="space-y-1 text-xs text-blue-700 sm:space-y-2 sm:text-sm dark:text-blue-300">
                    <li>• Auto-rotation resumes after 2 seconds of inactivity</li>
                    <li>• Smooth damping creates natural, fluid camera movement</li>
                    <li>• All interactions work seamlessly across devices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
