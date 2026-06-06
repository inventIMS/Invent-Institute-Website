import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LazyParticleBackground from "./components/LazyParticleBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Invent IMS",
  description:
    "Creating Innovations — Empowering students with academic excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-transparent">
        <LazyParticleBackground />
        <Navbar />
        <div className="relative z-10 flex flex-col grow">{children}</div>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
