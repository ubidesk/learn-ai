# Curriculum

The authoritative Learn AI curriculum spine, as typed TypeScript.

- Source of truth for **types**: [`schema.ts`](./schema.ts)
- Source of truth for **stages, modules, and lessons**: files under
  [`stages/`](./stages/), one file per stage.
- Cross-curriculum **threads**: [`threads.ts`](./threads.ts)
- Optional **specialisation tracks**: [`tracks.ts`](./tracks.ts)
- **Validation** (runs at import): [`validate.ts`](./validate.ts)
- Aggregator: [`index.ts`](./index.ts)

Consumed by the app via the `@curriculum/*` path alias:

```ts
import { stages, threads, tracks, totalLessons } from "@curriculum/index";
```

## Contributing

Read first:

- [`../docs/curriculum-schema.md`](../docs/curriculum-schema.md) — field-by-field reference.
- [`../docs/authoring-guide.md`](../docs/authoring-guide.md) — how to add or edit content safely.
- [`../docs/quality-standards.md`](../docs/quality-standards.md) — the bar a lesson must clear.

Every lesson today has `status: "planned"`. Full lesson bodies will be
authored as separate content (target: Markdown lesson files under
`stages/<slug>/lessons/`) once a stable subset of the spine has been
reviewed. The typed spine is intentionally the first thing to stabilise.
