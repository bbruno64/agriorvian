import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sprout,
  MapPin,
  Phone,
  Mail,
  Building2,
  FileCheck2,
  ShieldCheck,
  FlaskConical,
  Snowflake,
  Globe2,
  ArrowRight,
  MessageCircle,
  Handshake,
  ScrollText,
  ClipboardCheck,
  Anchor,
  Users,
  BadgeCheck,
} from "lucide-react";
import { MotionSection } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/jsonld";
import { breadcrumbSchema } from "@/lib/seo";
import { CONTACT, liveMetrics } from "@/data/site";
import { qualitySteps, trustBadges } from "@/data/commodities";

export const metadata: Metadata = {
  title: "About AgriOrvian — Tanzania's Verified Commodity Export House",
  description:
    "AgriOrvian is the BRELA-registered, TRA-compliant export division of Orvian Company Limited, Dar es Salaam. How we source locally, hold export licenses, and control quality across 24 destinations on 4 continents.",
  keywords: [
    "tanzania commodity exporter",
    "BRELA registered export company",
    "tanzania agricultural export license",
    "dar es salaam trading house",
    "farm to port quality control",
    "TAPHIS phytosanitary exporter",
  ],
  alternates: {
    canonical: "/about",
  },
};

const sourcingRegions = [
  {
    region: "Southern Cashew Belt",
    towns: "Tunduru · Newala · Masasi",
    crops: "Raw cashew (RCN)",
    note: "Multi-season outgrower networks built around Tanzania's cashew heartland.",
  },
  {
    region: "Southern & Northern Highlands",
    towns: "Mbeya · Njombe · Arusha · Kilimanjaro",
    crops: "Avocados · coffee · tea",
    note: "Elevation-grown produce and washed Arabica with cold-chain-field-to-packhouse handling.",
  },
  {
    region: "Lake Victoria Basin",
    towns: "Mwanza · Mara · Kagera",
    crops: "Nile perch · tilapia · dagaa",
    note: "HACCP-certified processing plants for EU and GCC fisheries programs.",
  },
  {
    region: "Central Plains",
    towns: "Dodoma · Singida",
    crops: "Sesame · sunflower · pulses",
    note: "High-purity grains and oilseeds with low-moisture, humidity-controlled storage.",
  },
  {
    region: "Zanzibar & Pemba",
    towns: "Unguja · Pemba",
    crops: "Cloves · pepper · cardamom · cinnamon",
    note: "Island spice farms supplying organically certified and hand-cleaned lots.",
  },
];

const licenses = [
  {
    icon: Building2,
    body: "BRELA Business Registration",
    desc: "Registered and licensed as a Tanzanian business through the Business Registrations and Licensing Agency.",
  },
  {
    icon: FileCheck2,
    body: "TRA Tax Compliance",
    desc: "Holds a Tanzania Revenue Authority TIN and maintains tax-compliant trading and export declarations.",
  },
  {
    icon: ScrollText,
    body: "TAPHIS Phytosanitary Licensing",
    desc: "Every plant-origin export lot is cleared under phytosanitary certification issued by TAPHIS.",
  },
  {
    icon: BadgeCheck,
    body: "Sector Export Authorizations",
    desc: "Commodity-specific export permits where regulation requires them — RCN under the Cashewnut Board of Tanzania, coffee under the Tanzania Coffee Board, and fisheries products under the Ministry of Livestock & Fisheries.",
  },
  {
    icon: ClipboardCheck,
    body: "TBS Product Standards",
    desc: "Export-grade products verified against Tanzania Bureau of Standards specifications before shipping.",
  },
  {
    icon: ShieldCheck,
    body: "SGS & Third-Party Inspection",
    desc: "Independent pre-shipment inspection and laboratory reports (SGS and equivalent) issued for buyer assurance.",
  },
];

const sourcingSteps = [
  {
    icon: Handshake,
    title: "Multi-Season Outgrower Contracts",
    desc: "Vetted farmer networks and estates are contracted across seasons, not bought spot. Consistent volume, quality, and a stable farm-gate income for growers.",
  },
  {
    icon: MapPin,
    title: "Field Teams & Area Aggregators",
    desc: "Our own field staff and long-standing local aggregators grade at origin, so substandard lots are rejected in the field, not at the port.",
  },
  {
    icon: ClipboardCheck,
    title: "Farm-Gate Sampling & Grading",
    desc: "Representative samples are drawn and graded at purchase; every outgrower lot is logged into our traceability ledger before it leaves the village.",
  },
  {
    icon: Sprout,
    title: "Agronomy & Quality Support",
    desc: "Growers receive agronomy guidance, clean seed and planting material access, and harvest handover training — improving yield and lot consistency.",
  },
];

