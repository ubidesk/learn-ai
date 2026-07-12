import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "60–90 min";

export const stage: Stage = {
  id: "capstone",
  order: 12,
  title: "Professional AI Engineering, Open Source, and Capstone",
  purpose:
    "Consolidate everything into a professional identity: a portfolio, a way of working, a stance on responsible AI, and a capstone project that demonstrates real capability end-to-end.",
  startingLevel:
    "You have completed all prior stages and can build, deploy, and operate AI systems.",
  prerequisites: ["mlops"],
  project: {
    title: "Learn AI Capstone",
    description:
      "Ship a substantial, publicly documented AI system of your choosing — a real product, a research reproduction, or an open-source contribution — with a written case study covering design, evaluation, ethics, and operations.",
  },
  exitCriteria: [
    "Present a coherent professional portfolio with 3+ substantial projects.",
    "Contribute meaningfully to a real open-source AI project.",
    "Argue for and defend design decisions in a formal review.",
    "Articulate a personal stance on responsible AI.",
    "Plan the next 12 months of your growth as an AI engineer.",
  ],
  status: S,
  modules: [
    {
      id: "capstone-professional-practice",
      order: 1,
      title: "Working as a Professional AI Engineer",
      summary: "How AI engineering actually happens inside real organisations.",
      lessons: [
        { id: "capstone-prof-roles", order: 1, title: "AI Roles and Career Paths", outcome: "Map roles (research, applied, platform, MLOps, product) to real work.", effort: eff, status: S },
        { id: "capstone-prof-collaboration", order: 2, title: "Working With Researchers, PMs, and Designers", outcome: "Collaborate across disciplines without lowest-common-denominator work.", effort: eff, status: S },
        { id: "capstone-prof-communication", order: 3, title: "Communicating ML Results Honestly", outcome: "Present results to executives, users, and regulators appropriately.", effort: eff, status: S },
        { id: "capstone-prof-reviews", order: 4, title: "Design Reviews and Postmortems", outcome: "Run and participate in design reviews and postmortems.", effort: eff, status: S },
      ],
    },
    {
      id: "capstone-open-source",
      order: 2,
      title: "Open Source and Community",
      summary: "Contributing to the ecosystem you learned from.",
      lessons: [
        { id: "capstone-oss-reading", order: 1, title: "Reading Large Codebases", outcome: "Orient in a large open-source repo quickly.", effort: eff, status: S },
        { id: "capstone-oss-first-contrib", order: 2, title: "Making Your First Real Contribution", outcome: "Submit a first substantive PR and see it merged.", effort: eff, status: S },
        { id: "capstone-oss-maintenance", order: 3, title: "Maintaining an Open-Source Project", outcome: "Maintain a project responsibly: issues, releases, community.", effort: eff, status: S },
        { id: "capstone-oss-ethics", order: 4, title: "Licensing, Attribution, and AI Ethics in OSS", outcome: "Navigate licensing and attribution correctly.", effort: eff, status: S },
      ],
    },
    {
      id: "capstone-portfolio",
      order: 3,
      title: "Portfolio and Public Presence",
      summary: "Making your capability legible to the world.",
      lessons: [
        { id: "capstone-port-portfolio", order: 1, title: "Building a Real Portfolio", outcome: "Curate 3+ substantive projects that show progression.", effort: eff, status: S },
        { id: "capstone-port-writing", order: 2, title: "Writing About Your Work", outcome: "Write case studies and technical posts that are actually read.", effort: eff, status: S },
        { id: "capstone-port-interviewing", order: 3, title: "AI Engineering Interviews", outcome: "Prepare for and pass modern AI engineering interviews.", effort: eff, status: S },
        { id: "capstone-port-freelance", order: 4, title: "Freelance, Consulting, and Independent Work", outcome: "Understand the independent path if you choose it.", effort: eff, status: S },
      ],
    },
    {
      id: "capstone-project",
      order: 4,
      title: "The Capstone Project",
      summary: "The single artefact that proves everything.",
      lessons: [
        { id: "capstone-cap-scoping", order: 1, title: "Scoping a Capstone", outcome: "Choose and scope a capstone you can actually finish.", effort: eff, status: S },
        { id: "capstone-cap-execution", order: 2, title: "Executing and Documenting", outcome: "Execute the plan while keeping documentation honest.", effort: eff, status: S },
        { id: "capstone-cap-evaluation", order: 3, title: "Evaluating and Iterating", outcome: "Evaluate rigorously and iterate deliberately.", effort: eff, status: S },
        { id: "capstone-cap-launch", order: 4, title: "Launching and Reflecting", outcome: "Launch publicly and write a candid reflection.", effort: eff, status: S },
      ],
    },
    {
      id: "capstone-next",
      order: 5,
      title: "What Comes Next",
      summary: "You have finished Learn AI. Now what?",
      lessons: [
        { id: "capstone-next-specialisations", order: 1, title: "Choosing a Specialisation", outcome: "Choose a specialisation track (see Specialisations) that fits you.", effort: eff, status: S },
        { id: "capstone-next-research", order: 2, title: "Reading and Doing Research", outcome: "Read papers and attempt a small original contribution.", effort: eff, status: S },
        { id: "capstone-next-teaching", order: 3, title: "Teaching Others", outcome: "Teach what you learned; deepen it in the process.", effort: eff, status: S },
        { id: "capstone-next-ongoing", order: 4, title: "Staying Sharp", outcome: "Design an ongoing learning loop for a fast-moving field.", effort: eff, status: S },
      ],
    },
  ],
};
