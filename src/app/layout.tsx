import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import ThemeScript from "@/components/ThemeScript";
import { Toaster } from "sonner";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "MerrickCai.dev",
  description: "Merrick's blog and projects",
  appleWebApp: {
    capable: true,
    title: "MerrickCai.dev",
    startupImage: "/favicon.png",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden font-sans antialiased selection:bg-indigo-500 selection:text-white dark:selection:bg-purple-300 dark:selection:text-gray-900`}
      >
        {/* Inline script to apply the .dark class before paint to prevent FOUC */}
        <ThemeScript />

        {/* Header, Main, and Footer */}
        <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
          <Header />
          {/* Main content with padding-top to account for fixed header */}
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>

        {/* Speed Insights and Analytics */}
        <SpeedInsights />
        <Analytics />

        {/* Sonner Toaster for notifications */}
        <Toaster richColors closeButton offset={{ top: "90px" }} position="top-center" />
      </body>
    </html>
  );
}
