import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { services, site, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Parekh Chamber of Textile" },
      {
        name: "description",
        content:
          "Contact Parekh Chamber of Textile in Bengaluru for membership, trade enquiries and services. Helpdesk 10 AM – 6 PM.",
      },
      { property: "og:title", content: "Contact — Parekh Chamber of Textile" },
      {
        property: "og:description",
        content: "Call, WhatsApp or email the Parekh Chamber of Textile helpdesk.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

function Contact() {
  const [topic, setTopic] = useState("Membership");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Hello Parekh Chamber of Textile,`,
      `Name: ${data.get("name")}`,
      data.get("company") ? `Company: ${data.get("company")}` : null,
      `Topic: ${topic}`,
      ``,
      String(data.get("message") ?? ""),
    ].filter((l) => l !== null);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let's start a <span className="display-italic">conversation</span>
          </>
        }
        intro="Get in touch for membership, trade enquiries or support. Visits are by appointment."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-12 lg:px-8">
        <div className="space-y-4 lg:col-span-5">
          <a
            href={site.phoneHref}
            className="flex items-center gap-5 rounded-3xl bg-ink p-7 text-ink-foreground transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-7 w-7 text-saffron" />
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-ink-muted uppercase">
                Call the helpdesk
              </p>
              <p className="mt-1 font-display text-3xl">{site.phone}</p>
            </div>
          </a>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6">
              <Clock className="h-6 w-6 text-primary" />
              <p className="mt-4 text-sm text-muted-foreground">Helpdesk hours</p>
              <p className="font-semibold">{site.helpdeskHours}</p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6">
              <MapPin className="h-6 w-6 text-primary" />
              <p className="mt-4 text-sm text-muted-foreground">Location</p>
              <p className="font-semibold">Bengaluru, KA, India</p>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              <p className="font-semibold">Email</p>
            </div>
            <ul className="mt-5 divide-y divide-border">
              {site.emails.map((e) => (
                <li key={e.address} className="py-3">
                  <p className="text-xs text-muted-foreground">{e.label}</p>
                  <a href={`mailto:${e.address}`} className="break-all font-medium hover:text-primary">
                    {e.address}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[2rem] border border-border bg-card p-8 shadow-soft md:p-10 lg:col-span-7"
        >
          <div className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-whatsapp" />
            <h2 className="text-3xl font-medium">Send an enquiry</h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Your message opens in WhatsApp, ready to send to our team.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">Your name</span>
              <input name="name" required maxLength={80} className={fieldClass} />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold">Company (optional)</span>
              <input name="company" maxLength={100} className={fieldClass} />
            </label>
          </div>

          <fieldset className="mt-6">
            <legend className="mb-3 text-sm font-semibold">What is it about?</legend>
            <div className="flex flex-wrap gap-2">
              {["Membership", "Trade enquiry", ...services.map((s) => s.short)].map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTopic(t)}
                  aria-pressed={topic === t}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    topic === t
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:border-foreground/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="mt-6 block">
            <span className="mb-2 block text-sm font-semibold">Message</span>
            <textarea name="message" required rows={5} maxLength={1000} className={fieldClass} />
          </label>

          <Button type="submit" variant="hero" size="xl" className="mt-8 w-full sm:w-auto">
            <Send /> Send via WhatsApp
          </Button>
        </form>
      </section>
    </>
  );
}
