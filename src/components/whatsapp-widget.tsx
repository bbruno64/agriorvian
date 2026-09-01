"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const TRADE_MANAGER_NAME = "AgriOrvian Trade Desk";
const WHATSAPP_NUMBER = "255714454774";

const defaultMessage =
  "Hello AgriOrvian team, I would like to inquire about your agricultural export commodities. Could you share a proforma quote?";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const handleOpenChat = () => {
    const encoded = encodeURIComponent(defaultMessage);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="bg-emerald-gradient px-4 py-3 text-white">
              <p className="text-sm font-semibold">{TRADE_MANAGER_NAME}</p>
              <p className="text-xs text-emerald-100/80 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Typically replies within 1 hour
              </p>
            </div>
            <div className="px-4 py-4">
              <div className="rounded-lg rounded-tl-none bg-slate-100 p-3 text-sm text-slate-700">
                Hello! Welcome to AgriOrvian. How can our trade team assist you
                with commodities, pricing, or shipping today?
              </div>
              <button
                onClick={handleOpenChat}
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                <Send className="h-4 w-4" />
                Start WhatsApp Chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open WhatsApp chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
