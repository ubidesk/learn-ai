# Curriculum Schema

The Learn AI curriculum spine is authored as typed TypeScript under
`curriculum/`. This document is the canonical reference for the shape of
that data.

The source of truth for types is
[`curriculum/schema.ts`](../curriculum/schema.ts). This document explains
the intent behind each field.

## Files

```
curriculum/
  schema.ts                 ← types (source of truth)
  validate.ts               ← structural validation
  index.ts                  ← aggregator; runs validation at import time
  threads.ts                ← cross-curriculum threads
  tracks.ts                 ← optional specialisation tracks
  stages/
    00-orientation.ts
    01-computers.ts
    ...
    12-capstone.ts
```

Each stage lives in exactly one file. Modules and lessons are inline
inside that file for now; a future migration may split each lesson into
its own Markdown file with YAML frontmatter matching this schema.

## Stage

| Field | Required | Purpose |
| --- | --- | --- |
| `id` | ✔ | URL-safe slug. Must be globally unique. Used in `/curriculum/$stageId`. |
| `order` | ✔ | Canonical index 0..12. Must be unique and contiguous across the 13 stages. |
| `title` | ✔ | Short, plain-English title (no leading number). |
| `purpose` | ✔ | Why this stage exists and what the learner leaves with. |
| `startingLevel` | ✔ | Honest description of who this stage is for at entry. |
| `prerequisites` | ✔ | Array of stage ids the learner should complete first. `[]` for stage 0. |
| `project` | ✔ | `{ title, description }` for the stage-capstone artefact. |
| `exitCriteria` | ✔ | Concrete, testable signals that the stage is complete. |
| `status` | ✔ | `planned` / `drafting` / `published`. |
| `modules` | ✔ | Ordered array of `Module`. |

## Module

| Field | Required | Purpose |
| --- | --- | --- |
| `id` | ✔ | Globally unique module id (typically `<stageId>-<moduleSlug>`). |
| `order` | ✔ | 1-indexed order within the parent stage. Must be contiguous. |
| `title` | ✔ | Short module title. |
| `summary` | ✔ | One-paragraph summary of what the module builds. |
| `lessons` | ✔ | Ordered array of `Lesson`. |

## Lesson

| Field | Required | Purpose |
| --- | --- | --- |
| `id` | ✔ | Globally unique lesson id (typically `<moduleId>-<lessonSlug>`). |
| `order` | ✔ | 1-indexed order within the parent module. Must be contiguous. |
| `title` | ✔ | Short, plain-English title. |
| `outcome` | ✔ | "After this lesson you can…" — one sentence. |
| `effort` | ✔ | Honest effort estimate for a true beginner, e.g. `"45–75 min"`. |
| `prerequisites` | ✖ | Optional array of specific lesson ids the learner must complete first. |
| `status` | ✔ | `planned` / `drafting` / `published`. All lessons start as `planned`. |

## Threads

Cross-curriculum threads live in `curriculum/threads.ts` as an array of
`{ id, title, summary }`. They are not part of the ordered stage graph —
they are lenses reinforced continuously.

## Tracks

Optional specialisation tracks live in `curriculum/tracks.ts` as an array
of `{ id, title, summary, suggestedAfterStage }`. Tracks are not
prerequisites for each other and each has its own future dependency
graph.

## Validation rules

`curriculum/validate.ts` runs on every import of `curriculum/index.ts`,
and throws on any structural error. It enforces:

- Stage ids are unique. Stage orders are unique and contiguous.
- Module ids are globally unique. Module orders are 1..N contiguous within each stage.
- Lesson ids are globally unique. Lesson orders are 1..N contiguous within each module.
- Required string fields are non-empty (`title`, `outcome`, `summary`, etc.).
- Stage `prerequisites` reference real stage ids.
- Lesson `prerequisites` reference real lesson ids **and never point forward** to a later-stage lesson.

Validation failures throw at import time, so a broken curriculum fails
`bun run build` and any typecheck that imports `@curriculum/index`.
