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
    tagline: "See how models actually think.",
    body: "Interactive diagrams for tokens, attention, gradients, and embeddings — because AI stops being magic once you can watch it happen.",
    icon: "02",
  },
  {
    key: "practice",
    title: "Practice",
    tagline: "Small exercises, real intuition.",
    body: "Bite-sized coding drills and prompt puzzles you can solve in a browser tab. Instant feedback, no setup, no shame.",
    icon: "03",
  },
  {
    key: "build",
    title: "Build",
    tagline: "Ship something you can show.",
    body: "Guided projects from a first chatbot to a full RAG pipeline. Each one leaves you with a repo, a demo, and a story.",
    icon: "04",
  },
  {
    key: "reflect",
    title: "Reflect",
    tagline: "Turn practice into understanding.",
    body: "End-of-chapter journaling prompts and community reviews. Learning sticks when you write it down and hear it back.",
    icon: "05",
  },
] as const;

export const journey = [
  {
    stage: "Foundations",
    level: "Beginner",
    weeks: "Weeks 1–3",
    summary: "What AI actually is, what it isn't, and the vocabulary you need to keep up.",
    topics: ["How models learn", "Prompts, tokens, context", "Ethics & limits", "Your first script"],
  },
  {
    stage: "Working with Models",
    level: "Beginner → Intermediate",
    weeks: "Weeks 4–7",
    summary: "Use LLMs like a pro: prompting patterns, tools, structured output, evaluation.",
    topics: ["Prompt engineering", "Function calling", "Structured output", "Evaluating quality"],
  },
  {
    stage: "Building Applications",
    level: "Intermediate",
    weeks: "Weeks 8–12",
    summary: "Chatbots, retrieval-augmented generation, agents — with the boring, important bits included.",
    topics: ["RAG from scratch", "Vector search", "Agents & tools", "Guardrails"],
  },
  {
    stage: "Under the Hood",
    level: "Intermediate → Advanced",
    weeks: "Weeks 13–18",
    summary: "The math and mechanics: neural networks, transformers, training loops — demystified.",
    topics: ["Gradient descent", "Transformers", "Fine-tuning", "Training economics"],
  },
  {
    stage: "Ship & Specialize",
    level: "Advanced",
    weeks: "Weeks 19+",
    summary: "Deploy real systems, pick a track (research, product, infra), and contribute back.",
    topics: ["Production LLMs", "Cost & latency", "Safety in practice", "Open contributions"],
  },
] as const;

export const featuredProjects = [
  {
    slug: "first-chatbot",
    title: "Your first chatbot",
    level: "Beginner",
    time: "2 hours",
    blurb: "Build a friendly assistant with memory. No frameworks, just the fundamentals — so you understand every line.",
    stack: ["Python", "LLM API", "CLI"],
  },
  {
    slug: "rag-from-scratch",
    title: "RAG from scratch",
    level: "Intermediate",
    time: "1 weekend",
    blurb: "Chunk, embed, retrieve, answer. Feed a model your own notes and watch it become genuinely useful.",
    stack: ["Embeddings", "Vector DB", "Prompting"],
  },
  {
    slug: "tiny-transformer",
    title: "A tiny transformer",
    level: "Advanced",
    time: "1 week",
    blurb: "~200 lines of code. Train it on a book. Watch attention heads learn grammar in front of you.",
    stack: ["PyTorch", "NumPy", "Patience"],
  },
  {
    slug: "eval-harness",
    title: "Your own eval harness",
    level: "Intermediate",
    time: "3 hours",
    blurb: "Stop guessing whether prompts got better. Build the scoring rig every AI team eventually wishes they had.",
    stack: ["Testing", "Metrics", "CI"],
  },
] as const;
