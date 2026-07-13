# `curriculum/` — Source of truth for the Learn AI curriculum

This directory is the machine-readable blueprint for the Learn AI
curriculum. It is deliberately independent of any UI, and it is
validated on every import (and therefore on every build).

## Shape

- `schema.ts` — the TypeScript contract for milestones, modules,
  lesson specifications, and project references.
- `build.ts` — tiny helpers (`lesson`, `module`, `project`,
  `milestone`) that keep milestone files scannable.
- `validate.ts` — validation rules; throws on any structural issue.
- `index.ts` — imports all milestones, runs validation, and exports
  `milestones`, `getMilestone`, and `computeStats`.
- `milestones/01-foundations.ts` … `10-capstone.ts` — one file per
  milestone.

## Invariants

The validator enforces:

1. Exactly 10 milestones, numbered 1..10 contiguously.
2. Unique milestone, module, and lesson IDs.
3. Prerequisite references resolve to earlier milestones / modules /
   lessons — no forward references or cycles.
4. Every module has at least one lesson, outcomes, and a deliverable.
5. Every lesson has one big idea, practice, build step, competency
   IDs (matching `^[A-Z]{2,5}-[A-Z]+-\d{3}$`), knowledge-domain codes
   (from the 20 domains in `LEARN_AI_KNOWLEDGE_ARCHITECTURE.md`), and
   a positive duration.
6. Every milestone has a flagship project (matching its `flagship`
   flag) and an explicit gate.
7. Roadmap project IDs are unique, match the pattern `M<n>.P<k>`, and
   the milestone number `<n>` matches the milestone they live in.
8. Statuses stay honest: milestones are `blueprint` and lessons are
   `planned` until they are genuinely otherwise.

Run manually with:

```bash
bun -e "import('./curriculum/index.ts').then(m => console.log(m.computeStats()))"
```

## Editing

- Prefer adding a lesson to closing a real gap over hitting a lesson
  count.
- Do not introduce a competency ID or knowledge-domain code that is
  not in the governing documents.
- Update statuses only as the underlying work actually changes.
