# Learn AI

An open-source, zero-to-hero AI curriculum and learning platform.

Source of truth: https://github.com/ubidesk/learn-ai

## Status

The **authoritative 13-stage curriculum spine** is published. Every stage,
module, and lesson title on the site is real. Full lesson bodies are
being authored openly — until each lesson lands, it shows a `Planned`
status. We would rather show an honest empty shelf than fake progress.

## Repository layout

```
curriculum/          ← Source of truth for the 13-stage curriculum
  schema.ts            typed shape
  validate.ts          structural validation (runs at import)
  index.ts             aggregator (+ helpers)
  threads.ts           cross-curriculum threads
  tracks.ts            optional specialisation tracks
  stages/              one .ts file per stage (00..12)
docs/                ← Meta-documentation
  mission-and-prd.md
  learning-science.md
  curriculum-architecture.md
  quality-standards.md
  curriculum-schema.md
  authoring-guide.md
src/                 ← The public website (TanStack Start)
  routes/
  components/
  styles.css
```

Curriculum data is imported via the `@curriculum/*` path alias:

```ts
import { stages, threads, tracks, totalLessons } from "@curriculum/index";
```

## Local development

```bash
bun install
bun run dev
```

Typecheck and production build:

```bash
bunx tsgo --noEmit
bun run build
```

Curriculum validation runs at import time — any duplicate id,
non-contiguous ordering, missing required field, or broken prerequisite
reference will fail the build with a specific message.

## Contributing

See:

- [`docs/mission-and-prd.md`](./docs/mission-and-prd.md) — why we exist.
- [`docs/learning-science.md`](./docs/learning-science.md) — how lessons are designed.
- [`docs/curriculum-architecture.md`](./docs/curriculum-architecture.md) — how content is organised.
- [`docs/curriculum-schema.md`](./docs/curriculum-schema.md) — field-by-field data reference.
- [`docs/authoring-guide.md`](./docs/authoring-guide.md) — how to add or edit a stage/module/lesson safely.
- [`docs/quality-standards.md`](./docs/quality-standards.md) — the bar a lesson must clear before it merges.

## License

Open source. License to be finalised alongside v1 of the curriculum.
