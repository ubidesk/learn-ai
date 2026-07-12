import type { LessonBody } from "../schema";

export const module03: Record<string, LessonBody> = {
  "computers-programs-execution-source-to-machine": {
    curiosity:
      "You type `print('hello')` and press enter. Somehow, three billion transistors cooperate for a millisecond and the letters appear. What actually happens between your fingers and the screen?",
    whyThisMatters:
      "Once you can trace source through to instructions, error messages stop being scary — a `SyntaxError` is a very different beast from a `SegmentationFault`, and knowing where each comes from tells you where to look.",
    intuition: [
      "Source code is text a human can read. Machine code is bytes a CPU can execute. Between them is a small stack of translations.",
      "Some languages compile ahead of time (a build step produces a binary). Some interpret line by line. Some do a bit of both.",
      "At the bottom, everything becomes numbers in registers, addresses in memory, and jumps to the next instruction.",
    ],
    visual: { component: "source-to-machine", caption: "Text on disk → machine instructions in flight." },
    explanation: [
      "Lex: split the source into tokens (`print`, `(`, `'hello'`, `)`). Parse: build a tree that captures the structure.",
      "Lower: convert the tree to an intermediate representation. In Python, this is bytecode you can inspect with `dis`. In C, it's LLVM IR before the backend produces assembly.",
      "Assemble/emit: turn the intermediate form into actual machine code targeting your CPU (x86-64, ARM64, etc.) or into VM bytecode that a runtime will execute.",
      "Load and run: the OS loads the code and data into a fresh process, jumps to the entry point, and the CPU starts fetching and executing.",
    ],
    experiment: {
      component: "source-to-machine",
      caption: "Walk the stages.",
      instructions:
        "Step through fetch → parse → lower → emit → execute. Notice: each stage can only fail on things it can see. Syntax errors happen at parse; type errors happen at lowering (in typed languages) or at runtime (in Python).",
    },
    reflection: [
      "Python raises `NameError` when you try to use a variable that doesn't exist. At which stage do you think this error is detected — and why not earlier?",
      "Why does a compiled language like Rust catch some errors that Python only sees when it runs the buggy line?",
    ],
    modernAiConnection:
      "PyTorch and TensorFlow do exactly this pipeline for tensors: your Python calls build a graph, the graph gets lowered to CUDA kernels, and the kernels run on the GPU. When you enable `torch.compile`, you're literally opting into a more aggressive lowering step.",
    knowledgeCheck: {
      question: "At which stage is a Python `SyntaxError` typically detected?",
      options: [
        { text: "Execution — when the offending line is reached.", correct: false, feedback: "SyntaxErrors are caught before execution starts. The parser can't even build the tree." },
        { text: "Parsing.", correct: true, feedback: "Right. The parser must be able to build a tree for the whole file before any of it runs." },
        { text: "Machine-code emission.", correct: false, feedback: "Python doesn't emit machine code; even if it did, syntax fails earlier." },
        { text: "Only when the process crashes.", correct: false, feedback: "You'd see the error at parse time, not a crash." },
      ],
    },
    nextStepHint: "One path is compiled ahead of time; another is interpreted at runtime. Next: the three main execution models and why each exists.",
  },

  "computers-programs-execution-compilers-interpreters": {
    curiosity:
      "You edit a Python file and re-run — instant. You edit a Rust file and re-run — it thinks for ten seconds first. Both eventually run your code. What is Rust doing in those ten seconds, and why is Python getting away without it?",
    whyThisMatters:
      "Every language you'll use in AI (Python, JavaScript, TypeScript, C++, Rust, sometimes Go) sits somewhere on the compiled/interpreted spectrum. Knowing where each one lives tells you what to expect for startup, speed, portability, and debuggability.",
    intuition: [
      "Compilers translate once (ahead of time) and hand you a binary; interpreters translate every time (as they run).",
      "Compiled languages win on steady-state speed and on catching many errors before you run anything.",
      "Interpreted languages win on iteration speed, portability, and the ability to poke at running programs.",
    ],
    visual: { component: "exec-modes", caption: "Three execution models, side by side." },
    explanation: [
      "Compiled: C, C++, Rust, Go. A build step produces a native binary you ship. Fast to run, tied to a specific OS + CPU, slower feedback loop.",
      "Interpreted: Bash, Lua, historically JavaScript. A runtime reads the source (or precompiled bytecode) and executes it directly.",
      "VM/JIT hybrid: Java, C#, JavaScript today, Python (in part). Source becomes bytecode for a virtual machine; hot code paths get compiled to native at runtime.",
      "The spectrum matters more than the labels. Python has a bytecode compiler. JavaScript has V8, one of the world's most advanced JITs. Rust can generate WebAssembly you 'interpret' in a browser.",
    ],
    experiment: {
      component: "exec-modes",
      caption: "Flip between the three modes.",
      instructions:
        "Read each description. For each language you already know or use, place it on this spectrum in your head. Notice: languages migrate — JavaScript started interpreted and now runs through a JIT.",
    },
    reflection: [
      "Why is Python attractive for research and rapid experimentation despite being slower per-operation than C?",
      "Give one workload where you'd prefer Rust over Python, and one where you'd prefer the opposite.",
    ],
    modernAiConnection:
      "Almost every AI framework is a Python interface over compiled C++/CUDA. You get Python's interactivity at the outer layer and native-code speed for the hot inner loops. That combination is why Python won as the AI language despite being 'slow'.",
    knowledgeCheck: {
      question: "Which best describes modern Java or C#?",
      options: [
        { text: "Purely interpreted.", correct: false, feedback: "They compile to bytecode and JIT-compile hot paths to native. Not purely interpreted." },
        { text: "Ahead-of-time compiled like C.", correct: false, feedback: "They can be, but the default flow is bytecode + JIT." },
        { text: "Bytecode running on a VM with a JIT compiler for hot code.", correct: true, feedback: "Yes — the model that gives them near-native speed without native distribution headaches." },
        { text: "Direct source interpretation with no compilation.", correct: false, feedback: "Even Bash has a small compile-to-tree step. Java certainly does." },
      ],
    },
    nextStepHint: "You can categorise how programs run. Next: what a running program looks like in memory.",
  },

  "computers-programs-execution-processes-memory": {
    curiosity:
      "You have Firefox, Slack, Spotify, and a Python script all open. They each think they own the whole machine. None of them can accidentally overwrite each other's data. How is that possible?",
    whyThisMatters:
      "Almost every 'my program crashed but the OS didn't' story is a story about process memory. Understanding what a process is protects you from a huge class of confusing bugs and security failures.",
    intuition: [
      "A process is a running program with its own private view of memory. Two processes can never accidentally read each other's variables.",
      "Inside one process, memory is divided into regions: code (read-only), data (globals), heap (long-lived allocations), stack (function calls).",
      "The OS gives each process a virtual address space, mapped to real physical memory as needed. To the process, it looks like the machine is its own.",
    ],
    visual: { component: "process-memory-map", caption: "The four regions of a process's memory." },
    explanation: [
      "The stack holds function call frames — local variables, return addresses, parameters. It grows and shrinks fast; overflow means a runaway recursion.",
      "The heap holds long-lived allocations — objects, buffers, anything created by `malloc`, `new`, or the language's allocator. In garbage-collected languages, the GC lives here.",
      "The data segment holds initialised globals; BSS holds zero-initialised ones. The code (text) segment holds the read-only machine instructions.",
      "Two processes are isolated by hardware. Reading process A's memory from process B is either impossible or requires OS mediation (via a syscall, a pipe, a shared-memory segment).",
    ],
    experiment: {
      component: "process-memory-map",
      caption: "Explore the memory regions.",
      instructions:
        "Which region holds a local variable in a function? A global constant? A big matrix you `np.zeros`'d? The compiled code itself? Match each concept to its region.",
    },
    reflection: [
      "A recursive function without a base case eventually errors. In your own words, why — and which region of memory ran out?",
      "Why is 'shared memory' considered a hard concurrency problem even between processes on the same machine?",
    ],
    modernAiConnection:
      "GPU memory is its own separate address space, on the GPU chip. Every `.to('cuda')` in PyTorch copies bytes over the PCIe bus from process RAM to GPU RAM. 'Out of memory' during training almost always means GPU RAM, not the OS's RAM.",
    knowledgeCheck: {
      question: "You run two copies of the same Python script. Do they share global variables?",
      options: [
        { text: "Yes — same script, same globals.", correct: false, feedback: "No — they run as two separate processes with completely independent memory." },
        { text: "Only if you explicitly opt in.", correct: true, feedback: "Correct. Sharing between processes requires an explicit mechanism (files, sockets, shared-memory segments)." },
        { text: "Only on macOS.", correct: false, feedback: "Process isolation works the same on Linux, macOS, and Windows." },
        { text: "Only if they're in the same terminal.", correct: false, feedback: "The terminal is just a UI. Isolation is enforced by the OS, not by the terminal." },
      ],
    },
    nextStepHint: "One process at a time is easy. Next: how one process uses multiple cores at once, and where that helps.",
  },

  "computers-programs-execution-threads": {
    curiosity:
      "Your laptop has eight cores. Most of your programs use one. Why isn't everything eight times faster by default?",
    whyThisMatters:
      "Concurrency is one of the most misunderstood topics in software. Getting the mental model right prevents a class of bugs so subtle that senior engineers still write them.",
    intuition: [
      "Concurrency is 'many things in flight at once' — for example, one core juggling several I/O-bound tasks.",
      "Parallelism is 'many things actually executing at once' — real cores doing real work simultaneously.",
      "You can have concurrency without parallelism (async on one core), and parallelism without concurrency (embarrassingly parallel batch jobs).",
    ],
    visual: { component: "concurrency-vs-parallel", caption: "Cores × tasks → wall time." },
    explanation: [
      "A thread is a light-weight unit of execution inside a process, sharing memory with other threads in the same process. Multiple threads can run on multiple cores in parallel — subject to language constraints.",
      "Python's GIL (Global Interpreter Lock) prevents two Python threads from executing Python bytecode simultaneously, which is why CPU-bound Python code doesn't scale with threads. For that, you use processes (multiprocessing) or native extensions (NumPy, PyTorch).",
      "Shared memory + threads is fast but dangerous: without care, two threads can corrupt data (race conditions). Locks fix this but are hard to get right and slow you down.",
      "Async I/O (`asyncio`, JavaScript event loop) gives you concurrency on one thread by cooperatively yielding while waiting for I/O — no locks needed, no parallelism gained.",
    ],
    experiment: {
      component: "concurrency-vs-parallel",
      caption: "Model tasks on cores.",
      instructions:
        "Drag the sliders. Notice that with independent tasks, wall time = ceil(tasks/cores). But if a task depends on another, no number of cores helps that dependency chain. That is Amdahl's law in one picture.",
    },
    reflection: [
      "You have a Python script that reads 100 web pages and processes each. Where would `asyncio` help? Where would `multiprocessing` help? Where would both?",
      "Why is a single dependent 'sequential bottleneck' more limiting than a smaller number of cores?",
    ],
    modernAiConnection:
      "Training a large model is embarrassingly parallel across data (each GPU processes a batch), across the model (layers split across GPUs), and across time (pipeline stages). Modern distributed training is choreographed concurrency at the scale of thousands of accelerators — with the same shared-memory hazards, only worse.",
    knowledgeCheck: {
      question: "Your Python code does heavy math in a tight loop. You wrap it in 8 threads and see no speedup. What's the likely reason?",
      options: [
        { text: "Threads always slow Python down.", correct: false, feedback: "Threads can help I/O-bound Python code — just not CPU-bound pure Python." },
        { text: "The GIL prevents parallel Python bytecode execution.", correct: true, feedback: "Right. Use multiprocessing, native libraries that release the GIL, or a compiled language for CPU-bound loops." },
        { text: "You need more RAM.", correct: false, feedback: "RAM is unrelated to the GIL story." },
        { text: "You have to install a threading library separately.", correct: false, feedback: "`threading` is part of the standard library. The bottleneck is the GIL, not availability." },
      ],
    },
    nextStepHint: "You know how programs execute. Next: the OS that orchestrates all of them.",
  },
};
