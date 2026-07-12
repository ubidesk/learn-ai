import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "programming-foundations",
  order: 2,
  title: "Programming Foundations and Computational Thinking",
  purpose:
    "Build the language-independent thinking skills — problem decomposition, values and types, control flow, functions, collections, debugging, and algorithmic intuition — that every programming language, including Python, is a specific expression of.",
  startingLevel:
    "You have completed the Computers stage. You can use a shell and a text editor but you have never written a program of your own.",
  prerequisites: ["computers"],
  project: {
    title: "Small Program Portfolio in Pseudocode",
    description:
      "Design and specify three small programs entirely in pseudocode — with named functions, data structures, boolean logic, and testable behaviour — and write a short review of each explaining decomposition, correctness, and efficiency choices.",
  },
  exitCriteria: [
    "Decompose a problem into a sequence of steps and named subproblems.",
    "Reason about values, types, and expressions without a specific language.",
    "Write and trace conditionals, loops, and functions in pseudocode.",
    "Choose the right collection — list, tuple, dict, set — for a given problem.",
    "Debug and test small programs and give a Big-O estimate for simple algorithms.",
  ],
  status: S,
  modules: [
    {
      id: "pf-problems-algorithms",
      order: 1,
      title: "Problems, Algorithms, and Programs",
      summary: "What it means to solve a problem with a machine — and how algorithms, programs, and correctness relate.",
      lessons: [
        L("pf-problems-algorithms-what-is-algorithm", 1, "What Is an Algorithm?", "Define an algorithm and give examples that pre-date computers."),
        L("pf-problems-algorithms-decomposition", 2, "Decomposing Problems", "Break a problem into subproblems that each fit in your head."),
        L("pf-problems-algorithms-correctness-termination", 3, "Correctness and Termination", "Explain what it means for an algorithm to be correct and to terminate."),
        L("pf-problems-algorithms-pseudocode", 4, "Writing Pseudocode", "Write pseudocode a peer can read and execute mentally without ambiguity."),
      ],
    },
    {
      id: "pf-values-types",
      order: 2,
      title: "Values, Types, and Expressions",
      summary: "Every program computes with typed values. This module builds intuition for what types are and how expressions evaluate.",
      lessons: [
        L("pf-values-types-values-types", 1, "Values and Types", "Distinguish numbers, strings, booleans, and structured values as separate kinds of things."),
        L("pf-values-types-expressions", 2, "Expressions and Operators", "Compose expressions with arithmetic, comparison, and boolean operators."),
        L("pf-values-types-coercion", 3, "Type Coercion and Hazards", "Predict where types silently convert and why that is a common bug source."),
        L("pf-values-types-evaluation-order", 4, "Evaluation Order", "Trace evaluation of a nested expression step by step."),
      ],
    },
    {
      id: "pf-variables-state",
      order: 3,
      title: "Variables, Names, and State",
      summary: "How programs remember things — the semantics of names, assignment, and mutable state.",
      lessons: [
        L("pf-variables-state-names-bindings", 1, "Names, Bindings, and Environments", "Explain a variable as a name bound to a value, not a box."),
        L("pf-variables-state-assignment-vs-equality", 2, "Assignment vs Equality", "Distinguish assignment (=) from equality (==) and predict what each does."),
        L("pf-variables-state-mutable-immutable", 3, "Mutable vs Immutable", "Predict what changes when you modify a value versus rebind a name."),
        L("pf-variables-state-scope-intro", 4, "Scope, First Look", "Trace where a name is visible and where it is not."),
      ],
    },
    {
      id: "pf-decisions",
      order: 4,
      title: "Decisions and Boolean Logic",
      summary: "How programs choose between paths, and how to reason about boolean expressions correctly.",
      lessons: [
        L("pf-decisions-booleans-truth", 1, "Booleans and Truth", "Reason about true and false as first-class values."),
        L("pf-decisions-if-else", 2, "If, Else, and Nested Decisions", "Write branching logic that covers all cases without duplication."),
        L("pf-decisions-boolean-operators", 3, "AND, OR, NOT, and De Morgan", "Simplify and rewrite boolean expressions correctly."),
        L("pf-decisions-truthiness", 4, "Short-Circuiting and Truthiness", "Predict short-circuit evaluation and truthy/falsy coercion."),
      ],
    },
    {
      id: "pf-repetition",
      order: 5,
      title: "Repetition",
      summary: "Loops, invariants, and the classic pitfalls beginners must learn to avoid.",
      lessons: [
        L("pf-repetition-while", 1, "While Loops", "Write while-loops with a clear termination condition."),
        L("pf-repetition-for", 2, "For Loops and Iteration", "Iterate over a collection instead of managing indices by hand."),
        L("pf-repetition-invariants", 3, "Loop Invariants", "State a loop invariant and use it to reason about correctness."),
        L("pf-repetition-break-continue", 4, "Break, Continue, and Loop Control", "Use break and continue without making a loop unreadable."),
        L("pf-repetition-off-by-one", 5, "Off-By-One Errors", "Catch off-by-one errors before they cost you an hour."),
      ],
    },
    {
      id: "pf-functions",
      order: 6,
      title: "Functions and Decomposition",
      summary: "Functions as named, testable units — the single most important tool for managing complexity.",
      lessons: [
        L("pf-functions-what-is-function", 1, "What a Function Is For", "Define a function as a named, testable unit with inputs and an output."),
        L("pf-functions-parameters-arguments", 2, "Parameters and Arguments", "Distinguish parameters from arguments and design good signatures."),
        L("pf-functions-return-values", 3, "Return Values", "Design functions that return meaningful values instead of relying on side effects."),
        L("pf-functions-pure-vs-side-effects", 4, "Pure Functions and Side Effects", "Recognise side effects and isolate them from pure logic."),
        L("pf-functions-recursion-intro", 5, "Recursion, First Look", "Read and write a small recursive function with a base case."),
      ],
    },
    {
      id: "pf-collections",
      order: 7,
      title: "Collections and Data Structures",
      summary: "How to store many values together — and which shape fits which problem.",
      lessons: [
        L("pf-collections-lists", 1, "Lists and Arrays", "Store ordered, indexable sequences of values."),
        L("pf-collections-tuples", 2, "Tuples and Records", "Group heterogeneous values into a fixed-shape record."),
        L("pf-collections-dicts", 3, "Dictionaries and Maps", "Look up values by keys and reason about hash-based lookup."),
        L("pf-collections-sets", 4, "Sets and Membership", "Store unique values and test membership efficiently."),
        L("pf-collections-choosing", 5, "Choosing the Right Collection", "Pick the collection that matches the access pattern of your problem."),
      ],
    },
    {
      id: "pf-debugging-testing",
      order: 8,
      title: "Debugging and Testing Foundations",
      summary: "Debugging as a disciplined skill, and testing as a habit from the first program you write.",
      lessons: [
        L("pf-debugging-testing-mental-model", 1, "A Mental Model of Bugs", "Diagnose whether a bug is in your understanding, your code, or your data."),
        L("pf-debugging-testing-print-and-trace", 2, "Print, Trace, and Read the Output", "Instrument small programs so you can see what they are actually doing."),
        L("pf-debugging-testing-debugger", 3, "Using a Debugger", "Step through code with a debugger and inspect variables at runtime."),
        L("pf-debugging-testing-first-tests", 4, "Your First Tests", "Write executable examples that fail loudly when behaviour changes."),
      ],
    },
    {
      id: "pf-algorithms-efficiency",
      order: 9,
      title: "Algorithms and Efficiency Foundations",
      summary: "The first honest treatment of Big-O, search, sort, and the data-structure vocabulary you will reuse forever.",
      lessons: [
        L("pf-algorithms-efficiency-big-o", 1, "Big-O Intuition", "Estimate order-of-growth for simple algorithms without heavy math."),
        L("pf-algorithms-efficiency-search", 2, "Linear vs Binary Search", "Compare linear and binary search and explain the sorted-input trade-off."),
        L("pf-algorithms-efficiency-sorting", 3, "Sorting Intuition", "Distinguish O(n²) and O(n log n) sorts and pick the right one."),
        L("pf-algorithms-efficiency-stacks-queues", 4, "Stacks and Queues", "Model LIFO and FIFO problems with stacks and queues."),
        L("pf-algorithms-efficiency-trees-graphs-preview", 5, "Trees, Graphs, and Hash Tables Preview", "Recognise problems that need tree, graph, or hash-table structure."),
      ],
    },
  ],
};
