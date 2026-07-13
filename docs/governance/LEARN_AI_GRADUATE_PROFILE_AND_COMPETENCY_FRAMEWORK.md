---
title: Learn AI Graduate Profile and Competency Framework
status: Draft for Founding Review
version: 0.1.0
last_updated: 2026-07-12
owners:
  - Learn AI Curriculum Council
  - Learn AI Founding Editors
source_of_truth: >
  This document is the governing definition of what a Learn AI graduate
  is, what they can do, and how their capability is evidenced. Where any
  curriculum file, lesson, assessment, roadmap, marketing page, or
  platform feature contradicts this document, this document wins and the
  lower artifact must be corrected. It sits above the Curriculum Bible
  and below only the Manifesto and Product Requirements Document (PRD).
canonical_path: docs/governance/LEARN_AI_GRADUATE_PROFILE_AND_COMPETENCY_FRAMEWORK.md
---

# Learn AI — Graduate Profile and Competency Framework

> "We do not certify time spent. We certify what a person can do,
> unaided, in front of a real problem, with real stakes."

## 0. Metadata and Reading Guide

- **Status:** Draft for Founding Review
- **Version:** 0.1.0
- **Last updated:** 2026-07-12
- **Owners:** Learn AI Curriculum Council; Learn AI Founding Editors
- **Audience:** Curriculum authors, reviewers, platform engineers,
  employers, prospective graduates, and any AI system (including the
  Lovable build agent) that generates or modifies Learn AI content.
- **How to read this document:**
  - Sections 1–3 define the *what* and *why*.
  - Sections 4–7 define the competency model, mastery model, and
    progression model — the substantive core.
  - Sections 8–10 define how competency is *evidenced* and how a
    learner *graduates*.
  - Section 11 defines what this credential explicitly does not claim.
  - Section 12 defines governance and change control.
  - Appendix A is the machine-readable-style competency catalog with
    stable IDs. Downstream artifacts should reference those IDs.

---

## 1. Purpose, Authority, Scope, and Relationships

### 1.1 Purpose

This document answers a single question: **What must be true of a
person for Learn AI to call them a graduate?** It exists so that every
lesson, every assessment, every capstone, and every credentialing
decision is anchored to one explicit, defensible standard rather than
to the taste of whoever last edited a module.

It replaces "trust us" with a written contract between Learn AI and its
learners: here is the bar, here is how we test it, here is what we do
not claim.

### 1.2 Authority

- This document is **binding** on all Learn AI curriculum, courses,
  modules, lessons, assessments, capstones, rubrics, and marketing
  claims about graduate capability.
- Curriculum authors and reviewers **must** cite the competency IDs in
  Appendix A when a lesson or assessment is intended to build or
  measure a specific capability.
- Lower artifacts (curriculum spine, module briefs, lesson bodies,
  UI copy) **may not contradict** this document. If a conflict is
  discovered, the lower artifact is wrong until amended or until this
  document is amended through Section 12.
- Only the Manifesto (`docs/mission-and-prd.md` mission section) and
  the PRD override this document. All other artifacts are downstream.

### 1.3 Scope

This document defines:

1. Who a Learn AI graduate is.
2. What competencies they hold and to what standard.
3. How those competencies progress from beginner to professional.
4. What evidence is acceptable that a competency has been demonstrated.
5. What Learn AI does *not* certify.
6. How this document is governed.

It does **not** define:

- Specific lesson content or sequencing (that is the Curriculum Bible
  and `curriculum/`).
- Platform UX, pricing, or business model (that is the PRD and product
  docs).
- Individual assessment items (those live in the assessment library
  and reference competency IDs from Appendix A).

### 1.4 Relationship to other artifacts

```text
Manifesto  (why we exist)
   │
PRD  (what we are building and for whom)
   │
THIS DOCUMENT — Graduate Profile & Competency Framework
   │
Curriculum Bible  (what we teach, in what order, and why)
   │
Knowledge Architecture  (how knowledge is decomposed and linked)
   │
Curriculum spine  (stages → modules → lessons in /curriculum)
   │
Lesson bodies, interactives, assessments, capstones
   │
Platform UI, routes, components
```

Reading order for a new contributor: Manifesto → PRD → **this
document** → Curriculum Bible → Knowledge Architecture → curriculum
spine → target lesson.

---

## 2. Definition of a Learn AI Graduate

A **Learn AI graduate** is a person who, having entered Learn AI with
no assumed prior knowledge of programming, mathematics, computer
science, or AI, has demonstrated — through unaided, evidenced
performance — that they can:

1. Take an ambiguous real-world problem, decide whether AI is an
   appropriate approach at all, and justify that decision.
2. If AI is appropriate, design, build, evaluate, deploy, monitor, and
   responsibly operate an end-to-end AI system that solves that
   problem, using contemporary tools and techniques.
3. Read, criticize, and extend the work of other AI engineers,
   including code, papers of moderate difficulty, model cards,
   evaluation reports, and system designs.
4. Communicate their reasoning, uncertainty, and trade-offs to
   non-technical stakeholders and to technical peers with equal
   clarity.
5. Continue to learn deliberately as the field changes, without
   depending on Learn AI or any single instructor.

A graduate is **not** a specialist. A graduate is a *competent
generalist AI engineer* on whom a specialization can be safely built.

---

## 3. Graduate Identity and Professional Standard

### 3.1 Professional identity

A Learn AI graduate identifies as an **AI engineer**: a builder of
working AI systems, accountable for the behavior of those systems in
production. They are not primarily a researcher, not primarily a data
analyst, and not primarily a "prompt user." They can collaborate with
all three.

### 3.2 Professional standard

A graduate meets the following non-negotiable standard on their first
day of professional work:

- **Truthful about capability.** They can state precisely what they
  can and cannot do, and refuse work outside that boundary.
- **Reproducible by default.** Their code, experiments, and evaluations
  can be re-run by a colleague from a clean checkout.
- **Evaluated before shipped.** They do not ship AI behavior they have
  not measured.
- **Observed after shipped.** They do not consider a system "done" at
  deploy; they instrument, monitor, and respond.
- **Safe by construction where feasible.** They apply least privilege,
  input validation, and privacy-by-design as defaults, not as
  afterthoughts.
- **Cost-aware.** They can estimate and defend the compute, data, and
  human cost of their choices.
- **Honest about uncertainty.** They quantify and communicate model
  and system uncertainty; they do not oversell.
- **Kind and clear.** They explain their systems in language the
  affected humans understand.

### 3.3 Behavioral hallmarks

A graduate is recognizable by the following behaviors:

- Asks "what are we actually trying to do for whom?" before "what
  model?".
- Writes the evaluation before the model.
- Prefers the smallest system that solves the problem.
- Documents assumptions and failure modes as first-class artifacts.
- Reads code, papers, and dashboards; does not just generate them.
- Files an incident report when a system misbehaves, even a small one.
- Treats data subjects as stakeholders, not as rows.

