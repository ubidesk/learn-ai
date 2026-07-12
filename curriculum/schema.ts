/**
 * Curriculum schema — the shape of every stage, module, and lesson in the
 * authoritative Learn AI curriculum spine.
 *
 * This file defines TYPES only. Data lives in `curriculum/stages/*.ts` and is
 * aggregated by `curriculum/index.ts`. Content is intentionally
 * framework-agnostic so it can migrate to Markdown lesson files later.
 */

export type Status = "planned" | "drafting" | "published";

export interface Lesson {
  /** Globally unique lesson id, e.g. `python-foundations-syntax-variables`. */
  id: string;
  /** Order within the parent module, 1-indexed. */
  order: number;
  /** Short, plain-English title. */
  title: string;
  /** One-sentence learner-facing capability: "After this lesson you can…". */
  outcome: string;
  /** Honest effort estimate for a true beginner, e.g. `"30–60 min"`. */
  effort: string;
  /** Optional explicit prerequisite lesson ids. */
  prerequisites?: string[];
  /** Authoring status. All lessons start as `planned`. */
  status: Status;
}

export interface Module {
  /** Globally unique module id, e.g. `python-foundations-control-flow`. */
  id: string;
  /** Order within the parent stage, 1-indexed. */
  order: number;
  /** Short module title. */
  title: string;
  /** One-paragraph summary of what the module builds. */
  summary: string;
  /** Ordered list of lessons. */
  lessons: Lesson[];
}

export interface StageProject {
  title: string;
  description: string;
}

export interface Stage {
  /** Stable slug used in URLs, e.g. `python-foundations`. */
  id: string;
  /** Canonical 0..12 stage index. */
  order: number;
  /** Short stage title (without the leading number). */
  title: string;
  /** Why this stage exists and what the learner leaves with. */
  purpose: string;
  /** Honest description of who this stage is for at entry. */
  startingLevel: string;
  /** Stage ids that must come before this one. */
  prerequisites: string[];
  /** The capstone-style artifact learners produce for the stage. */
  project: StageProject;
  /** Concrete, testable signals that the stage is complete. */
  exitCriteria: string[];
  /** Authoring status for the stage as a whole. */
  status: Status;
  /** Ordered modules. */
  modules: Module[];
}

/** Cross-curriculum thread woven through many stages. */
export interface Thread {
  id: string;
  title: string;
  summary: string;
}

/** Optional specialization track, taken after the 13-stage core. */
export interface Track {
  id: string;
  title: string;
  summary: string;
  suggestedAfterStage: number;
}
