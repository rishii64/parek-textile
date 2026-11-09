import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BadgeCheck, Landmark, MapPin } from "lucide-react";

import artisan from "@/assets/artisan.jpg";
import fabricRolls from "@/assets/fabric-rolls.jpg";
import heroLoom from "@/assets/hero-loom.jpg";
import { ContactBand } from "@/components/site/ContactBand";
import { Button } from "@/components/ui/button";
import { memberTypes, services, site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parekh Chamber of Textile — Interweaving Tradition & Global Trade" },
      {
        name: "description",
        content:
          "Bengaluru's textile chamber connecting artisans, manufacturers, suppliers and designers since 2007. Trade, manufacturing, finance and industrial consultation.",
      },
      { property: "og:title", content: "Parekh Chamber of Textile — Interweaving Tradition & Global Trade" },
      {
        property: "og:description",
        content: "Connecting artisans, manufacturers and designers across India since 2007.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <ServicesSection />
      <Mission />
      <Members />
      <ContactBand />
    </>
  );
}

function Hero() {
  return (
    <section className="weave relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-14 pb-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className="eyebrow animate-rise">Official Parekh Chamber of Textile</p>
          <h1 className="mt-6 animate-rise text-[clamp(3rem,7vw,6.25rem)] leading-[0.95] font-medium">
            Interweaving <span className="display-italic">tradition</span> &amp; global trade
          </h1>
          <p className="mt-7 max-w-xl animate-rise text-lg leading-relaxed text-muted-foreground [animation-delay:120ms]">
            Leading the textile evolution by connecting artisans, manufacturers and designers —
            from Bengaluru to the world, since {site.since}.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:200ms]">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Become a member <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="line" size="xl">
              <Link to="/services">Explore services</Link>
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> {site.location}
            </span>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-elegant lg:aspect-auto lg:h-full lg:min-h-[600px]">
            <img
              src={heroLoom}
              alt="Indigo and saffron silk threads on a traditional handloom"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 left-4 rounded-2xl bg-card p-5 shadow-elegant sm:-left-8 sm:p-6">
            <p className="font-display text-5xl leading-none font-medium text-primary">
              {site.since}
            </p>
            <p className="mt-2 text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">
              Serving the trade since
            </p>
          </div>

          <div className="absolute top-6 right-6 hidden rounded-full bg-ink/80 px-4 py-2 text-xs font-semibold text-ink-foreground backdrop-blur sm:block">
            Handloom · Mill · Market
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...memberTypes, "Retailers", "Artisans"];
  return (
    <div className="overflow-hidden bg-ink py-5 text-ink-foreground">
      <div className="flex w-max animate-marquee gap-10">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl italic">
            {t}
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Intro() {
  const facts = [
    { value: `${new Date().getFullYear() - site.since}+`, label: "Years in the trade" },
    { value: String(services.length), label: "Service areas" },
    { value: "10–6", label: "Member helpdesk" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">Who we are</p>
          <div className="stitch mt-5 w-24" />
        </div>
        <div className="lg:col-span-8">
          <p className="font-display text-3xl leading-snug font-light md:text-[2.6rem] md:leading-[1.2]">
            A trusted association of registered textile trade members, manufacturers, suppliers,
            designers, dyeing masters and <span className="display-italic">entrepreneurs of India</span>.
          </p>
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-10">
            {facts.map((f) => (
              <div key={f.label}>
                <p className="font-display text-4xl font-medium md:text-6xl">{f.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="border-y border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Our strategic services</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium md:text-6xl">
              Direct support for textile businesses
            </h2>
          </div>
          <Button asChild variant="line" size="xl">
            <Link to="/services">
              View all services <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <div
              key={s.title}
              className="group relative flex flex-col bg-card p-8 transition-colors duration-300 hover:bg-ink hover:text-ink-foreground lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-muted-foreground group-hover:text-ink-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <s.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="mt-14 text-2xl leading-tight font-medium">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground group-hover:text-ink-muted">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section className="bg-ink-gradient weave-dark text-ink-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="relative">
          <img
            src={fabricRolls}
            alt="Rolls of saffron, indigo and cream fabric in a textile warehouse"
            width={1600}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Our mission</p>
          <h2 className="mt-4 text-4xl leading-[1.05] font-medium md:text-6xl">
            Defining the future of <span className="text-gradient-ember italic">global textile</span>{" "}
            standards
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted">
            The Chamber serves as a central hub for the industry — fostering growth, upholding
            ethical standards and promoting sustainable manufacturing.
          </p>
          <ul className="mt-10 space-y-4">
            <li className="flex items-center gap-4 rounded-2xl border border-ink-border p-5">
              <BadgeCheck className="h-6 w-6 shrink-0 text-saffron" />
              <span className="font-semibold">ISO certified trade practices</span>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-ink-border p-5">
              <Landmark className="h-6 w-6 shrink-0 text-saffron" />
              <span className="font-semibold">Government liaison services</span>
            </li>
          </ul>
          <Button asChild variant="lineLight" size="xl" className="mt-10">
            <Link to="/about">
              Read our story <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Members() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-24 lg:px-8 lg:pt-32">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">Who we bring together</p>
          <h2 className="mt-4 text-4xl font-medium md:text-6xl">
            One chamber, <span className="display-italic">every thread</span> of the trade
          </h2>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {memberTypes.map((m, i) => (
              <div
                key={m}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft"
              >
                <span className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold">{m}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <img
            src={artisan}
            alt="An artisan hand-embroidering saffron flowers onto indigo cloth"
            width={1200}
            height={1408}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elegant"
          />
        </div>
      </div>
    </section>
  );
}
