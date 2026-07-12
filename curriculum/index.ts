import type { Stage } from "./schema";
import { stage as s00 } from "./stages/00-orientation";
import { stage as s01 } from "./stages/01-computers";
import { stage as s02 } from "./stages/02-programming-foundations";
import { stage as s03 } from "./stages/03-python-foundations";
import { stage as s04 } from "./stages/04-python-professional";
import { stage as s05 } from "./stages/05-mathematics";
import { stage as s06 } from "./stages/06-data-and-sql";
import { stage as s07 } from "./stages/07-classical-ml";
import { stage as s08 } from "./stages/08-deep-learning";
import { stage as s09 } from "./stages/09-llms";
import { stage as s10 } from "./stages/10-generative-ai";
import { stage as s11 } from "./stages/11-mlops";
import { stage as s12 } from "./stages/12-capstone";
import { threads } from "./threads";
import { tracks } from "./tracks";
import { validateCurriculum } from "./validate";

export const stages: Stage[] = [
  s00, s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11, s12,
];

// Fail typecheck/build if the curriculum has structural problems.
// Also throws at import time in dev/SSR so mistakes are visible immediately.
const validation = validateCurriculum(stages);
if (validation.errors.length > 0) {
  const details = validation.errors.map((e) => `  - ${e}`).join("\n");
  throw new Error(
    `Curriculum validation failed with ${validation.errors.length} error(s):\n${details}`,
  );
}

export { threads, tracks };
export type { Stage, Module, Lesson, Thread, Track, Status, StageProject } from "./schema";

export function getStageById(id: string): Stage | undefined {
  return stages.find((s) => s.id === id);
}

export function totalModules(): number {
  return stages.reduce((n, s) => n + s.modules.length, 0);
}

export function totalLessons(): number {
  return stages.reduce(
    (n, s) => n + s.modules.reduce((m, mod) => m + mod.lessons.length, 0),
    0,
  );
}

export function lessonCountFor(stage: Stage): number {
  return stage.modules.reduce((n, m) => n + m.lessons.length, 0);
}
