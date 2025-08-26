import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import ThemeScript from "@/components/ThemeScript";
import { Toaster } from "sonner";
import VisitorTracker from "@/components/VisitorTracker";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  title: "MerrickCai.dev",
  description: "Merrick's blog and projects",
  applicationName: "MerrickCai.dev",
  authors: { name: "Merrick Cai", url: process.env.NEXT_PUBLIC_BASE_URL! },
  creator: "Merrick Cai",
  publisher: "Merrick Cai",
  robots: process.env.NODE_ENV === "production" ? { index: true, follow: true } : { index: false, follow: false },
  alternates: { canonical: "/" },
  appleWebApp: {
    capable: true,
    title: "MerrickCai.dev",
    startupImage: "/favicon/favicon.png",
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

        {/* Visitor tracking - doesn't render anything but increments count */}
        <VisitorTracker />

        {/* Header, Main, and Footer */}
        <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
          <Header />
          {/* Main content with padding-top to account for fixed header */}
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>

        {/* Sonner Toaster for notifications */}
        <Toaster richColors closeButton offset={{ top: "90px" }} position="top-center" />
      </body>
    </html>
  );
}
