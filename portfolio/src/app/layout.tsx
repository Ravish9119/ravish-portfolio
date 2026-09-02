import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ravishkushwaha.dev"),
  title: "Ravish Kushwaha | Data Analyst & Full Stack Developer",
  description:
    "Ravish Kushwaha — Data Analyst & Full Stack Developer specializing in Power BI, SQL, Python, React, and data visualization.",
  keywords: [
    "Ravish Kushwaha",
    "Data Analyst",
    "Full Stack Developer",
    "Web Developer",
    "Power BI",
    "SQL",
    "MySQL",
    "Python",
    "React",
    "Pandas",
    "Excel",
    "Kanpur",
    "Portfolio",
  ],
  authors: [{ name: "Ravish Kushwaha" }],
  creator: "Ravish Kushwaha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ravishkushwaha.dev",
    title: "Ravish Kushwaha | Data Analyst & Full Stack Developer",
    description:
      "Turning messy raw datasets into interactive dashboards, optimized SQL pipelines, and modern web applications.",
    siteName: "Ravish Kushwaha Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Ravish Kushwaha - Data Analyst & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravish Kushwaha | Data Analyst & Full Stack Developer",
    description:
      "Data Analyst & Full Stack Developer specializing in Power BI, SQL, Python, React, and modern web solutions.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

import ParticleBackground from "@/components/ParticleBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${displayFont.variable} scroll-smooth`}>
      <head>
        <meta name="theme-color" content="#06080f" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent-cyan/20 selection:text-white">
        <ParticleBackground />
        <div className="fixed inset-0 pointer-events-none bg-radial-grid opacity-40 z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
