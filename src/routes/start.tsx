import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "Start here — Learn AI" },
      {
        name: "description",
        content:
          "Your first day on Learn AI. Three tiny steps to go from AI-curious to actually building.",
      },
      { property: "og:title", content: "Start here — Learn AI" },
      {
        property: "og:description",
        content: "Three steps. About an hour. You'll be genuinely underway.",
      },
    ],
  }),
  component: StartPage,
});

const steps = [
  {
    n: "01",
    time: "5 min",
    title: "Pick your starting line.",
    body: "Complete beginner? Start at Foundations. Already comfortable with prompts? Skip to Working with Models. You can always come back.",
  },
  {
    n: "02",
    time: "20 min",
    title: "Read your first lesson.",
    body: "One short chapter: what AI actually is (and isn't). No code, no math — just a clearer mental model than most people have.",
  },
  {
    n: "03",
    time: "30 min",
    title: "Build the smallest possible thing.",
    body: "A one-file chatbot. You'll see every moving part and understand every line. That understanding compounds fast.",
  },
] as const;

function StartPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-6 py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Start here · about an hour
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          Three tiny steps.{" "}
          <span className="italic text-accent">You'll be genuinely underway.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          You don't need a plan. You need a first move. Here it is.
        </p>

        <ol className="mt-14 space-y-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="group grid gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground md:grid-cols-[6rem_1fr_auto] md:items-start md:gap-8"
            >
              <div className="font-display text-5xl font-semibold text-accent/70">
                {s.n}
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:text-right">
                {s.time}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 rounded-xl border border-border bg-secondary/40 p-8">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            A gentle warning.
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            You will feel stuck. That's not a bug — it's the exact feeling of
            learning. Sit with it for a minute longer than is comfortable, then
            ask for help. The community is on GitHub.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Link
            to="/curriculum"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Open the curriculum →
          </Link>
          <a
            href="https://github.com/ubidesk/learn-ai"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-foreground"
          >
            Join us on GitHub
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
