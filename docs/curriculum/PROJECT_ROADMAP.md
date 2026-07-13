---
name: Learn AI Project Roadmap
description: Canonical project-based progression from absolute beginner to professional AI engineer.
status: Draft for Founding Review
version: 0.1.0
last_updated: 2026-07-13
owners: Learn AI Curriculum Working Group
source_of_truth: >
  This document is the canonical source for the *practical* curriculum
  (what learners *build*). It sits below the Manifesto, PRD,
  LEARN_AI_GRADUATE_PROFILE_AND_COMPETENCY_FRAMEWORK.md, and
  LEARN_AI_KNOWLEDGE_ARCHITECTURE.md, and above lesson-level authoring.
  In case of conflict with lesson data, this roadmap governs which
  projects exist, their order, and what each must produce as evidence.
  Lesson authors adapt to the roadmap, not the other way around.
---

# Learn AI — Project Roadmap (v0.1)

> The learner becomes an AI engineer by shipping AI software, not by
> reading about it. This roadmap is the ordered list of everything a
> Learn AI graduate has *built* by the time they graduate.

## 0. How to read this document

Learn AI's curriculum has three orthogonal spines:

1. **Knowledge spine** — the 10 milestones in `curriculum/milestones/*`
   (concepts, mental models, deliberate practice).
2. **Competency spine** — capabilities defined in
   `LEARN_AI_GRADUATE_PROFILE_AND_COMPETENCY_FRAMEWORK.md`
   (what a graduate can do, and how it is evidenced).
3. **Project spine** — *this document* (what a graduate has shipped).

Projects are the load-bearing artifact. A learner who has completed the
project spine has, by construction, met the competencies and internalised
the knowledge — because they had to, to ship the projects.

### Project sizing vocabulary

Every project in this roadmap is one of four sizes. Effort ranges assume a
motivated beginner working part-time and include debugging, not just
happy-path coding.

| Size          | Effort         | Purpose                                     |
| ------------- | -------------- | ------------------------------------------- |
| **Micro**     | 1–3 hours      | Immediate application of a single concept.  |
| **Small**     | 4–10 hours     | Combine 2–3 concepts into one artifact.     |
| **Medium**    | 10–25 hours    | Realistic mini-app, portfolio-worthy.       |
| **Flagship**  | 25–80+ hours   | End-of-milestone, professional evidence.    |

### Milestone structure

Projects are grouped into **10 milestones**. Each milestone opens with an
entry state (what the learner already ships), lists its projects in
build-order, and closes with a **flagship project** that gates the next
milestone. A learner does not enter Milestone N+1 until the flagship of
Milestone N is deployed, documented, and defensible.

### Every project entry contains

- **Objective** — what the artifact *is*.
- **Learner outcome** — the durable capability the learner walks away with.
- **Core skills introduced** — new capabilities this project teaches.
- **Skills reinforced** — earlier capabilities exercised again.
- **Prerequisites** — projects and knowledge required to start.
- **Estimated effort** — size band + hours.
- **Portfolio value** — what a hiring manager or collaborator sees.
- **Stretch goals** — optional extensions for learners who want more.
- **Real-world equivalent** — the industry job / product this mirrors.

### Non-goals

- This is not a syllabus of lectures; it is a build list.
- This is not a list of tutorial projects; every project has a real user
  (even if that user is the learner themself), a real deployment target,
  and a real failure mode.
- This is not a course catalogue; the *order* is the pedagogy.

---

## 1. Milestones at a glance

```text
M1  Digital Literacy & the Web              →  Personal Web Presence
M2  Programming Foundations (Python)        →  CLI Toolkit
M3  Professional Python & Software Craft    →  Package + CI Pipeline
M4  Data Fluency (Wrangling, SQL, Viz)      →  Data Product
M5  Applied Math & Statistics for ML        →  Statistical Report App
M6  Classical Machine Learning              →  Predictive Service
M7  Deep Learning                           →  Trained Neural Model API
M8  LLMs & Applied Generative AI            →  RAG Assistant
M9  MLOps & Production AI Systems           →  Deployed, Monitored AI Product
M10 Capstone & Specialisation               →  Original AI Product + Case Study
```

Total ordered projects: **52** across the ten milestones, sized as a
mix of Micro, Small, Medium, and Flagship efforts. The precise size
distribution is governed by the milestone sections below; lesson-level
counts are downstream and are governed by `curriculum/milestones/*`.

---

## 2. Milestone 1 — Digital Literacy & the Web

**Entry state.** None. The learner may never have written code.

**Exit state.** The learner runs a shell, edits files with a real editor,
uses Git and GitHub, understands how the web serves pages, and has a
personal site deployed at a public URL under version control.

### M1.P1 — Set up a professional workstation (Micro, 2h)

- **Objective.** A working local environment: terminal, editor, Git,
  browser dev tools, a package manager, and an SSH key on GitHub.
- **Learner outcome.** Can open a project, edit it, and commit changes
  without friction.
- **Core skills introduced.** Shell basics, file system, editors,
  package managers, SSH keys.
- **Skills reinforced.** —
- **Prerequisites.** None.
- **Effort.** Micro, 1–3 hours.
- **Portfolio value.** Foundation only; not shown externally.
- **Stretch.** Dotfiles repo; terminal theme; keyboard shortcuts cheat
  sheet the learner wrote.
- **Real-world equivalent.** Day one of any engineering onboarding.

### M1.P2 — First HTML page, hand-written (Micro, 2h)

