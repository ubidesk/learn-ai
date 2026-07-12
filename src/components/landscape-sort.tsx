import { useMemo, useState } from "react";

type CategoryId =
  | "rule-based"
  | "ml"
  | "deep-learning"
  | "generative"
  | "llm"
  | "application"
  | "engineering";

const categories: { id: CategoryId; label: string; hint: string }[] = [
  { id: "rule-based", label: "Rule-based software", hint: "Rules written by a human." },
  { id: "ml", label: "Machine learning", hint: "Patterns learned from data." },
  { id: "deep-learning", label: "Deep learning", hint: "ML with layered neural nets." },
  { id: "generative", label: "Generative AI", hint: "Produces new text, images, audio." },
  { id: "llm", label: "Large language model", hint: "The trained text model itself." },
  { id: "application", label: "AI application / product", hint: "A tool built on top of models." },
  { id: "engineering", label: "AI engineering", hint: "The craft of building AI systems." },
];

interface Example {
  id: string;
  text: string;
  answer: CategoryId;
  because: string;
}

const examples: Example[] = [
  {
    id: "e1",
    text: "A tax calculator that uses if-statements written by an accountant.",
    answer: "rule-based",
    because: "No learning. A human wrote the rules explicitly.",
  },
  {
    id: "e2",
    text: "An email spam filter trained on millions of labeled emails.",
    answer: "ml",
    because: "It learns patterns from labeled examples — classic supervised ML.",
  },
  {
    id: "e3",
    text: "A neural network with many layers that recognizes objects in photos.",
    answer: "deep-learning",
    because: "Many layers of neurons = deep learning, a subset of ML.",
  },
  {
    id: "e4",
    text: "DALL·E creating an image from your description.",
    answer: "generative",
    because: "It generates new content — the defining trait of generative AI.",
  },
  {
    id: "e5",
    text: "GPT-4 itself — the underlying trained model.",
    answer: "llm",
    because: "A large language model is the trained artifact, not the chat interface.",
  },
  {
    id: "e6",
    text: "ChatGPT — the chat product you open in a browser.",
    answer: "application",
    because: "A product wrapping a model, with UI, memory, and safety layers.",
  },
  {
    id: "e7",
    text: "The team building an evaluation harness, RAG pipeline, and safety layer for a chatbot.",
    answer: "engineering",
    because: "That's AI engineering — the craft of turning a model into a real system.",
  },
];

export function LandscapeSort() {
  const [picks, setPicks] = useState<Record<string, CategoryId | undefined>>({});

  const score = useMemo(
    () => examples.filter((e) => picks[e.id] === e.answer).length,
    [picks],
  );
  const answered = useMemo(
    () => examples.filter((e) => picks[e.id]).length,
    [picks],
  );

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
        Small experiment · sort the landscape
      </div>
      <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
        Which category does each one belong to?
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        These categories overlap — most real AI systems live in several at
        once. Pick the one that fits <em>best</em>. There's a reveal after
        each pick.
      </p>

      <ul className="mt-6 space-y-4">
        {examples.map((e) => {
          const picked = picks[e.id];
          const correct = picked === e.answer;
          return (
            <li
              key={e.id}
              className="rounded-lg border border-border bg-background/40 p-4"
            >
              <p className="font-display text-base">{e.text}</p>
              <div className="mt-3 flex flex-wrap gap-1.5" role="group" aria-label="Categories">
                {categories.map((c) => {
                  const isPicked = picked === c.id;
                  const isAnswer = c.id === e.answer;
                  const state =
                    picked === undefined
                      ? "border-border hover:border-foreground/60"
                      : isAnswer
                        ? "border-highlight bg-highlight/25 text-highlight-foreground"
                        : isPicked
                          ? "border-destructive bg-destructive/10"
                          : "border-border opacity-60";
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() =>
                        setPicks((s) =>
                          s[e.id] ? s : { ...s, [e.id]: c.id },
                        )
                      }
                      aria-pressed={isPicked}
                      disabled={picked !== undefined}
                      title={c.hint}
                      className={`rounded-full border px-2.5 py-1 text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${state}`}
                    >
                      {c.label}
                    </button>
                  );
                })}
              </div>
              {picked !== undefined && (
                <p
                  className={`mt-3 rounded-md border px-3 py-2 text-xs ${
                    correct
                      ? "border-highlight/60 bg-highlight/15"
                      : "border-accent/40 bg-accent/10"
                  }`}
                  role="status"
                >
                  <strong className="font-semibold">
                    {correct ? "Nice — " : `Best fit: ${categories.find((c) => c.id === e.answer)?.label}. `}
                  </strong>
                  {e.because}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-6 rounded-lg border border-dashed border-border bg-secondary/40 p-4 text-sm">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Progress
        </span>
        <div className="mt-1">
          {answered} of {examples.length} answered · {score} exactly right.{" "}
          <span className="text-muted-foreground">
            (There are defensible second choices for most of these — that's the
            point.)
          </span>
        </div>
      </div>
    </div>
  );
}
