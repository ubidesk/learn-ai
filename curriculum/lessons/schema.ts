/**
 * Lesson body schema — the authored content that turns a spine entry into a
 * full lesson experience. Kept separate from `curriculum/schema.ts` so the
 * spine stays lightweight and framework-agnostic.
 *
 * Every lesson follows the Learn AI rhythm:
 *   Curiosity → Why This Matters → Intuition → Visual → Explanation →
 *   Experiment → Reflection → Modern AI Connection → Knowledge Check →
 *   Next Step.
 */

/** A single beginner-friendly quiz question with per-option feedback. */
export interface KnowledgeCheckOption {
  text: string;
  correct: boolean;
  feedback: string;
}

export interface KnowledgeCheck {
  question: string;
  options: KnowledgeCheckOption[];
}

/**
 * Key of an interactive experiment component registered in
 * `src/components/lesson/interactives.tsx`. The renderer looks up the
 * component by this key and passes `data` through untyped so authors can
 * pass small payloads without expanding the union here.
 */
export type InteractiveKey =
  // Stage 1 — Orientation
  | "ai-family-tree"
  | "rules-vs-ml-vs-dl"
  | "approach-tradeoff-lab"
  | "narrow-vs-general"
  | "ai-history-timeline"
  | "hype-vs-reality"
  | "category-matcher"
  | "foundation-model-adapter"
  | "generative-vs-predictive"
  | "agent-toolbelt"
  | "task-fit-predictor"
  | "learning-science-cards"
  | "spacing-scheduler"
  | "confusion-detector"
  | "ai-tutor-crosscheck"
  | "study-plan-builder"
  | "input-process-output"
  | "source-to-execution"
  | "internet-trace"
  | "data-forms"
  | "browser-search-lab"
  | "file-tree-organiser"
  | "password-strength"
  | "toolchain-map"
  | "prompt-lab"
  | "prompt-delta"
  | "verify-the-ai"
  | "learning-contract"
  // Stage 2 — Computers, OS, Networks, Web
  | "binary-decoder"
  | "number-encoding"
  | "unicode-inspector"
  | "media-bytes"
  | "cpu-cycle"
  | "memory-hierarchy"
  | "storage-picker"
  | "io-bottleneck"
  | "source-to-machine"
  | "exec-modes"
  | "process-memory-map"
  | "concurrency-vs-parallel"
  | "os-role"
  | "permissions-lab"
  | "signals-lab"
  | "virtual-memory"
  | "package-manager"
  | "shell-prompt"
  | "shell-navigator"
  | "pipe-composer"
  | "text-tools"
  | "shell-script"
  | "packet-hop"
  | "tcp-vs-udp"
  | "dns-resolver"
  | "latency-ladder"
  | "http-inspector"
  | "tls-handshake"
  | "url-decoder"
  | "page-load-trace"
  | "cloud-responsibility"
  | "iaas-paas-saas"
  | "region-picker"
  | "deployment-unit"
  | "cloud-cost";

export interface Interactive {
  /** Which component to mount. */
  component: InteractiveKey;
  /** Optional configuration payload passed through to the component. */
  data?: unknown;
  /** One-line caption shown above the interactive. */
  caption: string;
}

/** A rich prose paragraph. Markdown-lite is not parsed — keep it plain. */
export type Paragraph = string;

export interface LessonBody {
  /** Hook: a short scenario or question that opens the lesson. */
  curiosity: Paragraph;
  /** Why the learner should care — grounded, non-hypey. */
  whyThisMatters: Paragraph;
  /** Everyday-life analogies that build the mental model. Bullet items. */
  intuition: Paragraph[];
  /** A caption + interactive component that makes the idea visible. */
  visual: Interactive;
  /** Plain-English explanation of the mechanics. Paragraphs. */
  explanation: Paragraph[];
  /** A small hands-on experiment — usually the same or a second interactive. */
  experiment: Interactive & { instructions: Paragraph };
  /** Reflection prompts the learner writes about (not persisted). */
  reflection: Paragraph[];
  /** One paragraph tying this lesson to real modern AI systems. */
  modernAiConnection: Paragraph;
  /** One accessible multiple-choice check with per-option feedback. */
  knowledgeCheck: KnowledgeCheck;
  /** Optional forward hint about what the next lesson builds on. */
  nextStepHint?: Paragraph;
}