---

## 4. Competency Model

The competency model is organized into **19 domains**. Each domain has
capabilities, a minimum professional standard, acceptable evidence,
common false signals of mastery, and prerequisite relationships.

Competencies are identified by stable IDs of the form
`{DOMAIN}-{SUBAREA}-{NNN}` (see Appendix A). Downstream artifacts
**must** cite these IDs.

Rubric legend used throughout:

- **Capabilities:** what the graduate can do.
- **Standard:** the minimum bar for graduation.
- **Evidence:** artifacts and performances that count.
- **False signals:** things that look like mastery but are not.
- **Prerequisites:** other domains or IDs that must be in place first.

---

### 4.1 Learning and Metacognition (`LM`)

**Why it matters.** AI changes faster than any static curriculum. A
graduate who cannot learn deliberately becomes obsolete inside a year.

**Capabilities.**

- Diagnose their own confusion and locate its exact source.
- Design a study plan with retrieval, spaced review, and self-testing.
- Distinguish "I recognize this" from "I can produce this unaided."
- Read a technical text with a specific question and extract only
  what answers it.
- Know when to ask for help, whom to ask, and how to ask well.

**Standard.** Given a topic they have never seen and a one-week
budget, they produce a written learning plan, execute it, and pass a
transfer task on that topic set by an instructor.

**Evidence.** Learning journals with dated retrieval checks; a
recorded "teach-back" of a new topic; passing a delayed retention
check ≥14 days after first exposure.

**False signals.** Highlighting; re-reading; watching lectures at 2×
without pausing; long Notion vaults with no retrieval.

**Prerequisites.** None; introduced Stage 0.

---

### 4.2 Digital Fluency and Computing Foundations (`DF`)

**Why it matters.** You cannot engineer what you cannot operate. Most
"AI bugs" are actually filesystem, environment, or OS bugs in
disguise.

**Capabilities.**

- Operate a modern OS from a shell: files, permissions, processes,
  environment variables, package managers.
- Explain what a computer does at the level of CPU/memory/storage/OS
  well enough to reason about performance.
- Understand text encodings, line endings, paths, and time zones well
  enough to not be surprised by them.
- Use a browser's developer tools, read an HTTP request/response, and
  read a DNS/TLS failure.

**Standard.** From a clean machine, can install a Python toolchain,
clone a repo, configure secrets, run tests, and diagnose a failure
end-to-end without hand-holding.

**Evidence.** A recorded terminal session solving a bootstrap task;
successful bring-up of the Stage-2 workstation lab; a written
post-mortem of a self-inflicted environment bug.

**False signals.** "I use VS Code." Copying commands without reading
them. Fear of the shell disguised as preference for GUIs.

**Prerequisites.** `LM`.

---

### 4.3 Computational Thinking (`CT`)

**Why it matters.** Before any language, a graduate must be able to
decompose a problem, model it, and reason about correctness and cost.

**Capabilities.**

- Decompose a vague problem into sub-problems with clear inputs and
  outputs.
- Choose an appropriate representation (list, table, graph, tree,
  matrix).
- Reason about time and space cost at the level of "does this scale?"
- Design and dry-run an algorithm before writing code.
- Distinguish "the code runs" from "the code is correct."

**Standard.** Given a novel problem, produces a written decomposition,
a chosen representation with justification, and a testable algorithm
before writing any code.

**Evidence.** Design docs with dry-run tables; whiteboard-style
problem breakdowns; commentary on submitted code explaining the
representation choice.

**False signals.** Leetcode streaks without design writeups. Jumping
to code immediately.

**Prerequisites.** `LM`, `DF`.

---

### 4.4 Python and Programming (`PY`)

**Why it matters.** Python is the working language of contemporary AI
engineering. Fluency here is table stakes.

**Capabilities.**

- Idiomatic Python: types, comprehensions, generators, context
  managers, dataclasses, exceptions, logging.
- Modules, packages, virtual environments, dependency pinning.
- Testing with `pytest`: unit, parameterized, fixtures, integration.
- Standard library mastery for I/O, `datetime`, `pathlib`, `re`,
  `itertools`, `functools`, `concurrent.futures`, `asyncio` basics.
- Debugging with `pdb`, `logging`, and profilers.
- Reading and refactoring code written by others.

**Standard.** Can build a small, tested Python package with a CLI, CI,
type hints, and documentation, and can refactor a 1,000-line untyped
script to be testable without changing its behavior.

**Evidence.** A published package or repo with green CI, ≥80% branch
coverage where meaningful, type hints, and a `README` a beginner can
follow; a recorded refactor session; passing code review by a
maintainer.

**False signals.** "I know Python" based on notebooks alone. Passing
scripts without tests. Copy-pasted `try/except: pass`.

**Prerequisites.** `CT`, `DF`.

---

### 4.5 Computer Science Foundations (`CS`)

**Why it matters.** AI engineers debug distributed, memory-bound,
latency-sensitive systems. Ignorance of CS fundamentals shows up as
mysterious production incidents.

**Capabilities.**

- Data structures: arrays, hash maps, trees, heaps, graphs, and when
  to choose each.
- Algorithms: sorting, searching, recursion, dynamic programming,
  graph traversal — at a working, not competitive, level.
- Complexity: big-O intuition; distinguishing tight loops from I/O
  bound work.
- Concurrency vs parallelism vs asynchrony; race conditions and
  deadlocks at a conceptual level.
- Memory model: stack vs heap; references; ownership implications for
  Python objects; when Python's GIL matters.

**Standard.** Given a slow system, can identify whether the bottleneck
is algorithmic, I/O, memory, or concurrency, and justify with a
measurement — not a guess.

**Evidence.** Profiling reports; a written "why this is O(n log n)
and not O(n²)"; a debugging journal of a real perf incident.

**False signals.** Reciting big-O of textbook sorts while writing
O(n²) code in practice.

**Prerequisites.** `PY`, `CT`.

---

### 4.6 Software Engineering (`SE`)

**Why it matters.** AI systems are software systems first. A model
that cannot be built, tested, reviewed, released, and rolled back is
not a product.

**Capabilities.**

- Version control with Git: branches, rebases, conflict resolution,
  bisect, disciplined commit messages.
- Code review, both giving and receiving, on real changes.
- Test strategy: unit, integration, end-to-end, contract; test
  pyramids and where to invest.
- Design: modularity, interfaces, dependency inversion, avoiding
  premature abstraction.
- Documentation: `README`, ADRs, design docs, API docs.
- CI/CD: automated tests, linters, type checkers, reproducible builds.
- Reading and modifying an unfamiliar codebase safely.

**Standard.** Can join an existing codebase, land a non-trivial
change under review, with tests, docs, and a working release.

**Evidence.** Merged PRs to a non-toy repository; an ADR they
authored; a code review they gave that improved a peer's PR.

