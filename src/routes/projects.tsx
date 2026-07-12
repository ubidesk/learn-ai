import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { StatusBadge } from "@/components/learn-ui";
import { stages } from "@/lib/content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Learn AI" },
      {
        name: "description",
        content:
          "Ten portfolio milestones — one per stage. From your first dev environment to a production RAG system and a public capstone.",
      },
      { property: "og:title", content: "Projects — Learn AI" },
      {
        property: "og:description",
        content:
          "Portfolio milestones tied to every stage. Real artifacts you can point to for years.",
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
          Portfolio milestones
        </div>
        <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-tight md:text-6xl">
          Build the thing.{" "}
          <span className="italic text-accent">Then explain it.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Projects on Learn AI aren't a gallery — they're milestones. Each
          stage ends with a real, working artifact that becomes part of your
          public portfolio. By stage ten, you'll have a body of work you can
          point to for years.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {stages.map((s) => (
            <article
              key={s.id}
              className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-foreground/60 hover:shadow-md hover:shadow-foreground/5"
              aria-labelledby={`project-${s.id}-title`}
            >
              <div className="absolute right-6 top-6 font-display text-5xl font-semibold text-muted-foreground/25">
                {String(s.number).padStart(2, "0")}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Stage {s.number} · {s.title.split(":")[0]}
              </div>
              <h2
                id={`project-${s.id}-title`}
                className="mt-3 max-w-[85%] font-display text-2xl font-semibold tracking-tight"
              >
                {s.project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.project.blurb}
              </p>
              <div className="mt-6 border-t border-border/60 pt-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  You walk away with
                </div>
                <p className="mt-1 text-sm">{s.project.artifact}</p>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <StatusBadge status={s.status} />
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.level}
                </span>
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
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/ubidesk/learn-ai"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contribute on GitHub →
            </a>
            <Link
              to="/curriculum"
              className="rounded-md border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              See the curriculum
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
