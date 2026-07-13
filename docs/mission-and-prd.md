# Learn AI Project Vision & Product Requirements Document

**Version:** 1.0 — Founding Vision

## Mission

Learn AI is an open-source learning platform designed to take a complete beginner—from someone who has never written a line of code—to someone capable of designing, building, deploying, and maintaining professional AI systems.

The project exists because current learning resources are fragmented. Beginners are forced to jump between videos, blog posts, documentation, online courses, textbooks, GitHub repositories, and AI chatbots, often without understanding how the pieces fit together.

Learn AI provides one coherent, continuously evolving curriculum that teaches not only what to do, but why it matters, how it works, and how each idea connects to modern AI engineering.

## Vision

Become the world’s most comprehensive, beginner-friendly, open-source curriculum for learning artificial intelligence.

A learner who completes the curriculum should be able to say:

> I understand how modern AI systems work, and I can build them.

## North star

Every product, curriculum, design, and engineering decision must answer one question:

> Will this help a complete beginner become a thoughtful, capable, and professional AI engineer?

If the answer is yes, it belongs in Learn AI.

If the answer is no, it does not.

## The problem we are solving

AI education is abundant but incoherent.

Most learners encounter one or more of these problems:

- courses that assume programming knowledge they do not have;
- Python courses that never make the transition into AI;
- AI courses that teach API calls without foundational understanding;
- disconnected tutorials that do not form a durable mental model;
- examples that work only when copied exactly;
- unexplained mathematics and jargon;
- projects that are too artificial to demonstrate professional capability;
- outdated material that does not reflect modern AI engineering practice; and
- no clear path from curiosity to employable skill.

Learn AI addresses these problems through a single, dependency-aware learning journey that begins at zero and advances toward professional practice.

## Target audience

The primary learner says:

> I don’t know anything about programming or AI, but I want to learn from scratch and become a professional AI engineer.

The curriculum therefore assumes:

- no programming experience;
- no computer science background;
- no prior AI or machine learning knowledge;
- no mathematics beyond basic high-school algebra; and
- only basic familiarity with using a computer and a web browser.

The learner may be a student, career changer, working professional, founder, educator, or self-directed hobbyist. Prior credentials are not required.

## Learner promise

Learn AI will be:

- **Beginner-first.** No hidden prerequisites are assumed.
- **Understanding-first.** Explanations prioritize mental models over memorization.
- **AI-connected.** Foundational concepts are connected to modern AI from the beginning.
- **Project-driven.** Learners build useful and portfolio-worthy work.
- **Honest.** Difficulty, limitations, uncertainty, and hype are named clearly.
- **Open source.** Curriculum, code, and educational reasoning are developed in public whenever practical.
- **Coherent.** Each lesson prepares for what follows and reinforces what came before.
- **Professional.** Engineering habits begin early rather than being added at the end.

## Guiding principles

### 1. Never assume prior knowledge

Every lesson is written for someone beginning with no programming or AI background.

No concept is assumed. No technical term appears before it is introduced. Every new idea builds naturally on knowledge already taught inside Learn AI.

A learner should not need an outside course to understand the core curriculum.

### 2. Teach understanding, not memorization

Learners should understand:

- why something exists;
- what problem it solves;
- how it works;
- when to use it;
- when not to use it; and
- how it connects to the larger system.

Syntax is never the final goal. Understanding is.

### 3. AI from day one

The curriculum begins with AI as the motivating destination.

Even while teaching computers, programming, Python, data, mathematics, and software engineering, every important concept is connected to the AI systems learners eventually want to build.

Learners should rarely need to ask:

> Why am I learning this?

### 4. Learn by building

Reading alone is never enough.

Every module or coherent lesson sequence culminates in something tangible. Learners build:

- utilities and command-line tools;
- games and simulations;
- automations;
- data applications;
- machine learning systems;
- neural networks;
- large language model applications;
- retrieval systems;
- agents;
- deployed services; and
- portfolio-quality capstone projects.

### 5. Explain before abstracting

Lessons progress from experience to abstraction:

1. Real-world problem
2. Motivation
3. Intuition
4. Visualization
5. Explanation
6. Code
7. Practice
8. AI application
9. Reflection

Formal terms, notation, and implementation details arrive only after the learner has a reason to care and an intuitive model to attach them to.

### 6. Make the invisible visible

Many of the most important computing and AI concepts are invisible during execution.

Learn AI uses diagrams, animations, traces, interactive demonstrations, and carefully staged examples to reveal:

- memory;
- variables;
- execution flow;
- function calls;
- recursion;
- objects and references;
- tensors;
- gradients;
- attention;
- embeddings;
- transformers;
- retrieval;
- inference; and
- distributed system behavior.

Learners should see ideas before being expected to reason fluently about them.

### 7. Build professional habits early

