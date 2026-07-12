import { useMemo, useState } from "react";

// A tiny in-browser "classifier" thought experiment.
// The learner labels a handful of examples; we then use a naive
// nearest-average-rule to classify a held-out example — visibly
// showing the idea that "learning from examples" isn't magic.

type Item = { id: string; label: string; features: [number, number] };

const trainingItems: Item[] = [
  { id: "cat-1", label: "Cat", features: [0.2, 0.3] }, // small, quiet
  { id: "cat-2", label: "Cat", features: [0.25, 0.4] },
  { id: "dog-1", label: "Dog", features: [0.7, 0.75] }, // large, loud
  { id: "dog-2", label: "Dog", features: [0.8, 0.6] },
];

const mystery: Item = { id: "?", label: "?", features: [0.55, 0.65] };

export function ClassificationExperiment() {
  const [labeled, setLabeled] = useState<Record<string, "Cat" | "Dog" | undefined>>({});

  const allLabeled = trainingItems.every((it) => labeled[it.id]);
  const prediction = useMemo(() => {
    if (!allLabeled) return null;
    // Average feature vector per class, then nearest.
    const groups: Record<string, [number, number][]> = { Cat: [], Dog: [] };
    for (const it of trainingItems) {
      const l = labeled[it.id];
      if (l) groups[l].push(it.features);
    }
    const avg = (v: [number, number][]) =>
      v.length === 0
        ? null
        : ([
            v.reduce((s, x) => s + x[0], 0) / v.length,
            v.reduce((s, x) => s + x[1], 0) / v.length,
          ] as [number, number]);
    const centers = { Cat: avg(groups.Cat), Dog: avg(groups.Dog) };
    if (!centers.Cat || !centers.Dog) return null;
    const dist = (a: [number, number], b: [number, number]) =>
      Math.hypot(a[0] - b[0], a[1] - b[1]);
    const dCat = dist(mystery.features, centers.Cat);
    const dDog = dist(mystery.features, centers.Dog);
    return dCat < dDog ? "Cat" : "Dog";
  }, [labeled, allLabeled]);

  const setLabel = (id: string, label: "Cat" | "Dog") =>
    setLabeled((s) => ({ ...s, [id]: label }));

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
        Small experiment · runs entirely in your browser
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        Teach a (tiny) model.
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Label the four examples below. Then we'll use the exact same idea a
        real machine-learning model uses — "look at what you've seen before" —
        to classify a mystery animal.
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {trainingItems.map((it) => (
          <li
            key={it.id}
            className="flex items-center justify-between gap-3 rounded-md border border-border bg-background/40 px-3 py-2"
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Example
              </div>
              <div className="text-sm">
                size {it.features[0].toFixed(2)} · loudness {it.features[1].toFixed(2)}
              </div>
            </div>
            <div className="flex gap-1" role="group" aria-label={`Label example ${it.id}`}>
              {(["Cat", "Dog"] as const).map((l) => {
                const active = labeled[it.id] === l;
                return (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLabel(it.id, l)}
                    aria-pressed={active}
                    className={`rounded-md border px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      active
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border hover:border-foreground/60"
                    }`}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-lg border border-dashed border-border bg-background/40 p-4">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Mystery animal
        </div>
        <div className="mt-1 text-sm">
          size {mystery.features[0].toFixed(2)} · loudness{" "}
          {mystery.features[1].toFixed(2)}
        </div>
        <div className="mt-3 text-sm" aria-live="polite">
          {!allLabeled ? (
            <span className="text-muted-foreground">
              Label all four examples to see the prediction.
            </span>
          ) : (
            <span>
              Based on your labels, the model predicts:{" "}
              <strong className="font-display text-lg text-accent">
                {prediction}
              </strong>
              . That's it — that's the whole idea. Real models do this with
              millions of examples and many more features.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
