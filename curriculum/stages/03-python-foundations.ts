import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "45–75 min";

export const stage: Stage = {
  id: "python-foundations",
  order: 3,
  title: "Python Foundations: Complete Beginner to Independent Programmer",
  purpose:
    "Take the learner from writing their first line of Python to independently designing, building, and debugging small programs — using idiomatic, modern Python.",
  startingLevel:
    "You can think in pseudocode about small problems. You have never written real Python.",
  prerequisites: ["programming-foundations", "computers"],
  project: {
    title: "Command-Line Toolkit",
    description:
      "Design and build a small collection of independently useful command-line programs (e.g. a habit tracker, a Markdown link checker, a mini flashcard app) written in idiomatic Python with tests.",
  },
  exitCriteria: [
    "Write, run, and debug Python programs on your own machine.",
    "Use core Python data types and control flow fluently.",
    "Design functions with clear inputs, outputs, and side effects.",
    "Read and write files and structured data (CSV, JSON).",
    "Handle errors intentionally, not accidentally.",
    "Write your own small modules and simple tests.",
  ],
  status: S,
  modules: [
    {
      id: "python-foundations-hello",
      order: 1,
      title: "Your First Python Programs",
      summary: "From `hello world` to programs that ask questions and respond.",
      lessons: [
        { id: "python-foundations-hello-repl", order: 1, title: "Running Python: REPL, Scripts, and Notebooks", outcome: "Choose the right way to run Python for the job at hand.", effort: eff, status: S },
        { id: "python-foundations-hello-syntax", order: 2, title: "Syntax, Whitespace, and Errors", outcome: "Read Python syntax carefully and interpret common error messages.", effort: eff, status: S },
        { id: "python-foundations-hello-values-vars", order: 3, title: "Values, Variables, and Types", outcome: "Use ints, floats, strings, and booleans correctly, including type coercion.", effort: eff, status: S },
        { id: "python-foundations-hello-io", order: 4, title: "Input, Output, and String Formatting", outcome: "Interact with a user via input/print and produce readable output with f-strings.", effort: eff, status: S },
      ],
    },
    {
      id: "python-foundations-control-flow",
      order: 2,
      title: "Control Flow in Python",
      summary: "Making decisions and repeating work, the Pythonic way.",
      lessons: [
        { id: "python-foundations-cf-conditionals", order: 1, title: "if / elif / else", outcome: "Express branching logic clearly and avoid deep nesting.", effort: eff, status: S },
        { id: "python-foundations-cf-boolean", order: 2, title: "Boolean Logic and Truthiness", outcome: "Combine boolean expressions correctly and understand Python truthiness rules.", effort: eff, status: S },
        { id: "python-foundations-cf-while", order: 3, title: "while Loops", outcome: "Use while loops for termination conditions and guard against infinite loops.", effort: eff, status: S },
        { id: "python-foundations-cf-for", order: 4, title: "for Loops and Iteration", outcome: "Iterate over ranges, sequences, and files idiomatically.", effort: eff, status: S },
        { id: "python-foundations-cf-loop-control", order: 5, title: "break, continue, and else on Loops", outcome: "Use loop-control statements without sacrificing readability.", effort: eff, status: S },
      ],
    },
    {
      id: "python-foundations-data-structures",
      order: 3,
      title: "Core Data Structures",
      summary: "The four collections you will use every single day.",
      lessons: [
        { id: "python-foundations-ds-strings", order: 1, title: "Strings: Slicing, Methods, and Encoding", outcome: "Manipulate text with slices, methods, and awareness of Unicode/bytes.", effort: eff, status: S },
        { id: "python-foundations-ds-lists", order: 2, title: "Lists", outcome: "Use lists as ordered mutable sequences; understand mutation vs assignment.", effort: eff, status: S },
        { id: "python-foundations-ds-tuples", order: 3, title: "Tuples and Immutability", outcome: "Choose tuples for fixed grouped data and understand why immutability helps.", effort: eff, status: S },
        { id: "python-foundations-ds-dicts", order: 4, title: "Dictionaries", outcome: "Model lookup and record data with dicts idiomatically.", effort: eff, status: S },
        { id: "python-foundations-ds-sets", order: 5, title: "Sets and Set Operations", outcome: "Use sets for uniqueness and fast membership tests.", effort: eff, status: S },
        { id: "python-foundations-ds-comprehensions", order: 6, title: "Comprehensions", outcome: "Rewrite loops as list/dict/set comprehensions when they improve clarity.", effort: eff, status: S },
      ],
    },
    {
      id: "python-foundations-functions",
      order: 4,
      title: "Functions and Modules",
      summary: "Building reusable, readable, testable units of code.",
      lessons: [
        { id: "python-foundations-fn-defining", order: 1, title: "Defining and Calling Functions", outcome: "Write functions with parameters, defaults, and return values.", effort: eff, status: S },
        { id: "python-foundations-fn-scope", order: 2, title: "Scope, Arguments, and Return Values", outcome: "Reason about local/global scope and how arguments are passed.", effort: eff, status: S },
        { id: "python-foundations-fn-kwargs", order: 3, title: "Positional, Keyword, and Variadic Arguments", outcome: "Use *args and **kwargs when they genuinely help.", effort: eff, status: S },
        { id: "python-foundations-fn-lambdas", order: 4, title: "Lambdas and First-Class Functions", outcome: "Pass functions as values and use lambdas judiciously.", effort: eff, status: S },
        { id: "python-foundations-fn-modules", order: 5, title: "Modules, Imports, and Your Own Packages", outcome: "Organize code into modules and import cleanly.", effort: eff, status: S },
      ],
    },
    {
      id: "python-foundations-files-and-errors",
      order: 5,
      title: "Files, Data, and Errors",
      summary: "Working with real data on disk, and handling the mistakes that come with it.",
      lessons: [
        { id: "python-foundations-fe-files", order: 1, title: "Reading and Writing Text Files", outcome: "Open, read, and write text files safely using with-blocks.", effort: eff, status: S },
        { id: "python-foundations-fe-paths", order: 2, title: "Working with Paths (pathlib)", outcome: "Manipulate filesystem paths cross-platform with pathlib.", effort: eff, status: S },
        { id: "python-foundations-fe-csv-json", order: 3, title: "CSV and JSON", outcome: "Load and produce CSV and JSON with the standard library.", effort: eff, status: S },
        { id: "python-foundations-fe-exceptions", order: 4, title: "Exceptions: Handling Errors on Purpose", outcome: "Raise, catch, and design for exceptions without swallowing bugs.", effort: eff, status: S },
        { id: "python-foundations-fe-debugging", order: 5, title: "Debugging Real Programs", outcome: "Use print, logging, and a debugger to find bugs efficiently.", effort: eff, status: S },
      ],
    },
    {
      id: "python-foundations-oop-basics",
      order: 6,
      title: "Objects and Simple Classes",
      summary: "Enough OOP to read library code and model small domains — not enterprise inheritance.",
      lessons: [
        { id: "python-foundations-oop-objects", order: 1, title: "Everything Is an Object", outcome: "Explain Python's object model at a working level.", effort: eff, status: S },
        { id: "python-foundations-oop-classes", order: 2, title: "Defining Your Own Classes", outcome: "Write small classes with methods and clear responsibilities.", effort: eff, status: S },
        { id: "python-foundations-oop-dunders", order: 3, title: "Special Methods (Dunders)", outcome: "Implement __repr__, __eq__, and other dunders when useful.", effort: eff, status: S },
        { id: "python-foundations-oop-composition", order: 4, title: "Composition Over Inheritance", outcome: "Prefer composition and small classes to deep hierarchies.", effort: eff, status: S },
      ],
    },
    {
      id: "python-foundations-quality",
      order: 7,
      title: "Independent Programmer Habits",
      summary: "The habits that separate a beginner from someone who can actually ship.",
      lessons: [
        { id: "python-foundations-quality-testing-intro", order: 1, title: "Your First Tests with pytest", outcome: "Write unit tests that catch regressions and describe intent.", effort: eff, status: S },
        { id: "python-foundations-quality-style", order: 2, title: "Readable Python: Style and PEP 8", outcome: "Write code other humans can read without cognitive tax.", effort: eff, status: S },
        { id: "python-foundations-quality-project-structure", order: 3, title: "Structuring a Small Project", outcome: "Lay out a small project so it stays maintainable as it grows.", effort: eff, status: S },
        { id: "python-foundations-quality-tooling", order: 4, title: "Formatters, Linters, and Type Hints Preview", outcome: "Adopt tooling (ruff, black, mypy preview) that keeps quality high.", effort: eff, status: S },
      ],
    },
  ],
};
