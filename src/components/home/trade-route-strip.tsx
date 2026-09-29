import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { tradeRoutes } from "@/data/trade-routes";
import { getCommodityById } from "@/data/commodities";
import { shippingForRoute } from "@/data/trade-routes";

const popularSlugs = [
  "cashew-nuts-to-vietnam",
  "cashew-nuts-to-india",
  "avocados-to-netherlands",
  "coffee-to-germany",
  "sesame-to-china",
  "pulses-to-india",
  "avocados-to-uae",
  "maize-to-kenya",
];

export function TradeRouteStrip() {
  const routes = popularSlugs
    .map((slug) => tradeRoutes.find((r) => r.slug === slug))
    .filter((r) => Boolean(r));

  return (
    <section className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Direct trade routes from Tanzania
            </h2>
            <p className="mt-2 text-slate-600">
              Dedicated export pages for the commodity–country corridors most
              requested by importers — each with route-specific specs and a
              pre-filled proforma quote form.
            </p>
          </div>
          <Link
            href="/commodities"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-600"
          >
            View all commodities <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route) => {
            const commodity = route
              ? getCommodityById(route.commodityId)
              : undefined;
            if (!route || !commodity) return null;
            const shipping = shippingForRoute(route);
            return (
              <Link
                key={route.slug}
                href={`/trade-route/${route.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-emerald-300 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-amber-600">
                  <Globe2 className="h-3.5 w-3.5" /> Tanzania → {route.country}
                </div>
                <div className="mt-2 text-base font-bold text-slate-900 group-hover:text-emerald-800">
                  {commodity.name}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  {shipping.transitDays} · {route.destinationPort}
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800">
                  Open route <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}