import "./globals.css";

import type { Metadata } from "next";
import BottomNav from "./components/BottomNav/BottomNav";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Misaal",
  description: "Misaal Studio",
};

const inter = Inter();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
