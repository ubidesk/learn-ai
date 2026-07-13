import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, Breadcrumb } from "@/components/site-chrome";
import { milestones, computeStats } from "@curriculum/index";

export const Route = createFileRoute("/curriculum/")({
  head: () => ({
    meta: [
      { title: "Curriculum blueprint — Learn AI" },
      {
        name: "description",
        content:
          "The 10-milestone Learn AI curriculum blueprint: a beginner-to-professional path organized around real, shipped projects.",
      },
      { property: "og:title", content: "Curriculum blueprint — Learn AI" },
      {
        property: "og:description",
        content: "10 milestones from zero to a shipped AI product, in the open.",
      },
    ],
  }),
  component: CurriculumIndex,
});

function CurriculumIndex() {
  const stats = computeStats();
  return (
    <PageShell>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-20">
          <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Curriculum" }]} />
          <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground/40" />
            <span>Blueprint · not yet an authored course</span>
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight tracking-tight md:text-6xl">
            10 milestones from{" "}
            <span className="italic text-accent">zero</span> to shipping AI products.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            This is the approved blueprint for the new Learn AI curriculum. Every
            milestone lists its modules, lesson specifications, and the projects a
            learner will actually ship. Lesson bodies are not yet written; what
            you see below is the plan we intend to author against.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
            {[
              ["Milestones", stats.milestones],
              ["Modules", stats.modules],
              ["Lesson specs", stats.lessonSpecs],
              ["Projects", stats.projects],
            ].map(([label, value]) => (
              <div key={String(label)}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-1 font-display text-3xl">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">
            Estimated effort: {stats.totalEstimatedHoursMin}–{stats.totalEstimatedHoursMax}{" "}
            hours of guided study, plus roughly {stats.totalProjectHours} hours of
            project work.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="font-display text-2xl tracking-tight md:text-3xl">
            The 10 milestones
          </h2>
          <ol className="mt-8 divide-y divide-border/60 border-y border-border/60">
            {milestones.map((m) => {
              const flagship = m.projects.find((p) => p.id === m.flagshipProjectId);
              const lessonCount = m.modules.reduce((s, mod) => s + mod.lessons.length, 0);
              return (
                <li key={m.id} className="py-6">
                  <Link
                    to="/curriculum/$milestoneId"
                    params={{ milestoneId: m.id }}
                    className="group grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-baseline"
                  >
                    <div className="font-mono text-sm uppercase tracking-[0.2em] text-accent md:w-28">
                      M{String(m.number).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-display text-xl tracking-tight group-hover:text-accent md:text-2xl">
                        {m.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">
                        {m.description}
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {m.modules.length} modules · {lessonCount} lesson specs ·{" "}
                        {m.projects.length} projects · flagship:{" "}
                        <span className="text-foreground">{flagship?.title}</span>
                      </p>
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:text-right">
                      {m.estimatedHours.min}–{m.estimatedHours.max}h
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
