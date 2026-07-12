// Learn AI — canonical curriculum content model.
// The stage/module list below is the source of truth (76 modules across 10 stages).

export type Status = "available" | "in-development" | "planned";

export type Level =
  | "Absolute beginner"
  | "Beginner"
  | "Beginner → Intermediate"
  | "Intermediate"
  | "Intermediate → Advanced"
  | "Advanced";

export interface Module {
  /** Stable slug within the stage. */
  id: string;
  /** Display number, e.g. "0.1", "2.7". */
  number: string;
  title: string;
  /** Granular topics covered by the module. */
  topics: string[];
  /** What the learner can demonstrably do after the module. */
  evidence: string;
  status?: Status;
}

export interface StageProject {
  title: string;
  blurb: string;
  artifact: string;
}

export interface Stage {
  id: string;
  /** Internal numbering: 0..9 (ten stages). */
  number: number;
  title: string;
  level: Level;
  pacing: string;
  summary: string;
  modules: Module[];
  project: StageProject;
  outcome: string;
  prerequisites: string[];
  status: Status;
  /** Overrides the standard stage exit criteria when present. */
  exitCriteria?: string[];
}

export const pillars = [
  {
    key: "learn",
    title: "Learn",
    tagline: "Read clear, jargon-free explanations.",
    body: "Short, honest lessons that assume nothing. Every concept starts with plain language, then earns its vocabulary.",
    icon: "01",
  },
  {
    key: "visualize",
    title: "Visualize",
    tagline: "See how ideas actually work.",
    body: "Diagrams, animations and small interactive demos — because concepts stop being magic once you can watch them happen.",
    icon: "02",
  },
  {
    key: "practice",
    title: "Practice",
    tagline: "Small exercises, real intuition.",
    body: "Bite-sized drills and thought experiments you can do in a browser tab. Instant feedback, no setup, no shame.",
    icon: "03",
  },
  {
    key: "build",
    title: "Build",
    tagline: "Ship something you can show.",
    body: "Guided projects at every stage. Each one leaves you with a working artifact, a repo, and a story to tell.",
    icon: "04",
  },
  {
    key: "reflect",
    title: "Reflect",
    tagline: "Turn practice into understanding.",
    body: "End-of-lesson prompts and community reviews. Learning sticks when you write it down and hear it back.",
    icon: "05",
  },
] as const;

export const standardExitCriteria = [
  "Complete the stage project without line-by-line instructions.",
  "Explain the central mental models in your own words.",
  "Diagnose at least one unfamiliar failure using evidence.",
  "Record capabilities and gaps in a written stage reflection.",
];

