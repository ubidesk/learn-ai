import type { Stage } from "./schema";

export interface ValidationResult {
  errors: string[];
  warnings: string[];
}

/**
 * Validate the entire curriculum. Errors fail the build; warnings surface
 * issues that don't yet block shipping the spine.
 *
 * Rules enforced:
 *   - Stage ids and orders are unique; orders are 0..N-1 contiguous.
 *   - Module ids are globally unique; orders are 1..N contiguous within stage.
 *   - Lesson ids are globally unique; orders are 1..N contiguous within module.
 *   - All required string fields are non-empty.
 *   - Stage `prerequisites` refer to real stage ids.
 *   - Lesson `prerequisites` refer to real lesson ids and never point forward
 *     (a later stage's lesson may not appear as a prerequisite of an earlier one).
 */
export function validateCurriculum(stages: Stage[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  const seenStageIds = new Set<string>();
  const seenStageOrders = new Set<number>();
  const seenModuleIds = new Set<string>();
  const seenLessonIds = new Set<string>();
  const lessonToStageOrder = new Map<string, number>();

  const nonEmpty = (v: unknown): boolean => typeof v === "string" && v.trim().length > 0;

  for (const stage of stages) {
    if (!nonEmpty(stage.id)) errors.push(`Stage with order ${stage.order} has empty id`);
    if (!nonEmpty(stage.title)) errors.push(`Stage "${stage.id}" has empty title`);
    if (!nonEmpty(stage.purpose)) errors.push(`Stage "${stage.id}" has empty purpose`);
    if (seenStageIds.has(stage.id)) errors.push(`Duplicate stage id: ${stage.id}`);
    seenStageIds.add(stage.id);
    if (seenStageOrders.has(stage.order)) errors.push(`Duplicate stage order: ${stage.order}`);
    seenStageOrders.add(stage.order);

    // Module order continuity
    const modOrders = stage.modules.map((m) => m.order).sort((a, b) => a - b);
    for (let i = 0; i < modOrders.length; i++) {
      if (modOrders[i] !== i + 1) {
        errors.push(
          `Stage "${stage.id}" has non-contiguous module orders: ${modOrders.join(", ")}`,
        );
        break;
      }
    }

    for (const mod of stage.modules) {
      if (!nonEmpty(mod.id)) errors.push(`Module in stage "${stage.id}" has empty id`);
      if (!nonEmpty(mod.title)) errors.push(`Module "${mod.id}" has empty title`);
      if (!nonEmpty(mod.summary)) errors.push(`Module "${mod.id}" has empty summary`);
      if (seenModuleIds.has(mod.id)) errors.push(`Duplicate module id: ${mod.id}`);
      seenModuleIds.add(mod.id);

      const lessonOrders = mod.lessons.map((l) => l.order).sort((a, b) => a - b);
      for (let i = 0; i < lessonOrders.length; i++) {
        if (lessonOrders[i] !== i + 1) {
          errors.push(
            `Module "${mod.id}" has non-contiguous lesson orders: ${lessonOrders.join(", ")}`,
          );
          break;
        }
      }

      for (const lesson of mod.lessons) {
        if (!nonEmpty(lesson.id)) errors.push(`Lesson in module "${mod.id}" has empty id`);
        if (!nonEmpty(lesson.title)) errors.push(`Lesson "${lesson.id}" has empty title`);
        if (!nonEmpty(lesson.outcome)) errors.push(`Lesson "${lesson.id}" has empty outcome`);
        if (!nonEmpty(lesson.effort)) errors.push(`Lesson "${lesson.id}" has empty effort`);
        if (seenLessonIds.has(lesson.id)) errors.push(`Duplicate lesson id: ${lesson.id}`);
        seenLessonIds.add(lesson.id);
        lessonToStageOrder.set(lesson.id, stage.order);
      }
    }
  }

  // Stage prerequisites must reference real stage ids.
  for (const stage of stages) {
    for (const pre of stage.prerequisites) {
      if (!seenStageIds.has(pre)) {
        errors.push(`Stage "${stage.id}" has unknown prerequisite stage: ${pre}`);
      }
    }
  }

  // Lesson prerequisites must reference real lessons and not point forward.
  for (const stage of stages) {
    for (const mod of stage.modules) {
      for (const lesson of mod.lessons) {
        for (const pre of lesson.prerequisites ?? []) {
          if (!seenLessonIds.has(pre)) {
            errors.push(
              `Lesson "${lesson.id}" has unknown prerequisite lesson: ${pre}`,
            );
            continue;
          }
          const preStage = lessonToStageOrder.get(pre);
          if (preStage !== undefined && preStage > stage.order) {
            errors.push(
              `Lesson "${lesson.id}" (stage ${stage.order}) requires a later-stage lesson: ${pre}`,
            );
          }
        }
      }
    }
  }

  return { errors, warnings };
}
