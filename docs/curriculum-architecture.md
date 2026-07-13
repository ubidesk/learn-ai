# Learn AI Curriculum & Content Architecture

**Version:** 1.0

## Purpose

This document defines the technical architecture, content production workflow, repository structure, quality gates, and publishing model for Learn AI.

Its purpose is to ensure that the project remains:

- educationally coherent;
- technically maintainable;
- scalable from hundreds to thousands of learning objects;
- accessible to new contributors;
- independent from any single website framework; and
- trustworthy for learners over the long term.

Learn AI is not a collection of pages. It is a living educational system.

## Architectural philosophy

The curriculum is the product.

The website is the delivery mechanism.

The technology stack must serve the curriculum—not dictate it.

Every architecture decision should prioritize:

1. Educational quality
2. Curricular coherence
3. Long-term maintainability
4. Open-source collaboration
5. Simplicity
6. Accessibility
7. Scalability

## Core principles

### 1. Single source of truth

Every curriculum concept, identifier, prerequisite, module, and lesson should have one authoritative representation.

If the same concept appears in several learning paths, those paths should reference the same canonical learning object rather than duplicate and gradually diverge.

The authoritative curriculum spine lives in [`/curriculum`](../curriculum).

Presentation components, navigation, search indexes, progress systems, and future exports must derive from that source rather than maintain separate copies.

### 2. Content is structured data

Lessons are not merely pages of prose. They are structured educational objects.

A lesson may include:

- identity and ordering metadata;
- prerequisites;
- learning objectives;
- concepts;
- explanation sections;
- visual assets;
- code examples;
- exercises and solutions;
- knowledge checks;
- project work;
- modern AI connections;
- completion evidence;
- review status;
- version history; and
- contributor information.

Treating content as structured data makes validation, search, reuse, accessibility, and multi-format publishing possible.

### 3. Dependency-aware progression

The curriculum must be ordered by what a true beginner needs to know next.

No lesson may depend on knowledge that has not been introduced earlier or explicitly listed as an optional external prerequisite.

Prerequisites should be machine-validatable wherever practical.

### 4. Stable identifiers

Stage, module, lesson, exercise, project, and capability identifiers should remain stable after publication.

Titles may improve. Explanations may change. Stable IDs preserve:

- prerequisite references;
- learner progress;
- external links;
- analytics;
- translations;
- review history; and
- future migrations.

### 5. Separation of concerns

The project separates five major systems:

- **Curriculum** — what is taught and in what order;
- **Content** — full explanations, examples, exercises, projects, and assessments;
- **Platform** — how learners navigate and experience the material;
- **Interactive learning** — visualizers, labs, playgrounds, and simulations;
- **Infrastructure** — builds, validation, testing, deployment, search, and future data services.

These systems should evolve independently whenever possible.

### 6. Framework independence

The curriculum must outlive any current web framework, hosting provider, AI model vendor, or authoring tool.

Framework-specific code may render curriculum content, but it must not become the only place where educational meaning exists.

### 7. Validation before publication

A broken prerequisite, duplicate ID, missing objective, invalid asset reference, failing code example, or inaccessible interaction should be caught before learners encounter it.

Validation is part of authorship, not a final optional check.

## Curriculum shape

Learn AI is organized as a **13-stage, dependency-aware curriculum**.

The current authoritative spine contains:

- 13 stages;
- ordered modules within each stage; and
- lesson-level items within each module.

The exact counts and titles are defined by the curriculum source files and may evolve through documented changes. The repository README reports the current published totals.

### Stage

A stage represents a major capability transition in the learner journey.

Each stage should define:

- its purpose;
- entry assumptions;
- exit capabilities;
- major concepts;
- required projects;
- links to earlier and later stages; and
- the modules it contains.

### Module

A module is a coherent sequence of related lessons that builds a meaningful capability.

Each module should define:

- a motivating outcome;
- module-level learning objectives;
- prerequisite lessons or capabilities;
- ordered lessons;
- reinforcement opportunities;
- a tangible build or project; and
- evidence that the learner is ready to continue.

### Lesson

A lesson is the atomic instructional unit.

A well-sized lesson is designed for one focused learning session and normally introduces one major new idea.

Each lesson should produce:

- one clear capability gain;
- one or more checks for understanding;
- active practice;
- a learner-created artifact or meaningful modification where appropriate; and
- a connection to the larger AI learning journey.

### Capability

A capability describes something the learner can demonstrably do.

Capabilities provide a layer above completion metrics. They can connect several lessons and modules into outcomes such as:

- debug a Python program systematically;
- evaluate a classification model correctly;
- build a retrieval pipeline;
- deploy and monitor an AI service; or
- explain a transformer’s information flow.

### Thread

A thread is a recurring concern that develops across stages rather than belonging to only one module.

Examples include:

- debugging;
- testing;
- mathematics;
- data ethics;
- security and privacy;
- responsible AI;
- Git and collaboration;
- communication;
- evaluation; and
- performance.

Threads prevent important professional habits from being isolated in a single chapter and forgotten.

### Track

A track is an optional specialization assembled from canonical lessons and projects.

Tracks should reference existing curriculum objects rather than duplicate them. Examples may include:

- AI application engineer;
- machine learning engineer;
- data and analytics;
- open-source model engineering; or
- AI product development.

The core curriculum remains the primary beginner-to-professional journey.

## Repository architecture

The current repository is organized around a typed curriculum source and a web application.

```text
learn-ai/
├── curriculum/
│   ├── schema.ts
│   ├── validate.ts
│   ├── index.ts
│   ├── threads.ts
│   ├── tracks.ts
│   └── stages/
│       ├── 00-*.ts
│       ├── 01-*.ts
│       └── ...
├── docs/
│   ├── mission-and-prd.md
│   ├── learning-science.md
│   ├── curriculum-architecture.md
│   ├── quality-standards.md
│   ├── curriculum-schema.md
│   ├── authoring-guide.md
│   └── curriculum-completeness.md
├── src/
│   ├── routes/
│   ├── components/
│   └── styles.css
├── public/
├── scripts/
└── .github/
```

As the project matures, additional first-class directories may be introduced for full lesson bodies and reusable assets:

```text
content/
├── lessons/
├── exercises/
├── quizzes/
├── projects/
├── case-studies/
├── cheat-sheets/
├── reference-guides/
└── career-guides/

assets/
├── diagrams/
├── illustrations/
├── animations/
├── icons/
└── datasets/

code/
notebooks/
```

New directories should be added only when there is enough real content to justify them. Architecture must not get ahead of the curriculum.

## Current source-of-truth model

### Curriculum structure

The TypeScript files in `curriculum/` define the current authoritative stage, module, and lesson spine.

They provide:

- typed structure;
- stable IDs;
- ordering;
- prerequisites;
- status information;
- metadata used by the website; and
- import-time validation.

### Full lesson content

As lesson bodies mature, they should remain separable from the application’s route components.

Full content may be stored as structured Markdown/MDX or another framework-neutral representation, provided that:

- metadata conforms to the canonical schema;
- identifiers match the curriculum spine;
- code and asset references are testable;
- content can be consumed outside the website; and
- no duplicate source of truth is introduced.

### Platform

The `src/` application renders curriculum data and learning content.

The application may define reusable presentation and interaction components, but it must not hard-code authoritative curriculum ordering or duplicate lesson text across routes.

## Curriculum schema

The exact implementation schema is documented in [`curriculum-schema.md`](./curriculum-schema.md). At a conceptual level, every lesson should support the following fields.

```text
lesson
├── id
├── stage_id
├── module_id
├── order
├── title
├── summary
├── status
├── prerequisites
├── estimated_duration
├── difficulty
├── learning_objectives
├── concepts
├── learn
├── visualize
├── practice
├── build
├── reflect
├── modern_ai_connection
├── common_mistakes
├── evidence_of_learning
├── assets
├── code_examples
├── exercises
├── knowledge_check
├── review_status
└── version_metadata
```

Not every field needs to be stored in one physical file. The logical object, however, must be reconstructable without ambiguity.

## Lesson specification

Before a lesson body is written, the lesson should have an approved specification.

A lesson specification defines:

- lesson ID;
- stage and module placement;
- title and one-line outcome;
- learning objectives;
- prerequisites;
- estimated duration;
- difficulty;
- concepts covered;
- concepts explicitly not covered;
- required visuals;
- required code examples;
- required exercises;
- required knowledge check;
- required mini-project or build activity;
- modern AI connection;
- common misconceptions;
- completion criteria; and
- dependencies on assets or external systems.

A good specification prevents scope drift and makes parallel contribution safer.

Lesson writing should begin only after the specification is coherent with neighboring lessons.

## Canonical lesson rhythm

Every lesson follows the learner-facing rhythm:

1. **Learn** — Build the core conceptual model.
2. **Visualize** — Make invisible behavior observable.
3. **Practice** — Retrieve, predict, debug, and apply.
4. **Build** — Produce or modify something meaningful.
5. **Reflect** — Explain the idea and assess understanding.

