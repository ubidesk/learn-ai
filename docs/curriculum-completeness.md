# Curriculum Completeness Checklist

The Learn AI Curriculum Blueprint 2.0 defines the authoritative module
list for every one of the 13 stages. This document is the checklist that
maps every required module to the stage file that provides it.

An earlier draft of the spine compressed the blueprint to 68 modules and
300 lessons. That draft was expanded — before any lesson bodies were
authored — into the current **122 modules, 565 lesson-level items**, so
we do not lock in a shrunk curriculum by accident. Compression floors
are now enforced at import time in
[`curriculum/validate.ts`](../curriculum/validate.ts):

- Exactly **13** stages.
- At least **100** modules (`MIN_MODULES`).
- At least **450** lessons (`MIN_LESSONS`).

Falling below any floor fails `bun run build`.

## Module checklist

Each row below is a required module from the blueprint. The stage file
listed provides it.

### Stage 0 — Orientation, AI Literacy, and Digital Foundations
File: [`curriculum/stages/00-orientation.ts`](../curriculum/stages/00-orientation.ts)

1. What AI Is and Is Not
2. The Modern AI Landscape
3. How to Learn Technical Subjects
4. Digital Foundations
5. Developer Workspace Orientation
6. First AI-Connected Experience

### Stage 1 — Computers, Operating Systems, Networks, and the Web
File: [`curriculum/stages/01-computers.ts`](../curriculum/stages/01-computers.ts)

1. Information Representation
2. Computer Hardware
3. Programs and Execution
4. Operating Systems
5. Terminal and Shell Foundations
6. Networking Foundations
7. How the Web Works
8. Cloud Computing Foundations

### Stage 2 — Programming Foundations and Computational Thinking
File: [`curriculum/stages/02-programming-foundations.ts`](../curriculum/stages/02-programming-foundations.ts)

1. Problems, Algorithms, and Programs
2. Values, Types, and Expressions
3. Variables, Names, and State
4. Decisions and Boolean Logic
5. Repetition
6. Functions and Decomposition
7. Collections and Data Structures
8. Debugging and Testing Foundations
9. Algorithms and Efficiency Foundations

### Stage 3 — Python Foundations: Complete Beginner to Independent Programmer
File: [`curriculum/stages/03-python-foundations.ts`](../curriculum/stages/03-python-foundations.ts)

1. Python Execution Model
2. Numbers and Expressions
3. Strings and Text
4. Input, Output, and Small Programs
5. Conditionals
6. Loops
7. Functions
8. Lists and Tuples
9. Dictionaries and Sets
10. Files
11. Exceptions
12. Modules and Packages

### Stage 4 — Advanced Python and Professional Software Engineering
File: [`curriculum/stages/04-python-professional.ts`](../curriculum/stages/04-python-professional.ts)

1. Python's Data Model
2. Advanced Functions
3. Iterators and Generators
4. Object-Oriented Design
5. Type Hints and Static Analysis
6. Testing in Depth
7. Logging, Configuration, and Reliability
8. Command-Line Applications
9. Web APIs with Python
10. Asynchronous Programming and Concurrency
11. Packaging and Distribution
12. Performance Engineering
13. Git and Collaborative Engineering

### Stage 5 — Mathematics for Artificial Intelligence
File: [`curriculum/stages/05-mathematics.ts`](../curriculum/stages/05-mathematics.ts)

1. Algebra Foundations
2. Mathematical Functions and Transformations
3. Vectors
4. Matrices
5. Calculus Intuition
6. Probability
7. Statistics
8. Information Theory
9. Numerical Computing and Stability

### Stage 6 — Data Analysis, SQL, and Data Engineering
File: [`curriculum/stages/06-data-and-sql.ts`](../curriculum/stages/06-data-and-sql.ts)

1. Data-Generating Processes
2. NumPy
3. pandas and Tabular Analysis
4. Data Cleaning and Validation
5. Visualization and Communication
6. SQL
7. Databases
8. Data Engineering Foundations
9. Feature Engineering

### Stage 7 — Classical Machine Learning
File: [`curriculum/stages/07-classical-ml.ts`](../curriculum/stages/07-classical-ml.ts)

1. What Learning from Data Means
2. Problem Framing
3. Data Splitting and Evaluation Design
4. Regression
5. Classification
6. Trees and Ensembles
7. Distance-Based and Kernel Methods
8. Unsupervised Learning
9. Pipelines and Tuning
10. Interpretability, Fairness, and Error Analysis

### Stage 8 — Deep Learning with PyTorch
File: [`curriculum/stages/08-deep-learning.ts`](../curriculum/stages/08-deep-learning.ts)

1. Tensors
2. Automatic Differentiation
3. Neural-Network Foundations
4. Optimization
5. PyTorch Engineering Workflow
6. Training Reliability
7. Computer Vision
8. Sequence Models
9. Attention and Transformers
10. Efficient Training

### Stage 9 — Language, Transformers, and Large Language Models
File: [`curriculum/stages/09-llms.ts`](../curriculum/stages/09-llms.ts)

1. Language as Data
2. Embeddings
3. Transformer Language Models
4. Pretraining, Instruction Tuning, and Alignment
5. Model APIs and Open Models
6. Prompting as Interface Design
7. Fine-Tuning and Adaptation
8. LLM Evaluation

### Stage 10 — Generative AI Applications, RAG, Tools, Agents, and Multimodal Systems
File: [`curriculum/stages/10-generative-ai.ts`](../curriculum/stages/10-generative-ai.ts)

1. Retrieval Systems
2. Retrieval-Augmented Generation
3. Tool Calling
4. Stateful Workflows
5. Agents
6. Multimodal AI
7. Generative Media
8. Human-Centered AI Products

### Stage 11 — AI Engineering, MLOps, Deployment, Security, and Operations
File: [`curriculum/stages/11-mlops.ts`](../curriculum/stages/11-mlops.ts)

1. AI System Architecture
2. Serving Models
3. Containers and Cloud Deployment
4. ML Pipelines
5. Continuous Integration and Delivery
6. Observability
7. Reliability Engineering
8. AI Security
9. Privacy and Governance
10. Cost and Performance

### Stage 12 — Professional AI Engineering, Open Source, and Capstone
File: [`curriculum/stages/12-capstone.ts`](../curriculum/stages/12-capstone.ts)

1. Product Discovery
2. Technical Design
3. Project Execution
4. Technical Communication
5. Open-Source Contribution
6. Career Readiness
7. Capstone Discovery and Design
8. Capstone Build
9. Capstone Defense
10. Public Portfolio Release

## Adding or removing modules

The floors above are the current safety net. Renaming or reordering
modules is allowed; deleting one below the floor is not. Blueprint
changes that reduce total counts require an explicit update to both
this checklist and the `MIN_MODULES` / `MIN_LESSONS` constants in
`curriculum/validate.ts`.
