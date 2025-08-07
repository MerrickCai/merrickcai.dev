"use client";

import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

type Theme = "light" | "dark" | "system";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  const themeScript = () => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = storedTheme === "dark" || (storedTheme === null && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
  };

  const removeTheme = () => {
    setTheme("system");
    localStorage.removeItem("theme");
    themeScript();
  };

  function applyTheme(theme: Theme) {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    themeScript();
  }

  useEffect(() => {
    setMounted(true);
    const storedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(storedTheme);
  }, []);

  const themes = [
    { key: "light", icon: SunIcon, label: "Light" },
    { key: "dark", icon: MoonIcon, label: "Dark" },
    { key: "system", icon: ComputerDesktopIcon, label: "System" },
  ] as const;

  return (
    <div className="flex rounded-xl bg-gray-100 dark:bg-gray-800 p-1">
      {themes.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          onClick={() => (key === "system" ? removeTheme() : applyTheme(key))}
          className={`cursor-pointer group relative flex items-center justify-center rounded-lg px-3 py-2 text-xs font-medium transition-all duration-200 hover:scale-105 ${
            mounted && theme === key
              ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
          aria-label={`Switch to ${label} theme`}
        >
          {mounted && theme === key && (
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
          )}
          <Icon className="relative z-10 h-4 w-4" />
          <span className="relative z-10 ml-1 hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
