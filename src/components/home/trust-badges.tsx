"use client";

import { trustBadges } from "@/data/commodities";
import { CommodityIcon } from "@/components/commodities/commodity-icon";
import { MotionSection } from "@/lib/motion";

export function TrustBadges() {
  return (
    <MotionSection className="border-y border-slate-200 bg-[#fafaf8] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          Trusted &amp; Certified for Global Trade
        </h3>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {trustBadges.map((b) => (
            <div
              key={b.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white p-5 text-center"
            >
              <CommodityIcon
                name={b.icon}
                className="h-7 w-7 text-emerald-700"
              />
              <div className="text-sm font-bold text-slate-900">{b.name}</div>
              <div className="text-xs text-slate-500">{b.org}</div>
            </div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
