"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Sprout,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/data/site";

const mainNav = [
  { label: "Home", href: "/" },
  { label: "Commodities", href: "/commodities" },
  { label: "RFQ Quote", href: "/quote" },
  { label: "Quality & Cold Chain", href: "/quality" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-emerald/95 shadow-sm shadow-black/5 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="AgriOrvian – home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-gradient">
            <Sprout className="h-5 w-5 text-white" />
          </span>
          <span className="flex flex-col leading-none pt-0.5">
            <span className="text-lg font-bold tracking-tight text-white">AgriOrvian</span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-100/70">
              From Our <span className="font-semibold text-amber-300">Farmers</span> to Your{" "}
              <span className="font-semibold text-amber-300">Markets</span>
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium text-emerald-50/80 transition-colors hover:bg-white/10 hover:text-white",
                pathname === item.href && "bg-white/10 text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <Button asChild variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
            <Link href="/contact">
              <MessageCircle className="mr-2 h-4 w-4 text-amber-400" />
              Trade Desk
            </Link>
          </Button>
          <Button asChild className="bg-amber-gradient hover:opacity-90">
            <Link href="/quote">Request Proforma Quote</Link>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-white xl:hidden hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-emerald-gradient xl:hidden"
          >
            <div className="max-h-[calc(100vh-4rem)] space-y-1 overflow-y-auto px-4 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-medium text-emerald-50/80 hover:bg-white/10 hover:text-white",
                    pathname === item.href && "bg-white/10 text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 border-t border-white/10 pt-3">
                <Button asChild className="w-full bg-amber-gradient hover:opacity-90">
                  <Link href="/quote" onClick={() => setOpen(false)}>
                    Request Proforma Quote
                  </Link>
                </Button>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-emerald-50/80 hover:bg-white/10"
                  >
                    <Phone className="h-3.5 w-3.5 text-amber-400" /> Call
                  </a>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium text-emerald-50/80 hover:bg-white/10"
                  >
                    <Mail className="h-3.5 w-3.5 text-amber-400" /> Email
                  </a>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
