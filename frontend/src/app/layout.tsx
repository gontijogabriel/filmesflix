"use client";
import { Inter } from "next/font/google";
import { Globalstyle } from "./globalstyles";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MyContextProvider } from "./context/MyContext";

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
        <MyContextProvider>
          {children}
        </MyContextProvider>
        <Footer />
      </body>
      <Globalstyle />
    </html>
  );
}
