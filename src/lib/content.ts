// Learn AI — content model
// Content-first, typed. Statuses gate which stages/lessons are live.

export type Status = "available" | "in-development" | "planned";

export type Level =
  | "Absolute beginner"
  | "Beginner"
  | "Beginner → Intermediate"
  | "Intermediate"
  | "Intermediate → Advanced"
  | "Advanced";

export interface Module {
  id: string;
  title: string;
  summary: string;
}

export interface StageProject {
  title: string;
  blurb: string;
  artifact: string; // what the learner walks away with
}

export interface Stage {
  id: string; // stable slug
  number: number; // 1..10
  title: string;
  level: Level;
  pacing: string; // human-readable pacing hint
  summary: string; // beginner-friendly one-paragraph
  modules: [Module, Module, Module, Module]; // exactly four representative modules
  project: StageProject;
  outcome: string; // "By the end, you can…"
  prerequisites: string[]; // stage ids
  status: Status;
}

export const pillars = [
  {
    key: "learn",
    title: "Learn",
    tagline: "Read clear, jargon-free explanations.",
    body: "Short, honest lessons that assume nothing. Every concept starts with plain language, then earns its vocabulary.",
    icon: "01",
  },
  {
    key: "visualize",
    title: "Visualize",
    tagline: "See how ideas actually work.",
    body: "Diagrams, animations and small interactive demos — because concepts stop being magic once you can watch them happen.",
    icon: "02",
  },
  {
    key: "practice",
    title: "Practice",
    tagline: "Small exercises, real intuition.",
    body: "Bite-sized drills and thought experiments you can do in a browser tab. Instant feedback, no setup, no shame.",
    icon: "03",
  },
  {
    key: "build",
    title: "Build",
    tagline: "Ship something you can show.",
    body: "Guided projects at every stage. Each one leaves you with a working artifact, a repo, and a story to tell.",
    icon: "04",
  },
  {
    key: "reflect",
    title: "Reflect",
    tagline: "Turn practice into understanding.",
    body: "End-of-lesson prompts and community reviews. Learning sticks when you write it down and hear it back.",
    icon: "05",
  },
] as const;

