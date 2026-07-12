import type { Stage } from "./schema";

export interface ValidationResult {
  errors: string[];
  warnings: string[];
}

/**
 * Minimum spine size. The approved Learn AI Curriculum Blueprint 2.0 calls
 * for roughly 100 modules and 450–550 lesson-level items. A future accidental
 * compression below either floor is a structural regression and fails the
 * build.
 */
export const MIN_STAGES = 13;
export const MIN_MODULES = 100;
export const MIN_LESSONS = 450;

/**
 * Validate the entire curriculum. Errors fail the build; warnings surface
 * issues that don't yet block shipping the spine.
 *
 * Rules enforced:
 *   - Exactly {@link MIN_STAGES} stages, ordered 0..N-1 contiguously.
 *   - Stage ids and orders are unique.
 *   - Module ids are globally unique; orders are 1..N contiguous within stage.
 *   - Lesson ids are globally unique; orders are 1..N contiguous within module.
 *   - All required string fields are non-empty.
 *   - Stage `prerequisites` refer to real stage ids.
 *   - Lesson `prerequisites` refer to real lesson ids and never point forward.
 *   - Total modules >= {@link MIN_MODULES}, total lessons >= {@link MIN_LESSONS}.
 */
export function validateCurriculum(stages: Stage[]): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (stages.length !== MIN_STAGES) {
    errors.push(
      `Curriculum must have exactly ${MIN_STAGES} stages; found ${stages.length}.`,
    );
  }

  const seenStageIds = new Set<string>();
  const seenStageOrders = new Set<number>();
  const seenModuleIds = new Set<string>();
  const seenLessonIds = new Set<string>();
  const lessonToStageOrder = new Map<string, number>();
  let totalModules = 0;
  let totalLessons = 0;

  const nonEmpty = (v: unknown): boolean =>
    typeof v === "string" && v.trim().length > 0;

  for (const stage of stages) {
    if (!nonEmpty(stage.id)) errors.push(`Stage with order ${stage.order} has empty id`);
    if (!nonEmpty(stage.title)) errors.push(`Stage "${stage.id}" has empty title`);
    if (!nonEmpty(stage.purpose)) errors.push(`Stage "${stage.id}" has empty purpose`);
    if (seenStageIds.has(stage.id)) errors.push(`Duplicate stage id: ${stage.id}`);
    seenStageIds.add(stage.id);
    if (seenStageOrders.has(stage.order)) errors.push(`Duplicate stage order: ${stage.order}`);
    seenStageOrders.add(stage.order);

    const modOrders = stage.modules.map((m) => m.order).sort((a, b) => a - b);
    for (let i = 0; i < modOrders.length; i++) {
      if (modOrders[i] !== i + 1) {
        errors.push(
          `Stage "${stage.id}" has non-contiguous module orders: ${modOrders.join(", ")}`,
        );
        break;
      }
    }

    totalModules += stage.modules.length;

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

      totalLessons += mod.lessons.length;

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

  for (const stage of stages) {
    for (const pre of stage.prerequisites) {
      if (!seenStageIds.has(pre)) {
        errors.push(`Stage "${stage.id}" has unknown prerequisite stage: ${pre}`);
      }
    }
  }

  for (const stage of stages) {
    for (const mod of stage.modules) {
      for (const lesson of mod.lessons) {
        for (const pre of lesson.prerequisites ?? []) {
          if (!seenLessonIds.has(pre)) {
            errors.push(`Lesson "${lesson.id}" has unknown prerequisite lesson: ${pre}`);
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

  if (totalModules < MIN_MODULES) {
    errors.push(
      `Curriculum has ${totalModules} modules, below the required floor of ${MIN_MODULES}. ` +
        `The blueprint requires the full lesson-level spine; refusing to silently compress it.`,
    );
  }
  if (totalLessons < MIN_LESSONS) {
    errors.push(
      `Curriculum has ${totalLessons} lessons, below the required floor of ${MIN_LESSONS}. ` +
        `Expand modules to atomic lessons before merging.`,
    );
  }

  return { errors, warnings };
}
