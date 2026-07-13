import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learn AI — Zero to professional AI engineer, in the open" },
      {
        name: "description",
        content:
          "An open-source path from complete beginner to professional AI engineering, being built in public. Free, honest, and made openly.",
      },
      { property: "og:title", content: "Learn AI — Zero to professional AI engineer" },
      {
        property: "og:description",
        content:
          "An open-source path from complete beginner to professional AI engineering, being built in public.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/40" />
            <span>Open-source · Curriculum in development</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
            From complete beginner to{" "}
            <span className="italic text-accent">professional AI engineer.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Learn AI is a free, open-source path from{" "}
            <em>"what even is a computer?"</em> to shipping production AI
            systems. No shortcuts around the fundamentals. No jargon walls.
            No paywall, ever.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Read the approach
            </Link>
            <a
              href="https://github.com/ubidesk/learn-ai"
              className="inline-flex items-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Follow along on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            The learner promise
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              ["Free forever.", "No paywalls, no gated tiers, no upsells. Ever."],
              ["Open source.", "Curriculum, code, and reasoning are public. Made in the open."],
              ["Honest.", "We name what is hard, what is optional, and what is hype."],
              ["Complete.", "From 'what is a computer' to production AI systems — no gaps assumed away."],
            ].map(([title, body]) => (
              <div key={title} className="border-l-2 border-accent/40 pl-5">
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HONEST STATE */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="rounded-2xl border border-border/60 bg-card p-8 md:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Where we are today
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
              New curriculum in development.
            </h2>
            <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
              We are rebuilding the curriculum from first principles against a
              new set of governing documents — a graduate profile, a knowledge
              architecture, and a project roadmap. Rather than publish lessons
              that will change under your feet, we are working in the open and
              will surface content here only once it is ready to stand behind.
            </p>
            <div className="mt-6">
              <a
                href="https://github.com/ubidesk/learn-ai"
                className="inline-flex items-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                See what we are working on
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
