---
title: Learn AI Knowledge Architecture
status: Draft for Founding Review
version: 0.1.0
last_updated: 2026-07-12
canonical_path: docs/governance/LEARN_AI_KNOWLEDGE_ARCHITECTURE.md
---

# Learn AI Knowledge Architecture

> **Status:** Draft for Founding Review — v0.1.0
> **Scope:** Canonical domain taxonomy and high-level dependency structure for all Learn AI curriculum, courses, modules, lessons, projects, assessments, tutor behavior, and platform navigation.
> **Non-scope:** Lesson content, ordering within a stage, UI copy, or platform features. Those are downstream artifacts.

---

## 1. Purpose, Authority, and Relationship to Governing Documents

### 1.1 Purpose

The Knowledge Architecture (KA) defines **what Learn AI treats as knowable
knowledge**: the domains, subdomains, and eventual concepts and skills that
constitute the field a Learn AI graduate must be fluent in. It is the canonical
map of the territory the curriculum will teach across.

The KA answers questions such as:

- Is *tokenization* a first-class concept, a subordinate skill, or an evidence
  artifact? Under which domain does it live?
- When a new topic is proposed (e.g., "speculative decoding"), where does it
  attach, and what does it depend on?
- Which competency in the Graduate Profile does a proposed lesson advance?
- What is the smallest coherent slice of the field that can be taught next
  without introducing hidden prerequisites?

The KA does **not** answer:

- How to teach a concept (pedagogy is in the Authoring Guide and lesson bodies).
- The order lessons should appear on the site (curriculum ordering derives from
  the KA but is not the KA itself).
- Whether a specific tool, library, or provider should be used (that is a
  curriculum/product decision).

### 1.2 Authority

The KA sits in the following governance hierarchy, from highest authority to
lowest:

1. **Manifesto** — mission, learner promise, non-negotiables.
2. **Product Requirements (PRD)** — what the product must be and must not be.
3. **Graduate Profile & Competency Framework**
   (`LEARN_AI_GRADUATE_PROFILE_AND_COMPETENCY_FRAMEWORK.md`) — who a Learn AI
   graduate is and what capabilities they must evidence.
4. **Knowledge Architecture** *(this document)* — the canonical territory the
   curriculum covers to produce that graduate.
5. **Curriculum spine** (`curriculum/stages/*`) — the ordered stage/module/
   lesson breakdown that operationalizes the KA.
6. **Lesson content, projects, assessments, tutor behavior, platform navigation.**

Any conflict is resolved by the higher-authority document. Lower-level artifacts
that contradict the KA must be revised. The KA itself must not contradict the
Manifesto, PRD, or Graduate Profile; if it does, the KA is revised.

### 1.3 Relationship to the Graduate Profile

The Graduate Profile defines **competencies** — what a graduate can *do* and
evidence. The KA defines **knowledge domains** — the fields those competencies
draw on. Every competency in the Graduate Profile must be reachable through one
or more KA domains, and every KA domain must serve at least one competency.
Section 9 makes this mapping explicit.

### 1.4 Relationship to the current curriculum spine

The curriculum currently in `curriculum/stages/` (13 stages, 122 modules, 565
lesson-level items, all `planned`) is **provisional**. It was authored to hold
shape and prevent premature collapse of scope. It is not authoritative and will
be re-derived from the frozen KA (v1.0) plus the Graduate Profile. Until then,
the spine is a working scaffold, not a commitment.

---

## 2. Governing Principles

The KA is designed and evolved under six principles. Every proposed change is
tested against them.

### 2.1 Dependency-first design

Nothing is placed in the architecture whose prerequisites are not already
present. Concepts, skills, and evidence artifacts are introduced only after the
knowledge they rely on. A learner reading a lesson must never encounter a term,
notation, tool, or assumption they were not previously taught, or that they
cannot infer from prior explicitly-taught material.

### 2.2 Competency alignment

Every domain, subdomain, and eventual concept must trace to at least one
competency in the Graduate Profile. Content that does not advance a stated
competency is not admitted. This forces the architecture to serve the graduate
we promise, not the topics that happen to be interesting.

### 2.3 Stable IDs

Concepts, once introduced, receive a stable ID that persists across curriculum
revisions. Renaming, re-parenting, or splitting a concept produces a new ID
and an explicit migration entry. This lets lessons, projects, assessments, and
the tutor reference knowledge durably.

### 2.4 No hidden prerequisites

Every dependency is explicit. Cultural knowledge, "everyone knows this," and
"it's just intuitive" are not admitted as implicit prerequisites. If a concept
requires familiarity with, e.g., function notation, that dependency is named.
The KA is the place where implicit assumptions get surfaced and either taught
or removed.

### 2.5 Evidence-based mastery

