import type { Metadata } from "next";
import { MapPinIcon, ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | MerrickCai.dev",
  description: "Learn more about Merrick Cai - his background, skills, and journey as a Front-end Engineer",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="relative z-2 mx-auto max-w-6xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
            <SparklesIcon className="mr-2 h-4 w-4" />
            Get to know me
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
            About Me
          </h1>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-30">
          <div className="h-60 w-60 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl sm:h-72 sm:w-72"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {/* Professional Summary */}
            <div className="lg:col-span-2">
              <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl dark:text-white">
                    👋 Professional Summary
                  </h2>
                  <p className="mb-4 text-base leading-relaxed text-gray-600 sm:mb-6 sm:text-lg dark:text-gray-300">
                    Front-end engineer fluent in React 19, Next 15, TypeScript, and Tailwind CSS 4, shipping
                    high-performance SSR apps on Vercel. Experienced in full-stack delivery with Node.js, Supabase, and
                    secure RESTful APIs, turning product ideas into fast, scalable experiences.
                  </p>
                  <div className="flex items-center rounded-lg bg-blue-50 p-3 text-blue-700 sm:p-4 dark:bg-blue-900/20 dark:text-blue-300">
                    <MapPinIcon className="mr-2 h-4 w-4 sm:mr-3 sm:h-5 sm:w-5" />
                    <span className="text-sm font-medium sm:text-base">Bellevue, WA (Open to Remote)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <h2 className="mb-4 text-xl font-bold text-gray-900 sm:mb-6 sm:text-2xl dark:text-white">
                  📋 Quick Info
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="rounded-lg bg-gray-50 p-3 sm:p-4 dark:bg-gray-700/50">
                    <span className="block text-xs font-medium text-gray-500 sm:text-sm dark:text-gray-400">Role</span>
                    <p className="text-sm text-gray-900 sm:text-base dark:text-gray-100">
                      Front-End Developer, Full Stack Developer
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3 sm:p-4 dark:bg-gray-700/50">
                    <span className="block text-xs font-medium text-gray-500 sm:text-sm dark:text-gray-400">
                      Languages
                    </span>
                    <p className="text-sm text-gray-900 sm:text-base dark:text-gray-100">English, Mandarin</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3 sm:p-4 dark:bg-gray-700/50">
                    <span className="block text-xs font-medium text-gray-500 sm:text-sm dark:text-gray-400">
                      Contact
                    </span>
                    <p className="text-sm text-gray-900 sm:text-base dark:text-gray-100">(253) 349-9378</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-2">
            {/* Technical Skills */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <h2 className="mb-6 text-xl font-bold text-gray-900 sm:mb-8 sm:text-2xl dark:text-white">
                  🛠️ Technical Skills
                </h2>

                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg dark:text-white">
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {[
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "TypeScript",
                        "React 19",
                        "Next.js 15",
                        "Tailwind CSS 4",
                        "Zustand",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 transition-all hover:scale-105 sm:px-4 sm:py-2 sm:text-sm dark:bg-blue-900/30 dark:text-blue-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg dark:text-white">
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {["Node.js", "Express", "Supabase", "REST API", "JWT Authentication"].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 transition-all hover:scale-105 sm:px-4 sm:py-2 sm:text-sm dark:bg-green-900/30 dark:text-green-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg dark:text-white">
                      Build & DevOps
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {["Vite", "Vercel", "Git & GitHub Actions"].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-800 transition-all hover:scale-105 sm:px-4 sm:py-2 sm:text-sm dark:bg-purple-900/30 dark:text-purple-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg dark:text-white">
                      CS Core
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {["C", "C++", "Data Structures", "Algorithms", "Operating Systems"].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 transition-all hover:scale-105 sm:px-4 sm:py-2 sm:text-sm dark:bg-orange-900/30 dark:text-orange-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg dark:text-white">
                      UX
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {["Responsive Design", "Flexbox", "Animation", "Accessibility"].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-800 transition-all hover:scale-105 sm:px-4 sm:py-2 sm:text-sm dark:bg-pink-900/30 dark:text-pink-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <h2 className="mb-6 text-xl font-bold text-gray-900 sm:mb-8 sm:text-2xl dark:text-white">
                  🎓 Education
                </h2>

                <div className="rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-4 sm:p-6 dark:bg-blue-900/20">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 sm:mb-3 sm:text-xl dark:text-white">
                    Rutgers University – New Brunswick
                  </h3>
                  <p className="mb-3 text-base font-semibold text-blue-600 sm:mb-4 sm:text-lg dark:text-blue-400">
                    B.S. Electrical and Computer Engineering
                  </p>
                  <div className="space-y-1 text-sm text-gray-600 sm:space-y-2 sm:text-base dark:text-gray-300">
                    <p className="flex items-center">
                      <span className="mr-2">📅</span>
                      Sep 2023 - Expected Jan 2026
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">📊</span>
                      GPA: 4.0/4.0
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">🏆</span>
                      {`Dean's List`}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:mt-6 sm:p-6 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <h4 className="mb-2 text-base font-bold text-gray-900 sm:mb-3 dark:text-white">
                    Academic Excellence
                  </h4>
                  <p className="text-sm text-gray-600 sm:text-base dark:text-gray-300">
                    Maintaining perfect GPA while pursuing a rigorous engineering curriculum, demonstrating strong
                    analytical and problem-solving skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 shadow-2xl sm:p-12">
            <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl lg:text-4xl">{`Let's Work Together`}</h2>
            <p className="mb-6 text-lg text-blue-100 sm:mb-8 sm:text-xl">
              Passionate about creating exceptional user experiences and building scalable web applications.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100 sm:px-8 sm:py-4 sm:text-lg"
              >
                <span>Get In Touch</span>
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-blue-600 sm:px-8 sm:py-4 sm:text-lg"
              >
                <span>View Projects</span>
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
