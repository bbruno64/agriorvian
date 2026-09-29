"use client";

import { useState } from "react";
import { Send, Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT } from "@/data/site";
import { trackEvent } from "@/lib/analytics";

const initialForm = { name: "", email: "", subject: "", message: "" };

const FORM_ENDPOINT = "https://formsubmit.co/ajax/a89243bcae5b4b1e3257bbfdb42b4b6f";

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
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
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New inquiry from the AgriOrvian website",
          name: form.name,
          email: form.email,
          subject: form.subject || "AgriOrvian website inquiry",
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      trackEvent("generate_lead", {
        source: "contact_form",
        category: "general_inquiry",
      });
      setForm(initialForm);
      setStatus("success");
      toast.success("Message sent", {
        description: `Your message is on its way to ${CONTACT.email}. We reply within one business day.`,
      });
    } catch {
      setStatus("error");
      toast.error("Could not send your message", {
        description: `Check your connection and try again, or email us directly at ${CONTACT.email}.`,
      });
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setStatus("idle");
  };

  return (
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
            Thanks {form.name || "for contacting us"} — your message has been
            sent
          </p>
          <p className="mt-1 text-sm text-emerald-700">
            Your message is on its way to {CONTACT.email}. A trade manager will
            respond within one business day.
          </p>
          <Button variant="outline" className="mt-6" onClick={handleReset}>
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
                autoComplete="name"
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
                autoComplete="email"
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
  );
}