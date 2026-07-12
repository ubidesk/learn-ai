import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumb, StatusBadge } from "@/components/site-chrome";
import { LessonRenderer } from "@/components/lesson/lesson-renderer";
import { stages, getStageById } from "@curriculum/index";
import {
  getLessonBody,
  findLessonLocation,
  flatLessonList,
  lessonPathFor,
} from "@curriculum/lessons/index";

interface LoaderData {
  stageId: string;
  moduleId: string;
  lessonId: string;
  hasBody: boolean;
}

export const Route = createFileRoute("/learn/$stageId/$moduleId/$lessonId")({
  loader: ({ params }): LoaderData => {
    const stage = getStageById(params.stageId);
    if (!stage) throw notFound();
    const mod = stage.modules.find((m) => m.id === params.moduleId);
    if (!mod) throw notFound();
    const lesson = mod.lessons.find((l) => l.id === params.lessonId);
    if (!lesson) throw notFound();
    return {
      stageId: stage.id,
      moduleId: mod.id,
      lessonId: lesson.id,
      hasBody: getLessonBody(lesson.id) !== undefined,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Lesson not found — Learn AI" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const loc = findLessonLocation(loaderData.lessonId);
    if (!loc) {
      return {
        meta: [{ title: "Lesson — Learn AI" }],
      };
    }
    const title = `${loc.title} — Learn AI`;
    return {
      meta: [
        { title },
        { name: "description", content: loc.outcome },
        { property: "og:title", content: title },
        { property: "og:description", content: loc.outcome },
      ],
    };
  },
  notFoundComponent: LessonNotFound,
  component: LessonPage,
});

function LessonNotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-4 font-display text-4xl">Lesson not found</h1>
        <p className="mt-3 text-muted-foreground">
          That lesson isn't part of the curriculum.
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

function LessonPage() {
  const data = Route.useLoaderData() as LoaderData;
  const stage = getStageById(data.stageId)!;
  const mod = stage.modules.find((m) => m.id === data.moduleId)!;
  const lesson = mod.lessons.find((l) => l.id === data.lessonId)!;
  const body = getLessonBody(lesson.id);

  const flat = flatLessonList();
  const idx = flat.findIndex((f) => f.lessonId === lesson.id);
  const prev = idx > 0 ? flat[idx - 1] : undefined;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : undefined;

  // The next Stage's overview page, used when the next lesson has no body yet.
  const nextStage = stages.find((s) => s.order === stage.order + 1);

  return (
    <PageShell>
      <article>
        {/* Header */}
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-4xl px-6 pt-10 pb-8 md:pt-14">
            <Breadcrumb
              items={[
                { label: "Home", to: "/" },
                { label: "Curriculum", to: "/curriculum" },
                {
                  label: `Stage ${stage.order}`,
                  to: "/curriculum/$stageId",
                  params: { stageId: stage.id },
                },
                { label: lesson.title },
              ]}
            />
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-muted-foreground tabular-nums">
                {String(stage.order).padStart(2, "0")}.
                {String(mod.order).padStart(2, "0")}.
                {String(lesson.order).padStart(2, "0")}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                {lesson.effort}
              </span>
              <StatusBadge status={body ? "ready" : lesson.status} />
            </div>
            <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight md:text-5xl">
              {lesson.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {lesson.outcome}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-mono">Module: </span>
              {mod.title}
            </p>
          </div>
        </section>

        {/* Body */}
        <section>
          <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
            {body ? (
              <LessonRenderer body={body} />
            ) : (
              <PlaceholderBody stageId={stage.id} />
            )}
          </div>
        </section>

        {/* Prev / Next */}
        <nav
          aria-label="Lesson navigation"
          className="mx-auto max-w-4xl px-6 pb-16"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {prev ? (
              <PrevNextCard
                direction="previous"
                stageId={prev.stageId}
                moduleId={prev.moduleId}
                lessonId={prev.lessonId}
              />
            ) : (
              <div />
            )}
            {next ? (
              <PrevNextCard
                direction="next"
                stageId={next.stageId}
                moduleId={next.moduleId}
                lessonId={next.lessonId}
              />
            ) : nextStage ? (
              <Link
                to="/curriculum/$stageId"
                params={{ stageId: nextStage.id }}
                className="block rounded-lg border border-border/60 bg-card p-5 text-right transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Next · Stage {nextStage.order} →
                </p>
                <p className="mt-2 font-display text-lg">{nextStage.title}</p>
              </Link>
            ) : (
              <div />
            )}
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/curriculum/$stageId"
              params={{ stageId: stage.id }}
              className="text-sm text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              ← Back to Stage {stage.order} overview
            </Link>
          </div>
        </nav>
      </article>
    </PageShell>
  );
}

function PrevNextCard({
  direction,
  stageId,
  moduleId,
  lessonId,
}: {
  direction: "previous" | "next";
  stageId: string;
  moduleId: string;
  lessonId: string;
}) {
  const loc = findLessonLocation(lessonId);
  const title = loc?.title ?? lessonId;
  const isNext = direction === "next";
  return (
    <Link
      to="/learn/$stageId/$moduleId/$lessonId"
      params={{ stageId, moduleId, lessonId }}
      className={`block rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${isNext ? "text-right" : ""}`}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {isNext ? "Next lesson →" : "← Previous lesson"}
      </p>
      <p className="mt-2 font-display text-lg">{title}</p>
    </Link>
  );
}

function PlaceholderBody({ stageId }: { stageId: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border/60 bg-card p-8 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Coming soon
      </p>
      <h2 className="mt-3 font-display text-2xl">This lesson's body is being authored.</h2>
      <p className="mt-3 text-muted-foreground">
        The lesson is part of the authoritative curriculum spine. Its interactive body is
        next in the queue. Follow the sequence from Stage 1 for the fully authored lessons.
      </p>
      <div className="mt-5">
        <Link
          to="/curriculum/$stageId"
          params={{ stageId }}
          className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
        >
          Back to stage overview
        </Link>
      </div>
    </div>
  );
}

// Silence lint if lessonPathFor isn't used externally in this file.
void lessonPathFor;
