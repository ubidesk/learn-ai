import type { CurriculumStats, Milestone } from "./schema";
import { M1 } from "./milestones/01-foundations";
import { M2 } from "./milestones/02-python";
import { M3 } from "./milestones/03-software-craft";
import { M4 } from "./milestones/04-data";
import { M5 } from "./milestones/05-math-stats";
import { M6 } from "./milestones/06-classical-ml";
import { M7 } from "./milestones/07-deep-learning";
import { M8 } from "./milestones/08-llm-apps";
import { M9 } from "./milestones/09-production-ai";
import { M10 } from "./milestones/10-capstone";
import { validateCurriculum } from "./validate";

export const milestones: Milestone[] = [M1, M2, M3, M4, M5, M6, M7, M8, M9, M10];

// Fail-fast on invalid curriculum data during import (and therefore during build).
validateCurriculum(milestones);

export function getMilestone(id: string): Milestone | undefined {
  return milestones.find((m) => m.id === id);
}

export function computeStats(list: Milestone[] = milestones): CurriculumStats {
  const modules = list.reduce((s, m) => s + m.modules.length, 0);
  const lessonSpecs = list.reduce(
    (s, m) => s + m.modules.reduce((ms, mod) => ms + mod.lessons.length, 0),
    0,
  );
  const projects = list.reduce((s, m) => s + m.projects.length, 0);
  const totalEstimatedHoursMin = list.reduce((s, m) => s + m.estimatedHours.min, 0);
  const totalEstimatedHoursMax = list.reduce((s, m) => s + m.estimatedHours.max, 0);
  const totalProjectHours = list.reduce(
    (s, m) => s + m.projects.reduce((ps, p) => ps + p.hours, 0),
    0,
  );
  return {
    milestones: list.length,
    modules,
    lessonSpecs,
    projects,
    totalEstimatedHoursMin,
    totalEstimatedHoursMax,
    totalProjectHours,
  };
}

export type { Milestone, Module, LessonSpec, RoadmapProjectRef, CurriculumStats } from "./schema";
