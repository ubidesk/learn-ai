import { useMemo, useState } from "react";

interface Task {
  id: string;
  name: string;
  cpu: number; // % of 100
  ram: number; // GB
  storage: number; // GB
  note: string;
}

const AVAILABLE_TASKS: Task[] = [
  { id: "browser", name: "Web browser (10 tabs)", cpu: 15, ram: 3, storage: 1, note: "Everyday web use." },
  { id: "editor", name: "Code editor", cpu: 5, ram: 1, storage: 1, note: "Where you write code." },
  { id: "video", name: "Video call", cpu: 25, ram: 2, storage: 0, note: "Camera + mic + encode." },
  { id: "music", name: "Music streaming", cpu: 3, ram: 0.5, storage: 0, note: "Background audio." },
  { id: "train", name: "Train a small ML model", cpu: 70, ram: 6, storage: 4, note: "CPU-heavy math." },
  { id: "game", name: "3D game", cpu: 60, ram: 8, storage: 30, note: "Graphics + physics." },
  { id: "photos", name: "Photo library (100 GB)", cpu: 2, ram: 0.5, storage: 100, note: "Sits on disk." },
];

const BUDGET = { cpu: 100, ram: 8, storage: 128 };

export function ResourceSimulator() {
  const [picked, setPicked] = useState<Set<string>>(new Set(["browser", "editor"]));

  const totals = useMemo(() => {
    return Array.from(picked).reduce(
      (acc, id) => {
        const t = AVAILABLE_TASKS.find((x) => x.id === id);
        if (!t) return acc;
        return {
          cpu: acc.cpu + t.cpu,
          ram: acc.ram + t.ram,
          storage: acc.storage + t.storage,
        };
      },
      { cpu: 0, ram: 0, storage: 0 },
    );
  }, [picked]);

  const toggle = (id: string) => {
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const verdict = (() => {
    if (totals.storage > BUDGET.storage) return "Out of storage — the OS can't even save these files.";
    if (totals.ram > BUDGET.ram) return "Out of RAM — the OS starts swapping to disk. Everything crawls.";
    if (totals.cpu > BUDGET.cpu) return "CPU maxed out — tasks fight for time. Fans loud, laptop hot.";
    if (totals.cpu > 80) return "Running hot but usable.";
    return "Plenty of headroom. Everything feels snappy.";
  })();

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
        Small experiment · resource simulator
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        A laptop with 100% CPU, 8 GB RAM, 128 GB storage.
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Toggle tasks on and off. Watch what fills up first — and notice how a
        program on disk (photos) costs almost no CPU, while a program
        running (video call) costs a lot.
      </p>

      <div className="mt-6 grid gap-2 md:grid-cols-2">
        {AVAILABLE_TASKS.map((t) => {
          const on = picked.has(t.id);
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => toggle(t.id)}
              aria-pressed={on}
              className={`rounded-md border px-3 py-2 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                on
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-foreground/60"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium">{t.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t.cpu}% · {t.ram}GB · {t.storage}GB
                </span>
              </div>
              <div className="mt-0.5 text-xs text-muted-foreground">{t.note}</div>
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <Meter label="CPU" value={totals.cpu} max={BUDGET.cpu} unit="%" />
        <Meter label="RAM" value={totals.ram} max={BUDGET.ram} unit=" GB" />
        <Meter label="Storage" value={totals.storage} max={BUDGET.storage} unit=" GB" />
      </div>

      <p className="mt-4 rounded-md border border-dashed border-border bg-background/40 p-3 text-sm" role="status">
        <strong className="font-semibold">Verdict: </strong>
        {verdict}
      </p>
    </div>
  );
}

function Meter({ label, value, max, unit }: { label: string; value: number; max: number; unit: string }) {
  const pct = Math.min(100, (value / max) * 100);
  const over = value > max;
  return (
    <div className="rounded-md border border-border bg-background/40 p-3">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
        <span className={`font-mono text-xs ${over ? "text-destructive" : ""}`}>
          {value}
          {unit} / {max}
          {unit}
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
        <div
          className={`h-full transition-all ${over ? "bg-destructive" : "bg-accent"}`}
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
          aria-label={label}
        />
      </div>
    </div>
  );
}
