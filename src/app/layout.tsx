import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BottomNav from "@/components/BottomNav/BottomNav";
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";
import IntroStateManager from "./components/IntroStateManager/IntroStateManager";

export const metadata: Metadata = {
  title: "Misaal",
  description: "Misaal Studio",
};

const font = Inter();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.className}>
      <body className="intro-playing">
        <IntroStateManager />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
