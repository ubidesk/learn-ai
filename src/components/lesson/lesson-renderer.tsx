import type { LessonBody } from "@curriculum/lessons/schema";
import { Interactive } from "./interactives";
import { KnowledgeCheckCard } from "./knowledge-check";

/**
 * Renders a full lesson body following the Learn AI rhythm:
 * Curiosity → Why This Matters → Intuition → Visual → Explanation →
 * Experiment → Reflection → Modern AI Connection → Knowledge Check → Next Step.
 */
export function LessonRenderer({ body }: { body: LessonBody }) {
  return (
    <div className="space-y-14">
      <Section eyebrow="Curiosity" title="A question to sit with">
        <p className="text-lg leading-relaxed text-foreground/90">{body.curiosity}</p>
      </Section>

      <Section eyebrow="Why this matters" title="Why give this your attention">
        <p className="leading-relaxed text-muted-foreground">{body.whyThisMatters}</p>
      </Section>

      <Section eyebrow="Intuition" title="Everyday analogies">
        <ul className="space-y-3">
          {body.intuition.map((p, i) => (
            <li key={i} className="border-l-2 border-accent/40 pl-4 leading-relaxed text-muted-foreground">
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Visual explanation" title={body.visual.caption}>
        <Interactive component={body.visual.component} />
      </Section>

      <Section eyebrow="Explanation" title="How it actually works">
        <div className="space-y-4">
          {body.explanation.map((p, i) => (
            <p key={i} className="leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>
      </Section>

      <Section eyebrow="Small experiment" title={body.experiment.caption}>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {body.experiment.instructions}
        </p>
        <Interactive component={body.experiment.component} />
      </Section>

      <Section eyebrow="Reflection" title="Write briefly for yourself">
        <ol className="space-y-3">
          {body.reflection.map((p, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-muted-foreground">
              <span aria-hidden="true" className="font-mono text-xs text-accent">
                {i + 1}.
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Modern AI connection" title="Where this shows up today">
        <p className="rounded-xl border border-accent/40 bg-accent/5 p-5 leading-relaxed">
          {body.modernAiConnection}
        </p>
      </Section>

      <KnowledgeCheckCard check={body.knowledgeCheck} />

      {body.nextStepHint && (
        <Section eyebrow="Next step" title="What comes next">
          <p className="leading-relaxed text-muted-foreground">{body.nextStepHint}</p>
        </Section>
      )}
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={`s-${eyebrow.replace(/\s+/g, "-").toLowerCase()}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2
        id={`s-${eyebrow.replace(/\s+/g, "-").toLowerCase()}`}
        className="mt-2 font-display text-2xl tracking-tight md:text-3xl"
      >
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
