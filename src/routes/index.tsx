import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learn AI — Rebuilding from the ground up" },
      {
        name: "description",
        content:
          "Learn AI is being rebuilt from the ground up as a comprehensive, open-source zero-to-hero AI curriculum.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Learn AI — Rebuilding from the ground up" },
      {
        property: "og:description",
        content:
          "The previous prototype has been retired. A new, curriculum-first Learn AI is in progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main
      id="main"
      className="flex min-h-screen items-center justify-center bg-background px-6 py-24 text-foreground"
    >
      <article className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Learn AI · v0.0 · Rebuild in progress
        </p>
        <h1 className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-6xl">
          Learn AI is being rebuilt from the ground up.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          The earlier prototype has been intentionally retired. The next version
          is a comprehensive, open-source zero-to-hero AI curriculum — designed
          for complete beginners and honest enough for professionals.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Follow the build in the open on{" "}
          <a
            className="underline decoration-accent underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            href="https://github.com/ubidesk/learn-ai"
          >
            GitHub
          </a>
          .
        </p>
      </article>
    </main>
  );
}
