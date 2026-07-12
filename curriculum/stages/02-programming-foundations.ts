import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "45–75 min";

export const stage: Stage = {
  id: "programming-foundations",
  order: 2,
  title: "Programming Foundations and Computational Thinking",
  purpose:
    "Teach how to think like a programmer before teaching a specific language. Learners leave with durable intuition for problem decomposition, algorithms, and data — the mental habits Python will exercise next.",
  startingLevel:
    "You have a working developer environment and can use a shell. You have never written a program.",
  prerequisites: ["computers"],
  project: {
    title: "Algorithm Journal",
    description:
      "Produce a small illustrated journal solving 8 classic problems (e.g. reverse a list, guess-the-number, FizzBuzz, binary search) as pseudocode with worked examples and hand-traced state, before any real code.",
  },
  exitCriteria: [
    "Decompose a small problem into inputs, outputs, and steps.",
    "Read and write pseudocode fluently.",
    "Reason about correctness on small examples by hand.",
    "Recognise common control-flow patterns (sequence, selection, iteration).",
    "Explain what an algorithm and a data structure are.",
  ],
  status: S,
  modules: [
    {
      id: "programming-foundations-thinking",
      order: 1,
      title: "Thinking Like a Programmer",
      summary: "Problem decomposition, precise language, and the habit of hand-tracing.",
      lessons: [
        { id: "programming-foundations-thinking-decomposition", order: 1, title: "Decomposition and Abstraction", outcome: "Break an informal problem into precise sub-problems and inputs/outputs.", effort: eff, status: S },
        { id: "programming-foundations-thinking-precision", order: 2, title: "Being Precise: Language for Machines", outcome: "Notice ambiguity in everyday language and rewrite it precisely.", effort: eff, status: S },
        { id: "programming-foundations-thinking-hand-trace", order: 3, title: "Hand-Tracing State", outcome: "Track variables and control on paper to check that a plan is correct.", effort: eff, status: S },
        { id: "programming-foundations-thinking-patterns", order: 4, title: "Patterns You Will See Everywhere", outcome: "Name the sequence/selection/iteration pattern in unfamiliar problems.", effort: eff, status: S },
      ],
    },
    {
      id: "programming-foundations-control-flow",
      order: 2,
      title: "Control Flow as Pseudocode",
      summary: "The building blocks of any program, in language-neutral pseudocode.",
      lessons: [
        { id: "programming-foundations-control-flow-variables", order: 1, title: "Variables and Assignment", outcome: "Model state with variables and reason about assignment order.", effort: eff, status: S },
        { id: "programming-foundations-control-flow-conditionals", order: 2, title: "Conditionals", outcome: "Express decisions with if/else, including nested and combined conditions.", effort: eff, status: S },
        { id: "programming-foundations-control-flow-loops", order: 3, title: "Loops and Iteration", outcome: "Iterate over sequences and repeat until a condition holds; avoid off-by-one errors.", effort: eff, status: S },
        { id: "programming-foundations-control-flow-functions", order: 4, title: "Functions: Naming and Reusing Steps", outcome: "Package a computation with clear inputs, outputs, and side effects.", effort: eff, status: S },
      ],
    },
    {
      id: "programming-foundations-data-and-algorithms",
      order: 3,
      title: "Data and Simple Algorithms",
      summary: "The smallest set of data structures and algorithms every programmer must feel in their bones.",
      lessons: [
        { id: "programming-foundations-data-lists", order: 1, title: "Lists and Indices", outcome: "Model ordered data and access it by position.", effort: eff, status: S },
        { id: "programming-foundations-data-maps", order: 2, title: "Key-Value Maps", outcome: "Model lookup problems using dictionaries/hash maps conceptually.", effort: eff, status: S },
        { id: "programming-foundations-data-search-sort", order: 3, title: "Searching and Sorting, Slowly", outcome: "Hand-execute linear search, binary search, and a simple sort; compare their work.", effort: eff, status: S },
        { id: "programming-foundations-data-complexity-intro", order: 4, title: "Why Some Programs Are Slow", outcome: "Reason informally about how work grows with input size.", effort: eff, status: S },
      ],
    },
    {
      id: "programming-foundations-problem-solving",
      order: 4,
      title: "A Programmer's Problem-Solving Loop",
      summary: "The disciplined loop: understand → plan → execute → check → refine.",
      lessons: [
        { id: "programming-foundations-problem-solving-loop", order: 1, title: "Understand, Plan, Execute, Check", outcome: "Apply Pólya's problem-solving loop to programming problems.", effort: eff, status: S },
        { id: "programming-foundations-problem-solving-debugging-mindset", order: 2, title: "Debugging Is a Mindset, Not a Tool", outcome: "Adopt the habits and questions that make bugs findable.", effort: eff, status: S },
        { id: "programming-foundations-problem-solving-reading-code", order: 3, title: "Reading Code Before Writing Code", outcome: "Read short programs, predict their output, and only then run them.", effort: eff, status: S },
        { id: "programming-foundations-problem-solving-anti-patterns", order: 4, title: "Anti-Patterns Beginners Fall Into", outcome: "Recognise and avoid the common bad habits that stall self-taught learners.", effort: eff, status: S },
      ],
    },
  ],
};
