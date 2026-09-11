"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin, Ship, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import type { Commodity } from "@/data/commodities";
import { CommodityIcon } from "./commodity-icon";
import { CommodityImage } from "@/components/ui/commodity-image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CommodityDetailModal } from "./commodity-detail-modal";
import { downloadSpecSheet } from "./spec-sheet";

export function CommodityCard({ commodity }: { commodity: Commodity }) {
  const [open, setOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
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
        description: "Please try again or use View Specs.",
      });
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -4 }}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        aria-label={`View full specifications for ${commodity.name}`}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring hover:shadow-xl"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <CommodityImage
            src={commodity.image}
            alt={commodity.name}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3 z-10">
            <Badge
              variant="outline"
              className="border-white/40 bg-black/40 text-white backdrop-blur-sm"
            >
              {commodity.category}
            </Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-gradient text-white">
              <CommodityIcon name={commodity.icon} className="h-5 w-5" />
            </span>
          </div>

          <h3 className="mt-3 text-lg font-bold text-slate-900">
            {commodity.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-slate-500">
            {commodity.tagline}
          </p>

          <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin className="h-3.5 w-3.5 text-teal-500" />
            <span className="line-clamp-1">{commodity.origin}</span>
          </div>
          <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
            <Ship className="h-3.5 w-3.5 text-teal-500" />
            <span>{commodity.shipping.join(" · ")}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {commodity.grades.slice(0, 2).map((g) => (
              <span
                key={g}
                className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-800"
              >
                {g}
              </span>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
            <Button
              variant="ghost"
              size="sm"
              className="px-0 font-semibold text-emerald-700 hover:bg-transparent hover:text-emerald-900"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
            >
              View Full Specs <ArrowUpRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 px-2 text-[12px] text-slate-500 hover:bg-transparent hover:text-emerald-800"
              onClick={handleDownload}
              disabled={downloading}
            >
              <FileDown className="h-3.5 w-3.5" />{" "}
              {downloading ? "Preparing…" : "PDF Spec Sheet"}
            </Button>
          </div>
        </div>
      </motion.div>

      <CommodityDetailModal
        commodity={commodity}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}