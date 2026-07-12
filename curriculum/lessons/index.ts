import type { LessonBody } from "./schema";
import { module01 } from "./orientation/module-01-what-ai-is";
import { module02 } from "./orientation/module-02-modern-landscape";
import { module03 } from "./orientation/module-03-how-to-learn";
import { module04 } from "./orientation/module-04-digital-foundations";
import { module05 } from "./orientation/module-05-workspace";
import { module06 } from "./orientation/module-06-first-ai";
import { stages } from "../index";

const orientationBodies: Record<string, LessonBody> = {
  ...module01,
  ...module02,
  ...module03,
  ...module04,
  ...module05,
  ...module06,
};

/**
 * All authored lesson bodies keyed by canonical lesson id.
 * Stage 1 (Orientation) is complete; later stages are being authored.
 */
export const lessonBodies: Record<string, LessonBody> = {
  ...orientationBodies,
};

export function getLessonBody(lessonId: string): LessonBody | undefined {
  return lessonBodies[lessonId];
}

/** Locate a lesson within the spine by its id. Undefined if not found. */
export interface LessonLocation {
  stageId: string;
  moduleId: string;
  lessonId: string;
  stageOrder: number;
  moduleOrder: number;
  lessonOrder: number;
  title: string;
  outcome: string;
  effort: string;
}

export function findLessonLocation(lessonId: string): LessonLocation | undefined {
  for (const stage of stages) {
    for (const mod of stage.modules) {
      for (const lesson of mod.lessons) {
        if (lesson.id === lessonId) {
          return {
            stageId: stage.id,
            moduleId: mod.id,
            lessonId: lesson.id,
            stageOrder: stage.order,
            moduleOrder: mod.order,
            lessonOrder: lesson.order,
            title: lesson.title,
            outcome: lesson.outcome,
            effort: lesson.effort,
          };
        }
      }
    }
  }
  return undefined;
}

/**
 * The flat ordered list of every lesson in the curriculum, used for
 * sequential prev/next navigation.
 */
export function flatLessonList(): {
  stageId: string;
  moduleId: string;
  lessonId: string;
}[] {
  const list: { stageId: string; moduleId: string; lessonId: string }[] = [];
  for (const stage of stages) {
    for (const mod of stage.modules) {
      for (const lesson of mod.lessons) {
        list.push({ stageId: stage.id, moduleId: mod.id, lessonId: lesson.id });
      }
    }
  }
  return list;
}

/** URL path for a lesson. Data-driven canonical format. */
export function lessonPathFor(
  stageId: string,
  moduleId: string,
  lessonId: string,
): string {
  return `/learn/${stageId}/${moduleId}/${lessonId}`;
}

/** All lessons that currently have an authored body. */
export function availableLessons(): LessonLocation[] {
  const list: LessonLocation[] = [];
  for (const id of Object.keys(lessonBodies)) {
    const loc = findLessonLocation(id);
    if (loc) list.push(loc);
  }
  return list;
}

export type DerivedStatus = "planned" | "drafting" | "ready" | "published";

/** Derived module status based on how many of its lessons have authored bodies. */
export function moduleStatus(mod: { lessons: { id: string }[] }): DerivedStatus {
  const total = mod.lessons.length;
  if (total === 0) return "planned";
  const authored = mod.lessons.filter((l) => lessonBodies[l.id] !== undefined).length;
  if (authored === 0) return "planned";
  if (authored === total) return "ready";
  return "drafting";
}

/** Derived stage status aggregated across its modules' lessons. */
export function stageStatus(stage: {
  modules: { lessons: { id: string }[] }[];
}): DerivedStatus {
  const lessons = stage.modules.flatMap((m) => m.lessons);
  if (lessons.length === 0) return "planned";
  const authored = lessons.filter((l) => lessonBodies[l.id] !== undefined).length;
  if (authored === 0) return "planned";
  if (authored === lessons.length) return "ready";
  return "drafting";
}
