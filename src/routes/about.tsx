import { createFileRoute } from "@tanstack/react-router";
import { PageShell, Breadcrumb } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Learn AI" },
      {
        name: "description",
        content:
          "Learn AI is an open-source path built to take complete beginners to professional AI engineering, in public.",
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
              A new curriculum is in development. We are rebuilding against a
              fresh set of governing documents — a graduate profile, a knowledge
              architecture, and a project roadmap — and we would rather show
              you an honest empty shelf than fake progress. Lessons will appear
              here only once they are ready to stand behind.
            </p>

            <h2 className="mt-10 font-display text-2xl tracking-tight text-foreground">
              How to help
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Everything is on{" "}
              <a
                className="underline decoration-accent underline-offset-4 hover:text-foreground"
                href="https://github.com/ubidesk/learn-ai"
              >
                GitHub
              </a>
              . Read the governance docs, open an issue, or follow along as
              the curriculum takes shape.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
