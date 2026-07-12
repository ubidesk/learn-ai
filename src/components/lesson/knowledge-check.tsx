import { useState } from "react";
import type { KnowledgeCheck } from "@curriculum/lessons/schema";

export function KnowledgeCheckCard({ check }: { check: KnowledgeCheck }) {
  const [pick, setPick] = useState<number | null>(null);
  return (
    <div className="rounded-xl border border-border/60 bg-card p-5 md:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
        Knowledge check
      </p>
      <p className="mt-3 text-base leading-relaxed">{check.question}</p>
      <fieldset className="mt-4 space-y-2">
        <legend className="sr-only">Answer options</legend>
        {check.options.map((opt, i) => {
          const chosen = pick === i;
          const correct = opt.correct;
          const showFeedback = pick !== null;
          const stateCls = !showFeedback
            ? "border-border/60 bg-background hover:border-accent/60"
            : chosen
              ? correct
                ? "border-highlight bg-highlight/15"
                : "border-destructive bg-destructive/10"
              : correct
                ? "border-highlight/60 bg-background"
                : "border-border/60 bg-background opacity-70";
          return (
            <button
              key={i}
              type="button"
              onClick={() => setPick(i)}
              aria-pressed={chosen}
              className={`w-full rounded-lg border p-3 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${stateCls}`}
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] ${
                    showFeedback && correct
                      ? "border-highlight bg-highlight/20 text-highlight-foreground"
                      : showFeedback && chosen && !correct
                        ? "border-destructive bg-destructive/20 text-destructive"
                        : "border-border/60"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt.text}</span>
              </div>
              {showFeedback && chosen && (
                <p
                  className={`mt-2 pl-8 text-xs leading-relaxed ${
                    correct ? "text-highlight-foreground" : "text-muted-foreground"
                  }`}
                >
                  {opt.feedback}
                </p>
              )}
            </button>
          );
        })}
      </fieldset>
      {pick !== null && !check.options[pick]!.correct && (
        <button
          type="button"
          onClick={() => setPick(null)}
          className="mt-3 text-xs font-medium text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Try again
        </button>
      )}
    </div>
  );
}
