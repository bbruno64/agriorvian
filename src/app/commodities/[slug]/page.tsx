import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Ship,
  Package,
  ShieldCheck,
  Clock,
  ArrowRight,
  FileText,
  FlaskConical,
  Snowflake,
  Radar,
  PhoneCall,
  ChevronRight,
} from "lucide-react";
import { commodities, getCommodityById } from "@/data/commodities";
import {
  commoditySeo,
  productSchema,
  breadcrumbSchema,
  faqSchema,
  faqForCommodity,
  shortName,
} from "@/lib/seo";
import { JsonLd } from "@/components/jsonld";
import { CommodityImage } from "@/components/ui/commodity-image";
import { CommodityIcon } from "@/components/commodities/commodity-icon";
import { CommodityLinkCard } from "@/components/commodities/commodity-link-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT } from "@/data/site";
import { routesForCommodity } from "@/data/trade-routes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return commodities.map((commodity) => ({ slug: commodity.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const commodity = getCommodityById(slug);
  if (!commodity) return {};
  return commoditySeo(commodity);
}

export default async function CommodityDetailPage({ params }: Props) {
  const { slug } = await params;
  const commodity = getCommodityById(slug);
  if (!commodity) notFound();

  const faqs = faqForCommodity(commodity);
  const related = commodities.filter(
    (c) => c.category === commodity.category && c.id !== commodity.id
  );
  const routes = routesForCommodity(commodity.id);
  const short = shortName(commodity);

  const infoBlocks = [
    { label: "Origin", value: commodity.origin, icon: MapPin },
    { label: "Shelf Life", value: commodity.shelfLife, icon: Clock },
    { label: "Shipping", value: commodity.shipping.join(", "), icon: Ship },
    { label: "Min. Order", value: commodity.minOrder, icon: FlaskConical },
  ];

  return (
    <div className="bg-[#fafaf8]">
      <JsonLd data={productSchema(commodity)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Commodities", path: "/commodities" },
          { name: short, path: `/commodities/${commodity.id}` },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
          <li>
            <Link href="/" className="hover:text-emerald-800">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          </li>
          <li>
            <Link href="/commodities" className="hover:text-emerald-800">
              Commodities
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
          </li>
          <li aria-current="page" className="font-semibold text-emerald-800">
            {short}
          </li>
        </ol>
      </nav>

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative aspect-[3/1] w-full overflow-hidden bg-slate-100 sm:aspect-[21/8]">
            <CommodityImage
              src={commodity.image}
              alt={commodity.name}
              className="absolute inset-0 h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex flex-col gap-3 sm:bottom-6 sm:left-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                  <CommodityIcon name={commodity.icon} className="h-6 w-6 text-white" />
                </span>
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-amber-500 text-white">
                      {commodity.category}
                    </Badge>
                    {commodity.featured && (
                      <Badge variant="outline" className="border-white/40 bg-black/40 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                {commodity.name} — Tanzania Export
              </h1>
            </div>
          </div>

          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-slate-900">
                {short} from Tanzania, delivered to your market
              </h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                {commodity.description}
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                AgriOrvian, the export division of Orvian Company Limited,
                sources {short.toLowerCase()} directly from {commodity.origin}.
                Every lot is laboratory-tested, graded, and packed under our
                farm-to-port quality and cold-chain program before loading{" "}
                {commodity.shipping.join(" or ")} through Dar es Salaam, Tanga,
                or Mtwara.
              </p>

              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Technical Specifications &amp; HS Code {commodity.hsCode}
                </h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Grades Available
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {commodity.grades.map((g) => (
                    <span
                      key={g}
                      className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {infoBlocks.map(({ label, value, icon: Icon }) => (
                  <div key={label} className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <Icon className="h-4 w-4 text-teal-500" /> {label}
                    </div>
                    <p className="mt-1 text-sm text-slate-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">
                  Request a Proforma Quote
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  FOB Dar es Salaam or CIF destination port. Our trade desk
                  responds within one business day.
                </p>
                <div className="mt-4 flex flex-col gap-2.5">
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-gradient hover:opacity-90"
                  >
                    <Link href={`/quote?commodity=${commodity.id}`}>
                      <FileText className="mr-2 h-4 w-4" /> Request Quote
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a
                      href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                        `Hello AgriOrvian, I'm interested in ${commodity.name}. Please share a proforma quote.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <PhoneCall className="mr-2 h-4 w-4 text-emerald-700" />{" "}
                      WhatsApp the Trade Desk
                    </a>
                  </Button>
                </div>
                <p className="mt-4 text-xs text-slate-400">
                  HS {commodity.hsCode} · {commodity.minOrder}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
                  <ShieldCheck className="h-5 w-5 text-emerald-700" />
                  Certifications
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
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Package className="h-5 w-5 text-teal-500" />
                  Packaging Options
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  {commodity.packaging.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-emerald-gradient p-6 text-white">
                <h3 className="font-semibold">Why AgriOrvian</h3>
                <ul className="mt-3 space-y-2.5 text-sm text-emerald-50/90">
                  <li className="flex items-start gap-2">
                    <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                    Lab-verified quality on every lot
                  </li>
                  <li className="flex items-start gap-2">
                    <Snowflake className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                    Cold-chain logistics from packhouse to port
                  </li>
                  <li className="flex items-start gap-2">
                    <Radar className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                    In-transit temperature tracking
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Frequently asked questions about {short}
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

      {routes.length > 0 && (
        <section className="border-t border-slate-200 bg-[#fafaf8] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Key import routes for {short.toLowerCase()}
            </h2>
            <p className="mt-2 text-slate-600">
              Dedicated landing pages for the countries and ports that buy{" "}
              {short.toLowerCase()} most — with route-specific specs, transit
              times, and a quote form pre-filled for this export.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {routes.map((route) => (
                <Link
                  key={route.slug}
                  href={`/trade-route/${route.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-emerald-300 hover:shadow-sm"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                    Tanzania → {route.country}
                  </div>
                  <div className="mt-1 text-lg font-bold text-slate-900 group-hover:text-emerald-800">
                    {route.label}
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    {route.destinationPort} ·{" "}
                    {route.shipping?.transitDays ?? "via Dar es Salaam"}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800">
                    View route <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-t border-slate-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                  More {commodity.category}
                </h2>
                <p className="mt-2 text-slate-600">
                  Explore other export commodities we source from Tanzania.
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/commodities">
                  View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((c) => (
                <CommodityLinkCard key={c.id} commodity={c} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Ready to import {short.toLowerCase()} from Tanzania?
          </h2>
          <p className="max-w-2xl text-slate-600">
            Tell us the quantity, destination port, and target date — we&apos;ll
            return a proforma quote with confirmed specs, packaging, and
            Incoterms.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-amber-gradient px-7 py-6 text-base font-semibold hover:opacity-90">
              <Link href={`/quote?commodity=${commodity.id}`}>
                Request Proforma Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-7 py-6 text-base">
              <Link href="/contact">Talk to the Trade Desk</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}