- **Objective.** A single semantic HTML page about the learner, opened
  locally and viewed in a browser.
- **Learner outcome.** Understands HTML as structured text and the
  browser as a rendering engine.
- **Core skills introduced.** Semantic HTML, DOM, browser dev tools.
- **Skills reinforced.** Files and editors.
- **Prerequisites.** M1.P1.
- **Effort.** Micro, 1–3 hours.
- **Portfolio value.** Foundational; not standalone.
- **Stretch.** Add print stylesheet.
- **Real-world equivalent.** Any HTML email or docs page.

### M1.P3 — Styled personal landing page (Small, 6h)

- **Objective.** The M1.P2 page, restyled with CSS: typography, layout,
  color, responsive behavior, dark mode.
- **Learner outcome.** Can turn design intent into working CSS.
- **Core skills introduced.** CSS box model, flex/grid, media queries,
  design tokens.
- **Skills reinforced.** Semantic HTML, dev tools.
- **Prerequisites.** M1.P2.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Basis of the personal site everything else is
  linked from.
- **Stretch.** Add a printed-CV variant using the same content.
- **Real-world equivalent.** A designer-developer building a marketing
  landing page.

### M1.P4 — Version control with Git and GitHub (Micro, 3h)

- **Objective.** M1.P3 pushed to GitHub with a clean history, README,
  license, and `.gitignore`.
- **Learner outcome.** Can initialise, commit, branch, merge, and push
  a project confidently.
- **Core skills introduced.** Git model, remotes, PRs, README hygiene.
- **Skills reinforced.** Shell, file system.
- **Prerequisites.** M1.P3.
- **Effort.** Micro, 1–3 hours.
- **Portfolio value.** Every future project lives here.
- **Stretch.** Add branch-protection rules; write a CONTRIBUTING.md.
- **Real-world equivalent.** Team engineering hygiene.

### M1.P5 — Interactive page with JavaScript (Small, 8h)

- **Objective.** Add a small interactive feature to the landing page —
  e.g. a tabbed section, a live word-counter, a filterable project list.
- **Learner outcome.** Reads and writes small JavaScript programs that
  react to user events.
- **Core skills introduced.** JS syntax, DOM manipulation, events,
  fetch, JSON.
- **Skills reinforced.** HTML, CSS, dev tools.
- **Prerequisites.** M1.P4.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Shows interactivity beyond static markup.
- **Stretch.** Add a JSON-fed "reading list" section.
- **Real-world equivalent.** Progressive enhancement on a marketing
  site.

### M1.P6 — Flagship: Deployed personal web presence (Medium, 15h)

- **Objective.** A multi-page personal site (home, about, projects,
  notes) deployed under a real domain or subdomain, with a working
  contact link and a public GitHub repo.
- **Learner outcome.** Owns a piece of the public web, end-to-end.
- **Core skills introduced.** DNS basics, static hosting, HTTPS,
  simple analytics, accessibility audits.
- **Skills reinforced.** HTML, CSS, JS, Git, README hygiene.
- **Prerequisites.** M1.P1–P5.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** The hub every subsequent project links to.
- **Stretch.** Add an RSS feed for the "notes" section; Lighthouse
  score ≥ 95 across the board.
- **Real-world equivalent.** A junior developer's public site / CV.

**Gate.** Learner cannot enter M2 until M1.P6 is deployed, publicly
reachable, and has at least three linked projects.

---

## 3. Milestone 2 — Programming Foundations (Python)

**Entry state.** M1 shipped.

**Exit state.** The learner can read, write, debug, and structure small
Python programs; can use the REPL, virtual environments, and the
standard library; and ships a real CLI toolkit others can install.

### M2.P1 — Python REPL warm-up (Micro, 2h)

- **Objective.** 30 tiny problems in the REPL: arithmetic, strings,
  lists, dicts, conditionals, loops, functions.
- **Learner outcome.** Comfortable running and debugging code
  interactively.
- **Core skills introduced.** Python syntax, primitive types, REPL.
- **Skills reinforced.** Shell.
- **Prerequisites.** M1.P6.
- **Effort.** Micro, 1–3 hours.
- **Portfolio value.** Foundational.
- **Stretch.** Solve the same 30 problems in a Jupyter notebook.
- **Real-world equivalent.** A working programmer prototyping.

### M2.P2 — Text file processor (Small, 6h)

- **Objective.** A script that reads a folder of `.txt` or `.md` files
  and outputs a report: word counts, longest lines, most common tokens,
  a summary CSV.
- **Learner outcome.** Can move data between files and Python data
  structures.
- **Core skills introduced.** File I/O, error handling, standard
  library (`pathlib`, `collections`, `csv`).
- **Skills reinforced.** Loops, functions.
- **Prerequisites.** M2.P1.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Small utility; goes in the "notes" section.
- **Stretch.** Add a `--json` output mode.
- **Real-world equivalent.** Data-plumbing script at any startup.

### M2.P3 — API-consuming script (Small, 8h)

- **Objective.** A script that calls a public HTTP API (weather,
  currency, GitHub), handles errors, and writes the results to disk.
- **Learner outcome.** Understands HTTP, JSON, and third-party
  libraries.
- **Core skills introduced.** `requests`/`httpx`, HTTP verbs, status
  codes, retries, rate limits.
- **Skills reinforced.** File I/O, error handling.
- **Prerequisites.** M2.P2.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** First "connected to the real world" project.
- **Stretch.** Cache responses on disk with a TTL.
- **Real-world equivalent.** A backend engineer integrating an API.

