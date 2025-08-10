import type { Metadata } from "next";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LanguageIcon,
  ArrowTopRightOnSquareIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Contact | MerrickCai.dev",
  description: "Get in touch with Merrick Cai - Ready to bring your ideas to life",
};

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="relative px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="relative z-2 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
            <SparklesIcon className="mr-2 h-4 w-4" />
            {`Let's connect`}
          </div>

          <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-white dark:via-blue-100 dark:to-indigo-100">
            Contact Me
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-lg leading-7 text-gray-600 sm:text-xl sm:leading-8 dark:text-gray-300">
            {`Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.`}
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-1/2 z-1 -translate-x-1/2 -translate-y-1/2 opacity-25">
          <div className="h-72 w-72 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl sm:h-96 sm:w-96"></div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Contact Information */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:mb-8 dark:text-white">Get In Touch</h2>

                <div className="space-y-4 sm:space-y-6">
                  <Link
                    href="mailto:merrickcai.dev@gmail.com"
                    className="group/item flex cursor-pointer items-center rounded-2xl bg-gray-50 p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-50 hover:shadow-md sm:p-6 dark:bg-gray-700/50 dark:hover:bg-blue-900/20"
                  >
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 group-hover/item:bg-blue-500 group-hover/item:text-white sm:mr-4 sm:h-12 sm:w-12 dark:bg-blue-900/30 dark:text-blue-400">
                      <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-base font-semibold text-gray-900 transition-colors duration-300 group-hover/item:text-blue-600 sm:text-lg dark:text-white dark:group-hover/item:text-blue-400">
                        merrickcai.dev@gmail.com
                      </p>
                    </div>
                    <div className="opacity-0 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:opacity-100">
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 text-blue-500 sm:h-5 sm:w-5" />
                    </div>
                  </Link>

                  <Link
                    href="tel:+12533499378"
                    className="group/item flex cursor-pointer items-center rounded-2xl bg-gray-50 p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-green-50 hover:shadow-md sm:p-6 dark:bg-gray-700/50 dark:hover:bg-green-900/20"
                  >
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600 transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 group-hover/item:bg-green-500 group-hover/item:text-white sm:mr-4 sm:h-12 sm:w-12 dark:bg-green-900/30 dark:text-green-400">
                      <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-base font-semibold text-gray-900 transition-colors duration-300 group-hover/item:text-green-600 sm:text-lg dark:text-white dark:group-hover/item:text-green-400">
                        (253) 349-9378
                      </p>
                    </div>
                    <div className="opacity-0 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:opacity-100">
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 text-green-500 sm:h-5 sm:w-5" />
                    </div>
                  </Link>

                  <div className="group/item flex items-center rounded-2xl bg-gray-50 p-4 transition-all hover:bg-purple-50 sm:p-6 dark:bg-gray-700/50 dark:hover:bg-purple-900/20">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600 transition-all group-hover/item:bg-purple-500 group-hover/item:text-white sm:mr-4 sm:h-12 sm:w-12 dark:bg-purple-900/30 dark:text-purple-400">
                      <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
                        Bellevue, WA (Open to Remote)
                      </p>
                    </div>
                  </div>

                  <div className="group/item flex items-center rounded-2xl bg-gray-50 p-4 transition-all hover:bg-orange-50 sm:p-6 dark:bg-gray-700/50 dark:hover:bg-orange-900/20">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-all group-hover/item:bg-orange-500 group-hover/item:text-white sm:mr-4 sm:h-12 sm:w-12 dark:bg-orange-900/30 dark:text-orange-400">
                      <LanguageIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Languages</p>
                      <p className="text-base font-semibold text-gray-900 sm:text-lg dark:text-white">
                        English, Mandarin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div className="group relative overflow-hidden rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl sm:p-8 dark:bg-gray-800/80">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="relative">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 sm:mb-8 dark:text-white">Professional Links</h2>

                <div className="space-y-4">
                  <Link
                    href="https://github.com/merrickcai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center rounded-2xl border-2 border-gray-200 bg-gray-50 p-4 transition-all hover:scale-[1.02] hover:border-gray-400 hover:bg-white hover:shadow-lg sm:p-6 dark:border-gray-600 dark:bg-gray-700/50 dark:hover:bg-gray-600"
                  >
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 sm:mr-4 sm:h-12 sm:w-12 dark:bg-gray-600">
                      <svg
                        className="h-5 w-5 text-gray-900 sm:h-6 sm:w-6 dark:text-gray-100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-semibold text-gray-900 sm:text-lg dark:text-white">GitHub</p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">github.com/merrickcai</p>
                    </div>
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-400 opacity-0 transition-all group-hover/link:translate-x-1 group-hover/link:opacity-100 sm:h-5 sm:w-5" />
                  </Link>

                  <Link
                    href="https://linkedin.com/in/merrickcai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center rounded-2xl border-2 border-gray-200 bg-gray-50 p-4 transition-all hover:scale-[1.02] hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg sm:p-6 dark:border-gray-600 dark:bg-gray-700/50 dark:hover:bg-blue-900/20"
                  >
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 sm:mr-4 sm:h-12 sm:w-12 dark:bg-blue-900/30">
                      <svg className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-base font-semibold text-gray-900 sm:text-lg dark:text-white">LinkedIn</p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">linkedin.com/in/merrickcai</p>
                    </div>
                    <ArrowTopRightOnSquareIcon className="group_hover/link:opacity-100 h-4 w-4 text-gray-400 opacity-0 transition-all group-hover/link:translate-x-1 sm:h-5 sm:w-5" />
                  </Link>
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:mt-8 sm:p-6 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <h3 className="mb-2 text-base font-bold text-gray-900 sm:mb-3 sm:text-lg dark:text-white">
                    Current Status
                  </h3>
                  <p className="mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base dark:text-gray-300">
                    Front-End Developer, Full Stack Developer
                  </p>
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    ✅ Available for new opportunities
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
            <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">{`Let's Start Something Great`}</h2>
            <p className="mb-6 text-lg text-blue-100 sm:mb-8 sm:text-xl">
              {`I'm always interested in discussing new opportunities and exciting projects.`}
            </p>
            <p className="text-base text-blue-200 sm:text-lg">
              Feel free to reach out through any of the channels above!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
