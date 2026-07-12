import { useMemo, useState } from "react";

type OS = "mac" | "win" | "linux";

interface Tool {
  id: string;
  name: string;
  why: string;
  verify: string; // safe verification command
  install: Record<OS, string>;
}

const TOOLS: Tool[] = [
  {
    id: "terminal",
    name: "A real terminal",
    why: "Where you'll live for the rest of the curriculum.",
    verify: "echo hello",
    install: {
      mac: "Built in — open Terminal.app (or install iTerm2 later).",
      win: "Install Windows Terminal from the Microsoft Store, then enable WSL for a real Linux shell.",
      linux: "Already there — open your distro's terminal app.",
    },
  },
  {
    id: "editor",
    name: "A code editor (VS Code)",
    why: "A modern editor with syntax highlighting, extensions, and a built-in terminal.",
    verify: "code --version",
    install: {
      mac: "Download VS Code from code.visualstudio.com and drag it to Applications.",
      win: "Download the VS Code installer from code.visualstudio.com and run it.",
      linux: "Install via your package manager or the .deb/.rpm from code.visualstudio.com.",
    },
  },
  {
    id: "git",
    name: "Git",
    why: "Version control — your time machine for code.",
    verify: "git --version",
    install: {
      mac: "Run 'xcode-select --install' to get Apple's command-line tools, which include Git.",
      win: "Install Git for Windows from git-scm.com. Accept the defaults on first pass.",
      linux: "Use your package manager (e.g. 'sudo apt install git' on Debian/Ubuntu).",
    },
  },
  {
    id: "github",
    name: "A GitHub account",
    why: "Where your public code and portfolio will live.",
    verify: "Sign in at github.com in your browser.",
    install: {
      mac: "Create a free account at github.com and pick a professional username.",
      win: "Create a free account at github.com and pick a professional username.",
      linux: "Create a free account at github.com and pick a professional username.",
    },
  },
  {
    id: "python",
    name: "Python 3",
    why: "The primary language for this curriculum.",
    verify: "python3 --version",
    install: {
      mac: "Install via python.org or 'brew install python' if you have Homebrew.",
      win: "Install from python.org — check 'Add Python to PATH' during setup.",
      linux: "Usually pre-installed. Otherwise 'sudo apt install python3 python3-venv'.",
    },
  },
  {
    id: "pkg",
    name: "A package manager",
    why: "Installs libraries: pip for Python, and a system one (Homebrew / winget / apt).",
    verify: "pip --version",
    install: {
      mac: "Homebrew from brew.sh. Then use 'brew install …' for system tools; pip for Python packages.",
      win: "winget is built in on modern Windows. pip comes with Python.",
      linux: "Your distro already has one (apt, dnf, pacman). pip comes with Python.",
    },
  },
];

export function SetupChecklist() {
  const [os, setOs] = useState<OS>("mac");
  const [done, setDone] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const progress = useMemo(
    () => Math.round((done.size / TOOLS.length) * 100),
    [done],
  );

  const osLabel: Record<OS, string> = { mac: "macOS", win: "Windows", linux: "Linux" };

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
        Small experiment · setup planner
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        Pick your OS. Get a personalized checklist.
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Nothing here installs anything for you. This is a plan you'll follow
        on your own computer, one item at a time.
      </p>

      <div className="mt-5 inline-flex rounded-md border border-border p-1" role="tablist" aria-label="Operating system">
        {(["mac", "win", "linux"] as OS[]).map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={os === k}
            type="button"
            onClick={() => setOs(k)}
            className={`rounded px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              os === k ? "bg-accent text-accent-foreground" : "hover:bg-muted"
            }`}
          >
            {osLabel[k]}
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          {done.size} / {TOOLS.length}
        </span>
      </div>

      <ol className="mt-6 space-y-3">
        {TOOLS.map((t, i) => {
          const isDone = done.has(t.id);
          return (
            <li
              key={t.id}
              className={`rounded-lg border p-4 transition-colors ${
                isDone ? "border-accent/50 bg-accent/5" : "border-border bg-background/40"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-0.5 font-display text-lg font-semibold">{t.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.why}</p>
                </div>
                <label className="flex shrink-0 items-center gap-2 text-xs">
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => toggle(t.id)}
                    className="h-4 w-4 rounded border-border"
                  />
                  <span>Done</span>
                </label>
              </div>
              <div className="mt-3 grid gap-2 md:grid-cols-2">
                <div className="rounded-md border border-dashed border-border p-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Install on {osLabel[os]}
                  </div>
                  <p className="mt-1 text-sm">{t.install[os]}</p>
                </div>
                <div className="rounded-md border border-dashed border-border p-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Verify in your terminal
                  </div>
                  <pre className="mt-1 overflow-auto font-mono text-xs">{t.verify}</pre>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      <p className="mt-4 rounded-md border border-dashed border-border bg-background/40 p-3 text-xs text-muted-foreground">
        <strong className="font-semibold text-foreground">Safety note.</strong>{" "}
        Run install commands only after reading them. When in doubt, prefer
        the official installer from the tool's website over one-line scripts
        pasted from strangers.
      </p>
    </div>
  );
}
