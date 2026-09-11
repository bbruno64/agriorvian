import Link from "next/link";
import {
  Sprout,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { CONTACT } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

const footerLinks = {
  Company: [
    { label: "About AgriOrvian", href: "/about" },
    { label: "Quality & Cold Chain", href: "/quality" },
    { label: "RFQ Quote", href: "/quote" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "Horticulture & Fresh Produce", href: "/commodities?category=Produce" },
    { label: "Nuts & Oilseeds", href: "/commodities?category=Nuts%20%26%20Seeds" },
    { label: "Fisheries & Aquaculture", href: "/commodities?category=Fisheries%20%26%20Aquaculture" },
    { label: "Grains, Pulses & Spices", href: "/commodities?category=Grains%20%26%20Spices" },
  ],
  Resources: [
    { label: "Commodities Catalog", href: "/commodities" },
    { label: "Proforma Quote", href: "/quote" },
    { label: "Shipping Destinations", href: "/quality" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0c2a1e] text-emerald-100/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-gradient">
                <Sprout className="h-5 w-5 text-white" />
              </span>
              <div className="leading-none">
                <div className="text-lg font-bold text-white">AgriOrvian</div>
                <div className="text-[10px] uppercase tracking-widest text-amber-400/80">
                  Orvian Company Limited
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              East Africa&apos;s direct gateway to high-grade agricultural commodities,
              nuts &amp; oilseeds, fisheries, and spices, backed by a 5-step quality
              assurance and cold-chain program from farm to port.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                {CONTACT.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-amber-400"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-amber-400"
                >
                  {CONTACT.email}
                </a>
              </p>
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <Link
                href="/"
                aria-label="Website"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 transition-colors"
              >
                <Sprout className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-emerald-100/50">
            © {new Date().getFullYear()} AgriOrvian — A Division of Orvian Company Limited. All rights reserved.
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400 hover:text-amber-300"
          >
            Start an inquiry <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
