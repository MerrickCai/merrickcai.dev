"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="cursor-pointer group inline-flex items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 px-8 py-4 text-lg font-semibold text-gray-900 dark:text-gray-100 backdrop-blur-sm transition-all duration-200 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105"
    >
      <ArrowLeftIcon className="mr-2 h-5 w-5" />
      Go Back
    </button>
  );
}
