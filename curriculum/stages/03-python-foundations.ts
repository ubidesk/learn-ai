import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "python-foundations",
  order: 3,
  title: "Python Foundations: Complete Beginner to Independent Programmer",
  purpose:
    "Take the language-independent thinking of stage 2 and land it inside real, running Python — from numbers and strings to files, exceptions, modules, and packages — so the learner can write, test, and share small programs alone.",
  startingLevel:
    "You have completed Programming Foundations and can reason in pseudocode. You have never written a real program in Python.",
  prerequisites: ["programming-foundations"],
  project: {
    title: "Standalone Python Toolkit",
    description:
      "Build and share a small standalone Python toolkit (e.g. a text analyser, a study-log tracker, or a data-cleaning helper) with a virtual environment, requirements file, a small test suite, and a README that another learner could follow.",
  },
  exitCriteria: [
    "Write, run, and debug Python programs from a terminal.",
    "Use numbers, strings, lists, dicts, sets, and files fluently.",
    "Handle exceptions deliberately and design your own where needed.",
    "Organise code into functions, modules, and small packages.",
    "Manage a virtual environment and pin dependencies for reproducibility.",
  ],
  status: S,
  modules: [
    {
      id: "pyf-execution-model",
      order: 1,
      title: "Python Execution Model",
      summary: "How Python actually runs your code — REPL, scripts, and the reference model that underlies everything else.",
      lessons: [
        L("pyf-execution-model-running-python", 1, "Running Python", "Run Python from a terminal, a script, and a notebook."),
        L("pyf-execution-model-repl-vs-scripts", 2, "REPL vs Scripts", "Choose between the REPL, scripts, and notebooks for different tasks."),
        L("pyf-execution-model-values-refs", 3, "Values, Names, and References", "Predict what happens when you assign, rebind, or mutate a value."),
        L("pyf-execution-model-import-preview", 4, "How Import Works, First Look", "Explain what import does and when it runs code."),
      ],
    },
    {
      id: "pyf-numbers",
      order: 2,
      title: "Numbers and Expressions",
      summary: "Integers, floats, and their honest limitations — the arithmetic that underlies every later ML computation.",
      lessons: [
        L("pyf-numbers-ints-floats", 1, "Ints and Floats", "Distinguish int and float and predict their arithmetic behaviour."),
        L("pyf-numbers-floating-point", 2, "Floating-Point Limitations", "Explain why 0.1 + 0.2 != 0.3 and defend against float surprises."),
        L("pyf-numbers-decimal-fractions", 3, "Decimal and Fractions", "Use decimal and fractions when exact arithmetic matters."),
        L("pyf-numbers-arithmetic-precedence", 4, "Arithmetic, Precedence, and Parentheses", "Write arithmetic expressions that evaluate the way you meant."),
        L("pyf-numbers-math-module", 5, "The math Module", "Use math functions confidently for logs, exponents, and trigonometry."),
      ],
    },
    {
      id: "pyf-strings",
      order: 3,
      title: "Strings and Text",
      summary: "The messy reality of text in Python — indexing, methods, formatting, and Unicode.",
      lessons: [
        L("pyf-strings-basics", 1, "String Basics", "Create, concatenate, and compare strings."),
        L("pyf-strings-indexing-slicing", 2, "Indexing and Slicing", "Slice strings without off-by-one errors."),
        L("pyf-strings-methods", 3, "String Methods", "Use split, join, strip, replace, and find idiomatically."),
        L("pyf-strings-fstrings", 4, "f-Strings and Formatting", "Format numbers, dates, and text with f-strings."),
        L("pyf-strings-unicode", 5, "Unicode in Python", "Handle non-ASCII text and file encodings without corruption."),
      ],
    },
    {
      id: "pyf-io",
      order: 4,
      title: "Input, Output, and Small Programs",
      summary: "The smallest end-to-end programs — read something, do something, print something.",
      lessons: [
        L("pyf-io-print-input", 1, "print() and input()", "Read from and write to the terminal."),
        L("pyf-io-parsing-text", 2, "Parsing User Text", "Turn user text into numbers and structured values safely."),
        L("pyf-io-input-validation", 3, "Input Validation", "Reject bad input without crashing your program."),
        L("pyf-io-tiny-program", 4, "Your First Real Program", "Ship a tiny program that solves a real problem for you."),
      ],
    },
    {
      id: "pyf-conditionals",
      order: 5,
      title: "Conditionals",
      summary: "Python's control flow — including truthiness, comparison chains, and the match statement.",
      lessons: [
        L("pyf-conditionals-if-elif-else", 1, "if / elif / else", "Write branching logic that covers all cases."),
        L("pyf-conditionals-comparison-chains", 2, "Comparison Chains", "Read and write chained comparisons idiomatically."),
        L("pyf-conditionals-truthiness", 3, "Truthiness in Python", "Predict which values are truthy and falsy and why."),
        L("pyf-conditionals-match", 4, "The match Statement", "Use structural pattern matching for clearer branching."),
      ],
    },
    {
      id: "pyf-loops",
      order: 6,
      title: "Loops",
      summary: "Iteration in Python, done idiomatically, with enumerate, zip, and the loop patterns you will use every day.",
      lessons: [
        L("pyf-loops-for-vs-while", 1, "For vs While", "Choose the right loop for the shape of the problem."),
        L("pyf-loops-ranges", 2, "range() and Numeric Loops", "Iterate numeric ranges without off-by-one bugs."),
        L("pyf-loops-enumerate-zip", 3, "enumerate() and zip()", "Iterate with indices and iterate over multiple sequences in parallel."),
        L("pyf-loops-else-on-loops", 4, "else on Loops", "Read and use the loop-else construct correctly."),
        L("pyf-loops-patterns", 5, "Break, Continue, and Loop Patterns", "Recognise the common loop patterns (accumulate, filter, first-hit)."),
      ],
    },
    {
      id: "pyf-functions",
      order: 7,
      title: "Functions",
      summary: "Python's flexible function machinery, taught in the order beginners actually need it.",
      lessons: [
        L("pyf-functions-def-basics", 1, "Defining Functions with def", "Define, call, and document a Python function."),
        L("pyf-functions-positional-keyword", 2, "Positional and Keyword Arguments", "Call functions positionally and by keyword deliberately."),
        L("pyf-functions-defaults-star-args", 3, "Defaults, *args, and **kwargs", "Design flexible signatures without hidden mutable-default bugs."),
        L("pyf-functions-return-none", 4, "return and None", "Distinguish returning None from printing something."),
        L("pyf-functions-docstrings", 5, "Docstrings and Function Documentation", "Write docstrings your future self and collaborators can read."),
        L("pyf-functions-scope-closures", 6, "Scope and Closures, First Look", "Trace which names a function can see and modify."),
      ],
    },
    {
      id: "pyf-lists-tuples",
      order: 8,
      title: "Lists and Tuples",
      summary: "Python's workhorse sequences — including the aliasing and copying traps that catch every beginner.",
      lessons: [
        L("pyf-lists-tuples-list-basics", 1, "List Basics", "Create, index, slice, and iterate lists idiomatically."),
        L("pyf-lists-tuples-list-methods", 2, "List Methods", "Use append, extend, insert, pop, sort, and reverse correctly."),
        L("pyf-lists-tuples-aliasing-copying", 3, "Aliasing and Copying", "Predict when two names refer to the same list and how to make a real copy."),
        L("pyf-lists-tuples-tuples", 4, "Tuples and Immutability", "Use tuples for fixed-shape records and unpacking."),
        L("pyf-lists-tuples-comprehensions", 5, "List Comprehensions", "Write comprehensions that stay readable."),
      ],
    },
    {
      id: "pyf-dicts-sets",
      order: 9,
      title: "Dictionaries and Sets",
      summary: "Python's mapping and set types — the backbone of most real Python programs.",
      lessons: [
        L("pyf-dicts-sets-dict-basics", 1, "Dictionary Basics", "Create dictionaries and look up values by keys."),
        L("pyf-dicts-sets-dict-methods", 2, "Dictionary Methods", "Use get, setdefault, items, keys, values, and update idiomatically."),
        L("pyf-dicts-sets-sets", 3, "Sets and Membership", "Use sets for uniqueness and fast membership tests."),
        L("pyf-dicts-sets-comprehensions", 4, "Dict and Set Comprehensions", "Build maps and sets declaratively with comprehensions."),
      ],
    },
    {
      id: "pyf-files",
      order: 10,
      title: "Files",
      summary: "Reading and writing real files — text, CSV, JSON — with modern Python idioms.",
      lessons: [
        L("pyf-files-opening", 1, "Opening Files Safely", "Open and close files with the with-statement."),
        L("pyf-files-read-write", 2, "Reading and Writing Text", "Read and write text files, line by line and in bulk."),
        L("pyf-files-pathlib", 3, "pathlib for Paths", "Manipulate paths portably with pathlib instead of string concatenation."),
        L("pyf-files-csv", 4, "CSV Files", "Read and write CSV data with the csv module."),
        L("pyf-files-json", 5, "JSON Files", "Serialize and deserialize Python data with json."),
      ],
    },
    {
      id: "pyf-exceptions",
      order: 11,
      title: "Exceptions",
      summary: "Errors as first-class control flow — using try/except deliberately and designing your own exceptions.",
      lessons: [
        L("pyf-exceptions-try-except", 1, "try / except / else / finally", "Catch exceptions where you can do something meaningful about them."),
        L("pyf-exceptions-raising", 2, "Raising Exceptions", "Raise informative exceptions when your function cannot fulfil its contract."),
        L("pyf-exceptions-hierarchy", 3, "The Exception Hierarchy", "Choose the narrowest built-in exception that matches your error."),
        L("pyf-exceptions-design", 4, "Designing Your Own Exceptions", "Define custom exceptions when the built-ins are the wrong abstraction."),
      ],
    },
    {
      id: "pyf-modules-packages",
      order: 12,
      title: "Modules and Packages",
      summary: "Organising code across files and depending on other people's — the beginning of professional Python.",
      lessons: [
        L("pyf-modules-packages-importing", 1, "Importing and __name__", "Split a program into modules and understand what __name__ == '__main__' means."),
        L("pyf-modules-packages-stdlib-tour", 2, "A Guided Standard-Library Tour", "Recognise which standard-library module solves which common task."),
        L("pyf-modules-packages-venv", 3, "Virtual Environments", "Create and use a virtual environment for a project."),
        L("pyf-modules-packages-pip-requirements", 4, "pip and requirements.txt", "Install and pin third-party dependencies reproducibly."),
      ],
    },
  ],
};
