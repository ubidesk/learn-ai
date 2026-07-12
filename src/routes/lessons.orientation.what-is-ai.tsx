import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  LessonSection,
  LearningObjectives,
  KnowledgeCheck,
  LessonNav,
} from "@/components/learn-ui";
import { ClassificationExperiment } from "@/components/classification-experiment";

export const Route = createFileRoute("/lessons/orientation/what-is-ai")({
  head: () => ({
    meta: [
      { title: "What Is AI, Really? — Learn AI" },
      {
        name: "description",
        content:
          "Your first lesson on Learn AI. A plain-language, honest introduction to what artificial intelligence actually is — and what it isn't.",
      },
      { property: "og:title", content: "What Is AI, Really? — Learn AI" },
      {
        property: "og:description",
        content:
          "Cut through the hype. Build a mental model of AI you can actually reason with — no jargon, no math, no shortcuts.",
      },
    ],
  }),
  component: LessonWhatIsAI,
});

const objectives = [
  "Describe AI in plain language, without buzzwords.",
  "Tell the difference between a program and a learned model.",
  "Explain what \"learning from examples\" actually means.",
  "Recognize what today's AI can — and can't — do.",
];

const questions = [
  {
    q: "Which sentence best describes what modern AI systems do?",
    options: [
      "They follow a fixed list of rules written by a programmer.",
      "They learn patterns from lots of examples and use those patterns to make predictions.",
      "They think and feel the way humans do.",
      "They search the internet in real time for every answer.",
    ],
    answerIndex: 1,
    explain:
      "Modern AI systems are learned from examples. That's the whole trick — they extract patterns from data and apply those patterns to new inputs. No feelings, no fixed rules, no live search required.",
  },
  {
    q: "In our tiny experiment, what did the \"model\" actually use to make its prediction?",
    options: [
      "A hard-coded rule about cats and dogs.",
      "Your labeled examples — it compared the mystery animal to what it had seen.",
      "A search on the internet.",
      "Random guessing.",
    ],
    answerIndex: 1,
    explain:
      "It compared the mystery animal to the average of your labeled examples for each class. That's the essence of \"learning from data\": the examples are the model.",
  },
];