### M2.P4 — Interactive TUI utility (Medium, 12h)

- **Objective.** A terminal app that solves one real problem for the
  learner: a habit tracker, a Pomodoro timer with a log, a personal
  bookmark manager, or similar.
- **Learner outcome.** Can design a program larger than a single
  script.
- **Core skills introduced.** Argument parsing (`argparse`/`typer`),
  configuration files, persistence (JSON/SQLite), basic UX in a
  terminal.
- **Skills reinforced.** File I/O, standard library, functions.
- **Prerequisites.** M2.P3.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** First "real user, real problem" project.
- **Stretch.** Package it as installable via `pipx`.
- **Real-world equivalent.** An engineer building internal tooling.

### M2.P5 — Flagship: `cliops` toolkit (Medium, 20h)

- **Objective.** A CLI toolkit of three related sub-commands
  (learner-chosen — e.g. `notes new`, `notes search`, `notes export`)
  with tests, a README with a demo GIF, and installation instructions.
- **Learner outcome.** Ships a small library that another person can
  install, run, and understand.
- **Core skills introduced.** Sub-commands, module structure, unit
  tests, README-driven design.
- **Skills reinforced.** Argument parsing, persistence, error
  handling.
- **Prerequisites.** M2.P4.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** First "install this, try it" project.
- **Stretch.** Publish to TestPyPI.
- **Real-world equivalent.** An internal developer-experience CLI.

**Gate.** M2.P5 must be installable from a clean environment via the
learner's README instructions.

---

## 4. Milestone 3 — Professional Python & Software Craft

**Entry state.** M2 shipped.

**Exit state.** The learner writes Python with types, tests, linting,
and CI; understands packaging; and ships an installable library with
green CI on GitHub.

### M3.P1 — Add a test suite to `cliops` (Small, 6h)

- **Objective.** Add `pytest` tests covering happy paths and the two
  most likely failure modes for each sub-command.
- **Learner outcome.** Can specify behavior with tests.
- **Core skills introduced.** `pytest`, fixtures, parametrization.
- **Skills reinforced.** Module structure.
- **Prerequisites.** M2.P5.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Green badge on the repo.
- **Stretch.** Coverage report published as an artifact.
- **Real-world equivalent.** Adding tests to an untested service.

### M3.P2 — Typed refactor (Small, 6h)

- **Objective.** Add type hints across the toolkit; make `mypy` or
  `pyright` clean.
- **Learner outcome.** Uses types as design documents, not decoration.
- **Core skills introduced.** Type hints, generics, `TypedDict`,
  `Protocol`.
- **Skills reinforced.** Module structure, tests.
- **Prerequisites.** M3.P1.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Signals professionalism.
- **Stretch.** Enable strict mode.
- **Real-world equivalent.** Hardening a Python service.

### M3.P3 — Lint, format, pre-commit (Micro, 3h)

- **Objective.** Ruff + formatter + pre-commit hooks configured.
- **Learner outcome.** Style is automated, not argued about.
- **Core skills introduced.** Linters, formatters, pre-commit.
- **Skills reinforced.** Git.
- **Prerequisites.** M3.P2.
- **Effort.** Micro, 1–3 hours.
- **Portfolio value.** Foundational hygiene.
- **Stretch.** Add commit-message linting.
- **Real-world equivalent.** Any professional team.

### M3.P4 — Packaging & publish (Small, 8h)

- **Objective.** Configure `pyproject.toml`, build a wheel, publish
  the toolkit to TestPyPI and then PyPI.
- **Learner outcome.** Understands how Python code becomes an
  installable artifact.
- **Core skills introduced.** `pyproject.toml`, wheels/sdists,
  versioning, entry points.
- **Skills reinforced.** Module structure.
- **Prerequisites.** M3.P3.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A live PyPI page.
- **Stretch.** Semantic versioning + changelog.
- **Real-world equivalent.** Any open-source Python package.

### M3.P5 — Flagship: CI/CD pipeline (Medium, 15h)

- **Objective.** GitHub Actions pipeline: on PR, run lint + type-check
  + tests on 3 Python versions; on tag, build and publish.
- **Learner outcome.** Ships without manual steps and without fear.
- **Core skills introduced.** CI concepts, matrix builds, secrets,
  release automation.
- **Skills reinforced.** Tests, packaging, Git.
- **Prerequisites.** M3.P4.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** Green badges + real releases.
- **Stretch.** Publish docs to GitHub Pages automatically.
- **Real-world equivalent.** Any modern software team.

**Gate.** A green CI run on `main` that builds, tests, and publishes.

---

## 5. Milestone 4 — Data Fluency (Wrangling, SQL, Visualization)

**Entry state.** M3 shipped.

**Exit state.** The learner can obtain, clean, model, query, and
visualise data; ships a data product that answers a real question.

### M4.P1 — Notebook-first data exploration (Small, 6h)

- **Objective.** A Jupyter notebook that loads a public dataset,
  profiles it, and states three defensible findings.
- **Learner outcome.** Uses notebooks as a thinking medium.
- **Core skills introduced.** Jupyter, pandas basics, exploratory
  data analysis (EDA).
- **Skills reinforced.** Python, files, HTTP.
- **Prerequisites.** M3.P5.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** First data artifact.
- **Stretch.** Publish the notebook as an HTML page on the personal
  site.
- **Real-world equivalent.** An analyst's first day on a dataset.

