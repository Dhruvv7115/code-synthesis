import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Synthesis",
  description:
    "Join the Code Synthesis Hackathon focused on building sustainable software solutions. Collaborate, innovate, and create impactful projects for a greener future.",
  generator: "v0.dev",
  keywords: [
    "hackathon",
    "code synthesis",
    "sustainability",
    "software",
    "innovation",
    "green tech",
  ],
  authors: [{ name: "Code Synthesis Hackathon Team" }],
  openGraph: {
    title: "Code Synthesis Hackathon",
    description:
      "Build sustainable software solutions at the Code Synthesis Hackathon.",
    url: "https://codesynth-hackathon.com",
    siteName: "Code Synthesis Hackathon",
    // images: [
    //   {
    //     url: "/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "Code Synthesis Hackathon - Sustainability Theme",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#2ecc40",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