**False signals.** Green tests that don't test anything. `main`-only
workflows on multi-person projects.

**Prerequisites.** `PY`, `CS`.

---

### 4.7 Mathematics for AI (`MA`)

**Why it matters.** Without linear algebra, calculus, and
optimization at working strength, model behavior is a black box that
cannot be diagnosed.

**Capabilities.**

- Linear algebra: vectors, matrices, dot products, norms,
  projections, rank, eigenvalues, SVD at an applied level.
- Calculus: derivatives, gradients, Jacobians, chain rule; what
  backpropagation actually computes.
- Optimization: convexity, gradient descent variants, learning-rate
  intuition, saddle points, ill-conditioning.
- Numerical stability: floating point, overflow/underflow, log-space
  computation.

**Standard.** Given a small model, can derive its gradient by hand
for a scalar case and match it against autograd; can explain what
each hyperparameter controls in terms of the loss surface.

**Evidence.** Hand-derived gradients checked against `torch.autograd`;
written explanations of a training curve pathology; a from-scratch
implementation of gradient descent on a nontrivial function.

**False signals.** Reciting "backprop is the chain rule." Passing a
quiz with no ability to reason about a new loss.

**Prerequisites.** `PY`, `CT`.

---

### 4.8 Probability and Statistics (`PS`)

**Why it matters.** Every AI claim is a probabilistic claim. A
graduate must not confuse correlation, causation, and confidence.

**Capabilities.**

- Probability: random variables, joint/marginal/conditional,
  independence, expectation, variance.
- Common distributions and when they arise.
- Estimation: bias, variance, MLE, MAP, Bayesian intuition.
- Hypothesis testing and its abuses; p-values, confidence intervals,
  effect size, multiple comparisons.
- Uncertainty quantification: calibration, intervals, proper scoring
  rules.
- Causal thinking at the level of confounders, colliders, and
  interventions.

**Standard.** Given a claim like "our model improved accuracy by
2%", can specify what would make that claim credible, run the
appropriate test, and communicate the uncertainty honestly.

**Evidence.** A written analysis of a real A/B test including power,
effect size, and pitfalls; a calibration plot with commentary; a
counter-example to a naive causal claim in their own words.

**False signals.** Point estimates without intervals. "Statistically
significant" as a synonym for "true."

**Prerequisites.** `MA`.

---

### 4.9 Data Analysis and Data Engineering (`DA`)

**Why it matters.** Most AI failures are data failures. A graduate
must be dangerous with data before they are dangerous with models.

**Capabilities.**

- SQL to a working professional level: joins, window functions,
  aggregation, CTEs, indexes, query plans.
- DataFrame fluency (`pandas`/`polars`): joins, groupby, reshape,
  time series, memory-aware operations.
- Data quality: schemas, types, missingness, duplicates, drift,
  leakage.
- Ingestion, storage layouts (row vs columnar), partitioning, and
  file formats (CSV, Parquet, JSONL).
- Pipelines: idempotency, backfills, dependency graphs, orchestrators
  at a conceptual level.
- Data documentation: datasheets and provenance.

**Standard.** Given a raw, ugly dataset, can produce a clean,
documented, versioned dataset with a written datasheet, a repeatable
pipeline, and a leakage audit.

**Evidence.** A published dataset with datasheet and pipeline; a SQL
notebook solving nontrivial analytical questions; a written leakage
post-mortem.

**False signals.** "The data was clean." Dropping NAs without asking
why they exist.

**Prerequisites.** `PY`, `PS`.

---

### 4.10 Classical Machine Learning (`ML`)

**Why it matters.** Classical ML is the correct choice for a large
fraction of real problems and is the conceptual scaffold on which
deep learning stands.

**Capabilities.**

- Frame a problem as supervised/unsupervised/reinforcement, and
  choose the right target and loss.
- Feature engineering, feature leakage, feature stores at a
  conceptual level.
- Model families: linear, tree-based, kernel, nearest-neighbor,
  clustering, dimensionality reduction — and their inductive biases.
- Training/validation/test splits, cross-validation, target leakage,
  data leakage, temporal leakage.
- Metrics: accuracy, precision/recall, F1, ROC/PR, calibration,
  regression metrics — and choosing metrics from the *decision*, not
  the *data*.
- Model selection, hyperparameter search, and the multiple-comparison
  problem.
- Bias–variance and its practical implications.

**Standard.** Given a real dataset, can build a baseline, beat it
with a justified model, and defend the choice of metric and
validation scheme.

**Evidence.** A modeling report including problem framing, baseline,
final model, ablations, evaluation, and known failure modes.

**False signals.** Leaderboard scores without ablation. Kaggle-style
metric optimization on unrealistic splits.

**Prerequisites.** `MA`, `PS`, `DA`.

---

### 4.11 Deep Learning (`DL`)

**Why it matters.** Modern AI capability comes disproportionately
from deep learning. A graduate must be able to build, train, debug,
and evaluate neural networks, not merely call them.

**Capabilities.**

- Neural network fundamentals: layers, activations, losses, weight
  init, normalization, regularization.
- Training dynamics: optimizers, schedulers, batch sizes, gradient
  pathologies, mixed precision.
- Architectures: MLPs, CNNs, RNN/LSTM at least conceptually, and
  transformers in depth.
- Data pipelines for DL: augmentation, sharding, streaming, GPU
  utilization.
- Transfer learning, fine-tuning, and PEFT approaches at a working
  level.
- Debugging: reading loss curves, gradient/activation stats,
  overfitting a single batch as sanity check.

**Standard.** From a paper or blog post at moderate difficulty, can
reimplement a model, train it to reasonable performance, and diagnose
a training failure.

**Evidence.** A reimplemented model with training logs, curves, and a
written diagnosis of at least one failure that was fixed.

**False signals.** `model.fit()` without reading loss curves. Copying
a notebook without changing anything and calling it a project.

**Prerequisites.** `ML`, `SE`.

---

### 4.12 Language Models and Generative AI (`LLM`)

**Why it matters.** LLMs and generative models are the defining
technologies of contemporary AI engineering.

**Capabilities.**

- Tokenization, context windows, sampling, temperature, top-p, and
  their behavioral consequences.
- Prompting as engineering: system prompts, few-shot, structured
  output, function/tool schemas, decoding constraints.
- Fine-tuning options: full, LoRA/PEFT, instruction tuning, DPO/RLHF
  conceptually.
- Retrieval-augmented generation: chunking, embeddings, hybrid
  retrieval, reranking, context construction.
- Evaluation of generative systems: task-grounded metrics, LLM-as-
  judge with its pitfalls, human eval design.
- Safety-relevant behaviors: hallucination, prompt injection,
  jailbreaks, data exfiltration, PII leakage.

**Standard.** Can design, evaluate, and defend an LLM-powered feature
with a written evaluation plan, cost budget, and safety analysis.