Professional practice begins with the first stage, not after the “technical” curriculum is complete.

Learners progressively develop habits in:

- debugging;
- testing;
- documentation;
- version control and Git;
- clean code;
- code review;
- reproducibility;
- security and privacy;
- responsible AI;
- performance awareness;
- observability; and
- engineering trade-offs.

## Educational philosophy

Every lesson should answer four questions:

1. Why does this exist?
2. How does it work?
3. Where is it used?
4. How does it connect to modern AI?

Every lesson follows the learner-facing rhythm:

**Learn → Visualize → Practice → Build → Reflect**

The detailed pedagogical principles are defined in [`learning-science.md`](./learning-science.md).

## Learning outcomes

Upon completing the full curriculum, a learner should be able to demonstrate the following capabilities.

### Computing foundations

- Explain at a practical level how computers execute programs.
- Work confidently with files, operating systems, terminals, editors, and development environments.
- Reason about memory, data representation, processes, networks, and the web.

### Programming

- Write clear, idiomatic Python.
- Break problems into manageable steps.
- Design maintainable programs and reusable components.
- Debug effectively and interpret errors.
- Test software systematically.
- Read and modify unfamiliar code.
- Use Git and collaborate through professional workflows.

### Data

- Collect, inspect, clean, transform, and validate data.
- Analyze datasets and communicate findings.
- Visualize information responsibly.
- Work with tabular, textual, image, and time-series data.
- Engineer useful features and prevent data leakage.

### Mathematics for AI

- Use the practical algebra, probability, statistics, calculus, and linear algebra needed for AI engineering.
- Connect mathematical notation to code, geometry, and model behavior.
- Explain what optimization is doing rather than treating it as a black box.

### Machine learning

- Frame problems as machine learning tasks.
- Build sound training, validation, and test workflows.
- Train and evaluate models.
- Select metrics that match real objectives.
- Diagnose overfitting, underfitting, bias, variance, and leakage.
- Improve models through disciplined experimentation.
- Explain model behavior and limitations.

### Deep learning

- Build and train neural networks.
- Use PyTorch effectively.
- Understand tensors, automatic differentiation, backpropagation, and optimization.
- Work with GPUs and manage experiments reproducibly.
- Use and adapt modern architectures.
- Fine-tune pretrained models.

### Large language models

- Use model APIs responsibly.
- Understand tokenization, embeddings, attention, transformers, pretraining, and inference at an engineering level.
- Build retrieval-augmented generation systems.
- Evaluate LLM outputs and system behavior.
- Fine-tune or adapt models when appropriate.
- Build tool-using and agentic systems.
- Recognize reliability, security, privacy, cost, and safety limitations.

### AI engineering

- Build end-to-end AI applications.
- Design data and inference pipelines.
- Deploy systems and expose reliable interfaces.
- Monitor quality, latency, failures, drift, and cost.
- Evaluate systems continuously.
- Work with modern AI tooling without becoming dependent on one vendor or framework.
- Make responsible architecture and product trade-offs.

### Professional practice

- Translate ambiguous goals into technical requirements.
- Communicate decisions clearly.
- Review and improve code.
- Read documentation and research critically.
- Build a portfolio that demonstrates original capability.
- Continue learning independently as tools and research evolve.

## The learning journey

The authoritative curriculum is organized as a 13-stage dependency-aware progression in [`/curriculum`](../curriculum).

At a conceptual level, the journey moves through these major phases:

1. Understanding computers and the digital world
2. Thinking like a programmer
3. Building software with Python
4. Working with data
5. Learning the mathematics needed for AI
6. Building machine learning systems
7. Building deep learning systems
8. Understanding and using large language models
9. Building retrieval and generative AI applications
10. Building agents and tool-using systems
11. Deploying and operating AI systems
12. Developing professional engineering practice
13. Integrating capabilities through portfolio capstones

The transition should feel gradual. Python begins as a subject of study and becomes a tool for solving larger AI problems.

The curriculum files—not this overview—are the source of truth for exact stage, module, and lesson names.

## What makes Learn AI different

Learn AI is built around five core pillars.

### Learn

Clear explanations that prioritize understanding, motivation, and accurate mental models.

### Visualize

Original diagrams, execution traces, interactive demonstrations, and visual explanations that make invisible processes observable.

### Practice

Retrieval, prediction, debugging, modification, and progressively less-scaffolded exercises that strengthen durable understanding.

### Build

Authentic projects that integrate skills and produce visible evidence of capability.

### Reflect

Summaries, self-explanations, reviews, and capability checks that help learners consolidate knowledge and recognize gaps.

## Product requirements

### Curriculum requirements

The platform must provide:

