import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "classical-ml",
  order: 7,
  title: "Classical Machine Learning",
  purpose:
    "Give the learner honest fluency in the classical ML models that still power most real systems — how they work, when they win, how to evaluate them, and how to interpret and audit them.",
  startingLevel:
    "You are fluent in Python, math, and data. You have never trained an ML model, chosen a metric, or run a proper validation split.",
  prerequisites: ["data-and-sql"],
  project: {
    title: "Classical ML Case Study, End-to-End",
    description:
      "Take a real tabular problem from framing to deployed baseline: dataset audit, honest split, baseline, at least two model families, calibrated evaluation, interpretability report, and a model card.",
  },
  exitCriteria: [
    "Frame an ML problem — unit of prediction, target, baseline, metric — before touching a model.",
    "Choose and defend a train/val/test strategy, including grouped and time splits.",
    "Fit and interpret regression, classification, tree, and clustering models.",
    "Tune hyperparameters without leakage using nested validation.",
    "Audit a model for calibration, fairness, and subgroup performance.",
  ],
  status: S,
  modules: [
    {
      id: "cml-what-learning-means",
      order: 1,
      title: "What Learning from Data Means",
      summary: "The core ideas — generalization, bias-variance, and no-free-lunch — that separate ML from curve fitting.",
      lessons: [
        L("cml-what-learning-means-supervised", 1, "Supervised vs Unsupervised", "Distinguish the two families and give a real example of each."),
        L("cml-what-learning-means-generalization", 2, "Generalization", "Explain why training error is not the goal."),
        L("cml-what-learning-means-bias-variance", 3, "Bias-Variance Trade-off", "Diagnose a model as underfit or overfit."),
        L("cml-what-learning-means-no-free-lunch", 4, "No Free Lunch", "Explain why no single model wins on every dataset."),
      ],
    },
    {
      id: "cml-problem-framing",
      order: 2,
      title: "Problem Framing",
      summary: "The decisions made before training that determine whether the project can succeed at all.",
      lessons: [
        L("cml-problem-framing-unit-of-prediction", 1, "Unit of Prediction", "Specify what one row of training data represents."),
        L("cml-problem-framing-target", 2, "Defining the Target", "Turn a business outcome into a precise, measurable label."),
        L("cml-problem-framing-baselines", 3, "Baselines", "Ship a naive baseline before touching a model."),
        L("cml-problem-framing-offline-online-metrics", 4, "Offline vs Online Metrics", "Distinguish training metrics from what the business will measure in production."),
      ],
    },
    {
      id: "cml-splitting-evaluation",
      order: 3,
      title: "Data Splitting and Evaluation Design",
      summary: "The unglamorous decisions that determine whether your reported numbers mean anything.",
      lessons: [
        L("cml-splitting-evaluation-train-val-test", 1, "Train, Validation, and Test", "Design a defensible three-way split."),
        L("cml-splitting-evaluation-cross-validation", 2, "Cross-Validation", "Run k-fold cross-validation for stable estimates."),
        L("cml-splitting-evaluation-grouped-time", 3, "Grouped and Time Splits", "Prevent leakage across users and time."),
        L("cml-splitting-evaluation-metrics-regression", 4, "Metrics for Regression", "Choose between MAE, MSE, RMSE, and MAPE."),
        L("cml-splitting-evaluation-metrics-classification", 5, "Metrics for Classification", "Choose between accuracy, precision, recall, F1, ROC-AUC, PR-AUC."),
      ],
    },
    {
      id: "cml-regression",
      order: 4,
      title: "Regression",
      summary: "Predicting a real-valued target — linear models, regularization, and residual analysis.",
      lessons: [
        L("cml-regression-linear", 1, "Linear Regression", "Fit, interpret, and diagnose a linear regression."),
        L("cml-regression-regularization", 2, "Regularization: Ridge and Lasso", "Use ridge and lasso to control overfitting."),
        L("cml-regression-polynomial", 3, "Polynomial and Interaction Terms", "Add nonlinear terms without overfitting."),
        L("cml-regression-glm", 4, "Generalized Linear Models, Preview", "Recognise where GLMs extend linear regression."),
        L("cml-regression-residuals", 5, "Residual Analysis", "Read residual plots for model diagnosis."),
      ],
    },
    {
      id: "cml-classification",
      order: 5,
      title: "Classification",
      summary: "Predicting a discrete label — including the operational choices around thresholds, calibration, and cost.",
      lessons: [
        L("cml-classification-logistic", 1, "Logistic Regression", "Fit and interpret a logistic regression."),
        L("cml-classification-thresholds", 2, "Decision Thresholds", "Choose thresholds based on business cost, not defaults."),
        L("cml-classification-roc-pr", 3, "ROC and PR Curves", "Read ROC and PR curves and choose the right one."),
        L("cml-classification-calibration", 4, "Calibration", "Diagnose and fix miscalibration."),
        L("cml-classification-cost-sensitive", 5, "Cost-Sensitive Classification", "Bake asymmetric costs into training and evaluation."),
        L("cml-classification-multiclass", 6, "Multiclass Strategies", "Handle multiclass problems with one-vs-rest, softmax, and beyond."),
      ],
    },
    {
      id: "cml-trees-ensembles",
      order: 6,
      title: "Trees and Ensembles",
      summary: "The tree-based models that still dominate tabular ML in production.",
      lessons: [
        L("cml-trees-ensembles-decision-trees", 1, "Decision Trees", "Fit, prune, and interpret a decision tree."),
        L("cml-trees-ensembles-random-forests", 2, "Random Forests", "Use bagging to reduce variance."),
        L("cml-trees-ensembles-gbm", 3, "Gradient Boosting", "Explain gradient boosting from first principles."),
        L("cml-trees-ensembles-xgb-lgbm", 4, "XGBoost and LightGBM", "Train, tune, and deploy modern boosted trees."),
        L("cml-trees-ensembles-interpretation", 5, "Interpreting Tree Ensembles", "Read feature importances and partial dependence honestly."),
      ],
    },
    {
      id: "cml-distance-kernel",
      order: 7,
      title: "Distance-Based and Kernel Methods",
      summary: "kNN, SVMs, kernels, and the curse of dimensionality.",
      lessons: [
        L("cml-distance-kernel-knn", 1, "k-Nearest Neighbours", "Use kNN as a baseline and understand its failure modes."),
        L("cml-distance-kernel-svm", 2, "Support Vector Machines", "Fit and interpret linear and kernel SVMs."),
        L("cml-distance-kernel-kernels", 3, "Kernels", "Explain the kernel trick without matrix acrobatics."),
        L("cml-distance-kernel-curse", 4, "Curse of Dimensionality", "Predict when distance-based methods break down."),
      ],
    },
    {
      id: "cml-unsupervised",
      order: 8,
      title: "Unsupervised Learning",
      summary: "Clustering, density estimation, dimensionality reduction, and their real (and imagined) uses.",
      lessons: [
        L("cml-unsupervised-kmeans", 1, "k-Means", "Fit, initialise, and evaluate k-means."),
        L("cml-unsupervised-hierarchical", 2, "Hierarchical Clustering", "Build and read a dendrogram."),
        L("cml-unsupervised-density-anomaly", 3, "Density and Anomaly Detection", "Detect anomalies with density-based methods."),
        L("cml-unsupervised-pca", 4, "PCA", "Reduce dimensions with PCA and interpret the components."),
        L("cml-unsupervised-tsne-umap", 5, "t-SNE and UMAP, Cautions", "Use t-SNE and UMAP for visualisation without over-reading them."),
      ],
    },
    {
      id: "cml-pipelines",
      order: 9,
      title: "Pipelines and Tuning",
      summary: "Turning experiments into reproducible, leakage-free workflows.",
      lessons: [
        L("cml-pipelines-sklearn", 1, "scikit-learn Pipelines", "Compose preprocessing and models into a single pipeline."),
        L("cml-pipelines-hyperparameter-search", 2, "Hyperparameter Search", "Run grid, random, and Bayesian search safely."),
        L("cml-pipelines-nested-validation", 3, "Nested Validation", "Avoid overestimating performance during tuning."),
        L("cml-pipelines-experiment-tracking", 4, "Experiment Tracking", "Track runs and artefacts so results are reproducible."),
      ],
    },
    {
      id: "cml-interpretability",
      order: 10,
      title: "Interpretability, Fairness, and Error Analysis",
      summary: "Auditing your model as a professional would — not as an afterthought.",
      lessons: [
        L("cml-interpretability-feature-importance", 1, "Feature Importance, Done Honestly", "Compare permutation, split, and gain importance."),
        L("cml-interpretability-shap-cautions", 2, "SHAP and Its Cautions", "Use SHAP without over-interpreting it."),
        L("cml-interpretability-error-analysis", 3, "Error Analysis", "Slice errors by feature and cluster them by failure mode."),
        L("cml-interpretability-subgroup", 4, "Subgroup Analysis", "Report subgroup performance, not just global averages."),
        L("cml-interpretability-model-cards", 5, "Model Cards", "Publish a model card that a stakeholder can act on."),
      ],
    },
  ],
};
