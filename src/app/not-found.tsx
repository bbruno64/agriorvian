import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="bg-[#fafaf8]">
      <section className="bg-emerald-gradient py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <Sprout className="h-8 w-8 text-amber-400" />
          </span>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-300">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            That page isn&apos;t in our catalog
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-emerald-100/85">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            Browse our commodity catalog or request a quote to reach the trade
            desk.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-amber-gradient px-7 py-6 text-base font-semibold hover:opacity-90">
              <Link href="/commodities">
                Browse Commodities <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-emerald-50/30 bg-white/5 px-7 py-6 text-base text-white hover:bg-white/10 hover:text-white">
              <Link href="/quote">Request a Proforma Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}