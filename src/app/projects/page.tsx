import Link from "next/link";
import {
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
  StarIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export default function Projects() {
  const badgeBase = "rounded-full px-2 py-1 text-xs font-medium transition-all hover:scale-105 sm:px-3 sm:text-sm";
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200",
    cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-200",
    green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200",
    orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200",
    red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
  };

  const frontendTech = [
    { name: "Next.js 15.4.1", color: "blue" as const },
    { name: "TypeScript", color: "indigo" as const },
    { name: "Tailwind CSS v4", color: "cyan" as const },
    { name: "Supabase", color: "green" as const },
    { name: "next-intl", color: "purple" as const },
    { name: "Heroicons", color: "orange" as const },
  ];

  const backendTech = [
    { name: "Spring (Java)", color: "red" as const },
    { name: "PostgreSQL", color: "blue" as const },
    { name: "AWS App Runner", color: "yellow" as const },
    { name: "AWS S3", color: "orange" as const },
  ];

  const personalTech = [
    { name: "Next.js 15", color: "blue" as const },
    { name: "TypeScript", color: "indigo" as const },
    { name: "Tailwind CSS", color: "cyan" as const },
    { name: "Heroicons", color: "orange" as const },
  ];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="relative z-2 mx-auto max-w-6xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
            <SparklesIcon className="mr-2 h-4 w-4" />
            Portfolio showcase
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
            My Projects
          </h1>

          <p className="mx-auto mb-6 max-w-4xl text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 dark:text-gray-300">
            Showcasing my skills in frontend development, full-stack applications, and modern web technologies.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-30">
          <div className="h-60 w-60 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl sm:h-72 sm:w-72"></div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* NexusHeart Project */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-3 flex items-center sm:mb-4">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 sm:mr-4 sm:h-12 sm:w-12 dark:bg-purple-900/30">
                    <StarIcon className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">NexusHeart</h2>
                      <span className="ml-2 text-xl sm:text-2xl">💕</span>
                    </div>
                    <p className="text-xs font-medium tracking-wide text-purple-600 uppercase sm:text-sm dark:text-purple-400">
                      Featured Project • Frontend Development
                    </p>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-lg dark:text-gray-300">
                  A sophisticated cross-cultural dating platform connecting Chinese and American singles. I developed
                  the entire frontend experience using modern React technologies and best practices.
                </p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900 sm:mb-3 sm:text-base dark:text-white">
                    🛠️ Frontend Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {frontendTech.map((tech) => (
                      <span key={tech.name} className={`${badgeBase} ${colorClasses[tech.color]}`}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900 sm:mb-3 sm:text-base dark:text-white">
                    ✨ Key Features I Implemented
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600 sm:space-y-2 sm:text-base dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-purple-500 sm:h-1.5 sm:w-1.5"></div>
                      Bilingual support (English & Chinese) with next-intl
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-purple-500 sm:h-1.5 sm:w-1.5"></div>
                      JWT authentication integration with custom backend
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-purple-500 sm:h-1.5 sm:w-1.5"></div>
                      Responsive design with Tailwind CSS v4
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-purple-500 sm:h-1.5 sm:w-1.5"></div>
                      Image optimization and compression
                    </li>
                  </ul>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900 sm:mb-3 sm:text-base dark:text-white">
                    🔧 Backend Architecture (External Team)
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {backendTech.map((tech) => (
                      <span key={tech.name} className={`${badgeBase} ${colorClasses[tech.color]}`}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="https://nexusheart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700 sm:px-6 sm:py-3 sm:text-base"
                >
                  Visit Live Site
                  <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>

            {/* merrickcai.dev Project */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-3 flex items-center sm:mb-4">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 sm:mr-4 sm:h-12 sm:w-12 dark:bg-blue-900/30">
                    <CodeBracketIcon className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">merrickcai.dev</h2>
                    <p className="text-xs font-medium tracking-wide text-blue-600 uppercase sm:text-sm dark:text-blue-400">
                      Personal Blog • Current Project
                    </p>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:mb-6 sm:text-lg dark:text-gray-300">
                  My personal blog and portfolio website built with Next.js. Features a clean, modern design with dark
                  mode support and responsive layout. Currently expanding with dynamic content capabilities.
                </p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900 sm:mb-3 sm:text-base dark:text-white">
                    🛠️ Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {personalTech.map((tech) => (
                      <span key={tech.name} className={`${badgeBase} ${colorClasses[tech.color]}`}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900 sm:mb-3 sm:text-base dark:text-white">
                    🚀 Upcoming Features
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-600 sm:space-y-2 sm:text-base dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-blue-500 sm:h-1.5 sm:w-1.5"></div>
                      Backend database integration with Vercel
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-blue-500 sm:h-1.5 sm:w-1.5"></div>
                      Markdown and MDX support for blog posts
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-blue-500 sm:h-1.5 sm:w-1.5"></div>
                      Enhanced dynamic content capabilities
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-blue-500 sm:h-1.5 sm:w-1.5"></div>
                      SEO optimization
                    </li>
                  </ul>
                </div>

                <Link
                  href="/"
                  className="group/link inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-105 hover:from-blue-700 hover:to-indigo-700 sm:px-6 sm:py-3 sm:text-base"
                >
                  View Current Site
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-8 sm:mt-12">
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-5 text-center shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 sm:mb-4 sm:h-16 sm:w-16 dark:bg-violet-900/30">
                  <RocketLaunchIcon className="h-6 w-6 text-violet-600 sm:h-8 sm:w-8 dark:text-violet-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl dark:text-white">
                  More Projects Coming Soon!
                </h3>
                <p className="mb-4 text-base text-gray-600 sm:mb-6 sm:text-lg dark:text-gray-300">
                  {`I'm always working on something new and exciting. Stay tuned for more innovative projects showcasing
                  cutting-edge technologies.`}
                </p>
                <Link
                  href="/contact"
                  className="group/cta inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-base font-semibold text-white transition-all hover:scale-105 hover:from-violet-700 hover:to-purple-700 sm:px-8 sm:py-4 sm:text-lg"
                >
                  {`Let's Build Something Together`}
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover/cta:translate-x-1 sm:h-5 sm:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 shadow-2xl sm:p-12">
            <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl lg:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="mb-6 text-lg text-blue-100 sm:mb-8 sm:text-xl">
              {`Let's collaborate and bring your ideas to life with modern web technologies.`}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100 sm:px-8 sm:py-4 sm:text-lg"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-blue-600 sm:px-8 sm:py-4 sm:text-lg"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
