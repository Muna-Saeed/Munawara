import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import NextAuthProvider from "@/components/AuthProvider/AuthProvider";
import { Suspense } from 'react';


const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Munawara ",
  description: "A hotel management system for Munawara Hotel",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Munawara main page",
    description: "Munawara digital service",
    url: "https://munawarahotel.com",
    siteName: "Munawara",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <body className={poppins.className}>
          <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
            <NextAuthProvider>
              <main className="flex flex-col min-h-screen">
                <Header />

                {children}
                <Footer />
              </main>
            </NextAuthProvider>
          </Suspense>
        </body>
      </ThemeProvider>
    </html>
  );
}

