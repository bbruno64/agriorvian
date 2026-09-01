"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { commodities, commodityCategories, type Category } from "@/data/commodities";
import { CommodityCard } from "@/components/commodities/commodity-card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/lib/motion";

const tabs: Array<"All" | Category> = ["All", ...commodityCategories];

export function FeaturedGrid() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All");

  const filtered = useMemo(() => {
    if (active === "All") return commodities.filter((c) => c.featured);
    return commodities.filter(
      (c) => c.category === active && (c.featured || c.id === "sesame")
    );
  }, [active]);

  return (
    <MotionSection className="bg-[#fafaf8] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-slate-900 sm:text-4xl"
            >
              Featured Commodities
            </motion.h2>
            <p className="mt-3 max-w-xl text-slate-600">
              A curated selection from our export portfolio — each backed by
              full laboratory specs, packaging options, and certification.
            </p>
          </div>
          <Button asChild variant="ghost" className="text-emerald-700">
            <Link href="/commodities">
              View Full Catalog <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === tab
                  ? "bg-emerald-gradient text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <CommodityCard key={c.id} commodity={c} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </MotionSection>
  );
}