Knowing a concept is defined by the *evidence* a learner can produce, not by
having read about it. Every knowledge area eventually resolves into concrete
skills, and every skill eventually resolves into observable evidence
(explanations, artifacts, diagnoses, transfers). The KA reserves an Evidence
tier so this remains a first-class part of the architecture, not an afterthought.

### 2.6 Versioned architecture

The KA is versioned semantically. Additions and clarifications are minor
versions; re-parenting or removal of domains is a major version. No lesson
authoring against v1.0-frozen structure begins until v1.0 is approved. See
§10 for the roadmap.

---

## 3. Architecture Hierarchy

The KA has six tiers. Each tier constrains the next; each tier has different
stability guarantees.

```text
Domain          20 canonical domains (this document, §5)
  └── Subdomain           Coherent area within a domain
        └── Knowledge Area  A teachable region within a subdomain
              └── Concept    A single idea with a stable ID
                    └── Skill  A learnable ability drawing on concepts
                          └── Evidence  What a learner produces to demonstrate mastery
```

### 3.1 Domain

The 20 canonical domains in §5. Domains are the most stable tier. Adding,
removing, or re-parenting a domain is a major version change to the KA.

### 3.2 Subdomain

A coherent area within a domain. Subdomains are stable across minor versions
but may be split or merged as the concept inventory (v0.2) is drafted. Each
subdomain has a plain-English purpose and named boundary.

### 3.3 Knowledge Area

A teachable region within a subdomain — the granularity a curriculum module
typically targets. Knowledge Areas are introduced in v0.2 alongside the concept
inventory.

### 3.4 Concept

A single named idea with a stable ID and a definition. Concepts have:

- An ID (see §4).
- A canonical name and one-line definition.
- Prerequisites: other concept IDs.
- The competency IDs it advances.
- The evidence classes that demonstrate it.

Concepts are introduced in v0.2 and connected into a prerequisite graph in v0.3.

### 3.5 Skill

A learnable ability that draws on one or more concepts. A skill is the
"can do" form of knowledge — e.g., *"can implement gradient descent from
scratch for linear regression."* Skills carry a mastery depth (see the Graduate
Profile mastery hierarchy: Explain, Recognize, Apply, Modify, Diagnose,
Transfer, Teach) and are the unit that curriculum evaluates against.

### 3.6 Evidence

The observable artifact or performance that demonstrates a skill at a given
mastery depth. Evidence classes are catalogued in the Graduate Profile
(explanations, projects, post-mortems, model cards, capstone defense, etc.).
The KA does not redefine evidence classes; it points to them.

---

## 4. Concept ID Convention

Concepts introduced in v0.2 and beyond use a stable, human-readable identifier:

```text
KA-{DOMAIN}-{SUBDOMAIN}-{NNN}
```

Where:

- `KA` is the fixed namespace prefix (Knowledge Architecture).
- `{DOMAIN}` is a short uppercase code for the primary domain (see §5).
- `{SUBDOMAIN}` is a short uppercase code for the subdomain within the domain.
- `{NNN}` is a zero-padded three-digit sequence, assigned in the order concepts
  are admitted, not by pedagogical order.

Examples of the shape (illustrative, not yet allocated):

- `KA-PY-CORE-001` — a concept under Python and General Programming → Core Language.
- `KA-LLM-ARCH-014` — a concept under Language Models → Architecture.
- `KA-MATH-LIN-007` — a concept under Linear Algebra, Calculus, and Optimization → Linear Algebra.

### 4.1 Assignment rules

- IDs are permanent. Deleting a concept retires the ID; it is never reused.
- Splitting a concept produces two new IDs and marks the original retired,
  with an explicit migration entry in the changelog.
- Renaming a concept preserves the ID.
- Re-parenting under a different domain/subdomain produces a new ID; the old
  ID is retired with a migration entry. Concept IDs encode home domain and
  must remain accurate.

### 4.2 Domain and subdomain codes

Codes will be finalised alongside the v0.2 concept inventory. The initial set
of domain codes (subject to v0.2 confirmation) is:

`META, DIGI, SYS, OS, NET, THINK, PY, CS, SWE, DISC, MATH, STAT, DATA, ML,
DL, LLM, APP, MLOPS, RESP, PRAC`

---

## 5. Canonical Taxonomy: 20 Primary Domains

Each domain has a **purpose**, **major subdomains**, and **boundary notes**
naming what belongs elsewhere. Subdomain lists are indicative for v0.1; the
authoritative subdomain list ships with v0.2.

---

### 5.1 Learning, Metacognition, and Technical Study `META`

**Purpose.** Equip learners with the skills to learn a hard technical field
durably: how to study, remember, transfer, self-assess, recover from confusion,
manage attention, and use AI assistants without eroding their own understanding.

