import Link from "next/link";

const commonProjectClassName =
  "p-6 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300";

const commonTitleClassName = "text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3";

export default function Projects() {
  return (
    <div className="flex flex-col h-auto w-full flex-grow px-4 py-8 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">My Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          {`Here are some of the projects I've worked on, showcasing my skills in frontend development, 
          full-stack applications, and modern web technologies.`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* NexusHeart Project */}
          <div className={commonProjectClassName}>
            <div className="flex items-center mb-4">
              <h2 className={commonTitleClassName}>NexusHeart</h2>
              <span className="ml-2 text-2xl">💕</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 uppercase tracking-wide font-medium">
              Frontend Development • Cross-Cultural Dating Platform
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A sophisticated platform designed to connect Chinese and American singles for meaningful cross-cultural
              relationships. I developed the entire frontend experience using modern React technologies and best
              practices.
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">🛠️ Tech Stack (Frontend):</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  Next.js 15.4.1
                </span>
                <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full">
                  Tailwind CSS v4
                </span>
                <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                  Supabase
                </span>
                <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                  next-intl
                </span>
                <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                  Heroicons
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                ✨ Key Features I Implemented:
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Bilingual support (English & Chinese) with next-intl</li>
                <li>• JWT authentication integration with custom backend</li>
                <li>• Responsive design with Tailwind CSS v4</li>
                <li>• Image optimization and compression</li>
                <li>• Toast notifications with Sonner</li>
                <li>• Analytics integration (Vercel Analytics)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                🔧 Backend Architecture (External Team):
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full">
                  Spring (Java)
                </span>
                <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                  AWS App Runner
                </span>
                <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                  AWS S3
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                href="https://nexusheart.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                Visit Website
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Sky Ladder Project (Current Blog) */}
          <div className={commonProjectClassName}>
            <h2 className={commonTitleClassName}>Sky Ladder</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 uppercase tracking-wide font-medium">
              Personal Blog • Current Project
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              My personal blog and portfolio website built with Next.js. Features a clean, modern design with dark mode
              support and responsive layout. Currently expanding with dynamic content capabilities.
            </p>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">🛠️ Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  Next.js 15
                </span>
                <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                  Heroicons
                </span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">🚀 Upcoming Features:</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Backend database integration with Vercel</li>
                <li>• Markdown and MDX support for blog posts</li>
                <li>• Enhanced dynamic content capabilities</li>
                <li>• SEO optimization</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
              >
                View Site
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {`More projects coming soon! I'm always working on something new.`}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Get In Touch
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
