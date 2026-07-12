import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { stages, threads, tracks, totalModules, totalLessons } from "@curriculum/index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learn AI — Zero to professional AI engineer, in the open" },
      {
        name: "description",
        content:
          "An open-source, 13-stage curriculum that takes complete beginners from 'what is a computer?' to shipping production AI systems. Free, honest, made in public.",
      },
      { property: "og:title", content: "Learn AI — Zero to professional AI engineer" },
      {
        property: "og:description",
        content:
          "An open-source, 13-stage curriculum that takes complete beginners to professional AI engineering. Free forever.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const stageCount = stages.length;
  const moduleCount = totalModules();
  const lessonCount = totalLessons();

  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/40" />
            <span>Open-source · v0.1 · Spine published · Lessons in authoring</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            From complete beginner to{" "}
            <span className="italic text-accent">professional AI engineer.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Learn AI is a free, open-source curriculum that takes you all the
            way — from <em>"what even is a computer?"</em> to shipping
            production AI systems. No shortcuts around the fundamentals. No
            jargon walls. No paywall, ever.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/learn/$stageId/$moduleId/$lessonId"
              params={{
                stageId: "orientation",
                moduleId: "orientation-what-ai-is",
                lessonId: "orientation-what-ai-is-what-is-ai",
              }}
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Start with Lesson 1 →
            </Link>
            <Link
              to="/curriculum"
              className="inline-flex items-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Explore the curriculum
            </Link>
          </div>

          {/* stat strip */}
          <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Stages</dt>
              <dd className="mt-1 font-display text-3xl">{stageCount}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Modules</dt>
              <dd className="mt-1 font-display text-3xl">{moduleCount}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Lessons</dt>
              <dd className="mt-1 font-display text-3xl">{lessonCount}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* PROMISE */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            The learner promise
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              ["Free forever.", "No paywalls, no gated tiers, no upsells. Ever."],
              ["Open source.", "Curriculum, code, and reasoning are public. Made in the open."],
              ["Honest.", "We name what is hard, what is optional, and what is hype."],
              ["Complete.", "From 'what is a computer' to production AI systems — no gaps assumed away."],
            ].map(([title, body]) => (
              <div key={title} className="border-l-2 border-accent/40 pl-5">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREADS */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            Five threads woven through everything
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            These are not electives at the end. They run through every stage,
            reinforced continuously.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {threads.map((t) => (
              <li key={t.id} className="rounded-lg border border-border/60 bg-card p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{t.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SPECIALISATIONS */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            Specialisation tracks
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            After the 13-stage core, choose the direction that fits you. Tracks
            are optional and independent.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {tracks.map((t) => (
              <li key={t.id} className="rounded-lg border border-border/60 bg-card p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg">{t.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    After Stage {t.suggestedAfterStage}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HONEST CALL-OUT */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="rounded-2xl border border-border/60 bg-card p-8 md:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Where we are today</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
              The spine is published. The lessons are being authored.
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              Every stage, module, and lesson title on this site is authoritative — this
              is the curriculum we are actually building. What you cannot read yet are the
              full lesson bodies. We would rather show you the honest shape of the
              journey than fake progress with placeholder content.
            </p>
            <div className="mt-6">
              <Link
                to="/curriculum"
                className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Browse the 13-stage curriculum
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
