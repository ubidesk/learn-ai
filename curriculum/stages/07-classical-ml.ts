import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "60–90 min";

export const stage: Stage = {
  id: "classical-ml",
  order: 7,
  title: "Classical Machine Learning",
  purpose:
    "Build honest, from-first-principles understanding of ML: what a model is, how it learns, how you evaluate it, and where it fails — using algorithms you can fully understand.",
  startingLevel:
    "You can wrangle data with pandas/NumPy, write clean Python, and follow linear algebra and probability at a working level.",
  prerequisites: ["data-and-sql", "mathematics"],
  project: {
    title: "End-to-End ML Project",
    description:
      "Take a tabular problem from raw data to a trained, evaluated, and documented ML model — including a written honest analysis of its errors, limitations, and fairness properties.",
  },
  exitCriteria: [
    "Explain what supervised/unsupervised learning is in precise terms.",
    "Choose and evaluate classical models (linear, tree-based, ensemble) responsibly.",
    "Detect and address overfitting, leakage, and imbalance.",
    "Use scikit-learn pipelines correctly.",
    "Interpret model output for a non-technical stakeholder.",
  ],
  status: S,
  modules: [
    {
      id: "classical-ml-framing",
      order: 1,
      title: "Framing ML Problems",
      summary: "The hardest part of ML is figuring out what the problem is.",
      lessons: [
        { id: "classical-ml-frame-what-is-ml", order: 1, title: "What Machine Learning Actually Is", outcome: "Distinguish ML from rules and from statistics precisely.", effort: eff, status: S },
        { id: "classical-ml-frame-tasks", order: 2, title: "Supervised, Unsupervised, and Beyond", outcome: "Classify a real problem into an ML task type correctly.", effort: eff, status: S },
        { id: "classical-ml-frame-loss-eval", order: 3, title: "Losses, Metrics, and Objectives", outcome: "Choose a loss/metric that reflects what you actually care about.", effort: eff, status: S },
        { id: "classical-ml-frame-baselines", order: 4, title: "Baselines and Sanity Checks", outcome: "Build baselines before models and know when to stop.", effort: eff, status: S },
      ],
    },
    {
      id: "classical-ml-linear-models",
      order: 2,
      title: "Linear Models",
      summary: "The workhorses you must understand before neural networks.",
      lessons: [
        { id: "classical-ml-lin-regression", order: 1, title: "Linear Regression from Scratch", outcome: "Implement and interpret linear regression.", effort: eff, status: S },
        { id: "classical-ml-lin-gradient-descent", order: 2, title: "Gradient Descent, Concretely", outcome: "Train a linear model with hand-written gradient descent.", effort: eff, status: S },
        { id: "classical-ml-lin-logistic", order: 3, title: "Logistic Regression and Classification", outcome: "Handle classification with logistic regression and probabilities.", effort: eff, status: S },
        { id: "classical-ml-lin-regularization", order: 4, title: "Regularisation: Ridge, Lasso, Elastic Net", outcome: "Trade bias and variance with regularisation.", effort: eff, status: S },
      ],
    },
    {
      id: "classical-ml-nonlinear-and-ensembles",
      order: 3,
      title: "Trees, Ensembles, and Nonlinear Models",
      summary: "Where classical ML actually wins in practice.",
      lessons: [
        { id: "classical-ml-tree-decision-trees", order: 1, title: "Decision Trees", outcome: "Grow, prune, and interpret decision trees.", effort: eff, status: S },
        { id: "classical-ml-tree-random-forests", order: 2, title: "Random Forests and Bagging", outcome: "Explain why averaging trees generalises better.", effort: eff, status: S },
        { id: "classical-ml-tree-boosting", order: 3, title: "Gradient Boosting (XGBoost, LightGBM)", outcome: "Train and tune gradient-boosted models responsibly.", effort: eff, status: S },
        { id: "classical-ml-tree-svm-knn", order: 4, title: "SVMs and k-NN", outcome: "Use SVMs and k-NN as alternate baselines.", effort: eff, status: S },
      ],
    },
    {
      id: "classical-ml-evaluation-and-selection",
      order: 4,
      title: "Evaluation, Selection, and Diagnosis",
      summary: "How to know whether your model actually works.",
      lessons: [
        { id: "classical-ml-eval-splits", order: 1, title: "Train/Val/Test Splits and Leakage", outcome: "Split data correctly, especially with time or groups.", effort: eff, status: S },
        { id: "classical-ml-eval-cv", order: 2, title: "Cross-Validation", outcome: "Use CV correctly and interpret its output.", effort: eff, status: S },
        { id: "classical-ml-eval-metrics", order: 3, title: "Classification Metrics in Depth", outcome: "Reason about precision, recall, ROC, PR, and calibration.", effort: eff, status: S },
        { id: "classical-ml-eval-imbalance", order: 4, title: "Class Imbalance", outcome: "Diagnose and address class imbalance without cheating.", effort: eff, status: S },
        { id: "classical-ml-eval-error-analysis", order: 5, title: "Error Analysis", outcome: "Improve models by looking at their failures, not just their metrics.", effort: eff, status: S },
      ],
    },
    {
      id: "classical-ml-unsupervised",
      order: 5,
      title: "Unsupervised Learning",
      summary: "Finding structure without labels.",
      lessons: [
        { id: "classical-ml-unsup-kmeans", order: 1, title: "k-Means and Clustering", outcome: "Cluster data responsibly and evaluate the results.", effort: eff, status: S },
        { id: "classical-ml-unsup-hierarchical", order: 2, title: "Hierarchical and Density-Based Clustering", outcome: "Choose the right clustering method for the data shape.", effort: eff, status: S },
        { id: "classical-ml-unsup-pca", order: 3, title: "PCA and Dimensionality Reduction", outcome: "Reduce dimensions for both compression and visualisation.", effort: eff, status: S },
        { id: "classical-ml-unsup-anomaly", order: 4, title: "Anomaly Detection", outcome: "Detect anomalies with statistical and ML approaches.", effort: eff, status: S },
      ],
    },
    {
      id: "classical-ml-workflow-and-ethics",
      order: 6,
      title: "ML Workflow and Responsible ML",
      summary: "Doing ML in a way that is reproducible, honest, and safe.",
      lessons: [
        { id: "classical-ml-wf-sklearn-pipelines", order: 1, title: "scikit-learn Pipelines", outcome: "Compose preprocessing, models, and CV into a single pipeline.", effort: eff, status: S },
        { id: "classical-ml-wf-tuning", order: 2, title: "Hyperparameter Tuning", outcome: "Use grid/random/Bayesian search without overfitting to the val set.", effort: eff, status: S },
        { id: "classical-ml-wf-interpretability", order: 3, title: "Interpretability: SHAP and Beyond", outcome: "Explain individual predictions and global model behaviour.", effort: eff, status: S },
        { id: "classical-ml-wf-fairness", order: 4, title: "Fairness and Bias in Practice", outcome: "Measure and mitigate bias in a real ML pipeline.", effort: eff, status: S },
      ],
    },
  ],
};
