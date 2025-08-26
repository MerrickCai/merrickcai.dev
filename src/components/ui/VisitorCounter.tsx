import { getVisitorCount } from "@/services/visitorService";
import { EyeIcon } from "@heroicons/react/24/outline";

export default async function VisitorCounter() {
  const count = await getVisitorCount();

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-gray-800/80">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
      <div className="relative">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-200 dark:bg-blue-900/30">
          <EyeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Total Visitors</h3>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-blue-600 tabular-nums dark:text-blue-400">
            {count.toLocaleString("en-US")}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">unique visits</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Thank you for visiting my website!</p>
      </div>
    </div>
  );
}
