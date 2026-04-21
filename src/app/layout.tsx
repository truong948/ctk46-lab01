import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const manrope = Manrope({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans"
});

const fraunces = Fraunces({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Nguyễn Văn Trường",
    template: "%s | Nguyễn Văn Trường"
  },
  description: "Portfolio cá nhân và blog học tập CTK46"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${manrope.variable} ${fraunces.variable} min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1">
          <div className="page-frame">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
