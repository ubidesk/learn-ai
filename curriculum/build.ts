import type { LessonSpec, Module, Milestone, RoadmapProjectRef } from "./schema";

/** Shorthand builder for a lesson spec. Keeps milestone files scannable. */
export function lesson(spec: {
  id: string;
  title: string;
  bigIdea: string;
  whyItMatters: string;
  objectives: string[];
  prerequisites?: string[];
  keyConcepts: string[];
  practice: string;
  buildStep: string;
  aiConnection: string;
  competencyIds: string[];
  knowledgeDomains: string[];
  minutes: number;
}): LessonSpec {
  return {
    id: spec.id,
    title: spec.title,
    bigIdea: spec.bigIdea,
    whyItMatters: spec.whyItMatters,
    objectives: spec.objectives,
    prerequisites: spec.prerequisites ?? [],
    keyConcepts: spec.keyConcepts,
    practice: spec.practice,
    buildStep: spec.buildStep,
    aiConnection: spec.aiConnection,
    competencyIds: spec.competencyIds,
    knowledgeDomains: spec.knowledgeDomains,
    estimatedMinutes: spec.minutes,
    status: "planned",
  };
}

export function module(spec: {
  id: string;
  order: number;
  title: string;
  purpose: string;
  outcomes: string[];
  prerequisites?: string[];
  lessons: LessonSpec[];
  advancesProject: string;
  deliverable: string;
}): Module {
  return {
    id: spec.id,
    order: spec.order,
    title: spec.title,
    purpose: spec.purpose,
    outcomes: spec.outcomes,
    prerequisites: spec.prerequisites ?? [],
    lessons: spec.lessons,
    advancesProject: spec.advancesProject,
    deliverable: spec.deliverable,
  };
}

export function project(
  id: string,
  title: string,
  size: RoadmapProjectRef["size"],
  hours: number,
  flagship = false,
): RoadmapProjectRef {
  return { id, title, size, hours, flagship };
}

export function milestone(spec: Omit<Milestone, "status"> & { status?: Milestone["status"] }): Milestone {
  return { status: spec.status ?? "blueprint", ...spec };
}
