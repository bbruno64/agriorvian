import type { Metadata } from "next";
import Link from "next/link";
import {
  Sprout,
  Users,
  Leaf,
  Building2,
  Globe2,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Handshake,
  Recycle,
} from "lucide-react";
import { MotionSection } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About AgriOrvian",
  description:
    "AgriOrvian is the export division of Orvian Company Limited, a BRELA-registered, TRA-compliant trading house in Dar es Salaam that supplies Tanzanian produce, cashew, coffee, spices, and lake fish to 24 destinations across four continents.",
};

const pillars = [
  {
    icon: Sprout,
    title: "Origin-Direct Sourcing",
    desc: "We build multi-season relationships with vetted outgrower networks and estates, not one-off spot buys. That continuity is what lets us keep quality, volume, and traceability predictable shipment after shipment.",
  },
  {
    icon: Users,
    title: "One Accountable Team",
    desc: "Sourcing, grading, packing, freight, and port clearance are all handled in-house from Dar es Salaam. One team owns the consignment end to end, so when something goes wrong there is a single door to knock on.",
  },
  {
    icon: ShieldCheck,
    title: "Paperwork You Can Bank On",
    desc: "Every lot moves with its complete file: phytosanitary certificates, grading analysis, weight/count documents, and pre-shipment inspection reports, issued, filed, and available to the buyer at any time.",
  },
];

const markets = [
  {
    region: "Europe",
    buyers: "Retail & foodservice",
    focus: "Avocados, cashew kernels, and Nile perch fillets, graded for EU retail packaging and chill-chain delivery.",
  },
  {
    region: "Middle East",
    buyers: "Importers, distributors & hotel supply",
    focus: "Fresh avocados and chilled lake fish running on short, fast sea lanes into Gulf markets.",
  },
  {
    region: "South Asia",
    buyers: "Processors & millers",
    focus: "Raw cashew, spices, and oilseeds supplied on consistent RCN outturn and moisture specs.",
  },
  {
    region: "East Asia",
    buyers: "Food manufacturers & confectionery",
    focus: "Cashew kernels, sesame, and sunflower for modern production lines across the region.",
  },
];

const values = [
  {
    icon: Handshake,
    title: "Outgrower Partnerships",
    desc: "Long-term relationships with vetted farming networks secure consistent, traceable supply at origin.",
  },
  {
    icon: Leaf,
    title: "Sustainable Harvesting",
    desc: "Responsible land use, water stewardship, and non-GMO sourcing across our supplying regions.",
  },
  {
    icon: Recycle,
    title: "Reduced Food Loss",
    desc: "Cold-chain and modern packaging cut post-harvest losses from farm to port.",
  },
  {
    icon: Users,
    title: "Local Impact",
    desc: "Supporting farming livelihoods and rural employment across Tanzania's highlands and coast.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#fafaf8]">
      <section className="bg-emerald-gradient py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300">
            <Building2 className="mr-1.5 h-4 w-4" /> Export Division · Dar es Salaam
          </span>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">About AgriOrvian</h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            The dedicated agricultural export division of Orvian Company
            Limited, headquartered in Dar es Salaam.
          </p>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          A Trading House That Owns the Road from Farm to Port
        </h2>
        <p className="mt-5 leading-relaxed text-slate-600">
          Orvian Company Limited built its reputation across East Africa as a
          dependable trading and supply house. AgriOrvian is its dedicated
          export arm, created for one reason: to give international buyers a
          single, accountable partner for Tanzanian agricultural goods, rather
          than a chain of middlemen.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          Our work starts inland, not at the port. We operate through
          multi-season outgrower partnerships with vetted farming networks and
          estates across Tanzania&apos;s highlands, the southern cashew belt,
          and the Lake Victoria basin. That presence at origin is what lets us
          control what a commodity is actually worth at export: its grade, its
          moisture, its purity, its paper trail.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          From there, everything else is ours to manage: grading, packing,
          cold-chain, freight booking, phytosanitary clearance, and port
          loading, all coordinated from our Dar es Salaam headquarters. A
          consignment handed to us is a consignment we see through to the
          buyer&apos;s port of discharge, under one document set and one
          accountable team.
        </p>
        <p className="mt-4 leading-relaxed text-slate-600">
          That operating model is the whole point of the company. If Tanzanian
          origin deserves a premium on the world market, the exporter has to
          prove the origin was handled properly from the field onward. We built
          AgriOrvian to be that proof, at scale.
        </p>
      </MotionSection>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              The AgriOrvian Difference
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Three commitments define how the company operates.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-200 bg-[#fafaf8] p-6">
                <p.icon className="h-7 w-7 text-emerald-700" />
                <h3 className="mt-3 font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            The Markets We Serve
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We sell to the people who buy at scale: importers, processors,
            distributors, and modern-retail suppliers across four continents.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {markets.map((m) => (
            <div key={m.region} className="rounded-2xl border border-slate-200 bg-white p-6">
              <Globe2 className="h-7 w-7 text-amber-500" />
              <h3 className="mt-3 font-semibold text-slate-900">{m.region}</h3>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-emerald-700">
                {m.buyers}
              </div>
              <p className="mt-2 text-sm text-slate-500">{m.focus}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Full trade lanes, transit times, and port routing live on the{" "}
          <Link href="/commodities" className="font-semibold text-emerald-700 underline-offset-4 hover:underline">
            commodity pages
          </Link>
          .
        </p>
      </MotionSection>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                What We Stand For
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Values are easy to print and easy to ignore. Ours describe how
                we actually operate: how we buy, pack, and build our reputation
                one container at a time.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-2xl border border-slate-200 bg-[#fafaf8] p-6">
                  <v.icon className="h-7 w-7 text-amber-500" />
                  <h3 className="mt-3 font-semibold text-slate-900">{v.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Let&apos;s talk about your next shipment
          </h2>
          <p className="max-w-2xl text-slate-600">
            Send us the commodity, quantity, and destination, and we&apos;ll
            respond with a proforma quote and the specifics of how we&apos;ll move it.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-amber-gradient px-7 py-6 text-base font-semibold hover:opacity-90">
              <Link href="/quote">
                Request Proforma Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-7 py-6 text-base font-semibold">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5 text-emerald-700" /> Message Our Trade Desk
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}