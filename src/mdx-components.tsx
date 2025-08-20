import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

function MdxImage({ src = "", alt = "", ...props }: ImageProps) {
  // Statically imported image
  if (typeof src !== "string") {
    return (
      <div className="my-4 flex justify-center sm:my-6">
        <div className="relative w-[90%] max-w-3xl overflow-hidden rounded-md bg-gray-50 p-1.5 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl dark:bg-gray-800 dark:ring-gray-700/50">
          <div className="overflow-hidden rounded-md">
            <Image
              {...(props as ImageProps)}
              src={src}
              alt={alt}
              sizes="90vw"
              placeholder="blur"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    );
  }

  // Remote image (absolute external URL)
  if (src.startsWith("http")) {
    return (
      <div className="my-4 flex justify-center sm:my-6">
        <div className="relative w-[90%] max-w-3xl overflow-hidden rounded-md bg-gray-50 p-1.5 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl dark:bg-gray-800 dark:ring-gray-700/50">
          <div className="relative aspect-video overflow-hidden rounded-md">
            <Image {...(props as ImageProps)} src={src} alt={alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      </div>
    );
  }

  // Internal path URL string (inside public folder)
  return (
    <div className="my-4 flex justify-center sm:my-6">
      <div className="relative w-[90%] max-w-3xl overflow-hidden rounded-md bg-gray-50 p-1.5 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl dark:bg-gray-800 dark:ring-gray-700/50">
        <div className="relative aspect-video overflow-hidden rounded-md">
          <Image {...(props as ImageProps)} src={src} alt={alt} fill sizes="90vw" className="object-contain" />
        </div>
      </div>
    </div>
  );
}

function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "success" | "error" | "tip";
  children: React.ReactNode;
}) {
  const styles = {
    info: {
      container: "bg-blue-50/80 border-blue-200 dark:bg-blue-950/30 dark:border-blue-700/50",
      icon: <InformationCircleIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />,
      text: "text-blue-900 dark:text-blue-100",
    },
    warning: {
      container: "bg-amber-50/80 border-amber-200 dark:bg-amber-950/30 dark:border-amber-700/50",
      icon: <ExclamationTriangleIcon className="h-4 w-4 text-amber-600 dark:text-amber-400" />,
      text: "text-amber-900 dark:text-amber-100",
    },
    success: {
      container: "bg-emerald-50/80 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-700/50",
      icon: <CheckCircleIcon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />,
      text: "text-emerald-900 dark:text-emerald-100",
    },
    error: {
      container: "bg-red-50/80 border-red-200 dark:bg-red-950/30 dark:border-red-700/50",
      icon: <XCircleIcon className="h-4 w-4 text-red-600 dark:text-red-400" />,
      text: "text-red-900 dark:text-red-100",
    },
    tip: {
      container: "bg-violet-50/80 border-violet-200 dark:bg-violet-950/30 dark:border-violet-700/50",
      icon: <LightBulbIcon className="h-4 w-4 text-violet-600 dark:text-violet-400" />,
      text: "text-violet-900 dark:text-violet-100",
    },
  };

  const style = styles[type];

  return (
    <div
      className={`my-4 rounded-lg border p-4 shadow-sm transition-all duration-200 hover:shadow-md sm:my-5 sm:p-5 ${style.container}`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex-shrink-0 transition-transform duration-200 hover:scale-110">{style.icon}</div>
        <div className={`text-sm ${style.text} [&>*:first-child]:mt-0 [&>*:last-child]:mb-0`}>{children}</div>
      </div>
    </div>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded bg-yellow-200 px-1.5 py-0.5 text-sm text-gray-900 dark:bg-yellow-500/30 dark:text-yellow-100">
      {children}
    </mark>
  );
}

function FeatureGrid({ children }: { children: React.ReactNode }) {
  return <div className="my-6 grid gap-4 sm:my-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">{children}</div>;
}

function FeatureCard({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-5 dark:border-gray-700 dark:bg-gray-800">
      <div className="relative">
        {icon && <div className="mb-3 text-xl sm:text-2xl">{icon}</div>}
        <h3 className="mb-2 text-base font-semibold text-gray-900 transition-colors duration-200 group-hover:text-indigo-600 sm:text-lg dark:text-white dark:group-hover:text-indigo-400">
          {title}
        </h3>
        <div className="text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-300">{children}</div>
      </div>
    </div>
  );
}

function DisplayBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 dark:border-gray-600 dark:bg-gray-800/50">
      {children}
    </div>
  );
}

