import type { Metadata } from "next";
import { CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use and disclaimer for the AgriOrvian website, a division of Orvian Company Limited.",
};

const sections = [
  {
    title: "Use of this website",
    body: [
      `By accessing the AgriOrvian website you agree to these terms. This website is a company profile and product showcase published by Orvian Company Limited ("the Company"). It provides general information about our export business and the agricultural commodities we supply.`,
    ],
  },
  {
    title: "Informational purpose only",
    body: [
      `Content on this site — including descriptions of commodities, capacities, certifications, destinations, and metrics — is provided for general information and marketing purposes. It must not be relied upon as a formal offer, contract, or specification.`,
      `Nothing you read on this website creates a contractual relationship, a joint venture, or a client relationship between you and the Company. All commercial arrangements are made only by a written agreement signed by an authorised representative of the Company.`,
    ],
  },
  {
    title: "Pricing, quality and availability",
    body: [
      `Prices, quantities, specifications, stock availability, and shipping terms are indicative only and may change at any time. Commodity quality is agreed per shipment and confirmed in the relevant proforma invoice, contract, or certificate of analysis.`,
      `Photographs on this site are illustrative. The actual appearance of a given product may differ.`,
    ],
  },
  {
    title: "Export and import compliance",
    body: [
      `The Company exports in accordance with the laws and regulations of the United Republic of Tanzania. Where you import goods, you are responsible for the compliance, licensing, and documentation requirements of your own jurisdiction.`,
    ],
  },
  {
    title: "Intellectual property",
    body: [
      `All text, images, graphics, logos, and other content on this website are the property of the Company (or its licensors) and may not be reproduced, distributed, or used commercially without written permission.`,
    ],
  },
  {
    title: "No warranty and limitation of liability",
    body: [
      `This website is provided "as is" and "as available". The Company makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the site.`,
      `To the maximum extent permitted by law, the Company shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from the use of, or reliance on, this website.`,
    ],
  },
  {
    title: "Governing law",
    body: [
      `These terms are governed by the laws of the United Republic of Tanzania. Any dispute relating to this website shall be subject to the exclusive jurisdiction of the courts of Tanzania.`,
    ],
  },
  {
    title: "Contact",
    body: [
      `If you have questions about these terms, contact us at ${CONTACT.email} or by post to Orvian Company Limited, Nyerere Road, Dar es Salaam, Tanzania. This page was last revised in September 2026.`,
    ],
  },
] as const;

export default function TermsPage() {
  return (
    <div className="bg-[#fafaf8]">
      <section className="bg-emerald-gradient py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Terms of Use</h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="border-l-2 border-emerald-200 pl-6">
              <h2 className="text-lg font-semibold text-slate-900">
                {s.title}
              </h2>
              <div className="mt-3 space-y-4">
                {s.body.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}