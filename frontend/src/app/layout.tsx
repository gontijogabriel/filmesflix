"use client";
import { Inter } from "next/font/google";
import { Globalstyle } from "./globalstyles";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
      <Globalstyle />
    </html>
  );
}
