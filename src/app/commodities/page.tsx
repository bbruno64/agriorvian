"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  commodities,
  commodityCategories,
  type Category,
  type ShippingMethod,
} from "@/data/commodities";
import { CommodityCard } from "@/components/commodities/commodity-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const shippingMethods: ShippingMethod[] = ["Air Freight", "Sea Freight", "Reefer", "Mix"];

function ToggleChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "bg-emerald-gradient text-white"
          : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
      }`}
    >
      {children}
    </button>
  );
}

export default function CommoditiesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedShipping, setSelectedShipping] = useState<ShippingMethod[]>([]);

  const filtered = useMemo(() => {
    return commodities.filter((c) => {
      if (search && !c.name.toLowerCase().includes(search.toLowerCase()))
        return false;
      if (selectedCategories.length && !selectedCategories.includes(c.category))
        return false;
      if (
        selectedShipping.length &&
        !selectedShipping.some((s) => c.shipping.includes(s))
      )
        return false;
      return true;
    });
  }, [search, selectedCategories, selectedShipping]);

  const toggleCat = (c: Category) =>
    setSelectedCategories((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  const toggleShip = (s: ShippingMethod) =>
    setSelectedShipping((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const activeFilterCount = selectedCategories.length + selectedShipping.length;
  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedShipping([]);
    setSearch("");
  };

  return (
    <div className="bg-[#fafaf8]">
      <section className="bg-emerald-gradient py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold sm:text-4xl">
              Full Commodities Catalog
            </h1>
            <p className="mt-3 max-w-2xl text-emerald-100/85">
              Explore our complete export portfolio with technical specifications,
              HS codes, packaging, and certifications. Filter by category and
              shipping method.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search commodities… (e.g. avocado, sesame, coffee)"
              className="h-12 bg-white pl-10"
            />
          </div>
          {activeFilterCount > 0 && (
            <Button
              variant="ghost"
              onClick={clearAll}
              className="text-slate-500 hover:text-slate-700"
            >
              <X className="mr-2 h-4 w-4" /> Clear filters ({activeFilterCount})
            </Button>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row">
          <aside className="w-full shrink-0 lg:w-64">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <SlidersHorizontal className="h-4 w-4 text-emerald-700" />
                Filters
              </h3>

              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Category
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {commodityCategories.map((c) => (
                    <ToggleChip
                      key={c}
                      active={selectedCategories.includes(c)}
                      onClick={() => toggleCat(c)}
                    >
                      {c}
                    </ToggleChip>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Shipping Method
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {shippingMethods.map((s) => (
                    <ToggleChip
                      key={s}
                      active={selectedShipping.includes(s)}
                      onClick={() => toggleShip(s)}
                    >
                      {s}
                    </ToggleChip>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Showing <span className="font-semibold text-slate-900">{filtered.length}</span>{" "}
                commodity{filtered.length !== 1 ? "ies" : "y"}
              </span>
              {!filtered.length ? (
                <Badge variant="outline" className="text-slate-500">
                  No matches
                </Badge>
              ) : null}
            </div>

            {filtered.length ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((c) => (
                  <CommodityCard key={c.id} commodity={c} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-14 text-center">
                <p className="text-slate-500">
                  No commodities match your filters. Try clearing filters or
                  adjusting your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}