**Major subdomains.**
- Cognitive foundations of learning (retrieval, spacing, interleaving,
  elaboration, dual coding).
- Reading technical material (documentation, textbooks, research papers).
- Note-taking, personal knowledge systems, and revision.
- Debugging one's own understanding: confusion diagnosis, worked examples,
  self-explanation.
- Deliberate practice, feedback loops, and calibration.
- Working with AI tutors and code assistants without dependency.
- Study hygiene: attention, sleep, workload, motivation, plateaus.

**Boundary notes.** Debugging *code* lives in Software Engineering. Debugging
*models* lives in Classical ML and Deep Learning. Career and communication
practice live in domain §5.20.

---

### 5.2 Digital Fluency and Developer Workstations `DIGI`

**Purpose.** Bring a complete beginner to the point where they can operate a
computer as a developer: files and paths, text encodings, editors, browsers,
package managers, and the mental model of "what a program is on this machine."

**Major subdomains.**
- Files, folders, filesystems, paths, and text vs binary.
- Text encodings, line endings, and character sets.
- Editors and IDEs at a beginner level (opening, saving, searching).
- Browsers, tabs, dev tools at an inspection level.
- Package managers and runtime installers (conceptual).
- Environment variables and shells at an introductory level.
- Backups, sync, and safe file handling.

**Boundary notes.** Deep shell scripting lives in §5.4. Networking lives in
§5.5. Programming lives in §5.7. This domain is deliberately about the
*workstation*, not the *code*.

---

### 5.3 Computing Systems and Computer Architecture `SYS`

**Purpose.** Give learners a durable mental model of what a computer actually
is and does: how instructions execute, how memory is organised, how storage
and I/O work, and why hardware constraints leak into every layer above.

**Major subdomains.**
- Number representation, binary, floating point.
- CPU, registers, instruction execution, pipelines at an intuition level.
- Memory hierarchy: registers, caches, RAM, disk, network.
- Storage devices and I/O.
- Concurrency and parallelism at the hardware level.
- GPUs and accelerators: what they are and why AI uses them.

**Boundary notes.** Operating system abstractions live in §5.4. Distributed
systems and cloud infrastructure live in §5.18. Networking hardware sits
here for physical/link-layer intuition; protocols live in §5.5.

---

### 5.4 Operating Systems and Command-Line Environments `OS`

**Purpose.** Enable learners to operate confidently in Unix-like environments:
processes, permissions, filesystems, shells, and the small set of command-line
tools every AI engineer uses daily.

**Major subdomains.**
- Processes, threads, scheduling, signals at a working level.
- Filesystems, permissions, users, and groups.
- The shell (bash/zsh): pipes, redirection, globbing, exit codes.
- Core Unix tools: `grep`, `sed`, `awk`, `find`, `xargs`, `less`, `tail`.
- Package managers and environment management (`apt`, `brew`, `uv`, `conda`).
- Terminal multiplexers and long-running jobs (`tmux`, `screen`, `nohup`).
- Basic system observability: `top`, `htop`, `df`, `du`, `ps`.

**Boundary notes.** Kernel internals are out of scope. Container runtimes and
orchestration live in §5.18. Version control lives in §5.9.

---

### 5.5 Networking, Internet, and Web Foundations `NET`

**Purpose.** Explain how machines talk to each other and how the web works,
sufficient to reason about AI systems that call APIs, host services, ingest
data, and serve users.

**Major subdomains.**
- The network stack: link, network, transport, application.
- IP, DNS, TCP, UDP, TLS at a working level.
- HTTP/1.1, HTTP/2, HTTP/3 semantics; methods, status codes, headers.
- URLs, MIME types, cookies, sessions, caching.
- WebSockets and streaming.
- REST, JSON, and API design at a consumer level.
- Auth on the wire: basic, bearer, OAuth flows at a mental-model level.
- The browser as a runtime, and where "the web" ends.

**Boundary notes.** Building web applications lives in §5.9 and §5.17.
Threat models and cryptographic protocols live in §5.19.

---

### 5.6 Computational Thinking and Problem Solving `THINK`

**Purpose.** Cultivate the ability to decompose problems, reason about
structure, and design procedures — the substrate that makes programming and
mathematics feel natural.

**Major subdomains.**
- Decomposition and abstraction.
- Pattern recognition and generalisation.
- Algorithmic thinking without code (state, invariants, iteration, recursion
  as ideas).
- Modelling: representing a problem so it becomes tractable.
- Estimation, back-of-the-envelope reasoning, order-of-magnitude checks.
- Diagramming as thinking (sequence, state, flow, data).

**Boundary notes.** Formal algorithms and complexity analysis live in §5.8.
This domain trains the *habit of mind*, not the CS canon.

---

### 5.7 Python and General Programming `PY`