export const stages: Stage[] = [
  {
    id: "orientation",
    number: 0,
    title: "Orientation & Digital Foundations",
    level: "Absolute beginner",
    pacing: "2–4 weeks",
    summary:
      "Meet the field and get set up. What AI engineers actually do, how a computer really works from a user's seat, and a first AI-connected build — so the rest of the curriculum has real ground to stand on.",
    modules: [
      {
        id: "0-1",
        number: "0.1",
        title: "What AI Engineers Actually Do",
        topics: [
          "AI systems and their lifecycle",
          "Learning workflow and deliberate practice",
          "Responsible use of AI assistants",
        ],
        evidence: "Explain the field and create a personal learning system.",
      },
      {
        id: "0-2",
        number: "0.2",
        title: "Computer and File Foundations",
        topics: [
          "Files, folders, paths, extensions",
          "Applications and processes",
          "Installing tools safely",
          "Cloud vs. local computing",
        ],
        evidence: "Navigate files and troubleshoot basic environment issues.",
      },
      {
        id: "0-3",
        number: "0.3",
        title: "Developer Workspace",
        topics: [
          "VS Code",
          "Terminal basics",
          "Python installation",
          "Virtual environments",
          "Notebooks",
          "GitHub account and repositories",
        ],
        evidence: "Run a program, use a terminal, and save work under version control.",
      },
      {
        id: "0-4",
        number: "0.4",
        title: "First AI-Connected Build",
        topics: [
          "Inputs, outputs, instructions",
          "Calling a simple model API or local demo",
          "Secrets and API keys",
          "Limitations and verification",
        ],
        evidence:
          "Build a tiny AI-assisted application while understanding each moving part.",
      },
    ],
    project: {
      title: "Personal Learning System & First AI Build",
      blurb:
        "Set up your workspace, publish a first repo, and ship a tiny AI-assisted tool you fully understand end-to-end.",
      artifact: "A working dev environment, a public GitHub profile, and a first AI-connected demo.",
    },
    outcome:
      "explain what AI engineers do, navigate your machine like a beginner developer, and ship your first AI-connected artifact.",
    prerequisites: [],
    status: "available",
  },
  {
    id: "computers",
    number: 1,
    title: "Understanding Computers",
    level: "Absolute beginner",
    pacing: "3–5 weeks",
    summary:
      "The invisible ground everything else stands on: how information is represented, how programs run, how memory and storage differ, and how the web actually moves bytes between machines.",
    modules: [
      {
        id: "1-1",
        number: "1.1",
        title: "Information and Representation",
        topics: ["Bits, bytes, text, numbers", "Encoding", "Images and structured data"],
        evidence: "Explain how computers represent common information.",
      },
      {
        id: "1-2",
        number: "1.2",
        title: "Programs and Execution",
        topics: [
          "Source code",
          "Interpreter",
          "Instructions and state",
          "Execution order",
          "Errors",
        ],
        evidence: "Trace a small program step by step.",
      },
      {
        id: "1-3",
        number: "1.3",
        title: "Memory and Storage",
        topics: [
          "Working memory vs. persistent storage",
          "Names, values, and objects",
          "Files and databases",
        ],
        evidence: "Predict where information lives and how long it persists.",
      },
      {
        id: "1-4",
        number: "1.4",
        title: "Operating Systems and Processes",
        topics: ["Processes", "Resources", "Environment variables", "Permissions"],
        evidence: "Diagnose common execution and permission problems.",
      },
      {
        id: "1-5",
        number: "1.5",
        title: "Networks and the Web",
        topics: [
          "Clients and servers",
          "Requests and responses",
          "URLs, HTTP, JSON",
          "APIs",
        ],
        evidence: "Explain how an application communicates with an online AI service.",
      },
      {
        id: "1-6",
        number: "1.6",
        title: "Stage Project: System Explorer",
        topics: [
          "Inspect files, processes, environment",
          "Trace a web request end-to-end",
        ],
        evidence: "Produce a visual explanation of a small program from input to output.",
      },
    ],
    project: {
      title: "System Explorer",
      blurb:
        "A hands-on exploration of files, processes, environment variables, and a real web request — turned into a diagram you can teach from.",
      artifact: "A written + visual explanation of one small program from input to output.",
    },
    outcome:
      "reason about what a computer is doing beneath the surface, from bytes on disk to bytes on the wire.",
    prerequisites: ["orientation"],
    status: "in-development",
  },
  {
    id: "thinking-programmer",
    number: 2,
    title: "Thinking Like a Programmer",
    level: "Beginner",
    pacing: "6–8 weeks",
    summary:
      "Programming is a way of thinking before it's a language. Values, state, decisions, repetition, functions, collections, and debugging — the vocabulary of code and the discipline of reasoning about it.",
    modules: [
      {
        id: "2-1",
        number: "2.1",
        title: "Values, Types, and Expressions",
        topics: [
          "Numbers, text, booleans",
          "Operators",
          "Type conversion",
        ],
        evidence: "Evaluate expressions and predict results.",
      },
      {
        id: "2-2",
        number: "2.2",
        title: "Variables and State",
        topics: ["Assignment", "Naming", "Mutation", "State changes"],
        evidence: "Trace state across a program.",
      },
      {
        id: "2-3",
        number: "2.3",
        title: "Decisions",
        topics: ["Conditions", "Comparisons", "Boolean logic", "Branching"],
        evidence: "Translate rules into correct decision logic.",
      },
      {
        id: "2-4",
        number: "2.4",
        title: "Repetition",
        topics: [
          "Loops",
          "Counters",
          "Accumulators",
          "Iteration over collections",
        ],
        evidence: "Recognize and implement repeated processes.",
      },
      {
        id: "2-5",
        number: "2.5",
        title: "Functions and Decomposition",
        topics: ["Parameters", "Return values", "Scope", "Contracts"],
        evidence: "Break a problem into reusable functions.",
      },
      {
        id: "2-6",
        number: "2.6",
        title: "Collections",
        topics: [
          "Lists",
          "Dictionaries",
          "Sets",
          "Tuples",
          "Nested data",
        ],
        evidence: "Choose and manipulate appropriate data structures.",
      },
      {
        id: "2-7",
        number: "2.7",
        title: "Debugging as Reasoning",
        topics: [
          "Tracebacks",
          "Print and debugger inspection",
          "Hypotheses",
          "Minimal reproduction",
        ],
        evidence: "Diagnose unfamiliar bugs systematically.",
      },
      {
        id: "2-8",
        number: "2.8",
        title: "Stage Project: Personal Automation Tool",
        topics: [
          "Requirements",
          "Program design",
          "Testing",
          "User feedback",
        ],
        evidence: "Build and explain an original automation program.",
      },
    ],
    project: {
      title: "Personal Automation Tool",
      blurb:
        "Design and build a small program that automates something real in your life — with tests and a written rationale.",
      artifact: "A working Python program, tests, and a short design writeup.",
    },
    outcome:
      "take a fuzzy problem, break it into pieces, and reason about state, decisions, and repetition with confidence.",
    prerequisites: ["computers"],
    status: "planned",
  },
  {
    id: "python",
    number: 3,
    title: "Building Software with Python",
    level: "Beginner",
    pacing: "8–10 weeks",
    summary:
      "Learn Python the way professionals actually use it: modules, files, errors, objects, tests, APIs, and Git — wired together into applications another person can run.",
    modules: [
      {
        id: "3-1",
        number: "3.1",
        title: "Modules and Packages",
        topics: ["Imports", "Project structure", "Dependency management"],
        evidence: "Organize multi-file Python software.",
      },
      {
        id: "3-2",
        number: "3.2",
        title: "Files and Data Formats",
        topics: ["Text", "CSV", "JSON", "Serialization", "Validation"],
        evidence: "Build reliable file-processing workflows.",
      },
      {
        id: "3-3",
        number: "3.3",
        title: "Errors and Reliability",
        topics: [
          "Exceptions",
          "Validation",
          "Logging",
          "Defensive programming",
        ],
        evidence: "Design software that fails clearly and recovers appropriately.",
      },
      {
        id: "3-4",
        number: "3.4",
        title: "Objects and Abstraction",
        topics: [
          "Classes",
          "Instances",
          "Methods",
          "Composition",
          "Dataclasses",
        ],
        evidence: "Model a domain without unnecessary complexity.",
      },
      {
        id: "3-5",
        number: "3.5",
        title: "Testing",
        topics: [
          "Unit tests",
          "Test cases",
          "Fixtures",
          "Regression tests",
        ],
        evidence: "Use tests to drive confidence and prevent recurrence.",
      },
      {
        id: "3-6",
        number: "3.6",
        title: "Interfaces and APIs",
        topics: [
          "HTTP clients",
          "Authentication",
          "Rate limits",
          "Pagination",
        ],
        evidence: "Integrate a third-party API responsibly.",
      },
      {
        id: "3-7",
        number: "3.7",
        title: "Git and Collaboration",
        topics: [
          "Commits",
          "Branches",
          "Pull requests",
          "Code review",
          "Issues",
        ],
        evidence: "Work through a professional collaborative workflow.",
      },
      {
        id: "3-8",
        number: "3.8",
        title: "Stage Project: Production-Style Python App",
        topics: [
          "CLI or small web service",
          "Configuration",
          "Tests",
          "Documentation",
        ],
        evidence: "Deliver a maintainable application another person can run.",
      },
    ],
    project: {
      title: "Production-Style Python App",
      blurb:
        "A CLI or small web service with configuration, tests, and documentation — the kind of code you'd hand a teammate.",
      artifact: "A public repo another engineer can clone, install, and run.",
    },
    outcome:
      "structure, test, and ship Python software the way working engineers do.",
    prerequisites: ["thinking-programmer"],
    status: "planned",
  },
  {
    id: "data",
    number: 4,
    title: "Working with Data",
    level: "Beginner → Intermediate",
    pacing: "8–10 weeks",
    summary:
      "AI is data plus math. NumPy, pandas, cleaning, visualization, SQL, and feature engineering — plus enough statistics and linear algebra intuition to trust your conclusions.",
    modules: [
      {
        id: "4-1",
        number: "4.1",
        title: "Data Thinking",
        topics: [
          "Observations",
          "Features",
          "Targets",
          "Schemas",
          "Data-generating processes",
        ],
        evidence: "Describe what a dataset represents and what it does not.",
      },
      {
        id: "4-2",
        number: "4.2",
        title: "NumPy and Arrays",
        topics: [
          "Dimensions",
          "Shapes",
          "Indexing",
          "Broadcasting",
          "Vectorization",
        ],
        evidence: "Manipulate numerical data and explain array operations.",
      },
      {
        id: "4-3",
        number: "4.3",
        title: "pandas",
        topics: [
          "Series and DataFrames",
          "Selection",
          "Grouping",
          "Joining",
          "Reshaping",
        ],
        evidence: "Perform reproducible tabular analysis.",
      },
      {
        id: "4-4",
        number: "4.4",
        title: "Data Cleaning and Quality",
        topics: [
          "Missing values",
          "Duplicates",
          "Outliers",
          "Type errors",
          "Leakage",
        ],
        evidence: "Create and defend a cleaning strategy.",
      },
      {
        id: "4-5",
        number: "4.5",
        title: "Visualization",
        topics: [
          "Chart choice",
          "Encoding",
          "Distributions",
          "Relationships",
          "Uncertainty",
        ],
        evidence: "Create truthful visual explanations.",
      },
      {
        id: "4-6",
        number: "4.6",
        title: "SQL and Databases",
        topics: [
          "Tables",
          "Queries",
          "Filters",
          "Aggregations",
          "Joins",
          "Indexes",
        ],
        evidence: "Retrieve and combine data safely.",
      },
      {
        id: "4-7",
        number: "4.7",
        title: "Feature Engineering",
        topics: [
          "Transformations",
          "Categorical variables",
          "Scaling",
          "Text and time features",
        ],
        evidence: "Create useful features without leakage.",
      },
      {
        id: "4-8",
        number: "4.8",
        title: "Stage Project: Data Investigation",
        topics: [
          "Question formulation",
          "Acquisition",
          "Cleaning",
          "Analysis",
          "Narrative",
        ],
        evidence: "Publish a reproducible data report and dataset pipeline.",
      },
    ],
    project: {
      title: "Data Investigation",
      blurb:
        "Formulate a real question, acquire and clean the data, and publish a reproducible report others can rerun.",
      artifact: "A notebook, a pipeline, and a written data report.",
    },
    outcome:
      "load, clean, explore, and describe a real dataset with math intuition strong enough to trust your conclusions.",
    prerequisites: ["python"],
    status: "planned",
  },
  {
    id: "ml",
    number: 5,
    title: "Machine Learning",
    level: "Intermediate",
    pacing: "10–12 weeks",
    summary:
      "How machines learn from data: framing, baselines, regression, classification, ensembles, validation, interpretability, and unsupervised methods — the classical toolbox, done honestly.",
    modules: [
      {
        id: "5-1",
        number: "5.1",
        title: "Learning from Data",
        topics: [
          "Supervised and unsupervised learning",
          "Training and inference",
          "Generalization",
        ],
        evidence: "Explain what a model learns and what success means.",
      },
      {
        id: "5-2",
        number: "5.2",
        title: "Problem Framing and Baselines",
        topics: [
          "Targets",
          "Metrics",
          "Constraints",
          "Simple baselines",
        ],
        evidence: "Turn a real problem into an evaluable ML task.",
      },
      {
        id: "5-3",
        number: "5.3",
        title: "Regression",
        topics: [
          "Linear models",
          "Loss",
          "Residuals",
          "Regularization",
        ],
        evidence: "Train and diagnose regression models.",
      },
      {
        id: "5-4",
        number: "5.4",
        title: "Classification",
        topics: [
          "Probabilities",
          "Thresholds",
          "Confusion matrix",
          "Precision and recall",
        ],
        evidence: "Choose metrics and thresholds based on costs.",
      },
      {
        id: "5-5",
        number: "5.5",
        title: "Trees and Ensembles",
        topics: [
          "Decision trees",
          "Random forests",
          "Gradient boosting",
        ],
        evidence: "Compare model families and explain trade-offs.",
      },
      {
        id: "5-6",
        number: "5.6",
        title: "Validation and Tuning",
        topics: [
          "Train/validation/test",
          "Cross-validation",
          "Hyperparameters",
          "Pipelines",
        ],
        evidence: "Evaluate without contaminating the test set.",
      },
      {
        id: "5-7",
        number: "5.7",
        title: "Interpretability and Fairness",
        topics: [
          "Feature importance",
          "Local explanations",
          "Bias",
          "Subgroups",
        ],
        evidence: "Investigate model behavior and limitations.",
      },
      {
        id: "5-8",
        number: "5.8",
        title: "Unsupervised Learning",
        topics: [
          "Clustering",
          "Dimensionality reduction",
          "Anomaly detection",
        ],
        evidence: "Use unsupervised methods cautiously and interpret results.",
      },
      {
        id: "5-9",
        number: "5.9",
        title: "Stage Project: End-to-End ML System",
        topics: [
          "Data pipeline",
          "Baseline",
          "Model comparison",
          "Evaluation card",
        ],
        evidence: "Deliver an original model with evidence and limitations.",
      },
    ],
    project: {
      title: "End-to-End ML System",
      blurb:
        "Pick a real problem, build a pipeline and baseline, compare models, and publish an honest evaluation card.",
      artifact: "A trained model, an evaluation report, and a reproducible repo.",
    },
    outcome:
      "frame a problem as ML, train and evaluate a model responsibly, and explain exactly why it works (or doesn't).",
    prerequisites: ["data"],
    status: "planned",
  },
  {
    id: "deep-learning",
    number: 6,
    title: "Deep Learning",
    level: "Intermediate → Advanced",
    pacing: "12–14 weeks",
    summary:
      "Tensors, gradients, networks, and PyTorch — plus vision, sequences, and the practical realities of training on real hardware.",
    modules: [
      {
        id: "6-1",
        number: "6.1",
        title: "Tensors and Computation Graphs",
        topics: ["Tensor shapes", "Operations", "Devices", "Graphs"],
        evidence: "Reason about tensor transformations and device placement.",
      },
      {
        id: "6-2",
        number: "6.2",
        title: "Gradients and Optimization",
        topics: [
          "Derivatives as sensitivity",
          "Backpropagation",
          "Gradient descent",
          "Learning rates",
        ],
        evidence: "Explain and debug a training step.",
      },
      {
        id: "6-3",
        number: "6.3",
        title: "Neural Network Foundations",
        topics: ["Layers", "Activations", "Losses", "Initialization"],
        evidence: "Build a small network from components.",
      },
      {
        id: "6-4",
        number: "6.4",
        title: "PyTorch Workflow",
        topics: [
          "Datasets",
          "DataLoaders",
          "Modules",
          "Training loops",
          "Checkpoints",
        ],
        evidence: "Train, validate, save, and reload models.",
      },
      {
        id: "6-5",
        number: "6.5",
        title: "Training Reliability",
        topics: [
          "Overfitting",
          "Regularization",
          "Normalization",
          "Schedulers",
          "Reproducibility",
        ],
        evidence: "Diagnose common training failures.",
      },
      {
        id: "6-6",
        number: "6.6",
        title: "Computer Vision",
        topics: [
          "Convolutions",
          "CNNs",
          "Transfer learning",
          "Augmentation",
        ],
        evidence: "Build and evaluate an image model.",
      },
      {
        id: "6-7",
        number: "6.7",
        title: "Sequences and Attention",
        topics: [
          "Embeddings",
          "RNN intuition",
          "Attention",
          "Sequence masking",
        ],
        evidence: "Explain why attention helps model relationships.",
      },
      {
        id: "6-8",
        number: "6.8",
        title: "Scaling and GPUs",
        topics: [
          "Batches",
          "Memory",
          "Mixed precision",
          "Performance profiling",
        ],
        evidence: "Use compute efficiently and estimate constraints.",
      },
      {
        id: "6-9",
        number: "6.9",
        title: "Stage Project: Deep Learning Application",
        topics: [
          "Dataset",
          "Experiment tracking",
          "Model card",
          "Deployment demo",
        ],
        evidence: "Build a reproducible DL system and explain its behavior.",
      },
    ],
    project: {
      title: "Deep Learning Application",
      blurb:
        "A tracked, reproducible DL system with a model card and a small deployed demo.",
      artifact: "A repo, an experiment log, a model card, and a demo.",
    },
    outcome:
      "train, evaluate, and deploy a real deep learning system — and explain every step in plain language.",
    prerequisites: ["ml"],
    status: "planned",
  },
  {
    id: "llms",
    number: 7,
    title: "Large Language Models",
    level: "Advanced",
    pacing: "12–16 weeks",
    summary:
      "Tokens, transformers, pretraining and adaptation, prompting as interface design, embeddings and retrieval, tools and agents, and rigorous evaluation.",
    modules: [
      {
        id: "7-1",
        number: "7.1",
        title: "Language as Data",
        topics: ["Tokens", "Vocabulary", "Context", "Probability"],
        evidence: "Explain next-token prediction and its limitations.",
      },
      {
        id: "7-2",
        number: "7.2",
        title: "Transformers",
        topics: [
          "Self-attention",
          "Multi-head attention",
          "Position information",
          "Blocks",
        ],
        evidence: "Trace information through a simplified transformer.",
      },
      {
        id: "7-3",
        number: "7.3",
        title: "Pretraining and Adaptation",
        topics: [
          "Pretraining",
          "Instruction tuning",
          "Alignment",
          "Fine-tuning",
          "Adapters",
        ],
        evidence: "Distinguish major model development stages.",
      },
      {
        id: "7-4",
        number: "7.4",
        title: "Prompting as Interface Design",
        topics: [
          "Instructions",
          "Context",
          "Examples",
          "Structured output",
          "Prompt tests",
        ],
        evidence: "Create prompts that are testable and maintainable.",
      },
      {
        id: "7-5",
        number: "7.5",
        title: "Embeddings and Semantic Search",
        topics: [
          "Vector representations",
          "Similarity",
          "Indexes",
          "Chunking",
        ],
        evidence: "Build and evaluate semantic retrieval.",
      },
      {
        id: "7-6",
        number: "7.6",
        title: "Retrieval-Augmented Generation",
        topics: [
          "Ingestion",
          "Retrieval",
          "Grounding",
          "Citations",
          "Failure modes",
        ],
        evidence: "Build a RAG pipeline and diagnose quality.",
      },
      {
        id: "7-7",
        number: "7.7",
        title: "Tools, Workflows, and Agents",
        topics: [
          "Tool calling",
          "State",
          "Planning",
          "Guardrails",
          "Human approval",
        ],
        evidence:
          "Design constrained agentic workflows rather than open-ended demos.",
      },
      {
        id: "7-8",
        number: "7.8",
        title: "LLM Evaluation",
        topics: [
          "Test sets",
          "Rubrics",
          "Model graders",
          "Human evaluation",
          "Adversarial tests",
        ],
        evidence: "Measure quality, reliability, safety, and cost.",
      },
      {
        id: "7-9",
        number: "7.9",
        title: "Stage Project: Trustworthy LLM Product",
        topics: [
          "User need",
          "Architecture",
          "Evaluation",
          "Observability",
          "Safety",
        ],
        evidence:
          "Ship an evaluated LLM application with documented trade-offs.",
      },
    ],
    project: {
      title: "Trustworthy LLM Product",
      blurb:
        "An LLM-powered product with real evaluations, observability, and documented safety trade-offs.",
      artifact: "A deployed app, an eval harness, and a written product write-up.",
    },
    outcome:
      "design, prompt, retrieve, and evaluate LLM systems the way careful engineers do.",
    prerequisites: ["deep-learning"],
    status: "planned",
  },
  {
    id: "ai-engineering",
    number: 8,
    title: "AI Engineering",
    level: "Advanced",
    pacing: "10–14 weeks",
    summary:
      "Turn models into products: architecture, serving, pipelines, observability, reliability, security, cost, and responsible operation.",
    modules: [
      {
        id: "8-1",
        number: "8.1",
        title: "System Architecture",
        topics: [
          "Components",
          "Data flow",
          "Contracts",
          "Failure boundaries",
        ],
        evidence: "Design an end-to-end AI system.",
      },
      {
        id: "8-2",
        number: "8.2",
        title: "Serving and Deployment",
        topics: [
          "APIs",
          "Containers",
          "Cloud basics",
          "Scaling",
          "Rollbacks",
        ],
        evidence: "Deploy a versioned service safely.",
      },
      {
        id: "8-3",
        number: "8.3",
        title: "Data and Model Pipelines",
        topics: [
          "Batch and streaming",
          "Orchestration",
          "Model registry",
          "Feature pipelines",
        ],
        evidence: "Build reproducible pipelines.",
      },
      {
        id: "8-4",
        number: "8.4",
        title: "Observability and Monitoring",
        topics: [
          "Logs",
          "Metrics",
          "Traces",
          "Quality monitoring",
          "Drift",
        ],
        evidence: "Detect technical and model failures.",
      },
      {
        id: "8-5",
        number: "8.5",
        title: "Reliability and Testing",
        topics: [
          "Unit, integration, load, and evaluation tests",
          "Fallbacks",
          "Retries",
          "Circuit breakers",
        ],
        evidence: "Design for graceful failure.",
      },
      {
        id: "8-6",
        number: "8.6",
        title: "Security and Privacy",
        topics: [
          "Secrets",
          "Access control",
          "Prompt injection",
          "Data exposure",
          "Supply chain",
        ],
        evidence: "Threat-model an AI application.",
      },
      {
        id: "8-7",
        number: "8.7",
        title: "Cost and Performance",
        topics: [
          "Latency",
          "Throughput",
          "Caching",
          "Batching",
          "Model routing",
        ],
        evidence: "Optimize against explicit service objectives.",
      },
      {
        id: "8-8",
        number: "8.8",
        title: "Responsible AI in Production",
        topics: [
          "Risk analysis",
          "Human oversight",
          "Documentation",
          "Incident response",
        ],
        evidence: "Create operational safeguards and accountability.",
      },
      {
        id: "8-9",
        number: "8.9",
        title: "Stage Project: Production AI Service",
        topics: [
          "Deployment",
          "Monitoring",
          "Security review",
          "Runbook",
        ],
        evidence:
          "Operate an AI service and respond to simulated failures.",
      },
    ],
    project: {
      title: "Production AI Service",
      blurb:
        "A deployed, monitored, security-reviewed AI service — with a runbook you'd hand an on-call engineer.",
      artifact: "A deployed service, dashboards, a runbook, and an incident post-mortem.",
    },
    outcome:
      "design, deploy, and operate AI systems that behave reliably in the real world.",
    prerequisites: ["llms"],
    status: "planned",
  },
  {
    id: "capstone",
    number: 9,
    title: "Professional Practice & Capstone",
    level: "Advanced",
    pacing: "8–16 weeks",
    summary:
      "Behave like the AI engineer you've become. Choose a real problem, design and defend a system, ship it, and prepare to present your work to the world.",
    modules: [
      {
        id: "9-1",
        number: "9.1",
        title: "Product Discovery",
        topics: [
          "User research",
          "Problem selection",
          "Success criteria",
          "Risk",
        ],
        evidence: "Choose a valuable, feasible, and responsible problem.",
      },
      {
        id: "9-2",
        number: "9.2",
        title: "Technical Design",
        topics: [
          "Architecture decision records",
          "Interfaces",
          "Milestones",
          "Trade-offs",
        ],
        evidence: "Defend a design before implementation.",
      },
      {
        id: "9-3",
        number: "9.3",
        title: "Engineering Execution",
        topics: [
          "Backlog",
          "Iterations",
          "Reviews",
          "Documentation",
        ],
        evidence: "Run a professional project workflow.",
      },
      {
        id: "9-4",
        number: "9.4",
        title: "Capstone Build",
        topics: [
          "Original AI system",
          "Evaluation",
          "Deployment",
          "Monitoring",
        ],
        evidence: "Deliver a functioning, original, end-to-end system.",
      },
      {
        id: "9-5",
        number: "9.5",
        title: "Capstone Defense",
        topics: [
          "Demo",
          "Technical report",
          "Model/system card",
          "Failure analysis",
        ],
        evidence:
          "Explain decisions, evidence, limitations, and future work.",
      },
      {
        id: "9-6",
        number: "9.6",
        title: "Career Readiness",
        topics: [
          "Portfolio",
          "Resume evidence",
          "Interview narratives",
          "Open-source contribution",
        ],
        evidence:
          "Present capabilities credibly to employers and collaborators.",
      },
    ],
    project: {
      title: "Public Capstone",
      blurb:
        "An original, end-to-end AI system — designed, defended, shipped, and explained.",
      artifact: "A repo, a live demo, a technical report, and a portfolio site.",
    },
    outcome:
      "present yourself as a working AI engineer with a portfolio, a specialization, and a real understanding of the craft.",
    prerequisites: ["ai-engineering"],
    status: "planned",
    exitCriteria: [
      "Deliver a functioning, original, end-to-end AI system.",
      "Defend architecture and evaluation decisions in writing and on demo.",
      "Publish a model or system card that documents limitations.",
      "Present the work as a portfolio piece ready for employers.",
    ],
  },
];

