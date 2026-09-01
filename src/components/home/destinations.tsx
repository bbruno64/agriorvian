"use client";

import { motion } from "framer-motion";
import { Anchor, Ship, Clock, Map } from "lucide-react";
import { destinations } from "@/data/commodities";
import { MotionSection } from "@/lib/motion";

const portDetails = [
  { port: "Port of Dar es Salaam", note: "Primary gateway · principal container & reefer hub", via: "38+ weekly sailings" },
  { port: "Port of Tanga", note: "Regional gateway to the Indian Ocean coast", via: "Direct Gulf & East Africa routes" },
  { port: "Port of Mtwara", note: "Southern corridor for cashew & highland produce", via: "Asia-bound services via Singapore" },
];

export function Destinations() {
  return (
    <MotionSection className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Global Shipping Destinations
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Reliable container and reefer routes from Tanzania&apos;s three
            strategic ports to buyers across Europe, Asia, the Middle East, and
            North America.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-emerald-900">
              <Anchor className="h-5 w-5 text-amber-500" /> Our Ports
            </h3>
            {portDetails.map((p) => (
              <div
                key={p.port}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="font-semibold text-slate-900">{p.port}</div>
                <p className="mt-1 text-sm text-slate-500">{p.note}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-800">
                  <Ship className="h-3.5 w-3.5" /> {p.via}
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-emerald-gradient p-8 text-white lg:col-span-2">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.6) 1.5px, transparent 1.5px)",
                backgroundSize: "28px 28px",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-center gap-2 text-amber-300">
                <Map className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Live Route Map · Representatives
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {destinations.map((d, i) => (
                  <motion.div
                    key={d.city}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 6) * 0.08 }}
                    className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">{d.city}</div>
                      <span className="rounded bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-300">
                        {d.region}
                      </span>
                    </div>
                    <div className="text-xs text-emerald-100/70">{d.country}</div>
                    <div className="mt-2 text-xs text-emerald-100/60">{d.route}</div>
                    <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-amber-200">
                      <Clock className="h-3.5 w-3.5" /> Transit {d.transitDays}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
