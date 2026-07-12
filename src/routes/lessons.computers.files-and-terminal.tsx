import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  LessonSection,
  LearningObjectives,
  KnowledgeCheck,
  LessonNav,
} from "@/components/learn-ui";
import { TerminalSimulator } from "@/components/terminal-simulator";

export const Route = createFileRoute("/lessons/computers/files-and-terminal")({
  head: () => ({
    meta: [
      { title: "Files, Folders, and the Terminal — Learn AI" },
      {
        name: "description",
        content:
          "Files, directories, absolute and relative paths, and the everyday terminal commands — pwd, ls, cd, mkdir, touch, cat.",
      },
      { property: "og:title", content: "Files, Folders, and the Terminal — Learn AI" },
      {
        property: "og:description",
        content:
          "The command line, demystified. Practice in a safe browser sandbox.",
      },
    ],
  }),
  component: LessonTerminal,
});

const objectives = [
  "Explain what a file, a folder, and a path are — precisely.",
  "Tell absolute paths from relative paths.",
  "Use pwd, ls, cd, mkdir, touch, and cat with confidence.",
  "Complete a small terminal mission without touching the mouse.",
];

const questions = [
  {
    q: "You're in /home/you. You type `cd projects`. Where are you now?",
    options: ["/projects", "/home/you/projects", "/home/projects", "It errors — always use absolute paths."],
    answerIndex: 1,
    explain:
      "Relative paths resolve against your current working directory. Since you were in /home/you, `cd projects` takes you to /home/you/projects.",
  },
  {
    q: "What's the difference between /home/you and home/you?",
    options: [
      "Nothing — they're identical.",
      "The first is absolute (starts at the root /); the second is relative to wherever you currently are.",
      "The second is a Windows-only path.",
      "The first is a file, the second is a folder.",
    ],
    answerIndex: 1,
    explain:
      "A leading slash means 'start from the root.' No leading slash means 'start from wherever I am.' Same-looking name, wildly different meaning.",
  },
];

const cheatsheet = [
  { cmd: "pwd", meaning: "Print working directory — where am I right now?" },
  { cmd: "ls", meaning: "List — what's in this folder?" },
  { cmd: "cd <path>", meaning: "Change directory. `cd ..` goes up one level." },
  { cmd: "mkdir <name>", meaning: "Make a new folder here." },
  { cmd: "touch <name>", meaning: "Create an empty file." },
  { cmd: "cat <file>", meaning: "Show the contents of a file." },
  { cmd: "clear", meaning: "Wipe the screen (not the history)." },
];

function LessonTerminal() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/curriculum" className="hover:text-foreground">
            Stage 02 · Computers
          </Link>{" "}
          / Lesson 02
        </nav>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          Talking to a computer{" "}
          <span className="italic text-accent">with words.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          The mouse is fine for humans. Programs — and the people who write
          them — talk to computers through the terminal. Twenty minutes here
          will pay you back forever.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="rounded-full border border-border bg-card px-2 py-0.5">
            ~20 min read · interactive fake terminal
          </span>
        </div>

        <div className="mt-10">
          <LearningObjectives items={objectives} />
        </div>

        <LessonSection eyebrow="Curiosity" title="Everything is a file. Almost.">
          <p>
            Your photos, your code, your OS itself, even some hardware —
            they're all represented as files organized in folders. Learn to
            navigate that tree and you can find, edit, or move anything.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Why this matters" title="You cannot avoid the terminal in AI.">
          <p>
            Installing Python, cloning a repo, running a training job,
            deploying a model — all of it happens in a terminal. Every guide,
            every README, every error message assumes you're comfortable
            there. So let's make you comfortable.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Intuition" title="A folder is a container. A path is an address.">
          <p>
            Folders (aka <em>directories</em>) contain files and other
            folders. A path is just an address — a route from somewhere to
            what you're pointing at.
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <strong>Absolute path</strong> starts with <code>/</code>: it's the full address from the root of the filesystem. E.g. <code>/home/you/projects/notes.md</code>.
            </li>
            <li>
              <strong>Relative path</strong> is measured from wherever you currently are. If you're in <code>/home/you</code>, then <code>projects/notes.md</code> means the same file.
            </li>
            <li>
              <code>.</code> is "here." <code>..</code> is "one level up."
            </li>
          </ul>
        </LessonSection>

        <LessonSection eyebrow="Visual explanation" title="The seven commands you'll use every day.">
          <div className="not-prose overflow-hidden rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/50 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-4 py-2">Command</th>
                  <th className="px-4 py-2">What it does</th>
                </tr>
              </thead>
              <tbody>
                {cheatsheet.map((row) => (
                  <tr key={row.cmd} className="border-t border-border/60">
                    <td className="px-4 py-2 font-mono text-xs">{row.cmd}</td>
                    <td className="px-4 py-2">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </LessonSection>

        <LessonSection eyebrow="Explanation" title="The current working directory is the star.">
          <p>
            Every terminal session has a <strong>current working directory</strong>
            — the folder you're "in" right now. Every relative path is
            interpreted from there. Every command you run behaves as if you'd
            walked to that folder first.
          </p>
          <p>
            <code>pwd</code> tells you where you are. <code>cd</code> moves
            you. Everything else acts on your current location unless you
            give it a different path.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Small experiment" title="Do the mission in the sandbox.">
          <p>
            The terminal below is a simulation — none of it touches your
            real machine. Complete the five-step mission using the same
            commands you'd type on a real Unix-y terminal later.
          </p>
          <div className="not-prose">
            <TerminalSimulator />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Reflection" title="Prove it to yourself.">
          <ul className="ml-4 list-disc space-y-2">
            <li>What's <code>pwd</code> for you right after opening a new terminal, in your head?</li>
            <li>How would you get from <code>/home/you/projects/learn-ai</code> to <code>/home/you</code> in one command?</li>
            <li>What does <code>ls ..</code> show, and why?</li>
          </ul>
        </LessonSection>

        <LessonSection eyebrow="Modern AI connection" title="Every AI project starts here.">
          <p>
            Every open-source AI repo — Hugging Face, LangChain, llama.cpp —
            has a README that starts with a few terminal commands. Once
            these feel normal, that whole world opens up.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Knowledge check" title="Two quick questions.">
          <div className="not-prose">
            <KnowledgeCheck questions={questions} />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Next step" title="How the internet actually works.">
          <p>
            You can now navigate your own machine. Next, we look at how
            millions of them talk to each other — because everything AI
            eventually crosses a network.
          </p>
        </LessonSection>

        <LessonNav
          prev={{ to: "/lessons/computers/hardware-software", label: "Lesson 1: Hardware, Software, and the OS" }}
          next={{ to: "/lessons/computers/how-internet-works", label: "Lesson 3: How the Internet Works" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
