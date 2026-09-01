"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Sparkles, Globe2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_IMAGE } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#103B2B]">
      <div className="absolute inset-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-300 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4" />
            Export Division of Orvian Company Limited · Dar es Salaam
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            East Africa&apos;s Direct Gateway to High-Grade Agricultural
            Commodities &amp; Seafood
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-emerald-50/90"
          >
            Sourcing premium avocados, cashew, sesame, Nile perch, coffee, and
            Zanzibar spices from trusted Tanzanian farms — delivered with
            laboratory-verified quality, cold-chain discipline, and timely port
            clearance to global markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="bg-amber-gradient px-7 py-6 text-base font-semibold hover:opacity-90"
            >
              <Link href="/commodities">
                Explore Commodities <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-emerald-50/30 bg-white/5 px-7 py-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/quote">
                <FileText className="mr-2 h-5 w-5" /> Request Proforma Quote
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-emerald-100/80"
          >
            <span className="inline-flex items-center gap-1.5">
              <Globe2 className="h-4 w-4 text-amber-400" /> 24 export destinations
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Leaf className="h-4 w-4 text-amber-400" /> Non-GMO &amp; organic options
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FileText className="h-4 w-4 text-amber-400" /> TAPHIS · GlobalGAP · SGS
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}