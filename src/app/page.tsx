import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/layout/RevealOnScroll";
import TypewriterText from "@/components/ui/TypewriterText";
import FloatingParticles from "@/components/ui/FloatingParticles";

import {
  ArrowRightIcon,
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
      <section className="relative px-4 pt-20 pb-16 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="relative z-2 mx-auto max-w-7xl">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                <SparklesIcon className="mr-2 h-4 w-4" />
                Welcome to my digital space
              </div>

              <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
                Merrick Cai
              </h1>

              {/* Typewriter Effect */}
              <div className="mb-6">
                <TypewriterText
                  texts={[
                    "Front-end Engineer",
                    "React Developer",
                    "Full-stack Developer",
                    "Problem Solver",
                    "Next.js Expert",
                  ]}
                  className="flex h-7 items-center justify-center text-2xl font-semibold text-blue-600 dark:text-blue-400"
                  speed={120}
                  pause={2500}
                />
              </div>

              <p className="mx-auto mb-8 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300">
                Crafting exceptional digital experiences with React, Next.js, and modern web technologies. Building the
                future, one component at a time.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/projects"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
                >
                  View My Work
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-xl border-2 border-gray-300 bg-white/80 px-8 py-4 text-lg font-semibold text-gray-900 backdrop-blur-sm transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-800/80 dark:text-gray-100 dark:hover:bg-blue-900/20"
                >
                  Get In Touch
                  <EnvelopeIcon className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 opacity-30">
            <div className="h-96 w-96 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl"></div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll delay={0.2}>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">What I Do</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                Passionate about creating digital solutions that make a difference
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <RevealOnScroll delay={0.2}>
              {/* About Me Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                    <UserIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">About Me</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Passionate developer with expertise in React 19, Next.js 15, and TypeScript. Currently studying at
                    Rutgers University with a perfect 4.0 GPA.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Learn more
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              {/* Featured Project Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    <StarIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Featured Project</h3>
                  <h4 className="mb-2 font-semibold text-purple-600 dark:text-purple-400">NexusHeart 💕</h4>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Cross-cultural dating platform built with Next.js 15, TypeScript, and Supabase. Connecting hearts
                    across cultures.
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
                      Next.js 15
                    </span>
                    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200">
                      TypeScript
                    </span>
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-200">
                      Tailwind CSS
                    </span>
                  </div>
                  <Link
                    href="https://nexusheart.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                  >
                    Visit Live Site
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.6}>
              {/* My Projects Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <CodeBracketIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">My Projects</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Explore my portfolio of web applications, from e-commerce platforms to innovative digital solutions
                    using cutting-edge technologies.
                  </p>
                  <Link
                    href="/projects"
                    className="inline-flex items-center font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                  >
                    View All Projects
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              {/* Development Notes Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
                    <DocumentTextIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Development Notes</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Detailed documentation of my learning journey, best practices, and insights from frontend
                    development projects.
                  </p>
                  <Link
                    href="https://merrickcai.notion.site/Frontend-Development-188e3a07cc988036a524c65fb43d2d06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-medium text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300"
                  >
                    View on Notion
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              {/* Contact Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/30">
                    <EnvelopeIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">{`Let's Connect`}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Always open to discussing new opportunities, collaborations, or just having a chat about technology
                    and innovation.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    Get In Touch
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.6}>
              {/* Upcoming Features Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800/80">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/30">
                    <RocketLaunchIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Coming Soon</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Exciting updates ahead! Backend integration with Vercel, dynamic content, and full Markdown/MDX
                    support for rich content creation.
                  </p>
                  <span className="inline-flex items-center font-medium text-violet-600 dark:text-violet-400">
                    Stay tuned
                    <SparklesIcon className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-16 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-12 shadow-2xl">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Ready to Build Something Amazing?</h2>
              <p className="mb-8 text-xl text-blue-100">
                {`Let's collaborate and bring your ideas to life with modern web technologies.`}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition-all duration-200 hover:scale-105 hover:bg-gray-100"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-white hover:text-blue-600"
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
