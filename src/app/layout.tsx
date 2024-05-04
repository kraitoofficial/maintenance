import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kraito",
  description: "Crafted for You",
  icons: {
    // Add the favicon URLs here
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/android-192.png",
    apple: "/favicon/apple.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
