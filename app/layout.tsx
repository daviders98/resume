import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/lib/fontawesome";
import { ThemeProvider } from "@/context/ThemeContext";
import { connection } from "next/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devgarcia.vercel.app/"),
  title: {
    default: "DevGarcía | Full Stack Developer",
    template: "%s | DevGarcía",
  },
  description:
    "Portfolio and Resume of David García, a Full Stack Developer specializing in Next.js, React, and modern web technologies.",
  keywords: [
    "David García",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Resume",
    "Web Development",
  ],
  authors: [{ name: "David García", url: "https://github.com/daviders98" }],
  creator: "David García",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devgarcia.vercel.app/",
    title: "DevGarcía | Full Stack Developer",
    description: "Portfolio and Resume of David García",
    siteName: "DevGarcía",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevGarcía Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevGarcía | Full Stack Developer",
    description: "Portfolio and Resume of David García",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connection();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
