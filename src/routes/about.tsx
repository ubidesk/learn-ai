import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Learn AI" },
      {
        name: "description",
        content:
          "Why Learn AI exists: a free, open-source path from AI-curious to AI-capable, built by the people who use it.",
      },
      { property: "og:title", content: "About — Learn AI" },
      {
        property: "og:description",
        content: "Our mission, values, and why AI education needs to be open.",
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

        <div className="prose prose-neutral mt-12 max-w-none space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            Most people have been told AI is either magic or math. Neither is
            true, and both stories keep smart, curious people out of the
            conversation. Learn AI exists to fix that.
          </p>
          <p>
            We're building the resource we wish had existed when we started —
            one that starts from real curiosity, respects your time, and gets
            you all the way from your first prompt to shipping systems people
            actually use.
          </p>

          <hr className="rule-line my-10 border-0" />

          <h2 className="font-display text-3xl tracking-tight">What we believe</h2>
          <ul className="space-y-4">
            <li>
              <strong className="font-semibold">Understanding beats using.</strong>{" "}
              Anyone can paste a prompt. We want you to know why it worked —
              and why the next one won't.
            </li>
            <li>
              <strong className="font-semibold">Free is a feature.</strong>{" "}
              Not a promo. Every lesson, project, and tool stays open forever.
            </li>
            <li>
              <strong className="font-semibold">Show your work.</strong>{" "}
              We write in the open, on GitHub, with every mistake preserved so
              you can learn from it.
            </li>
            <li>
              <strong className="font-semibold">Honest about limits.</strong>{" "}
              We won't oversell AI, or undersell it. Just tell you what it can
              and can't do — today.
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
              GitHub
            </a>
            . Every issue, every review, every fix is public. If you spot
            something wrong or want to teach a topic yourself, open a pull
            request — that's how this platform gets better.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          <Link
            to="/start"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Start learning →
          </Link>
          <a
            href="https://github.com/ubidesk/learn-ai"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-foreground"
          >
            Contribute on GitHub
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