**Evidence.** An LLM feature with a versioned prompt/tool spec, an
evaluation dataset, offline and online metrics, a red-team log, and a
cost report.

**False signals.** "It works in demos." Vibes-based prompt tweaking.

**Prerequisites.** `DL`, `DA`.

---

### 4.13 Retrieval, Tools, Agents, and Multimodal Systems (`RTA`)

**Why it matters.** Real AI products are compositions: a model plus
retrieval, plus tools, plus policy, plus UI, across modalities.

**Capabilities.**

- Retrieval systems: embeddings, vector stores, hybrid search,
  reranking, evaluation of retrieval quality independent of the
  generator.
- Tool use: function calling schemas, structured output, tool
  routing, and graceful fallback.
- Agentic systems: planners, executors, memory, guardrails; when to
  *not* use an agent.
- Multimodal: vision-language, speech, audio at an integration level.
- Evaluation of compositional systems: component-level and
  end-to-end.

**Standard.** Can design an agentic or retrieval system with clearly
bounded tools, an evaluation harness that measures each hop, and a
written failure-mode analysis.

**Evidence.** A system diagram, component-level eval, end-to-end
eval, and a written analysis of a real failure and its fix.

**False signals.** Chained prompts with no eval. "Agent" as
marketing.

**Prerequisites.** `LLM`, `SE`.

---

### 4.14 AI Systems, MLOps, Deployment, Observability, Reliability, Security, Privacy, Governance, and Cost (`SYS`)

**Why it matters.** A model is not a product. The graduate is
accountable for the *system*.

**Capabilities.**

- Packaging and serving: containers, runtimes, latency vs throughput,
  batching, streaming.
- Deployment strategies: shadow, canary, blue/green, feature flags,
  rollback.
- Observability: metrics, logs, traces, dashboards, alerts, SLIs and
  SLOs for AI systems, including quality SLOs.
- Reliability: idempotency, retries, backpressure, graceful
  degradation.
- Security: authn/z, secret management, supply chain, prompt
  injection, model exfiltration, sandboxing of tools.
- Privacy: data minimization, retention, PII handling, consent,
  regional constraints.
- Governance: model/data cards, audit trails, change control,
  approvals.
- Cost: unit economics, tokens per user, GPU hours, storage, egress;
  budgets and alerts.
- Incident response: on-call posture, blameless post-mortems.

**Standard.** Can take a prototype to production with a written
service description, SLOs, dashboards, alerts, a runbook, a security
review, a privacy review, and a cost model, and can lead the
resulting incident when it happens.

**Evidence.** A deployed service with the above artifacts; a real (or
tabletop) incident post-mortem; a signed-off model card.

**False signals.** "It's live." No dashboards. No runbook. "We'll add
monitoring later."

**Prerequisites.** `SE`, `ML` or `DL`, `LLM` where relevant.

---

### 4.15 Product Thinking and Human-Centered AI (`PROD`)

**Why it matters.** AI that ignores its users is worse than no AI.

**Capabilities.**

- Translate a fuzzy user need into a measurable objective and a
  falsifiable hypothesis.
- Design interactions that make model uncertainty legible to users.
- Choose when *not* to automate.
- Instrument user outcomes, not just model metrics.
- Ethics of persuasion, dark patterns, and manipulation.

**Standard.** Can write a one-page product brief for an AI feature
that a non-technical stakeholder can approve and a technical peer can
build from.

**Evidence.** Product briefs, user-study notes, a decision log
showing at least one "we chose not to ship AI here" moment with
reasoning.

**False signals.** Solutions in search of problems. "We should add
AI to it."

**Prerequisites.** `LM`.

---

### 4.16 Responsible AI (`RAI`)

**Why it matters.** Learn AI graduates will build systems that affect
people. Ignorance is not a defense.

**Capabilities.**

- Identify affected stakeholders, especially non-users.
- Bias and fairness: sources, measurement, mitigation, and the
  impossibility results.
- Transparency: model cards, data cards, disclosure to users.
- Consent, data subject rights, and applicable regulatory regimes at
  a working awareness level.
- Dual use and misuse thinking; refusal as a professional act.
- Environmental cost awareness.

**Standard.** Can produce a written responsible-AI review of their
capstone system, including affected stakeholders, risks, mitigations,
residual risks, and a decision on whether to ship.

**Evidence.** A responsible-AI review document; a documented decision
to modify or not ship a feature on responsible grounds.

**False signals.** "Ethics slide" appended to a deck. Fairness metric
without a fairness definition.

**Prerequisites.** `LM`, `PROD`, `PS`.

---

### 4.17 Technical Communication and Collaboration (`COM`)

**Why it matters.** Undocumented, unexplained work does not exist in
professional AI.

**Capabilities.**

- Written: design docs, ADRs, post-mortems, model cards, README, PR
  descriptions.
- Diagrams: system, data flow, sequence, at the level a stranger can
  reconstruct the system.
- Spoken: technical defense, whiteboarding, stakeholder briefings.
- Feedback: giving actionable review; receiving without ego.
- Cross-functional: talking to designers, PMs, legal, ops, and users.

**Standard.** Can defend their capstone in a 30–45 minute
question-driven session to a mixed technical and non-technical panel
without slides that carry the argument for them.

**Evidence.** Design docs; recorded defense; peer-review record.

**False signals.** Slides in place of a design doc. Long documents no
one can act on.

**Prerequisites.** `LM`.

---

### 4.18 Open-Source Practice (`OSS`)

**Why it matters.** Learn AI is open source and its graduates
participate in a public commons.

**Capabilities.**

- Licenses at a working level; attribution and provenance.
- Idiomatic contribution: issues, PRs, review, semantic commits,
  changelogs.
- Community norms: codes of conduct, respectful disagreement,
  bus-factor mitigation.
- Reading foreign codebases and shipping upstream.

**Standard.** Has landed at least one non-trivial contribution to an
external open-source project, or one substantive contribution to
Learn AI itself, under review by a maintainer.

**Evidence.** Merged PR(s) with reviewer approval; issue triage
history; an artifact they authored is being reused by someone they
have never met.

**False signals.** Vanity forks. Drive-by typo PRs alone.

**Prerequisites.** `SE`, `COM`.

---

### 4.19 Career Readiness and Lifelong Learning (`CAR`)

**Why it matters.** Graduation is a beginning.

**Capabilities.**

- Portfolio: curated evidence tied to competencies, not a résumé of
  courses.
- Interview readiness: system design, coding, ML case, take-home,
  behavioral.
- Negotiation and workplace conduct at a functional level.
- Learning plans: quarterly, with retrospectives.
- Network hygiene: mentorship, communities, contribution as
  networking.

**Standard.** Has an evidence-backed portfolio, has completed at
least one realistic mock interview loop, and has a written 12-month
learning plan.

**Evidence.** Portfolio site referencing competency IDs; mock
interview feedback; a written learning plan with review dates.

