import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  LessonSection,
  LearningObjectives,
  KnowledgeCheck,
  LessonNav,
} from "@/components/learn-ui";
import { RoadmapExplorer } from "@/components/roadmap-explorer";

export const Route = createFileRoute("/lessons/orientation/path-ahead")({
  head: () => ({
    meta: [
      { title: "The Path Ahead — Learn AI" },
      {
        name: "description",
        content:
          "The ten stages of Learn AI, why the order matters, why we don't skip programming or math, and how to start your Learning Map.",
      },
      { property: "og:title", content: "The Path Ahead — Learn AI" },
      {
        property: "og:description",
        content:
          "Ten stages, one honest path. From guided learner to independent AI engineer.",
      },
    ],
  }),
  component: LessonPathAhead,
});

const objectives = [
  "Name the ten stages and their rough order.",
  "Explain why programming and math come before ML — not around it.",
  "Recognize the shift from guided learner to independent builder.",
  "Write the first draft of your personal Learning Map.",
];

const questions = [
  {
    q: "Why don't we jump straight from Orientation to using LLM APIs?",
    options: [
      "It's too advanced to ever learn.",
      "Because without the foundations, you can copy code but can't reason about it, debug it, or know when it's wrong.",
      "Because APIs cost money.",
      "Because LLMs are a fad.",
    ],
    answerIndex: 1,
    explain:
      "You <em>can</em> call an API on day one. The problem is you won't be able to fix it, extend it, or evaluate it. Foundations are what turn code you copied into code you own.",
  },
  {
    q: "What changes between the early stages and the later ones?",
    options: [
      "The material gets easier over time.",
      "You move from guided lessons and small exercises to designing your own projects and specialization.",
      "You stop coding.",
      "You only read papers.",
    ],
    answerIndex: 1,
    explain:
      "The arc is guided → independent. Early stages hold your hand tightly on purpose. Later ones hand you problems and expect you to design solutions.",
  },
];

const learningMapTemplate = `# My Learn AI Learning Map

## Where I'm starting from
- My background:
- What I've tried with AI already:
- What I'm most curious about:

## Why I'm doing this
- The thing I want to be able to build, make, or explain:
- Who this would help (including me):

## My rhythm
- Days per week:
- Minutes per session:
- The day and time I'll do lesson 4:

## My when-stuck plan
- Where I'll ask questions:
- The person or community I'll lean on:

## My checkpoints
- After Stage 2 (Computers), I want to be able to:
- After Stage 4 (Python), I want to be able to:
- After Stage 9 (AI Engineering), I want to be able to:

## My north-star project
- If everything goes well, at the end of this curriculum I'll have shipped:
`;