### M4.P2 — Pandas transformation pipeline (Small, 10h)

- **Objective.** A scripted pipeline (not a notebook) that ingests raw
  CSV, cleans it, enforces a schema, and writes a canonical output.
- **Learner outcome.** Understands "the notebook is not the pipeline".
- **Core skills introduced.** Idiomatic pandas, schema validation
  (e.g. `pandera`/`pydantic`), reproducibility.
- **Skills reinforced.** Modules, tests.
- **Prerequisites.** M4.P1.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Shows engineering discipline on data.
- **Stretch.** Add data-quality reports on every run.
- **Real-world equivalent.** A data engineer's ingestion job.

### M4.P3 — Relational modelling & SQL (Medium, 12h)

- **Objective.** Design a small relational schema for the dataset;
  load it into SQLite/Postgres; answer 10 non-trivial questions in
  SQL.
- **Learner outcome.** Can think in relations and query them.
- **Core skills introduced.** Schema design, joins, aggregations,
  window functions, indexes.
- **Skills reinforced.** Data cleaning, pipelines.
- **Prerequisites.** M4.P2.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** A SQL notebook / query book.
- **Stretch.** Write the same queries against DuckDB and compare.
- **Real-world equivalent.** Analytics engineering.

### M4.P4 — Visualisation & narrative (Small, 8h)

- **Objective.** Produce a small "data story" page (five charts + a
  paragraph each) answering one focused question.
- **Learner outcome.** Turns data into decisions.
- **Core skills introduced.** Chart selection, matplotlib/plotly/vega
  fluency, accessible viz.
- **Skills reinforced.** EDA, pandas, SQL.
- **Prerequisites.** M4.P3.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A publishable article on the personal site.
- **Stretch.** Interactive charts with dropdown filters.
- **Real-world equivalent.** A data-journalism piece.

### M4.P5 — Flagship: Public data product (Medium, 25h)

- **Objective.** A deployed web app (Streamlit / FastAPI + minimal
  frontend / static + JSON) that lets a user explore a dataset the
  learner chose and prepared. Question-driven, not "here's a dataset".
- **Learner outcome.** Ships something the general public can use to
  answer a real question.
- **Core skills introduced.** Simple web deployment, caching,
  performance basics, product framing.
- **Skills reinforced.** Pipelines, SQL, visualisation.
- **Prerequisites.** M4.P1–P4.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** First deployed product.
- **Stretch.** Nightly refresh via GitHub Actions cron.
- **Real-world equivalent.** A data-product analyst's launch.

**Gate.** M4.P5 is deployed, has a real question in its heading, and a
non-technical friend can answer that question using the app.

---

## 6. Milestone 5 — Applied Math & Statistics for ML

**Entry state.** M4 shipped.

**Exit state.** The learner has the *practical* math to reason about
models: linear algebra intuition, calculus for gradient descent,
probability, and statistical inference — all embedded in code, not
lectures.

### M5.P1 — Linear algebra playground (Small, 8h)

- **Objective.** An interactive notebook that visualises vectors,
  transforms, dot products, projections, and matrix multiplication.
- **Learner outcome.** Sees linear algebra as geometry, not symbol
  pushing.
- **Core skills introduced.** NumPy, vectors/matrices, geometric
  intuition.
- **Skills reinforced.** Notebooks, visualisation.
- **Prerequisites.** M4.P5.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A teaching-quality notebook.
- **Stretch.** Add PCA on a real dataset at the end.
- **Real-world equivalent.** An ML engineer's mental warm-up.

### M5.P2 — Gradient descent from scratch (Small, 10h)

- **Objective.** Implement gradient descent for linear regression
  from scratch in NumPy; visualise the loss surface and trajectory.
- **Learner outcome.** Understands "training a model" mechanically.
- **Core skills introduced.** Derivatives in code, loss functions,
  optimisation loop.
- **Skills reinforced.** NumPy, viz.
- **Prerequisites.** M5.P1.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A short technical blog post.
- **Stretch.** Add momentum / Adam and compare.
- **Real-world equivalent.** Reading an ML paper without fear.

### M5.P3 — Probability & simulation lab (Small, 8h)

- **Objective.** Solve five classic probability problems by
  simulation *and* by formula, and compare.
- **Learner outcome.** Trusts probabilistic reasoning.
- **Core skills introduced.** Random variables, distributions, Monte
  Carlo, expectation.
- **Skills reinforced.** NumPy, viz.
- **Prerequisites.** M5.P2.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Notebook / blog post.
- **Stretch.** Add Bayesian coin-bias inference.
- **Real-world equivalent.** Any risk / A/B-test conversation.

### M5.P4 — Flagship: Statistical report app (Medium, 20h)

- **Objective.** A deployed app that takes a user's dataset (CSV
  upload), runs a defined statistical analysis (e.g. A/B test,
  proportion comparison, regression), and produces a readable report
  with confidence intervals and caveats.
- **Learner outcome.** Ships statistical reasoning as a product.
- **Core skills introduced.** Hypothesis testing, confidence intervals,
  effect sizes, reporting uncertainty honestly.
- **Skills reinforced.** Pipelines, visualisation, web deployment.
- **Prerequisites.** M5.P1–P3, M4.P5.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** A tool with a real audience (marketers,
  product managers).
- **Stretch.** Support Bayesian A/B analysis alongside frequentist.
- **Real-world equivalent.** A product data scientist's core tool.

**Gate.** M5.P4 is deployed; the learner can defend, in writing, the
statistical choices in its README.

