import type { Milestone } from "./schema";

export class CurriculumValidationError extends Error {
  constructor(public readonly issues: string[]) {
    super(`Curriculum validation failed:\n- ${issues.join("\n- ")}`);
    this.name = "CurriculumValidationError";
  }
}

const COMPETENCY_ID_RE = /^[A-Z]{2,5}-[A-Z]+-\d{3}$/;
const KNOWLEDGE_DOMAINS = new Set([
  "META", "DIGI", "SYS", "OS", "NET", "THINK", "PY", "CS", "SWE",
  "DISC", "MATH", "STAT", "DATA", "ML", "DL", "LLM", "APP", "MLOPS",
  "RESP", "PRAC",
]);

export function validateCurriculum(milestones: Milestone[]): void {
  const issues: string[] = [];
  const push = (msg: string) => issues.push(msg);

  // 1. Exactly 10 milestones, numbered 1..10 contiguously.
  if (milestones.length !== 10) push(`expected 10 milestones, got ${milestones.length}`);
  const numbers = milestones.map((m) => m.number).sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== i + 1) {
      push(`milestone numbers must be 1..${milestones.length}; got ${numbers.join(",")}`);
      break;
    }
  }

  // 2. Unique milestone / module / lesson IDs.
  const mIds = new Set<string>();
  const modIds = new Set<string>();
  const lessonIds = new Set<string>();
  for (const m of milestones) {
    if (mIds.has(m.id)) push(`duplicate milestone id: ${m.id}`);
    mIds.add(m.id);
    for (const mod of m.modules) {
      if (modIds.has(mod.id)) push(`duplicate module id: ${mod.id}`);
      modIds.add(mod.id);
      for (const l of mod.lessons) {
        if (lessonIds.has(l.id)) push(`duplicate lesson id: ${l.id}`);
        lessonIds.add(l.id);
      }
    }
  }

  // 3. Prerequisite milestones reference existing milestones and are earlier (no cycles/forward refs).
  const milestoneOrder = new Map(milestones.map((m) => [m.id, m.number]));
  for (const m of milestones) {
    for (const p of m.prerequisiteMilestones) {
      const num = milestoneOrder.get(p);
      if (num === undefined) push(`${m.id}: unknown prerequisite milestone ${p}`);
      else if (num >= m.number) push(`${m.id}: prerequisite ${p} is not earlier`);
    }
  }

  // Prerequisite refs on modules/lessons must resolve to a known module or lesson id
  // and cannot forward-reference within the same milestone.
  for (const m of milestones) {
    const seenModules: string[] = [];
    const seenLessons: string[] = [];
    for (const mod of m.modules) {
      for (const p of mod.prerequisites) {
        if (!modIds.has(p) && !lessonIds.has(p)) push(`${mod.id}: unknown prerequisite ${p}`);
        else if (m.modules.some((x) => x.id === p) && !seenModules.includes(p))
          push(`${mod.id}: forward reference to later module ${p}`);
      }
      seenModules.push(mod.id);
      for (const l of mod.lessons) {
        for (const p of l.prerequisites) {
          if (!lessonIds.has(p) && !modIds.has(p)) push(`${l.id}: unknown prerequisite ${p}`);
          else if (
            mod.lessons.some((x) => x.id === p) && !seenLessons.includes(p)
          ) push(`${l.id}: forward reference to later lesson ${p}`);
        }
        seenLessons.push(l.id);
      }
    }
  }

  // 4. Every module has lessons and a deliverable; every lesson meets its content bar.
  for (const m of milestones) {
    if (m.modules.length === 0) push(`${m.id}: milestone has no modules`);
    for (const mod of m.modules) {
      if (mod.lessons.length === 0) push(`${mod.id}: module has no lessons`);
      if (!mod.deliverable.trim()) push(`${mod.id}: module missing deliverable`);
      if (mod.outcomes.length === 0) push(`${mod.id}: module missing outcomes`);
      for (const l of mod.lessons) {
        if (!l.bigIdea.trim()) push(`${l.id}: missing big idea`);
        if (!l.practice.trim()) push(`${l.id}: missing practice`);
        if (!l.buildStep.trim()) push(`${l.id}: missing build step`);
        if (l.objectives.length === 0) push(`${l.id}: missing objectives`);
        if (l.competencyIds.length === 0) push(`${l.id}: missing competency IDs`);
        for (const c of l.competencyIds)
          if (!COMPETENCY_ID_RE.test(c)) push(`${l.id}: malformed competency id ${c}`);
        if (l.knowledgeDomains.length === 0) push(`${l.id}: missing knowledge domains`);
        for (const d of l.knowledgeDomains)
          if (!KNOWLEDGE_DOMAINS.has(d)) push(`${l.id}: unknown knowledge domain ${d}`);
        if (l.estimatedMinutes <= 0) push(`${l.id}: estimatedMinutes must be positive`);
        if (l.status !== "planned" && l.status !== "drafting" && l.status !== "review" && l.status !== "published")
          push(`${l.id}: invalid status ${l.status}`);
      }
    }
  }

  // 5. Every milestone has a flagship, a gate, and the flagship id exists among its projects.
  const seenProjectIds = new Map<string, string>();
  let prevMilestoneNumber = 0;
  for (const m of milestones) {
    if (!m.gate.trim()) push(`${m.id}: missing gate`);
    if (!m.projects.some((p) => p.id === m.flagshipProjectId))
      push(`${m.id}: flagshipProjectId ${m.flagshipProjectId} not in projects`);
    const flagship = m.projects.find((p) => p.id === m.flagshipProjectId);
    if (flagship && !flagship.flagship) push(`${m.id}: flagship project must have flagship=true`);
    if (m.status !== "blueprint" && m.status !== "in_progress" && m.status !== "published")
      push(`${m.id}: invalid milestone status`);

    // 6. Roadmap projects appear exactly once and in milestone order (M<n>.P<k>).
    for (const p of m.projects) {
      if (seenProjectIds.has(p.id)) push(`duplicate project id ${p.id}`);
      seenProjectIds.set(p.id, m.id);
      const prefixMatch = /^M(\d+)\.P\d+$/.exec(p.id);
      if (!prefixMatch) push(`${p.id}: malformed roadmap id`);
      else if (parseInt(prefixMatch[1], 10) !== m.number)
        push(`${p.id}: project id does not match milestone number ${m.number}`);
    }
    if (m.number <= prevMilestoneNumber) push(`${m.id}: out of order`);
    prevMilestoneNumber = m.number;
  }

  if (issues.length) throw new CurriculumValidationError(issues);
}

// CLI: `bunx tsx curriculum/validate.ts` — validates and prints stats.
// Guarded so bundlers/importers do not trigger the CLI branch.
declare const require: { main?: unknown } | undefined;
const isCLI =
  typeof process !== "undefined" &&
  Array.isArray(process.argv) &&
  process.argv[1] !== undefined &&
  /curriculum[\\/]validate\.ts$/.test(process.argv[1]);
if (isCLI) {
  (async () => {
    try {
      const mod = await import("./index");
      const stats = mod.computeStats();
      // eslint-disable-next-line no-console
      console.log("Curriculum OK");
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(stats, null, 2));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e instanceof Error ? e.message : String(e));
      if (typeof process !== "undefined") process.exit(1);
    }
  })();
}
