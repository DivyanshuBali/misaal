import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Misaal",
  description: "Misaal Studio",
};

const font = localFont({
  src: [
    {
      path: "./fonts/Hikasami-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Hikasami-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Hikasami-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Hikasami-Bold.ttf",
      weight: "700",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