**Purpose.** Turn a computational thinker into a working programmer, with
Python as the primary vehicle, and enough general programming to be
tool-transferable.

**Major subdomains.**
- Values, types, variables, expressions, statements.
- Control flow, functions, scope, closures.
- Data structures in Python: lists, dicts, sets, tuples, strings.
- Iteration, iterators, generators, comprehensions.
- Object-oriented programming: classes, methods, inheritance, composition.
- Exceptions and error handling.
- Modules, packages, imports, virtual environments.
- The standard library at working depth.
- Idiomatic Python and the language's culture.
- General programming ideas transferable across languages (typing,
  immutability, purity, effects).

**Boundary notes.** Software engineering practices (testing, packaging,
project layout at scale) live in §5.9. Numerical and scientific Python
(`numpy`, `pandas`) live partly here for language mechanics and partly in
§5.13 for their analytical use.

---

### 5.8 Computer Science Foundations `CS`

**Purpose.** Give learners the CS canon they need to reason about correctness,
performance, and design: data structures, algorithms, complexity, and models
of computation.

**Major subdomains.**
- Asymptotic analysis and Big-O reasoning.
- Core data structures: arrays, lists, hash tables, trees, heaps, graphs.
- Core algorithms: sorting, searching, traversals, greedy, divide-and-conquer,
  dynamic programming.
- Recursion and induction.
- Graph algorithms at a working level.
- Basic automata and formal languages at an intuition level.
- Undecidability and limits of computation, at a mental-model level.

**Boundary notes.** Discrete mathematics as a formal subject lives in §5.10.
Systems programming and concurrency internals live in §5.3 and §5.4.

---

### 5.9 Software Engineering and Architecture `SWE`

**Purpose.** Turn a programmer into an engineer: someone who builds software
that others can read, run, trust, extend, and operate.

**Major subdomains.**
- Version control with Git; collaborative workflows.
- Project structure, packaging, dependencies, reproducible environments.
- Testing: unit, integration, property-based, snapshot.
- Debugging: hypothesis-driven, tooling, logs, tracing.
- Code review, documentation, and communication of change.
- Refactoring, code smells, and technical debt.
- Design principles: separation of concerns, cohesion/coupling, layering.
- Architectural patterns for services and pipelines.
- Type systems at a practical level (Python typing, mypy).
- Observability at the application level: logs, metrics, traces.

**Boundary notes.** Deploying and operating systems in production lives in
§5.18. Security engineering lives in §5.19.

---

### 5.10 Discrete Mathematics and Logic `DISC`

**Purpose.** Provide the formal reasoning substrate for CS and ML: logic,
sets, functions, relations, combinatorics, and proof.

**Major subdomains.**
- Propositional and predicate logic.
- Sets, relations, functions.
- Combinatorics and counting.
- Graph theory as a mathematical subject.
- Proof techniques: direct, contrapositive, contradiction, induction.
- Boolean algebra.

**Boundary notes.** Applied graph algorithms live in §5.8. Probability lives
in §5.12.

---

### 5.11 Linear Algebra, Calculus, and Optimization `MATH`

**Purpose.** Give learners the continuous-mathematics fluency required to
understand modern machine learning: vector spaces, derivatives, and how
learning is framed as optimization.

**Major subdomains.**
- Vectors, matrices, and their geometry.
- Linear transformations, eigenvalues, singular value decomposition.
- Norms, distances, inner products, projections.
- Differentiation, gradients, the chain rule.
- Multivariable and matrix calculus at a working level.
- Convexity and non-convexity.
- Gradient descent and its variants; second-order intuition.
- Constrained optimization at an intuition level.

**Boundary notes.** Numerical implementation with `numpy` sits at the border
of §5.7 and §5.13. Statistical inference lives in §5.12.

---

### 5.12 Probability, Statistics, Causality, and Experimentation `STAT`

**Purpose.** Equip learners to reason under uncertainty, distinguish
correlation from causation, and design experiments that generate evidence.

**Major subdomains.**
- Probability spaces, random variables, distributions.
- Expectation, variance, joint/marginal/conditional distributions.
- Independence, conditional independence.
- Estimators: bias, variance, consistency.
- Hypothesis testing and confidence intervals.
- Bayesian reasoning at a working level.
- Causal reasoning: interventions, confounders, DAGs at an intuition level.
- Experimental design and A/B testing.
- Simulation and Monte Carlo methods.

**Boundary notes.** Learning theory and generalization bounds live in §5.14.
Evaluation of ML systems lives partly here and partly in §5.14 / §5.16.

---

### 5.13 Data Analysis, Databases, and Data Engineering `DATA`

**Purpose.** Make learners fluent with data as it exists in the real world:
messy, distributed, schema-full or schema-less, arriving in pipelines, and
requiring analysis before modelling.

