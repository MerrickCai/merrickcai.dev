import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import TypewriterText from "@/components/ui/TypewriterText";
import FloatingParticles from "@/components/ui/FloatingParticles";

import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  UserIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  StarIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Home | MerrickCai.dev",
  description:
    "Welcome to Merrick Cai's personal website - Front-end Engineer, Full-stack Developer, and Problem Solver",
};

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Floating Particles Background */}
      <FloatingParticles count={30} />

      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="relative z-2 mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
              <SparklesIcon className="mr-2 h-4 w-4" />
              Welcome to my digital space
            </div>

            <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
              Merrick Cai
            </h1>

            {/* Typewriter Effect */}
            <div className="mb-4">
              <TypewriterText
                texts={[
                  "Front-end Engineer",
                  "React Developer",
                  "Full-stack Developer",
                  "Problem Solver",
                  "Next.js Expert",
                ]}
                className="flex h-7 items-center justify-center text-xl font-semibold text-blue-600 sm:text-2xl dark:text-blue-400"
                speed={120}
                pause={2500}
              />
            </div>

            <p className="mx-auto mb-6 max-w-2xl text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 dark:text-gray-300">
              Crafting exceptional digital experiences with React, Next.js, and modern web technologies. Building the
              future, one component at a time.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
              >
                View My Work
                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white/80 px-6 py-3 text-base font-semibold text-gray-900 backdrop-blur-sm transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 sm:px-8 sm:py-4 sm:text-lg dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-100 dark:hover:bg-blue-900/20"
              >
                Get In Touch
                <EnvelopeIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 opacity-25">
            <div className="h-72 w-72 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl sm:h-96 sm:w-96"></div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll delay={0.2}>
            <div className="mb-12 text-center sm:mb-16">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:mb-4 sm:text-4xl dark:text-white">What I Do</h2>
              <p className="mx-auto max-w-2xl text-base text-gray-600 sm:text-lg dark:text-gray-300">
                Passionate about creating digital solutions that make a difference
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            <RevealOnScroll delay={0.2}>
              {/* About Me Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 sm:mb-4 sm:h-12 sm:w-12 dark:bg-blue-900/30">
                    <UserIcon className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6 dark:text-blue-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:mb-3 sm:text-xl dark:text-white">
                    About Me
                  </h3>
                  <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base dark:text-gray-300">
                    Passionate developer with expertise in React 19, Next.js 15, and TypeScript. Currently studying at
                    Rutgers University with a perfect 4.0 GPA.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 sm:text-base dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Learn more
                    <ArrowRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              {/* Featured Project Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 sm:mb-4 sm:h-12 sm:w-12 dark:bg-purple-900/30">
                    <StarIcon className="h-5 w-5 text-purple-600 sm:h-6 sm:w-6 dark:text-purple-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:mb-3 sm:text-xl dark:text-white">
                    Featured Project
                  </h3>
                  <h4 className="mb-1 text-sm font-semibold text-purple-600 sm:mb-2 sm:text-base dark:text-purple-400">
                    NexusHeart 💕
                  </h4>
                  <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base dark:text-gray-300">
                    Cross-cultural dating platform built with Next.js 15, TypeScript, and Supabase. Connecting hearts
                    across cultures.
                  </p>
                  <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 sm:px-3 sm:text-xs dark:bg-blue-900/30 dark:text-blue-200">
                      Next.js 15
                    </span>
                    <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800 sm:px-3 sm:text-xs dark:bg-indigo-900/30 dark:text-indigo-200">
                      TypeScript
                    </span>
                    <span className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-800 sm:px-3 sm:text-xs dark:bg-cyan-900/30 dark:text-cyan-200">
                      Tailwind CSS
                    </span>
                  </div>
                  <Link
                    href="https://nexusheart.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 sm:text-base dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Visit Live Site
                    <ArrowRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.6}>
              {/* My Projects Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 sm:mb-4 sm:h-12 sm:w-12 dark:bg-green-900/30">
                    <CodeBracketIcon className="h-5 w-5 text-green-600 sm:h-6 sm:w-6 dark:text-green-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:mb-3 sm:text-xl dark:text-white">
                    My Projects
                  </h3>
                  <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base dark:text-gray-300">
                    Explore my portfolio of web applications, from e-commerce platforms to innovative digital solutions
                    using cutting-edge technologies.
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 sm:text-base dark:text-green-400 dark:hover:text-green-300"
                  >
                    View All Projects
                    <ArrowRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              {/* Development Notes Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 sm:mb-4 sm:h-12 sm:w-12 dark:bg-orange-900/30">
                    <DocumentTextIcon className="h-5 w-5 text-orange-600 sm:h-6 sm:w-6 dark:text-orange-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:mb-3 sm:text-xl dark:text-white">
                    Development Notes
                  </h3>
                  <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base dark:text-gray-300">
                    Detailed documentation of my learning journey, best practices, and insights from frontend
                    development projects.
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <Link
                      href="/notes"
                      className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 sm:text-base dark:text-orange-400 dark:hover:text-orange-300"
                    >
                      View Here
                      <ArrowRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                    <Link
                      href="https://merrickcai.notion.site/frontend-development"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 sm:text-base dark:text-orange-400 dark:hover:text-orange-300"
                    >
                      View on Notion
                      <ArrowTopRightOnSquareIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              {/* Contact Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 sm:mb-4 sm:h-12 sm:w-12 dark:bg-teal-900/30">
                    <EnvelopeIcon className="h-5 w-5 text-teal-600 sm:h-6 sm:w-6 dark:text-teal-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:mb-3 sm:text-xl dark:text-white">{`Let's Connect`}</h3>
                  <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base dark:text-gray-300">
                    Always open to discussing new opportunities, collaborations, or just having a chat about technology
                    and innovation.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 sm:text-base dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    Get In Touch
                    <ArrowRightIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.6}>
              {/* Upcoming Features Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 sm:mb-4 sm:h-12 sm:w-12 dark:bg-violet-900/30">
                    <RocketLaunchIcon className="h-5 w-5 text-violet-600 sm:h-6 sm:w-6 dark:text-violet-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:mb-3 sm:text-xl dark:text-white">
                    Coming Soon
                  </h3>
                  <p className="mb-3 text-sm text-gray-600 sm:mb-4 sm:text-base dark:text-gray-300">
                    Exciting updates ahead! Backend integration with Vercel, dynamic content, and full Markdown/MDX
                    support for rich content creation.
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-violet-600 sm:text-base dark:text-violet-400">
                    Stay tuned
                    <SparklesIcon className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 shadow-2xl sm:p-12">
              <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
                Ready to Build Something Amazing?
              </h2>
              <p className="mb-6 text-lg text-blue-100 sm:mb-8 sm:text-xl">
                {`Let's collaborate and bring your ideas to life with modern web technologies.`}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-blue-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100 sm:px-8 sm:py-4 sm:text-lg"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-blue-600 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
}
