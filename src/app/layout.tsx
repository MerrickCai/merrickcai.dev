import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import ThemeScript from "@/components/ThemeScript";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "merrickcai.dev",
  description: "Merrick's blog and projects",
};

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden font-sans antialiased`}>
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
      </body>
    </html>
  );
}
