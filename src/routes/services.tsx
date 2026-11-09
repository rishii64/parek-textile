import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import fabricRolls from "@/assets/fabric-rolls.jpg";
import { ContactBand } from "@/components/site/ContactBand";
import { PageHero } from "@/components/site/PageHero";
import { services, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Parekh Chamber of Textile" },
      {
        name: "description",
        content:
          "Manufacturing support, machinery consultation, trade support, finance and plant establishment services for textile businesses.",
      },
      { property: "og:title", content: "Services — Parekh Chamber of Textile" },
      {
        property: "og:description",
        content: "Seven service areas supporting textile manufacturers, suppliers and members.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Support for every stage of the <span className="display-italic">textile</span> journey
          </>
        }
        intro="From the factory floor to finance, our consultation services help members build, trade and grow."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <ul className="divide-y divide-border border-y border-border">
          {services.map((s, i) => (
            <li key={s.title}>
              <a
                href={whatsappLink(`Hello, I'd like to know more about: ${s.title}`)}
                target="_blank"
                rel="noreferrer"
                className="group grid items-center gap-6 py-10 transition-colors md:grid-cols-12"
              >
                <span className="font-display text-lg text-muted-foreground md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-5 md:col-span-7">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h2 className="text-2xl leading-tight font-medium md:text-3xl">{s.title}</h2>
                </div>
                <p className="text-muted-foreground md:col-span-3">{s.description}</p>
                <span className="hidden justify-self-end md:col-span-1 md:block">
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Tap any service to ask about it on WhatsApp.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <img
          src={fabricRolls}
          alt="Rolls of saffron, indigo and cream fabric in a textile warehouse"
          width={1600}
          height={1008}
          loading="lazy"
          className="aspect-[21/9] w-full rounded-[2rem] object-cover"
        />
      </section>

      <ContactBand />
    </>
  );
}
