/**
 * Learn AI curriculum schema.
 *
 * This file is the type contract for the curriculum blueprint. It is
 * intentionally decoupled from any presentation code — the same data must
 * later drive the website, printable notes, and downstream authoring tools.
 *
 * Statuses are honest by construction: at this stage every milestone is
 * `blueprint` and every lesson is `planned`. No lesson body exists yet.
 */

export type MilestoneStatus = "blueprint" | "in_progress" | "published";
export type LessonStatus = "planned" | "drafting" | "review" | "published";

export type ProjectSize = "micro" | "small" | "medium" | "flagship";

/** Roadmap project reference (source of truth: docs/curriculum/PROJECT_ROADMAP.md). */
export interface RoadmapProjectRef {
  /** Roadmap ID, e.g. "M1.P1". */
  id: string;
  title: string;
  size: ProjectSize;
  /** Rough effort estimate in hours (matches roadmap). */
  hours: number;
  /** True when this is the milestone's gating flagship. */
  flagship?: boolean;
}

/** A single lesson specification — not a lesson body. */
export interface LessonSpec {
  id: string;
  title: string;
  /** Exactly one primary big idea per lesson. */
  bigIdea: string;
  whyItMatters: string;
  /** Observable learning objectives ("learner can ..."). */
  objectives: string[];
  /** Lesson IDs that must precede this one. Milestone-level prerequisites are on the module. */
  prerequisites: string[];
  keyConcepts: string[];
  /** One active practice activity (retrieval, prediction, debugging, modification, etc.). */
  practice: string;
  /** One concrete build step that contributes to a project artifact. */
  buildStep: string;
  /** How this connects to modern AI engineering. */
  aiConnection: string;
  /** Competency IDs from the Graduate Profile. */
  competencyIds: string[];
  /** Knowledge-domain codes from the Knowledge Architecture. */
  knowledgeDomains: string[];
  /** Honest beginner time in minutes. */
  estimatedMinutes: number;
  status: LessonStatus;
}

export interface Module {
  id: string;
  order: number;
  title: string;
  /** Practical purpose in one sentence. */
  purpose: string;
  /** Observable capabilities the learner leaves with. */
  outcomes: string[];
  /** IDs of prior modules or lessons that must be complete. */
  prerequisites: string[];
  lessons: LessonSpec[];
  /** Which roadmap project (or step of one) this module advances. */
  advancesProject: string;
  /** Authentic deliverable produced by finishing this module. */
  deliverable: string;
}

export interface Milestone {
  id: string;
  /** 1..10 */
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  entryState: string;
  exitCapability: string;
  /** IDs of milestones that must be complete first. */
  prerequisiteMilestones: string[];
  competencyIds: string[];
  knowledgeDomains: string[];
  modules: Module[];
  /** Roadmap projects in intended build order. */
  projects: RoadmapProjectRef[];
  /** Roadmap ID of the flagship project (must appear in `projects`). */
  flagshipProjectId: string;
  /** The gate a learner must clear to enter the next milestone. */
  gate: string;
  /** Honest estimated effort range in hours. */
  estimatedHours: { min: number; max: number };
  status: MilestoneStatus;
}

export interface CurriculumStats {
  milestones: number;
  modules: number;
  lessonSpecs: number;
  projects: number;
  totalEstimatedHoursMin: number;
  totalEstimatedHoursMax: number;
  totalProjectHours: number;
}
