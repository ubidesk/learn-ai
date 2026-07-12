import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { featuredProjects } from "@/lib/content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Learn AI" },
      {
        name: "description",
        content:
          "Guided AI projects from your first chatbot to a from-scratch transformer. Ship real, working things.",
      },
      { property: "og:title", content: "Projects — Learn AI" },
      {
        property: "og:description",
        content: "Guided projects that leave you with a repo, a demo, and a story.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-20">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Projects
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-tight md:text-6xl">
          Build the thing.{" "}
          <span className="italic text-accent">Then explain it.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Reading about attention is fine. Watching your own tiny model learn
          it is unforgettable. Every project is fully guided, fully open, and
          ends with something you can actually show someone.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <article
              key={p.slug}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-foreground hover:shadow-lg hover:shadow-foreground/5"
            >
              <div className="absolute right-6 top-6 font-display text-4xl font-semibold text-muted-foreground/30">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                <span className="rounded-full bg-highlight/30 px-2 py-0.5 text-highlight-foreground">
                  {p.level}
                </span>
                <span className="text-muted-foreground">· {p.time}</span>
              </div>
              <h2 className="mt-4 max-w-[85%] font-display text-2xl font-semibold tracking-tight">
                {p.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.blurb}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Coming soon · open-source
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-dashed border-border bg-secondary/40 p-8 text-center">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            Want to contribute a project?
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
            Learn AI is built in public. If you've written a great tutorial or
            want to add one, open a pull request — your name goes on it forever.
          </p>
          <a
            href="https://github.com/ubidesk/learn-ai"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Contribute on GitHub →
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
