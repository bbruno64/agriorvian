"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { MotionSection } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function QualityCTABanner() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <MotionSection className="overflow-hidden rounded-3xl bg-emerald-gradient p-8 text-center text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to source high-grade Tanzania commodities?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-emerald-100/85">
            Our trade desk responds within one business day with a tailored
            proforma quote, full spec sheet, and logistics plan.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-amber-gradient px-7 py-6 hover:opacity-90"
            >
              <Link href="/quote">
                Request Proforma Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 px-7 py-6 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/commodities">
                <FileText className="mr-2 h-5 w-5" /> Browse Commodities
              </Link>
            </Button>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