export const stages: Stage[] = [
  {
    id: "orientation",
    number: 1,
    title: "Orientation: AI, Computers, and the Learning Journey",
    level: "Absolute beginner",
    pacing: "~1 week · 3–4 hrs",
    summary:
      "Meet the field. What AI actually is (and isn't), how computers came to run it, and how this course will take you from here to shipping real systems — without shortcuts you'll regret later.",
    modules: [
      { id: "what-is-ai", title: "What Is AI, Really?", summary: "Cut through hype. Build a mental model you can actually reason with." },
      { id: "landscape", title: "The AI Landscape Today", summary: "Models, tools, and roles — a map of the territory before you start walking." },
      { id: "how-to-learn", title: "How to Learn This Well", summary: "The rhythm: Learn, Visualize, Practice, Build, Reflect — and why it works." },
      { id: "path-ahead", title: "The Path Ahead", summary: "A tour of the ten stages and the kind of engineer they'll turn you into." },
    ],
    project: {
      title: "Your AI Learning Map",
      blurb: "Write a one-page personal map: what you want AI to help you do, and which stages get you there fastest.",
      artifact: "A markdown file in your first repo.",
    },
    outcome:
      "explain what AI is in plain language, describe the landscape without buzzwords, and know exactly how to move through this curriculum.",
    prerequisites: [],
    status: "available",
  },
  {
    id: "computers",
    number: 2,
    title: "Understanding Computers",
    level: "Absolute beginner",
    pacing: "~2 weeks · 5 hrs/wk",
    summary:
      "Before you tell a computer what to do, understand what it is. Files, memory, the command line, and how the internet actually moves bytes — the invisible ground everything else stands on.",
    modules: [
      { id: "hardware-software", title: "Hardware, Software, and the OS", summary: "What a program actually is when it's running." },
      { id: "files-and-terminal", title: "Files, Folders, and the Terminal", summary: "The command line, demystified — your new home base." },
      { id: "how-internet-works", title: "How the Internet Works", summary: "Requests, responses, and why APIs exist." },
      { id: "dev-setup", title: "Setting Up Your Machine", summary: "A clean, professional development environment — installed once, used forever." },
    ],
    project: {
      title: "Your First Developer Setup",
      blurb: "Install a terminal, a code editor, and Git. Make your first commit — before you write a single line of code.",
      artifact: "A working dev environment and a public GitHub profile.",
    },
    outcome:
      "navigate a computer like an engineer — terminal, files, git — and reason about what a program is doing beneath the surface.",
    prerequisites: ["orientation"],
    status: "available",
  },
  {
    id: "thinking-programmer",
    number: 3,
    title: "Thinking Like a Programmer",
    level: "Beginner",
    pacing: "~3 weeks · 5 hrs/wk",
    summary:
      "Programming is a way of thinking before it's a language. Decompose problems, spot patterns, express logic clearly — the skills that survive every framework change.",
    modules: [
      { id: "decomposition", title: "Decomposition and Abstraction", summary: "Break big problems into small, solvable ones." },
      { id: "logic-flow", title: "Logic and Flow", summary: "Conditions, loops, and how to reason about state." },
      { id: "pseudocode", title: "Pseudocode Before Code", summary: "Write the solution in English first — then translate." },
      { id: "debugging-mindset", title: "The Debugging Mindset", summary: "Read errors as friends, not enemies. Isolate, test, learn." },
    ],
    project: {
      title: "Solve Ten Real Problems in Pseudocode",
      blurb: "Ten small, everyday problems solved on paper — the same way senior engineers plan before they code.",
      artifact: "A notebook of solved problems, ready to translate into Python.",
    },
    outcome:
      "take a fuzzy problem, break it into pieces, and describe a working solution before you touch a keyboard.",
    prerequisites: ["computers"],
    status: "in-development",
  },
  {
    id: "python",
    number: 4,
    title: "Building Software with Python",
    level: "Beginner",
    pacing: "~5 weeks · 6 hrs/wk",
    summary:
      "Learn Python the way professionals actually use it: variables, functions, files, modules, testing, and version control — all wired together into small, real programs.",
    modules: [
      { id: "python-basics", title: "Python Fundamentals", summary: "Values, variables, functions — the vocabulary of code." },
      { id: "data-structures", title: "Lists, Dicts, and Beyond", summary: "The everyday containers you'll use for the rest of your career." },
      { id: "modules-testing", title: "Modules, Packages, and Testing", summary: "Structure code, reuse it, and prove it works." },
      { id: "cli-tools", title: "Build a Real CLI Tool", summary: "A small program that does one useful thing well." },
    ],
    project: {
      title: "A Personal Command-Line Assistant",
      blurb: "A Python CLI that manages notes, todos, or bookmarks — with tests, a README, and clean structure.",
      artifact: "A working CLI on GitHub with a real README.",
    },
    outcome:
      "write, structure, and test small Python programs end-to-end — the foundation everything AI-related sits on.",
    prerequisites: ["thinking-programmer"],
    status: "in-development",
  },
  {
    id: "data",
    number: 5,
    title: "Working with Data",
    level: "Beginner → Intermediate",
    pacing: "~4 weeks · 6 hrs/wk",
    summary:
      "AI is data plus math. Clean it, explore it, visualize it — and pick up just enough statistics and linear algebra to reason about what a model is really doing.",
    modules: [
      { id: "data-wrangling", title: "Loading and Cleaning Data", summary: "Pandas, CSVs, and the reality of messy inputs." },
      { id: "exploration", title: "Exploration and Visualization", summary: "See the shape of the data before touching a model." },
      { id: "stats-intuition", title: "Statistics You'll Actually Use", summary: "Mean, variance, distributions — intuition first, formulas second." },
      { id: "linear-algebra", title: "Linear Algebra, Gently", summary: "Vectors and matrices as ideas, not walls of symbols." },
    ],
    project: {
      title: "A Data Story",
      blurb: "Pick a public dataset. Ask a real question. Answer it with charts and a short written argument.",
      artifact: "A notebook and a blog-style write-up.",
    },
    outcome:
      "load, clean, explore, and describe a real dataset — with math intuition strong enough to trust your conclusions.",
    prerequisites: ["python"],
    status: "planned",
  },
  {
    id: "ml",
    number: 6,
    title: "Machine Learning",
    level: "Intermediate",
    pacing: "~5 weeks · 6 hrs/wk",
    summary:
      "How machines actually learn from data: features, models, training, evaluation. Build classical ML systems by hand before you trust any framework's magic.",
    modules: [
      { id: "supervised-learning", title: "Supervised Learning", summary: "Regression and classification, from first principles." },
      { id: "training-eval", title: "Training and Evaluation", summary: "Loss, overfitting, validation — the game beneath the game." },
      { id: "trees-forests", title: "Trees, Forests, and Ensembles", summary: "The workhorses of real-world ML." },
      { id: "unsupervised", title: "Clustering and Dimensionality", summary: "Finding structure when no one labeled anything." },
    ],
    project: {
      title: "A Real-World Predictor",
      blurb: "Predict something meaningful — house prices, churn, spam — end-to-end, with honest evaluation.",
      artifact: "A trained model, an eval report, and a repo.",
    },
    outcome:
      "frame a problem as ML, train and evaluate a model responsibly, and explain exactly why it works (or doesn't).",
    prerequisites: ["data"],
    status: "planned",
  },
  {
    id: "deep-learning",
    number: 7,
    title: "Deep Learning",
    level: "Intermediate → Advanced",
    pacing: "~5 weeks · 7 hrs/wk",
    summary:
      "Neural networks, demystified. Build one from scratch in NumPy, then in PyTorch — until backpropagation feels obvious instead of mystical.",
    modules: [
      { id: "neurons", title: "Neurons and Networks", summary: "From a single unit to a deep stack." },
      { id: "backprop", title: "Gradient Descent and Backprop", summary: "The one algorithm behind all of modern AI." },
      { id: "pytorch", title: "PyTorch, End-to-End", summary: "The professional tool, used the professional way." },
      { id: "cnns-rnns", title: "CNNs and Sequence Models", summary: "How networks see images and read sequences." },
    ],
    project: {
      title: "A Neural Network From Scratch",
      blurb: "About 200 lines of Python. Train it on a real dataset. Watch it learn.",
      artifact: "A repo with a hand-built network and a PyTorch equivalent.",
    },
    outcome:
      "explain what a neural network is doing at every step, and train one from scratch and in PyTorch with confidence.",
    prerequisites: ["ml"],
    status: "planned",
  },
  {
    id: "llms",
    number: 8,
    title: "Large Language Models",
    level: "Advanced",
    pacing: "~4 weeks · 6 hrs/wk",
    summary:
      "Tokens, attention, transformers, training. Understand LLMs from the inside — then use that understanding to prompt, fine-tune, and evaluate them like an expert.",
    modules: [
      { id: "tokens-embeddings", title: "Tokens and Embeddings", summary: "How text becomes math." },
      { id: "attention-transformers", title: "Attention and Transformers", summary: "The architecture behind ChatGPT — visualized." },
      { id: "prompting-eval", title: "Prompting and Evaluation", summary: "Get reliable output. Prove it's reliable." },
      { id: "fine-tuning", title: "Fine-Tuning and Adaptation", summary: "Make a general model specifically yours." },
    ],
    project: {
      title: "A Tiny Transformer",
      blurb: "Train a small transformer on a book. Watch attention heads discover grammar.",
      artifact: "A working from-scratch transformer and a training log.",
    },
    outcome:
      "read an LLM paper, explain a transformer at a whiteboard, and choose the right prompting or fine-tuning approach for a real task.",
    prerequisites: ["deep-learning"],
    status: "planned",
  },
  {
    id: "ai-engineering",
    number: 9,
    title: "AI Engineering",
    level: "Advanced",
    pacing: "~5 weeks · 7 hrs/wk",
    summary:
      "Turn models into products. RAG, agents, tool use, evaluation harnesses, guardrails, cost and latency — the unglamorous work that separates demos from real systems.",
    modules: [
      { id: "rag", title: "Retrieval-Augmented Generation", summary: "Chunk, embed, retrieve, answer — from scratch." },
      { id: "agents-tools", title: "Agents and Tool Use", summary: "Give models hands. Keep them honest." },
      { id: "eval-harness", title: "Building an Eval Harness", summary: "Stop guessing whether prompts got better." },
      { id: "ops", title: "Cost, Latency, and Safety", summary: "The production reality most tutorials skip." },
    ],
    project: {
      title: "A Production-Grade RAG System",
      blurb: "Build a RAG app over your own documents, with retrieval evals, guardrails, and a deployed demo.",
      artifact: "A deployed app, a repo, and an eval report.",
    },
    outcome:
      "design, build, evaluate, and deploy an AI system that behaves reliably in production — not just in a demo.",
    prerequisites: ["llms"],
    status: "planned",
  },
  {
    id: "capstone",
    number: 10,
    title: "Professional Practice and Capstone",
    level: "Advanced",
    pacing: "~6 weeks · self-directed",
    summary:
      "Behave like the AI engineer you now are. Choose a specialization, build a real capstone, contribute to open source, and prepare for interviews or your own launch.",
    modules: [
      { id: "specialization", title: "Choose a Specialization", summary: "Research, product, or infrastructure — pick a track." },
      { id: "capstone-design", title: "Design Your Capstone", summary: "A meaningful project that shows the shape of your thinking." },
      { id: "open-source", title: "Contribute to Open Source", summary: "Merge your first pull request in a real AI project." },
      { id: "career", title: "Interviews and Launching", summary: "How to talk about what you've built — and get paid for it." },
    ],
    project: {
      title: "Your Public Capstone",
      blurb: "A significant, documented AI project — the piece of work you'll point to for years.",
      artifact: "A repo, a demo, a write-up, and a portfolio site.",
    },
    outcome:
      "present yourself as a working AI engineer — with a portfolio, a specialization, and a real understanding of the craft.",
    prerequisites: ["ai-engineering"],
    status: "planned",
  },
];

