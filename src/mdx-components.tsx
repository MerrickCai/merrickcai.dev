import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "success" | "error" | "tip";
  children: React.ReactNode;
}) {
  const styles = {
    info: {
      container: "bg-blue-100/90 border-blue-300/60 backdrop-blur-sm dark:bg-blue-800/30 dark:border-blue-600/60",
      icon: <InformationCircleIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      text: "text-blue-900 dark:text-blue-100",
    },
    warning: {
      container:
        "bg-yellow-50/80 border-yellow-200/50 backdrop-blur-sm dark:bg-yellow-900/20 dark:border-yellow-700/50",
      icon: <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />,
      text: "text-yellow-900 dark:text-yellow-100",
    },
    success: {
      container: "bg-green-50/80 border-green-200/50 backdrop-blur-sm dark:bg-green-900/20 dark:border-green-700/50",
      icon: <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />,
      text: "text-green-900 dark:text-green-100",
    },
    error: {
      container: "bg-red-50/80 border-red-200/50 backdrop-blur-sm dark:bg-red-900/20 dark:border-red-700/50",
      icon: <XCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400" />,
      text: "text-red-900 dark:text-red-100",
    },
    tip: {
      container:
        "bg-purple-50/80 border-purple-200/50 backdrop-blur-sm dark:bg-purple-900/20 dark:border-purple-700/50",
      icon: <LightBulbIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
      text: "text-purple-900 dark:text-purple-100",
    },
  };

  const style = styles[type];

  return (
    <div className={`my-6 rounded-xl border p-4 shadow-lg sm:my-8 sm:rounded-2xl sm:p-6 ${style.container}`}>
      <div className="flex items-start gap-2 sm:gap-4">
        <div className="mt-0.5 flex-shrink-0">{style.icon}</div>
        <div className={`${style.text} [&>*:first-child]:mt-0 [&>*:last-child]:mb-0`}>{children}</div>
      </div>
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded-md bg-gradient-to-r from-yellow-200/80 to-yellow-300/80 px-1.5 py-0.5 text-gray-900 shadow-sm sm:px-2 sm:py-1 dark:from-yellow-600/30 dark:to-yellow-500/30 dark:text-yellow-100">
      {children}
    </mark>
  );
}

function FeatureGrid({ children }: { children: React.ReactNode }) {
  return <div className="my-8 grid gap-4 sm:my-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">{children}</div>;
}

function FeatureCard({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200/50 bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-blue-200/50 hover:shadow-xl sm:rounded-2xl sm:p-6 dark:border-gray-700/50 dark:bg-gray-800/80 dark:hover:border-blue-600/50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
      <div className="relative">
        {icon && <div className="mb-3 text-2xl sm:mb-4 sm:text-3xl">{icon}</div>}
        <h3 className="mb-2 text-base font-bold text-gray-900 sm:mb-3 sm:text-lg dark:text-white">{title}</h3>
        <div className="text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-300">{children}</div>
      </div>
    </div>
  );
}

