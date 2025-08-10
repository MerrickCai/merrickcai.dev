"use client";

import {
  DocumentTextIcon,
  ArrowLeftIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function NotionContainer() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isFullscreen]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <motion.div
      layout
      className={`flex flex-col overflow-hidden bg-white/80 shadow-2xl backdrop-blur-sm dark:bg-gray-800/80 ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none" : "h-[calc(100dvh-(--spacing(16))-(--spacing(4)))] rounded-2xl"
      } `}
      transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
    >
      {/* Container Header */}
      <div className="flex-shrink-0 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-3 md:px-6 md:py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-red-900/20">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <DocumentTextIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Development Notes</h2>
              {isFullscreen && (
                <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">Press ESC to exit fullscreen</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className="inline-flex cursor-pointer items-center rounded-lg bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800 transition-colors duration-200 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-900/50"
              title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <ArrowsPointingInIcon className="mr-1 h-4 w-4" />
              ) : (
                <ArrowsPointingOutIcon className="mr-1 h-4 w-4" />
              )}
              {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>

            <Link
              href="https://merrickcai.notion.site/frontend-development"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-orange-100 px-3 py-2 text-sm font-medium text-orange-800 transition-colors duration-200 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-200 dark:hover:bg-orange-900/50"
            >
              Open in Notion
              <ArrowLeftIcon className="ml-1 h-3 w-3 rotate-45" />
            </Link>
          </div>
        </div>
      </div>

      {/* Notion Iframe */}
      <div className="relative flex-grow">
        <iframe
          src="https://merrickcai.notion.site/ebd/188e3a07cc988036a524c65fb43d2d06"
          allowFullScreen
          className="h-full w-full border-none"
          title="Merrick's Development Notes"
        />
      </div>
    </motion.div>
  );
}