**Major subdomains.**
- Tabular data with `pandas` and equivalents.
- Exploratory data analysis and visualisation.
- Data cleaning, validation, and quality.
- Relational databases and SQL.
- Non-relational stores: key-value, document, vector, columnar.
- ETL/ELT pipelines and workflow orchestration at an intuition level.
- Data modelling and schema design.
- Batch vs streaming data at a working level.
- File formats: CSV, JSON, Parquet, Arrow.

**Boundary notes.** Building an ML dataset for training lives at the border
of this domain and §5.14 / §5.15. Storage systems as infrastructure live
in §5.18. Governance and privacy live in §5.19.

---

### 5.14 Classical Machine Learning `ML`

**Purpose.** Teach the pre-deep-learning core of ML: how models learn from
data, how they are trained and evaluated, and the canonical algorithms and
failure modes that still underlie modern practice.

**Major subdomains.**
- Supervised, unsupervised, and semi-supervised framings.
- Linear and logistic regression.
- Regularisation and generalisation.
- Decision trees, random forests, gradient boosting.
- Support vector machines at an intuition level.
- k-NN and nearest-neighbour methods.
- Clustering: k-means, hierarchical, density-based.
- Dimensionality reduction: PCA and related.
- Feature engineering and feature stores at a working level.
- Model evaluation: metrics, cross-validation, calibration, error analysis.
- Bias–variance, overfitting, data leakage.
- Model selection and hyperparameter search.

**Boundary notes.** Neural networks and deep learning live in §5.15.
Productionising models lives in §5.18. Fairness and responsible ML live in
§5.19.

---

### 5.15 Deep Learning `DL`

**Purpose.** Teach how modern neural networks are constructed, trained, and
diagnosed, from a first-principles view up to the architectures that power
current systems.

**Major subdomains.**
- The neuron, the layer, the network as a computational graph.
- Backpropagation and automatic differentiation.
- Training dynamics: initialisation, optimisers, learning-rate schedules.
- Regularisation in DL: dropout, weight decay, augmentation.
- Convolutional networks and their applications.
- Sequence models: RNNs, LSTMs at a working level.
- Attention and transformer architecture.
- Representation learning and embeddings.
- Transfer learning and fine-tuning.
- Practical engineering: batching, mixed precision, distributed training at
  an intuition level.
- Debugging neural networks: overfitting a batch, gradient checks, loss
  curves, activation stats.

**Boundary notes.** Large language models and generative multimodal systems
live in §5.16. Serving and monitoring live in §5.18.

---

### 5.16 Language Models, Generative AI, and Multimodal Models `LLM`

**Purpose.** Give learners the depth to reason about and build with large
language models, generative image/audio/video models, and multimodal systems.

**Major subdomains.**
- Language modelling as a task; tokenisation and vocabularies.
- Transformer architecture in depth.
- Pretraining, scaling laws, and emergent behaviour at an intuition level.
- Alignment: instruction tuning, RLHF/DPO family at an intuition level.
- Prompting as a working discipline.
- Sampling: temperature, top-k, top-p, structured decoding.
- Evaluation of generative models: task-based, preference-based,
  capability-based.
- Fine-tuning: full, adapter/LoRA, quantisation-aware, at a working level.
- Diffusion and other generative image/audio/video models at an intuition
  level.
- Multimodal foundations: vision-language, audio-language.
- Limitations, hallucination, and epistemic failure modes.

**Boundary notes.** Building applications on top of LLMs — retrieval, tools,
agents, human workflows — lives in §5.17. Safety, misuse, and governance
live in §5.19.

---

### 5.17 AI Application Engineering: Retrieval, Tools, Agents, and Human Workflows `APP`

**Purpose.** Teach learners to build usable, useful AI-powered software:
retrieval systems, tool-using agents, evaluation harnesses, and human
workflows that integrate AI without eroding trust or control.

**Major subdomains.**
- Prompt engineering as software: structure, testing, versioning.
- Retrieval-Augmented Generation: indexing, chunking, embeddings, ranking.
- Vector stores and hybrid retrieval.
- Tool use and function calling.
- Agents: planning, memory, control loops, and their failure modes.
- Evaluation harnesses for AI applications: offline and online.
- Guardrails, structured outputs, and content policies at an application
  level.
- Human-in-the-loop workflows and interaction design for AI.
- Latency, cost, and quality trade-offs in AI apps.

**Boundary notes.** Model internals live in §5.15 / §5.16. Infrastructure
and reliability live in §5.18. Responsible use and misuse live in §5.19.

---

### 5.18 AI Systems, MLOps, Cloud, Reliability, and Cost `MLOPS`

**Purpose.** Teach how AI systems are actually run: reproducibly trained,
reliably served, monitored in production, deployed in the cloud, and
operated within a cost envelope.

