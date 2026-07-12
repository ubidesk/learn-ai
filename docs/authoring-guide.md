# Authoring Guide

How to add, edit, or reorganise stages, modules, and lessons in the Learn
AI curriculum.

Before authoring anything, read
[`docs/curriculum-schema.md`](./curriculum-schema.md) for the data shape
and [`docs/quality-standards.md`](./quality-standards.md) for the bar a
lesson must clear before it merges.

## Adding a lesson

1. Open the stage file it belongs to, e.g. `curriculum/stages/03-python-foundations.ts`.
2. Find the target module. Append a new lesson object to its `lessons` array.
3. Choose a **globally unique** lesson id, kebab-case, typically prefixed with the module id:
   `python-foundations-cf-match-statement`.
4. Set `order` to the next integer in the module (1-indexed, no gaps).
5. Write a plain-English `title`, a single-sentence `outcome`, and an honest `effort` range.
6. Leave `status: "planned"` until the lesson body actually exists.
7. If the lesson has a specific prerequisite lesson (rare — stage/module prerequisites usually cover it), add `prerequisites: ["<lesson-id>"]`. Only reference lessons in the same or earlier stages.

Run `bunx tsgo --noEmit` to typecheck. Import-time validation will fail
loudly if you introduce a duplicate id, non-contiguous order, or broken
prerequisite reference.

## Adding a module

1. In the target stage file, append a new module object to `modules`.
2. Choose a globally unique module id: `<stageId>-<slug>`.
3. Set `order` to the next integer in the stage (1-indexed, no gaps).
4. Write a `title` and one-paragraph `summary`.
5. Start with at least one lesson — an empty module is not meaningful.

## Adding a stage

Adding a 14th stage is a curriculum-shape change, not a routine edit.
Discuss it in an issue against the schema and quality standards before
opening a PR. If accepted:

1. Create `curriculum/stages/<NN>-<slug>.ts` following the existing pattern.
2. Add the import and entry to `stages` in `curriculum/index.ts`.
3. Update `docs/mission-and-prd.md` if the change affects the product's shape.

## Reordering

Never renumber a stage or module casually — the ids are used in URLs and
memory. Prefer inserting at the end, or discuss an explicit migration
that also updates cross-references.

If you must reorder within a module or stage:

- Renumber `order` values so they remain contiguous starting at 1.
- Do NOT rename ids just to match the new order. Ids are stable; orders are display.

## Editing existing lessons

- Renaming a lesson `title` or rewriting `outcome`: fine at any time.
- Changing a lesson `id`: only for typo fixes, and only before real
  content exists. Once a lesson has a body, the id is stable.
- Changing `status`: `planned` → `drafting` when a real draft exists;
  `drafting` → `published` when it clears the quality standards checklist.

## Threads and tracks

Threads and tracks are edited directly in `curriculum/threads.ts` and
`curriculum/tracks.ts`. They are UI-facing summaries, not full learning
paths — keep their summaries concise (2–3 sentences max).

## Local checks before opening a PR

```bash
bunx tsgo --noEmit
bun run build
```

Both must pass. Import-time validation of the curriculum will surface
duplicate ids, invalid orders, or broken prerequisites as a build error
with a specific message.