---

## 7. Milestone 6 — Classical Machine Learning

**Entry state.** M5 shipped.

**Exit state.** The learner can frame a supervised-learning problem,
prepare data, train and evaluate models correctly, and expose a trained
model as an API.

### M6.P1 — First supervised model, end-to-end (Small, 10h)

- **Objective.** A notebook that trains a baseline classifier on a
  tabular dataset with proper train/validation/test splits and honest
  evaluation.
- **Learner outcome.** Runs the full ML loop once, without cheating.
- **Core skills introduced.** scikit-learn API, train/test
  discipline, baseline models.
- **Skills reinforced.** Pandas, stats.
- **Prerequisites.** M5.P4.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Foundational; not standalone.
- **Stretch.** Add a dummy classifier and compare seriously.
- **Real-world equivalent.** Any ML engineer's Monday.

### M6.P2 — Feature engineering & pipelines (Small, 10h)

- **Objective.** Rebuild M6.P1 using scikit-learn `Pipeline` and
  `ColumnTransformer`; add categorical encoding, scaling, and target
  transforms without leakage.
- **Learner outcome.** Prevents data leakage by construction.
- **Core skills introduced.** Pipelines, encoders, cross-validation.
- **Skills reinforced.** Data cleaning.
- **Prerequisites.** M6.P1.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Signals rigor.
- **Stretch.** Add feature-importance analysis.
- **Real-world equivalent.** Production feature code.

### M6.P3 — Model comparison & selection (Small, 8h)

- **Objective.** Compare 4+ model families with proper
  cross-validation and a single scoring metric justified in writing.
- **Learner outcome.** Chooses models on evidence, not aesthetics.
- **Core skills introduced.** Bias/variance, regularisation,
  ensembles, metric selection.
- **Skills reinforced.** Pipelines, statistics.
- **Prerequisites.** M6.P2.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A well-written model-selection note.
- **Stretch.** Add hyperparameter search with a fixed budget.
- **Real-world equivalent.** Any real ML project.

### M6.P4 — Regression + interpretability project (Medium, 15h)

- **Objective.** A regression model on a real-world dataset (housing,
  energy, retail — learner-chosen) with a written interpretability
  section: partial dependence, permutation importance, and honest
  limitations.
- **Learner outcome.** Treats a model as an object to be explained.
- **Core skills introduced.** Interpretability, feature importance,
  calibration.
- **Skills reinforced.** Pipelines, evaluation.
- **Prerequisites.** M6.P3.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** A serious technical write-up.
- **Stretch.** Add SHAP.
- **Real-world equivalent.** Regulated-industry ML work.

### M6.P5 — Flagship: Predictive service (Medium, 25h)

- **Objective.** Take one trained model and expose it as a FastAPI
  service with input validation, health checks, structured logging,
  Dockerfile, and CI. Deploy it.
- **Learner outcome.** Ships an ML model as a real service.
- **Core skills introduced.** Model serialisation, API design for ML,
  containers, deployment basics.
- **Skills reinforced.** Testing, CI, typing.
- **Prerequisites.** M6.P1–P4, M3.P5.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** First deployed ML service.
- **Stretch.** Add a small web UI that calls the service.
- **Real-world equivalent.** A junior ML engineer's first shipped
  model.

**Gate.** M6.P5 is deployed and responds to a POST with a prediction; a
one-page model card is committed to the repo.

---

## 8. Milestone 7 — Deep Learning

**Entry state.** M6 shipped.

**Exit state.** The learner has trained neural networks on both image
and text data with a modern framework, and understands the training
loop deeply enough to debug it.

### M7.P1 — MLP from scratch, then in PyTorch (Small, 10h)

- **Objective.** Implement a small MLP for a tabular problem twice:
  once with NumPy, once with PyTorch. Compare.
- **Learner outcome.** Demystifies "the framework".
- **Core skills introduced.** Tensors, autograd, PyTorch training
  loop.
- **Skills reinforced.** NumPy, gradient descent.
- **Prerequisites.** M6.P5, M5.P2.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A teaching-quality notebook.
- **Stretch.** Add mini-batching by hand in the NumPy version.
- **Real-world equivalent.** Framework onboarding.

### M7.P2 — Image classification project (Medium, 15h)

- **Objective.** Train a CNN (or a small ViT) to classify a real image
  dataset. Diagnose overfitting; apply augmentation; write up honest
  metrics.
- **Learner outcome.** Trains vision models with discipline.
- **Core skills introduced.** CNNs, augmentation, transfer learning,
  learning-rate scheduling.
- **Skills reinforced.** PyTorch, evaluation.
- **Prerequisites.** M7.P1.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** A notebook + demo.
- **Stretch.** Ship the classifier behind a small web UI.
- **Real-world equivalent.** A computer-vision engineer's baseline.

### M7.P3 — Text classification project (Medium, 15h)

- **Objective.** Train a text classifier (starting from token/embedding
  basics; then fine-tune a small pretrained model) on a real corpus.
- **Learner outcome.** Trains NLP models with awareness of
  tokenisation and evaluation traps.
- **Core skills introduced.** Tokenisation, embeddings, transfer
  learning for NLP.
- **Skills reinforced.** PyTorch, evaluation.
- **Prerequisites.** M7.P2.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** Notebook + demo.
- **Stretch.** Compare a linear baseline against the neural model.
- **Real-world equivalent.** A pre-LLM NLP engineer's day.

### M7.P4 — Experiment tracking & reproducibility (Small, 8h)

