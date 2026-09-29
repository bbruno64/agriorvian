import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { commodities } from "@/data/commodities";
import { itemListSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/jsonld";
import { CommoditiesCatalog } from "@/components/commodities/commodities-catalog";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Commodities Catalog — Tanzania Agricultural Exports",
  description:
    "Explore our full export catalog: avocados, raw cashew nuts, cashew kernels, sesame, sunflower, Nile perch, tilapia & dagaa, maize, pulses, coffee, Zanzibar spices, tobacco and tea — with HS codes, grades, packaging and certifications.",
  alternates: {
    canonical: "/commodities",
  },
  openGraph: {
    title: "Commodities Catalog — Tanzania Agricultural Exports",
    description:
      "12 high-grade export commodities from Tanzania with technical specs, HS codes, and shipping options.",
    type: "website",
  },
};

export default function CommoditiesPage() {
  return (
    <div className="bg-[#fafaf8]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Commodities", path: "/commodities" },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          commodities.map((c) => ({
            name: c.name,
            path: `/commodities/${c.id}`,
          }))
        )}
      />

      <section className="bg-emerald-gradient py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Full Commodities Catalog
          </h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            Explore our complete export portfolio with technical specifications,
            HS codes, packaging, and certifications. Each product has its own
            page with origin, grades, and bulk-order details — filter by
            category and shipping method, then request a proforma quote.
          </p>
        </div>
      </section>

      <CommoditiesCatalog />

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Don&apos;t see what you&apos;re sourcing?
          </h2>
          <p className="max-w-2xl text-slate-600">
            We trade a wider portfolio beyond this catalog. Tell us the
            commodity, quantity, and destination — our trade desk will confirm
            availability and pricing.
          </p>
          <Button asChild size="lg" className="bg-amber-gradient px-7 py-6 text-base font-semibold hover:opacity-90">
            <Link href="/quote">
              Request Proforma Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}