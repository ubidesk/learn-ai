import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "capstone",
  order: 12,
  title: "Professional AI Engineering, Open Source, and Capstone",
  purpose:
    "Turn a technically capable AI engineer into a professional who can discover problems worth solving, design and defend systems, write clearly, contribute to open source, prepare for a career, and finish a real capstone in public.",
  startingLevel:
    "You can build, deploy, and operate AI systems. You have not led product discovery, contributed to a serious open-source project, or defended your own work publicly.",
  prerequisites: ["mlops"],
  project: {
    title: "Public Capstone Project",
    description:
      "Discover, design, build, defend, and publicly release a capstone project — a working AI system with a design doc, an evaluation harness, a live deployment, a written retrospective, and an open-source contribution alongside it.",
  },
  exitCriteria: [
    "Discover and frame a problem worth solving with AI.",
    "Design, defend, and communicate a system in writing and in a talk.",
    "Contribute a substantive change to an existing open-source project.",
    "Ship a public capstone with an honest evaluation and retrospective.",
    "Present yourself credibly for AI engineering roles or freelance work.",
  ],
  status: S,
  modules: [
    {
      id: "cap-product-discovery",
      order: 1,
      title: "Product Discovery",
      summary: "Finding problems worth an AI solution — before writing any code.",
      lessons: [
        L("cap-product-discovery-stakeholder", 1, "Stakeholder Research", "Interview stakeholders and extract real problems."),
        L("cap-product-discovery-ai-suitability", 2, "AI Suitability", "Decide honestly whether a given problem should use AI at all."),
        L("cap-product-discovery-framing", 3, "Problem Framing", "Turn a fuzzy problem into a crisp problem statement."),
        L("cap-product-discovery-scope", 4, "Scope and Non-Goals", "Write a scope document that says what you will not build."),
      ],
    },
    {
      id: "cap-technical-design",
      order: 2,
      title: "Technical Design",
      summary: "Design docs, contracts, evaluation plans, and risk analysis.",
      lessons: [
        L("cap-technical-design-design-docs", 1, "Design Docs", "Write a design doc reviewers can actually critique."),
        L("cap-technical-design-interfaces", 2, "Interfaces and Contracts", "Specify contracts between components."),
        L("cap-technical-design-eval-strategy", 3, "Evaluation Strategy", "Design the eval before designing the model."),
        L("cap-technical-design-risk", 4, "Risk Analysis", "Enumerate risks and pre-mortem the plan."),
      ],
    },
    {
      id: "cap-execution",
      order: 3,
      title: "Project Execution",
      summary: "Executing a real technical project — milestones, demos, and living with uncertainty.",
      lessons: [
        L("cap-execution-milestones", 1, "Milestones and Backlogs", "Break a project into milestones you can actually finish."),
        L("cap-execution-demos-reviews", 2, "Demos and Reviews", "Run demos and reviews that surface truth."),
        L("cap-execution-uncertainty", 3, "Working Well Under Uncertainty", "Make progress when the plan is wrong every week."),
      ],
    },
    {
      id: "cap-communication",
      order: 4,
      title: "Technical Communication",
      summary: "Writing, diagramming, presenting, and reviewing technical work.",
      lessons: [
        L("cap-communication-writing", 1, "Writing Technical Prose Well", "Write short, precise technical prose."),
        L("cap-communication-diagrams", 2, "Diagrams That Explain", "Draw diagrams that reduce confusion instead of adding it."),
        L("cap-communication-presentations", 3, "Presenting Technical Work", "Present a system to an audience that must decide something."),
        L("cap-communication-code-reviews", 4, "Code Reviews", "Give and receive code reviews as a professional."),
      ],
    },
    {
      id: "cap-open-source",
      order: 5,
      title: "Open-Source Contribution",
      summary: "Working inside a codebase you don't own.",
      lessons: [
        L("cap-open-source-reading-codebases", 1, "Reading Large Codebases", "Navigate an unfamiliar codebase efficiently."),
        L("cap-open-source-issues-prs", 2, "Issues and Pull Requests", "Open a real issue and land a real PR."),
        L("cap-open-source-licensing-conduct", 3, "Licensing and Codes of Conduct", "Respect licences and community norms."),
        L("cap-open-source-sustaining", 4, "Sustaining a Project", "Maintain a small project you own without burning out."),
      ],
    },
    {
      id: "cap-career",
      order: 6,
      title: "Career Readiness",
      summary: "Portfolios, interviews, freelance work, and continuing education.",
      lessons: [
        L("cap-career-portfolios", 1, "Portfolios That Get Read", "Assemble a portfolio a hiring manager will actually finish."),
        L("cap-career-interviews", 2, "Interviews and Take-Homes", "Prepare for AI engineering interviews with intent."),
        L("cap-career-freelance", 3, "Freelance and Consulting Paths", "Choose freelance work deliberately."),
        L("cap-career-continuing", 4, "Continuing Education", "Design your next 12 months of learning."),
      ],
    },
    {
      id: "cap-capstone-discovery",
      order: 7,
      title: "Capstone Discovery and Design",
      summary: "The first phase of your capstone.",
      lessons: [
        L("cap-capstone-discovery-topic", 1, "Choosing Your Capstone", "Pick a capstone problem you can defend."),
        L("cap-capstone-discovery-design-doc", 2, "Capstone Design Doc", "Write the design doc that will guide execution."),
        L("cap-capstone-discovery-plan", 3, "Capstone Plan", "Break the capstone into milestones with real dates."),
      ],
    },
    {
      id: "cap-capstone-build",
      order: 8,
      title: "Capstone Build",
      summary: "Executing the capstone with the discipline of the earlier stages.",
      lessons: [
        L("cap-capstone-build-milestone-1", 1, "Build Milestone 1", "Reach the first end-to-end milestone."),
        L("cap-capstone-build-milestone-2", 2, "Build Milestone 2", "Reach a public-facing prototype."),
        L("cap-capstone-build-integration", 3, "Integration and Hardening", "Integrate, harden, and prepare for defence."),
      ],
    },
    {
      id: "cap-capstone-defense",
      order: 9,
      title: "Capstone Defense",
      summary: "Presenting and defending your capstone in public.",
      lessons: [
        L("cap-capstone-defense-red-team", 1, "Red-Team Your Own Project", "Attack your capstone before others do."),
        L("cap-capstone-defense-presentation", 2, "The Defence Presentation", "Present the capstone to a real audience."),
        L("cap-capstone-defense-critique", 3, "Receiving Critique Well", "Take critique seriously without collapsing."),
      ],
    },
    {
      id: "cap-portfolio-release",
      order: 10,
      title: "Public Portfolio Release",
      summary: "Publishing your capstone into the world.",
      lessons: [
        L("cap-portfolio-release-publish", 1, "Release and Publish", "Publish the capstone and its writeup in public."),
        L("cap-portfolio-release-retrospective", 2, "Retrospective and Next Steps", "Write an honest retrospective and pick your next problem."),
      ],
    },
  ],
};
