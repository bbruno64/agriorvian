import type { Metadata } from "next";
import { ShieldCheck, Clock, MailCheck } from "lucide-react";
import { RfqWizard } from "@/components/rfq/rfq-wizard";

export const metadata: Metadata = {
  title: "Request a Proforma Quote",
  description:
    "Submit a streamlined two-step RFQ for AgriOrvian agricultural export commodities. Get a proforma tracking ID and a tailored quote from our trade desk.",
};

export default function QuotePage() {
  return (
    <div className="bg-[#fafaf8]">
      <section className="bg-emerald-gradient py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Request a Proforma Quote
          </h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            Tell us what you need across two quick steps. You&apos;ll receive a
            proforma tracking ID and a tailored quote from our trade desk within
            one business day.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-emerald-100/80">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-amber-300" /> Confidential
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-amber-300" /> 1-business-day response
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MailCheck className="h-4 w-4 text-amber-300" /> No obligation
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <RfqWizard />
      </section>
    </div>
  );
}