- **Objective.** Retrofit M7.P2 or M7.P3 with experiment tracking (W&B
  / MLflow / plain-text), fixed seeds, and a reproducible run script.
- **Learner outcome.** Runs experiments others can replicate.
- **Core skills introduced.** Tracking, config management,
  determinism.
- **Skills reinforced.** CLI, packaging.
- **Prerequisites.** M7.P3.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Signals research hygiene.
- **Stretch.** Publish a leaderboard notebook.
- **Real-world equivalent.** Industrial ML research.

### M7.P5 — Flagship: Trained-model API (Medium, 25h)

- **Objective.** Take one deep-learning model (image or text) and
  ship it behind a real API with batching, GPU/CPU switch, latency
  and cost measured, and a written model card.
- **Learner outcome.** Deploys a neural model responsibly.
- **Core skills introduced.** Inference optimisation basics,
  batching, latency measurement, model cards.
- **Skills reinforced.** APIs, containers, CI.
- **Prerequisites.** M7.P2–P4, M6.P5.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** First deployed neural service.
- **Stretch.** Quantise the model and re-measure latency.
- **Real-world equivalent.** An ML platform engineer's first launch.

**Gate.** M7.P5 is deployed, latency + cost are documented, and the
model card discloses known failure modes.

---

## 9. Milestone 8 — LLMs & Applied Generative AI

**Entry state.** M7 shipped.

**Exit state.** The learner builds real LLM applications with
retrieval, tools, evaluation, and safety in mind — and knows the
difference between a demo and a product.

### M8.P1 — Prompt engineering lab (Small, 6h)

- **Objective.** Design, version, and evaluate prompts for three
  distinct tasks (extraction, classification, rewriting) against a
  labeled test set.
- **Learner outcome.** Treats prompts as code, with evaluation.
- **Core skills introduced.** Prompt patterns, structured outputs,
  eval sets.
- **Skills reinforced.** Data prep, evaluation.
- **Prerequisites.** M7.P5.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A serious "prompts as code" note.
- **Stretch.** Add automatic regression tests for prompts.
- **Real-world equivalent.** Applied AI at any modern startup.

### M8.P2 — Structured-output extraction service (Small, 10h)

- **Objective.** A service that takes messy input text and returns
  validated structured JSON (Pydantic-typed), with retries on schema
  failure.
- **Learner outcome.** Ships LLM output that downstream code can
  trust.
- **Core skills introduced.** JSON-mode / function-calling, Pydantic
  validation, retry loops.
- **Skills reinforced.** APIs, typing.
- **Prerequisites.** M8.P1.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A reusable extraction service.
- **Stretch.** Add human-in-the-loop review UI.
- **Real-world equivalent.** Back-office automation.

### M8.P3 — Embeddings + semantic search (Medium, 12h)

- **Objective.** Build a searchable index over a personal corpus
  (notes, docs, papers) using embeddings and a vector store. Compare
  against a keyword baseline.
- **Learner outcome.** Understands retrieval as its own engineering
  problem.
- **Core skills introduced.** Embeddings, chunking, vector stores,
  hybrid search.
- **Skills reinforced.** Pipelines, evaluation.
- **Prerequisites.** M8.P2.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** A personal semantic-search tool.
- **Stretch.** Add re-ranking with a cross-encoder.
- **Real-world equivalent.** The retrieval half of every RAG system.

### M8.P4 — Tool-using / agentic workflow (Medium, 15h)

- **Objective.** Build a scoped workflow where an LLM calls two or
  three well-defined tools (e.g. calculator, database query, HTTP
  fetch) with a guardrailed control loop.
- **Learner outcome.** Designs LLM systems with tools, not just
  prompts.
- **Core skills introduced.** Tool schemas, control flow, cost/latency
  budgets, guardrails.
- **Skills reinforced.** APIs, structured outputs.
- **Prerequisites.** M8.P3.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** A defensible agent, not a hype demo.
- **Stretch.** Add a safety layer that refuses out-of-scope tasks.
- **Real-world equivalent.** Applied-AI engineer role.

### M8.P5 — LLM evaluation suite (Small, 10h)

- **Objective.** Build an evaluation harness for one of the earlier
  LLM projects: golden examples, automatic metrics, LLM-as-judge with
  disclosed caveats, and regression detection.
- **Learner outcome.** Treats LLM quality as measurable.
- **Core skills introduced.** Eval design, golden sets, judge bias,
  drift detection.
- **Skills reinforced.** Testing, data prep.
- **Prerequisites.** M8.P4.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A rare and valuable artifact.
- **Stretch.** Wire it into CI to block regressions.
- **Real-world equivalent.** Applied-AI quality engineer.

### M8.P6 — Flagship: RAG assistant with evaluations (Flagship, 40h)

- **Objective.** A deployed RAG assistant grounded in a real corpus,
  with citations, cost/latency measured per query, a written eval
  report, refusal behavior, and a public demo.
- **Learner outcome.** Ships a real LLM product, not a toy.
- **Core skills introduced.** End-to-end RAG design, citation UX,
  cost accounting, safety.
- **Skills reinforced.** Retrieval, structured outputs, evaluation,
  deployment.
- **Prerequisites.** M8.P1–P5, M7.P5.
- **Effort.** Flagship, 25–80 hours.
- **Portfolio value.** The centerpiece of a job application.
- **Stretch.** Add multi-turn memory with an ablation study.
- **Real-world equivalent.** A production applied-AI system.

