import type { Metadata } from "next";
import { BASE_URL } from "@/lib/site-url";
import { type Commodity } from "@/data/commodities";

export const siteName = "AgriOrvian";
export const legalName = "Orvian Company Limited";
export const siteTagline = "East Africa's Gateway to High-Grade Commodities";

export const shortName = (commodity: Commodity): string =>
  commodity.name.split(" (")[0];

export const commodityKeywords = (commodity: Commodity): string[] => [
  `${shortName(commodity).toLowerCase()} export tanzania`,
  `${shortName(commodity).toLowerCase()} suppliers`,
  `buy ${shortName(commodity).toLowerCase()} bulk`,
  `${commodity.name.toLowerCase()} ${commodity.hsCode}`,
  "tanzania commodity exporter",
  "agri export dar es salaam",
  "farm to market commodities africa",
];

export function commoditySeo(commodity: Commodity): Metadata {
  const short = shortName(commodity);
  return {
    title: `Export ${short} From Tanzania | ${commodity.category} Suppliers`,
    description: `Source ${commodity.description} HS ${commodity.hsCode} · Origin ${commodity.origin} · ${commodity.minOrder} · ${commodity.shipping.join(", ")}. Request a proforma export quote from AgriOrvian, the export division of ${legalName}, Dar es Salaam.`,
    keywords: commodityKeywords(commodity),
    alternates: { canonical: `${BASE_URL}/commodities/${commodity.id}` },
    openGraph: {
      title: `${short} — Tanzania Export | ${siteName}`,
      description: `${commodity.tagline} ${commodity.description}`,
      type: "website",
      images: [{ url: `${BASE_URL}${commodity.image}`, alt: commodity.name }],
    },
  };
}

export function categorySeo(category: string): Metadata {
  return {
    title: `Tanzania ${category} Export & Supply | Bulk Commodities`,
    description: `Export ${category.toLowerCase()} from Tanzania in bulk. Trusted B2B supplier with TAPHIS phytosanitary certification, SGS pre-shipment testing and cold-chain logistics through Dar es Salaam, Tanga and Mtwara ports.`,
    alternates: { canonical: `${BASE_URL}/commodities/category/${slugify(category)}` },
    openGraph: {
      title: `Tanzania ${category} Export | ${siteName}`,
      description: `Bulk export of ${category.toLowerCase()} from Tanzania. Request a proforma quote.`,
      type: "website",
    },
  };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function faqForCommodity(commodity: Commodity): Array<{ q: string; a: string }> {
  const short = shortName(commodity);
  return [
    {
      q: `What is the minimum order quantity for ${short}?`,
      a: `${commodity.minOrder}. Prices are FOB Dar es Salaam or CIF destination port — request a proforma quote for current pricing and availability.`,
    },
    {
      q: `Where is ${short} sourced from?`,
      a: commodity.origin,
    },
    {
      q: `Which certifications does ${short} carry for export?`,
      a: commodity.certifications.join(", ") + ".",
    },
    {
      q: `How is ${short} shipped to my country?`,
      a: `${commodity.shipping.join(" and ")} through ${commodity.packaging.join(", ")}.`,
    },
    {
      q: `What is the shelf life of ${short}?`,
      a: commodity.shelfLife,
    },
  ];
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    legalName,
    url: BASE_URL,
    logo: `${BASE_URL}/icon.svg`,
    description:
      `${siteTagline}. B2B exporter of avocados, cashew, sesame, Nile perch, coffee and Zanzibar spices from Tanzania.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mbezi Makonde",
      addressLocality: "Dar es Salaam",
      addressCountry: "TZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+255-714-454-774",
      email: "export@agriorvian.com",
      contactType: "sales",
      availableLanguage: ["English"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: BASE_URL,
    inLanguage: "en",
    publisher: organizationSchema(),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export function productSchema(commodity: Commodity) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: commodity.name,
    image: `${BASE_URL}${commodity.image}`,
    description: commodity.description,
    category: commodity.category,
    sku: `AO-${commodity.hsCode.replace(/[^0-9.]/g, "")}`,
    brand: { "@type": "Brand", name: siteName },
    additionalProperty: commodity.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
    countryOfOrigin: { "@type": "Country", name: "Tanzania" },
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function itemListSchema<T extends { name: string; path: string }>(items: T[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${BASE_URL}${item.path}`,
    })),
  };
}

export function escapedJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}