- a complete beginner-to-professional curriculum;
- explicit prerequisites and dependency ordering;
- clearly stated learning objectives;
- accurate duration and difficulty guidance;
- lesson-level explanations, examples, exercises, and checks;
- module and stage projects;
- substantial capstone projects;
- recurring reinforcement of important concepts;
- consistent terminology and mental models; and
- documented review and version history.

### Learning experience requirements

The product should support:

- clear curriculum navigation;
- visible stage, module, and lesson status;
- responsive and accessible reading;
- runnable code examples;
- interactive learning elements where they materially improve understanding;
- exercises with useful feedback;
- solutions that explain reasoning rather than only reveal answers;
- downloadable or printable lesson notes;
- searchable reference material;
- progress tracking when the underlying curriculum is sufficiently mature; and
- honest distinction between published, draft, and planned material.

### Content system requirements

Content must be:

- version-controlled;
- reviewable through GitHub;
- represented as structured data;
- independent from any single presentation framework;
- validated automatically where possible;
- reusable across the website, downloadable notes, books, and future formats; and
- maintainable by contributors who did not design the original system.

### Technical requirements

The platform should:

- preserve the curriculum as the single source of truth;
- separate curriculum content from presentation code;
- support static or server-rendered public access;
- validate curriculum structure during development and builds;
- test code examples and critical interactions;
- enforce accessibility baselines;
- support reliable search and navigation;
- avoid unnecessary backend complexity during the content-first phase; and
- evolve without locking the curriculum to one framework, model provider, or hosting platform.

### Quality requirements

Every published lesson must pass the standards in [`quality-standards.md`](./quality-standards.md), including:

- technical review;
- educational review;
- editorial review;
- accessibility review;
- code and exercise validation;
- visual review where applicable; and
- AI safety or responsible-AI review where applicable.

## Version 1 scope

Version 1 aims to include:

- the complete beginner-to-professional curriculum spine;
- an interactive public lesson website;
- substantial lesson content across the full journey;
- runnable code examples;
- exercises and explained solutions;
- portfolio-oriented projects and capstones;
- curated external resources where they add value;
- a searchable knowledge base;
- transparent progress and publication status; and
- the foundations for learner progress tracking.

The curriculum spine may be published before every lesson body is complete. Planned content must be labeled honestly rather than represented as finished.

## Out of scope for Version 1

The following are intentionally deferred until the core curriculum and content system are mature:

- certification programs;
- paid content or gated premium tiers;
- instructor-led classes;
- enterprise learning-management features;
- community forums;
- native mobile applications;
- full multi-language translation;
- complex personalization systems;
- production AI tutoring; and
- backend infrastructure that does not directly improve the core learning experience.

These may be considered later, but they must not distract from completing a coherent, high-quality curriculum.

## Current rebuild priorities

The current implementation phase is content-first and public.

Priority order:

1. Protect the full curriculum spine from accidental compression.
2. Establish the architecture, schema, and validation rules.
3. Produce high-quality lesson specifications and lesson bodies.
4. Add exercises, projects, visuals, and runnable examples.
5. Improve the public learning experience.
6. Add interactive and personalized infrastructure only when the curriculum warrants it.

Authentication, payments, complex learner accounts, and AI-chat features should not drive the early architecture.

## Open-source philosophy

Learn AI will be built in public.

The curriculum, code, diagrams, and supporting material should be openly available whenever practical. The project welcomes contributions, but every contribution must meet the same educational, technical, editorial, accessibility, and ethical standards.

Quality is valued over speed.

Consistency is valued over quantity.

Understanding is valued over coverage.

Open source does not mean ungoverned. The curriculum must remain coherent even as the contributor community grows.

## Success metrics

Learn AI succeeds when:

- a complete beginner can begin without external prerequisite courses;
- learners understand why they are learning each important concept;
- every lesson connects naturally to earlier and later learning;
- code examples are accurate, tested, current, and meaningful;
- learners complete modules with demonstrable capabilities;
- projects increasingly resemble real professional work;
- graduates can build original AI applications rather than only reproduce tutorials;
- learners can explain system behavior and trade-offs;
- contributors can add content without breaking curricular coherence;
- published content earns learner trust; and
- the curriculum remains useful as tools and frameworks change.

Completion counts, page views, and lesson volume are secondary metrics. Capability and learner transformation are primary.

## Product decision framework

When evaluating a feature or content proposal, ask:

1. Does it help the target beginner progress toward professional AI capability?
2. Does it strengthen understanding, practice, feedback, or authentic building?
3. Does it preserve curricular coherence?
4. Can it be maintained by an open-source project?
5. Is it more important than completing or improving the curriculum itself?

A feature should not ship merely because it is impressive, fashionable, or technically interesting.

## Final principle

The curriculum is the product.

The website is the delivery mechanism.

Technology should serve the learning journey—not dictate it.

Learn AI is not measured by how much information it contains. It is measured by how many people it helps transform from complete beginners into thoughtful, capable, and professional AI engineers.
