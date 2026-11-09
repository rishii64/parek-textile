import { useEffect, useState } from "react";

import logo from "@/assets/logo.png";
import { site } from "@/lib/site";

/**
 * Full-screen brand loader shown on the first page load only.
 * It is server-rendered so it appears instantly, then fades out once the page
 * has loaded (with a short minimum so the animation can play). A CSS fallback
 * hides it on its own if scripts never run.
 */
const MIN_VISIBLE_MS = 2800;
const EXIT_MS = 800;

function Letters({ text, startDelay }: { text: string; startDelay: number }) {
  return (
    <>
      {Array.from(text).map((char, i) => (
        <span
          key={`${char}-${i}`}
          className="loader-letter inline-block"
          style={{ animationDelay: `${startDelay + i * 45}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export function SiteLoader() {
  const [phase, setPhase] = useState<"show" | "exit" | "done">("show");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const started = performance.now();
    const minVisible = reduced ? 600 : MIN_VISIBLE_MS;
    let exitTimer: number | undefined;
    let doneTimer: number | undefined;

    const finish = () => {
      const wait = Math.max(0, minVisible - (performance.now() - started));
      exitTimer = window.setTimeout(() => {
        setPhase("exit");
        doneTimer = window.setTimeout(() => setPhase("done"), EXIT_MS);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    document.documentElement.style.overflow = "hidden";

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "show") document.documentElement.style.overflow = "";
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`Loading ${site.name}`}
      className={`site-loader bg-ink-gradient weave-dark fixed inset-0 z-[100] flex items-center justify-center overflow-hidden text-ink-foreground ${
        phase === "exit" ? "site-loader-exit" : ""
      }`}
    >
      {/* Soft ember glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/20 blur-3xl"
      />

      <div className="site-loader-content relative flex flex-col items-center px-6 text-center">
        {/* Logo inside a spinning stitched ring */}
        <div className="relative grid h-28 w-28 place-items-center sm:h-32 sm:w-32">
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            className="loader-spin absolute inset-0 h-full w-full text-ember"
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeDasharray="5 4"
              strokeLinecap="round"
            />
          </svg>
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            className="loader-spin-reverse absolute inset-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] text-saffron/70"
          >
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="60 235"
              strokeLinecap="round"
            />
          </svg>
          <div className="loader-pop grid h-[72%] w-[72%] place-items-center rounded-full bg-ivory shadow-elegant">
            <img src={logo} alt="" className="h-[70%] w-[70%] object-contain" />
          </div>
        </div>

        <p className="eyebrow loader-fade mt-8" style={{ animationDelay: "250ms" }}>
          Est. {site.since} · Bengaluru
        </p>

        <h2 className="mt-3 font-display text-4xl font-medium leading-none tracking-tight sm:text-6xl">
          <span className="block">
            <Letters text="Parekh Chamber" startDelay={350} />
          </span>
          <span className="display-italic mt-2 block text-3xl sm:text-5xl">
            <Letters text="of Textile" startDelay={350 + 14 * 45} />
          </span>
        </h2>

        {/* Weaving thread progress */}
        <div className="relative mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-ink-border sm:w-72">
          <div className="loader-thread bg-ember-gradient absolute inset-y-0 left-0 w-full origin-left" />
        </div>
        <p className="loader-fade mt-4 text-xs font-medium tracking-[0.3em] text-ink-muted uppercase" style={{ animationDelay: "900ms" }}>
          Weaving connections
        </p>
      </div>
    </div>
  );
}
