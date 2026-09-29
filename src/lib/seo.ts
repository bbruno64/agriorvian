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

export function marketSeo(market: {
  slug: string;
  city: string;
  country: string;
  region: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title: market.title,
    description: market.description,
    keywords: [
      `tanzania exports to ${market.city}`,
      `${market.city} commodity importers`,
      `buy african commodities ${market.country}`,
      `dar es salaam to ${market.city} shipping`,
      `fob dar es salaam cif ${market.city}`,
      `${market.country} agricultural imports`,
    ],
    alternates: { canonical: `${BASE_URL}/market/${market.slug}` },
    openGraph: {
      title: market.title,
      description: market.description,
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

export const homeFaqs: Array<{ q: string; a: string }> = [
  {
    q: "What commodities does AgriOrvian export?",
    a: "We export high-grade agricultural commodities from Tanzania: avocados (Hass & Fuerte), raw cashew nuts and processed kernels, sesame seeds, sunflower seeds and oil, Nile perch and tilapia fillets, dagaa, non-GMO white maize, pulses and beans, Arabica and Robusta coffee, Zanzibar spices, and tobacco and tea.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Most commodities start at one 20ft container-load — about 9.6 to 21 MT depending on the product — while chilled fish can ship from 500–1,000 kg by air or reefer. Request a proforma quote and our trade desk will confirm the minimum for your commodity and destination.",
  },
  {
    q: "Which countries do you ship to?",
    a: "We export to 24 destinations across 4 continents through the Ports of Dar es Salaam, Tanga and Mtwara, including Rotterdam, Hamburg, Antwerp, Dubai, Jeddah, Mumbai, Qingdao, Shanghai and Mombasa — with more routes available on request.",
  },
  {
    q: "What certifications do your products carry?",
    a: "Export lots are backed by TAPHIS phytosanitary certification, SGS pre-shipment inspection, TBS standards, GlobalGAP, HACCP, non-GMO and organic certifications where applicable. Every lot is also laboratory-tested for moisture, residue, outturn, and mycotoxins before shipping.",
  },
  {
    q: "Can I order a sample or test lot?",
    a: "Yes. For most commodities we can arrange a 5 MT sample or test lot so buyers can run their own laboratory or in-market quality checks before committing to container volumes.",
  },
  {
    q: "What Incoterms do you offer?",
    a: "We quote FOB Dar es Salaam or CIF destination port. Tell us your target port and we'll price the best shipping route in your proforma quote.",
  },
];

export function marketFaqs(market: {
  city: string;
  route: string;
  transitDays: string;
  port: string;
}): Array<{ q: string; a: string }> {
  return [
    {
      q: `How long does sea freight from Tanzania to ${market.city} take?`,
      a: `${market.transitDays} on the ${market.route} route, departing from the ${market.port}.`,
    },
    {
      q: `Which Tanzanian commodities are in demand in ${market.city}?`,
      a: `Avocados, cashew, sesame, coffee, spices, and lake fish are the most sourced categories — see the recommended products on this page and request a proforma quote for current availability.`,
    },
    {
      q: `Do you deliver to ${market.city} FOB or CIF?`,
      a: "Both. We quote FOB Dar es Salaam, or CIF destination port including ocean freight and insurance — your proforma quote will show the total for either option.",
    },
  ];
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

export function tradeRouteSeo(
  route: {
    slug: string;
    label: string;
    title: string;
    description: string;
    country: string;
    keywords: string[];
  },
  commodity: Commodity
): Metadata {
  const short = shortName(commodity);
  return {
    title: route.title,
    description: route.description,
    keywords: [
      ...route.keywords,
      `${route.label.toLowerCase()} import`,
      `tanzania ${short.toLowerCase()} export ${route.country.toLowerCase()}`,
      `fob dar es salaam cif ${route.country.toLowerCase()}`,
      "tanzania agri exporter",
    ],
    alternates: { canonical: `${BASE_URL}/trade-route/${route.slug}` },
    openGraph: {
      title: `${route.label} — Tanzania Export | ${siteName}`,
      description: route.description,
      type: "website",
      images: [{ url: `${BASE_URL}${commodity.image}`, alt: commodity.name }],
    },
  };
}

export function tradeRouteFaqs(
  route: {
    label: string;
    country: string;
    city: string;
    destinationPort: string;
    shipping: { port: string; route: string; transitDays: string };
  },
  commodity: Commodity
): Array<{ q: string; a: string }> {
  const short = shortName(commodity);
  return [
    {
      q: `How long does shipping ${short.toLowerCase()} from Tanzania to ${route.country} take?`,
      a: `${route.shipping.transitDays} on the ${route.shipping.route} route, departing the ${route.shipping.port}.`,
    },
    {
      q: `What is the minimum order quantity for ${short} exported to ${route.country}?`,
      a: `${commodity.minOrder}. Pricing is FOB Dar es Salaam or CIF ${route.destinationPort} — request a proforma quote and we'll confirm current availability and the best shipping line.`,
    },
    {
      q: `Which specifications can I get for ${short} shipped to ${route.city}?`,
      a: `${commodity.grades.join(", ")}. Core specs run ${commodity.specs
        .slice(0, 3)
        .map((s) => `${s.label} ${s.value}`)
        .join("; ")} — counts, blends, and packing can be configured per order.`,
    },
    {
      q: `What documents ship with a ${short} consignment to ${route.country}?`,
      a: `${commodity.certifications.join(", ")}, plus bill of lading, packing list, and certificate of origin to support clearance at ${route.destinationPort}.`,
    },
  ];
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