**False signals.** Certificate collections. "Full-stack AI" claims
with no ML in the stack.

**Prerequisites.** `COM`, `OSS`.

---

## 5. Progression Model

Levels are **behavioral**, not temporal. Time is not evidence. Two
learners at the same level exhibit the same behaviors on the same
class of task.

| Level | Name         | Behavioral definition                                                                                                                                                                                                                                                    |
|-------|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| L0    | Foundation   | Can operate a workstation, read code and text with intent, and articulate what they do and do not understand. Reliant on explicit scaffolds.                                                                                                                             |
| L1    | Apprentice   | Can complete well-specified tasks with minor guidance; recognizes when a task is out of scope; writes tests when asked; requests review appropriately.                                                                                                                    |
| L2    | Practitioner | Can independently ship a small, well-scoped feature end-to-end (frame → build → evaluate → deploy → observe) with a written design doc; can debug their own systems with logs and metrics.                                                                                |
| L3    | Engineer     | The **graduation level.** Can independently take an ambiguous problem to a production AI system, defend it, run it, and own the incidents. Can review peers.                                                                                                              |
| L4    | Architect    | Post-graduate. Sets patterns across systems and teams. Owns whole platforms. Learn AI does not grant this level; it prepares graduates to reach it.                                                                                                                       |

**Non-negotiable:** No learner may be represented publicly as a
"graduate" at anything below L3.

**Level movement rules.**

- Levels are assigned per competency domain, then rolled up. A
  graduate is L3 in *all* mandatory domains listed in Section 9.
- Movement is by demonstrated evidence, not by lesson completion.
- Regression is allowed. If a graduate cannot demonstrate the L3
  standard on request, the profile records a lapse and a review path.

---

## 6. Mastery Model

For every competency, a learner is evaluated at one or more mastery
verbs. Graduation requires that mandatory competencies be held at
`Apply` at minimum, and at `Diagnose` and `Transfer` for the domains
marked as such in Appendix A. The capstone requires `Teach` in the
graduate's declared area of depth.

| Verb       | Definition                                                                                                                            |
|------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Explain    | Can state the concept in their own words, correctly, to a peer.                                                                        |
| Recognize  | Can identify the concept in unfamiliar contexts, including disguised or adversarial ones.                                              |
| Apply      | Can use the concept correctly on a well-specified task, unaided, with a reasonable success rate.                                       |
| Modify     | Can adapt the concept to a related but non-identical task, justifying the adaptation.                                                  |
| Diagnose   | Can identify why an application of the concept failed, from evidence, not from guessing.                                               |
| Transfer   | Can apply the concept to a domain or problem class not seen in Learn AI.                                                              |
| Teach      | Can produce an explanation and an exercise that reliably takes a naive learner from ignorance to `Apply` on the concept.               |

Rubric anchors:

- **Explain without Apply is not mastery.**
- **Apply without Diagnose is fragile.**
- **Teach is the strongest evidence and the only one immune to
  memorization.**

---

## 7. Domain Prerequisite Graph (Human-Readable Summary)

```text
LM  ──►  DF  ──►  CT  ──►  PY  ──►  CS ──►  SE
                          │
                          └► MA ──►  PS ──►  DA
                                            │
                                            ▼
                                           ML ──►  DL ──►  LLM ──►  RTA
                                                                  │
                                                                  ▼
                                                                 SYS
PROD ◄── LM                    RAI ◄── LM, PROD, PS
COM  ◄── LM                    OSS ◄── SE, COM
CAR  ◄── COM, OSS
```

Reading rule: an arrow `A ──► B` means B requires a working level of
A. Cycles are not permitted in the graph; where content feels
circular, one direction is designated as the prerequisite by the
Curriculum Council.

---

## 8. Graduate Evidence Framework

Graduation is evidenced, not attested. Acceptable evidence is
concrete, dated, attributable, and reviewable. The following
artifact classes count. Each must reference the competency IDs it
evidences.

1. **Projects** — end-to-end, documented, reproducible, with
   evaluation.
2. **Code** — merged PRs, packages, libraries, with review history.
3. **Tests** — unit/integration/eval suites the graduate authored.
4. **Design documents** — problem statement, options considered,
   decision, consequences.
5. **Architecture diagrams** — system, data, sequence, deployment.
6. **Experiment reports** — hypothesis, method, results, threats to
   validity, decision.
7. **Evaluation reports** — offline and (where applicable) online,
   with power/precision analysis.
8. **Data documentation** — datasheets, provenance, licensing,
   consent status.
9. **Model / system cards** — intended use, out-of-scope use, known
   limitations, safety notes.
10. **Incident reports and post-mortems** — timeline, contributing
    factors, corrective actions, blame-free.
11. **Open-source contributions** — external repos, with maintainer
    review.
12. **Technical defenses** — recorded question-driven sessions.
13. **Capstone work** — see Section 9.
14. **Teaching artifacts** — lesson or explainer plus an assessment
    they authored that others successfully used.

Evidence quality rules:

- Reviewable by a stranger without private access.
- Traceable to a specific human under a public identity.
- Dated and versioned.
- Cites the competency IDs it claims to satisfy.
- Includes at least one *failure* the graduate diagnosed and fixed
  themselves.

---

## 9. Graduation Requirements

To be granted the Learn AI graduate designation, a candidate must
satisfy every one of the following. There are no substitutions.

### 9.1 Mandatory competency floor

L3 in every domain in Section 4 **except**:

- `RTA` and `LLM` where the graduate's chosen depth includes them —
  the floor is `Apply` + `Diagnose` for all graduates and L3 for
  graduates declaring an LLM-focused depth.
- `OSS` at `Apply` + `Diagnose` minimum for all graduates.

No mandatory domain may be below `Apply` for any graduate. No graduate
may be at less than L3 in `LM`, `SE`, `SYS`, `RAI`, or `COM` — these
are the platform on which every claim rests.

### 9.2 Non-negotiable demonstrations

Each of the following must exist as public, reviewable evidence:

1. A **from-scratch** implementation of a classical ML model and a
   small neural network, trained on real data, with a written
   diagnosis of at least one training failure.
2. A **retrieval-augmented or tool-using LLM feature** with a
   versioned prompt/tool spec, an evaluation dataset the graduate
   authored, offline metrics, and a documented red-team pass.
3. A **deployed service** with SLOs, dashboards, alerts, a runbook,
   a security review, a privacy review, and a cost model.
4. A **responsible-AI review** on a real system, including at least
   one decision to change or not ship a feature.
5. A **data artifact** (dataset or pipeline) with a datasheet,
   licensing statement, and leakage audit.
6. A **post-mortem** of an incident the graduate led, real or
   tabletop, that reads at professional standard.
7. An **open-source contribution** merged into a project the
   graduate does not own.
8. A **teaching artifact** — a lesson or explainer plus an assessment
   — that at least one learner has used to reach `Apply`.

