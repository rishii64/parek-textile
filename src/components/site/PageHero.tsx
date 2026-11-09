import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="weave border-b border-border/60">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-16 lg:px-8 lg:pt-28 lg:pb-20">
        <p className="eyebrow animate-rise">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl animate-rise text-5xl font-medium leading-[1.02] md:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