const qualityProcess = qualitySteps.map((step) => ({
  ...step,
  icon:
    step.icon === "sprout"
      ? Sprout
      : step.icon === "flask"
      ? FlaskConical
      : step.icon === "snowflake"
      ? Snowflake
      : step.icon === "shield"
      ? ShieldCheck
      : Anchor,
}));

const labTests = [
  "Moisture content (AOAC-compliant)",
  "Pesticide residue screening to EU & GCC MRLs",
  "Aflatoxin & mycotoxin zero-tolerance screening",
  "Cashew outturn & nut count",
  "Oil content & FFA",
  "Microbiology panels on fish & fresh produce",
];

const exportDocuments = [
  "Commercial invoice & packing list",
  "Certificate of origin",
  "Bill of lading",
  "Phytosanitary certificate (TAPHIS)",
  "SGS / third-party pre-shipment inspection report",
  "Certificate of analysis from accredited labs",
];

export default function AboutPage() {
  return (
    <div className="bg-[#fafaf8]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About AgriOrvian", path: "/about" },
        ])}
      />

      <section className="bg-emerald-gradient py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300">
            <Building2 className="mr-1.5 h-4 w-4" /> Registered Export Division ·
            Dar es Salaam
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            About AgriOrvian
          </h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            A BRELA-registered, TRA-compliant export house that sources from
            Tanzanian farmers, ships under full export licensing, and controls
            quality from the field to the port.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {liveMetrics.map((m) => (
              <div key={m.label} className="rounded-2xl bg-white/10 p-5">
                <div className="text-2xl font-bold text-white">
                  {m.value.toLocaleString()}
                  {m.suffix}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-100/70">
                  {m.label}
                </div>
                <div className="mt-0.5 text-xs text-emerald-100/60">{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              The Company
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              One Accountable Partner from Farm to Port
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              AgriOrvian is the dedicated agricultural export division of{" "}
              <span className="font-semibold text-slate-900">
                Orvian Company Limited
              </span>
              , headquartered in Mbezi Makonde, Dar es Salaam. We are formally
              registered with BRELA, hold a Tanzania Revenue Authority TIN, and
              trade as an exporting house — not as a chain of intermediaries.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Everything we ship is organized by one in-house team: sourcing,
              grading, packing, laboratory verification, phytosanitary
              clearance, freight booking, and port loading. When you deal with
              AgriOrvian, there is a single document set, a single door to
              knock on, and a single record of where your cargo came from.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              That end-to-end ownership is what international buyers still ask
              for. Tanzanian origin earns its premium when the exporter can
              prove the commodity was handled properly from the field onward —
              which is exactly what our sourcing, licensing, and quality-control
              program below is built to demonstrate.
            </p>
            <div className="mt-6 grid gap-2.5 text-sm text-slate-700">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                {CONTACT.address}
              </p>
              <p className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-emerald-800"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-emerald-800"
                >
                  {CONTACT.email}
                </a>
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src="/quality/hero-warehouse.jpg"
                alt="AgriOrvian export warehouse and packing operation in Dar es Salaam"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
                <Globe2 className="h-4 w-4 text-amber-500" /> Where we ship
              </div>
              <p className="mt-1.5 text-sm text-slate-600">
                {CONTACT.company.split(" — ")[0]} exports to buy-side
                customers in Europe, the Middle East, South Asia, East Asia,
                and East Africa through the Ports of Dar es Salaam, Tanga and
                Mtwara.
              </p>
              <Link
                href="/commodities"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-600"
              >
                Explore commodities <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </MotionSection>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                01 · Local Sourcing
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                We Source at Origin, Not from a Trading Floor
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Tanzanian agri-export quality is decided in the field, months
                before a container is loaded. That is why AgriOrvian maintains
                on-the-ground relationships with vetted outgrower networks and
                estates across the country&apos;s major producing regions —
                rather than buying anonymous lots on the open market.
              </p>
              <div className="mt-8 space-y-5">
                {sourcingSteps.map((s) => (
                  <div key={s.title} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                      <s.icon className="h-5 w-5 text-emerald-700" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/quality/grading.jpg"
                  alt="Local graders inspecting Tanzanian export commodity lots at origin"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {sourcingRegions.map((region) => (
                  <div
                    key={region.region}
                    className="rounded-2xl border border-slate-200 bg-[#fafaf8] p-5"
                  >
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <MapPin className="h-4 w-4 text-amber-500" />
                      {region.region}
                    </div>
                    <div className="mt-1 text-xs font-medium text-emerald-700">
                      {region.towns}
                    </div>
                    <div className="mt-1 text-sm font-medium text-slate-700">
                      {region.crops}
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                      {region.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            02 · Export Licensing &amp; Compliance
          </span>
          <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Licensed, Registered, and Audit-Ready
          </h2>
          <p className="mt-4 text-slate-600">
            Exporting from Tanzania means operating under a defined set of
            permits, authorities, and standards. We hold and comply with each
            of these — and the paperwork travels with every consignment.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {licenses.map((l) => (
            <div
              key={l.body}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <l.icon className="h-7 w-7 text-emerald-700" />
              <h3 className="mt-3 font-semibold text-slate-900">{l.body}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {l.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
            <FileCheck2 className="h-5 w-5 text-emerald-700" />
            Documentation issued with every export lot
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {exportDocuments.map((doc) => (
              <span
                key={doc}
                className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-100"
              >
                {doc}
              </span>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              03 · Quality Control Process
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              A Five-Step Program from Grade to Port
            </h2>
            <p className="mt-4 text-slate-600">
              Our farm-to-port quality program is applied to every lot, in
              every commodity, on every shipment — not just for flagship
              customers.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {qualityProcess.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-[#fafaf8] p-6"
              >
                <div className="flex items-center justify-between">
                  <step.icon className="h-7 w-7 text-amber-500" />
                  <span className="text-sm font-bold text-emerald-700">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Laboratory tests &amp; grading checks
              </h3>
              <ul className="mt-4 space-y-2.5">
                {labTests.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Certifications backing our quality claims
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {trustBadges.map((b) => (
                  <span
                    key={b.name}
                    className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200"
                  >
                    {b.name} · {b.org}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Full detail on laboratory analysis, cold chain and
                traceability lives on the{" "}
                <Link
                  href="/quality"
                  className="font-semibold text-emerald-800 underline-offset-4 hover:underline"
                >
                  Quality &amp; Cold Chain page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#fafaf8] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
                The Trade Desk
              </span>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Real People at a Real Address
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                E-E-A-T is earned through transparency, and transparency means
                a buyer can always reach the people behind the consignment.
                Our trade desk answers inbound inquiries from production,
                logistics, and quality staff in Dar es Salaam — in English,
                with a one-business-day response commitment.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <p className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-emerald-700" />{" "}
                  {CONTACT.company}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-emerald-700" />{" "}
                  {CONTACT.address}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-700" />{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-emerald-800"
                  >
                    {CONTACT.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-700" />{" "}
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="hover:text-emerald-800"
                  >
                    {CONTACT.phone}
                  </a>{" "}
                  · WhatsApp {CONTACT.whatsappNumber}
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-emerald-gradient p-8 text-white sm:p-10">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-amber-300">
                <ShieldCheck className="h-5 w-5" /> Why buyers verify us
              </div>
              <ul className="mt-5 space-y-3.5">
                {[
                  "BRELA-registered company and TRA tax-compliant trading entity",
                  "TAPHIS-issued phytosanitary certification on every plant-origin export",
                  "Commodity-specific export authorizations where Tanzanian law requires them",
                  "SGS and accredited third-party inspection available on every lot",
                  "HACCP-certified processing plants for fisheries products",
                  "48,000+ tons exported annually to 24 destinations on 4 continents",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                    <span className="text-emerald-50/95">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Put the program to work on your next shipment
          </h2>
          <p className="max-w-2xl text-slate-600">
            Send us the commodity, quantity, and destination, and we&apos;ll
            respond with a proforma quote — alongside the sourcing, licensing,
            and quality documentation this page describes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-amber-gradient px-7 py-6 text-base font-semibold hover:opacity-90"
            >
              <Link href="/quote">
                Request Proforma Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-7 py-6 text-base font-semibold"
            >
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5 text-emerald-700" />{" "}
                Message Our Trade Desk
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}