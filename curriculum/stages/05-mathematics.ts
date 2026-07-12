import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "mathematics",
  order: 5,
  title: "Mathematics for Artificial Intelligence",
  purpose:
    "Build the honest mathematical intuition every AI engineer needs — algebra, linear algebra, calculus, probability, statistics, information theory, and numerical stability — grounded in code and worked examples, not proofs for their own sake.",
  startingLevel:
    "You are comfortable programming in Python. Your school mathematics may be rusty. You have never used vectors, gradients, or probability distributions in code.",
  prerequisites: ["python-professional"],
  project: {
    title: "Mathematical Intuitions Notebook",
    description:
      "Produce a Jupyter notebook that visualises and explains the key mathematical objects of AI — vectors, matrices, gradients, distributions, entropy — using code, diagrams, and short prose you could teach from.",
  },
  exitCriteria: [
    "Read and manipulate vectors and matrices fluently, in code.",
    "Explain gradients, the chain rule, and why deep learning uses them.",
    "Reason about random variables, distributions, and expectations.",
    "Perform basic statistical inference and defend it against common misinterpretations.",
    "Recognise numerical-stability hazards and avoid them.",
  ],
  status: S,
  modules: [
    {
      id: "math-algebra",
      order: 1,
      title: "Algebra Foundations",
      summary: "Refresh the school-algebra ideas the rest of the stage depends on.",
      lessons: [
        L("math-algebra-variables-equations", 1, "Variables and Equations", "Solve linear and simple non-linear equations symbolically and in code."),
        L("math-algebra-functions-notation", 2, "Functions and Notation", "Read function notation and evaluate composed functions."),
        L("math-algebra-exponents-logs", 3, "Exponents and Logarithms", "Manipulate exponents and logs — the language of loss functions and scale."),
        L("math-algebra-systems", 4, "Systems of Equations", "Solve small systems and connect them to matrices."),
      ],
    },
    {
      id: "math-functions",
      order: 2,
      title: "Mathematical Functions and Transformations",
      summary: "The families of functions that appear in every ML model.",
      lessons: [
        L("math-functions-linear", 1, "Linear Functions and Lines", "Reason about slope, intercept, and lines in 2D."),
        L("math-functions-quadratics", 2, "Quadratics and Polynomials", "Analyse polynomial behaviour and their roots."),
        L("math-functions-exp-log", 3, "Exponentials and Logarithms", "Compose exp and log for growth, decay, and probabilities."),
        L("math-functions-trig", 4, "A Quick Tour of Trigonometry", "Recall the trig facts you'll actually use in signals and rotations."),
        L("math-functions-composition", 5, "Function Composition and Inverses", "Compose and invert functions — the mental move behind neural networks."),
      ],
    },
    {
      id: "math-vectors",
      order: 3,
      title: "Vectors",
      summary: "Vectors as arrows, as lists, and as the natural language of embeddings.",
      lessons: [
        L("math-vectors-as-arrows", 1, "Vectors as Arrows and Lists", "Move between geometric and algebraic views of a vector."),
        L("math-vectors-operations", 2, "Vector Operations", "Add, scale, and combine vectors."),
        L("math-vectors-dot-product", 3, "Dot Product and Angle", "Interpret dot products as similarity and angle."),
        L("math-vectors-norms-distances", 4, "Norms and Distances", "Compute L1, L2, and cosine distances and pick between them."),
        L("math-vectors-projections", 5, "Projections", "Project one vector onto another and connect to least-squares intuition."),
      ],
    },
    {
      id: "math-matrices",
      order: 4,
      title: "Matrices",
      summary: "Matrices as data, as transformations, and as the operators of linear algebra.",
      lessons: [
        L("math-matrices-basics", 1, "Matrices as Data and Transformations", "Read matrices as tables and as linear maps."),
        L("math-matrices-matrix-vector", 2, "Matrix–Vector Multiplication", "Compute Av and interpret it as a linear transformation."),
        L("math-matrices-matrix-matrix", 3, "Matrix–Matrix Multiplication", "Compute AB and reason about composition of transformations."),
        L("math-matrices-inverses", 4, "Inverses and Determinants", "Explain what invertibility means and when it fails."),
        L("math-matrices-eigen", 5, "Eigenvalues and Eigenvectors, Preview", "Interpret eigenvectors as the axes along which a matrix acts as scaling."),
        L("math-matrices-decompositions", 6, "Matrix Decompositions, Preview", "Recognise SVD and QR as tools you'll meet later."),
      ],
    },
    {
      id: "math-calculus",
      order: 5,
      title: "Calculus Intuition",
      summary: "The calculus AI engineers actually use — limits, derivatives, chain rule, gradients, and integrals.",
      lessons: [
        L("math-calculus-limits", 1, "Limits and Continuity", "Reason about limits informally and connect them to numerical behaviour."),
        L("math-calculus-derivatives", 2, "Derivatives", "Compute and interpret derivatives of common functions."),
        L("math-calculus-chain-rule", 3, "The Chain Rule", "Apply the chain rule to composed functions — the heart of backprop."),
        L("math-calculus-gradients", 4, "Gradients and Partial Derivatives", "Compute gradients of multivariate functions."),
        L("math-calculus-integrals", 5, "Integrals, Intuition", "Interpret integrals as accumulation and area."),
      ],
    },
    {
      id: "math-probability",
      order: 6,
      title: "Probability",
      summary: "Reasoning under uncertainty — the substrate of every predictive model.",
      lessons: [
        L("math-probability-sample-spaces", 1, "Sample Spaces and Events", "Set up probability problems correctly."),
        L("math-probability-conditional", 2, "Conditional Probability and Independence", "Reason about conditional probability without paradoxes."),
        L("math-probability-bayes", 3, "Bayes' Rule", "Update beliefs with Bayes' rule in code."),
        L("math-probability-random-variables", 4, "Random Variables", "Distinguish discrete and continuous random variables."),
        L("math-probability-distributions", 5, "A Tour of Distributions", "Recognise Bernoulli, binomial, Gaussian, and their friends."),
        L("math-probability-expectation-variance", 6, "Expectation, Variance, and Covariance", "Compute and interpret expectation, variance, and covariance."),
      ],
    },
    {
      id: "math-statistics",
      order: 7,
      title: "Statistics",
      summary: "How to reason from samples to populations — and how to notice when you can't.",
      lessons: [
        L("math-statistics-descriptive", 1, "Descriptive Statistics", "Summarise data honestly with means, medians, and spreads."),
        L("math-statistics-sampling", 2, "Sampling and Estimators", "Reason about samples, sampling distributions, and bias."),
        L("math-statistics-estimation", 3, "Estimation", "Distinguish point estimates from interval estimates."),
        L("math-statistics-confidence", 4, "Confidence Intervals", "Interpret confidence intervals honestly."),
        L("math-statistics-hypothesis-testing", 5, "Hypothesis Testing", "Set up, run, and interpret a hypothesis test."),
        L("math-statistics-effect-size-power", 6, "Effect Size and Power", "Reason about practical significance and statistical power."),
      ],
    },
    {
      id: "math-info-theory",
      order: 8,
      title: "Information Theory",
      summary: "Entropy, cross-entropy, KL, and mutual information — the loss-function vocabulary of ML.",
      lessons: [
        L("math-info-theory-entropy", 1, "Entropy", "Compute entropy and interpret it as expected surprise."),
        L("math-info-theory-cross-entropy", 2, "Cross-Entropy", "Explain cross-entropy loss from information-theoretic first principles."),
        L("math-info-theory-kl", 3, "KL Divergence", "Interpret KL divergence and its asymmetry."),
        L("math-info-theory-mutual", 4, "Mutual Information", "Reason about mutual information as shared uncertainty."),
      ],
    },
    {
      id: "math-numerical",
      order: 9,
      title: "Numerical Computing and Stability",
      summary: "The floating-point traps that turn correct math into wrong code.",
      lessons: [
        L("math-numerical-fp-again", 1, "Floating-Point, Revisited", "Predict where floating point loses precision in ML code."),
        L("math-numerical-overflow", 2, "Overflow and Underflow", "Recognise overflow and underflow before they poison a run."),
        L("math-numerical-logsumexp", 3, "log-sum-exp and Numerically Stable Tricks", "Compute stable softmax and log-sum-exp."),
        L("math-numerical-derivatives", 4, "Numerical Derivatives and Finite Differences", "Approximate derivatives numerically and know their failure modes."),
      ],
    },
  ],
};