**Major subdomains.**
- Experiment tracking and reproducibility.
- Data and model versioning.
- CI/CD for ML systems.
- Model serving: batch, online, streaming.
- Feature stores and inference pipelines at a working level.
- Containers and orchestration at a working level.
- Cloud platforms: compute, storage, identity, at a working level.
- Observability for ML: metrics, logs, traces, drift, data quality.
- Incident response and post-mortems.
- Cost modelling: training cost, inference cost, storage cost, egress.
- Performance: latency, throughput, tail latency.
- Scaling patterns for AI workloads.

**Boundary notes.** Application-layer AI engineering lives in §5.17.
Security controls live in §5.19.

---

### 5.19 Security, Privacy, Safety, Responsible AI, and Governance `RESP`

**Purpose.** Teach the responsibilities of building AI systems: security,
privacy, safety, fairness, accountability, and the governance context
they operate in.

**Major subdomains.**
- Applied security fundamentals for software engineers.
- Secrets, credentials, and identity in AI systems.
- Data privacy: PII, minimisation, retention, consent.
- Threat modelling for AI systems, including prompt injection, model theft,
  data exfiltration.
- Fairness and harm: measurement, mitigation, documentation.
- Model cards, data sheets, and system cards as artifacts.
- Human oversight, escalation, and appeal.
- Regulatory landscape at an awareness level.
- Responsible-AI review as a practice.

**Boundary notes.** Cryptographic protocols on the wire live in §5.5.
Organisational governance and career practice live in §5.20.

---

### 5.20 Product, Communication, Open Source, Research Literacy, and Career Practice `PRAC`

**Purpose.** Teach the practices that make an AI engineer effective inside
teams, communities, and the field: product thinking, technical
communication, open-source participation, reading research, and career
craft.

**Major subdomains.**
- Product thinking for engineers: users, problems, hypotheses, metrics.
- Written technical communication: docs, RFCs, tickets, post-mortems.
- Spoken and visual communication: talks, demos, diagrams.
- Open-source participation: issues, PRs, maintainership, licensing at
  an awareness level.
- Reading research: papers, benchmarks, reproductions, and healthy
  scepticism.
- Portfolio and evidence: turning work into legible evidence for others.
- Career practice: collaboration, mentoring, feedback, ethics of the trade.
- AI-assisted work as a professional practice, not a shortcut.

**Boundary notes.** Personal study habits and metacognition live in §5.1.
Responsible-AI review as an engineering artifact lives in §5.19.

---

## 6. Cross-Domain Threads

Some capabilities are not owned by any one domain but are reinforced across
many. The KA marks them as **threads**: horizontal lenses that appear
repeatedly in curriculum artifacts.

- **Debugging and diagnosis.** From code bugs to model failures to system
  incidents. Appears in §5.7, §5.9, §5.14, §5.15, §5.16, §5.17, §5.18.
- **Evaluation and evidence.** Turning claims into measurements. Appears in
  §5.12, §5.14, §5.15, §5.16, §5.17, §5.18.
- **Security and privacy.** Runs through every domain that touches user data,
  credentials, or externally-facing systems.
- **Responsible AI and human oversight.** Runs through every domain that
  produces or deploys models or AI-powered applications.
- **Reproducibility.** From notebooks to training runs to production
  deployments; owned partly by §5.9 and §5.18.
- **Communication.** Every artifact a learner produces is also a communication
  artifact; owned by §5.20 and reinforced everywhere.
- **Cost, performance, and scale.** From loop complexity to training runs to
  inference budgets; spans §5.3, §5.8, §5.15, §5.18.
- **Mathematical maturity.** The habit of formal reasoning; grown across
  §5.10, §5.11, §5.12, §5.14, §5.15.
- **AI-assisted work.** How to use AI tools as an engineer without eroding
  understanding; owned by §5.1 and §5.20, reinforced across engineering
  domains.

Threads are not domains and receive no domain codes. In v0.2+, individual
concepts may be tagged with the threads they participate in.

---

## 7. High-Level Dependency Spine

The KA is not linear, but a defensible **spine** exists from complete beginner
to professional AI engineer. This spine is authoritative for stage-level
ordering; module- and lesson-level ordering derives from the concept-level
graph (v0.3).

```text
META, DIGI
      │
      ▼
     SYS ──▶ OS ──▶ NET
      │
      ▼
   THINK ──▶ PY ──▶ CS ──▶ SWE
                          │
                          ▼
             DISC ──▶ MATH ──▶ STAT
                                │
                                ▼
                              DATA
                                │
                                ▼
                               ML ──▶ DL ──▶ LLM ──▶ APP
                                                     │
                                                     ▼
                                                   MLOPS
                                                     │
                                                     ▼
                                                   RESP
                                                     │
                                                     ▼
                                                   PRAC
```

Notes on the spine:

