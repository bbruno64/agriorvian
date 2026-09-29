import Link from "next/link";
import { MapPin, Ship, ArrowUpRight } from "lucide-react";
import type { Commodity } from "@/data/commodities";
import { CommodityImage } from "@/components/ui/commodity-image";
import { Badge } from "@/components/ui/badge";

export function CommodityLinkCard({ commodity }: { commodity: Commodity }) {
  return (
    <Link
      href={`/commodities/${commodity.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <CommodityImage
          src={commodity.image}
          alt={commodity.name}
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge
            variant="outline"
            className="border-white/40 bg-black/40 text-white backdrop-blur-sm"
          >
            {commodity.category}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800">
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

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 group-hover:text-emerald-900">
            View Product Page <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}