import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "60–90 min";

export const stage: Stage = {
  id: "data-and-sql",
  order: 6,
  title: "Data Analysis, SQL, and Data Engineering",
  purpose:
    "Turn the learner into a competent data practitioner: someone who can find, clean, query, transform, visualise, and reason about real data — the precondition for every ML system.",
  startingLevel:
    "You are a competent Python programmer with enough math to understand distributions and averages.",
  prerequisites: ["python-professional", "mathematics"],
  project: {
    title: "End-to-End Data Analysis",
    description:
      "Take a real, messy public dataset from source to insights: ingest, clean, model, query, visualise, and write a short honest report — including what the data does not tell you.",
  },
  exitCriteria: [
    "Manipulate tabular data confidently with pandas and NumPy.",
    "Write nontrivial SQL against relational data.",
    "Design a simple data pipeline that is reproducible.",
    "Produce truthful, readable visualisations.",
    "Reason about data quality, bias, and missingness.",
  ],
  status: S,
  modules: [
    {
      id: "data-and-sql-numpy",
      order: 1,
      title: "NumPy and Numerical Arrays",
      summary: "Arrays as the substrate for both data analysis and ML.",
      lessons: [
        { id: "data-and-sql-np-arrays", order: 1, title: "ndarrays, dtypes, and Shapes", outcome: "Create and reason about NumPy arrays confidently.", effort: eff, status: S },
        { id: "data-and-sql-np-indexing", order: 2, title: "Indexing, Slicing, and Broadcasting", outcome: "Use fancy indexing and broadcasting instead of Python loops.", effort: eff, status: S },
        { id: "data-and-sql-np-ops", order: 3, title: "Vectorized Operations and ufuncs", outcome: "Express operations as vectorized array math.", effort: eff, status: S },
        { id: "data-and-sql-np-linalg", order: 4, title: "Linear Algebra with NumPy", outcome: "Do practical linear algebra with numpy.linalg.", effort: eff, status: S },
      ],
    },
    {
      id: "data-and-sql-pandas",
      order: 2,
      title: "Data Wrangling with pandas",
      summary: "The library data scientists actually spend their day inside.",
      lessons: [
        { id: "data-and-sql-pd-series-df", order: 1, title: "Series, DataFrames, and Indexes", outcome: "Understand the pandas data model, including the index.", effort: eff, status: S },
        { id: "data-and-sql-pd-io", order: 2, title: "Loading and Saving Data", outcome: "Read/write CSV, Parquet, JSON, SQL, and Excel formats.", effort: eff, status: S },
        { id: "data-and-sql-pd-select-filter", order: 3, title: "Selecting, Filtering, and Assigning", outcome: "Select rows/columns with clear intent and avoid SettingWithCopy pitfalls.", effort: eff, status: S },
        { id: "data-and-sql-pd-groupby", order: 4, title: "GroupBy and Aggregation", outcome: "Aggregate real datasets with groupby, agg, and pivot tables.", effort: eff, status: S },
        { id: "data-and-sql-pd-join", order: 5, title: "Merging, Joining, and Concatenation", outcome: "Combine datasets on keys, understanding join semantics.", effort: eff, status: S },
        { id: "data-and-sql-pd-time", order: 6, title: "Working with Time Series", outcome: "Handle datetimes, timezones, and resampling correctly.", effort: eff, status: S },
      ],
    },
    {
      id: "data-and-sql-sql",
      order: 3,
      title: "SQL and Relational Data",
      summary: "Every AI engineer must speak SQL fluently.",
      lessons: [
        { id: "data-and-sql-sql-model", order: 1, title: "The Relational Model", outcome: "Explain tables, keys, and normalisation.", effort: eff, status: S },
        { id: "data-and-sql-sql-select", order: 2, title: "SELECT, WHERE, ORDER BY, LIMIT", outcome: "Retrieve and shape data with basic SELECT queries.", effort: eff, status: S },
        { id: "data-and-sql-sql-joins", order: 3, title: "JOINs in Depth", outcome: "Use inner, outer, and self-joins with correct semantics.", effort: eff, status: S },
        { id: "data-and-sql-sql-agg", order: 4, title: "GROUP BY, HAVING, and Window Functions", outcome: "Aggregate at multiple grains and use window functions.", effort: eff, status: S },
        { id: "data-and-sql-sql-schema", order: 5, title: "Schema, Constraints, and Indexes", outcome: "Design a schema and reason about indexes and query plans.", effort: eff, status: S },
      ],
    },
    {
      id: "data-and-sql-visualization-and-eda",
      order: 4,
      title: "Visualisation and Exploratory Data Analysis",
      summary: "Seeing the shape of data honestly — not producing chart-junk.",
      lessons: [
        { id: "data-and-sql-viz-principles", order: 1, title: "Principles of Truthful Visualisation", outcome: "Design charts that convey the underlying data without lying.", effort: eff, status: S },
        { id: "data-and-sql-viz-matplotlib", order: 2, title: "matplotlib and seaborn", outcome: "Produce statistical plots quickly in Python.", effort: eff, status: S },
        { id: "data-and-sql-viz-eda", order: 3, title: "Structured EDA", outcome: "Run a repeatable EDA that surfaces data issues fast.", effort: eff, status: S },
        { id: "data-and-sql-viz-storytelling", order: 4, title: "Communicating Findings", outcome: "Write short, honest analysis reports that non-technical readers understand.", effort: eff, status: S },
      ],
    },
    {
      id: "data-and-sql-cleaning-and-quality",
      order: 5,
      title: "Data Cleaning and Quality",
      summary: "Where 80% of real ML work actually happens.",
      lessons: [
        { id: "data-and-sql-clean-missing", order: 1, title: "Missing Data: Detection and Repair", outcome: "Handle missing values without silently biasing analysis.", effort: eff, status: S },
        { id: "data-and-sql-clean-outliers", order: 2, title: "Outliers, Duplicates, and Inconsistencies", outcome: "Find and treat outliers and inconsistencies deliberately.", effort: eff, status: S },
        { id: "data-and-sql-clean-types", order: 3, title: "Types, Units, and Encodings", outcome: "Enforce types and units so downstream code cannot be silently wrong.", effort: eff, status: S },
        { id: "data-and-sql-clean-bias", order: 4, title: "Data Bias and Provenance", outcome: "Ask where data came from and who is missing from it.", effort: eff, status: S },
      ],
    },
    {
      id: "data-and-sql-engineering",
      order: 6,
      title: "Introduction to Data Engineering",
      summary: "Making data flows reproducible and reliable.",
      lessons: [
        { id: "data-and-sql-eng-etl", order: 1, title: "ETL/ELT Concepts", outcome: "Design simple extract-transform-load pipelines.", effort: eff, status: S },
        { id: "data-and-sql-eng-formats", order: 2, title: "File Formats: CSV, Parquet, Arrow", outcome: "Choose data formats based on workload and scale.", effort: eff, status: S },
        { id: "data-and-sql-eng-orchestration", order: 3, title: "Batch vs Streaming, Orchestration Overview", outcome: "Reason about when to run batch pipelines vs streaming and how to orchestrate them.", effort: eff, status: S },
        { id: "data-and-sql-eng-warehouses", order: 4, title: "Warehouses, Lakes, and Lakehouses", outcome: "Distinguish storage architectures at a working level.", effort: eff, status: S },
      ],
    },
  ],
};
