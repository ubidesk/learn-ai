# Learn AI

An open-source path from complete beginner to professional AI engineer,
being built in public.

Learn AI is one coherent curriculum that takes a learner who has never
written code from `"what is a computer?"` to shipping, deploying, and
maintaining real AI systems. Free forever. No paywalls, no upsells.

## Status

**Curriculum v0.1 — blueprint approved, lesson bodies not yet written.**

The blueprint is public and honest:

- 10 sequential milestones from Digital Foundations to Capstone.
- Every milestone is organised around **real shipped projects**, not
  lectures.
- Every module has a deliverable. Every lesson has one big idea, one
  practice, one build step, and a modern-AI connection.
- Nothing is claimed as "finished" until it actually is.

Browse the live blueprint at
[`/curriculum`](https://learn-ai-open-source.lovable.app/curriculum).

## Governing documents

The curriculum is governed by four canonical documents in this
repository:

- [`docs/mission-and-prd.md`](docs/mission-and-prd.md) — mission and
  product requirements.
- [`docs/governance/LEARN_AI_GRADUATE_PROFILE_AND_COMPETENCY_FRAMEWORK.md`](docs/governance/LEARN_AI_GRADUATE_PROFILE_AND_COMPETENCY_FRAMEWORK.md)
  — what a graduate can do.
- [`docs/governance/LEARN_AI_KNOWLEDGE_ARCHITECTURE.md`](docs/governance/LEARN_AI_KNOWLEDGE_ARCHITECTURE.md)
  — the domain taxonomy.
- [`docs/curriculum/PROJECT_ROADMAP.md`](docs/curriculum/PROJECT_ROADMAP.md)
  — the ordered list of projects a graduate has shipped.

Downstream artifacts must not contradict these documents.

## Repository layout

```text
curriculum/          ← Source of truth for the 10-milestone curriculum
  schema.ts          ← Types
  build.ts           ← Small helpers used by milestone files
  validate.ts        ← Import- and build-time validation
  index.ts           ← Aggregation + stats
  milestones/*.ts    ← One file per milestone
docs/                ← Governing documents
src/                 ← Website that browses the blueprint
```

## Development

```bash
bun install
bun run dev        # local development
bunx tsgo --noEmit # typecheck
bun run build      # production build (also runs curriculum validation)
```

## Contributing

We welcome contributions that improve the blueprint or move it toward
authored lessons. Please read the governing documents first; changes
that contradict them will be sent back.

## Licence

To be finalised. This project is being built in the open with the
intent that curriculum, code, and reasoning remain freely usable for
learners.
