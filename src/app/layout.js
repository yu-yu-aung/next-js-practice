import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-red-200 flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
