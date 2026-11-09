import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/lib/site";

export function ContactBand() {
  return (
    <section className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="bg-ember-gradient relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-8 py-14 text-primary-foreground shadow-elegant md:px-14 md:py-20">
        <div className="weave-dark pointer-events-none absolute inset-0" />
        <div className="relative grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.22em] opacity-80">
              Direct contact for members
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-[1.05] md:text-6xl">
              Need help with registration or a trade query?
            </h2>
            <p className="mt-5 max-w-lg opacity-90">
              Our helpdesk is available from {site.helpdeskHours}. Call, message or drop by with an
              appointment.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <Button asChild variant="ink" size="xl">
              <a href={site.phoneHref}>
                <Phone /> {site.phone}
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
            >
              All contact details <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
