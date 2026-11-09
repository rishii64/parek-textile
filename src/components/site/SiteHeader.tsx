import { Link } from "@tanstack/react-router";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { site, whatsappLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
      <img src={logo} alt="" width={44} height={44} className="h-11 w-11" />
      <span className="leading-none">
        <span
          className={`block font-display text-lg font-semibold tracking-tight ${light ? "text-ink-foreground" : "text-foreground"}`}
        >
          Parekh Chamber
        </span>
        <span
          className={`mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.25em] ${light ? "text-ink-muted" : "text-muted-foreground"}`}
        >
          of Textile · Bengaluru
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="ink" size="lg">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp us
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b border-border/60 py-4 font-display text-2xl text-muted-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="whatsapp" size="xl" className="mt-5">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
