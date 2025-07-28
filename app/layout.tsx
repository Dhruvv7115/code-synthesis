import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { LenisProvider } from "@/components/lenis-provider";

export const metadata: Metadata = {
  title: "Code Synthesis Hackathon",
  description:
    "Join the Code Synthesis Hackathon focused on building sustainable software solutions. Collaborate, innovate, and create impactful projects for a greener future.",
  keywords: ["software", "innovation", "green tech"],
  authors: [{ name: "Code Synthesis Hackathon Team" }],
  openGraph: {
    title: "Code Synthesis Hackathon",
    description:
      "Build sustainable software solutions at the Code Synthesis Hackathon.",
    url: "https://code-synthesis.vercel.app/",
    siteName: "Code Synthesis Hackathon",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Code Synthesis Hackathon - Sustainability Theme",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#2ecc40" />
        <link rel="icon" href="/favicon.ico" />
        <title>Code Synthesis Hackathon</title>
      </Head>
      <body>
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