function LessonWhatIsAI() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        {/* Header */}
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/curriculum" className="hover:text-foreground">
            Stage 01 · Orientation
          </Link>{" "}
          / Lesson 01
        </nav>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          What Is AI, <span className="italic text-accent">Really?</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Before we go anywhere, we need one honest, jargon-free answer to the
          question everyone asks and almost nobody answers well.
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

        {/* Curiosity */}
        <LessonSection eyebrow="Curiosity" title="A story you've probably lived.">
          <p>
            You asked a chatbot to write an email, and it did — instantly, in a
            tone you didn't even know you wanted. It felt uncanny. Almost
            like it understood you.
          </p>
          <p>
            But then you asked it to count the letter "r" in "strawberry," and
            it confidently got it wrong. The same system. The same minute.
          </p>
          <p>
            What's going on? What is this thing, really?
          </p>
        </LessonSection>

        {/* Why this matters */}
        <LessonSection eyebrow="Why this matters" title="You can't use what you don't understand.">
          <p>
            The people who get the most out of AI aren't the ones with the
            fanciest prompts. They're the ones with an accurate mental model
            of what the system is doing. Everything downstream — better
            prompts, better products, better judgment about when to trust it —
            comes from that.
          </p>
        </LessonSection>

        {/* Intuition */}
        <LessonSection eyebrow="Intuition" title="AI is pattern-finding, at scale.">
          <p>
            Here's the whole idea in one sentence:
          </p>
          <blockquote className="my-4 border-l-2 border-accent bg-secondary/40 px-5 py-4 font-display text-xl italic">
            Modern AI systems find patterns in huge collections of examples,
            and use those patterns to make predictions about new inputs.
          </blockquote>
          <p>
            That's it. Not thinking. Not feeling. Not searching. Just{" "}
            <em>"here are millions of examples of what humans wrote after
            seeing X — my job is to predict what usually comes next."</em>
          </p>
          <p>
            When it feels magical, it's because the patterns are richer than
            we expect. When it fails weirdly — counting letters, doing basic
            arithmetic — it's because that specific pattern wasn't well
            represented in what it saw.
          </p>
        </LessonSection>

        {/* Visual explanation */}
        <LessonSection eyebrow="Visual explanation" title="Programs vs. learned models.">
          <p>
            The clearest way to see this is to compare two things you might
            put on a computer:
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                A traditional program
              </div>
              <p className="mt-2 text-sm">
                A human writes the rules.{" "}
                <code className="rounded bg-muted px-1">if temperature &gt; 30 then "hot"</code>. The
                behavior is exactly what someone typed.
              </p>
            </div>
            <div className="rounded-lg border border-accent/40 bg-accent/5 p-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                A learned model
              </div>
              <p className="mt-2 text-sm">
                Nobody writes the rules. You show it thousands of examples
                and it works out its own pattern for what "hot" looks like.
                The behavior comes from the data.
              </p>
            </div>
          </div>
          <p>
            Everything called "AI" today falls on the right-hand side of
            that picture. That single shift — from written rules to learned
            patterns — is the whole revolution.
          </p>
        </LessonSection>

        {/* Explanation */}
        <LessonSection eyebrow="Explanation" title="So what actually happens?">
          <p>
            The recipe, in plain language:
          </p>
          <ol className="ml-4 list-decimal space-y-2">
            <li>Collect a lot of examples of a task being done well.</li>
            <li>
              Show them to a mathematical system whose job is to guess "given
              this input, what usually comes next?"
            </li>
            <li>
              When it guesses wrong, nudge it — slightly — toward the right
              answer. Repeat billions of times.
            </li>
            <li>
              Eventually its guesses become uncannily good at the kind of
              tasks its examples covered — and only those.
            </li>
          </ol>
          <p>
            That's it. That's the entire machine you've been hearing about.
            We'll unpack every step of it — carefully, without hand-waving —
            in the stages ahead.
          </p>
        </LessonSection>

        {/* Small experiment */}
        <LessonSection eyebrow="Small experiment" title="Teach a (tiny) model yourself.">
          <p>
            You don't need to trust us on any of this. You can do it right
            now, in your browser, with four examples.
          </p>
          <div className="not-prose">
            <ClassificationExperiment />
          </div>
          <p>
            No neural networks. No API calls. Just examples in, prediction
            out — the exact same idea that powers ChatGPT, scaled up
            unimaginably far.
          </p>
        </LessonSection>

        {/* Reflection */}
        <LessonSection eyebrow="Reflection" title="Sit with this for a second.">
          <p>
            Grab a note somewhere — a text file, a notebook, the back of an
            envelope — and answer two questions in your own words:
          </p>
          <ul className="ml-4 list-disc space-y-2">
            <li>How would you now explain AI to a curious friend in three sentences?</li>
            <li>What's one thing AI has surprised you by doing well, and one thing it has surprised you by doing badly?</li>
          </ul>
          <p>
            Writing this down is not optional homework. It's the moment the
            lesson stops being ours and starts being yours.
          </p>
        </LessonSection>

        {/* Modern AI connection */}
        <LessonSection eyebrow="Modern AI connection" title="Where this lands in 2026.">
          <p>
            Today's headline systems — GPT-class chatbots, image generators,
            coding assistants — are all the same idea at a staggering scale.
            Enormous amounts of data. Enormous models. The same core recipe.
          </p>
          <p>
            Which is why understanding the recipe matters more than
            memorizing the model of the month. Models change every few
            weeks. The idea underneath them hasn't changed in a decade.
          </p>
        </LessonSection>

        {/* Knowledge check */}
        <LessonSection eyebrow="Knowledge check" title="Quick check before you move on.">
          <div className="not-prose">
            <KnowledgeCheck questions={questions} />
          </div>
        </LessonSection>

        {/* Next step */}
        <LessonSection eyebrow="Next step" title="Where we go from here.">
          <p>
            You now have the honest, jargon-free answer most people never
            get. From here, the path is straightforward: to build systems
            like these, you need to understand the machines they run on, then
            learn to talk to those machines. That starts in the next stage.
          </p>
        </LessonSection>

        <LessonNav
          prev={{ to: "/start", label: "How the course works" }}
          next={{ to: "/curriculum", label: "Stage 2: Understanding Computers" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
