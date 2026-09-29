import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  Ship,
  Anchor,
  Timer,
  FileText,
  PhoneCall,
} from "lucide-react";
import { commodities } from "@/data/commodities";
import {
  getMarketBySlug,
  markets,
  commoditiesForMarket,
} from "@/data/markets";
import {
  marketSeo,
  marketFaqs,
  itemListSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/jsonld";
import { CommodityLinkCard } from "@/components/commodities/commodity-link-card";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/site";
import { routesForMarket } from "@/data/trade-routes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return markets.map((market) => ({ slug: market.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) return {};
  return marketSeo(market);
}

export default async function MarketPage({ params }: Props) {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) notFound();

  const faqs = marketFaqs(market);
  const items = commoditiesForMarket(market, commodities);
  const otherMarkets = markets.filter((m) => m.slug !== market.slug);
  const routes = routesForMarket(market.slug);

  return (
    <div className="bg-[#fafaf8]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Export Markets", path: "/commodities" },
          { name: market.city, path: `/market/${market.slug}` },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          items.map((c) => ({ name: c.name, path: `/commodities/${c.id}` }))
        )}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="bg-emerald-gradient py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-emerald-100/80">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li>
                <Link href="/commodities" className="hover:text-white">
                  Commodities
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="font-semibold text-amber-300">
                {market.city}, {market.country}
              </li>
            </ol>
          </nav>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
            {market.title}
          </h1>
          <p className="mt-3 max-w-3xl text-emerald-100/85">{market.intro}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5">
              <Ship className="h-6 w-6 text-amber-300" />
              <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-100/70">
                Load Port
              </div>
              <div className="mt-0.5 text-sm font-semibold text-white">
                {market.port}
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <Anchor className="h-6 w-6 text-amber-300" />
              <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-100/70">
                Shipping Route
              </div>
              <div className="mt-0.5 text-sm font-semibold text-white">
                {market.route}
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-5">
              <Timer className="h-6 w-6 text-amber-300" />
              <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-100/70">
                Transit Time
              </div>
              <div className="mt-0.5 text-sm font-semibold text-white">
                {market.transitDays}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Recommended Tanzanian commodities for {market.city}
            </h2>
            <p className="mt-2 text-slate-600">{market.recommendation}</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/commodities">
              View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <CommodityLinkCard key={c.id} commodity={c} />
          ))}
        </div>

        {routes.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold text-slate-900">
              Dedicated trade routes to {market.city}
            </h3>
            <p className="mt-1 text-slate-600">
              Route-specific export pages for buyers importing to {market.city}:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map((route) => {
                const commodityForRoute = commodities.find(
                  (c) => c.id === route.commodityId
                );
                if (!commodityForRoute) return null;
                return (
                  <Link
                    key={route.slug}
                    href={`/trade-route/${route.slug}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-emerald-300 hover:shadow-sm"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                      {commodityForRoute.name}
                    </div>
                    <div className="mt-1 text-base font-bold text-slate-900 group-hover:text-emerald-800">
                      {route.label}
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800">
                      Open route <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Request a proforma quote for {market.city}
          </h2>
          <p className="mt-2 text-slate-600">
            Tell us the commodity, quantity, and target date — we&apos;ll quote
            FOB {market.country === "Kenya" ? "Tanga" : "Dar es Salaam"} or CIF{" "}
            {market.city} with confirmed specs and the best shipping line.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-emerald-gradient px-6 py-5 text-base hover:opacity-90">
              <Link href="/quote">
                <FileText className="mr-2 h-5 w-5" /> Request Proforma Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-6 py-5 text-base">
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                  `Hello AgriOrvian, I'm interested in importing Tanzanian commodities to ${market.city}. Please share a proforma quote.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneCall className="mr-2 h-5 w-5 text-emerald-700" /> WhatsApp
                the Trade Desk
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Sourcing Tanzanian commodities for {market.city}?
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Other destination markets
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {otherMarkets.map((m) => (
            <Link
              key={m.slug}
              href={`/market/${m.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-emerald-300 hover:text-emerald-800"
            >
              {m.city}, {m.country} <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}