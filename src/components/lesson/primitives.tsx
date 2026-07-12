import { useState, useMemo } from "react";
import type { ReactNode } from "react";

/**
 * Shared primitives for lesson interactives.
 * All interactives are session-local; no persistence, no network.
 */

export function InteractiveShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-accent/40 bg-accent/5 p-5 md:p-6">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
        Interactive · {title}
      </p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

/** Reusable multi-scenario classifier. Options-based, no free text. */
export function ScenarioSorter({
  scenarios,
  choices,
}: {
  scenarios: { id: string; text: string; correct: string; feedback: string }[];
  choices: { id: string; label: string }[];
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  return (
    <ol className="space-y-4">
      {scenarios.map((s) => {
        const picked = answers[s.id];
        const isRight = picked === s.correct;
        return (
          <li key={s.id} className="rounded-lg border border-border/60 bg-background p-4">
            <p className="text-sm leading-relaxed">{s.text}</p>
            <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label={`Answer for: ${s.text}`}>
              {choices.map((c) => {
                const chosen = picked === c.id;
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="radio"
                    aria-checked={chosen}
                    onClick={() => setAnswers((a) => ({ ...a, [s.id]: c.id }))}
                    className={`rounded-md border px-3 py-1.5 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      chosen
                        ? isRight
                          ? "border-highlight bg-highlight/20 text-highlight-foreground"
                          : "border-destructive bg-destructive/10 text-destructive"
                        : "border-border/60 bg-card hover:border-accent/60"
                    }`}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
            {picked && (
              <p className={`mt-3 text-xs leading-relaxed ${isRight ? "text-highlight-foreground" : "text-muted-foreground"}`}>
                {isRight ? "✓ " : "→ "} {s.feedback}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function StepFlow({ steps }: { steps: { title: string; body: string }[] }) {
  const [i, setI] = useState(0);
  const step = steps[i]!;
  return (
    <div>
      <div className="flex items-center gap-2">
        {steps.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 flex-1 rounded-full ${idx <= i ? "bg-accent" : "bg-border"}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-border/60 bg-background p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          Step {i + 1} of {steps.length}
        </p>
        <h4 className="mt-2 font-display text-lg">{step.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
      </div>
      <div className="mt-3 flex justify-between">
        <button
          type="button"
          onClick={() => setI((v) => Math.max(0, v - 1))}
          disabled={i === 0}
          className="rounded-md border border-border/60 px-3 py-1.5 text-xs disabled:opacity-40 hover:border-accent/60"
        >
          ← Previous
        </button>
        <button
          type="button"
          onClick={() => setI((v) => Math.min(steps.length - 1, v + 1))}
          disabled={i === steps.length - 1}
          className="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground disabled:opacity-40"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

/** Simple toggle-diagram: pick a mode and see the annotation change. */
export function ModeSwitch({
  modes,
}: {
  modes: { id: string; label: string; render: () => ReactNode }[];
}) {
  const [mode, setMode] = useState(modes[0]!.id);
  const current = modes.find((m) => m.id === mode) ?? modes[0]!;
  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist">
        {modes.map((m) => (
          <button
            key={m.id}
            type="button"
            role="tab"
            aria-selected={mode === m.id}
            onClick={() => setMode(m.id)}
            className={`rounded-md border px-3 py-1.5 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              mode === m.id
                ? "border-accent bg-accent/10 text-foreground"
                : "border-border/60 bg-card hover:border-accent/60"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-border/60 bg-background p-4">
        {current.render()}
      </div>
    </div>
  );
}

/** Nested circle diagram used in several lessons. */
export function NestedCircles({
  layers,
}: {
  layers: { label: string; sub: string }[];
}) {
  return (
    <div className="relative aspect-square w-full max-w-md mx-auto">
      {layers.map((l, i) => {
        const size = 100 - i * 22;
        return (
          <div
            key={l.label}
            className="absolute inset-0 flex items-start justify-center rounded-full border border-accent/40 bg-accent/5"
            style={{
              width: `${size}%`,
              height: `${size}%`,
              left: `${(100 - size) / 2}%`,
              top: `${(100 - size) / 2}%`,
            }}
          >
            <div className="mt-4 text-center">
              <p className="font-display text-sm md:text-base">{l.label}</p>
              <p className="mt-0.5 max-w-[16ch] text-[10px] leading-tight text-muted-foreground md:text-xs">
                {l.sub}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Slider-driven curve visualizer for spacing/forgetting. */
export function CurveExplorer({
  label,
  values,
  onChange,
  points,
}: {
  label: string;
  values: number[];
  onChange: (v: number[]) => void;
  points: { day: number; retention: number }[];
}) {
  const max = Math.max(...points.map((p) => p.day));
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="mt-3 flex flex-wrap gap-3">
        {values.map((v, idx) => (
          <label key={idx} className="text-xs">
            <span className="mr-2 font-mono">Review {idx + 1}: day {v}</span>
            <input
              type="range"
              min={1}
              max={90}
              value={v}
              onChange={(e) => {
                const nv = [...values];
                nv[idx] = Number(e.target.value);
                onChange(nv);
              }}
              className="align-middle accent-accent"
              aria-label={`Review ${idx + 1} day`}
            />
          </label>
        ))}
      </div>
      <svg viewBox="0 0 300 120" className="mt-4 w-full" aria-label="Retention curve">
        <polyline
          points={points.map((p) => `${(p.day / max) * 300},${120 - p.retention * 1.1}`).join(" ")}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-accent"
        />
        {values.map((v, i) => (
          <line
            key={i}
            x1={(v / max) * 300}
            x2={(v / max) * 300}
            y1={0}
            y2={120}
            className="stroke-highlight"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
        ))}
      </svg>
    </div>
  );
}

export function TimelineBuilder({
  eras,
  items,
}: {
  eras: { id: string; label: string; range: string }[];
  items: { id: string; text: string; correct: string; year: string }[];
}) {
  const [placed, setPlaced] = useState<Record<string, string>>({});
  return (
    <div className="space-y-4">
      {items.map((it) => {
        const picked = placed[it.id];
        const right = picked === it.correct;
        return (
          <div key={it.id} className="rounded-lg border border-border/60 bg-background p-4">
            <p className="text-sm">
              <span className="font-mono text-[11px] text-muted-foreground">{it.year} · </span>
              {it.text}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {eras.map((e) => {
                const chosen = picked === e.id;
                return (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => setPlaced((p) => ({ ...p, [it.id]: e.id }))}
                    aria-pressed={chosen}
                    className={`rounded-md border px-2.5 py-1 text-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      chosen
                        ? right
                          ? "border-highlight bg-highlight/20"
                          : "border-destructive bg-destructive/10"
                        : "border-border/60 hover:border-accent/60"
                    }`}
                  >
                    {e.label} <span className="text-muted-foreground">({e.range})</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Password strength estimator (client-only heuristic, no network). */
export function PasswordMeter() {
  const [pw, setPw] = useState("");
  const score = useMemo(() => {
    let s = 0;
    if (pw.length >= 8) s += 1;
    if (pw.length >= 12) s += 1;
    if (pw.length >= 16) s += 1;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s += 1;
    if (/\d/.test(pw)) s += 1;
    if (/[^A-Za-z0-9]/.test(pw)) s += 1;
    if (/(.)\1\1/.test(pw)) s -= 1;
    return Math.max(0, Math.min(6, s));
  }, [pw]);
  const labels = ["Very weak", "Weak", "Fair", "Good", "Strong", "Very strong", "Exceptional"];
  const estCrack = useMemo(() => {
    if (pw.length === 0) return "—";
    const combos = Math.pow(80, Math.max(1, pw.length));
    const guessesPerSec = 1e11;
    const sec = combos / guessesPerSec;
    if (sec < 60) return "< 1 minute";
    if (sec < 3600) return `${Math.round(sec / 60)} minutes`;
    if (sec < 86400) return `${Math.round(sec / 3600)} hours`;
    if (sec < 86400 * 365) return `${Math.round(sec / 86400)} days`;
    if (sec < 86400 * 365 * 1e6) return `${Math.round(sec / 86400 / 365).toLocaleString()} years`;
    return "practically forever";
  }, [pw]);
  return (
    <div>
      <label className="text-xs text-muted-foreground" htmlFor="pw-demo">
        Try a passphrase (this stays in your browser)
      </label>
      <input
        id="pw-demo"
        type="text"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        className="mt-2 w-full rounded-md border border-border/60 bg-background px-3 py-2 font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        placeholder="e.g. correct-horse-battery-staple"
        autoComplete="off"
      />
      <div className="mt-3 flex gap-1" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i < score ? "bg-accent" : "bg-border"}`}
          />
        ))}
      </div>
      <p className="mt-2 text-xs">
        <span className="font-mono text-muted-foreground">Strength: </span>
        {labels[score] ?? "—"} <span className="text-muted-foreground">· est. crack time: {estCrack}</span>
      </p>
    </div>
  );
}