const components = {
  // Headings
  h1: ({ children, ...props }) => (
    <div className="mt-6 mb-4 first:mt-0 sm:mb-5">
      <h1
        className="relative pl-4 text-2xl font-bold text-gray-900 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:rounded-full before:bg-indigo-500 sm:text-3xl dark:text-white"
        {...props}
      >
        {children}
      </h1>
    </div>
  ),
  h2: ({ children, ...props }) => (
    <div className="mt-8 mb-4 sm:mt-10 sm:mb-5">
      <h2 className="text-xl font-semibold text-indigo-600 sm:text-2xl dark:text-indigo-400" {...props}>
        {children}
      </h2>
    </div>
  ),
  h3: ({ children, ...props }) => (
    <div className="mt-6 mb-3 sm:mt-8 sm:mb-4">
      <h3 className="text-lg font-medium text-emerald-600 sm:text-xl dark:text-emerald-400" {...props}>
        {children}
      </h3>
    </div>
  ),
  h4: ({ children, ...props }) => (
    <div className="mt-5 mb-2 sm:mt-6 sm:mb-3">
      <h4 className="text-base font-medium text-purple-600 sm:text-lg dark:text-purple-400" {...props}>
        {children}
      </h4>
    </div>
  ),
  h5: ({ children, ...props }) => (
    <div className="mt-4 mb-2 sm:mt-5 sm:mb-3">
      <h5
        className="text-sm font-medium tracking-wide text-amber-600 uppercase sm:text-base dark:text-amber-400"
        {...props}
      >
        {children}
      </h5>
    </div>
  ),
  h6: ({ children, ...props }) => (
    <h6 className="mt-4 mb-2 text-sm font-semibold text-rose-600 sm:text-base dark:text-rose-400" {...props}>
      {children}
    </h6>
  ),

  // Paragraphs
  p: ({ children, ...props }) => (
    <p className="mb-4 text-sm leading-relaxed text-gray-700 sm:text-base dark:text-gray-300" {...props}>
      {children}
    </p>
  ),

  // Lists
  ul: ({ children, ...props }) => (
    <ul className="mb-4 ml-4 space-y-1 sm:mb-6 sm:ml-6 sm:space-y-2 [&_ul]:mt-2 [&_ul]:mb-0" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-4 ml-4 space-y-1 sm:mb-6 sm:ml-6 sm:space-y-2 [&_ol]:mt-2 [&_ol]:mb-0" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="flex items-start gap-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300" {...props}>
      <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-500 sm:mt-2 sm:h-1.5 sm:w-1.5" />
      <div className="flex-1">{children}</div>
    </li>
  ),

  // Links
  a: ({ href, children, ...props }) => (
    <Link
      href={href as string}
      className="font-medium text-indigo-600 underline decoration-indigo-600/30 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-600/60 dark:text-indigo-400 dark:hover:text-indigo-300"
      {...props}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  ),

  // Blockquotes
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="my-4 rounded-r-lg border-l-3 border-indigo-500 bg-indigo-50/50 p-4 text-sm italic shadow-sm sm:my-6 sm:p-5 dark:border-indigo-400 dark:bg-indigo-950/20"
      {...props}
    >
      <div className="text-gray-700 dark:text-gray-300 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">{children}</div>
    </blockquote>
  ),

  // The styles is handled by rehype pretty code and Custom CSS file
  pre: ({ children, ...props }) => <pre {...props}>{children}</pre>,
  code: ({ children, ...props }) => <code {...props}>{children}</code>,

  // Tables
  table: ({ children, ...props }) => (
    <div className="my-6 overflow-hidden rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props}>
          {children}
        </table>
      </div>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-gray-50 dark:bg-gray-700" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => (
    <tr className="divide-x divide-gray-200 hover:bg-gray-50 dark:divide-gray-600 dark:hover:bg-gray-700" {...props}>
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th
      className="px-4 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100" {...props}>
      {children}
    </td>
  ),

  // Horizontal rule
  hr: () => (
    <div className="my-8 flex items-center justify-center">
      <div className="h-px w-full bg-gray-300 dark:bg-gray-600"></div>
      <div className="mx-4 flex space-x-1">
        <div className="h-1 w-1 rounded-full bg-indigo-500"></div>
        <div className="h-1 w-1 rounded-full bg-purple-500"></div>
        <div className="h-1 w-1 rounded-full bg-pink-500"></div>
      </div>
      <div className="h-px w-full bg-gray-300 dark:bg-gray-600"></div>
    </div>
  ),

  // Text formatting
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-gray-900 dark:text-white" {...props}>
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
  Image: MdxImage,
  Callout,
  Highlight,
  FeatureGrid,
  FeatureCard,
  DisplayBox,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}

declare global {
  type MDXProvidedComponents = typeof components;
}
