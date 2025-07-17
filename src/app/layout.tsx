import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramon G. Perez - Portfolio",
  description:
    "Professional portfolio showcasing my projects and skills as a developer",
  keywords: ["portfolio", "developer", "web development", "projects"],
  authors: [{ name: "Ramon G. Perez" }],
  openGraph: {
    title: "Ramon G. Perez - Portfolio",
    description:
      "Professional portfolio showcasing my projects and skills as a developer",
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
    description:
      "Professional portfolio showcasing my projects and skills as a developer",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
