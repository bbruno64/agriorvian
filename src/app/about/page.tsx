import type { Metadata } from "next";
import Link from "next/link";
import {
  Sprout,
  Users,
  Leaf,
  Building2,
  ArrowRight,
  Handshake,
  Recycle,
} from "lucide-react";
import { MotionSection } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About AgriOrvian",
  description:
    "Learn about AgriOrvian, the export division of Orvian Company Limited — our outgrower initiatives, sustainability, team, and Dar es Salaam HQ.",
};

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

const team = [
  { name: "Alex Massawe", role: "Managing Director", initials: "AM" },
  { name: "Neema Shirima", role: "Head of Commodities & Sourcing", initials: "NS" },
  { name: "John Mwaipopo", role: "Director, Seafood & Aquaculture", initials: "JM" },
  { name: "Amara Okafor", role: "Director, Global Sales (Europe)", initials: "AO" },
  { name: "Rajesh Patel", role: "Head of Logistics & Cold Chain", initials: "RP" },
  { name: "Tumaini Mhina", role: "Quality Assurance Manager", initials: "TM" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#fafaf8]">
      <section className="bg-emerald-gradient py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">About AgriOrvian</h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            The dedicated agricultural export division of Orvian Company
            Limited, headquartered in Dar es Salaam.
          </p>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Part of a Trusted Household Name
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Orvian Company Limited has built a reputation across East Africa
              for dependable trading and supply. AgriOrvian is its dedicated
              export arm, bringing the region&apos;s finest agricultural
              commodities and seafood to the world&apos;s premier markets.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              From Hass avocados and high-outturn cashew to Lake Victoria Nile
              perch and Zanzibar spices, we combine deep origin expertise with
              rigorous quality, cold-chain logistics, and port clearance — all
              from our Dar es Salaam headquarters.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-slate-100 p-4">
              <Building2 className="h-8 w-8 text-emerald-700" />
              <div>
                <div className="font-semibold text-slate-900">Dar es Salaam HQ</div>
                <div className="text-sm text-slate-500">
                  Nyerere Road, Dar es Salaam, Tanzania
                </div>
              </div>
            </div>
            <Button asChild className="mt-6 bg-emerald-gradient hover:opacity-90">
              <Link href="/contact">
                Visit Our Office <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <v.icon className="h-7 w-7 text-amber-500" />
                <h3 className="mt-3 font-semibold text-slate-900">{v.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Leadership &amp; Export Team
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Seasoned professionals across sourcing, quality, cold chain, and
              international sales.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#fafaf8] p-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-gradient text-lg font-bold text-white">
                  {m.initials}
                </span>
                <div>
                  <div className="font-semibold text-slate-900">{m.name}</div>
                  <div className="text-sm text-slate-500">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Sprout className="h-4 w-4 text-emerald-700" />
            Founded on the principle that premium origin deserves premium handling.
          </div>
        </div>
      </section>
    </div>
  );
}