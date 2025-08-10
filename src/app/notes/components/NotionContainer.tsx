import { DocumentTextIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotionContainer() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white/80 shadow-2xl backdrop-blur-sm dark:bg-gray-800/80">
      {/* Container Header */}
      <div className="border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-3 md:px-6 md:py-4 dark:border-gray-700 dark:from-orange-900/20 dark:to-red-900/20">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <DocumentTextIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Frontend Development Notes</h2>
            </div>
          </div>
          <Link
            href="https://merrickcai.notion.site/frontend-development"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-orange-100 px-3 py-2 text-sm font-medium text-orange-800 hover:bg-orange-200 dark:bg-orange-900/30 dark:text-orange-200 dark:hover:bg-orange-900/50"
          >
            Open in Notion
            <ArrowLeftIcon className="ml-1 h-3 w-3 rotate-45" />
          </Link>
        </div>
      </div>

      {/* Notion Iframe */}
      <div className="relative">
        <iframe
          src="https://merrickcai.notion.site/ebd/188e3a07cc988036a524c65fb43d2d06"
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
          className="w-full"
          title="Merrick's Development Notes"
        />
      </div>
    </div>
  );
}
