"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  Building2,
  Loader2,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { CONTACT } from "@/data/site";

const contactChannels = [
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    value: CONTACT.phone,
    note: "Fastest response — trade manager online",
    href: `https://wa.me/${CONTACT.whatsappNumber}`,
    cta: "Chat now",
  },
  {
    icon: Phone,
    title: "Direct Line",
    value: CONTACT.phone,
    note: "Mon–Sat, 08:00–18:00 EAT",
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    cta: "Call us",
  },
  {
    icon: Mail,
    title: "Email",
    value: CONTACT.email,
    note: "Proforma & documentation requests",
    href: `mailto:${CONTACT.email}`,
    cta: "Send email",
  },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please complete all required fields", {
        description: "Name, email, and message are needed to reach our trade desk.",
      });
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Invalid email address", {
        description: "Please enter a valid email so we can reply.",
      });
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const submission = {
      ...form,
      submittedAt: new Date().toISOString(),
    };
    console.log("[AgriOrvian Contact Submission]", submission);
    window.setTimeout(() => {
      setStatus("success");
      toast.success("Message received!", {
        description: `Your message has been forwarded to export@agriorvian.com. A trade manager will respond within one business day.`,
      });
    }, 900);
  };

  const handleReset = () => {
    setForm(initialForm);
    setStatus("idle");
  };

  return (
    <div className="bg-[#fafaf8]">
      <section className="bg-emerald-gradient py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Contact Our Live Trade Desk
          </h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            Speak directly with an AgriOrvian trade manager about commodities,
            pricing, certifications, or shipping.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {contactChannels.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <c.icon className="h-7 w-7 text-amber-500" />
              <h3 className="mt-3 font-semibold text-slate-900">{c.title}</h3>
              <p className="mt-1 font-mono text-sm text-slate-700">{c.value}</p>
              <p className="text-xs text-slate-400">{c.note}</p>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-900"
              >
                {c.cta} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-bold text-slate-900">Send a Message</h2>
            <p className="mt-1 text-sm text-slate-500">
              Our team typically responds within one business day.
            </p>
            {status === "success" ? (
              <div className="mt-8 rounded-2xl bg-emerald-50 p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-gradient">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <p className="mt-4 text-lg font-semibold text-emerald-900">
                  Message received!
                </p>
                <p className="mt-1 text-sm text-emerald-700">
                  Thank you {form.name || "for contacting us"}. A trade manager
                  will reach out shortly.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={handleReset}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Cashew RCN inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're sourcing and your target quantity…"
                    className="min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-emerald-gradient hover:opacity-90"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Map + hours */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="relative flex aspect-[4/3] items-center justify-center bg-emerald-gradient p-8 text-2xl font-bold text-white">
              <div className="relative text-center">
                <MapPin className="mx-auto h-10 w-10 text-amber-300" />
                <p className="mt-2">Dar es Salaam HQ</p>
                <p className="mt-1 text-sm font-normal text-emerald-100/80">
                  Nyerere Road · <a href={`mailto:${CONTACT.email}`} className="underline underline-offset-2 hover:text-white">{CONTACT.email}</a>
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 text-emerald-700" />
                <div>
                  <div className="font-semibold text-slate-900">
                    AgriOrvian — Division of Orvian Co. Ltd
                  </div>
                  <p className="text-sm text-slate-500">{CONTACT.address}</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-emerald-700" />
                <div className="text-sm text-slate-600">
                  <div className="font-semibold text-slate-900">Direct Line</div>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="font-mono hover:text-emerald-800"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-emerald-700" />
                <div className="text-sm text-slate-600">
                  <div className="font-semibold text-slate-900">Email</div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-mono hover:text-emerald-800"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-emerald-700" />
                <div className="text-sm text-slate-600">
                  <div className="font-semibold text-slate-900">Office Hours</div>
                  Monday – Saturday, 08:00 – 18:00 EAT
                </div>
              </div>
              <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">
                Prefer instant replies? Use the floating{" "}
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold underline underline-offset-2"
                >
                  WhatsApp Business widget
                </a>{" "}
                to chat with a trade manager in real time.
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />
    </div>
  );
}