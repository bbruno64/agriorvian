import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { Toaster } from "@/components/ui/sonner";
import { JsonLd } from "@/components/jsonld";
import { BASE_URL } from "@/lib/site-url";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gaId = process.env.NEXT_PUBLIC_GA4_ID;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#103B2B",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AgriOrvian — East Africa's Gateway to High-Grade Commodities",
    template: "%s | AgriOrvian — Tanzania Commodity Exporter",
  },
  description:
    "East Africa's direct gateway to high-grade agricultural commodities: avocados, cashew, sesame, Nile perch, tilapia, coffee and Zanzibar spices. B2B export division of Orvian Company Limited, Dar es Salaam, Tanzania.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AgriOrvian — East Africa's Gateway to High-Grade Commodities",
    description:
      "Source avocados, cashew nuts, sesame, Nile perch, coffee and Zanzibar spices directly from Tanzanian farms. Laboratory-verified quality, cold-chain logistics, FOB Dar es Salaam and CIF worldwide.",
    type: "website",
    url: BASE_URL,
    siteName: "AgriOrvian",
    locale: "en_US",
    countryName: "Tanzania",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgriOrvian — East Africa's Gateway to High-Grade Commodities",
    description:
      "B2B export of high-grade agricultural commodities and fisheries from Tanzania. Request a proforma quote.",
  },
  category: "business",
  keywords: [
    "agri export tanzania",
    "avocado export tanzania",
    "cashew nuts export",
    "sesame seeds Tanzania",
    "Nile perch export",
    "Tanzania coffee export",
    "Zanzibar spices supplier",
    "B2B commodity trading",
    "agricultural commodities africa",
  ],
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body className="min-h-full flex flex-col">
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
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