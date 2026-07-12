import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { pillars, journey, featuredProjects } from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="grain relative overflow-hidden border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground/40" />
              <span>Open-source · v0.1 · Made in public</span>
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Understand AI.{" "}
              <span className="italic text-accent">Not just use it.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              A free, open-source curriculum that takes you from{" "}
              <em>“what even is a model?”</em> to shipping real AI systems —
              without the jargon, hype, or gatekeeping.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/start"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-transform hover:-translate-y-0.5"
              >
                Start learning — free
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/curriculum"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
              >
                See the curriculum
              </Link>
            </div>

            {/* Learner promise strip */}
            <div className="mt-16 grid gap-6 border-t border-border/60 pt-8 md:grid-cols-3">
              {[
                ["Free forever", "No paywalls, no “premium tier.” Every lesson, project, and tool is open."],
                ["No prerequisites", "Start with zero code, zero math. We meet you exactly where you are."],
                ["Built in the open", "Every issue, review, and improvement lives on GitHub. Learn with us, then help us."],
              ].map(([title, body]) => (
                <div key={title}>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-accent">
                    Our promise
                  </div>
                  <div className="mt-2 font-display text-xl font-semibold">{title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between gap-6 border-b border-border/60 pb-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Five pillars
              </div>
              <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                How Learn AI actually teaches.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
              Reading alone doesn't stick. Every chapter cycles through the same
              five moves, so knowledge turns into intuition.
            </p>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p) => (
              <article
                key={p.key}
                className="group flex flex-col justify-between bg-card p-6 transition-colors hover:bg-secondary"
              >
                <div>
                  <div className="font-mono text-[11px] tracking-widest text-accent">
                    {p.icon}
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-foreground/80">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* JOURNEY */}
        <section className="border-y border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  The journey
                </div>
                <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                  From day one to shipping systems.
                </h2>
              </div>
              <Link
                to="/curriculum"
                className="hidden text-sm font-medium text-accent hover:underline md:inline"
              >
                Full curriculum →
              </Link>
            </div>

            <ol className="mt-12 space-y-4">
              {journey.map((s, i) => (
                <li
                  key={s.stage}
                  className="group grid gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl font-semibold text-accent/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-highlight/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-highlight-foreground">
                      {s.level}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {s.stage}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.summary}</p>
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:text-right">
                    {s.weeks}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between gap-6 border-b border-border/60 pb-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Featured projects
              </div>
              <h2 className="mt-2 font-display text-3xl tracking-tight md:text-4xl">
                Learn by building things that actually run.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden text-sm font-medium text-accent hover:underline md:inline"
            >
              All projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((p) => (
              <article
                key={p.slug}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-foreground hover:shadow-lg hover:shadow-foreground/5"
              >
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                  <span className="rounded-full bg-highlight/30 px-2 py-0.5 text-highlight-foreground">
                    {p.level}
                  </span>
                  <span className="text-muted-foreground">· {p.time}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border/60 bg-primary text-primary-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="max-w-2xl font-display text-3xl tracking-tight md:text-4xl">
                The best time to learn AI was a year ago.{" "}
                <span className="text-accent">The second best time is today.</span>
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/70">
                Zero cost. Zero prerequisites. One honest path.
              </p>
            </div>
            <Link
              to="/start"
              className="shrink-0 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Begin your first lesson →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
