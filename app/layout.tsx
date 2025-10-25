import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reza UI - Modern Component Registry",
  description: "A curated collection of beautiful, accessible React components built with Next.js 15, React 19, Tailwind CSS v4, and Radix UI. Install via shadcn CLI.",
  keywords: ["React", "Next.js", "Tailwind CSS", "Components", "UI Library", "shadcn", "Radix UI"],
  authors: [{ name: "Reza Jafar", url: "https://rezajafar.com" }],
  creator: "Reza Jafar",
  metadataBase: new URL("https://rezajafar.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rezajafar.com",
    title: "Reza UI - Modern Component Registry",
    description: "A curated collection of beautiful, accessible React components built with Next.js 15, React 19, and Tailwind CSS v4.",
    siteName: "Reza UI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reza UI - Modern Component Registry",
    description: "A curated collection of beautiful, accessible React components built with Next.js 15, React 19, and Tailwind CSS v4.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
