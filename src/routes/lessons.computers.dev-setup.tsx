import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  LessonSection,
  LearningObjectives,
  KnowledgeCheck,
  LessonNav,
} from "@/components/learn-ui";
import { SetupChecklist } from "@/components/setup-checklist";

export const Route = createFileRoute("/lessons/computers/dev-setup")({
  head: () => ({
    meta: [
      { title: "Setting Up Your Machine — Learn AI" },
      {
        name: "description",
        content:
          "A professional developer setup — terminal, VS Code, Git, GitHub, Python, and package managers — installed once, used for years.",
      },
      { property: "og:title", content: "Setting Up Your Machine — Learn AI" },
      {
        property: "og:description",
        content:
          "Pick your OS, generate a personalized setup checklist, and make your first commit.",
      },
    ],
  }),
  component: LessonSetup,
});

const objectives = [
  "Name the six tools every AI engineer has installed.",
  "Understand what a package manager is and why you need one.",
  "Follow a personalized checklist for your operating system.",
  "Make your first commit and put it on GitHub.",
];

const questions = [
  {
    q: "Why do developers prefer VS Code over Notepad or TextEdit?",
    options: [
      "It's prettier.",
      "It understands code — syntax highlighting, autocomplete, an integrated terminal, and extensions — and it works the same on every OS.",
      "It's faster to type.",
      "It runs Python on its own.",
    ],
    answerIndex: 1,
    explain:
      "Any editor can hold text. A code editor understands the language you're writing, catches obvious errors, and includes tools like an integrated terminal — huge quality-of-life wins.",
  },
  {
    q: "What is Git actually for?",
    options: [
      "Uploading files to GitHub.",
      "Tracking every change to your code as versioned snapshots, so you can review history, undo mistakes, and collaborate.",
      "Running Python code.",
      "Compressing folders.",
    ],
    answerIndex: 1,
    explain:
      "Git is version control. GitHub is a place to host Git repositories in the cloud. One is the tool; the other is the service. You'll use both.",
  },
];

function LessonSetup() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/curriculum" className="hover:text-foreground">
            Stage 02 · Computers
          </Link>{" "}
          / Lesson 04
        </nav>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          A machine you can{" "}
          <span className="italic text-accent">actually build on.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          One good afternoon of setup gives you a professional developer
          environment you'll use for years. Pick your OS, follow the
          checklist, and make your first public commit.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="rounded-full border border-border bg-card px-2 py-0.5">
            ~30 min hands-on · plus install time
          </span>
        </div>

        <div className="mt-10">
          <LearningObjectives items={objectives} />
        </div>

        <LessonSection eyebrow="Curiosity" title="Everyone's terminal looks similar.">
          <p>
            Peek over a professional developer's shoulder and you'll see a
            terminal, a code editor with a familiar layout, a browser tab
            open to GitHub, and probably Python running somewhere. The
            tools are boring — and that's the point. Boring tools are
            reliable tools.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Why this matters" title="Your environment is your instrument.">
          <p>
            A guitarist tunes their guitar. A chef sharpens their knives.
            You set up your machine. Skip it and you'll fight your tools
            every time you sit down to work — and you'll blame yourself.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Intuition" title="Six tools. That's it.">
          <ul className="ml-4 list-disc space-y-1">
            <li><strong>A terminal</strong> — where you talk to your machine.</li>
            <li><strong>A code editor (VS Code)</strong> — where you write code.</li>
            <li><strong>Git</strong> — version control.</li>
            <li><strong>A GitHub account</strong> — where your public work lives.</li>
            <li><strong>Python 3</strong> — the language for this curriculum.</li>
            <li><strong>A package manager</strong> — installs everything else.</li>
          </ul>
          <p>
            That's the whole list. You will not need anything else for the
            next several stages.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Visual explanation" title="What is a package manager, really?">
          <p>
            A package manager is a tool that installs other tools. Instead
            of hunting for installers on the web, you say <code>pip install
            numpy</code> and it fetches, verifies, and installs the library
            for you. Every language and OS has one:
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li><strong>pip</strong> — installs Python packages.</li>
            <li><strong>Homebrew</strong> — installs system tools on macOS.</li>
            <li><strong>apt / dnf / pacman</strong> — the same, for Linux.</li>
            <li><strong>winget</strong> — the built-in Windows package manager.</li>
          </ul>
        </LessonSection>

        <LessonSection eyebrow="Explanation" title="A note on safety before you install anything.">
          <p>
            You'll see tutorials that say "paste this into your terminal."
            Don't. Read every install command first. Prefer official
            installers from the tool's own website. When something wants
            admin/root access (<code>sudo</code>), make sure you understand
            why.
          </p>
          <p>
            The checklist below deliberately keeps commands conservative and
            points you at official sources.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Small experiment" title="Generate your personal setup plan.">
          <p>
            Pick your OS. Work down the list. Nothing on this page installs
            anything — you'll run the commands yourself on your own machine,
            when you're ready.
          </p>
          <div className="not-prose">
            <SetupChecklist />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Reflection" title="Prove your setup works.">
          <p>
            Once your terminal, editor, Git, and Python are all installed,
            do this final ritual — it's the moment your machine officially
            becomes a developer machine:
          </p>
          <ol className="ml-4 list-decimal space-y-1">
            <li>Create a folder called <code>hello-learn-ai</code>.</li>
            <li>Inside it, run <code>git init</code>.</li>
            <li>Create a <code>README.md</code> with one sentence about yourself.</li>
            <li>Run <code>git add .</code> then <code>git commit -m "first commit"</code>.</li>
            <li>Create a new repo on GitHub with the same name and follow their instructions to push.</li>
          </ol>
          <p>
            That's your first public commit. Screenshot it. You'll want to
            remember what it looked like.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Modern AI connection" title="This is the launchpad.">
          <p>
            Every serious AI project you'll ever clone, run, or contribute
            to assumes exactly this setup. From here, installing a model
            weights repo, running a Jupyter notebook, or spinning up a
            training script is just a few commands away.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Knowledge check" title="Two quick questions.">
          <div className="not-prose">
            <KnowledgeCheck questions={questions} />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Next step" title="Stage 3: Thinking Like a Programmer.">
          <p>
            You have a professional machine, a public GitHub, and every
            tool you need. Next stage: teach your brain to break problems
            apart the way programmers do — before you write a single line
            of Python.
          </p>
          <p className="text-sm text-muted-foreground">
            Stage 3 is in development. When it goes live, it'll pick up
            exactly where you're standing now.
          </p>
        </LessonSection>

        <LessonNav
          prev={{ to: "/lessons/computers/how-internet-works", label: "Lesson 3: How the Internet Works" }}
          next={{ to: "/curriculum", label: "Stage 3: Thinking Like a Programmer" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
