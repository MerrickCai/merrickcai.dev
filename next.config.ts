import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  // Include markdown and MDX files
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // @ts-expect-error wrong types
    remarkPlugins: [["remark-math"], ["remark-gfm"]],
    rehypePlugins: [
      // @ts-expect-error wrong types
      ["rehype-katex"],
      [
        // @ts-expect-error wrong types
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
