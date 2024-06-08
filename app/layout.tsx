import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Navbar2 from "./components/navbar2/Navbar2";
import Footer from "./components/footer/page";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Omegle",
  description: "Generated by create Omegle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <div className="pt-4">
        <div className="fixed top-0 w-full z-10">
          <Navbar />
        </div>
        <div className="mt-32 md:mt-16">
          <Navbar2 />
        </div>
      </div>
      {children}
      <Footer />
    </body>
  </html>
  );
}