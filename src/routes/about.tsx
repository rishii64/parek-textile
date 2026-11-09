import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Leaf, Scale, Sprout } from "lucide-react";

import artisan from "@/assets/artisan.jpg";
import { ContactBand } from "@/components/site/ContactBand";
import { PageHero } from "@/components/site/PageHero";
import { memberTypes, site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Parekh Chamber of Textile" },
      {
        name: "description",
        content:
          "Learn about Parekh Chamber of Textile, a trusted Bengaluru-based association of textile trade members, manufacturers and designers since 2007.",
      },
      { property: "og:title", content: "About — Parekh Chamber of Textile" },
      {
        property: "og:description",
        content: "A trusted textile association and group of registered trade members in India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Sprout, title: "Foster growth", text: "Helping members expand their trade and capacity." },
  { icon: Scale, title: "Ethical standards", text: "Promoting fair, transparent trade practices." },
  { icon: Leaf, title: "Sustainable making", text: "Encouraging responsible manufacturing." },
  { icon: BadgeCheck, title: "Trusted liaison", text: "Representing members with government bodies." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow={`About us · Since ${site.since}`}
        title={
          <>
            A chamber woven from <span className="display-italic">trust</span>
          </>
        }
        intro="Parekh Chamber of Textile is one of the trusted textile associations of India — a group of registered trade members, manufacturers, suppliers, designers, dyeing masters and entrepreneurs."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <img
          src={artisan}
          alt="An artisan hand-embroidering saffron flowers onto indigo cloth"
          width={1200}
          height={1408}
          loading="lazy"
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elegant"
        />
        <div>
          <p className="eyebrow">Our mission</p>
          <h2 className="mt-4 text-4xl font-medium md:text-5xl">
            The central hub for India's textile industry
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our mission is to foster growth, provide ethical standards and promote sustainable
            manufacturing — connecting the craft of the handloom with the scale of global trade.
          </p>
          <div className="mt-10">
            <p className="text-sm font-bold">Our members include</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {memberTypes.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <p className="eyebrow">What we stand for</p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-3xl border border-border bg-background p-8">
                <p.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-10 text-2xl font-medium">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
