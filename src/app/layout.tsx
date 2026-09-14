import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#103B2B",
};

export const metadata: Metadata = {
  title: {
    default: "AgriOrvian — East Africa's Gateway to High-Grade Commodities",
    template: "%s | AgriOrvian — Division of Orvian Co. Ltd",
  },
  description:
    "East Africa's direct gateway to high-grade agricultural commodities, edible nuts & oilseeds, fisheries, grains, and spices. Export division of Orvian Company Limited, Dar es Salaam, Tanzania.",
  openGraph: {
    title: "AgriOrvian",
    description:
      "East Africa's direct gateway to high-grade agricultural commodities and fisheries. Export division of Orvian Company Limited, Dar es Salaam.",
    type: "website",
    siteName: "AgriOrvian",
    locale: "en_US",
  },
  keywords: [
    "agri export tanzania",
    "cashew nuts export",
    "sesame seeds Tanzania",
    "Nile perch",
    "Tanzania tilapia",
    "Dagaa silver sardine",
    "Tanzania lake fish",
    "coffee Tanzania",
    "B2B commodity trading",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 scroll-mt-20 outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
        <Toaster />
      </body>
    </html>
  );
}