### 9.3 Capstone

A capstone is an end-to-end AI system the graduate scopes, designs,
builds, evaluates, deploys, and operates for a real user population
(which may be a small, honest one).

Capstone requirements:

- Real users or a defensible synthetic-but-honest analog.
- Written product brief and design doc.
- Evaluation plan authored *before* the model.
- Offline and online evaluation with intervals, not just points.
- SLOs and dashboards; at least 30 days of operational data at
  submission.
- Model/system card.
- Responsible-AI review.
- Cost model.
- Reproducible build.
- Publicly hosted evidence bundle referencing competency IDs.

### 9.4 Final defense

A 30–45 minute question-driven defense before a panel that includes
at least one Learn AI editor, one external practitioner, and one
non-technical reviewer. The candidate must:

- Answer questions across the full competency model, not only their
  depth.
- Concede unknowns honestly.
- Show, on request, a live artifact from their evidence bundle and
  explain a specific decision within it.

Panels vote by explicit rubric against this document. Ties do not
pass.

### 9.5 Standing

Graduate standing is revocable if evidence is later found to be
plagiarized, fabricated, or generated wholesale without disclosure.

---

## 10. Professional Readiness Rubric — Day-One AI Engineer

On day one of professional AI engineering work, a Learn AI graduate
can:

- Set up their environment on a new machine unaided.
- Read the target codebase and identify where a proposed change goes.
- Turn a stakeholder request into a written problem statement,
  proposed metric, and evaluation plan within one working day.
- Write, review, and land a small change with tests and docs within
  the first week.
- Reproduce a model or evaluation from a paper or internal doc at
  moderate difficulty within two weeks.
- Stand up a small end-to-end AI feature — including retrieval,
  tools, or a fine-tune where applicable — within a small-team
  timeframe, with SLOs and cost.
- Own an on-call rotation for their feature within their first
  quarter.
- Refuse work that is under-scoped, unsafe, or unethical, and put
  that refusal in writing.
- Explain what they built to a designer, a lawyer, and a customer
  without either condescension or jargon.

If any of these is not true, they are not yet a graduate.

---

## 11. Exclusions — What This Credential Does Not Claim

Learn AI graduation certifies **competent generalist AI engineering
capability**. It **does not** certify:

- **ML research at the frontier.** Publishing at top venues, proving
  novel theorems, or setting SOTA is out of scope. Some graduates
  will go on to do this; Learn AI is not the credential for it.
- **Deep specialization in any single subfield.** Robotics,
  computational biology, self-driving perception, quantitative
  finance, medical imaging, cryptography, formal methods, and
  compilers each require additional specialization beyond graduation.
- **Domain expertise.** A Learn AI graduate is not a lawyer, doctor,
  educator, or financial advisor, and must not pretend otherwise
  when building AI for those domains.
- **Software engineering at senior/staff levels.** Graduates meet the
  L3 engineering bar defined here, not senior/staff engineering as
  defined by employers with additional years-of-experience gates.
- **Data science as a distinct practice.** Graduates have working
  DA/PS competence; they are not a substitute for a senior data
  scientist on causal-inference-heavy problems.
- **Prompt engineering as a standalone role.** Graduates use
  prompting as one tool among many.

### 11.1 Role differentiation

- **AI engineer (this credential):** builds and operates AI systems
  end-to-end.
- **ML researcher:** advances model capability; publishes; deep
  math/theory bias.
- **Data scientist:** frames business questions, causal inference,
  experimentation, communication.
- **Software engineer:** builds and operates software systems;
  applied ML is optional.
- **Domain specialist:** deep knowledge in a non-AI field; may
  partner with AI engineers.

Overlaps exist. This document defines what a Learn AI graduate must
hold; other roles may hold more or different.

---

## 12. Governance

### 12.1 Ownership

- **Curriculum Council** — accountable owner of this document.
- **Founding Editors** — reviewers and tiebreakers.
- **Contributors** — anyone opening a PR against this file or its
  downstream artifacts.

### 12.2 Versioning

- Semantic-ish: `MAJOR.MINOR.PATCH`.
  - `MAJOR`: changes to the definition of a graduate, mandatory
    domains, or graduation requirements.
  - `MINOR`: additions of competencies, evidence classes, or
    non-breaking clarifications.
  - `PATCH`: editorial fixes.
- Every merged change updates `version`, `last_updated`, and adds a
  row to `CHANGELOG` (to be created alongside v1.0.0).

### 12.3 Review cadence

- **Quarterly** editorial review by the Curriculum Council.
- **Annual** structural review, including invited external reviewers.
- **Ad-hoc** review may be triggered by:
  - a discovered contradiction with a lower artifact,
  - a field-level shift in AI practice,
  - a graduate outcome that suggests the bar is wrong.

### 12.4 Change control

- Changes land by PR against this file.
- `MAJOR` changes require Council consensus and a written rationale.
- Contradictions in lower artifacts are corrected downward, not by
  weakening this document, unless the change is explicitly `MAJOR`.

### 12.5 Non-contradiction rule

> No curriculum file, lesson, assessment, capstone rubric, marketing
> claim, or platform feature may contradict this document. Where a
> conflict is found, the conflicting artifact is treated as a bug and
> filed as such.

### 12.6 Contact

Open an issue in `ubidesk/learn-ai` tagged `governance` or a PR
against this file. Security- or safety-relevant amendments follow the
project's security policy.

---

## Appendix A — Competency Catalog (Machine-Readable-Style)

Stable IDs. Downstream artifacts **must** cite these. Format:

```text
{ID} | {Title} | {Min Mastery} | {Graduation Level} | {Prereqs} | {Evidence Summary}
```

Levels use Section 5's L0–L4. Mastery uses Section 6's verbs. `—`
indicates none.

### Learning and Metacognition (`LM`)

```text
LM-STUDY-001 | Deliberate study plan design            | Apply    | L3 | —              | Written plan + retrieval log + delayed retention pass
LM-STUDY-002 | Confusion diagnosis                      | Diagnose | L3 | LM-STUDY-001   | Journal entries showing located confusion + resolution
LM-STUDY-003 | Teach-back                               | Teach    | L3 | LM-STUDY-001   | Recorded teach-back with peer comprehension check
LM-STUDY-004 | Source triage and question-first reading | Apply    | L3 | —              | Annotated reading with extracted answer
```

### Digital Fluency (`DF`)

```text
DF-OS-001    | Shell and filesystem fluency             | Apply    | L3 | LM-STUDY-001   | Recorded shell session solving bootstrap task
DF-OS-002    | Environment and package management       | Apply    | L3 | DF-OS-001      | Reproducible dev environment repo
DF-NET-001   | HTTP/DNS/TLS working knowledge           | Diagnose | L3 | DF-OS-001      | Written diagnosis of a network failure
DF-DATA-001  | Encodings, paths, times, locales         | Apply    | L3 | DF-OS-001      | Bug-fix commits addressing such issues
```