export const stagesById: Record<string, Stage> = Object.fromEntries(
  stages.map((s) => [s.id, s]),
);

export const statusLabel: Record<Status, string> = {
  available: "Available now",
  "in-development": "In development",
  planned: "Planned",
};

/**
 * Curriculum-wide totals — derive from data, never hard-code.
 */
export const totalStages = stages.length;
export const totalModules = stages.reduce((n, s) => n + s.modules.length, 0);

/**
 * Existing built lesson pages. These are attached to a stage but are not
 * claimed to fully cover any specific canonical module — they are surfaced
 * as "Available learning experiences" alongside the canonical list.
 */
export interface BuiltLesson {
  stageId: string;
  title: string;
  blurb: string;
  path: string;
}

export const availableLessons: BuiltLesson[] = [
  {
    stageId: "orientation",
    title: "What Is AI, Really?",
    blurb: "Cut through hype and build a mental model you can reason with.",
    path: "/lessons/orientation/what-is-ai",
  },
  {
    stageId: "orientation",
    title: "The AI Landscape Today",
    blurb: "A map of the models, tools, and roles before you start walking.",
    path: "/lessons/orientation/landscape",
  },
  {
    stageId: "orientation",
    title: "How to Learn This Well",
    blurb: "The Learn-Visualize-Practice-Build-Reflect rhythm, and why it works.",
    path: "/lessons/orientation/how-to-learn",
  },
  {
    stageId: "orientation",
    title: "The Path Ahead",
    blurb: "A tour of the ten stages and the engineer they'll turn you into.",
    path: "/lessons/orientation/path-ahead",
  },
  {
    stageId: "computers",
    title: "Hardware, Software, and the OS",
    blurb: "What a program actually is when it's running.",
    path: "/lessons/computers/hardware-software",
  },
  {
    stageId: "computers",
    title: "Files, Folders, and the Terminal",
    blurb: "The command line, demystified — your new home base.",
    path: "/lessons/computers/files-and-terminal",
  },
  {
    stageId: "computers",
    title: "How the Internet Works",
    blurb: "Requests, responses, and why APIs exist.",
    path: "/lessons/computers/how-internet-works",
  },
  {
    stageId: "computers",
    title: "Setting Up Your Machine",
    blurb: "A clean, professional development environment.",
    path: "/lessons/computers/dev-setup",
  },
];

export function builtLessonsForStage(stageId: string): BuiltLesson[] {
  return availableLessons.filter((l) => l.stageId === stageId);
}

/** First lesson every learner should open. */
export const firstLessonPath = "/lessons/orientation/what-is-ai";
