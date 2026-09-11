import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FlaskConical,
  Snowflake,
  Thermometer,
  Radar,
  Globe2,
  ShieldCheck,
  RefreshCw,
  BarChart3,
  ArrowRight,
  ScanLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/lib/motion";

export const metadata: Metadata = {
  title: "Quality, Supply Chain & Cold Chain",
  description:
    "Inside AgriOrvian's farm-to-port quality program: laboratory testing, pesticide residue screening, cold-chain tracking, and full traceability.",
};

const labTests = [
  { name: "Moisture Content", desc: "AOAC-compliant methods for grains, nuts, and oilseeds." },
  { name: "Pesticide Residue Screen", desc: "Multi-residue screening aligned with MRL limits for EU & GCC." },
  { name: "Aflatoxin & Mycotoxin", desc: "Zero-tolerance screening for maize, nuts, and spices." },
  { name: "Outturn & Nut Count", desc: "Cashew outturn verification to international standards." },
  { name: "Oil Content & FFA", desc: "Fully and high-oleic analysis for oilseeds and crude oil." },
  { name: "Microbiology", desc: "Pathogen and hygiene panels on fish and fresh produce." },
];

const coldChain = [
  { icon: Snowflake, title: "Pre-cooling", desc: "Rapid field-to-packhouse cool-down that locks in freshness at the source." },
  { icon: Thermometer, title: "Temperature-Controlled Transit", desc: "Reefer monitoring at 4–6°C for produce and -18°C for fish." },
  { icon: Radar, title: "Real-Time Tracking", desc: "In-transit temperature and GPS traceability for every container." },
  { icon: BarChart3, title: "Cold-Chain Compliance", desc: "Documented heat-map & data-log reports on every voyage." },
];

const traceability = [
  "Lot-level barcoding from the outgrower to the packhouse.",
  "Digital traceability ledger transferred with each shipped lot.",
  "Complete phytosanitary & inspection documentation chain.",
  "Batch recall readiness built into our warehouse management.",
];

export default function QualityPage() {
  return (
    <div className="bg-[#fafaf8]">
      <section className="relative overflow-hidden bg-[#103B2B] py-16 text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/quality/hero-warehouse.jpg"
            alt=""
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-emerald-gradient opacity-90" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<span className="inline-flex flex-wrap items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300">
              <ScanLine className="mr-1.5 h-4 w-4" /> Farm-to-Port Quality Program
            </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
            Quality, Supply Chain &amp; Cold Chain
          </h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            A disciplined, farm-to-port quality program that builds trust with
            every global buyer. Lab-verified. Tracked. Traceable.
          </p>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Stage 01 · Verification
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Accredited Laboratory Analysis &amp; Grading
            </h2>
            <p className="mt-3 text-slate-600">
              Every export lot passes rigorous testing in accredited labs before
              it is cleared for packing.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "AOAC-compliant methods aligned to EU & GCC import rules.",
                "Zero-tolerance aflatoxin and mycotoxin screening.",
                "Independent, third-party grading on every lot.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/quality/grading.jpg"
              alt="Commodities being graded on the packing floor"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {labTests.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6">
              <FlaskConical className="h-6 w-6 text-emerald-700" />
              <h3 className="mt-3 font-semibold text-slate-900">{t.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{t.desc}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-amber-600">
              Stage 02 · Preservation
            </span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Cold-Chain Discipline, End to End
            </h2>
            <p className="mt-3 text-slate-600">
              From pre-cooling at the packhouse to temperature-monitored reefer
              transit, AgriOrvian protects product integrity so your consignment
              arrives at spec.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {coldChain.map((c) => (
                <div key={c.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <c.icon className="h-6 w-6 text-teal-500" />
                  <h3 className="mt-3 font-semibold text-slate-900">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/quality/reefer-truck.jpg"
              alt="Refrigerated truck for temperature-controlled export cargo"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-emerald-gradient p-8 text-white sm:p-12">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300">
                <Globe2 className="mr-1.5 h-4 w-4" /> Stage 03 · Traceability
              </span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Farm-to-Port Traceability
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-emerald-50/90">
                Every lot we ship can be followed from the outgrower&apos;s field
                through grading, packing, and port loading, so that a single scan
                tells you exactly where your cargo came from and how it was
                handled.
              </p>
              <div className="mt-6 rounded-2xl bg-white/10 p-5">
                <div className="flex items-center gap-2 font-semibold">
                  <RefreshCw className="h-4 w-4 text-amber-300" />
                  Continuous Improvement
                </div>
                <p className="mt-2 text-sm text-emerald-50/85">
                  Annual supplier audits, sustainability reviews, and program
                  upgrades to keep pace with global standards.
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {traceability.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/10 p-4"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />
                  <span className="text-sm text-emerald-50/95">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MotionSection>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Putting this program to work for your consignment
          </h2>
          <p className="max-w-2xl text-slate-600">
            Tell us the commodity, quantity, and destination, and we&apos;ll return a
            proforma quote backed by the same lab, cold-chain, and traceability
            standards on every shipment.
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