function LessonPathAhead() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(learningMapTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  const downloadUrl =
    "data:text/markdown;charset=utf-8," + encodeURIComponent(learningMapTemplate);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/curriculum" className="hover:text-foreground">
            Stage 01 · Orientation
          </Link>{" "}
          / Lesson 04
        </nav>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          The path{" "}
          <span className="italic text-accent">ahead.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Ten stages. One honest arc. Here's the whole shape of what you're
          about to walk through — and why we refuse to skip the middle.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="rounded-full border border-border bg-card px-2 py-0.5">
            ~15 min read · includes your first project
          </span>
        </div>

        <div className="mt-10">
          <LearningObjectives items={objectives} />
        </div>

        <LessonSection eyebrow="Curiosity" title="A tempting shortcut, and why it fails.">
          <p>
            Every learner meets the same fork. Path A: skip to the shiny
            parts — call an LLM API, glue a demo together, ship it. Path B:
            slow down and build the foundations first.
          </p>
          <p>
            Path A feels faster for two weeks and then quietly caps your
            growth for years. Path B feels slower for two weeks and then
            compounds forever. Learn AI is Path B, unapologetically.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Why this matters" title="Depth is not optional in this field.">
          <p>
            The market is full of people who can prompt. The scarce, valuable,
            durable skill is being able to <em>reason</em> about AI systems —
            what they'll do, why they fail, and how to fix them. That takes
            programming and math. Not a lot. But not zero.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Intuition" title="Each stage stands on the last.">
          <p>
            The order isn't arbitrary — later stages literally depend on
            earlier ones:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>You can't program a computer you don't understand.</li>
            <li>You can't do ML without programming.</li>
            <li>You can't do deep learning without understanding data and math.</li>
            <li>You can't be an AI engineer without any of the above.</li>
          </ul>
          <p>
            Skip a link and the chain doesn't hold. Follow it, and by the
            time you get to Stage 9 the "hard" parts feel like the next
            obvious step.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Visual explanation" title="The whole roadmap in one place.">
          <p>
            Click any stage to see what stands on what.
          </p>
          <div className="not-prose">
            <RoadmapExplorer />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Explanation" title="Guided learner → independent builder.">
          <p>
            Watch what changes across the stages:
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Stages 1–5 · Guided
              </div>
              <p className="mt-1 text-sm">
                Small, tightly-scoped lessons. Every exercise has a "right"
                answer. You're building foundations, not opinions.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Stages 6–8 · Semi-guided
              </div>
              <p className="mt-1 text-sm">
                You choose datasets, models, and framings. There's a right
                answer <em>shape</em>, not a right answer.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Stages 9–10 · Independent
              </div>
              <p className="mt-1 text-sm">
                You design and defend real systems. We're a coach, not a
                textbook.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Capabilities that compound
              </div>
              <p className="mt-1 text-sm">
                Terminal → programming → data → ML → networks → LLMs →
                engineering. Nothing is wasted. Everything gets reused.
              </p>
            </div>
          </div>
        </LessonSection>

        <LessonSection eyebrow="Small experiment" title="Start your Learning Map.">
          <p>
            Your Stage 1 project is a one-page personal Learning Map. It's
            small on purpose — the goal is to write down, in your own words,
            what you want out of this and how you'll travel.
          </p>
          <p>
            Copy the template below (or download it as a markdown file),
            drop it in a plain text file or a fresh GitHub repo, and spend
            about twenty minutes filling it in. You'll come back and edit it
            more than you think.
          </p>
          <div className="not-prose rounded-xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Stage 1 project · Learning Map template
                </div>
                <h3 className="mt-1 font-display text-lg font-semibold">
                  learning-map.md
                </h3>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={copy}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium hover:border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
                <a
                  href={downloadUrl}
                  download="learning-map.md"
                  className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Download .md
                </a>
              </div>
            </div>
            <pre className="mt-4 max-h-96 overflow-auto rounded-md border border-border bg-background p-4 font-mono text-xs leading-relaxed">
              {learningMapTemplate}
            </pre>
          </div>
        </LessonSection>

        <LessonSection eyebrow="Reflection" title="Read it back to yourself.">
          <p>
            Once you've filled the map in, close it. Come back an hour
            later. Read it as if it were written by a friend. Ask yourself:
          </p>
          <ul className="ml-4 list-disc space-y-2">
            <li>Do the checkpoints actually correspond to my north-star project?</li>
            <li>Is my weekly rhythm honest — or aspirational?</li>
            <li>What's one thing I'd change now that a little time has passed?</li>
          </ul>
        </LessonSection>

        <LessonSection eyebrow="Modern AI connection" title="You're joining a small, growing group.">
          <p>
            Most people using AI today are consumers of it. The people
            walking the road you're on — building real understanding, one
            stage at a time — are the ones who'll design the next decade of
            AI systems. Not because they were special. Because they didn't
            skip the middle.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Knowledge check" title="Two quick questions.">
          <div className="not-prose">
            <KnowledgeCheck questions={questions} />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Next step" title="Stage 2: Understanding Computers.">
          <p>
            You now have the map, the vocabulary, the study habits, and your
            first project underway. Next, we open the machine itself — files,
            terminal, and how the internet actually moves bytes. The
            invisible ground everything else stands on.
          </p>
          <p className="text-sm text-muted-foreground">
            Stage 2 is available now. Later stages are in development — the
            curriculum page is the source of truth for what's live.
          </p>
        </LessonSection>

        <LessonNav
          prev={{ to: "/lessons/orientation/how-to-learn", label: "Lesson 3: How to Learn This Well" }}
          next={{ to: "/lessons/computers/hardware-software", label: "Stage 2 · Lesson 1: Hardware, Software, and the OS" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
