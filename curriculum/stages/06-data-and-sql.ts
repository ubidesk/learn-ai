import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "data-and-sql",
  order: 6,
  title: "Data Analysis, SQL, and Data Engineering",
  purpose:
    "Turn a professional Python engineer into someone who can honestly acquire, clean, transform, query, and visualise real data — the prerequisite for any serious ML work.",
  startingLevel:
    "You are a competent Python engineer. You have never written non-trivial SQL, wrangled a messy CSV, or thought hard about how data is generated.",
  prerequisites: ["python-professional", "mathematics"],
  project: {
    title: "End-to-End Data Analysis with a Clean Pipeline",
    description:
      "Take a real, messy dataset from acquisition through cleaning, joining, and analysis, with a small SQL-backed store and a reproducible pandas pipeline, then publish a short analysis a non-technical stakeholder could read.",
  },
  exitCriteria: [
    "Reason about how a dataset was generated before analysing it.",
    "Use NumPy and pandas fluently, including broadcasting, joins, and windowed operations.",
    "Write non-trivial SQL with CTEs and window functions.",
    "Design a small relational schema and reason about indexes and plans.",
    "Build a reproducible data pipeline with lineage and validation.",
  ],
  status: S,
  modules: [
    {
      id: "data-generating-process",
      order: 1,
      title: "Data-Generating Processes",
      summary: "Every dataset was produced by a process. Understanding that process is the foundation of honest analysis.",
      lessons: [
        L("data-generating-process-measurement", 1, "Measurement and Proxies", "Distinguish what you want to measure from what you actually recorded."),
        L("data-generating-process-sampling", 2, "Sampling in Practice", "Recognise selection bias, survivorship bias, and non-random samples."),
        L("data-generating-process-missingness", 3, "Missingness Is Data", "Reason about MCAR, MAR, and MNAR before imputing."),
        L("data-generating-process-schemas", 4, "Schemas and Data Contracts", "Specify a schema and a data contract for a real feed."),
        L("data-generating-process-ethics", 5, "Data Ethics and Consent", "Reason about consent, PII, and lawful basis before you touch a dataset."),
      ],
    },
    {
      id: "data-numpy",
      order: 2,
      title: "NumPy",
      summary: "Arrays, dtypes, broadcasting, and vectorised operations — the substrate of every Python data stack.",
      lessons: [
        L("data-numpy-arrays-dtypes", 1, "Arrays and dtypes", "Create arrays with the right shape and dtype."),
        L("data-numpy-broadcasting", 2, "Broadcasting", "Predict broadcasting behaviour before running code."),
        L("data-numpy-indexing", 3, "Indexing and Slicing", "Index with slices, boolean masks, and fancy indexing."),
        L("data-numpy-vectorized-ops", 4, "Vectorised Operations", "Replace Python loops with vectorised NumPy code."),
        L("data-numpy-memory-views", 5, "Memory, Views, and Copies", "Distinguish views from copies to avoid silent bugs."),
      ],
    },
    {
      id: "data-pandas",
      order: 3,
      title: "pandas and Tabular Analysis",
      summary: "The workhorse of Python data analysis — Series, DataFrames, and the joins, reshapes, and windows you'll do daily.",
      lessons: [
        L("data-pandas-series-frames", 1, "Series and DataFrames", "Build and inspect Series and DataFrames."),
        L("data-pandas-io", 2, "I/O and dtypes", "Read messy CSVs, Excel, and Parquet with correct dtypes."),
        L("data-pandas-filter-select", 3, "Filtering and Selection", "Select rows and columns idiomatically."),
        L("data-pandas-joins", 4, "Joins and Merges", "Join tables like a database — and avoid Cartesian explosions."),
        L("data-pandas-reshape", 5, "Reshape, Pivot, and Melt", "Reshape between long and wide formats."),
        L("data-pandas-groupby-window", 6, "GroupBy, Windows, and Time Series", "Aggregate and window over groups and time."),
      ],
    },
    {
      id: "data-cleaning",
      order: 4,
      title: "Data Cleaning and Validation",
      summary: "The unglamorous but decisive work that separates useful analysis from garbage in, garbage out.",
      lessons: [
        L("data-cleaning-profiling", 1, "Profiling a Dataset", "Produce a first honest description of a new dataset."),
        L("data-cleaning-missing", 2, "Handling Missing Data", "Choose an imputation strategy that matches the missingness mechanism."),
        L("data-cleaning-outliers", 3, "Outliers and Anomalies", "Distinguish outliers from errors and treat each appropriately."),
        L("data-cleaning-dedup", 4, "Deduplication", "Detect and resolve duplicates without losing real records."),
        L("data-cleaning-validation", 5, "Validation with Schemas", "Enforce data contracts with pandera or pydantic."),
      ],
    },
    {
      id: "data-viz",
      order: 5,
      title: "Visualization and Communication",
      summary: "Charts that inform instead of decorate — and dashboards that a stakeholder can act on.",
      lessons: [
        L("data-viz-grammar", 1, "The Grammar of Graphics", "Compose plots from data, aesthetics, and geometries."),
        L("data-viz-chart-types", 2, "Choosing Chart Types", "Pick chart types that match the question being asked."),
        L("data-viz-honest-charts", 3, "Honest Charts", "Avoid the common visual lies in axes, colours, and scales."),
        L("data-viz-exploratory-vs-explanatory", 4, "Exploratory vs Explanatory Charts", "Distinguish plots for yourself from plots for others."),
        L("data-viz-dashboards", 5, "Dashboards, Introduction", "Design a dashboard that answers a real recurring question."),
      ],
    },
    {
      id: "data-sql",
      order: 6,
      title: "SQL",
      summary: "SQL for AI engineers — not just SELECTs, but CTEs, windows, transactions, and query plans.",
      lessons: [
        L("data-sql-select-filter", 1, "SELECT and Filtering", "Read data with SELECT, WHERE, ORDER BY, and LIMIT."),
        L("data-sql-joins", 2, "Joins", "Use inner, outer, and self joins correctly."),
        L("data-sql-aggregation", 3, "Aggregation and GROUP BY", "Aggregate with GROUP BY, HAVING, and rollups."),
        L("data-sql-ctes", 4, "CTEs and Subqueries", "Refactor complex queries with common table expressions."),
        L("data-sql-windows", 5, "Window Functions", "Compute running totals, ranks, and lags with window functions."),
        L("data-sql-transactions-indexes", 6, "Transactions, Indexes, and Plans", "Reason about transactions, indexes, and EXPLAIN plans."),
      ],
    },
    {
      id: "data-databases",
      order: 7,
      title: "Databases",
      summary: "Relational, NoSQL, and vector — the storage layers AI systems actually use.",
      lessons: [
        L("data-databases-relational", 1, "The Relational Model", "Reason in relations, keys, and referential integrity."),
        L("data-databases-normalization", 2, "Normalization and Denormalization", "Choose a level of normalization that matches your workload."),
        L("data-databases-nosql", 3, "NoSQL Families", "Compare document, key-value, wide-column, and graph databases."),
        L("data-databases-vector", 4, "Vector Databases", "Index and query embeddings in a vector database."),
        L("data-databases-plans-tuning", 5, "Query Plans and Tuning", "Read a query plan and tune the slow parts."),
      ],
    },
    {
      id: "data-engineering",
      order: 8,
      title: "Data Engineering Foundations",
      summary: "The pipelines, warehouses, and lakes that feed serious ML systems.",
      lessons: [
        L("data-engineering-batch-streaming", 1, "Batch vs Streaming", "Choose between batch and streaming for a real workload."),
        L("data-engineering-warehouses-lakes", 2, "Warehouses, Lakes, and Lakehouses", "Compare warehouse, lake, and lakehouse storage patterns."),
        L("data-engineering-orchestration", 3, "Orchestration", "Schedule and monitor pipelines with an orchestrator."),
        L("data-engineering-lineage", 4, "Lineage and Data Observability", "Trace where a value came from and how it was transformed."),
        L("data-engineering-quality", 5, "Data Quality and Contracts", "Enforce data quality at the boundary between systems."),
      ],
    },
    {
      id: "data-feature-engineering",
      order: 9,
      title: "Feature Engineering",
      summary: "Turning raw data into features that a model can actually learn from.",
      lessons: [
        L("data-feature-engineering-categorical", 1, "Categorical Encoding", "Encode categorical variables without leakage or blow-ups."),
        L("data-feature-engineering-numeric", 2, "Numeric Transformations", "Scale, bin, and transform numeric features deliberately."),
        L("data-feature-engineering-feature-stores", 3, "Feature Stores, Introduction", "Recognise when a feature store earns its keep."),
        L("data-feature-engineering-leakage", 4, "Leakage and Pitfalls", "Detect and eliminate common leakage patterns."),
      ],
    },
  ],
};
