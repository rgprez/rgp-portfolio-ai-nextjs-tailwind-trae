import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramon G. Perez - Portfolio",
  description: "Professional portfolio showcasing my projects and skills as a developer",
  keywords: ["portfolio", "developer", "web development", "projects"],
  authors: [{ name: "Ramon G. Perez" }],
  openGraph: {
    title: "Ramon G. Perez - Portfolio",
    description: "Professional portfolio showcasing my projects and skills as a developer",
    url: "https://yourdomain.com",
    siteName: "Ramon G. Perez Portfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramon G. Perez - Portfolio",
    description: "Professional portfolio showcasing my projects and skills as a developer",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ... existing code ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
