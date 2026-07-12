import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "60–90 min";

export const stage: Stage = {
  id: "mathematics",
  order: 5,
  title: "Mathematics for Artificial Intelligence",
  purpose:
    "Rebuild the mathematics an AI engineer actually needs, from a beginner's starting point — with intuition, code, and worked examples, not proofs for their own sake.",
  startingLevel:
    "You may have forgotten most high-school math. You have never used mathematical software.",
  prerequisites: ["python-foundations"],
  project: {
    title: "Math-in-Code Notebook",
    description:
      "Produce an interactive notebook that implements and visualises the core mathematical objects used later in the curriculum (vectors, matrices, gradients, distributions), each with an intuition-first explanation.",
  },
  exitCriteria: [
    "Manipulate vectors, matrices, and simple linear systems by hand and in code.",
    "Interpret derivatives and gradients as rates of change and directions.",
    "Reason about probability and expectation without slipping between them.",
    "Read and write basic mathematical notation used in ML papers.",
    "Recognise which mathematical tool applies to a new ML problem.",
  ],
  status: S,
  modules: [
    {
      id: "mathematics-numeric-foundations",
      order: 1,
      title: "Numeric Foundations",
      summary: "The arithmetic, algebra, and function intuition ML depends on.",
      lessons: [
        { id: "mathematics-num-numbers", order: 1, title: "Numbers, Approximation, and Floats", outcome: "Reason about approximation, rounding, and floating-point error.", effort: eff, status: S },
        { id: "mathematics-num-functions", order: 2, title: "Functions and Graphs", outcome: "Read a function as a rule and see it as a shape.", effort: eff, status: S },
        { id: "mathematics-num-logs-exp", order: 3, title: "Exponentials and Logarithms", outcome: "Use log/exp to reason about scale, growth, and probabilities.", effort: eff, status: S },
        { id: "mathematics-num-notation", order: 4, title: "Reading Math Notation", outcome: "Parse sums, indices, and set-builder notation without fear.", effort: eff, status: S },
      ],
    },
    {
      id: "mathematics-linear-algebra",
      order: 2,
      title: "Linear Algebra for ML",
      summary: "Vectors and matrices as objects, transformations, and code.",
      lessons: [
        { id: "mathematics-la-vectors", order: 1, title: "Vectors as Arrows and Lists", outcome: "Treat vectors as both geometric objects and typed arrays.", effort: eff, status: S },
        { id: "mathematics-la-dot-product", order: 2, title: "Dot Product and Similarity", outcome: "Interpret the dot product as projection and as similarity.", effort: eff, status: S },
        { id: "mathematics-la-matrices", order: 3, title: "Matrices as Transformations", outcome: "See a matrix as a function that maps vectors to vectors.", effort: eff, status: S },
        { id: "mathematics-la-matmul", order: 4, title: "Matrix Multiplication in Depth", outcome: "Multiply matrices confidently and understand shapes.", effort: eff, status: S },
        { id: "mathematics-la-inverse-rank", order: 5, title: "Rank, Inverses, and Solvability", outcome: "Reason about when linear systems have solutions.", effort: eff, status: S },
        { id: "mathematics-la-eigen", order: 6, title: "Eigenvalues, Eigenvectors, and PCA Preview", outcome: "Explain eigen-decomposition intuitively and its ML uses.", effort: eff, status: S },
        { id: "mathematics-la-numpy", order: 7, title: "Linear Algebra in NumPy", outcome: "Do all of the above in NumPy with correct shapes and dtypes.", effort: eff, status: S },
      ],
    },
    {
      id: "mathematics-calculus",
      order: 3,
      title: "Calculus for ML",
      summary: "Derivatives as slopes, gradients as directions, chain rule as composition.",
      lessons: [
        { id: "mathematics-cal-limits", order: 1, title: "Limits and Continuity, Gently", outcome: "Reason about limits well enough to understand derivatives.", effort: eff, status: S },
        { id: "mathematics-cal-derivatives", order: 2, title: "Derivatives as Slopes", outcome: "Compute derivatives of common functions and interpret them.", effort: eff, status: S },
        { id: "mathematics-cal-chain-rule", order: 3, title: "The Chain Rule", outcome: "Differentiate compositions and see why it powers backprop.", effort: eff, status: S },
        { id: "mathematics-cal-partial", order: 4, title: "Partial Derivatives and Gradients", outcome: "Compute gradients and interpret them as directions.", effort: eff, status: S },
        { id: "mathematics-cal-optimization", order: 5, title: "Optimization and Gradient Descent Preview", outcome: "Explain how gradients drive minimisation of a loss.", effort: eff, status: S },
      ],
    },
    {
      id: "mathematics-probability-statistics",
      order: 4,
      title: "Probability and Statistics for ML",
      summary: "How to reason about uncertainty without confusing yourself.",
      lessons: [
        { id: "mathematics-ps-probability", order: 1, title: "Probability from First Principles", outcome: "Reason about sample spaces, events, and probabilities.", effort: eff, status: S },
        { id: "mathematics-ps-random-vars", order: 2, title: "Random Variables and Distributions", outcome: "Model uncertain quantities with distributions.", effort: eff, status: S },
        { id: "mathematics-ps-expectation", order: 3, title: "Expectation, Variance, and Moments", outcome: "Compute and interpret expected values and variance.", effort: eff, status: S },
        { id: "mathematics-ps-conditional", order: 4, title: "Conditional Probability and Bayes' Rule", outcome: "Update beliefs with Bayes' rule on real examples.", effort: eff, status: S },
        { id: "mathematics-ps-estimation", order: 5, title: "Estimation and Maximum Likelihood", outcome: "Estimate parameters from data via MLE.", effort: eff, status: S },
        { id: "mathematics-ps-clt", order: 6, title: "Law of Large Numbers and the CLT", outcome: "Explain why averages are stable and why normal distributions appear.", effort: eff, status: S },
      ],
    },
    {
      id: "mathematics-discrete-and-cs",
      order: 5,
      title: "Discrete Math and CS Foundations",
      summary: "Sets, logic, graphs, and complexity — the discrete side of AI.",
      lessons: [
        { id: "mathematics-dm-sets-logic", order: 1, title: "Sets and Propositional Logic", outcome: "Use sets and boolean logic precisely.", effort: eff, status: S },
        { id: "mathematics-dm-combinatorics", order: 2, title: "Counting and Combinatorics", outcome: "Count arrangements and choices without double-counting.", effort: eff, status: S },
        { id: "mathematics-dm-graphs", order: 3, title: "Graphs, Trees, and Traversal", outcome: "Model relationships as graphs and traverse them.", effort: eff, status: S },
        { id: "mathematics-dm-complexity", order: 4, title: "Big-O and Complexity", outcome: "Analyse simple algorithms with Big-O intuitions.", effort: eff, status: S },
      ],
    },
    {
      id: "mathematics-numerical-and-info",
      order: 6,
      title: "Numerical Methods and Information Theory",
      summary: "The last bit of math ML actually uses under the hood.",
      lessons: [
        { id: "mathematics-ni-numerical-stability", order: 1, title: "Numerical Stability", outcome: "Recognise and mitigate common numerical issues (underflow, cancellation).", effort: eff, status: S },
        { id: "mathematics-ni-vectorization", order: 2, title: "Vectorization and Broadcasting", outcome: "Write vectorized code that matches mathematical intent.", effort: eff, status: S },
        { id: "mathematics-ni-entropy", order: 3, title: "Entropy and Cross-Entropy", outcome: "Explain entropy and cross-entropy as measures of surprise.", effort: eff, status: S },
        { id: "mathematics-ni-kl", order: 4, title: "KL Divergence", outcome: "Interpret KL divergence and where it appears in ML.", effort: eff, status: S },
      ],
    },
  ],
};