export const stagesById: Record<string, Stage> = Object.fromEntries(
  stages.map((s) => [s.id, s]),
);

export const statusLabel: Record<Status, string> = {
  available: "Available now",
  "in-development": "In development",
  planned: "Planned",
};

// Featured lesson slugs (the ones that actually have pages today)
export const availableLessons = [
  { stageId: "orientation", moduleId: "what-is-ai", path: "/lessons/orientation/what-is-ai" },
  { stageId: "orientation", moduleId: "landscape", path: "/lessons/orientation/landscape" },
  { stageId: "orientation", moduleId: "how-to-learn", path: "/lessons/orientation/how-to-learn" },
  { stageId: "orientation", moduleId: "path-ahead", path: "/lessons/orientation/path-ahead" },
  { stageId: "computers", moduleId: "hardware-software", path: "/lessons/computers/hardware-software" },
  { stageId: "computers", moduleId: "files-and-terminal", path: "/lessons/computers/files-and-terminal" },
  { stageId: "computers", moduleId: "how-internet-works", path: "/lessons/computers/how-internet-works" },
  { stageId: "computers", moduleId: "dev-setup", path: "/lessons/computers/dev-setup" },
] as const;

export function lessonPathFor(stageId: string, moduleId: string): string | null {
  const hit = availableLessons.find(
    (l) => l.stageId === stageId && l.moduleId === moduleId,
  );
  return hit ? hit.path : null;
}

