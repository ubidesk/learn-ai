import { useMemo, useRef, useState, useEffect, type KeyboardEvent } from "react";

// A tiny, safe, deterministic simulated filesystem + terminal.
// No shell is executed. Everything runs in memory.

type Node =
  | { type: "dir"; children: Record<string, Node> }
  | { type: "file"; content: string };

function makeFs(): Node {
  return {
    type: "dir",
    children: {
      home: {
        type: "dir",
        children: {
          you: {
            type: "dir",
            children: {
              "readme.txt": { type: "file", content: "Welcome to your fake home folder." },
              projects: { type: "dir", children: {} },
            },
          },
        },
      },
      tmp: { type: "dir", children: {} },
    },
  };
}

function resolvePath(cwd: string[], input: string): string[] | null {
  if (!input) return cwd;
  const parts = input.startsWith("/") ? input.split("/").filter(Boolean) : [...cwd, ...input.split("/").filter(Boolean)];
  const out: string[] = [];
  for (const p of parts) {
    if (p === "." || p === "") continue;
    if (p === "..") {
      if (out.length === 0) return null;
      out.pop();
    } else {
      out.push(p);
    }
  }
  return out;
}

function getNode(root: Node, path: string[]): Node | null {
  let cur: Node = root;
  for (const p of path) {
    if (cur.type !== "dir") return null;
    const nxt = cur.children[p];
    if (!nxt) return null;
    cur = nxt;
  }
  return cur;
}

const MISSION_STEPS = [
  { check: (log: string) => /^\/home\/you\s*$/m.test(log), text: "Print the current directory with pwd." },
  { check: (log: string) => /projects/.test(log) && /readme\.txt/.test(log), text: "List the contents of your home folder with ls." },
  { check: (log: string) => /Now in: \/home\/you\/projects/.test(log), text: "Move into the projects folder with cd projects." },
  { check: (log: string) => /Created directory: learn-ai/.test(log), text: "Make a new folder: mkdir learn-ai." },
  { check: (log: string) => /Created file: notes\.md/.test(log), text: "Create an empty file: touch notes.md." },
];

export function TerminalSimulator() {
  const [root] = useState<Node>(() => makeFs());
  const [cwd, setCwd] = useState<string[]>(["home", "you"]);
  const [history, setHistory] = useState<string[]>([
    "Fake terminal. Try: pwd, ls, cd projects, mkdir learn-ai, touch notes.md, help.",
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIdx, setCmdIdx] = useState<number>(-1);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [history]);

  const cwdStr = "/" + cwd.join("/");

  const missionState = useMemo(() => {
    const joined = history.join("\n");
    return MISSION_STEPS.map((s) => s.check(joined));
  }, [history]);

  const run = (raw: string) => {
    const line = raw.trim();
    const lines = [...history, `$ ${line}`];
    if (!line) {
      setHistory(lines);
      return;
    }
    const [cmd, ...rest] = line.split(/\s+/);
    const arg = rest.join(" ");

    switch (cmd) {
      case "help":
        lines.push("Available: pwd, ls, cd <path>, mkdir <name>, touch <name>, cat <file>, clear, help");
        break;
      case "pwd":
        lines.push(cwdStr);
        break;
      case "ls": {
        const target = arg ? resolvePath(cwd, arg) : cwd;
        if (!target) {
          lines.push("ls: bad path");
          break;
        }
        const node = getNode(root, target);
        if (!node || node.type !== "dir") {
          lines.push("ls: not a directory");
          break;
        }
        const names = Object.entries(node.children).map(([n, v]) =>
          v.type === "dir" ? `${n}/` : n,
        );
        lines.push(names.length ? names.join("  ") : "(empty)");
        break;
      }
      case "cd": {
        const target = resolvePath(cwd, arg || "/home/you");
        if (!target) {
          lines.push("cd: bad path");
          break;
        }
        const node = getNode(root, target);
        if (!node || node.type !== "dir") {
          lines.push("cd: not a directory");
          break;
        }
        setCwd(target);
        lines.push(`Now in: /${target.join("/")}`);
        break;
      }
      case "mkdir": {
        if (!arg) {
          lines.push("mkdir: needs a name");
          break;
        }
        const parent = getNode(root, cwd);
        if (!parent || parent.type !== "dir") {
          lines.push("mkdir: no parent");
          break;
        }
        if (parent.children[arg]) {
          lines.push(`mkdir: ${arg} already exists`);
          break;
        }
        parent.children[arg] = { type: "dir", children: {} };
        lines.push(`Created directory: ${arg}`);
        break;
      }
      case "touch": {
        if (!arg) {
          lines.push("touch: needs a name");
          break;
        }
        const parent = getNode(root, cwd);
        if (!parent || parent.type !== "dir") {
          lines.push("touch: no parent");
          break;
        }
        if (parent.children[arg]) {
          lines.push(`touch: ${arg} already exists`);
          break;
        }
        parent.children[arg] = { type: "file", content: "" };
        lines.push(`Created file: ${arg}`);
        break;
      }
      case "cat": {
        const target = resolvePath(cwd, arg);
        if (!target) {
          lines.push("cat: bad path");
          break;
        }
        const node = getNode(root, target);
        if (!node || node.type !== "file") {
          lines.push("cat: not a file");
          break;
        }
        lines.push(node.content || "(empty file)");
        break;
      }
      case "clear":
        setHistory([]);
        return;
      default:
        lines.push(`${cmd}: command not found (try: help)`);
    }
    setHistory(lines);
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim()) {
        setCmdHistory((h) => [...h, input]);
        setCmdIdx(-1);
      }
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdHistory.length) return;
      const nextIdx = cmdIdx === -1 ? cmdHistory.length - 1 : Math.max(0, cmdIdx - 1);
      setCmdIdx(nextIdx);
      setInput(cmdHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIdx === -1) return;
      const nextIdx = cmdIdx + 1;
      if (nextIdx >= cmdHistory.length) {
        setCmdIdx(-1);
        setInput("");
      } else {
        setCmdIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    }
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
        Small experiment · fake terminal
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        A safe sandbox with a fake filesystem.
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Nothing here touches your real computer. Complete the mission below —
        the commands are the same ones you'll type on a real terminal later.
      </p>

      <div
        ref={logRef}
        className="mt-5 h-64 overflow-auto rounded-md border border-border bg-background p-3 font-mono text-xs leading-relaxed"
        aria-label="Terminal output"
      >
        {history.map((l, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {l}
          </div>
        ))}
      </div>
      <label className="mt-2 flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 font-mono text-xs">
        <span className="text-accent">{cwdStr} $</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          className="w-full bg-transparent outline-none"
          aria-label="Terminal input"
          autoComplete="off"
          spellCheck={false}
        />
      </label>

      <div className="mt-5 rounded-lg border border-dashed border-border bg-background/40 p-4">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Mission
        </div>
        <ol className="mt-2 space-y-1 text-sm">
          {MISSION_STEPS.map((s, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                aria-hidden
                className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                  missionState[i] ? "bg-accent" : "bg-muted-foreground/40"
                }`}
              />
              <span className={missionState[i] ? "line-through text-muted-foreground" : ""}>
                {i + 1}. {s.text}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
