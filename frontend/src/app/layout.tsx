"use client";
import { Inter } from "next/font/google";
import { Globalstyle } from "./globalstyles";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MyContextProvider } from "./context/MyContext";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/themeDefault";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <Header />
            <MyContextProvider>

              {children}
            </MyContextProvider>
            <Footer />
          </ThemeProvider>
          <Globalstyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
