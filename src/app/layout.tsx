import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <body>{children}</body>
    </html>
  );
}
