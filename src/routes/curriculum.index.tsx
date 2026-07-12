import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumb, StatusBadge } from "@/components/site-chrome";
import {
  stages,
  threads,
  tracks,
  totalModules,
  totalLessons,
  lessonCountFor,
} from "@curriculum/index";
import { stageStatus } from "@curriculum/lessons/index";

export const Route = createFileRoute("/curriculum/")({
  head: () => ({
    meta: [
      { title: "Curriculum — Learn AI" },
      {
        name: "description",
        content:
          "The authoritative 13-stage Learn AI curriculum: from digital foundations through professional AI engineering.",
      },
      { property: "og:title", content: "Curriculum — Learn AI" },
      {
        property: "og:description",
        content:
          "13 stages, lesson-level. Open source. Free forever. The spine is published; lessons are being authored.",
      },
    ],
  }),
  component: CurriculumOverview,
});

function CurriculumOverview() {
  const moduleCount = totalModules();
  const lessonCount = totalLessons();

  return (
    <PageShell>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-16">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Curriculum" }]} />
          <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            The 13-stage journey from zero to professional AI engineer.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The curriculum spine — every stage, module, and lesson title — is
            authoritative and published.{" "}
            <span className="text-foreground">Stage 1 is fully authored</span>{" "}
            with interactive experiments; later stages are being written openly.
          </p>
          <div className="mt-6">
            <Link
              to="/learn/$stageId/$moduleId/$lessonId"
              params={{
                stageId: "orientation",
                moduleId: "orientation-what-ai-is",
                lessonId: "orientation-what-ai-is-what-is-ai",
              }}
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Start with Stage 1, Lesson 1 →
            </Link>
          </div>
          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-6">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Stages</dt>
              <dd className="mt-1 font-display text-3xl">{stages.length}</dd>
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

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="sr-only">Stages</h2>
          <ol className="space-y-4">
            {stages.map((stage) => (
              <li key={stage.id}>
                <Link
                  to="/curriculum/$stageId"
                  params={{ stageId: stage.id }}
                  className="group block rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:p-8"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-sm text-muted-foreground tabular-nums">
                        Stage {String(stage.order).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl tracking-tight md:text-3xl">
                        {stage.title}
                      </h3>
                    </div>
                    <StatusBadge status={stage.status} />
                  </div>
                  <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
                    {stage.purpose}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    <span>{stage.modules.length} modules</span>
                    <span>{lessonCountFor(stage)} lessons</span>
                    <span className="text-accent group-hover:underline">Explore →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            Cross-curriculum threads
          </h2>
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

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            Specialisation tracks
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Optional and independent. Taken after the 13-stage core.
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
    </PageShell>
  );
}
