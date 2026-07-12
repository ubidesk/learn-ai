import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumb, StatusBadge } from "@/components/site-chrome";
import { stages, getStageById, lessonCountFor } from "@curriculum/index";
import { getLessonBody } from "@curriculum/lessons/index";
import type { Stage } from "@curriculum/schema";

export const Route = createFileRoute("/curriculum/$stageId")({
  loader: ({ params }): { stage: Stage } => {
    const stage = getStageById(params.stageId);
    if (!stage) throw notFound();
    return { stage };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Stage not found — Learn AI" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { stage } = loaderData;
    const title = `Stage ${stage.order}: ${stage.title} — Learn AI`;
    return {
      meta: [
        { title },
        { name: "description", content: stage.purpose },
        { property: "og:title", content: title },
        { property: "og:description", content: stage.purpose },
      ],
    };
  },
  notFoundComponent: StageNotFound,
  component: StageDetail,
});

function StageNotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-4 font-display text-4xl">Stage not found</h1>
        <p className="mt-3 text-muted-foreground">
          That stage isn't part of the curriculum.
        </p>
        <Link
          to="/curriculum"
          className="mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Back to the curriculum
        </Link>
      </div>
    </PageShell>
  );
}

function StageDetail() {
  const { stage } = Route.useLoaderData() as { stage: Stage };
  const previous = stages.find((s) => s.order === stage.order - 1);
  const next = stages.find((s) => s.order === stage.order + 1);
  const firstAuthored = (() => {
    for (const mod of stage.modules) {
      for (const lesson of mod.lessons) {
        if (getLessonBody(lesson.id)) {
          return { moduleId: mod.id, lessonId: lesson.id, title: lesson.title };
        }
      }
    }
    return undefined;
  })();

  return (
    <PageShell>
      <article>
        {/* Header */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-16">
            <Breadcrumb
              items={[
                { label: "Home", to: "/" },
                { label: "Curriculum", to: "/curriculum" },
                { label: `Stage ${stage.order}` },
              ]}
            />
            <div className="mt-6 flex items-center gap-3">
              <span className="font-mono text-sm text-muted-foreground tabular-nums">
                Stage {String(stage.order).padStart(2, "0")}
              </span>
              <StatusBadge status={stage.status} />
            </div>
            <h1 className="mt-3 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              {stage.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {stage.purpose}
            </p>
            <dl className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border/60 bg-card p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Starting level
                </dt>
                <dd className="mt-2 text-sm leading-relaxed">{stage.startingLevel}</dd>
              </div>
              <div className="rounded-lg border border-border/60 bg-card p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Prerequisites
                </dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  {stage.prerequisites.length === 0
                    ? "None — this is where the journey begins."
                    : stage.prerequisites
                        .map((id) => getStageById(id)?.title ?? id)
                        .join(" · ")}
                </dd>
              </div>
              <div className="rounded-lg border border-border/60 bg-card p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Scale
                </dt>
                <dd className="mt-2 text-sm leading-relaxed">
                  {stage.modules.length} modules · {lessonCountFor(stage)} lessons
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Modules */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">Modules and lessons</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Every lesson below is part of the authoritative spine. Bodies are
              being authored — status will update as lessons ship.
            </p>
            <div className="mt-8 space-y-4">
              {stage.modules.map((mod) => (
                <details
                  key={mod.id}
                  className="group rounded-xl border border-border/60 bg-card open:border-accent/40"
                >
                  <summary className="flex cursor-pointer list-none flex-wrap items-baseline justify-between gap-4 rounded-xl p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-muted-foreground tabular-nums">
                        {String(stage.order).padStart(2, "0")}.{String(mod.order).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl tracking-tight md:text-2xl">
                          {mod.title}
                        </h3>
                        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
                          {mod.summary}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                      {mod.lessons.length} lessons
                      <span aria-hidden="true" className="ml-3 inline-block transition-transform group-open:rotate-180">
                        ↓
                      </span>
                    </span>
                  </summary>
                  <ol className="border-t border-border/60 px-6 pb-6 pt-4">
                    {mod.lessons.map((lesson) => {
                      const hasBody = getLessonBody(lesson.id) !== undefined;
                      const inner = (
                        <div className="flex flex-wrap items-baseline justify-between gap-3 py-3">
                          <div className="flex items-baseline gap-4">
                            <span className="font-mono text-xs text-muted-foreground tabular-nums">
                              {String(stage.order).padStart(2, "0")}.
                              {String(mod.order).padStart(2, "0")}.
                              {String(lesson.order).padStart(2, "0")}
                            </span>
                            <div>
                              <p className="text-sm font-medium text-foreground">
                                {lesson.title}
                                {hasBody && (
                                  <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
                                    Open →
                                  </span>
                                )}
                              </p>
                              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                                {lesson.outcome}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                              {lesson.effort}
                            </span>
                            <StatusBadge status={hasBody ? "drafting" : lesson.status} />
                          </div>
                        </div>
                      );
                      return (
                        <li
                          key={lesson.id}
                          className="border-b border-border/40 last:border-b-0"
                        >
                          {hasBody ? (
                            <Link
                              to="/learn/$stageId/$moduleId/$lessonId"
                              params={{
                                stageId: stage.id,
                                moduleId: mod.id,
                                lessonId: lesson.id,
                              }}
                              className="block rounded-md px-1 hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                              {inner}
                            </Link>
                          ) : (
                            inner
                          )}
                        </li>
                      );
                    })}
                  </ol>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Project & exit criteria */}
        <section className="border-b border-border/60">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-2">
            <div className="rounded-xl border border-border/60 bg-card p-6 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Stage project</p>
              <h2 className="mt-3 font-display text-2xl tracking-tight">{stage.project.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{stage.project.description}</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-6 md:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Exit criteria</p>
              <h2 className="mt-3 font-display text-2xl tracking-tight">You leave this stage able to…</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground marker:text-accent">
                {stage.exitCriteria.map((c) => (
                  <li key={c} className="leading-relaxed">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Prev / Next */}
        <nav aria-label="Stage navigation" className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-4 md:grid-cols-2">
            {previous ? (
              <Link
                to="/curriculum/$stageId"
                params={{ stageId: previous.id }}
                className="block rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  ← Previous · Stage {previous.order}
                </p>
                <p className="mt-2 font-display text-lg">{previous.title}</p>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to="/curriculum/$stageId"
                params={{ stageId: next.id }}
                className="block rounded-lg border border-border/60 bg-card p-5 text-right transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Next · Stage {next.order} →
                </p>
                <p className="mt-2 font-display text-lg">{next.title}</p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      </article>
    </PageShell>
  );
}
