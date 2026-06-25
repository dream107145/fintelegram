import type { Metadata } from "next";
import { Open_Sans, Roboto, Roboto_Condensed } from "next/font/google";
import { IMAGES } from "@/lib/assets";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Home | FinTelegram News",
  description:
    "FinTelegram is a cyberfinance intelligence and compliance platform investigating financial crime, regulatory violations, and the rails, entities, and ecosystems that facilitate them.",
  icons: {
    icon: IMAGES.favicon,
    shortcut: IMAGES.favicon,
    apple: IMAGES.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${roboto.variable} ${robotoCondensed.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
