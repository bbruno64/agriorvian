"use client";

import { useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  User,
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  Copy,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { commodities } from "@/data/commodities";
import { CONTACT } from "@/data/site";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const steps = [
  { title: "Trade Details", icon: Package },
  { title: "Buyer Contact", icon: User },
];

const incoterms = [
  {
    code: "FOB Dar es Salaam",
    note: "Seller responsible to load at Dar es Salaam port",
  },
  {
    code: "CIF Destination Port",
    note: "Includes ocean freight & insurance to destination port",
  },
];

const quantityOptions = [
  "5 MT · Sample / Test Lot",
  "10 MT",
  "20 MT",
  "1 × 20ft Reefer Container",
  "1 × 40ft Reefer Container",
  "2 × 40ft Reefer Containers",
];

function generateProformaId(): string {
  const year = new Date().getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `AO-RFQ-${year}-${rand}`;
}

function RfqWizardContent() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [rfqId, setRfqId] = useState("");

  const [form, setForm] = useState({
    commodityId: searchParams.get("commodity") ?? "",
    quantity: "",
    incoterm: "",
    destinationPort: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    notes: "",
  });

  const selectedCommodity = useMemo(
    () => commodities.find((c) => c.id === form.commodityId),
    [form.commodityId]
  );

  const set = (key: keyof typeof form) => (value: string | null) =>
    setForm((f) => ({ ...f, [key]: value ?? "" }));

  const canContinue = (() => {
    if (step === 0) {
      return (
        !!form.commodityId &&
        !!form.quantity &&
        !!form.incoterm &&
        !!form.destinationPort
      );
    }
    return (
      !!form.company.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      !!form.phone.trim()
    );
  })();

  const submitProforma = async () => {
    if (submitting) return;
    setSubmitting(true);
    const id = generateProformaId();
    const payload = {
      _subject: `AgriOrvian Proforma Request ${id}`,
      "Proforma ID": id,
      Commodity: selectedCommodity?.name ?? form.commodityId,
      Quantity: form.quantity,
      Incoterm: form.incoterm,
      "Destination Port": form.destinationPort,
      Company: form.company,
      "Buyer Email": form.email,
      Country: form.country,
      "Phone / WhatsApp": form.phone,
      Notes: form.notes,
    };
    try {
      const res = await fetch("https://formsubmit.co/ajax/a89243bcae5b4b1e3257bbfdb42b4b6f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("send failed");
      setRfqId(id);
      toast.success("Proforma request sent", {
        description: `Your request (${id}) has been emailed to export@agriorvian.com. A trade manager will respond within one business day.`,
      });
      window.setTimeout(() => {
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 600);
    } catch {
      setSubmitting(false);
      toast.error("Could not send your request", {
        description:
          "Check your connection and try again, or send it via WhatsApp below.",
      });
    }
  };

  const next = () => {
    if (step === 1) {
      submitProforma();
    } else {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const back = () => setStep((s) => Math.max(0, s - 1));

  const proformaMessage = useMemo(() => {
    const lines = [
      "Hello AgriOrvian Trade Desk,",
      "",
      "I would like to submit the following proforma request:",
      "",
      `Proforma ID: ${rfqId}`,
      `Commodity: ${selectedCommodity?.name ?? form.commodityId}`,
      `Quantity: ${form.quantity}`,
      `Incoterm: ${form.incoterm}`,
      `Destination Port: ${form.destinationPort}`,
      "",
      `Company: ${form.company}`,
      `Buyer Email: ${form.email}`,
      form.country ? `Country: ${form.country}` : "",
      `Phone / WhatsApp: ${form.phone}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  }, [rfqId, form, selectedCommodity]);

  const handleSendWhatsApp = () => {
    const encoded = encodeURIComponent(proformaMessage);
    window.open(
      `https://wa.me/${CONTACT.whatsappNumber}?text=${encoded}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleCopyRfqId = async () => {
    try {
      await navigator.clipboard.writeText(rfqId);
      toast.success("Proforma ID copied", {
        description: `${rfqId} is on your clipboard.`,
      });
    } catch {
      toast.error("Unable to copy", {
        description: "Please copy the ID manually.",
      });
    }
  };

  const resetForm = () => {
    setStep(0);
    setSubmitted(false);
    setRfqId("");
    setForm({
      commodityId: "",
      quantity: "",
      incoterm: "",
      destinationPort: "",
      company: "",
      email: "",
      country: "",
      phone: "",
      notes: "",
    });
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Stepper */}
      <div className="mb-10 hidden items-center justify-between md:flex">
        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-1 items-center">
            <div
              className={`flex items-center gap-2 ${
                i <= step ? "text-emerald-700" : "text-slate-400"
              }`}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold ${
                  i < step
                    ? "bg-emerald-gradient text-white"
                    : i === step
                    ? "bg-amber-gradient text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span className="text-sm font-medium">{s.title}</span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`mx-3 h-px flex-1 ${
                  i < step ? "bg-emerald-600" : "bg-slate-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile progress */}
      <div className="mb-6 md:hidden">
        <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
          <span className="font-medium text-emerald-700">
            Step {step + 1} of {steps.length} · {steps[step].title}
          </span>
          <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-emerald-gradient transition-all"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Trade Details
                  </h2>
                  <p className="text-sm text-slate-500">
                    Tell us what you need and how you&apos;d like it shipped.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Commodity</Label>
                  <Select
                    value={form.commodityId}
                    onValueChange={set("commodityId")}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a commodity" />
                    </SelectTrigger>
                    <SelectContent>
                      {commodities.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Quantity</Label>
                  <Select value={form.quantity} onValueChange={set("quantity")}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Metric tons or reefer containers" />
                    </SelectTrigger>
                    <SelectContent>
                      {quantityOptions.map((q) => (
                        <SelectItem key={q} value={q}>
                          {q}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Incoterm</Label>
                    <Select
                      value={form.incoterm}
                      onValueChange={set("incoterm")}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select incoterm" />
                      </SelectTrigger>
                      <SelectContent>
                        {incoterms.map((i) => (
                          <SelectItem key={i.code} value={i.code}>
                            {i.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.incoterm && (
                      <p className="text-xs text-slate-500">
                        {incoterms.find((i) => i.code === form.incoterm)?.note}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Target Destination Port</Label>
                    <Input
                      value={form.destinationPort}
                      onChange={(e) => set("destinationPort")(e.target.value)}
                      placeholder="e.g. Hamburg, Germany · Jebel Ali, UAE"
                      autoComplete="off"
                    />
                    <p className="text-xs text-slate-500">
                      Any port worldwide — we&apos;ll quote the best route.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Buyer Contact
                  </h2>
                  <p className="text-sm text-slate-500">
                    Where should we send your proforma quote?
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Company Name</Label>
                    <Input
                      value={form.company}
                      onChange={(e) => set("company")(e.target.value)}
                      placeholder="Your company"
                      autoComplete="organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Buyer Email</Label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email")(e.target.value)}
                      placeholder="you@company.com"
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Country</Label>
                    <Input
                      value={form.country}
                      onChange={(e) => set("country")(e.target.value)}
                      placeholder="e.g. United Arab Emirates"
                      autoComplete="country-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>WhatsApp / Phone Number</Label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set("phone")(e.target.value)}
                      placeholder="+Country code number"
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Additional Notes (optional)</Label>
                  <Textarea
                    value={form.notes}
                    onChange={(e) => set("notes")(e.target.value)}
                    placeholder="Target price, certifications needed, packaging, timeline…"
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-6">
          <Button variant="ghost" onClick={back} disabled={step === 0}>
            <ChevronLeft className="mr-1.5 h-4 w-4" /> Back
          </Button>
          <Button
            className="bg-emerald-gradient hover:opacity-90"
            onClick={next}
            disabled={!canContinue || submitting}
          >
            {step === 1 ? (
              submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-4 w-4" /> Submit Proforma Request
                </>
              )
            ) : (
              <>
                Continue <ChevronRight className="ml-1.5 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>

      <Dialog open={submitted} onOpenChange={resetForm}>
        <DialogContent className="max-h-[92vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-gradient">
              <Check className="h-8 w-8 text-white" />
            </div>
            <DialogTitle className="mt-4 text-center text-xl">
              Proforma Request Received
            </DialogTitle>
            <DialogDescription className="text-center">
              Your proforma request has been captured. A dedicated trade manager
              will respond within one business day.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl bg-emerald-50 p-5 text-center">
            <div className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Your Proforma ID
            </div>
            <div className="mt-1 flex items-center justify-center gap-2">
              <span className="font-mono text-2xl font-bold text-emerald-900">
                {rfqId}
              </span>
              <button
                onClick={handleCopyRfqId}
                className="text-emerald-700 hover:text-emerald-900"
                aria-label="Copy Proforma ID"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="space-y-1.5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-slate-900">Commodity:</span>{" "}
              {selectedCommodity?.name}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Quantity:</span>{" "}
              {form.quantity}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Incoterm:</span>{" "}
              {form.incoterm}
            </p>
            <p>
              <span className="font-semibold text-slate-900">
                Destination Port:
              </span>{" "}
              {form.destinationPort}
            </p>
            <p>
              <span className="font-semibold text-slate-900">Buyer:</span>{" "}
              {form.company} · {form.email}
              {form.country ? ` · ${form.country}` : ""}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              className="h-11 bg-[#25D366] text-white hover:bg-[#1fb857]"
              onClick={handleSendWhatsApp}
            >
              <WhatsAppIcon className="mr-2 h-5 w-5" /> Send to WhatsApp Trade
              Desk
            </Button>
            <Button
              variant="ghost"
              onClick={resetForm}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function RfqWizard() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-xl text-center text-slate-500">
          Loading…
        </div>
      }
    >
      <RfqWizardContent />
    </Suspense>
  );
}