function ComparisonTable({ data }: { data: Array<{ feature: string; before: string; after: string }> }) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200/50 shadow-xl backdrop-blur-sm sm:my-12 sm:rounded-2xl dark:border-gray-700/50">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200/50 dark:divide-gray-700/50">
          <thead className="bg-gray-50/80 dark:bg-gray-800/80">
            <tr>
              <th className="px-3 py-3 text-left text-xs font-bold tracking-wider text-gray-600 uppercase sm:px-6 sm:py-4 dark:text-gray-300">
                Feature
              </th>
              <th className="px-3 py-3 text-left text-xs font-bold tracking-wider text-gray-600 uppercase sm:px-6 sm:py-4 dark:text-gray-300">
                Before
              </th>
              <th className="px-3 py-3 text-left text-xs font-bold tracking-wider text-gray-600 uppercase sm:px-6 sm:py-4 dark:text-gray-300">
                After
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200/50 bg-white/80 dark:divide-gray-700/50 dark:bg-gray-900/80">
            {data.map((row, index) => (
              <tr key={index} className="transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-800/50">
                <td className="px-3 py-3 text-xs font-semibold text-gray-900 sm:px-6 sm:py-4 sm:text-sm dark:text-white">
                  {row.feature}
                </td>
                <td className="px-3 py-3 text-xs text-red-600 sm:px-6 sm:py-4 sm:text-sm dark:text-red-400">
                  {row.before}
                </td>
                <td className="px-3 py-3 text-xs text-green-600 sm:px-6 sm:py-4 sm:text-sm dark:text-green-400">
                  {row.after}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const components = {
  // Headings with modern styling and mobile adaptation
  h1: ({ children, ...props }) => (
    <h1
      className="mt-8 mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-2xl leading-tight font-bold tracking-tight text-transparent first:mt-0 sm:mt-12 sm:mb-8 sm:text-4xl dark:from-white dark:via-blue-100 dark:to-indigo-100"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="mt-8 mb-4 text-2xl leading-tight font-bold tracking-tight text-gray-900 sm:mt-12 sm:mb-6 sm:text-3xl dark:text-white"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      className="mt-8 mb-3 text-xl leading-tight font-bold text-gray-900 sm:mt-12 sm:mb-4 sm:text-2xl dark:text-white"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4
      className="mt-6 mb-2 text-lg leading-tight font-bold text-gray-900 sm:mt-10 sm:mb-3 sm:text-xl dark:text-white"
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5
      className="mt-6 mb-2 text-base leading-tight font-bold text-gray-900 sm:mt-8 sm:mb-3 sm:text-lg dark:text-white"
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6
      className="mt-4 mb-2 text-sm leading-tight font-bold text-gray-900 sm:mt-6 sm:text-base dark:text-white"
      {...props}
    >
      {children}
    </h6>
  ),

  // Paragraphs with better spacing
  p: ({ children, ...props }) => (
    <p className="mb-4 text-base leading-relaxed text-gray-700 sm:mb-6 sm:text-lg dark:text-gray-300" {...props}>
      {children}
    </p>
  ),

  // Enhanced Lists with proper mobile styling
  ul: ({ children, ...props }) => (
    <ul className="mb-6 ml-4 space-y-2 sm:mb-8 sm:ml-6 sm:space-y-3" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-6 ml-4 space-y-2 sm:mb-8 sm:ml-6 sm:space-y-3" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="flex items-start gap-2 leading-relaxed text-gray-700 dark:text-gray-300" {...props}>
      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 sm:mt-2 sm:h-2 sm:w-2" />
      <div className="flex-1">{children}</div>
    </li>
  ),

  // Enhanced links
  a: ({ href, children, ...props }) => (
    <Link
      href={href as string}
      className="font-semibold text-blue-600 underline decoration-blue-600/30 decoration-2 underline-offset-2 transition-all duration-200 hover:text-blue-800 hover:decoration-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
      {...props}
    >
      {children}
    </Link>
  ),

  // Modern blockquotes
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-6 rounded-r-xl border-l-4 border-blue-500 bg-gradient-to-r from-blue-50/80 to-transparent p-4 italic shadow-lg backdrop-blur-sm sm:my-8 sm:rounded-r-2xl sm:p-6 dark:border-blue-400 dark:from-blue-900/20"
      {...props}
    >
      <div className="text-gray-700 dark:text-gray-300 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">{children}</div>
    </blockquote>
  ),

  // The styles is handled by rehype pretty code and Custom CSS file
  pre: ({ children, ...props }) => <pre {...props}>{children}</pre>,

  code: ({ children, ...props }) => <code {...props}>{children}</code>,

  // Modern tables with better mobile support
  table: ({ children, ...props }) => (
    <div className="my-8 overflow-hidden rounded-xl border border-gray-200/50 shadow-xl backdrop-blur-sm sm:my-10 sm:rounded-2xl dark:border-gray-700/50">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200/50 dark:divide-gray-700/50" {...props}>
          {children}
        </table>
      </div>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-gray-50/80 dark:bg-gray-800/80" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody className="divide-y divide-gray-200/50 bg-white/80 dark:divide-gray-700/50 dark:bg-gray-900/80" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => (
    <tr className="transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-800/50" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th
      className="px-3 py-3 text-left text-xs font-bold tracking-wider text-gray-600 uppercase sm:px-6 sm:py-4 dark:text-gray-300"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-3 py-3 text-xs text-gray-900 sm:px-6 sm:py-4 sm:text-sm dark:text-gray-100" {...props}>
      {children}
    </td>
  ),

  // Enhanced images with mobile support
  img: ({ src, alt, ...props }) => (
    <div className="my-8 flex justify-center sm:my-10">
      <div className="overflow-hidden rounded-xl shadow-xl sm:rounded-2xl">
        <Image
          src={src as string}
          alt={alt || ""}
          width={800}
          height={400}
          className="h-auto w-full max-w-full object-cover"
          {...props}
        />
      </div>
    </div>
  ),

  // Modern horizontal rule
  hr: () => (
    <div className="my-12 flex items-center justify-center sm:my-16">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
      <div className="mx-3 flex space-x-1 sm:mx-4">
        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 sm:h-2 sm:w-2"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 sm:h-2 sm:w-2"></div>
        <div className="h-1.5 w-1.5 rounded-full bg-purple-500 sm:h-2 sm:w-2"></div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
    </div>
  ),

  // Enhanced text formatting
  strong: ({ children, ...props }) => (
    <strong className="font-bold text-gray-900 dark:text-white" {...props}>
      {children}
    </strong>
  ),

  em: ({ children, ...props }) => (
    <em className="text-gray-800 italic dark:text-gray-200" {...props}>
      {children}
    </em>
  ),

  del: ({ children, ...props }) => (
    <del className="text-gray-500 line-through dark:text-gray-400" {...props}>
      {children}
    </del>
  ),

  // Custom components
  Callout,
  Highlight,
  FeatureGrid,
  FeatureCard,
  ComparisonTable,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
