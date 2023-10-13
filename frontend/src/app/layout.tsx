"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Globalstyle } from "./globalstyles";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Globalstyle />
    </html>
  );
}
