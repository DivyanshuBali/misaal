import type { Metadata } from "next";
import "./globals.css";
import BottomNav from "./components/BottomNav/BottomNav";

export const metadata: Metadata = {
  title: "Misaal",
  description: "Misaal Studio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
