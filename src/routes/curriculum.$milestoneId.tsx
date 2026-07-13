import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, Breadcrumb } from "@/components/site-chrome";
import { getMilestone, milestones } from "@curriculum/index";
import type { Milestone } from "@curriculum/schema";

export const Route = createFileRoute("/curriculum/$milestoneId")({
  loader: ({ params }): { milestone: Milestone } => {
    const m = getMilestone(params.milestoneId);
    if (!m) throw notFound();
    return { milestone: m };
  },
  head: ({ loaderData }) => {
    const m = (loaderData as { milestone: Milestone } | undefined)?.milestone;
    if (!m) {
      return {
        meta: [
          { title: "Milestone not found — Learn AI" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${m.title} — Learn AI curriculum`;
    return {
      meta: [
        { title },
        { name: "description", content: m.description },
        { property: "og:title", content: title },
        { property: "og:description", content: m.description },
      ],
    };
  },
  component: MilestonePage,
  notFoundComponent: MilestoneNotFound,
});

function MilestoneNotFound() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="font-display text-3xl">Milestone not found</h1>
        <p className="mt-4 text-muted-foreground">
          The curriculum blueprint has 10 milestones. Head back to the{" "}
          <Link to="/curriculum" className="text-accent underline">
            curriculum overview
          </Link>
          .
        </p>
      </div>
    </PageShell>
  );
}

function MilestonePage() {
  const { milestone: m } = Route.useLoaderData() as { milestone: Milestone };
  const flagship = m.projects.find((p) => p.id === m.flagshipProjectId);
  const idx = milestones.findIndex((x) => x.id === m.id);
  const prev = idx > 0 ? milestones[idx - 1] : undefined;
  const next = idx < milestones.length - 1 ? milestones[idx + 1] : undefined;

  return (
    <PageShell>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 pt-14 pb-10">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Curriculum", to: "/curriculum" },
              { label: m.shortTitle },
            ]}
          />
          <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/40" />
            <span>
              Milestone {m.number} of 10 · Blueprint · Lesson bodies not yet authored
            </span>
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight md:text-5xl">
            {m.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            {m.description}
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Entry state
              </h2>
              <p className="mt-2 leading-relaxed">{m.entryState}</p>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Exit capability
              </h2>
              <p className="mt-2 leading-relaxed">{m.exitCapability}</p>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Gate to next milestone
              </h2>
              <p className="mt-2 leading-relaxed">{m.gate}</p>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Honest effort estimate
              </h2>
              <p className="mt-2 leading-relaxed">
                {m.estimatedHours.min}–{m.estimatedHours.max} guided hours (plus project time)
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Competencies advanced
              </h2>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {m.competencyIds.join(" · ")}
              </p>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Knowledge domains
              </h2>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {m.knowledgeDomains.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-display text-2xl tracking-tight md:text-3xl">Projects in build order</h2>
          <ol className="mt-6 divide-y divide-border/60 border-y border-border/60">
            {m.projects.map((p) => (
              <li key={p.id} className="flex flex-wrap items-baseline gap-3 py-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {p.id}
                </span>
                <span className="flex-1 min-w-[240px]">{p.title}</span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {p.size} · {p.hours}h {p.flagship ? "· flagship" : ""}
                </span>
              </li>
            ))}
          </ol>
          {flagship && (
            <p className="mt-6 text-sm text-muted-foreground">
              Flagship deliverable: <span className="text-foreground">{flagship.title}</span>
            </p>
          )}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="font-display text-2xl tracking-tight md:text-3xl">Modules & lesson specifications</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Each lesson below is a specification (planned, not yet authored) that captures the one big idea, the practice, the build step, and the modern-AI connection.
          </p>
          <div className="mt-8 space-y-10">
            {m.modules.map((mod) => (
              <article key={mod.id} className="border-l-2 border-accent/40 pl-6">
                <header>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Module {mod.order} · {mod.id}
                  </p>
                  <h3 className="mt-1 font-display text-xl tracking-tight md:text-2xl">
                    {mod.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{mod.purpose}</p>
                </header>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Outcomes</h4>
                    <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed">
                      {mod.outcomes.map((o, i) => <li key={i}>{o}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Deliverable</h4>
                    <p className="mt-2 text-sm leading-relaxed">{mod.deliverable}</p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Advances project <span className="font-mono">{mod.advancesProject}</span>
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {mod.lessons.map((l) => (
                    <li key={l.id} className="rounded-md border border-border/60 bg-card p-4">
                      <div className="flex flex-wrap items-baseline gap-3">
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                          {l.id}
                        </span>
                        <span className="font-display text-lg tracking-tight">{l.title}</span>
                        <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          ~{l.estimatedMinutes} min · {l.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Big idea:</span> {l.bigIdea}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Practice:</span> {l.practice}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Build step:</span> {l.buildStep}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">AI connection:</span> {l.aiConnection}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <nav
        aria-label="Milestone navigation"
        className="border-t border-border/60"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm">
          {prev ? (
            <Link
              to="/curriculum/$milestoneId"
              params={{ milestoneId: prev.id }}
              className="text-muted-foreground hover:text-foreground"
            >
              ← M{prev.number}. {prev.shortTitle}
            </Link>
          ) : (
            <span />
          )}
          <Link to="/curriculum" className="text-muted-foreground hover:text-foreground">
            All milestones
          </Link>
          {next ? (
            <Link
              to="/curriculum/$milestoneId"
              params={{ milestoneId: next.id }}
              className="text-muted-foreground hover:text-foreground"
            >
              M{next.number}. {next.shortTitle} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </PageShell>
  );
}
