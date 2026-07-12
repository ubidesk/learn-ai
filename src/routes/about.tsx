import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumb } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Learn AI" },
      {
        name: "description",
        content:
          "Learn AI is an open-source curriculum and platform built to take complete beginners to professional AI engineering, in public.",
      },
      { property: "og:title", content: "About Learn AI" },
      {
        property: "og:description",
        content: "Why Learn AI exists, how it is built, and how you can help.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <section>
        <div className="mx-auto max-w-3xl px-6 pt-12 pb-16 md:pt-16">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          <h1 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            An honest, open-source path into AI.
          </h1>
          <div className="prose prose-lg mt-8 max-w-none text-foreground/90">
            <p className="leading-relaxed text-muted-foreground">
              Learn AI exists because the resources a total beginner needs to
              become a professional AI engineer are scattered, uneven, and often
              gated. We think that path should be one thing: free, coherent,
              accountable, and made in public.
            </p>

            <h2 className="mt-10 font-display text-2xl tracking-tight text-foreground">
              What we believe
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground marker:text-accent">
              <li>Never assume prior programming, math, CS, or AI knowledge without teaching it first.</li>
              <li>Motivation and intuition come before terminology and notation.</li>
              <li>Every concept earns its keep with a concrete example and a learner-visible check for understanding.</li>
              <li>Nothing is introduced that will not be used again — no orphan topics.</li>
              <li>Accessibility, readability, and keyboard support are baseline, not polish.</li>
            </ul>

            <h2 className="mt-10 font-display text-2xl tracking-tight text-foreground">
              Where we are today
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The <strong>13-stage curriculum spine</strong> — every stage,
              module, and lesson title — is published and authoritative. We
              are writing full lesson bodies now, in the open, one stage at a
              time. Until a lesson lands, it shows a{" "}
              <span className="font-mono text-[11px] uppercase tracking-[0.15em]">Planned</span> status.
              We would rather show you an honest empty shelf than fake progress.
            </p>

            <h2 className="mt-10 font-display text-2xl tracking-tight text-foreground">
              How to help
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Everything is on{" "}
              <a className="underline decoration-accent underline-offset-4 hover:text-foreground" href="https://github.com/ubidesk/learn-ai">
                GitHub
              </a>
              . Read the schema docs, open an issue, or propose a lesson
              against the published spine.
            </p>
          </div>

          <div className="mt-10">
            <Link
              to="/curriculum"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Browse the curriculum
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
