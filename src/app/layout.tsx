import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AIChatPopup from "@/components/layout/AIChatPopup";
import { themeInitScript } from "@/lib/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATHARVA JOSHI — Software Engineer | AI, Full Stack, Cloud & Systems",
  description:
    "Interactive Engineering Portfolio. Building intelligent, scalable systems across Full Stack, AI/ML, Cloud, Systems, and Robotics.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "Cloud Architecture",
    "Robotics",
    "Portfolio",
  ],
  openGraph: {
    title: "ATHARVA JOSHI — Software Engineer",
    description:
      "Building intelligent, scalable systems. Interactive engineering portfolio showcasing AI, Full Stack, Cloud, and Robotics expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col noise-bg">
        {children}
        <AIChatPopup />
      </body>
    </html>
  );
}
