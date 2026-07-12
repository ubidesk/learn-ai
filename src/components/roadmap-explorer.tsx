import { useState } from "react";
import { stages } from "@/lib/content";

export function RoadmapExplorer() {
  const [selected, setSelected] = useState<string>(stages[0].id);
  const stage = stages.find((s) => s.id === selected) ?? stages[0];

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
        Small experiment · walk the roadmap
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        Click any stage to see what stands on what.
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Notice how each stage relies on the ones before it. This is why we
        don't skip programming or math — later stages literally can't exist
        without them.
      </p>

      <ol className="mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-5">
        {stages.map((s) => {
          const isSel = s.id === selected;
          const isPrereqOfSel =
            stage.prerequisites.includes(s.id) || stage.id === s.id;
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => setSelected(s.id)}
                aria-pressed={isSel}
                className={`w-full rounded-md border px-3 py-2 text-left text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isSel
                    ? "border-accent bg-accent text-accent-foreground"
                    : isPrereqOfSel
                      ? "border-accent/50 bg-accent/10"
                      : "border-border hover:border-foreground/60"
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-80">
                  Stage {String(s.number).padStart(2, "0")}
                </div>
                <div className="mt-1 font-medium leading-tight">
                  {s.title.split(":")[0]}
                </div>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 rounded-lg border border-dashed border-border bg-background/40 p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Stage {stage.number}
            </div>
            <h4 className="mt-1 font-display text-xl font-semibold">
              {stage.title}
            </h4>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
            {stage.pacing}
          </span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{stage.summary}</p>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Depends on
            </div>
            {stage.prerequisites.length === 0 ? (
              <p className="mt-1 text-xs text-muted-foreground">
                Nothing — this is where you start.
              </p>
            ) : (
              <ul className="mt-1 space-y-1 text-xs">
                {stage.prerequisites.map((pid) => {
                  const p = stages.find((x) => x.id === pid);
                  return (
                    <li key={pid} className="flex items-center gap-2">
                      <span aria-hidden className="h-1 w-3 bg-accent" />
                      {p ? `Stage ${p.number} · ${p.title.split(":")[0]}` : pid}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              By the end, you can…
            </div>
            <p className="mt-1 text-sm">{stage.outcome}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