**Gate.** M8.P6 is deployed, has a public eval report, and refuses at
least one class of out-of-scope query on purpose.

---

## 10. Milestone 9 — MLOps & Production AI Systems

**Entry state.** M8 shipped.

**Exit state.** The learner runs AI systems in production: observed,
tested, cost-aware, cheaper to change than to rewrite.

### M9.P1 — Observability retrofit (Small, 10h)

- **Objective.** Add structured logs, metrics, and distributed
  tracing to the RAG assistant.
- **Learner outcome.** Can debug a live system from logs alone.
- **Core skills introduced.** Structured logging, metrics, tracing,
  dashboards.
- **Skills reinforced.** APIs, deployment.
- **Prerequisites.** M8.P6.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A dashboard link.
- **Stretch.** Alerting rules with thresholds justified in writing.
- **Real-world equivalent.** Any SRE-adjacent role.

### M9.P2 — Cost & performance engineering (Small, 10h)

- **Objective.** Measure per-request cost and latency; apply two
  optimisations (caching, batching, quantisation, smaller model,
  routing) and document the trade-offs.
- **Learner outcome.** Optimises with numbers, not vibes.
- **Core skills introduced.** Cost accounting, caching, model
  routing.
- **Skills reinforced.** Observability, evaluation.
- **Prerequisites.** M9.P1.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A before/after report.
- **Stretch.** Add a live cost dashboard.
- **Real-world equivalent.** Applied-AI cost owner.

### M9.P3 — Data & model versioning (Small, 10h)

- **Objective.** Version datasets, models, and prompts; make one
  earlier project reproducible by pinning versions and re-running.
- **Learner outcome.** Rolls back and forward safely.
- **Core skills introduced.** DVC / lakeFS / plain S3+manifests,
  model registries, prompt versioning.
- **Skills reinforced.** Reproducibility, packaging.
- **Prerequisites.** M9.P2.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** Signals maturity.
- **Stretch.** Automate rollback via CI.
- **Real-world equivalent.** ML platform work.

### M9.P4 — Continuous evaluation & drift (Medium, 15h)

- **Objective.** Continuous evaluation on production traffic
  (sampled), with detection of quality drift and data drift, and a
  documented response playbook.
- **Learner outcome.** Keeps a live system honest over time.
- **Core skills introduced.** Online evaluation, drift metrics,
  incident playbooks.
- **Skills reinforced.** Eval, observability.
- **Prerequisites.** M9.P3.
- **Effort.** Medium, 10–25 hours.
- **Portfolio value.** A production discipline rarely seen in
  portfolios.
- **Stretch.** Shadow-deploy a competing model behind a flag.
- **Real-world equivalent.** ML platform / applied-AI ops.

### M9.P5 — Responsible AI & safety review (Small, 10h)

- **Objective.** Produce a written safety review for the RAG
  assistant: intended use, misuse, data provenance, PII handling,
  refusal behavior, red-team findings.
- **Learner outcome.** Takes responsibility for what they ship.
- **Core skills introduced.** Threat modelling, red-teaming,
  data-governance basics.
- **Skills reinforced.** Documentation.
- **Prerequisites.** M9.P4.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A serious, employer-visible document.
- **Stretch.** Third-party review by a peer with a written response.
- **Real-world equivalent.** Responsible-AI role.

### M9.P6 — Flagship: Deployed, monitored AI product (Flagship, 40h)

- **Objective.** One project from M6–M8 promoted to a production-grade
  service: CI/CD, observability, cost control, versioning, evals,
  runbook, and a status page.
- **Learner outcome.** Runs an AI product, not a demo.
- **Core skills introduced.** Runbooks, SLOs, on-call thinking, blue/
  green or canary deploys.
- **Skills reinforced.** Everything in M9.
- **Prerequisites.** M9.P1–P5.
- **Effort.** Flagship, 25–80 hours.
- **Portfolio value.** Employer-grade evidence.
- **Stretch.** Simulate an incident and write the postmortem.
- **Real-world equivalent.** A production applied-AI system with an
  on-call engineer.

**Gate.** M9.P6 is live, has a public status page, and its runbook has
been used at least once against a real (or drilled) incident with a
written postmortem.

---

## 11. Milestone 10 — Capstone & Specialisation

**Entry state.** M9 shipped.

**Exit state.** The learner has an original AI product used by real
users, a public case study, and a chosen specialisation with a
matching final artifact.

### M10.P1 — Discovery & problem framing (Small, 10h)

- **Objective.** Choose a real user (not the learner). Interview them.
  Frame a problem. Write a one-page product brief with the smallest
  possible v0.
- **Learner outcome.** Selects problems worth solving.
- **Core skills introduced.** Discovery interviews, problem framing,
  scoping.
- **Skills reinforced.** Writing.
- **Prerequisites.** M9.P6.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** A published product brief.
- **Stretch.** Interview three users and synthesise.
- **Real-world equivalent.** PM / founding-engineer discovery.

### M10.P2 — Capstone v0 (Flagship, 50h)

- **Objective.** Build and deploy the v0 of the capstone product.
  Real users, real data, real deployment. Uses at least three
  capabilities from earlier milestones (e.g. RAG + evals +
  observability).
- **Learner outcome.** Ships a product from a brief.
- **Core skills introduced.** System design integrating prior
  capabilities.
