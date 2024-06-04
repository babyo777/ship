import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ship",
  description: "Ship your files without internet",
  icons: ["/favicon.jpg"],
  openGraph: {
    type: "website",
    url: "https://yourwebsite.com",
    title: "Ship",
    description: "Ship your files without internet",
    images: [
      {
        url: "https://shio-file.vercel.app/ship.png",
        width: 800,
        height: 600,
        alt: "Ship your files without internet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tanmay11117",
    title: "Ship",
    description: "Ship your files without internet",
    images: "https://shio-file.vercel.app/ship.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
