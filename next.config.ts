import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  images: {
    remotePatterns: [new URL("https://w.wallhaven.cc/**")],
  },
  // Include markdown and MDX files
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-math", "remark-gfm"],
    rehypePlugins: [
      "rehype-katex",
      [
        "rehype-pretty-code",
        {
          theme: { light: "one-light", dark: "one-dark-pro" },
          keepBackground: true,
          bypassInlineCode: false,
          defaultLang: "plaintext",
        },
      ],
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
