"use client";

import { motion } from "framer-motion";
import { qualitySteps } from "@/data/commodities";
import { CommodityIcon } from "@/components/commodities/commodity-icon";
import { MotionSection } from "@/lib/motion";

export function QualityProcess() {
  return (
    <MotionSection className="bg-emerald-gradient py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            The AgriOrvian 5-Step Quality Assurance Process
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-emerald-100/80">
            Every consignment moves through a disciplined, verifiable journey:
            from direct farm sourcing to confirmed vessel loading at port.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-amber-400/40 via-amber-400 to-amber-400/40 lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-8 lg:grid-cols-5">
            {qualitySteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-400 bg-emerald-gradient">
                  <CommodityIcon name={step.icon} className="h-6 w-6 text-amber-300" />
                </div>
                <span className="mt-3 font-mono text-xs text-amber-300">
                  STEP {step.step}
                </span>
                <h3 className="mt-1 text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-emerald-100/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
