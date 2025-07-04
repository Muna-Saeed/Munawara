import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SessionWrapper from "../../components/SessionWrapper";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Munawara - Innovating the Future",
  description:
    "Welcome to Munawara, where creativity meets technology. Explore modern web development and innovative solutions.",
  keywords:
    "Munawara, web development, technology, creativity, innovation, Next.js, modern frameworks",
  authors: [{ name: "Munawara" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionWrapper>
          <Navbar />
          {children}
          <Chatbot />
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}