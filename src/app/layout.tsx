import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emon Miah",
  description: " Personal Portfolio & Blog Website of Emon Miah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="header"
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-backgroundColor text-white`}>
        <Header />
        <div className="min-h-[calc(100vh-169px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