### Computational Thinking (`CT`)

```text
CT-DECOMP-001| Problem decomposition                    | Apply    | L3 | LM-STUDY-001   | Written decomposition + I/O contract per subproblem
CT-REP-001   | Representation selection                 | Modify   | L3 | CT-DECOMP-001  | Design doc justifying representation choice
CT-COST-001  | Cost reasoning (time/space intuition)    | Apply    | L3 | CT-DECOMP-001  | Written cost analysis of a chosen algorithm
CT-CORR-001  | Correctness thinking                     | Apply    | L3 | CT-DECOMP-001  | Property-based / adversarial test suite
```

### Python and Programming (`PY`)

```text
PY-PROG-001  | Idiomatic Python                         | Apply    | L3 | CT-DECOMP-001  | Reviewed package with idiomatic patterns
PY-PROG-002  | Testing with pytest                       | Apply    | L3 | PY-PROG-001    | Test suite with fixtures + parameterization
PY-PROG-003  | Packaging, envs, deps                     | Apply    | L3 | PY-PROG-001    | Installable package with pinned deps + CI
PY-PROG-004  | Debugging and profiling                   | Diagnose | L3 | PY-PROG-001    | Debugging journal of a real fix
PY-PROG-005  | Refactoring untyped code                  | Modify   | L3 | PY-PROG-002    | Before/after refactor with behavior-preserving tests
PY-PROG-006  | Async and concurrency basics              | Apply    | L2 | PY-PROG-001    | Async I/O feature with rationale
```

### Computer Science (`CS`)

```text
CS-DS-001    | Data structure selection                  | Apply    | L3 | CT-REP-001, PY-PROG-001 | Design doc + benchmark
CS-ALG-001   | Working algorithm design                  | Apply    | L3 | CS-DS-001      | Implementation + complexity note
CS-PERF-001  | Bottleneck diagnosis                      | Diagnose | L3 | CS-ALG-001     | Profiling report + fix
CS-CONC-001  | Concurrency reasoning                     | Explain  | L3 | PY-PROG-006    | Written model of a real concurrency bug
```

### Software Engineering (`SE`)

```text
SE-VCS-001   | Git fluency incl. bisect, rebase          | Apply    | L3 | PY-PROG-001    | Git history in a real repo
SE-REV-001   | Code review, giving and receiving         | Apply    | L3 | SE-VCS-001     | Review threads on real PRs
SE-TEST-001  | Test strategy                             | Modify   | L3 | PY-PROG-002    | Test pyramid design + implementation
SE-DES-001   | Modular design and interfaces             | Modify   | L3 | CT-DECOMP-001  | Design doc + implementation
SE-DOC-001   | Design docs, ADRs, READMEs                | Apply    | L3 | SE-DES-001     | Authored ADRs and design docs
SE-CI-001    | CI/CD, reproducible builds                | Apply    | L3 | SE-VCS-001     | Green CI in a nontrivial repo
SE-READ-001  | Foreign codebase navigation               | Apply    | L3 | SE-VCS-001     | Landed change in unfamiliar codebase
```

### Mathematics (`MA`)

```text
MA-LA-001    | Applied linear algebra                    | Apply    | L3 | PY-PROG-001    | Notebook + hand-derivations
MA-CALC-001  | Gradients, chain rule, backprop meaning   | Apply    | L3 | MA-LA-001      | Hand-derived gradients matched to autograd
MA-OPT-001   | Optimization intuition                    | Diagnose | L3 | MA-CALC-001    | Training-curve diagnosis writeup
MA-NUM-001   | Numerical stability                       | Apply    | L3 | MA-CALC-001    | Log-space computation demo + failure case
```

### Probability and Statistics (`PS`)

```text
PS-PROB-001  | Probability essentials                    | Apply    | L3 | MA-LA-001      | Written derivations + simulation
PS-INF-001   | Estimation and uncertainty                | Apply    | L3 | PS-PROB-001    | Confidence/credible interval analysis
PS-TEST-001  | Hypothesis testing and its abuses         | Diagnose | L3 | PS-INF-001     | Critique of a real study
PS-CAL-001   | Calibration and proper scoring            | Apply    | L3 | PS-INF-001     | Calibration plot + interpretation
PS-CAUS-001  | Causal thinking (working level)           | Explain  | L3 | PS-INF-001     | Written counter-example to a naive claim
```

### Data (`DA`)

```text
DA-SQL-001   | Working SQL incl. windows and plans        | Apply    | L3 | PY-PROG-001    | Analytical notebook + explained plans
DA-DF-001    | DataFrame fluency                          | Apply    | L3 | PY-PROG-001    | Nontrivial transformation pipeline
DA-QUAL-001  | Data quality and leakage                   | Diagnose | L3 | DA-DF-001, PS-INF-001 | Leakage audit writeup
DA-PIPE-001  | Pipelines, formats, orchestration          | Apply    | L3 | DA-DF-001      | Idempotent pipeline with backfills
DA-DOC-001   | Datasheets and provenance                  | Apply    | L3 | DA-QUAL-001    | Published datasheet
```

### Classical ML (`ML`)

```text
ML-FRAME-001 | Problem framing and metric choice          | Modify   | L3 | DA-QUAL-001, PS-INF-001 | Framing memo + metric defense
ML-BASE-001  | Baselines                                  | Apply    | L3 | ML-FRAME-001   | Documented baseline + comparison
ML-MODEL-001 | Model family selection                     | Modify   | L3 | ML-BASE-001    | Ablation across families
ML-EVAL-001  | Validation schemes incl. temporal          | Apply    | L3 | ML-BASE-001    | CV design + leakage checks
ML-EVAL-002  | Classification metrics                     | Apply    | L3 | PS-CAL-001     | PR/ROC + calibration analysis
ML-EVAL-003  | Regression metrics                         | Apply    | L3 | PS-INF-001     | Residual analysis
ML-EVAL-004  | Metric selection from decision context     | Modify   | L3 | ML-EVAL-002    | Written metric selection memo
ML-BV-001    | Bias–variance in practice                  | Diagnose | L3 | ML-EVAL-001    | Learning-curve diagnosis
```

### Deep Learning (`DL`)

```text
DL-NN-001    | Neural network fundamentals                | Apply    | L3 | ML-MODEL-001, MA-CALC-001 | From-scratch MLP with training log
DL-TRAIN-001 | Training dynamics and pathologies          | Diagnose | L3 | DL-NN-001      | Loss/grad diagnosis writeup
DL-ARCH-001  | CNNs                                       | Apply    | L2 | DL-NN-001      | Working CNN with ablation
DL-ARCH-002  | Transformers in depth                      | Modify   | L3 | DL-NN-001      | Reimplemented transformer + writeup
DL-DATA-001  | DL data pipelines and augmentation         | Apply    | L3 | DA-PIPE-001, DL-NN-001 | Efficient input pipeline
DL-TL-001    | Transfer learning and PEFT                 | Apply    | L3 | DL-ARCH-002    | Fine-tuning run with baseline comparison
DL-DBG-001   | Overfit-a-batch and other sanity checks    | Apply    | L3 | DL-TRAIN-001   | Documented sanity-check protocol
```

