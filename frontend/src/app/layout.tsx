"use client";
import { Inter } from "next/font/google";
import { Globalstyle } from "./globalstyles";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MyContextProvider } from "./context/MyContext";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/themeDefault";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={defaultTheme}>
        <Header />
          <MyContextProvider>
            {children}
          </MyContextProvider>
        <Footer />
        </ThemeProvider>
        <Globalstyle />
      </body>
    </html>
  );
}