- `META` and `DIGI` run alongside every later domain, not just at the start.
- `PRAC` and `RESP` are shown at the end for ordering, but participate as
  threads throughout.
- `NET` is a prerequisite for `APP` and `MLOPS` as much as for early web
  literacy.
- `STAT` feeds `ML`, `DL`, `LLM`, and `APP` evaluation.
- The spine describes *earliest points of introduction*, not *only points of
  use*. Every domain to the right continues to draw on every domain to its
  left.

The concrete stage/module/lesson ordering in `curriculum/stages/*` will be
re-derived from this spine plus the v0.3 prerequisite graph.

---

## 8. Mapping Domains to Graduate-Profile Competencies

The Graduate Profile defines competency domains (versioned separately). The
KA guarantees that every competency is reachable through at least one KA
domain, and that every KA domain serves at least one competency. The
following mapping is illustrative at v0.1 and becomes authoritative in v0.4.

| KA Domain | Primary Competency Domains Served |
|---|---|
| §5.1 META  | Learning & Metacognition; Communication; Professional Practice |
| §5.2 DIGI  | Digital Fluency; Developer Workstation |
| §5.3 SYS   | Systems Thinking; Performance & Cost |
| §5.4 OS    | Systems Thinking; Developer Workstation; Reliability |
| §5.5 NET   | Systems Thinking; Application Engineering |
| §5.6 THINK | Problem Solving; Programming; Mathematical Maturity |
| §5.7 PY    | Programming; Software Engineering |
| §5.8 CS    | Programming; Systems Thinking; Performance & Cost |
| §5.9 SWE   | Software Engineering; Reliability; Collaboration |
| §5.10 DISC | Mathematical Maturity; Programming |
| §5.11 MATH | Mathematical Maturity; ML/DL Foundations |
| §5.12 STAT | Reasoning under Uncertainty; Evaluation & Evidence |
| §5.13 DATA | Data Fluency; Data Engineering; Evaluation & Evidence |
| §5.14 ML   | Machine Learning; Evaluation & Evidence |
| §5.15 DL   | Deep Learning; Evaluation & Evidence |
| §5.16 LLM  | Language & Generative Models; Evaluation & Evidence |
| §5.17 APP  | AI Application Engineering; Human Workflows; Evaluation |
| §5.18 MLOPS | Reliability; Systems Thinking; Performance & Cost |
| §5.19 RESP | Responsible AI; Security & Privacy; Professional Practice |
| §5.20 PRAC | Communication; Professional Practice; Career |

The v0.4 mapping will replace this table with explicit competency IDs
sourced from the Graduate Profile's Appendix A catalog.

---

## 9. Inclusion and Exclusion Criteria

The KA is exhaustive of the Learn AI graduate's field, not of the field of
computing. Concepts, subdomains, and domains are admitted only when they
pass **all** inclusion criteria and **fail** every exclusion criterion.

### 9.1 Inclusion criteria

A concept is admitted only if:

1. It advances at least one competency in the Graduate Profile.
2. Its prerequisites are, or will be, admitted before it.
3. It has a defensible mastery depth and an evidence class attached (Explain,
   Recognize, Apply, Modify, Diagnose, Transfer, Teach).
4. It is teachable to a learner who has completed all prerequisites without
   introducing new hidden prerequisites.
5. It survives a re-derivation test: if we started from the Graduate Profile
   with no curriculum, we would still admit it.

### 9.2 Exclusion criteria

A concept is rejected if any of the following holds:

1. It is a specific product, vendor, or SDK whose value does not survive a
   version change. (Underlying transferable ideas may still be admitted.)
2. It exists to be impressive or comprehensive but does not advance a stated
   competency.
3. It requires implicit prerequisites we are not willing to teach.
4. Its evidence class is "the learner has heard of it" — awareness alone is
   not a mastery target.
5. It is authored as a lesson but has no home in a domain and subdomain — an
   orphan concept indicates either the KA is incomplete or the concept does
   not belong.

Excluded material may still appear in *references* or *further reading* on
lessons, but not as taught content.

---

## 10. Version Roadmap

The KA is developed in explicit, reviewable increments. No large-scale
lesson authoring against a frozen structure begins until v1.0.

### v0.1 — Domain taxonomy *(this document)*

Deliverables:

- 20 canonical domains with purpose, subdomains, and boundary notes.
- Architecture hierarchy (Domain → Subdomain → Knowledge Area → Concept →
  Skill → Evidence).
- Concept ID convention.
- High-level dependency spine.
- Illustrative mapping to Graduate-Profile competencies.
- Inclusion/exclusion criteria and governance.

Exit criteria: founding review approves the domain set and hierarchy.

### v0.2 — Concept inventory

Deliverables:

