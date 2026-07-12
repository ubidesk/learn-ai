import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { pillars, stages } from "@/lib/content";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "Start here — Learn AI" },
      {
        name: "description",
        content:
          "Your first day on Learn AI. No experience required — just a computer, a browser, and a little curiosity. Here's how the course works and where to begin.",
      },
      { property: "og:title", content: "Start here — Learn AI" },
      {
        property: "og:description",
        content:
          "How the course works, what you need, and how to begin — designed for complete beginners.",
      },
    ],
  }),
  component: StartPage,
});

function StartPage() {
  const firstTwo = stages.slice(0, 2);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Start here · complete beginners welcome
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          You don't need a background.{" "}
          <span className="italic text-accent">You just need to begin.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          If you've never written code, never taken a math class you enjoyed,
          and only ever used AI as a chatbot — you're in exactly the right
          place. We built this for you.
        </p>

        {/* What you need */}
        <section className="mt-14 rounded-xl border border-border bg-card p-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            What you need
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ["A computer", "Mac, Windows, or Linux. Anything from the last few years is fine."],
              ["A browser", "You'll start entirely in the browser. Later we'll set up a real dev environment together."],
              ["A little curiosity", "That's it. No coding experience, no math background, no CS degree required."],
            ].map(([t, b]) => (
              <li key={t} className="rounded-lg border border-border/70 bg-background/40 p-4">
                <div className="font-display text-lg font-semibold">{t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{b}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* How lessons work */}
        <section className="mt-14">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            How every lesson works
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Reading alone doesn't stick. Every lesson cycles through the same
            five moves — so understanding becomes intuition, and intuition
            becomes skill.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-5">
            {pillars.map((p) => (
              <li
                key={p.key}
                className="rounded-lg border border-border bg-card p-4"
              >
                <div className="font-mono text-[10px] tracking-widest text-accent">
                  {p.icon}
                </div>
                <div className="mt-2 font-display text-lg font-semibold">{p.title}</div>
                <p className="mt-1 text-xs text-muted-foreground">{p.tagline}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* First learning path */}
        <section className="mt-16">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Your first learning path
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            You'll start with two stages that give you the ground everything
            else stands on. Together, they take most learners about three
            weeks — at a comfortable pace.
          </p>
          <ol className="mt-8 space-y-4">
            {firstTwo.map((s) => (
              <li
                key={s.id}
                className="grid gap-4 rounded-xl border border-border bg-card p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8"
              >
                <div className="font-display text-5xl font-semibold text-accent/70">
                  {String(s.number).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.summary}</p>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:text-right">
                  {s.pacing}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Gentle warning */}
        <div className="mt-14 rounded-xl border border-border bg-secondary/40 p-8">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            A gentle warning.
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            You will feel stuck. That's not a bug — it's the exact feeling of
            learning. Sit with it a minute longer than is comfortable, then ask
            for help. The community lives on GitHub, and no question is too small.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            to="/lessons/orientation/what-is-ai"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Begin lesson 1: What Is AI, Really? →
          </Link>
          <Link
            to="/curriculum"
            className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            See all ten stages
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
