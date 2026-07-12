import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Learn AI" },
      {
        name: "description",
        content:
          "Learn AI's mission, audience, educational philosophy, and open-source model. Built in public on GitHub.",
      },
      { property: "og:title", content: "About — Learn AI" },
      {
        property: "og:description",
        content:
          "Why Learn AI exists, who it's for, how we teach, and how we build it in the open.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          About
        </div>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          AI education shouldn't be locked behind{" "}
          <span className="italic text-accent">a paywall or a PhD.</span>
        </h1>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Most people have been told AI is either magic or math. Neither is
            true, and both stories keep smart, curious people out of the
            conversation. Learn AI exists to fix that.
          </p>

          <hr className="rule-line my-10 border-0" />

          <h2 className="font-display text-3xl tracking-tight">Our mission</h2>
          <p>
            Take a complete beginner — someone who has never written code —
            from zero to becoming a thoughtful, capable, professional AI
            engineer. In the open. For free. Forever.
          </p>

          <hr className="rule-line my-10 border-0" />

          <h2 className="font-display text-3xl tracking-tight">Who this is for</h2>
          <p>Learn AI is built for:</p>
          <ul className="space-y-3 text-base">
            <li>
              <strong className="font-semibold">The curious beginner.</strong>{" "}
              You've never written code, but you want to understand what's
              actually happening when AI does something impressive.
            </li>
            <li>
              <strong className="font-semibold">The self-taught learner.</strong>{" "}
              You've dabbled with prompts and tools, and you're ready to build
              a real foundation instead of collecting more tutorials.
            </li>
            <li>
              <strong className="font-semibold">The career-changer.</strong>{" "}
              You want to become an AI engineer for real — with the depth to
              be hired, the taste to build well, and a portfolio to prove it.
            </li>
          </ul>

          <hr className="rule-line my-10 border-0" />

          <h2 className="font-display text-3xl tracking-tight">
            How we teach
          </h2>
          <ul className="space-y-4 text-base">
            <li>
              <strong className="font-semibold">Motivation before terminology.</strong>{" "}
              Every idea starts with the question it answers. Vocabulary is
              earned, not front-loaded.
            </li>
            <li>
              <strong className="font-semibold">Intuition, then formalism.</strong>{" "}
              We build a mental model you can reason with — and only then
              introduce the math and the notation.
            </li>
            <li>
              <strong className="font-semibold">Understanding beats using.</strong>{" "}
              Anyone can paste a prompt or call an API. We want you to know
              why it works, when it won't, and what to do about it.
            </li>
            <li>
              <strong className="font-semibold">No shortcuts.</strong>{" "}
              AI is connected from day one, but we don't teach API calls
              before you can program. Foundations stay foundational.
            </li>
            <li>
              <strong className="font-semibold">Honest about limits.</strong>{" "}
              We won't oversell AI, or undersell it. Just tell you what it can
              and can't do today.
            </li>
          </ul>

          <hr className="rule-line my-10 border-0" />

          <h2 className="font-display text-3xl tracking-tight">Made in public</h2>
          <p>
            Learn AI is an open-source project. The source of truth lives on{" "}
            <a
              href="https://github.com/ubidesk/learn-ai"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent underline underline-offset-4 hover:text-foreground"
            >
              github.com/ubidesk/learn-ai
            </a>
            . Every lesson, every issue, every review is public. If you spot
            something wrong or want to teach a topic yourself, open a pull
            request — that's how this platform gets better, and how you become
            part of it.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link
            to="/start"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Start learning →
          </Link>
          <a
            href="https://github.com/ubidesk/learn-ai"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contribute on GitHub
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
