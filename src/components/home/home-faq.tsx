import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import { homeFaqs } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export function HomeFaq() {
  return (
    <section className="border-t border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600">
              <HelpCircle className="h-4 w-4" /> Buyer FAQ
            </span>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Sourcing from AgriOrvian — your questions, answered
            </h2>
            <p className="mt-3 text-slate-600">
              Everything importers usually ask before requesting a first
              proforma quote. Can&apos;t find your question? Message our trade
              desk and we&apos;ll reply within one business day.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-emerald-gradient hover:opacity-90"
            >
              <Link href="/contact">
                Ask the Trade Desk <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="divide-y divide-slate-100 rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            {homeFaqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl p-4 open:bg-emerald-50/50"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-slate-900">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-emerald-700 transition-transform group-open:rotate-45"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 pr-6 text-sm leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}