import type { Metadata } from "next";
import { CONTACT } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for AgriOrvian, a division of Orvian Company Limited. How we handle the information you send us and your rights under the GDPR.",
};

const sections = [
  {
    title: "Who we are",
    body: [
      `AgriOrvian is a trading name for the export division of Orvian Company Limited ("we", "us", "our"), registered in the United Republic of Tanzania, with operations at ${CONTACT.address}.`,
      `This policy explains in plain language what we do — and, just as importantly, what we do not do — with the personal information you give us when you use this website.`,
    ],
  },
  {
    title: "We do not collect your data automatically",
    body: [
      `This website is a static brochure. It contains no cookies, no analytics trackers, no advertising pixels, and no embedded third-party scripts. We have no account system, no payment processing, and no marketing database built from this site.`,
      `When you browse this website, no personal data is stored, transmitted, or shared with us or anyone else. There is therefore nothing to delete, because we receive nothing automatically.`,
    ],
  },
  {
    title: "Data you choose to send us",
    body: [
      `The only way this site handles your personal information is when you actively contact us, in one of three ways:`,
    ],
    list: [
      `By web form: the contact and quote-request forms on this site are delivered to ${CONTACT.email} through FormSubmit, a third-party processor (formsubmit.co). Your name, email address, phone number, and message are transmitted over HTTPS and forwarded to our mailbox. FormSubmit holds the submission only long enough to deliver it and stores no transaction history.`,
      `By email: you can also email ${CONTACT.email} directly; your message is held in our email system.`,
      `By WhatsApp: the site links you to WhatsApp so you can message our trade desk. The conversation happens entirely inside WhatsApp and is handled by WhatsApp's operators, not by this website.`,
    ],
    body2: `Forms are sent over an encrypted HTTPS connection to FormSubmit, which acts as a data processor on our behalf and transfers the submission to our email inbox at ${CONTACT.email}.`,
  },
  {
    title: "How we use your information",
    body: [
      `Information you send us (for example your name, company, email address, phone number, and inquiry details) is used only for the purpose you contacted us for: answering your inquiry, preparing quotations, and conducting business correspondence for AgriOrvian's legitimate B2B export activities. We do not sell, rent, or share your information with third parties, and we never use it for unrelated marketing. FormSubmit receives your submission solely to deliver it to our inbox.`,
    ],
  },
  {
    title: "Legal basis under the GDPR",
    body: [
      `For individuals in the European Economic Area (and the UK), we process personal data on the basis of your consent and our legitimate business interest in responding to prospective business inquiries (GDPR Article 6(1)(a) and (f)). You may withdraw your consent or object at any time by contacting us (see "Your rights" below).`,
    ],
  },
  {
    title: "Retention and security",
    body: [
      `Business correspondence is retained only as long as needed to respond to you and, where relevant, to comply with Tanzanian commercial record-keeping obligations. This website itself is served over HTTPS, and your contact channels are the same email and messaging systems used by our staff to manage their inboxes.`,
    ],
  },
  {
    title: "Your rights",
    body: [
      `Where GDPR applies to you, you have the right to request access to, rectification of, or erasure of your personal data, the right to restrict or object to processing, the right to data portability, and the right to lodge a complaint with your local supervisory authority. To exercise any of these rights, email ${CONTACT.email} with the subject "Data Protection Request". We respond to all verifiable requests without undue delay.`,
    ],
  },
  {
    title: "Contact",
    body: [
      `Questions about this policy or about your personal data can be sent to ${CONTACT.email} or by post to Orvian Company Limited, ${CONTACT.address}`,
      `This policy is dated September 2026 and may be updated from time to time; the date of the latest revision will always be shown at the top of this page.`,
    ],
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#fafaf8]">
      <section className="bg-emerald-gradient py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 max-w-2xl text-emerald-100/85">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm leading-relaxed text-slate-600">
          This policy is short on purpose. Our site is designed to handle
          as little of your personal data as possible — in practice, none at
          all unless you choose to write to us.
        </p>
        <div className="mt-10 space-y-10">
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
                {"list" in s &&
                  s.list.map((item) => (
                    <li
                      key={item}
                      className="ml-4 text-sm leading-relaxed text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                {"body2" in s && s.body2 && (
                  <p className="text-sm font-medium leading-relaxed text-emerald-800">
                    {s.body2}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}