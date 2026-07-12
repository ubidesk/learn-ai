import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "60–90 min";

export const stage: Stage = {
  id: "python-professional",
  order: 4,
  title: "Advanced Python and Professional Software Engineering",
  purpose:
    "Turn a competent Python beginner into someone who writes maintainable, tested, packaged, professionally-engineered software — the baseline expected of an AI engineer.",
  startingLevel:
    "You can write small Python programs from scratch and debug your own bugs.",
  prerequisites: ["python-foundations"],
  project: {
    title: "Production-Quality Python Library",
    description:
      "Design and publish a small but real Python library, complete with typed API, tests, docs, packaging, CI, and a semantic version history.",
  },
  exitCriteria: [
    "Use advanced Python features (iterators, generators, decorators, context managers, typing) idiomatically.",
    "Design testable APIs and write meaningful unit and integration tests.",
    "Package, version, and distribute a Python library.",
    "Read and contribute to a nontrivial existing codebase with confidence.",
    "Reason about performance, concurrency, and correctness trade-offs.",
  ],
  status: S,
  modules: [
    {
      id: "python-professional-advanced-language",
      order: 1,
      title: "Advanced Language Features",
      summary: "The Python features libraries rely on and beginners rarely see.",
      lessons: [
        { id: "python-professional-adv-iterators", order: 1, title: "Iterators and the Iteration Protocol", outcome: "Explain how for-loops actually work and write your own iterables.", effort: eff, status: S },
        { id: "python-professional-adv-generators", order: 2, title: "Generators and Lazy Pipelines", outcome: "Compose lazy data pipelines with generator functions and expressions.", effort: eff, status: S },
        { id: "python-professional-adv-decorators", order: 3, title: "Decorators", outcome: "Write and reason about decorators without breaking function metadata.", effort: eff, status: S },
        { id: "python-professional-adv-context", order: 4, title: "Context Managers", outcome: "Use and author context managers for resource safety.", effort: eff, status: S },
        { id: "python-professional-adv-dataclasses", order: 5, title: "Dataclasses and Records", outcome: "Model plain data with dataclasses/attrs instead of ad-hoc classes.", effort: eff, status: S },
      ],
    },
    {
      id: "python-professional-typing-and-design",
      order: 2,
      title: "Typing and API Design",
      summary: "Types as design tools, not decoration.",
      lessons: [
        { id: "python-professional-typing-basics", order: 1, title: "Type Hints in Practice", outcome: "Add useful type hints to real Python code.", effort: eff, status: S },
        { id: "python-professional-typing-generics", order: 2, title: "Generics, Protocols, and TypedDicts", outcome: "Type collections, structural interfaces, and record-like dicts.", effort: eff, status: S },
        { id: "python-professional-typing-mypy", order: 3, title: "mypy and Strictness", outcome: "Integrate a type checker and choose sensible strictness settings.", effort: eff, status: S },
        { id: "python-professional-typing-api-design", order: 4, title: "Designing APIs Humans Enjoy", outcome: "Apply consistent naming, small surfaces, and clear invariants.", effort: eff, status: S },
      ],
    },
    {
      id: "python-professional-testing-and-quality",
      order: 3,
      title: "Testing, Debugging, and Quality",
      summary: "Making changes safely in code that other people (or future-you) depend on.",
      lessons: [
        { id: "python-professional-test-pytest", order: 1, title: "pytest in Depth", outcome: "Structure a real test suite with fixtures, parametrization, and marks.", effort: eff, status: S },
        { id: "python-professional-test-property", order: 2, title: "Property-Based Testing with Hypothesis", outcome: "Find bugs beginners miss by generating inputs.", effort: eff, status: S },
        { id: "python-professional-test-coverage", order: 3, title: "Coverage and What Not to Test", outcome: "Reason about coverage honestly, without treating it as a target.", effort: eff, status: S },
        { id: "python-professional-test-debugging", order: 4, title: "Debuggers, Tracebacks, and Bisect", outcome: "Diagnose bugs in code you did not write, quickly.", effort: eff, status: S },
      ],
    },
    {
      id: "python-professional-packaging-and-tooling",
      order: 4,
      title: "Packaging, Environments, and Tooling",
      summary: "Shipping code so other people can install and use it.",
      lessons: [
        { id: "python-professional-pkg-project-layout", order: 1, title: "Modern Project Layout", outcome: "Lay out a src-based Python project that scales.", effort: eff, status: S },
        { id: "python-professional-pkg-pyproject", order: 2, title: "pyproject.toml and Metadata", outcome: "Configure a modern Python project with pyproject.toml.", effort: eff, status: S },
        { id: "python-professional-pkg-env-managers", order: 3, title: "Environment Managers (uv, pip-tools, poetry)", outcome: "Pick and use an environment manager without ceremony.", effort: eff, status: S },
        { id: "python-professional-pkg-publish", order: 4, title: "Publishing to PyPI", outcome: "Publish a real package and version it responsibly.", effort: eff, status: S },
        { id: "python-professional-pkg-ci", order: 5, title: "Continuous Integration", outcome: "Set up CI that runs tests, types, and linting on every commit.", effort: eff, status: S },
      ],
    },
    {
      id: "python-professional-perf-and-concurrency",
      order: 5,
      title: "Performance and Concurrency",
      summary: "Making Python fast enough, without pretending it is C.",
      lessons: [
        { id: "python-professional-perf-profiling", order: 1, title: "Profiling and Measurement", outcome: "Measure before optimising, and locate real bottlenecks.", effort: eff, status: S },
        { id: "python-professional-perf-datastructures", order: 2, title: "Choosing the Right Data Structure", outcome: "Pick structures whose complexity matches the workload.", effort: eff, status: S },
        { id: "python-professional-perf-numpy-preview", order: 3, title: "Vectorization Preview (NumPy)", outcome: "Recognise when to leave Python-land and go array-native.", effort: eff, status: S },
        { id: "python-professional-perf-concurrency", order: 4, title: "Threads, Processes, and asyncio", outcome: "Choose the right concurrency model for the workload.", effort: eff, status: S },
      ],
    },
    {
      id: "python-professional-engineering-practice",
      order: 6,
      title: "Working as a Software Engineer",
      summary: "The practices that separate hobbyist code from production code.",
      lessons: [
        { id: "python-professional-eng-git-professional", order: 1, title: "Git for Real Teams", outcome: "Use branches, PRs, and history hygiene in a collaborative workflow.", effort: eff, status: S },
        { id: "python-professional-eng-code-review", order: 2, title: "Code Review, Given and Received", outcome: "Give and take code review that improves code and relationships.", effort: eff, status: S },
        { id: "python-professional-eng-refactoring", order: 3, title: "Refactoring Safely", outcome: "Change code shape without changing behaviour, backed by tests.", effort: eff, status: S },
        { id: "python-professional-eng-docs", order: 4, title: "Docs, READMEs, and Examples", outcome: "Write docs that get read and examples that stay correct.", effort: eff, status: S },
      ],
    },
  ],
};
