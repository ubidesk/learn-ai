import { useState } from "react";

interface Step {
  key: string;
  title: string;
  detail: string;
  latencyMs: number;
}

const STEPS: Step[] = [
  {
    key: "type",
    title: "You type a URL",
    detail:
      "Your browser splits the URL into pieces: scheme (https), host (learn-ai.dev), path (/curriculum).",
    latencyMs: 0,
  },
  {
    key: "dns",
    title: "DNS lookup",
    detail:
      "The host name is a label for humans. To reach the server we need an IP address. The browser asks a DNS resolver: 'what's the IP for learn-ai.dev?' The resolver answers, e.g. 76.76.21.21.",
    latencyMs: 30,
  },
  {
    key: "connect",
    title: "Open a connection (TCP + TLS)",
    detail:
      "Your machine opens a network connection to that IP on port 443, then negotiates TLS so the traffic is encrypted.",
    latencyMs: 90,
  },
  {
    key: "request",
    title: "Send an HTTP request",
    detail:
      "GET /curriculum HTTP/1.1\nHost: learn-ai.dev\nAccept: text/html\n\nA short text message describing what you want.",
    latencyMs: 20,
  },
  {
    key: "server",
    title: "Server does its work",
    detail:
      "The server looks at the request, runs some code, maybe reads a database, and prepares a response.",
    latencyMs: 60,
  },
  {
    key: "response",
    title: "HTTP response comes back",
    detail:
      "HTTP/1.1 200 OK\nContent-Type: text/html\n\n<!doctype html>… Status 200 means success. 404 would mean 'not found'.",
    latencyMs: 40,
  },
  {
    key: "render",
    title: "Browser renders the page",
    detail:
      "The browser parses the HTML, downloads CSS/JS/images (more requests!), and paints the page you see.",
    latencyMs: 50,
  },
];

export function RequestJourney() {
  const [index, setIndex] = useState(0);
  const [autoPlaying, setAutoPlaying] = useState(false);

  const totalLatency = STEPS.slice(0, index + 1).reduce((a, s) => a + s.latencyMs, 0);

  const play = async () => {
    setAutoPlaying(true);
    for (let i = 0; i < STEPS.length; i++) {
      setIndex(i);
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, 700));
    }
    setAutoPlaying(false);
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
        Small experiment · request journey
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        Step through what happens when you press Enter on a URL.
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        The whole trip usually takes a fraction of a second. Slow it down and
        it becomes a series of very ordinary conversations.
      </p>

      <ol className="mt-6 grid gap-2 md:grid-cols-7">
        {STEPS.map((s, i) => {
          const active = i === index;
          const done = i < index;
          return (
            <li key={s.key}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={active}
                aria-current={active ? "step" : undefined}
                className={`flex h-full w-full flex-col items-start rounded-md border px-2 py-2 text-left text-[11px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  active
                    ? "border-accent bg-accent text-accent-foreground"
                    : done
                      ? "border-accent/50 bg-accent/10"
                      : "border-border hover:border-foreground/60"
                }`}
              >
                <span className="font-mono text-[9px] uppercase tracking-widest opacity-80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-0.5 font-medium leading-tight">{s.title}</span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="mt-5 rounded-lg border border-dashed border-border bg-background/40 p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="font-display text-lg font-semibold">
            {index + 1}. {STEPS[index].title}
          </h4>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            +{STEPS[index].latencyMs} ms · total ≈ {totalLatency} ms
          </span>
        </div>
        <pre className="mt-3 whitespace-pre-wrap font-mono text-xs leading-relaxed text-foreground/85">
          {STEPS[index].detail}
        </pre>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0 || autoPlaying}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium hover:border-foreground disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={() => setIndex((i) => Math.min(STEPS.length - 1, i + 1))}
          disabled={index === STEPS.length - 1 || autoPlaying}
          className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium hover:border-foreground disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Next →
        </button>
        <button
          type="button"
          onClick={play}
          disabled={autoPlaying}
          className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {autoPlaying ? "Playing…" : "▶ Play the whole trip"}
        </button>
      </div>
    </div>
  );
}
