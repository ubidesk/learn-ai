import { useMemo, useState } from "react";

const dayOptions = [2, 3, 4, 5, 6] as const;
const minuteOptions = [20, 30, 45, 60, 90] as const;
const pillarSequence = [
  { key: "learn", label: "Learn", body: "Read the lesson. No notes yet — just absorb." },
  { key: "visualize", label: "Visualize", body: "Study the diagram or interactive. Play with it." },
  { key: "practice", label: "Practice", body: "Do the small exercise. Struggle a little on purpose." },
  { key: "build", label: "Build", body: "Extend the example or ship the stage project piece." },
  { key: "reflect", label: "Reflect", body: "Write 3 sentences: what clicked, what didn't, what next." },
] as const;

export function StudyPlanner() {
  const [days, setDays] = useState<number>(4);
  const [minutes, setMinutes] = useState<number>(45);

  const weeklyMinutes = days * minutes;
  const perWeek = useMemo(() => {
    // Assign pillars across days in order.
    const week: { day: number; pillar: (typeof pillarSequence)[number] }[] = [];
    for (let i = 0; i < days; i++) {
      week.push({ day: i + 1, pillar: pillarSequence[i % pillarSequence.length] });
    }
    return week;
  }, [days]);

  const paceLabel =
    weeklyMinutes < 120
      ? "Gentle · steady progress"
      : weeklyMinutes < 240
        ? "Comfortable · what we recommend for most beginners"
        : weeklyMinutes < 420
          ? "Ambitious · you'll move quickly"
          : "Intensive · protect your sleep";

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
        Small experiment · plan a realistic week
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        Design your study loop.
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        A learning schedule you'll actually keep beats a heroic one you'll
        abandon by day four. Try a few combinations and see what a week looks
        like.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <fieldset>
          <legend className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Days per week
          </legend>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {dayOptions.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDays(d)}
                aria-pressed={days === d}
                className={`rounded-md border px-3 py-1.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  days === d
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border hover:border-foreground/60"
                }`}
              >
                {d} days
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Minutes per session
          </legend>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {minuteOptions.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMinutes(m)}
                aria-pressed={minutes === m}
                className={`rounded-md border px-3 py-1.5 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  minutes === m
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border hover:border-foreground/60"
                }`}
              >
                {m} min
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 rounded-lg border border-dashed border-border bg-background/40 p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Weekly commitment
            </div>
            <div className="mt-1 font-display text-2xl font-semibold">
              {weeklyMinutes} min · about{" "}
              {Math.round((weeklyMinutes / 60) * 10) / 10} hrs
            </div>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
            {paceLabel}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          A sample week
        </div>
        <ol className="mt-3 grid gap-2 sm:grid-cols-2">
          {perWeek.map(({ day, pillar }) => (
            <li
              key={day}
              className="rounded-md border border-border bg-background/40 px-3 py-2 text-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">Day {day}</span>
                <span className="rounded-full bg-highlight/30 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-highlight-foreground">
                  {pillar.label}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{pillar.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-muted-foreground">
          Notice the cycle. Every week you Learn, Visualize, Practice, Build,
          and Reflect — because reading alone doesn't stick, and building
          without reflecting doesn't compound.
        </p>
      </div>
    </div>
  );
}
