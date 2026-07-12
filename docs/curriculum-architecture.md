# Curriculum & Content Architecture

## Shape of the curriculum

Learn AI is organized as a **13-stage, lesson-level curriculum**. Stages
are ordered by dependency: nothing in a later stage assumes knowledge
that has not been taught in an earlier stage.

Each stage contains an ordered sequence of **lessons** (not modules,
topics, or units). A lesson is the atomic unit of learning: one sitting,
one clear objective, one check for understanding, one artifact of
practice.

The specific list of 13 stages and their lessons is defined separately
in [`/curriculum/`](../curriculum) and is the single source of truth for
what the platform teaches. This document describes the *shape* the data
must take, not the content itself.

## Lesson schema (target)

Every lesson in `curriculum/` will conform to a schema roughly like:

```
lesson:
  id:               stable slug, kebab-case
  stage:            1..13
  order:            integer within stage
  title:            short, plain-English
  one_line:         what the learner will be able to do after
  prerequisites:    [lesson ids from earlier stages/lessons]
  duration_minutes: honest estimate for a true beginner
  learn:            core explanation (intuition → concrete → formal)
  visualize:        diagram, animation, or interactive model
  practice:         retrieval + faded scaffolds
  build:            small artifact the learner produces
  reflect:          metacognitive prompt + self-check
  evidence:         what "understood this" looks like
```

The five verbs — **Learn, Visualize, Practice, Build, Reflect** — are the
canonical lesson rhythm. Every lesson passes through all five, even if
briefly.

## Directory layout (target)

```
curriculum/
  README.md              overview + how to contribute
  stages/
    01-<slug>/
      stage.md           stage-level intent, entry & exit criteria
      lessons/
        01-<slug>.md
        02-<slug>.md
        ...
    02-<slug>/
      ...
    ...
    13-<slug>/
```

Content is authored in Markdown with YAML frontmatter matching the
schema above. The application later compiles this into typed data for
routes and interactive components.

## Separation of concerns

- **`curriculum/`** — authoritative content, framework-agnostic Markdown.
- **`src/`** — presentation and interactive components that render
  curriculum content.
- **`docs/`** — meta-documentation about how Learn AI is designed and
  built (this directory).

The application must never hard-code lesson content in TSX. Lessons
live in `curriculum/`.

## Versioning

The curriculum is versioned in the repository. Breaking changes to the
lesson schema require a documented migration of existing lessons before
merging.
