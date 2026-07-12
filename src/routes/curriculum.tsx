import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { StageCard } from "@/components/learn-ui";
import { stages, totalStages, totalModules } from "@/lib/content";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — Learn AI" },
      {
        name: "description",
        content:
          "Ten stages from complete beginner to professional AI engineer. Free, open, and paced for humans — no shortcuts around the fundamentals.",
      },
      { property: "og:title", content: "Curriculum — Learn AI" },
      {
        property: "og:description",
        content:
          "Orientation, computers, programming, Python, data, ML, deep learning, LLMs, AI engineering, capstone.",
      },
    ],
  }),
  component: CurriculumPage,
});

function CurriculumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Curriculum · v0.1
        </div>
        <h1 className="mt-4 font-display text-5xl tracking-tight md:text-6xl">
          {totalStages} stages. {totalModules} modules.{" "}
          <span className="italic text-accent">One honest path.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          From "what is a computer, really?" to shipping production AI
          systems. This is the canonical Learn AI curriculum — the full
          module list is shown even where lessons are still being written,
          so nothing about the path ahead is hidden from you.
        </p>

        <dl className="mt-8 grid max-w-xl grid-cols-3 gap-4 rounded-xl border border-border bg-card p-4 text-center">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Stages</dt>
            <dd className="mt-1 font-display text-2xl font-semibold">{totalStages}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Modules</dt>
            <dd className="mt-1 font-display text-2xl font-semibold">{totalModules}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Pillars</dt>
            <dd className="mt-1 font-display text-2xl font-semibold">5</dd>
          </div>
        </dl>


        <div className="mt-14 space-y-6">
          {stages.map((s) => (
            <StageCard key={s.id} stage={s} />
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-dashed border-border bg-card p-6 text-sm text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">A note on pacing.</span>{" "}
            The week counts are gentle guidelines, not homework. Some learners
            fly through orientation in a weekend; others sit with a stage for a
            month. Both are correct. Follow the arrow, not the clock.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            to="/lessons/orientation/what-is-ai"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Begin lesson 1 →
          </Link>
          <Link
            to="/start"
            className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            How the course works
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
