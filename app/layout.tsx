import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { FavoritesProvider } from "./context/FavoritesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricky and Morty",
  description: "Generated Ricky and Morty web app with NextJs from public API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased suppressHydrationWarning`}
      >
        <FavoritesProvider>
          <Navbar />
          <main className="container mx-auto pt-20 px-6">{children}</main>
        </FavoritesProvider>
      </body>
    </html>
  );
}
