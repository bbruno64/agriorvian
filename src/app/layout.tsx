import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "AgriOrvian — East Africa's Gateway to High-Grade Commodities",
    template: "%s | AgriOrvian — Division of Orvian Co. Ltd",
  },
  description:
    "East Africa's direct gateway to high-grade agricultural commodities, edible nuts & oilseeds, seafood, grains, and spices. Export division of Orvian Company Limited, Dar es Salaam, Tanzania.",
  keywords: [
    "agri export tanzania",
    "cashew nuts export",
    "sesame seeds Tanzania",
    "Nile perch",
    "coffee Tanzania",
    "B2B commodity trading",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <Toaster />
      </body>
    </html>
  );
}
