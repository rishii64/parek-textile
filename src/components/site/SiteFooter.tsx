import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

import { Logo } from "@/components/site/SiteHeader";
import { site, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink-gradient weave-dark text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
              A trusted association of textile trade members, manufacturers, suppliers, designers,
              dyeing masters and entrepreneurs of India — since {site.since}.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/" className="text-ink-muted hover:text-ink-foreground">Home</Link></li>
              <li><Link to="/about" className="text-ink-muted hover:text-ink-foreground">About</Link></li>
              <li><Link to="/services" className="text-ink-muted hover:text-ink-foreground">Services</Link></li>
              <li><Link to="/contact" className="text-ink-muted hover:text-ink-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow">Write to us</p>
            <ul className="mt-5 space-y-4 text-sm">
              {site.emails.map((e) => (
                <li key={e.address}>
                  <span className="block text-xs text-ink-muted">{e.label}</span>
                  <a href={`mailto:${e.address}`} className="break-all hover:text-saffron">
                    {e.address}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow">Helpdesk</p>
            <p className="mt-5 text-sm text-ink-muted">{site.helpdeskHours}</p>
            <a href={site.phoneHref} className="mt-3 flex items-center gap-2 text-sm hover:text-saffron">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 flex items-center gap-2 text-sm hover:text-saffron"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-16 font-display text-[clamp(3rem,11vw,10rem)] leading-none tracking-tighter text-ink-foreground/[0.06] select-none">
          Parekh Chamber
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 border-t border-ink-border pt-6 text-xs text-ink-muted sm:flex-row sm:pr-20">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
