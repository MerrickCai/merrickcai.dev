"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { HomeIcon, InformationCircleIcon, EnvelopeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import ThemeSwitcher from "@/ui/ThemeSwitcher";

const navLinks = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/about",
    label: "About",
    icon: InformationCircleIcon,
  },
  {
    href: "/projects",
    label: "Projects",
    icon: CodeBracketIcon,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: EnvelopeIcon,
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-700/20 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 hover:tracking-wide"
            >
              Merrick Cai
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg ${
                    isActive
                      ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
                  )}
                  <div className="relative z-10 flex items-center gap-2">
                    <Icon
                      className={`h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`}
                    />
                    <span className="transition-all duration-300 group-hover:font-semibold">{link.label}</span>
                  </div>

                  {/* Hover underline effect */}
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </Link>
              );
            })}
          </nav>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center">
            <ThemeSwitcher />
          </div>

          {/* Right side - Mobile */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer inline-flex items-center justify-center rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle mobile menu"
            >
              <div className="relative">
                <XMarkIcon
                  className={`h-6 w-6 absolute transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
                  }`}
                />
                <Bars3Icon
                  className={`h-6 w-6 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0 -rotate-180" : "opacity-100 rotate-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-200/20 dark:border-gray-700/20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            <nav className="flex flex-col py-2 px-4 space-y-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`opacity-0 group relative flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-md ${
                      isActive
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400"
                    } ${isMobileMenuOpen ? "animate-slideInRight" : ""}`}
                    style={{
                      animationDelay: `${index * 80}ms`,
                    }}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
                    )}
                    <div className="relative z-10 flex items-center gap-3">
                      <Icon
                        className={`h-5 w-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                          isActive
                            ? "text-blue-600 dark:text-blue-400"
                            : "group-hover:text-blue-600 dark:group-hover:text-blue-400"
                        }`}
                      />
                      <span className="transition-all duration-300 group-hover:font-semibold group-hover:tracking-wide">
                        {link.label}
                      </span>
                    </div>

                    {/* Mobile hover effect */}
                    <div className="absolute right-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
