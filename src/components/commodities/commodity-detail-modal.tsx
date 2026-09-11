"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FileDown,
  MapPin,
  Ship,
  Package,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  Thermometer,
  Droplets,
  Filter,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import type { Commodity } from "@/data/commodities";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CommodityIcon } from "./commodity-icon";
import { CommodityImage } from "@/components/ui/commodity-image";
import { downloadSpecSheet } from "./spec-sheet";

function findSpec(commodity: Commodity, pattern: RegExp): string | null {
  const hit = commodity.specs.find((s) => pattern.test(s.label));
  return hit ? hit.value : null;
}

export function CommodityDetailModal({
  commodity,
  open,
  onOpenChange,
}: {
  commodity: Commodity;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      await downloadSpecSheet(commodity);
      toast.success("Spec sheet downloaded", {
        description: `${commodity.name} PDF has been generated.`,
      });
    } catch (err) {
      console.error(err);
      toast.error("Download failed", {
        description: "Please try again in a moment.",
      });
    } finally {
      setDownloading(false);
    }
  };

  const moisture = findSpec(commodity, /moisture|water\s*content/i);
  const temperature = findSpec(commodity, /temp|chain|storage|frozen|cold/i);
  const admixture = findSpec(commodity, /admixture|purity|deffective|broken/i);

  const exportParams = [
    { icon: Droplets, label: "Moisture %", value: moisture ?? "Per lot cert." },
    {
      icon: Filter,
      label: "Max Admixture",
      value: admixture ?? "Strictly graded",
    },
    {
      icon: Thermometer,
      label: "Temperature Controls",
      value: temperature ?? "Cold-chain managed",
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto p-0 sm:max-w-3xl">
        <div className="relative aspect-[2/1] w-full overflow-hidden bg-slate-100 sm:aspect-[21/9]">
          <CommodityImage src={commodity.image} alt={commodity.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-3 left-6 right-6">
            <DialogHeader>
              <div className="flex items-center gap-3 text-white">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
                  <CommodityIcon name={commodity.icon} className="h-6 w-6" />
                </span>
                <div>
                  <DialogTitle className="text-xl text-white">
                    {commodity.name}
                  </DialogTitle>
                  <DialogDescription className="font-mono text-xs text-emerald-50/90">
                    {commodity.category}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
          </div>
        </div>

        <div className="space-y-6 p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-amber-500 text-white">
              {commodity.category}
            </Badge>
            {commodity.shipping.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-slate-600">
            {commodity.description}
          </p>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-slate-900">
              Key Export Parameters
            </h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {exportParams.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-emerald-100 bg-emerald-50/60 p-3"
                >
                  <Icon className="h-5 w-5 shrink-0 text-emerald-700" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wide text-slate-500">
                      {label}
                    </div>
                    <div className="text-sm font-semibold text-emerald-900">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-slate-900">
              Technical Specifications
            </h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {commodity.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="text-[11px] uppercase tracking-wide text-slate-500">
                    {spec.label}
                  </div>
                  <div className="text-sm font-semibold text-emerald-900">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <h4 className="mb-2 text-sm font-semibold text-slate-900">
              Complete Grade Breakdown
            </h4>
            <div className="flex flex-wrap gap-2">
              {commodity.grades.map((g) => (
                <span
                  key={g}
                  className="rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <MapPin className="h-4 w-4 text-teal-500" /> Origin
              </div>
              <p className="mt-1 text-sm text-slate-700">{commodity.origin}</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <Clock className="h-4 w-4 text-teal-500" /> Shelf Life
              </div>
              <p className="mt-1 text-sm text-slate-700">
                {commodity.shelfLife}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <Ship className="h-4 w-4 text-teal-500" /> Shipping Methods
              </div>
              <p className="mt-1 text-sm text-slate-700">
                {commodity.shipping.join(", ")}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <Package className="h-4 w-4 text-teal-500" /> Packaging Options
              </div>
              <ul className="mt-1 list-inside list-disc text-sm text-slate-700">
                {commodity.packaging.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-emerald-50 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900">
              <ShieldCheck className="h-5 w-5 text-emerald-700" />
              Certifications
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {commodity.certifications.map((c) => (
                <span
                  key={c}
                  className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-emerald-800"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Min. Order:</span>{" "}
              {commodity.minOrder}
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                variant="outline"
                onClick={handleDownload}
                disabled={downloading}
              >
                {downloading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <FileDown className="mr-2 h-4 w-4" />
                )}
                {downloading ? "Generating…" : "Download Spec Sheet"}
              </Button>
              <Button asChild className="bg-emerald-gradient hover:opacity-90">
                <Link href={`/quote?commodity=${commodity.id}`}>
                  Request Quote <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}