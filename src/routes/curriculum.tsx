import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { journey } from "@/lib/content";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — Learn AI" },
      {
        name: "description",
        content:
          "The full Learn AI curriculum, from foundations to shipping production systems. Free, open, and paced for humans.",
      },
      { property: "og:title", content: "Curriculum — Learn AI" },
      {
        property: "og:description",
        content: "Five stages, dozens of lessons, one honest path from beginner to builder.",
      },
    ],
  }),
  component: CurriculumPage,
});

function CurriculumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Curriculum · v0.1
        </div>
        <h1 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">
          The path, in the open.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Five stages. Each one is short enough to finish, long enough to
          matter. Move at your own pace — skip ahead if you're ready, revisit
          when you're not.
        </p>

        <div className="mt-16 space-y-14">
          {journey.map((s, i) => (
            <section key={s.stage} className="grid gap-6 md:grid-cols-[8rem_1fr]">
              <div>
                <div className="font-display text-6xl font-semibold text-accent/70">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.weeks}
                </div>
                <div className="mt-1 rounded-full bg-highlight/30 px-2 py-0.5 text-center font-mono text-[10px] uppercase tracking-widest text-highlight-foreground">
                  {s.level}
                </div>
              </div>
              <div className="border-l border-border pl-6">
                <h2 className="font-display text-3xl font-semibold tracking-tight">
                  {s.stage}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {s.summary}
                </p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {s.topics.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-3 rounded-md border border-border bg-card px-3 py-2 text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 rounded-xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">A note on pacing.</span>{" "}
            The week counts are gentle guidelines, not homework. Some learners
            fly through foundations in a weekend; others sit with them for a
            month. Both are correct. Follow the arrow, not the clock.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            to="/start"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Start with Foundations →
          </Link>
          <Link
            to="/projects"
            className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-foreground"
          >
            Browse projects
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