- **Skills reinforced.** Nearly all prior projects.
- **Prerequisites.** M10.P1.
- **Effort.** Flagship, 25–80+ hours.
- **Portfolio value.** The single strongest artifact in the portfolio.
- **Stretch.** Onboard a second user cohort.
- **Real-world equivalent.** Founding engineer / product-minded ML
  engineer.

### M10.P3 — Capstone case study (Small, 10h)

- **Objective.** A written and diagrammed case study: problem,
  approach, architecture, evaluation, cost, failure modes, and
  lessons learned.
- **Learner outcome.** Communicates engineering work to a non-expert
  audience.
- **Core skills introduced.** Technical writing at portfolio depth.
- **Skills reinforced.** Documentation.
- **Prerequisites.** M10.P2.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** The document a hiring manager will read first.
- **Stretch.** A short recorded walkthrough.
- **Real-world equivalent.** A published engineering blog post.

### M10.P4 — Specialisation deep-dive (Flagship, 40h)

- **Objective.** One deep artifact in the learner's chosen
  specialisation:
  - **Applied AI / Product AI** — a second capstone feature at
    production quality.
  - **ML Platform** — a reusable ML-platform component (e.g. a
    feature store slice, a model registry, an eval service).
  - **Research-adjacent** — a reproduction of a paper with an
    ablation and a written critique.
  - **Data / Analytics AI** — an analytics-facing AI product with a
    business owner.
  - **Safety / Responsible AI** — a red-team report and mitigation
    plan on a real deployed system (with permission).
- **Learner outcome.** Signals a direction of professional strength.
- **Core skills introduced.** Specialisation-specific.
- **Skills reinforced.** All prior milestones.
- **Prerequisites.** M10.P3.
- **Effort.** Flagship, 25–80 hours.
- **Portfolio value.** Second flagship artifact.
- **Stretch.** Present it publicly (talk, meetup, workshop).
- **Real-world equivalent.** Mid-level specialisation.

### M10.P5 — Graduation defense (Small, 8h)

- **Objective.** A written and (optionally) recorded defense: what
  was built, why, what was learned, what would be done differently.
- **Learner outcome.** Owns their own story.
- **Core skills introduced.** Reflective writing, career narrative.
- **Skills reinforced.** All.
- **Prerequisites.** M10.P4.
- **Effort.** Small, 4–10 hours.
- **Portfolio value.** The narrative that ties the portfolio
  together.
- **Stretch.** Public defense to peers.
- **Real-world equivalent.** The interview loop.

**Gate.** M10.P2 has at least one real, non-learner user; M10.P3 and
M10.P5 are published; M10.P4 is deployed or fully documented.

---

## 12. Cross-cutting requirements

Every project in this roadmap must, without exception:

1. Live in a public Git repository under version control from commit 1.
2. Have a README that a stranger can follow to run it locally.
3. Have an honest **status** section (works / limitations / known
   bugs).
4. State its **prerequisites** and link to the project(s) upstream.
5. Be reachable from the learner's personal site (M1.P6) once shipped.
6. From M6 onward, include a **model card** or **system card**
   proportional to the project's size.
7. From M8 onward, include a written **evaluation** section — at
   minimum, a golden set and how it was scored.
8. From M9 onward, include a **runbook** and a stated cost/latency
   budget.

Failure to meet these cross-cutting requirements means the project is
not "shipped" for roadmap purposes, regardless of code quality.

---

## 13. Alignment with governance documents

- **Manifesto / PRD** — the roadmap operationalises the promise that a
  complete beginner reaches professional AI engineering by *building*.
- **`LEARN_AI_GRADUATE_PROFILE_AND_COMPETENCY_FRAMEWORK.md`** — every
  competency ID in the graduate profile is evidenced by at least one
  project in this roadmap. A future revision (v0.2) will add a
  cross-reference appendix mapping each competency to the projects
  that evidence it.
- **`LEARN_AI_KNOWLEDGE_ARCHITECTURE.md`** — every domain in the
  knowledge architecture is exercised by at least one project. A
  future revision (v0.2) will add a domain-coverage matrix.

Where lesson-level content and this roadmap disagree on scope, order,
or exit criteria, **this roadmap governs**. Lesson authors either fit
their lesson under an existing project or propose a new project via
the governance process below.

---

## 14. Governance

- **Owners.** Learn AI Curriculum Working Group.
- **Cadence.** Reviewed at least quarterly, and whenever a milestone's
  flagship is materially changed.
- **Change control.** Adding, removing, or reordering a project
  requires a written proposal with: rationale, competencies gained/
  lost, impact on downstream milestones, and a migration plan for
  learners in flight.
- **Versioning.** Semver. Breaking changes to milestone gates or
  flagship definitions require a major bump.
- **Non-contradiction rule.** Lower-level artifacts (stage/module/
  lesson data) must not contradict this roadmap. If they do, this
  roadmap is corrected first, then the artifacts follow.

---

## 15. v0.1 approval checklist

- [ ] 10 milestones defined with entry and exit states.
- [ ] Every milestone ends in a flagship project with a gate.
- [ ] Every project has: objective, learner outcome, core skills
      introduced, skills reinforced, prerequisites, effort, portfolio
      value, stretch goals, real-world equivalent.
- [ ] Cross-cutting shipping requirements defined.
- [ ] Alignment statements with Manifesto/PRD, Graduate Profile, and
      Knowledge Architecture present.
- [ ] Governance, cadence, versioning, and non-contradiction rule
      recorded.
- [ ] Document marked **Draft for Founding Review**, version
      **0.1.0**, dated **2026-07-13**.

*End of document.*
