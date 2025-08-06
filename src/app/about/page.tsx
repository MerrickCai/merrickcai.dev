import { MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col h-auto w-full flex-grow px-4 py-8 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 text-center">About Me</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Professional Summary */}
          <div className="lg:col-span-2 p-8 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">👋 Professional Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Front-end engineer fluent in React 19, Next 15, TypeScript, and Tailwind CSS 4, shipping high-performance
              SSR apps on Vercel. Experienced in full-stack delivery with Node.js, Supabase, and secure RESTful APIs,
              turning product ideas into fast, scalable experiences.
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <MapPinIcon className="w-4 h-4 mr-2" />
              Bellevue, WA (Open to Remote)
            </div>
          </div>

          {/* Quick Info */}
          <div className="p-8 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">📋 Quick Info</h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Role:</span>
                <p className="text-gray-700 dark:text-gray-300">Front-End Developer, Full Stack Developer</p>
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Languages:</span>
                <p className="text-gray-700 dark:text-gray-300">English, Mandarin</p>
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-gray-100">Contact:</span>
                <p className="text-gray-700 dark:text-gray-300">(253) 349-9378</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Technical Skills */}
          <div className="p-8 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">🛠️ Technical Skills</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    HTML5
                  </span>
                  <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    CSS3
                  </span>
                  <span className="px-3 py-1 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full">
                    React 19
                  </span>
                  <span className="px-3 py-1 text-xs bg-black text-white dark:bg-white dark:text-black rounded-full">
                    Next.js 15
                  </span>
                  <span className="px-3 py-1 text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full">
                    Tailwind CSS 4
                  </span>
                  <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                    Zustand
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                    Node.js
                  </span>
                  <span className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                    Express
                  </span>
                  <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                    Supabase
                  </span>
                  <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    REST API
                  </span>
                  <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                    JWT Authentication
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">Build & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                    Vite
                  </span>
                  <span className="px-3 py-1 text-xs bg-black text-white dark:bg-white dark:text-black rounded-full">
                    Vercel
                  </span>
                  <span className="px-3 py-1 text-xs bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full">
                    Git & GitHub Actions
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">CS Core</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full">
                    C
                  </span>
                  <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                    C++
                  </span>
                  <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                    Data Structures
                  </span>
                  <span className="px-3 py-1 text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">
                    Algorithms
                  </span>
                  <span className="px-3 py-1 text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full">
                    Operating Systems
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">UX</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full">
                    Responsive Design
                  </span>
                  <span className="px-3 py-1 text-xs bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">
                    Flexbox
                  </span>
                  <span className="px-3 py-1 text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">
                    Animation
                  </span>
                  <span className="px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                    Accessibility
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="p-8 border rounded-xl shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">🎓 Education</h2>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Rutgers University – New Brunswick
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                B.S. Electrical and Computer Engineering
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>📅 Sep 2023 - Expected Jan 2026</p>
                <p>📊 GPA: 4.0/4.0</p>
                <p>{`🏆 Dean's List`}</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Academic Excellence</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Maintaining perfect GPA while pursuing a rigorous engineering curriculum, demonstrating strong
                analytical and problem-solving skills.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Passionate about creating exceptional user experiences and building scalable web applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
            >
              <span>Get In Touch</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 border-2 border-gray-200 dark:border-gray-500 text-gray-800 dark:text-gray-200 font-semibold rounded-xl shadow-md hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 transform hover:scale-[1.02] transition-all duration-200"
            >
              <span>View Projects</span>
              <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