This rhythm maps to the more detailed teaching cycle defined in [`learning-science.md`](./learning-science.md): curiosity, motivation, intuition, visualization, explanation, code, experimentation, practice, reflection, and application.

## Content types

Learn AI may contain several content types, each with its own schema and template.

### Lessons

The main instructional sequence.

### Exercises

Focused practice tied to explicit learning objectives, with hints and explained solutions.

### Knowledge checks and quizzes

Low-stakes retrieval and diagnostic assessment. These should reveal understanding, not reward guessing.

### Projects

Authentic builds that combine several skills and produce visible evidence of capability.

### Capstones

Substantial, portfolio-quality projects at the end of major learning paths or the full curriculum.

### Interactive labs

Guided environments for experimentation, visualization, and immediate feedback.

### Case studies

Recurring real-world systems that allow learners to revisit the same domain with increasing sophistication.

Potential recurring domains include:

- media recommendations;
- e-commerce and search;
- transportation;
- healthcare;
- finance;
- scientific discovery;
- education; and
- open-source LLM applications.

Case studies should evolve from simplified beginner models to realistic system architecture and trade-off analysis.

### Reference materials

Cheat sheets, glossary entries, reference guides, design documents, research notes, and career guides.

Reference material supports the curriculum but does not replace the learning sequence.

## Interactive learning architecture

Interactive elements should be used when they improve understanding—not because they are visually impressive.

Examples include:

- code playgrounds;
- execution visualizers;
- memory and reference visualizers;
- prediction exercises;
- drag-and-drop sequencing activities;
- tensor-shape explorers;
- gradient and optimization demonstrations;
- attention and embedding explorers;
- retrieval pipeline simulators;
- architecture explorers; and
- interactive diagrams.

Each interactive should define:

- the learning question it answers;
- the behavior the learner can manipulate;
- the feedback it provides;
- keyboard and screen-reader behavior;
- reduced-motion behavior; and
- a non-interactive fallback.

## Lesson lifecycle

No lesson should bypass the publication lifecycle.

```text
Planned
  ↓
Specification Draft
  ↓
Specification Approved
  ↓
Lesson Draft
  ↓
Technical Review
  ↓
Educational Review
  ↓
Editorial Review
  ↓
Code & Exercise Validation
  ↓
Visual / Interactive Review
  ↓
Accessibility Review
  ↓
AI Safety Review (when applicable)
  ↓
Preview Build
  ↓
Published
  ↓
Maintenance & Revision
```

Small corrections may use a shortened workflow, but they must still preserve technical and editorial quality.

## Content production workflow

### Stage 1 — Curriculum design

- Confirm the lesson’s place in the dependency graph.
- Define objectives, scope, prerequisites, and completion evidence.
- Review adjacent lessons for duplication or gaps.

### Stage 2 — Lesson draft

- Write motivation, intuition, explanations, and examples.
- Follow the approved specification and lesson template.
- Mark uncertain technical claims for verification.

### Stage 3 — Code development

- Implement and test every code example.
- Capture expected outputs.
- Verify environment and dependency assumptions.
- Add tests or executable validation where practical.

### Stage 4 — Visual design

- Specify the question each visual answers.
- Create diagrams, animations, or interaction requirements.
- Add meaningful alt text, captions, and nonvisual descriptions.

### Stage 5 — Exercises and assessment

- Add retrieval checks, guided practice, independent practice, and build work.
- Create hints that preserve productive struggle.
- Write explained solutions.
- Verify that assessment actually measures the stated objectives.

### Stage 6 — Review

- Complete technical, educational, editorial, accessibility, and responsible-AI review.
- Resolve inconsistencies with neighboring content.

### Stage 7 — Publication

- Run automated checks.
- Generate a preview build.
- Confirm navigation, assets, and rendering.
- Publish with version and review metadata.

## AI-assisted content creation

AI may accelerate content production, but it never replaces editorial judgment or technical verification.

AI may assist with:

- first drafts;
- example generation;
- quiz and exercise ideas;
- alternative explanations;
- code explanation;
- diagram specifications;
- summaries;
- metadata suggestions;
- consistency checks; and
- future translations.

Every AI-assisted contribution requires human review.

Contributors remain responsible for:

- factual correctness;
- pedagogical quality;
- originality and licensing;
- tested code;
- appropriate difficulty;
- accessibility;
- privacy and safety; and
- consistency with the curriculum.

AI-generated text should never be merged merely because it sounds polished.

## Review standards

Every publishable lesson may require five core reviews.

### Technical review

