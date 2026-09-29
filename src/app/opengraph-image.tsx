import { buildOgImage, alt, size, contentType } from "@/lib/og-image";

export { alt, size, contentType };

export default function Image() {
  return buildOgImage({
    title: "East Africa's Gateway to High-Grade Commodities",
    subtitle:
      "B2B export of avocados, cashew, sesame, Nile perch, coffee and Zanzibar spices — laboratory-verified quality, cold-chain logistics, FOB Dar es Salaam & CIF worldwide.",
  });
}