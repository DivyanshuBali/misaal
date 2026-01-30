import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import BottomNav from "@/components/BottomNav/BottomNav";
import IntroStateManager from "./components/IntroStateManager/IntroStateManager";

export const metadata: Metadata = {
  title: "Misaal",
  description: "Misaal Studio",
};

const font = localFont({
  src: [
    { path: "./fonts/Helvetica-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Helvetica.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Helvetica-Oblique.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Helvetica-Bold.ttf", weight: "700", style: "normal" },
    {
      path: "./fonts/Helvetica-BoldOblique.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

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