Verifies correctness, currency, code behavior, outputs, dependencies, and claims.

### Educational review

Verifies prerequisites, cognitive load, progression, practice quality, and evidence of learning.

### Editorial review

Verifies clarity, tone, terminology, grammar, structure, and consistency.

### Accessibility review

Verifies semantic structure, visual alternatives, interaction accessibility, contrast, motion, and readable presentation.

### AI safety and responsibility review

Required where content involves model deployment, user data, autonomous behavior, security, high-impact domains, or potentially harmful capabilities.

Detailed acceptance criteria live in [`quality-standards.md`](./quality-standards.md).

## Automation and continuous integration

Continuous integration should validate as much of the educational system as practical.

Checks may include:

- duplicate and malformed IDs;
- non-contiguous ordering;
- broken prerequisite references;
- missing required metadata;
- invalid status transitions;
- curriculum completeness floors;
- broken internal and external links;
- formatting and linting;
- TypeScript correctness;
- code example execution;
- notebook execution;
- expected output verification;
- asset existence and references;
- image alt text and captions;
- accessibility tests;
- search-index generation;
- route generation;
- website build; and
- stale review dates.

A lesson must not publish when required validation fails.

Automated checks do not replace human judgment. They protect human attention for the work machines cannot reliably evaluate.

## Versioning

Curriculum content uses semantic versioning at the lesson or content-object level where practical.

### Major

A breaking educational change, such as:

- changed prerequisites;
- a redefined core mental model;
- substantial objective changes;
- removal of a capability; or
- restructuring that invalidates learner progress assumptions.

### Minor

A backward-compatible content expansion, such as:

- a new example;
- an added exercise;
- an improved diagram;
- an additional explanation; or
- a new optional extension.

### Patch

A correction that preserves the lesson’s intent, such as:

- typo fixes;
- broken links;
- small code corrections;
- clarified wording; or
- accessibility improvements.

Published lessons should record:

- version;
- last updated date;
- last reviewed date;
- contributors;
- review status; and
- a meaningful change log.

## Contributor workflow

A typical lesson contribution follows this sequence:

1. Select or claim a lesson.
2. Read the mission, learning-science manifesto, architecture, quality standards, schema, and authoring guide.
3. Review the lesson specification.
4. Review prerequisites and neighboring lessons.
5. Confirm scope with maintainers when needed.
6. Draft the content.
7. Implement and test code.
8. Add exercises, solutions, visuals, and metadata.
9. Run local validation.
10. Submit a pull request.
11. Address review feedback.
12. Merge only after required approvals and checks pass.
13. Publish through the normal build pipeline.

Contributors should improve existing canonical content rather than create competing versions.

## Decision records

Major curriculum and architecture decisions should be documented.

A decision record includes:

- context;
- decision;
- alternatives considered;
- reasons for the choice;
- consequences;
- migration requirements; and
- future considerations.

Decision records are especially important when changing:

- curriculum structure;
- schemas;
- terminology;
- prerequisite philosophy;
- authoring formats;
- frameworks;
- publishing pipelines;
- progress models; or
- learner-facing mental models.

## Publishing model

The public website should distinguish clearly among:

- **Planned** — present in the curriculum spine but not yet authored;
- **Draft** — under active development and not yet approved;
- **Reviewed** — content has passed required review but may not yet be public;
- **Published** — available to learners and covered by normal maintenance expectations;
- **Deprecated** — retained temporarily for migration or reference; and
- **Archived** — no longer part of the active curriculum.

The project should show an honest empty shelf rather than manufacture placeholder lesson bodies that appear complete.

## Long-term portability

The architecture should be capable of supporting future formats without rewriting the curriculum from scratch:

- multiple languages;
- offline editions;
- books and printable notes;
- presentation materials;
- videos and instructor resources;
- interactive courses;
- university curricula;
- corporate training;
- native applications;
- personalized pathways; and
- AI tutors.

These are future delivery modes, not reasons to delay the core curriculum.

## Success metrics

The architecture succeeds when:

- new contributors can understand the system quickly;
- curriculum changes are reviewable and traceable;
- new lessons integrate without duplication;
- broken dependencies are caught automatically;
- lesson quality improves over time;
- learners can trust every published item;
- the website can change without losing the curriculum;
- the curriculum remains coherent as the project grows; and
- educational content can be reused in future formats.

## Final principle

We are not building pages.

We are building a living educational system.

Every lesson, project, diagram, exercise, test, review, and architecture decision contributes to one outcome: helping complete beginners become thoughtful, capable, and professional AI engineers.