- Enumerated Knowledge Areas per subdomain.
- Enumerated concepts within each Knowledge Area, each with a stable ID
  under the §4 convention, a one-line definition, and a home domain.
- No prerequisite graph yet; concepts stand as an inventory.

Exit criteria: no orphan concepts; every concept traces to a Graduate-Profile
competency.

### v0.3 — Prerequisite graph

Deliverables:

- Directed acyclic prerequisite graph over concepts.
- Cross-domain dependencies made explicit.
- Cycle detection and resolution.

Exit criteria: DAG validated; no forward references; spine re-derivable
from the graph.

### v0.4 — Competency and project mapping

Deliverables:

- Explicit mapping from each concept to Graduate-Profile competency IDs.
- Mapping from Graduate-Profile projects and capstones to the concept sets
  they require.
- Gap analysis: any competency with no supporting concepts, any concept
  with no competency.

Exit criteria: every competency covered; every concept justified.

### v0.5 — Mastery depth and evidence

Deliverables:

- Each concept tagged with target mastery depth (Explain, Recognize, Apply,
  Modify, Diagnose, Transfer, Teach).
- Each skill tagged with evidence class(es) drawn from the Graduate-Profile
  evidence framework.
- Assessment implications documented.

Exit criteria: every skill has an evidence contract.

### v1.0 — Frozen canonical architecture

Deliverables:

- Frozen domain taxonomy, concept inventory, prerequisite graph, competency
  mapping, and mastery/evidence contracts.
- Machine-readable export (e.g. JSON or TypeScript) suitable for reference
  from curriculum data, projects, assessments, and tutor behavior.
- Changelog and migration policy for future minor and major versions.

Exit criteria: v1.0 is the source of truth against which the curriculum
spine is re-derived and lesson authoring resumes at scale.

---

## 11. Downstream Rules

The following rules bind every downstream artifact until superseded by a
newer approved KA version.

1. **No large-scale lesson authoring against v0.x.** Lesson bodies may be
   authored for the current provisional spine to prove out lesson
   architecture and interactive components, but the curriculum-wide
   lesson-authoring effort begins only after v1.0.
2. **The current curriculum spine is provisional.** `curriculum/stages/*` at
   the time of this document is a scaffold, not a commitment. All stage,
   module, and lesson IDs, titles, and orderings are subject to
   re-derivation from the frozen KA. Existing lesson bodies must be
   convertible to reference concept IDs once v0.2 lands.
3. **Lovable must not invent structure.** The Lovable agent may not
   introduce new domains, subdomains, competencies, or evidence classes.
   Proposals are recorded in this document's changelog and reviewed under
   the governance process in §12.
4. **Every future artifact references concept and competency IDs.** Once
   v0.2 introduces concept IDs and v0.4 formalises competency mapping,
   every lesson, project, assessment, and tutor prompt must reference the
   concept ID(s) it teaches and the competency ID(s) it advances. Artifacts
   without such references are incomplete.
5. **Non-contradiction rule.** No downstream artifact may contradict the
   KA. Contradictions are resolved by revising the artifact, or by
   proposing a KA revision under §12.
6. **Boundary notes are authoritative.** A concept lives in exactly one
   home domain. Cross-references may appear elsewhere, but ownership is
   singular.

---

## 12. Governance and v0.1 Approval Checklist

### 12.1 Governance

- **Owners.** Learn AI founding team; governance rotates with the Graduate
  Profile ownership.
- **Change proposals.** Recorded as issues or PRs against this document,
  with rationale, impact analysis, and version implication (minor vs
  major).
- **Review cadence.** Quarterly, aligned with the Graduate Profile.
- **Emergency amendments.** Permitted when a downstream contradiction is
  discovered; must ship with a rationale and are reviewed at the next
  quarterly cycle.
- **Machine-readable export.** Introduced at v1.0. Until then, this
  document is the source of truth.

### 12.2 v0.1 approval checklist

To move v0.1 from Draft for Founding Review to Approved:

- [ ] The 20 domains are exhaustive of the graduate's field and non-overlapping
      at the domain tier.
- [ ] Each domain's purpose, subdomains, and boundary notes are approved.
- [ ] The architecture hierarchy (§3) is approved.
- [ ] The concept ID convention (§4) is approved.
- [ ] The dependency spine (§7) is approved as the authoritative stage-level
      ordering.
- [ ] The Graduate-Profile mapping table (§8) is accepted as illustrative
      pending v0.4.
- [ ] Inclusion and exclusion criteria (§9) are approved.
- [ ] The version roadmap (§10) and downstream rules (§11) are approved.
- [ ] The governance process (§12.1) is approved and owners are named in
      the front matter of the next revision.

On approval, the front-matter `status` becomes `Approved (v0.1)` and work
begins on v0.2.

---

*End of Learn AI Knowledge Architecture v0.1.0.*
