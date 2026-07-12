import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import type { Stage, Status } from "@/lib/content";
import { lessonPathFor, statusLabel } from "@/lib/content";


export function StatusBadge({ status }: { status: Status }) {
  const tone =
    status === "available"
      ? "bg-highlight/40 text-highlight-foreground border-highlight/60"
      : status === "in-development"
        ? "bg-accent/15 text-accent border-accent/40"
        : "bg-muted text-muted-foreground border-border";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${tone}`}
    >
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${
          status === "available"
            ? "bg-highlight-foreground"
            : status === "in-development"
              ? "bg-accent"
              : "bg-muted-foreground/60"
        }`}
      />
      {statusLabel[status]}
    </span>
  );
}

export function StageCard({ stage, compact = false }: { stage: Stage; compact?: boolean }) {
  return (
    <article
      className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-foreground/60 hover:shadow-md hover:shadow-foreground/5"
      aria-labelledby={`stage-${stage.id}-title`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="font-display text-5xl font-semibold leading-none text-accent/70">
            {String(stage.number).padStart(2, "0")}
          </span>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {stage.pacing} · {stage.level}
            </div>
            <h3
              id={`stage-${stage.id}-title`}
              className="mt-1 font-display text-xl font-semibold tracking-tight md:text-2xl"
            >
              {stage.title}
            </h3>
          </div>
        </div>
        <StatusBadge status={stage.status} />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {stage.summary}
      </p>

      {!compact && (
        <>
          <div className="mt-6">
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Representative modules
            </div>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {stage.modules.map((m) => {
                const lessonPath = lessonPathFor(stage.id, m.id);
                const inner = (
                  <>
                    <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <div>
                      <div className="flex items-center gap-2 font-medium">
                        {m.title}
                        {lessonPath && (
                          <span className="font-mono text-[9px] uppercase tracking-widest text-accent">
                            Open →
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground">{m.summary}</div>
                    </div>
                  </>
                );
                return (
                  <li key={m.id}>
                    {lessonPath ? (
                      <Link
                        to={lessonPath as unknown as never}
                        className="flex items-start gap-2 rounded-md border border-border/70 bg-background/40 px-3 py-2 text-sm transition-colors hover:border-accent hover:bg-accent/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {inner}
                      </Link>
                    ) : (
                      <div
                        aria-disabled="true"
                        className="flex items-start gap-2 rounded-md border border-border/70 bg-background/40 px-3 py-2 text-sm"
                      >
                        {inner}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 rounded-lg border border-dashed border-border bg-background/40 p-4 md:grid-cols-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Stage project
              </div>
              <div className="mt-1 font-display text-base font-semibold">{stage.project.title}</div>
              <p className="mt-1 text-xs text-muted-foreground">{stage.project.blurb}</p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                By the end, you can…
              </div>
              <p className="mt-1 text-sm leading-relaxed">{stage.outcome}</p>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

export function LessonSection({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60 pt-10">
      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </div>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="prose-lesson mt-5 space-y-4 text-base leading-relaxed text-foreground/85">
        {children}
      </div>
    </section>
  );
}

export function LearningObjectives({ items }: { items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/40 p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Learning objectives
      </div>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm">
            <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface KnowledgeCheckQuestion {
  q: string;
  options: string[];
  answerIndex: number;
  explain: string;
}

export function KnowledgeCheck({ questions }: { questions: KnowledgeCheckQuestion[] }) {
  return (
    <div className="space-y-6">
      {questions.map((q, i) => (
        <KnowledgeCheckItem key={i} q={q} index={i} />
      ))}
    </div>
  );
}

function KnowledgeCheckItem({ q, index }: { q: KnowledgeCheckQuestion; index: number }) {
  const [picked, setPicked] = useState<number | null>(null);
  const correct = picked === q.answerIndex;
  return (
    <fieldset className="rounded-xl border border-border bg-card p-5">
      <legend className="px-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        Question {index + 1}
      </legend>
      <p className="font-display text-lg font-semibold">{q.q}</p>
      <div className="mt-4 grid gap-2">
        {q.options.map((opt, oi) => {
          const isPicked = picked === oi;
          const state =
            picked === null
              ? "border-border hover:border-foreground/60"
              : oi === q.answerIndex
                ? "border-highlight bg-highlight/20"
                : isPicked
                  ? "border-destructive bg-destructive/10"
                  : "border-border opacity-70";
          return (
            <button
              key={oi}
              type="button"
              onClick={() => setPicked(oi)}
              aria-pressed={isPicked}
              className={`rounded-md border px-3 py-2 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${state}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <p
          className={`mt-4 rounded-md border px-3 py-2 text-sm ${
            correct
              ? "border-highlight/60 bg-highlight/20"
              : "border-accent/40 bg-accent/10"
          }`}
          role="status"
        >
          <strong className="font-semibold">{correct ? "Yes — " : "Not quite. "}</strong>
          {q.explain}
        </p>
      )}
    </fieldset>
  );
}

export function LessonNav({
  prev,
  next,
}: {
  prev?: { to: string; label: string };
  next?: { to: string; label: string };
}) {
  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-16 grid gap-3 border-t border-border/60 pt-8 md:grid-cols-2"
    >
      {prev ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <Link
          to={prev.to as unknown as never}
          className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-foreground/60"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            ← Previous
          </div>
          <div className="mt-1 font-display text-lg font-semibold">{prev.label}</div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={next.to as unknown as never}
          className="group rounded-lg border border-border bg-card p-4 text-right transition-colors hover:border-foreground/60"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
            Next →
          </div>
          <div className="mt-1 font-display text-lg font-semibold">{next.label}</div>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
