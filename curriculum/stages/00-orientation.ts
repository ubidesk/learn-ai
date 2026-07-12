import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "30–45 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "orientation",
  order: 0,
  title: "Orientation, AI Literacy, and Digital Foundations",
  purpose:
    "Give a complete beginner an honest map of AI, of how modern computers work at a conceptual level, and of how to learn a technical subject well without prior programming or math background.",
  startingLevel:
    "You have never written code. You use a phone and a laptop for everyday tasks but you do not know what an operating system, a shell, or an API is.",
  prerequisites: [],
  project: {
    title: "Personal Learning Map and First AI Experiment",
    description:
      "Produce a written learning map — your goals, honest starting level, a 12-week study plan across Learn, Visualize, Practice, Build, Reflect — and pair it with a short log of your first hands-on chat with an AI system, noting where it helped and where it misled you.",
  },
  exitCriteria: [
    "Explain in plain English what AI, machine learning, and deep learning are and how they relate.",
    "Distinguish narrow AI systems, general-intelligence claims, and current model capabilities.",
    "Describe what a computer program is and why we need programming languages.",
    "Follow a structured study plan and notice your own confusion.",
    "Use an AI assistant to accelerate your learning without being fooled by it.",
  ],
  status: S,
  modules: [
    {
      id: "orientation-what-ai-is",
      order: 1,
      title: "What AI Is and Is Not",
      summary:
        "Honest intuition for what AI systems actually do, how ML, deep learning, and rules-based software differ, and what today's models can and cannot do.",
      lessons: [
        L("orientation-what-ai-is-what-is-ai", 1, "What Is AI, Really?", "Distinguish AI, machine learning, deep learning, and rules-based software in plain English."),
        L("orientation-what-ai-is-ml-vs-dl-vs-rules", 2, "Rules, Learning, and Deep Learning", "Give a concrete example of a rules-based system, a classical ML system, and a deep-learning system."),
        L("orientation-what-ai-is-narrow-vs-general", 3, "Narrow AI vs General Intelligence", "Explain why today's systems are narrow, and what claims about AGI mean and don't mean."),
        L("orientation-what-ai-is-history", 4, "A Short, Honest History of AI", "Sketch how symbolic AI, statistical learning, and modern deep learning built on one another."),
        L("orientation-what-ai-is-hype-vs-reality", 5, "Hype, Fear, and What Is Actually True", "Evaluate common AI claims against what current systems demonstrably do and do not do."),
      ],
    },
    {
      id: "orientation-modern-landscape",
      order: 2,
      title: "The Modern AI Landscape",
      summary:
        "A tour of the categories of AI systems in production today — what they are for, where they excel, and where they fail.",
      lessons: [
        L("orientation-modern-landscape-categories", 1, "Categories of AI Today", "Name the major categories of modern AI systems and give a concrete example of each."),
        L("orientation-modern-landscape-foundation-models", 2, "Foundation Models Explained Simply", "Explain what a foundation model is and why the same model can be adapted to many tasks."),
        L("orientation-modern-landscape-generative-vs-predictive", 3, "Generative vs Predictive AI", "Distinguish generative and predictive systems and give an example of each in daily life."),
        L("orientation-modern-landscape-agents-and-tools", 4, "Agents, Tools, and Multi-Step AI", "Describe what an AI agent is and why calling tools changes what these systems can do."),
        L("orientation-modern-landscape-use-and-limits", 5, "Where AI Works and Where It Breaks", "Predict, for a given task, whether current AI is likely to help, mislead, or fail outright."),
      ],
    },
    {
      id: "orientation-how-to-learn",
      order: 3,
      title: "How to Learn Technical Subjects",
      summary:
        "The study habits and metacognitive skills that separate learners who finish this curriculum from learners who stall.",
      lessons: [
        L("orientation-how-to-learn-science", 1, "The Learning Science That Actually Works", "Explain retrieval, spacing, interleaving, worked examples, and reflection in plain English."),
        L("orientation-how-to-learn-retrieval-spacing", 2, "Retrieval and Spacing in Your Own Study", "Build a personal retrieval and spacing routine you can sustain for weeks."),
        L("orientation-how-to-learn-notice-confusion", 3, "How to Notice Confusion Early", "Use specific cues to catch confusion before it compounds across lessons."),
        L("orientation-how-to-learn-ai-tutors", 4, "Using AI Tutors Without Being Fooled", "Use LLM tutors to accelerate learning while cross-checking confident-sounding errors."),
        L("orientation-how-to-learn-study-plan", 5, "Designing Your Study Plan", "Build a realistic weekly plan across Learn-Visualize-Practice-Build-Reflect.", "45–60 min"),
      ],
    },
    {
      id: "orientation-digital-foundations",
      order: 4,
      title: "Digital Foundations",
      summary:
        "Conceptual mental models for what a computer, a program, the internet, and data actually are — the ideas the rest of the curriculum will refine.",
      lessons: [
        L("orientation-digital-foundations-what-is-computer", 1, "What Is a Computer?", "Describe a computer as an input-process-output machine that runs instructions on data."),
        L("orientation-digital-foundations-what-is-program", 2, "What Is a Program?", "Explain why we write programs in languages and what happens between source and execution."),
        L("orientation-digital-foundations-internet", 3, "What Is the Internet, Really?", "Trace, at a conceptual level, what happens when you open a website."),
        L("orientation-digital-foundations-data", 4, "Data Is Everywhere", "Recognise where data comes from, what forms it takes, and why AI depends on it."),
      ],
    },
    {
      id: "orientation-workspace",
      order: 5,
      title: "Developer Workspace Orientation",
      summary:
        "The everyday tools you already touch — browsers, files, accounts — treated with intent, plus a preview of the developer tools you will meet.",
      lessons: [
        L("orientation-workspace-browsers", 1, "Browsers, Tabs, and Search With Intent", "Use a browser as a research tool, including bookmarks, tabs, and searching primary sources."),
        L("orientation-workspace-files-and-cloud", 2, "Files, Folders, and Cloud Sync", "Organise your working files locally and in the cloud without losing work."),
        L("orientation-workspace-accounts-security", 3, "Accounts, Passwords, and Security Hygiene", "Adopt a password manager, MFA, and safe habits before you start creating dev accounts."),
        L("orientation-workspace-tools-preview", 4, "Preview of the Developer Toolchain", "Recognise the tools you will meet — terminals, editors, Python, notebooks, git, PyTorch."),
      ],
    },
    {
      id: "orientation-first-ai",
      order: 6,
      title: "First AI-Connected Experience",
      summary:
        "A hands-on first conversation with a modern AI system, treated with the same rigour as any other tool — probing, verifying, and reflecting.",
      lessons: [
        L("orientation-first-ai-chat-experiment", 1, "Your First Structured Chat With an AI", "Run a small guided experiment that shows what today's chat models are and are not."),
        L("orientation-first-ai-prompting-first-look", 2, "Prompting, First Look", "Change one thing at a time in a prompt and observe how outputs change."),
        L("orientation-first-ai-verifying-outputs", 3, "Verifying What an AI Told You", "Cross-check AI outputs against primary sources and note the failure modes you find."),
        L("orientation-first-ai-learning-contract", 4, "Signing Your Learning Contract", "Commit to goals, pace, and how you will hold yourself accountable through 13 stages.", "20–30 min"),
      ],
    },
  ],
};
