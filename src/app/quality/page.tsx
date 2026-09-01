import type { Metadata } from "next";
import {
  FlaskConical,
  Snowflake,
  Thermometer,
  Radar,
  Globe2,
  ShieldCheck,
  RefreshCw,
  BarChart3,
} from "lucide-react";
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
  { name: "Microbiology", desc: "Pathogen and hygiene panels on seafood and fresh produce." },
];

const coldChain = [
  { icon: Snowflake, title: "Pre-cooling", desc: "Rapid field-to-packhouse cool-down to lock in freshness." },
  { icon: Thermometer, title: "Temperature-Controlled Transit", desc: "Reefer monitoring at 4–6°C for produce and -18°C for seafood." },
  { icon: Radar, title: "Real-Time Tracking", desc: "In-transit temperature and GPS traceability for every container." },
  { icon: BarChart3, title: "Cold-Chain Compliance", desc: "Documented heat-map & data-log reports for every voyage." },
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
      <section className="bg-emerald-gradient py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Quality, Supply Chain & Cold Chain
          </h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            A disciplined, farm-to-port quality program that builds trust with
            every global buyer. Lab-verified. Tracked. Traceable.
          </p>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Accredited Laboratory Analysis &amp; Grading
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Every export lot passes rigorous testing in accredited labs before
            it is cleared for packing.
          </p>
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

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Cold-Chain Discipline, End to End
              </h2>
              <p className="mt-4 text-slate-600">
                From pre-cooling at the packhouse to temperature-monitored
                reefer transit, AgriOrvian protects product integrity so your
                consignment arrives at spec.
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
            <div className="rounded-3xl bg-emerald-gradient p-8 text-white">
              <h3 className="flex items-center gap-2 text-lg font-bold">
                <Globe2 className="h-6 w-6 text-amber-300" /> Farm-to-Port Traceability
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-emerald-50/90">
                {traceability.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl bg-white/10 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <RefreshCw className="h-4 w-4 text-amber-300" />
                  Continuous Improvement
                </div>
<p className="mt-1 text-xs text-emerald-50/80">
                Annual supplier audits, sustainability reviews, and program
                upgrades to keep pace with global standards.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}