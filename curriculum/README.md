# Curriculum

This directory will hold the authoritative, lesson-level Learn AI
curriculum: **13 stages**, each an ordered sequence of lessons that
takes a complete beginner from zero to professional AI engineering.

It is intentionally empty for now. The previous prototype's compressed
10-stage / 76-module data has been retired and will **not** be ported
over verbatim — the new curriculum is authored fresh against the
principles in [`../docs/learning-science.md`](../docs/learning-science.md)
and the schema in
[`../docs/curriculum-architecture.md`](../docs/curriculum-architecture.md).

Planned layout:

```
curriculum/
  README.md              ← this file
  stages/
    01-<slug>/
      stage.md
      lessons/
        01-<slug>.md
        02-<slug>.md
        ...
    ...
    13-<slug>/
```

Contributions should not be opened against this directory until the
13-stage spine and lesson schema are ratified in `docs/`.
