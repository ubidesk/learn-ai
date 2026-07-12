import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "python-professional",
  order: 4,
  title: "Advanced Python and Professional Software Engineering",
  purpose:
    "Turn a self-sufficient Python beginner into a professional software engineer who writes typed, tested, observable, packaged, performant Python — and collaborates on it with git.",
  startingLevel:
    "You have completed Python Foundations. You can write standalone Python programs but you have not written classes, type hints, tests, or async code with intent.",
  prerequisites: ["python-foundations"],
  project: {
    title: "Production-Grade Python Library and CLI",
    description:
      "Design, test, document, and publish a small Python library with a CLI, typed interfaces, structured logging, an async component, and a CI pipeline that runs your tests on every commit.",
  },
  exitCriteria: [
    "Design classes that use Python's data model idiomatically.",
    "Add type hints and pass a static type checker on your own code.",
    "Write meaningful tests, including fixtures, parametrized cases, and mocks.",
    "Build a CLI, an HTTP API, and an async data pipeline.",
    "Package, version, and publish a Python project with git and CI.",
  ],
  status: S,
  modules: [
    {
      id: "pp-data-model",
      order: 1,
      title: "Python's Data Model",
      summary: "The object model that underlies every Python value — identity, equality, hashability, and mutation.",
      lessons: [
        L("pp-data-model-objects-identity", 1, "Objects and Identity", "Distinguish an object's identity, type, and value."),
        L("pp-data-model-id-vs-equality", 2, "is vs ==", "Predict when identity and equality agree and when they don't."),
        L("pp-data-model-hashability", 3, "Hashability", "Explain what makes a value hashable and why it matters for sets and dicts."),
        L("pp-data-model-mutability-revisited", 4, "Mutability, Revisited", "Reason about mutable defaults, shared state, and mutation in place."),
        L("pp-data-model-copying", 5, "Shallow and Deep Copying", "Choose between assignment, copy, and deepcopy correctly."),
      ],
    },
    {
      id: "pp-advanced-functions",
      order: 2,
      title: "Advanced Functions",
      summary: "First-class functions, closures, decorators, and the functional idioms you will actually use.",
      lessons: [
        L("pp-advanced-functions-first-class", 1, "Functions Are First-Class", "Pass, return, and store functions like any other value."),
        L("pp-advanced-functions-closures", 2, "Closures", "Explain what a closure captures and how it differs from a class."),
        L("pp-advanced-functions-lambdas", 3, "Lambdas, Used Sparingly", "Use lambda expressions where they help and avoid them where they hurt."),
        L("pp-advanced-functions-higher-order", 4, "Higher-Order Functions", "Compose map/filter/reduce-style pipelines idiomatically."),
        L("pp-advanced-functions-decorators", 5, "Decorators", "Write and apply decorators, including ones that take arguments."),
      ],
    },
    {
      id: "pp-iterators-generators",
      order: 3,
      title: "Iterators and Generators",
      summary: "Lazy sequences — the machinery that lets Python process data streams that don't fit in memory.",
      lessons: [
        L("pp-iterators-generators-iterables-vs-iterators", 1, "Iterables vs Iterators", "Distinguish iterables from iterators and implement both."),
        L("pp-iterators-generators-generator-functions", 2, "Generator Functions", "Write generator functions with yield."),
        L("pp-iterators-generators-generator-expressions", 3, "Generator Expressions", "Use generator expressions for lazy pipelines."),
        L("pp-iterators-generators-itertools", 4, "itertools", "Compose iterators with itertools building blocks."),
        L("pp-iterators-generators-lazy-pipelines", 5, "Lazy Data Pipelines", "Process large streams with constant memory."),
      ],
    },
    {
      id: "pp-oop",
      order: 4,
      title: "Object-Oriented Design",
      summary: "Classes done well — including composition, dunder protocols, and dataclasses.",
      lessons: [
        L("pp-oop-classes-instances", 1, "Classes and Instances", "Define classes with clear responsibilities."),
        L("pp-oop-methods-self", 2, "Methods, self, and State", "Design methods that manage instance state cleanly."),
        L("pp-oop-inheritance", 3, "Inheritance Basics", "Use inheritance where an is-a relationship truly holds."),
        L("pp-oop-composition", 4, "Composition Over Inheritance", "Prefer composition when the relationship is has-a."),
        L("pp-oop-dunder-protocols", 5, "Dunder Methods and Protocols", "Implement __repr__, __eq__, __hash__, __iter__ deliberately."),
        L("pp-oop-dataclasses", 6, "Dataclasses", "Reduce boilerplate with dataclasses without hiding intent."),
      ],
    },
    {
      id: "pp-types",
      order: 5,
      title: "Type Hints and Static Analysis",
      summary: "Gradual typing in Python — how to add types where they pay off without slowing you down.",
      lessons: [
        L("pp-types-hints-basics", 1, "Type Hints Basics", "Annotate function signatures with primitive and container types."),
        L("pp-types-generics", 2, "Generics and TypeVars", "Write generic functions and classes that stay useful."),
        L("pp-types-typeddicts-protocols", 3, "TypedDicts and Protocols", "Type structured dicts and duck-typed interfaces."),
        L("pp-types-static-checkers", 4, "mypy and pyright", "Run a static type checker as part of your workflow."),
        L("pp-types-strategy", 5, "A Gradual Typing Strategy", "Decide where types earn their keep and where they don't."),
      ],
    },
    {
      id: "pp-testing",
      order: 6,
      title: "Testing in Depth",
      summary: "The tests that actually catch regressions — beyond a single asserted example.",
      lessons: [
        L("pp-testing-pytest-basics", 1, "pytest Basics", "Structure a pytest test suite for a small project."),
        L("pp-testing-fixtures", 2, "Fixtures", "Use fixtures to build reproducible test contexts."),
        L("pp-testing-parametrized", 3, "Parametrized Tests", "Cover many inputs with one test using parametrize."),
        L("pp-testing-mocks-fakes", 4, "Mocks, Fakes, and Test Doubles", "Isolate the code under test from side effects."),
        L("pp-testing-property-based", 5, "Property-Based Testing", "Generate inputs with Hypothesis and find edge cases you did not imagine."),
      ],
    },
    {
      id: "pp-observability",
      order: 7,
      title: "Logging, Configuration, and Reliability",
      summary: "How professional Python code observes itself — logging, config, retries, and idempotency.",
      lessons: [
        L("pp-observability-logging-vs-print", 1, "Logging vs print", "Use the logging module instead of print for anything real."),
        L("pp-observability-structured-logging", 2, "Structured Logging", "Emit logs that are searchable and machine-parseable."),
        L("pp-observability-config", 3, "Configuration and Environment", "Load config from files and environment without hardcoding secrets."),
        L("pp-observability-retries", 4, "Retries, Timeouts, and Backoff", "Retry idempotent operations safely and give up when appropriate."),
        L("pp-observability-idempotency", 5, "Idempotency", "Design operations that can be safely repeated."),
      ],
    },
    {
      id: "pp-cli",
      order: 8,
      title: "Command-Line Applications",
      summary: "CLIs that other humans can actually use.",
      lessons: [
        L("pp-cli-argparse", 1, "argparse", "Build a CLI with argparse."),
        L("pp-cli-click-typer", 2, "click and typer", "Build a more ergonomic CLI with click or typer."),
        L("pp-cli-ux", 3, "CLI UX", "Design help, error messages, and exit codes for humans."),
        L("pp-cli-packaging-cli", 4, "Packaging a CLI", "Distribute your CLI as a proper installable package."),
      ],
    },
    {
      id: "pp-web-apis",
      order: 9,
      title: "Web APIs with Python",
      summary: "Talking to APIs and building your own — the backbone of any AI application.",
      lessons: [
        L("pp-web-apis-http-clients", 1, "HTTP Clients: requests and httpx", "Call HTTP APIs correctly, including auth and timeouts."),
        L("pp-web-apis-rest-basics", 2, "REST Basics", "Design URLs, methods, and response shapes that follow REST conventions."),
        L("pp-web-apis-fastapi", 3, "Building APIs with FastAPI", "Build a small HTTP API with FastAPI."),
        L("pp-web-apis-validation", 4, "Request and Response Validation", "Validate inputs and outputs with Pydantic."),
        L("pp-web-apis-testing", 5, "Testing an API", "Test HTTP endpoints end-to-end."),
      ],
    },
    {
      id: "pp-async",
      order: 10,
      title: "Asynchronous Programming and Concurrency",
      summary: "async/await, threads, processes, and the GIL — the honest picture of concurrency in Python.",
      lessons: [
        L("pp-async-async-await", 1, "async and await", "Read and write async functions."),
        L("pp-async-event-loop", 2, "The Event Loop", "Explain what asyncio actually does under the hood."),
        L("pp-async-tasks-cancellation", 3, "Tasks and Cancellation", "Launch, await, and cancel tasks correctly."),
        L("pp-async-threads-processes-gil", 4, "Threads, Processes, and the GIL", "Choose between threads, processes, and async for different workloads."),
        L("pp-async-races-locks", 5, "Race Conditions and Locks", "Recognise races and use locks and queues to eliminate them."),
      ],
    },
    {
      id: "pp-packaging",
      order: 11,
      title: "Packaging and Distribution",
      summary: "Turning a project into something other people can install.",
      lessons: [
        L("pp-packaging-pyproject", 1, "pyproject.toml", "Configure a modern Python project with pyproject.toml."),
        L("pp-packaging-wheels-sdists", 2, "Wheels and sdists", "Build and inspect distribution artefacts."),
        L("pp-packaging-versioning", 3, "Semantic Versioning", "Version releases so consumers can trust upgrades."),
        L("pp-packaging-publishing", 4, "Publishing to a Registry", "Publish a package to a private or public registry."),
      ],
    },
    {
      id: "pp-performance",
      order: 12,
      title: "Performance Engineering",
      summary: "Making Python fast enough — profile first, then vectorize, cache, and batch.",
      lessons: [
        L("pp-performance-profiling", 1, "Profiling CPU Time", "Profile a Python program before optimising anything."),
        L("pp-performance-memory", 2, "Memory Profiling", "Find memory hotspots and leaks in real code."),
        L("pp-performance-vectorization", 3, "Vectorization vs Loops", "Replace Python loops with vectorized operations where appropriate."),
        L("pp-performance-caching", 4, "Caching and Memoization", "Cache expensive computations safely."),
        L("pp-performance-batching", 5, "Batching and I/O Amortization", "Amortize per-call overhead by batching work."),
      ],
    },
    {
      id: "pp-git",
      order: 13,
      title: "Git and Collaborative Engineering",
      summary: "Git as a professional tool — history, branches, reviews, and CI.",
      lessons: [
        L("pp-git-model", 1, "Git's Object Model", "Explain commits, trees, blobs, and refs as a DAG."),
        L("pp-git-branches", 2, "Branches and Merges", "Create, merge, and delete branches with intent."),
        L("pp-git-rebasing", 3, "Rebasing and Rewriting History", "Rebase and rewrite history without losing work."),
        L("pp-git-pull-requests", 4, "Pull Requests and Code Review", "Open, review, and merge a real pull request."),
        L("pp-git-ci", 5, "CI Basics", "Run tests and type checks on every push with CI."),
      ],
    },
  ],
};
