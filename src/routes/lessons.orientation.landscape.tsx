import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  LessonSection,
  LearningObjectives,
  KnowledgeCheck,
  LessonNav,
} from "@/components/learn-ui";
import { LandscapeSort } from "@/components/landscape-sort";

export const Route = createFileRoute("/lessons/orientation/landscape")({
  head: () => ({
    meta: [
      { title: "The AI Landscape Today — Learn AI" },
      {
        name: "description",
        content:
          "A jargon-free map of AI in 2026: rule-based software, machine learning, deep learning, generative AI, LLMs, applications, and AI engineering — and how they overlap.",
      },
      { property: "og:title", content: "The AI Landscape Today — Learn AI" },
      {
        property: "og:description",
        content:
          "Model vs. product vs. tool vs. agent — the vocabulary you need before anything else clicks.",
      },
    ],
  }),
  component: LessonLandscape,
});

const objectives = [
  "Name the major categories of AI without buzzwords.",
  "Explain the difference between a model, a product, a tool, and an agent.",
  "Recognize that these categories overlap — most real systems fit several.",
  "Place a new AI system you hear about roughly where it belongs.",
];

const questions = [
  {
    q: "Which best describes the relationship between deep learning and machine learning?",
    options: [
      "They're competing, unrelated approaches.",
      "Deep learning is a subset of machine learning that uses many-layered neural networks.",
      "Machine learning is a subset of deep learning.",
      "Deep learning replaced machine learning.",
    ],
    answerIndex: 1,
    explain:
      "Deep learning is one kind of ML — the kind that uses stacks of neural network layers. Plenty of ML doesn't use deep learning at all.",
  },
  {
    q: "You open ChatGPT in your browser. What is the LLM here?",
    options: [
      "ChatGPT — the whole chat interface.",
      "The trained model underneath (e.g. GPT-4), not the UI, memory, or safety layers wrapped around it.",
      "Your browser tab.",
      "The internet search it does behind the scenes.",
    ],
    answerIndex: 1,
    explain:
      "The LLM is the trained artifact. ChatGPT is a product built on top of it, with UI, tools, memory, and safety layers added.",
  },
];

function LessonLandscape() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/curriculum" className="hover:text-foreground">
            Stage 01 · Orientation
          </Link>{" "}
          / Lesson 02
        </nav>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          The AI landscape,{" "}
          <span className="italic text-accent">without the jargon.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          "AI" is a bucket word. Once you can name what's inside it, every
          article, product launch, and job title stops sounding like noise.
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

        <LessonSection eyebrow="Curiosity" title="Same word, different worlds.">
          <p>
            Someone says "we use AI." That could mean an if-statement on a
            spreadsheet, a spam filter, a model that recognizes cats,
            ChatGPT, an autonomous coding agent, or a $50M research
            department. All of those are technically "AI."
          </p>
          <p>
            So how do the people who work in the field actually cut it up?
          </p>
        </LessonSection>

        <LessonSection eyebrow="Why this matters" title="You need shared vocabulary.">
          <p>
            You can't reason about a system you can't name. Once you have
            these categories, you can read a headline and immediately know
            what part of the world it's talking about — and whether the
            claim is impressive, unremarkable, or nonsense.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Intuition" title="Nested circles, not neat boxes.">
          <p>
            The cleanest way to picture the field is as nested circles that
            overlap:
          </p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              <strong>Rule-based software</strong> — the outermost world.
              A human writes explicit rules.
            </li>
            <li>
              <strong>Machine learning</strong> — a smaller circle inside.
              Rules are learned from data instead of typed.
            </li>
            <li>
              <strong>Deep learning</strong> — a circle inside ML. The
              learning happens through stacks of neural network layers.
            </li>
            <li>
              <strong>Generative AI</strong> — models that don't just
              classify but <em>produce</em> new content: text, images, audio.
            </li>
            <li>
              <strong>Large language models (LLMs)</strong> — the specific
              generative deep-learning models trained on text at massive scale.
            </li>
          </ul>
          <p>
            Real systems live in <em>several</em> circles at once. ChatGPT is
            deep learning <em>and</em> generative <em>and</em> an LLM{" "}
            <em>and</em> an application. The boundaries help you talk; they
            don't cut reality cleanly.
          </p>
        </LessonSection>

        <LessonSection
          eyebrow="Visual explanation"
          title="Model vs. product vs. tool vs. agent."
        >
          <p>
            The other axis worth learning cold: what <em>kind of thing</em>{" "}
            you're looking at.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {[
              [
                "Model",
                "The trained artifact — a big file of numbers plus an architecture. E.g. GPT-4, Llama, Stable Diffusion.",
              ],
              [
                "Product / application",
                "A user-facing thing built around one or more models. E.g. ChatGPT, Midjourney, GitHub Copilot.",
              ],
              [
                "Tool",
                "Something a model can call — a search API, a calculator, a database. Extends what a model can do.",
              ],
              [
                "Agent",
                "A model wired to tools and given a goal, taking multiple steps on its own to reach it.",
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
          <p>
            "AI engineering" is the craft of assembling these pieces — model,
            tools, product, evaluation — into something reliable. That's the
            job you're training for.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Explanation" title="One more knot to untie: AI vs. ML vs. LLMs.">
          <p>
            In casual conversation people use "AI" and "ML" and "LLM"
            interchangeably. In practice:
          </p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              <strong>AI</strong> is the whole field — any system that seems
              intelligent. The word is old and vague on purpose.
            </li>
            <li>
              <strong>ML</strong> is the technical approach that made the last
              decade of AI possible — learn from data instead of hard-coding.
            </li>
            <li>
              <strong>LLMs</strong> are one particularly loud family within
              ML. Extraordinary at text; not the whole field.
            </li>
          </ul>
        </LessonSection>

        <LessonSection eyebrow="Small experiment" title="Sort the landscape yourself.">
          <p>
            Test the vocabulary. Which category best fits each example? Some
            have more than one defensible answer — that's the whole point.
          </p>
          <div className="not-prose">
            <LandscapeSort />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Reflection" title="Now try it in your own words.">
          <p>Open your notes and answer two questions:</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              Pick one AI product you use often. Which categories does it sit
              in — and what's the underlying model, roughly?
            </li>
            <li>
              What's one place you used to say "AI" where you can now say
              something more precise?
            </li>
          </ul>
        </LessonSection>

        <LessonSection eyebrow="Modern AI connection" title="Where the industry actually sits.">
          <p>
            Most of the AI you'll hear about in 2026 is: <em>generative deep
            learning models</em> (often LLMs), packaged into <em>products</em>{" "}
            that call <em>tools</em>, sometimes chained into <em>agents</em>,
            all glued together by <em>AI engineers</em>. Every headline is a
            remix of that sentence.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Knowledge check" title="Two quick questions.">
          <div className="not-prose">
            <KnowledgeCheck questions={questions} />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Next step" title="You've got the map. Now: how to travel it.">
          <p>
            Vocabulary won't teach you anything by itself. The next lesson is
            about <em>how</em> to learn this material so it actually sticks —
            the study habits that separate the people who finish this
            curriculum from the people who bounce off it.
          </p>
        </LessonSection>

        <LessonNav
          prev={{ to: "/lessons/orientation/what-is-ai", label: "Lesson 1: What Is AI, Really?" }}
          next={{ to: "/lessons/orientation/how-to-learn", label: "Lesson 3: How to Learn This Well" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
