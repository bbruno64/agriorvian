import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ChevronRight,
  Ship,
  Anchor,
  Timer,
  Globe2,
  Sparkles,
  ShieldCheck,
  Package,
  FileText,
  PhoneCall,
} from "lucide-react";
import { getCommodityById } from "@/data/commodities";
import {
  tradeRoutes,
  getTradeRouteBySlug,
  shippingForRoute,
  routesForCommodity,
  routesForMarket,
} from "@/data/trade-routes";
import {
  tradeRouteSeo,
  tradeRouteFaqs,
  productSchema,
  breadcrumbSchema,
  faqSchema,
  shortName,
} from "@/lib/seo";
import { JsonLd } from "@/components/jsonld";
import { CommodityImage } from "@/components/ui/commodity-image";
import { RfqWizard } from "@/components/rfq/rfq-wizard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT } from "@/data/site";
import { getMarketBySlug } from "@/data/markets";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tradeRoutes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = getTradeRouteBySlug(slug);
  if (!route) return {};
  const commodity = getCommodityById(route.commodityId);
  if (!commodity) return {};
  return tradeRouteSeo(route, commodity);
}

export default async function TradeRoutePage({ params }: Props) {
  const { slug } = await params;
  const route = getTradeRouteBySlug(slug);
  if (!route) notFound();

  const commodity = getCommodityById(route.commodityId);
  if (!commodity) notFound();

  const shipping = shippingForRoute(route);
  const faqs = tradeRouteFaqs(
    { ...route, shipping },
    commodity
  );
  const market = route.marketSlug ? getMarketBySlug(route.marketSlug) : undefined;
  const short = shortName(commodity);
  const sameCommodityRoutes = routesForCommodity(commodity.id).filter(
    (r) => r.slug !== route.slug
  );
  const relatedRoutes = route.marketSlug
    ? routesForMarket(route.marketSlug)
        .filter((r) => r.slug !== route.slug)
        .concat(sameCommodityRoutes)
    : sameCommodityRoutes;

  const routeFacts = [
    { label: "Load Port", value: shipping.port, icon: Ship },
    { label: "Route", value: shipping.route, icon: Anchor },
    { label: "Transit", value: shipping.transitDays, icon: Timer },
    { label: "Destination", value: route.destinationPort, icon: Globe2 },
  ];

  return (
    <div className="bg-[#fafaf8]">
      <JsonLd data={productSchema(commodity)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Commodities", path: "/commodities" },
          { name: short, path: `/commodities/${commodity.id}` },
          { name: route.label, path: `/trade-route/${route.slug}` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="bg-emerald-gradient py-12 text-white">
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
              <li>
                <Link
                  href={`/commodities/${commodity.id}`}
                  className="hover:text-white"
                >
                  {short}
                </Link>
              </li>
              <li>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="font-semibold text-amber-300">
                {route.country}
              </li>
            </ol>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Badge className="bg-amber-500 text-white">{commodity.category}</Badge>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-emerald-50">
              <Globe2 className="h-4 w-4 text-amber-300" /> Tanzania →{" "}
              {route.country}
            </span>
          </div>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold sm:text-4xl">
            {route.title.split(" — ")[0]} — {shipping.transitDays}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-emerald-100/85">
            {route.intro}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {routeFacts.map((f) => (
              <div key={f.label} className="rounded-2xl bg-white/10 p-5">
                <f.icon className="h-6 w-6 text-amber-300" />
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-100/70">
                  {f.label}
                </div>
                <div className="mt-0.5 text-sm font-semibold text-white">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Why {route.country} buyers source from Tanzania
            </h2>
            <p className="mt-3 text-slate-600">
              {route.label} is one of our most active corridors. Here is what
              importers in {route.city} typically care about:
            </p>
            <ul className="mt-6 space-y-4">
              {route.demandNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-gradient">
                    <Sparkles className="h-3.5 w-3.5 text-white" />
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700">{note}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
                <ShieldCheck className="h-5 w-5 text-emerald-700" />
                Documentation &amp; Certification
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {commodity.certifications.map((c) => (
                  <span
                    key={c}
                    className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Package className="h-5 w-5 text-teal-500" />
                Export Packaging
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {commodity.packaging.map((p) => (
                  <span
                    key={p}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <Button asChild size="sm" variant="outline" className="mt-5 w-full">
                <Link href={`/commodities/${commodity.id}`}>
                  View full {short} page <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[2/1] w-full overflow-hidden bg-slate-100">
                <CommodityImage
                  src={commodity.image}
                  alt={commodity.name}
                  className="absolute inset-0 h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    {commodity.name} — export spec for {route.country}
                  </h2>
                  <p className="mt-1 text-sm text-emerald-100/85">
                    HS {commodity.hsCode} · {commodity.grades.join(" · ")}
                  </p>
                </div>
              </div>

              <div className="grid gap-3 p-6 sm:grid-cols-2">
                {commodity.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="text-[11px] uppercase tracking-wide text-slate-500">
                      {spec.label}
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-emerald-900">
                      {spec.value}
                    </div>
                  </div>
                ))}
                <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                  <div className="text-[11px] uppercase tracking-wide text-amber-600/80">
                    Min. Order
                  </div>
                  <div className="mt-0.5 text-sm font-semibold text-amber-900">
                    {commodity.minOrder}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Get your {short.toLowerCase()} proforma quote for {route.country}
            </h2>
            <p className="mt-3 text-slate-600">
              Two steps: tell us the quantity and terms, then your contact
              details. Our trade desk replies within one business day with a
              tracked proforma ID.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl">
            <p className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
              <Anchor className="h-3.5 w-3.5" />
              {shipping.port} → {route.destinationPort} · {shipping.transitDays}{" "}
              · {commodity.minOrder}
            </p>
            <RfqWizard
              defaultCommodityId={commodity.id}
              defaultDestinationPort={route.destinationPort}
              lockCommodity
              source={`trade_route_${route.slug}`}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Frequently asked questions — {route.label}
        </h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="font-semibold text-slate-900">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {(relatedRoutes.length > 0 || market) && (
            <div className="grid gap-8 lg:grid-cols-2">
              {market && (
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    The {market.city} market
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Explore all Tanzanian commodities we ship to {market.city},{" "}
                    {market.country} and the surrounding region.
                  </p>
                  <Button asChild variant="outline" className="mt-4">
                    <Link href={`/market/${market.slug}`}>
                      View {market.city} market page{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              )}
              {relatedRoutes.length > 0 && (
                <div className="rounded-2xl border border-slate-200 p-6">
                  <h3 className="text-lg font-bold text-slate-900">
                    Related import routes
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {relatedRoutes.slice(0, 6).map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/trade-route/${r.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 hover:text-emerald-600"
                        >
                          <ChevronRight className="h-3.5 w-3.5" /> Export{" "}
                          {r.label.toLowerCase()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="mt-12 rounded-3xl bg-emerald-gradient p-8 text-center text-white sm:p-10">
            <h2 className="text-xl font-bold sm:text-2xl">
              Ready to import {short.toLowerCase()} to {route.country}?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-emerald-100/85">
              Discuss volumes, pricing, and shipping lines with the trade desk —
              or start your proforma request above.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-amber-gradient px-6 py-5 text-base hover:opacity-90">
                <Link href="/quote">
                  <FileText className="mr-2 h-5 w-5" /> Request Proforma Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent px-6 py-5 text-base text-white hover:bg-white/10">
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                    `Hello AgriOrvian, I'm interested in importing ${short} to ${route.country}. Please share a proforma quote.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PhoneCall className="mr-2 h-5 w-5" /> WhatsApp the Trade Desk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}