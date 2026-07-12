import type { Stage } from "../schema";

export const stage: Stage = {
  id: "orientation",
  order: 0,
  title: "Orientation, AI Literacy, and Digital Foundations",
  purpose:
    "Give a complete beginner an honest map of AI, of how modern computers and the web actually work at a conceptual level, and of how to learn a technical subject well without prior programming or math background.",
  startingLevel:
    "You have never written code. You are unsure what AI actually is versus what marketing claims. You are comfortable using a phone or laptop for everyday tasks.",
  prerequisites: [],
  project: {
    title: "Personal Learning Map",
    description:
      "Produce a written learning map describing your goals, honest starting level, a 12-week study plan across the five learning verbs (Learn, Visualize, Practice, Build, Reflect), and how you will notice when you are confused.",
  },
  exitCriteria: [
    "Explain in plain English what AI, machine learning, and deep learning are, and how they relate.",
    "Describe the difference between narrow AI, general intelligence claims, and current systems.",
    "Explain what a computer program is and why we need programming languages.",
    "Follow a structured study plan and track your own progress honestly.",
    "Use a browser, files, and the internet with intent (not just habit).",
  ],
  status: "planned",
  modules: [
    {
      id: "orientation-ai-literacy",
      order: 1,
      title: "What AI Actually Is",
      summary:
        "Build honest intuition for what AI systems do, what they do not do, and how today's landscape emerged.",
      lessons: [
        {
          id: "orientation-ai-literacy-what-is-ai",
          order: 1,
          title: "What Is AI, Really?",
          outcome:
            "Distinguish AI, machine learning, deep learning, and rules-based software in plain English.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-ai-literacy-history",
          order: 2,
          title: "A Short, Honest History of AI",
          outcome:
            "Sketch how symbolic AI, statistical learning, and modern deep learning built on one another.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-ai-literacy-landscape",
          order: 3,
          title: "The AI Landscape Today",
          outcome:
            "Name the major categories of modern AI systems and give a concrete example of each.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-ai-literacy-hype-vs-reality",
          order: 4,
          title: "Hype, Fear, and What Is Actually True",
          outcome:
            "Evaluate common AI claims against what current systems demonstrably do and do not do.",
          effort: "45–60 min",
          status: "planned",
        },
        {
          id: "orientation-ai-literacy-ethics-intro",
          order: 5,
          title: "Why Responsible AI Starts on Day One",
          outcome:
            "Explain why bias, misuse, and safety are engineering concerns, not afterthoughts.",
          effort: "30–45 min",
          status: "planned",
        },
      ],
    },
    {
      id: "orientation-digital-foundations",
      order: 2,
      title: "Digital Foundations",
      summary:
        "Learn what a computer, a program, and the internet actually are at a conceptual level — the mental models programming will refine later.",
      lessons: [
        {
          id: "orientation-digital-foundations-what-is-computer",
          order: 1,
          title: "What Is a Computer?",
          outcome:
            "Describe a computer as an input-process-output machine that runs instructions on data.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-digital-foundations-what-is-program",
          order: 2,
          title: "What Is a Program?",
          outcome:
            "Explain why we write programs in languages, and what happens between source code and execution.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-digital-foundations-internet-basics",
          order: 3,
          title: "What Is the Internet, Really?",
          outcome:
            "Trace, at a conceptual level, what happens when you open a website.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-digital-foundations-data-around-us",
          order: 4,
          title: "Data Is Everywhere",
          outcome:
            "Recognise where data comes from, what forms it takes, and why AI depends on it.",
          effort: "30–45 min",
          status: "planned",
        },
      ],
    },
    {
      id: "orientation-learning-well",
      order: 3,
      title: "Learning to Learn",
      summary:
        "Adopt the study habits and metacognitive skills that separate learners who finish from learners who stall.",
      lessons: [
        {
          id: "orientation-learning-well-how-to-learn",
          order: 1,
          title: "How to Learn a Technical Subject Well",
          outcome:
            "Apply retrieval, spacing, worked examples, and reflection to your own study.",
          effort: "45–60 min",
          status: "planned",
        },
        {
          id: "orientation-learning-well-notice-confusion",
          order: 2,
          title: "How to Notice Confusion",
          outcome:
            "Use specific cues to catch confusion early and repair it before it compounds.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-learning-well-ai-assisted",
          order: 3,
          title: "Using AI Tools to Learn Without Being Fooled",
          outcome:
            "Use LLM tutors to accelerate learning while defending against confident-sounding errors.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-learning-well-study-plan",
          order: 4,
          title: "Designing Your Own Study Plan",
          outcome: "Build a realistic weekly plan using the Learn-Visualize-Practice-Build-Reflect rhythm.",
          effort: "45–60 min",
          status: "planned",
        },
      ],
    },
    {
      id: "orientation-path-ahead",
      order: 4,
      title: "The Path Ahead",
      summary:
        "See the whole 13-stage journey, its dependencies, and what a professional AI engineer actually does day to day.",
      lessons: [
        {
          id: "orientation-path-ahead-roadmap",
          order: 1,
          title: "The 13-Stage Roadmap",
          outcome: "Explain the arc from computer literacy to shipping AI systems in production.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-path-ahead-what-engineers-do",
          order: 2,
          title: "What AI Engineers Actually Do",
          outcome:
            "Describe realistic AI engineering roles beyond training-huge-models stereotypes.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-path-ahead-tools-preview",
          order: 3,
          title: "Preview of the Toolchain",
          outcome:
            "Recognise the tools you will meet — terminals, editors, Python, notebooks, git, PyTorch — without needing to use them yet.",
          effort: "30–45 min",
          status: "planned",
        },
        {
          id: "orientation-path-ahead-commit",
          order: 4,
          title: "Committing to the Journey",
          outcome:
            "Sign your own learning contract: goals, pace, and how you will hold yourself accountable.",
          effort: "20–30 min",
          status: "planned",
        },
      ],
    },
  ],
};
