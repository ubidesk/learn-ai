import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  LessonSection,
  LearningObjectives,
  KnowledgeCheck,
  LessonNav,
} from "@/components/learn-ui";
import { ResourceSimulator } from "@/components/resource-simulator";

export const Route = createFileRoute("/lessons/computers/hardware-software")({
  head: () => ({
    meta: [
      { title: "Hardware, Software, and the OS — Learn AI" },
      {
        name: "description",
        content:
          "What a computer really is: CPU, RAM, storage, operating system, and what happens when a program starts running.",
      },
      { property: "og:title", content: "Hardware, Software, and the OS — Learn AI" },
      {
        property: "og:description",
        content:
          "An honest mental model of the machine — from silicon to a running process.",
      },
    ],
  }),
  component: LessonHardware,
});

const objectives = [
  "Name the four essential pieces of a computer: CPU, RAM, storage, and OS.",
  "Explain the difference between code at rest and a program running.",
  "Describe what an operating system does that your program does not.",
  "Predict what happens when a machine runs out of CPU, RAM, or storage.",
];

const questions = [
  {
    q: "You double-click an app. What actually happens?",
    options: [
      "The disk starts spinning and displays pixels.",
      "The OS copies the program from storage into RAM and asks the CPU to start executing its instructions.",
      "The CPU downloads the app from the internet each time.",
      "Nothing — apps live in the CPU permanently.",
    ],
    answerIndex: 1,
    explain:
      "A program on disk is a file. Running it means the OS loads it into RAM and points the CPU at its instructions. That live copy is called a <em>process</em>.",
  },
  {
    q: "Your laptop crawls when you open 50 browser tabs. What's most likely full?",
    options: [
      "Storage (the disk).",
      "RAM. The OS starts swapping to disk, which is thousands of times slower.",
      "The CPU cache, permanently.",
      "The network card.",
    ],
    answerIndex: 1,
    explain:
      "Storage holds files you're not using. RAM holds what's actively running. Tabs live in RAM — when it fills up, the OS 'swaps' to disk and everything crawls.",
  },
];

function LessonHardware() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/curriculum" className="hover:text-foreground">
            Stage 02 · Computers
          </Link>{" "}
          / Lesson 01
        </nav>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          What a computer{" "}
          <span className="italic text-accent">really is.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Before you tell one what to do, understand what it is. Four pieces,
          one honest mental model — good enough to reason about anything
          you'll build in this course.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="rounded-full border border-border bg-card px-2 py-0.5">
            ~15 min read · interactive simulator
          </span>
        </div>

        <div className="mt-10">
          <LearningObjectives items={objectives} />
        </div>

        <LessonSection eyebrow="Curiosity" title="A laptop is a very fast, very literal clerk.">
          <p>
            Imagine a clerk at a desk. They can only do one small thing at a
            time — add two numbers, copy a value, compare two things — but
            they do it billions of times per second. Give them a stack of
            instructions and they'll follow it, no matter how weird, in the
            order you wrote it.
          </p>
          <p>
            That's a computer. The clerk is the CPU. The desk is memory. The
            filing cabinet is storage. And there's a manager, called the
            operating system, deciding whose instructions the clerk works on
            next.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Why this matters" title="Every AI system sits on this.">
          <p>
            LLMs, training runs, RAG apps — all of them are just programs. If
            you can't reason about what a program is, where it lives, and
            what it costs to run, you'll be permanently confused about why
            things are slow, expensive, or broken.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Intuition" title="Code at rest vs. a program running.">
          <p>
            A program on your disk is a file — bytes sitting still. Nothing
            happens. Double-click it and the OS copies it into RAM, then
            tells the CPU: "start executing instructions here." That live,
            running thing is called a <strong>process</strong>.
          </p>
          <p>
            The same program can run twice at once (two processes, two
            copies in RAM). That's why you can open two windows of the same
            editor.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Visual explanation" title="The four pieces, in one picture.">
          <div className="not-prose grid gap-3 md:grid-cols-2">
            {[
              { name: "CPU", tag: "does the work", body: "Runs instructions. Fast, small, expensive per byte." },
              { name: "RAM", tag: "short-term memory", body: "Where running programs live. Fast, medium, empties on shutdown." },
              { name: "Storage", tag: "long-term memory", body: "Files and installed apps. Slow, huge, keeps its contents." },
              { name: "OS", tag: "the manager", body: "Shares the CPU/RAM/storage across every program. macOS, Windows, Linux." },
            ].map((p) => (
              <div key={p.name} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-display text-xl font-semibold">{p.name}</h4>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{p.tag}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </LessonSection>

        <LessonSection eyebrow="Explanation" title="What the OS does that your program can't.">
          <p>
            Your program doesn't talk to the CPU directly. It talks to the
            operating system, which:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>Shares the CPU across every running process (this is called <em>scheduling</em>).</li>
            <li>Hands out chunks of RAM and takes them back.</li>
            <li>Turns your <code>open("notes.txt")</code> into actual reads from disk.</li>
            <li>Keeps processes from stomping on each other's memory.</li>
          </ul>
          <p>
            When people say "the OS," they mean this manager plus a huge pile
            of tools and libraries it ships with.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Small experiment" title="Fill up a fake laptop.">
          <p>
            Toggle tasks on and off. Watch which resource fills up first —
            and notice how a 100 GB photo library barely costs any CPU,
            because it's sitting on disk, not running.
          </p>
          <div className="not-prose">
            <ResourceSimulator />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Reflection" title="Answer these in your head.">
          <ul className="ml-4 list-disc space-y-2">
            <li>When you close a browser tab, which resource frees up most?</li>
            <li>Why does adding more RAM often speed a computer up more than a faster CPU?</li>
            <li>What's one program you use daily that's obviously CPU-heavy? Storage-heavy?</li>
          </ul>
        </LessonSection>

        <LessonSection eyebrow="Modern AI connection" title="This is why GPUs and clouds exist.">
          <p>
            Training an LLM is billions of tiny math instructions. A single
            CPU-clerk can do them, but slowly. A GPU is a room full of
            simpler clerks doing math in parallel. A cloud provider is a
            warehouse of those rooms. Same story, bigger scale — CPU, RAM,
            storage, OS, all the way up.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Knowledge check" title="Two quick questions.">
          <div className="not-prose">
            <KnowledgeCheck questions={questions} />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Next step" title="Files, folders, and the terminal.">
          <p>
            Now that you know what a computer is, we'll learn to talk to one
            without a mouse — through files, paths, and a handful of
            commands you'll use for the rest of your career.
          </p>
        </LessonSection>

        <LessonNav
          prev={{ to: "/lessons/orientation/path-ahead", label: "Lesson 4: The Path Ahead" }}
          next={{ to: "/lessons/computers/files-and-terminal", label: "Lesson 2: Files, Folders, and the Terminal" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