### LLMs and Generative AI (`LLM`)

```text
LLM-CORE-001 | Tokenization, context, sampling            | Apply    | L3 | DL-ARCH-002    | Written experiment across sampling params
LLM-PROMPT-001| Prompting as engineering                  | Modify   | L3 | LLM-CORE-001   | Versioned prompt spec + evals
LLM-STRUCT-001| Structured output and tool schemas        | Apply    | L3 | LLM-PROMPT-001 | Tool schema + validation
LLM-FT-001   | Fine-tuning options                        | Apply    | L3 | DL-TL-001      | Fine-tune run with defensible choice
LLM-EVAL-001 | LLM evaluation incl. LLM-as-judge pitfalls | Diagnose | L3 | ML-EVAL-004    | Eval design + judge audit
LLM-SAFE-001 | Injection, jailbreaks, PII leakage         | Diagnose | L3 | LLM-PROMPT-001 | Red-team log + mitigations
```

### Retrieval, Tools, Agents, Multimodal (`RTA`)

```text
RTA-RET-001  | Retrieval systems                           | Modify   | L3 | LLM-CORE-001, DA-PIPE-001 | Retrieval eval independent of generator
RTA-TOOL-001 | Tool use and routing                        | Apply    | L3 | LLM-STRUCT-001 | Tool-using feature + failure analysis
RTA-AGENT-001| Agentic systems and boundaries              | Modify   | L3 | RTA-TOOL-001   | Agent design + when-not-to-use analysis
RTA-MM-001   | Multimodal integration                      | Apply    | L2 | LLM-CORE-001   | Multimodal feature + eval
RTA-EVAL-001 | Compositional-system evaluation             | Diagnose | L3 | LLM-EVAL-001   | Component + end-to-end eval report
```

### Systems, MLOps, Reliability, Security, Privacy, Governance, Cost (`SYS`)

```text
SYS-PKG-001  | Packaging and serving                       | Apply    | L3 | SE-CI-001      | Container + runtime with latency budget
SYS-DEPLOY-001| Deployment strategies                       | Apply    | L3 | SYS-PKG-001    | Canary/rollback demonstrated
SYS-OBS-001  | Metrics, logs, traces                        | Apply    | L3 | SYS-PKG-001    | Dashboards + alerts wired
SYS-OBS-002  | SLIs/SLOs incl. quality SLOs                 | Modify   | L3 | SYS-OBS-001    | SLO document with error budget
SYS-OBS-003  | Alerting and runbooks                        | Apply    | L3 | SYS-OBS-002    | Runbook exercised in incident (real or tabletop)
SYS-REL-001  | Reliability patterns                         | Apply    | L3 | SYS-PKG-001    | Idempotency + retry design
SYS-SEC-001  | Security fundamentals                        | Diagnose | L3 | SE-DES-001     | Threat model + mitigations
SYS-PRIV-001 | Privacy by design                             | Apply    | L3 | DA-DOC-001     | Data-minimization design + retention policy
SYS-GOV-001  | Model/data cards and audit trails            | Apply    | L3 | ML-FRAME-001, LLM-SAFE-001 | Published cards
SYS-COST-001 | Cost modeling and budgets                    | Apply    | L3 | SYS-PKG-001    | Written cost model + alerts
SYS-INC-001  | Incident response and post-mortems           | Modify   | L3 | SYS-OBS-003    | Blame-free post-mortem
```

### Product and Human-Centered AI (`PROD`)

```text
PROD-BRIEF-001| Product briefs for AI features             | Apply    | L3 | LM-STUDY-001   | One-page brief accepted by stakeholders
PROD-UX-001  | Communicating model uncertainty in UX       | Apply    | L2 | PS-CAL-001     | UI patterns with justification
PROD-NOAI-001| When not to automate                        | Modify   | L3 | PROD-BRIEF-001 | Decision log entry declining AI
PROD-INST-001| Outcome instrumentation                     | Apply    | L3 | SYS-OBS-001    | Outcome metric wired end-to-end
```

### Responsible AI (`RAI`)

```text
RAI-STAKE-001| Stakeholder mapping incl. non-users         | Apply    | L3 | PROD-BRIEF-001 | Stakeholder map + risks
RAI-FAIR-001 | Bias measurement and mitigation             | Diagnose | L3 | PS-INF-001, ML-EVAL-004 | Fairness analysis with definition
RAI-TRANS-001| Transparency artifacts                      | Apply    | L3 | SYS-GOV-001    | Model card + user-facing disclosure
RAI-CONS-001 | Consent and rights awareness                | Explain  | L3 | SYS-PRIV-001   | Written review of a real system
RAI-DUAL-001 | Dual-use and refusal                        | Modify   | L3 | RAI-STAKE-001  | Refusal memo with reasoning
```

### Communication (`COM`)

```text
COM-WRITE-001| Design docs, ADRs, post-mortems            | Modify   | L3 | SE-DOC-001     | Authored artifacts adopted by peers
COM-DIAG-001 | Systems and data-flow diagrams              | Apply    | L3 | SE-DES-001     | Diagrams a stranger can rebuild from
COM-SPEAK-001| Technical defense                           | Apply    | L3 | COM-WRITE-001  | Recorded defense
COM-FB-001   | Feedback culture                            | Apply    | L3 | SE-REV-001     | Review history
COM-XFN-001  | Cross-functional communication              | Apply    | L3 | PROD-BRIEF-001 | Briefings to non-technical stakeholders
```

### Open Source (`OSS`)

```text
OSS-LIC-001  | Licensing and attribution                   | Apply    | L3 | SE-DOC-001     | Compliant reuse in a real project
OSS-CONTRIB-001| External contribution                      | Apply    | L3 | SE-READ-001, COM-WRITE-001 | Merged external PR
OSS-COMM-001 | Community norms                             | Apply    | L3 | COM-FB-001     | Constructive engagement record
```

### Career (`CAR`)

```text
CAR-PORT-001 | Evidence-backed portfolio                    | Apply    | L3 | COM-WRITE-001  | Portfolio referencing competency IDs
CAR-INT-001  | Interview readiness across formats           | Apply    | L3 | CAR-PORT-001   | Mock-loop feedback
CAR-PLAN-001 | 12-month learning plan with reviews          | Apply    | L3 | LM-STUDY-001   | Plan + first review completed
```

---

*End of document. This file is authoritative. Downstream artifacts
that disagree with it are, by definition, incorrect until this file
is amended through Section 12.*
