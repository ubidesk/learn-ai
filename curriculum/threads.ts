import type { Thread } from "./schema";

/**
 * Cross-curriculum threads run through many stages. They are not standalone
 * courses; they are habits and lenses reinforced continuously.
 */
export const threads: Thread[] = [
  {
    id: "mathematics",
    title: "Mathematics",
    summary:
      "Mathematical intuition is built early and reinforced throughout — never crammed at the end. Linear algebra, calculus, probability, and information theory appear wherever they are actually used.",
  },
  {
    id: "responsible-ai",
    title: "Responsible AI",
    summary:
      "Bias, fairness, safety, privacy, and honest evaluation are engineering concerns from stage 0. We refuse the pattern where ethics is a single elective at the end.",
  },
  {
    id: "professional-practice",
    title: "Professional Practice",
    summary:
      "Version control, testing, code review, documentation, and clear communication are practised from the first Python lesson onward, not sprinkled in later.",
  },
  {
    id: "communication",
    title: "Communication",
    summary:
      "Writing, diagramming, and presenting technical work honestly is a first-class skill. Every stage ends with an artefact you can show and defend.",
  },
  {
    id: "ai-assisted-learning",
    title: "AI-Assisted Learning",
    summary:
      "You will use AI tools to accelerate your own learning. We teach how to use them without being fooled by them — verifying, cross-referencing, and never outsourcing understanding.",
  },
];
