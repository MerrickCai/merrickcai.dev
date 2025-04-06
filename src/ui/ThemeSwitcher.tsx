"use client";

import { useState, useEffect } from "react";

const commonClassNames =
  "cursor-pointer w-7 h-8 md:w-9 md:h-9 text-center text-sm transition-colors rounded";
const activeClassNames = "bg-gray-900 text-white dark:bg-white dark:text-black";
const notActiveClassNames =
  "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700";

type Theme = "light" | "dark" | "system";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system");
  const [hasMounted, setHasMounted] = useState(false);

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
    const storedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setHasMounted(true);
    setTheme(storedTheme);
  }, []);

  if (!hasMounted)
    return <div className="w-21 md:w-27 h-8 md:h-9 rounded border border-transparent"></div>;

  return (
    <div
      className={`animate-fadeIn w-21 md:w-27 h-8 md:h-9 flex flex-row rounded overflow-hidden border border-gray-300 dark:border-gray-600`}
    >
      <button
        onClick={() => {
          applyTheme("light");
        }}
        className={`${commonClassNames} ${
          theme === "light" ? activeClassNames : notActiveClassNames
        } `}
      >
        🌞
      </button>
      <button
        onClick={() => {
          applyTheme("dark");
        }}
        className={`${commonClassNames} ${
          theme === "dark" ? activeClassNames : notActiveClassNames
        } `}
      >
        🌙
      </button>
      <button
        onClick={removeTheme}
        className={`${commonClassNames} ${
          theme === "system" ? activeClassNames : notActiveClassNames
        } `}
      >
        🖥️
      </button>
    </div>
  );
}
