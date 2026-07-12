import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  LessonSection,
  LearningObjectives,
  KnowledgeCheck,
  LessonNav,
} from "@/components/learn-ui";
import { StudyPlanner } from "@/components/study-planner";

export const Route = createFileRoute("/lessons/orientation/how-to-learn")({
  head: () => ({
    meta: [
      { title: "How to Learn This Well — Learn AI" },
      {
        name: "description",
        content:
          "Productive struggle, retrieval practice, spaced review, building before confidence — the study habits that make Learn AI actually stick.",
      },
      { property: "og:title", content: "How to Learn This Well — Learn AI" },
      {
        property: "og:description",
        content:
          "The Learn, Visualize, Practice, Build, Reflect loop — and how to keep it sustainable.",
      },
    ],
  }),
  component: LessonHowToLearn,
});

const objectives = [
  "Explain why productive struggle is the point, not the problem.",
  "Use retrieval practice and spaced review to make knowledge stick.",
  "Build before you feel ready — and know why.",
  "Design a weekly rhythm you'll actually keep.",
];

const questions = [
  {
    q: "You've just finished a lesson. Which move will make it stick the best?",
    options: [
      "Re-read the same lesson tomorrow.",
      "Try to recall the key ideas from memory before checking, then explain them in your own words.",
      "Watch a summary video.",
      "Move on immediately to the next lesson.",
    ],
    answerIndex: 1,
    explain:
      "Retrieval practice — pulling knowledge <em>out</em> of memory instead of pushing more <em>in</em> — is one of the most reliably effective study techniques ever measured.",
  },
  {
    q: "You feel stuck. What does that usually mean on Learn AI?",
    options: [
      "You're not smart enough for this material.",
      "The lesson is broken.",
      "You're right at the edge of learning something real. Sit with it, then ask.",
      "You should skip ahead and come back later.",
    ],
    answerIndex: 2,
    explain:
      "That mildly uncomfortable, effortful feeling <em>is</em> the sensation of learning. It fades the moment you push through — and it's the strongest predictor that something will actually stick.",
  },
];

function LessonHowToLearn() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/curriculum" className="hover:text-foreground">
            Stage 01 · Orientation
          </Link>{" "}
          / Lesson 03
        </nav>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          How to learn this{" "}
          <span className="italic text-accent">well.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Almost everyone who starts a technical curriculum has the ability
          to finish it. Most don't — because of how they study, not what
          they study. This lesson fixes that first.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="rounded-full border border-border bg-card px-2 py-0.5">
            ~15 min read
          </span>
          <span>· No code · No math</span>
        </div>

        <div className="mt-10">
          <LearningObjectives items={objectives} />
        </div>

        <LessonSection eyebrow="Curiosity" title="Why do smart people bounce off tutorials?">
          <p>
            You've done this. You watched a great video, followed a great
            article, felt like you got it — and a week later couldn't
            reproduce a line of it. Not because you're bad at learning.
            Because passive reading feels like learning and isn't.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Why this matters" title="Method beats motivation.">
          <p>
            Motivation gets you to lesson three. Method gets you to lesson
            three hundred. The habits below are cheap to adopt and turn the
            rest of this curriculum from "content I consumed" into "things I
            can actually do."
          </p>
        </LessonSection>

        <LessonSection eyebrow="Intuition" title="Six habits that quietly do all the work.">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              [
                "Productive struggle",
                "Sit with the discomfort of not-yet-knowing for a minute longer than you want to. That minute is the learning.",
              ],
              [
                "Retrieval practice",
                "Close the tab. Try to explain what you just read from memory. Then check. Recall > re-reading, every time.",
              ],
              [
                "Spaced review",
                "Come back to a hard idea a day later, then a week later. Forgetting a little and pulling it back is the point.",
              ],
              [
                "Build before you feel ready",
                "You never feel ready. Build the small ugly version anyway — that's how the concept becomes yours.",
              ],
              [
                "Reflection",
                "Three sentences at the end of a session: what clicked, what didn't, what's next. It compounds absurdly.",
              ],
              [
                "Ask good questions",
                "Say what you tried, what you expected, and what happened. That single format unlocks better answers everywhere.",
              ],
            ].map(([t, b]) => (
              <div key={t} className="rounded-lg border border-border bg-card p-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {t}
                </div>
                <p className="mt-1 text-sm">{b}</p>
              </div>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          eyebrow="Visual explanation"
          title="The Learn, Visualize, Practice, Build, Reflect loop."
        >
          <p>
            Every Learn AI lesson runs through the same five moves, on
            purpose:
          </p>
          <ol className="ml-4 list-decimal space-y-2">
            <li>
              <strong>Learn.</strong> Read the honest, jargon-free explanation.
            </li>
            <li>
              <strong>Visualize.</strong> Play with the diagram or interactive
              until the idea moves in your head.
            </li>
            <li>
              <strong>Practice.</strong> Do the small exercise. Get it a bit
              wrong on purpose.
            </li>
            <li>
              <strong>Build.</strong> Extend what you just learned into
              something that runs.
            </li>
            <li>
              <strong>Reflect.</strong> Write three sentences. Close the loop.
            </li>
          </ol>
          <p>
            The order matters. Reading before building is scaffolding.
            Building before reflecting is scaffolding without cement.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Explanation" title="What to do when you're stuck.">
          <p>A short protocol worth memorizing:</p>
          <ol className="ml-4 list-decimal space-y-2">
            <li>
              Say out loud, in one sentence, what you expected to happen and
              what actually happened.
            </li>
            <li>
              Read the actual error or output. Not the vibes — the words.
            </li>
            <li>
              Try the smallest possible change. Isolate one thing at a time.
            </li>
            <li>
              After 20 minutes, ask. Include what you tried, what you
              expected, what happened. This is a superpower.
            </li>
          </ol>
          <p>
            Being stuck is not a bug in you. It's the exact conditions under
            which real learning happens.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Small experiment" title="Design a week you'll actually keep.">
          <p>
            The best schedule is the one you don't quit. Try different
            combinations below — most people who finish this curriculum look
            more like <em>4 days × 45 minutes</em> than <em>1 heroic
            weekend</em>.
          </p>
          <div className="not-prose">
            <StudyPlanner />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Reflection" title="Commit to something tiny.">
          <p>Open your notes and answer:</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              Which day of the week will you do lesson 4? At what time?
            </li>
            <li>
              What's your "when stuck" plan — do you have someone or somewhere
              you can ask?
            </li>
            <li>
              Which of the six habits is the one <em>you</em> most need to
              adopt?
            </li>
          </ul>
        </LessonSection>

        <LessonSection eyebrow="Modern AI connection" title="You have a study partner now.">
          <p>
            Modern AI assistants are astonishingly good at answering the
            "here's what I tried, here's what happened" questions. They're
            worse when you ask them to explain a topic cold — they'll
            confidently make things up. Use them the way you'd use a smart,
            slightly unreliable friend: to unstick, not to teach.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Knowledge check" title="Two quick questions.">
          <div className="not-prose">
            <KnowledgeCheck questions={questions} />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Next step" title="One last orientation lesson.">
          <p>
            You know what AI is, roughly where the field is, and how to
            learn it well. The final orientation lesson pulls the ten stages
            of this curriculum into a single map — so you know exactly where
            you're headed and why the order isn't negotiable.
          </p>
        </LessonSection>

        <LessonNav
          prev={{ to: "/lessons/orientation/landscape", label: "Lesson 2: The AI Landscape Today" }}
          next={{ to: "/lessons/orientation/path-ahead", label: "Lesson 4: The Path Ahead" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
