import type { Metadata, Viewport } from "next";
import { Bungee, Work_Sans } from "next/font/google";

import { cuates } from "@/data/cuates";

import "./globals.css";

// Chunky sign-painter capitals, for the hand-painted taqueria signage the brief asks for.
const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const title = `${cuates.name} | Al pastor off the trompo in Southtown, San Antonio`;

export const metadata: Metadata = {
  title,
  description: cuates.description,
  // Demo build, shared only with Los Cuates: keep it out of search results.
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description: cuates.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bungee.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
