# Learn AI

An open-source, zero-to-hero AI curriculum and learning platform.

Source of truth: https://github.com/ubidesk/learn-ai

## Status: rebuilding from the ground up

The earlier prototype (a 10-stage compressed curriculum with a handful of
interactive lessons under `/lessons/*`) has been intentionally retired. It
was useful for validating tone, design, and interaction patterns, but its
content model and scope did not match the true product vision.

The new authoritative direction is a **comprehensive, lesson-level,
13-stage curriculum** that takes a complete beginner — someone who has
never written code — all the way to being a thoughtful, capable,
professional AI engineer.

This repository currently contains only:

- A minimal TanStack Start application shell that proves the app runs.
- A single temporary homepage indicating the rebuild is in progress.
- A design-token foundation (`src/styles.css`) suitable for an editorial,
  highly readable educational platform.
- Source-of-truth documentation under [`docs/`](./docs) describing the
  mission, learning-science principles, curriculum architecture, and
  quality standards that will guide the rebuild.
- A placeholder [`curriculum/`](./curriculum) directory ready for the new
  13-stage, lesson-level curriculum data.

No lessons, no curriculum data, no auth, and no backend are wired up yet.

## Tech

- TanStack Start v1 (React 19, Vite 7)
- Tailwind CSS v4 via `src/styles.css`
- shadcn/ui primitives in `src/components/ui/`

## Local development

```bash
bun install
bun run dev
```

## License

Open source. License to be finalized alongside v1 of the curriculum.
