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
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
            <SparklesIcon className="mr-2 h-4 w-4" />
            Portfolio showcase
          </div>

          <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
            My Projects
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
            Showcasing my skills in frontend development, full-stack applications, and modern web technologies.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <div className="h-96 w-96 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl"></div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* NexusHeart Project */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                    <StarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">NexusHeart</h2>
                      <span className="ml-2 text-2xl">💕</span>
                    </div>
                    <p className="text-sm font-medium tracking-wide text-purple-600 uppercase dark:text-purple-400">
                      Featured Project • Frontend Development
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  A sophisticated cross-cultural dating platform connecting Chinese and American singles. I developed
                  the entire frontend experience using modern React technologies and best practices.
                </p>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">🛠️ Frontend Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Next.js 15.4.1", color: "blue" },
                      { name: "TypeScript", color: "indigo" },
                      { name: "Tailwind CSS v4", color: "cyan" },
                      { name: "Supabase", color: "green" },
                      { name: "next-intl", color: "purple" },
                      { name: "Heroicons", color: "orange" },
                    ].map((tech) => (
                      <span
                        key={tech.name}
                        className={`rounded-full bg-${tech.color}-100 dark:bg-${tech.color}-900/30 px-3 py-1 text-xs font-medium text-${tech.color}-800 dark:text-${tech.color}-200 transition-all hover:scale-105`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">✨ Key Features I Implemented</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                      Bilingual support (English & Chinese) with next-intl
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                      JWT authentication integration with custom backend
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                      Responsive design with Tailwind CSS v4
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                      Image optimization and compression
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">
                    🔧 Backend Architecture (External Team)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Spring (Java)", color: "red" },
                      { name: "PostgreSQL", color: "blue" },
                      { name: "AWS App Runner", color: "yellow" },
                      { name: "AWS S3", color: "orange" },
                    ].map((tech) => (
                      <span
                        key={tech.name}
                        className={`rounded-full bg-${tech.color}-100 dark:bg-${tech.color}-900/30 px-3 py-1 text-xs font-medium text-${tech.color}-800 dark:text-${tech.color}-200`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="https://nexusheart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:from-purple-700 hover:to-pink-700"
                >
                  Visit Live Site
                  <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* merrickcai.dev Project */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                    <CodeBracketIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">merrickcai.dev</h2>
                    <p className="text-sm font-medium tracking-wide text-blue-600 uppercase dark:text-blue-400">
                      Personal Blog • Current Project
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  My personal blog and portfolio website built with Next.js. Features a clean, modern design with dark
                  mode support and responsive layout. Currently expanding with dynamic content capabilities.
                </p>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">🛠️ Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Next.js 15", color: "blue" },
                      { name: "TypeScript", color: "indigo" },
                      { name: "Tailwind CSS", color: "cyan" },
                      { name: "Heroicons", color: "orange" },
                    ].map((tech) => (
                      <span
                        key={tech.name}
                        className={`rounded-full bg-${tech.color}-100 dark:bg-${tech.color}-900/30 px-3 py-1 text-xs font-medium text-${tech.color}-800 dark:text-${tech.color}-200 transition-all hover:scale-105`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">🚀 Upcoming Features</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      Backend database integration with Vercel
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      Markdown and MDX support for blog posts
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      Enhanced dynamic content capabilities
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      SEO optimization
                    </li>
                  </ul>
                </div>

                <Link
                  href="/"
                  className="group/link inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
                >
                  View Current Site
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-12">
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-8 text-center shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/30">
                  <RocketLaunchIcon className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">More Projects Coming Soon!</h3>
                <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
                  {`I'm always working on something new and exciting. Stay tuned for more innovative projects showcasing
                  cutting-edge technologies.`}
                </p>
                <Link
                  href="/contact"
                  className="group/cta inline-flex items-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:from-violet-700 hover:to-purple-700"
                >
                  {`Let's Build Something Together`}
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Have a Project in Mind?</h2>
            <p className="mb-8 text-xl text-blue-100">
              {`Let's collaborate and bring your ideas to life with modern web technologies.`}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-blue-600"
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
