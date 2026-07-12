import type { LessonBody } from "../schema";

export const module04: Record<string, LessonBody> = {
  "computers-os-what-os-does": {
    curiosity:
      "You've never met your operating system, but it's been working the whole time — deciding which app gets the CPU next, whether you can read that file, and what happens when your browser and your video call both want the microphone. What is it, exactly?",
    whyThisMatters:
      "Every practical AI system runs on top of an OS. Understanding what the OS handles — and what your code is on its own for — clears up a huge amount of confusion about performance, permissions, and failure modes.",
    intuition: [
      "The OS is a manager: it hands out CPU time, memory, and files to processes that ask.",
      "It's also an abstractor: your program says 'read this file' without knowing whether the disk is a spinning platter, an SSD, or a remote server.",
      "It's also a bouncer: it enforces who can touch what, so one crashing app doesn't take down the machine.",
    ],
    visual: { component: "os-role", caption: "The OS's five main jobs, one per tab." },
    explanation: [
      "Process management: schedule which process runs on which core, pause and resume as needed, kill runaways.",
      "Memory management: give each process virtual memory, map it to physical RAM, page out to disk under pressure.",
      "Filesystem: expose a tree of files with permissions, buffered by the kernel for speed.",
      "Device management: load drivers for keyboards, screens, network cards, GPUs; give programs a uniform API to talk to them.",
      "Security & user management: enforce accounts, permissions, isolation. Contain crashes and malware.",
    ],
    experiment: {
      component: "os-role",
      caption: "Explore each role.",
      instructions:
        "Click through the five tabs. For each, name one everyday behaviour you now understand better (why closing an app releases RAM, why 'permission denied' happens, why plugging in a USB drive 'just works').",
    },
    reflection: [
      "Name three things the OS does for you every second that would be catastrophic to write yourself in every app.",
      "Why can a single misbehaving user-space program crash — but not usually take the whole machine down with it?",
    ],
    modernAiConnection:
      "When you run `python train.py` on a cloud GPU box, the OS is scheduling your process, mapping GPU memory, forwarding syscalls to the CUDA driver, and enforcing your storage quotas. Every ML production incident eventually touches at least one of these layers.",
    knowledgeCheck: {
      question: "Which of these is NOT primarily an OS responsibility?",
      options: [
        { text: "Scheduling processes onto CPU cores.", correct: false, feedback: "That's a core OS job." },
        { text: "Enforcing file permissions.", correct: false, feedback: "Also a core OS job." },
        { text: "Deciding which button on a web page you clicked.", correct: true, feedback: "Right. That's the browser's job. The OS only routes the raw mouse event to the browser." },
        { text: "Loading drivers for new USB devices.", correct: false, feedback: "That's an OS job." },
      ],
    },
    nextStepHint: "The OS gives you a filesystem — a tree of files with permissions. Next: how to navigate it fluently.",
  },

  "computers-os-filesystems-permissions": {
    curiosity:
      "You try to run a script and see `Permission denied`. The file is right there — you can see it. Why won't the machine let you touch it?",
    whyThisMatters:
      "Filesystem paths and permissions are what daily development is made of. Getting comfortable here removes a class of 'why doesn't this work' friction that plagues beginners for months.",
    intuition: [
      "A path is an address of a file, either from the root (`/`) or from where you currently are.",
      "Permissions ask three questions: who is asking, what do they want (read, write, execute), and does the file allow that?",
      "Unix permissions pack all of this into a tiny string like `-rwxr-xr-x` — three actors, three verbs each.",
    ],
    visual: { component: "permissions-lab", caption: "Build a chmod string with checkboxes and see the octal." },
    explanation: [
      "Absolute path: starts at `/` (e.g. `/home/alice/notes.md`). Relative path: starts from the current directory (`../projects/readme.txt`). `~` is home.",
      "Every file has an owner and a group. Permission bits define what the owner, the group, and everyone else can do: read (r), write (w), execute (x).",
      "`chmod` sets bits; `chown` changes owner. The `ls -l` output packs owner/group/permissions/size/name into one line.",
      "Executable is separate from readable. A script without `x` won't run; a directory needs `x` to enter (unintuitive but real).",
    ],
    experiment: {
      component: "permissions-lab",
      caption: "Toggle checkboxes to build permissions.",
      instructions:
        "Check owner: read+write+execute. Group: read+execute. Others: read+execute. You've just written `chmod 755` — the standard 'executable script anyone can read' permissions. Now uncheck 'others read' and see the octal drop.",
    },
    reflection: [
      "Explain in one sentence what `chmod 600 secrets.txt` means, and why that's a common choice for API keys.",
      "You have `readme.md` in your project. What could `Permission denied` mean here, and how would you check?",
    ],
    modernAiConnection:
      "Every model checkpoint, every dataset file, every SSH key you use to reach a training server sits behind file permissions. Leaking an API key by committing it with mode 644 into a public repo has ended careers.",
    knowledgeCheck: {
      question: "You see `-rwxr-x---` on a file. Who can read it?",
      options: [
        { text: "Anyone.", correct: false, feedback: "The last triplet is `---`, so 'others' can't do anything." },
        { text: "Only the owner.", correct: false, feedback: "The middle triplet is `r-x`, so members of the group can also read." },
        { text: "The owner and members of the group.", correct: true, feedback: "Correct — owner has read+write+execute, group has read+execute, others have nothing." },
        { text: "Only root.", correct: false, feedback: "Root can read anything, but so can the owner and the group here." },
      ],
    },
    nextStepHint: "You can talk to the filesystem. Next: how to talk to (and control) running processes.",
  },

  "computers-os-processes-jobs-signals": {
    curiosity:
      "You hit Ctrl-C in the terminal and the runaway script stops. What did those two keystrokes actually do?",
    whyThisMatters:
      "Being able to start, inspect, and stop processes cleanly is core hygiene. It prevents zombie jobs eating your battery, stale servers hogging ports, and stuck training runs holding your GPUs hostage.",
    intuition: [
      "Every running program is a process with a numeric ID (PID). The OS tracks all of them.",
      "You start them by running commands. You inspect them with `ps` or `top`. You signal them with `kill`.",
      "Signals are the way to say 'please quit', 'quit now', 'pause', or 'resume' without touching the process's code.",
    ],
    visual: { component: "signals-lab", caption: "Match scenarios to signals." },
    explanation: [
      "Foreground jobs run tied to your terminal — you see their output, they die if the terminal closes. Background jobs (started with `&`, controlled with `jobs`, `fg`, `bg`) keep running while you do other things.",
      "`ps aux` lists everything running. `top` and `htop` show live resource usage. `pkill python` matches by name.",
      "Signals are 'polite requests' sent by the OS. SIGTERM (15) asks a process to quit gracefully; SIGKILL (9) is unstoppable. SIGSTOP pauses; SIGCONT resumes. SIGINT is what Ctrl-C sends.",
      "A well-written program traps SIGTERM, writes its state to disk, and exits cleanly. That's why 'graceful shutdown' is a feature you need to build, not a default.",
    ],
    experiment: {
      component: "signals-lab",
      caption: "Choose the right signal.",
      instructions:
        "Read each scenario and pick the signal. Notice the trade-off: SIGKILL always works but drops in-flight work; SIGTERM is polite but can be ignored.",
    },
    reflection: [
      "Why is `kill -9` an anti-pattern when `kill` (which sends SIGTERM by default) would do?",
      "You start a long training run and close your laptop. What might you do differently next time?",
    ],
    modernAiConnection:
      "Kubernetes shipping your pod between nodes is exactly this: SIGTERM first, then SIGKILL if you don't exit within a grace period. If your training loop doesn't checkpoint on SIGTERM, you'll lose hours of work every time the scheduler decides to move you.",
    knowledgeCheck: {
      question: "Your web server needs to finish serving the current request before shutting down. Which signal should the deployment system send first?",
      options: [
        { text: "SIGKILL.", correct: false, feedback: "SIGKILL is uncatchable — the process dies instantly, mid-request." },
        { text: "SIGTERM.", correct: true, feedback: "Correct. The app can trap SIGTERM, finish the in-flight request, close resources, and exit cleanly." },
        { text: "SIGSTOP.", correct: false, feedback: "SIGSTOP pauses the process, leaving the request hanging. Not shutdown." },
        { text: "SIGINT.", correct: false, feedback: "SIGINT works interactively but by convention isn't what deployment systems send for shutdown." },
      ],
    },
    nextStepHint: "Processes handled. Next: what happens when there isn't enough RAM for all of them.",
  },

  "computers-os-virtual-memory": {
    curiosity:
      "You have 16 GB of RAM. Between your browser, editor, and a big Python notebook, you're 'using' 20 GB. And yet nothing crashed. Where is the extra 4 GB really living?",
    whyThisMatters:
      "The moment you start caring about performance, you have to know virtual memory. It's the difference between 'my program is slow' and 'my program is thrashing and needs to be redesigned'.",
    intuition: [
      "Every process thinks it has its own huge, private memory. The OS maps small chunks (pages) of that virtual memory to real physical RAM as needed.",
      "When RAM fills up, the OS moves cold pages out to disk (swap). If the program touches a paged-out page, the OS pauses it, reads the page back, and resumes. This is invisible — except very, very slow.",
      "'Thrashing' is when you cross the line and the machine spends more time paging than working.",
    ],
    visual: { component: "virtual-memory", caption: "Slide memory demand and watch swap kick in." },
    explanation: [
      "Virtual memory gives each process a contiguous private address space, decoupling it from the physical layout of RAM. The OS + CPU translate every access through a page table.",
      "Pages are typically 4 KB. When RAM is full, the least recently used pages get written to swap on disk. When the process accesses them again, they come back — after a huge pause.",
      "Modern operating systems keep some RAM free as a cache for recently used files. That's why 'RAM used' can hover near 100% even when there's headroom.",
      "You spot swap trouble in `top`/`htop`: swap usage climbing, disk activity spiking, and every action feeling like glue.",
    ],
    experiment: {
      component: "virtual-memory",
      caption: "Push memory demand past 100%.",
      instructions:
        "Slide the demand slider. Notice: below ~85% of RAM, everything is fine. Cross the line and swap grows. In real life, that's the point where your laptop's fan spins up and your terminal stops echoing.",
    },
    reflection: [
      "Someone says 'more RAM never makes a program faster'. Under what circumstances is that wrong?",
      "Your training run gets slower and slower after an hour. What might be leaking, and how would you check?",
    ],
    modernAiConnection:
      "GPU 'virtual memory' is more limited than the OS's — CUDA does have unified memory, but stepping over the physical GPU RAM ceiling is dramatically more painful than crossing your CPU's swap threshold. That's why 'OOM' during training is the single most common failure mode of large models.",
    knowledgeCheck: {
      question: "Your machine has 16 GB of RAM. You run a program that allocates 40 GB. What most likely happens on Linux with swap enabled?",
      options: [
        { text: "It crashes immediately.", correct: false, feedback: "Not immediately — the OS will happily allocate virtual pages and page them to disk as needed. Eventually it may OOM." },
        { text: "It runs, but very slowly, using swap heavily.", correct: true, feedback: "Correct — until swap fills up too, at which point the OOM killer picks a process to sacrifice." },
        { text: "The OS shrinks the allocation to fit in RAM.", correct: false, feedback: "The OS does not silently shrink allocations." },
        { text: "The program transparently uses another machine.", correct: false, feedback: "Distributed memory is opt-in and requires specific frameworks, not automatic." },
      ],
    },
    nextStepHint: "You understand memory pressure. Next: how the OS ships and updates software safely.",
  },

  "computers-os-package-managers": {
    curiosity:
      "You want to install a program. You could download an installer from a random website, or you could type `sudo apt install ripgrep`. One of those is a much better idea. Why?",
    whyThisMatters:
      "Package managers are how professional developers install, update, and remove software safely. Learning your OS's package manager saves hours of setup and prevents whole classes of malware.",
    intuition: [
      "A package manager is a curated app store for command-line and system software: it knows what's compatible, what depends on what, and how to keep everything up to date.",
      "It downloads packages from trusted repositories, verifies their signatures, and installs them in the standard locations.",
      "You can go back later and remove or update anything cleanly — no leftover files, no broken shortcuts.",
    ],
    visual: { component: "package-manager", caption: "Same task, four package managers." },
    explanation: [
      "Debian/Ubuntu: `apt`. Fedora/RHEL: `dnf`. macOS: Homebrew (`brew`), community-run, no sudo required. Windows: `winget` from Microsoft, or Chocolatey.",
      "Language-level package managers (pip for Python, npm for JavaScript, cargo for Rust) install libraries used by your programs. System package managers install the programs themselves.",
      "Always update the index (`apt update`, `brew update`) before installing something recent. Otherwise you're picking from an old catalogue.",
      "`sudo` gives temporary root privileges. Use it deliberately — a wrong package manager command with sudo can leave your OS unbootable.",
    ],
    experiment: {
      component: "package-manager",
      caption: "See the same task in each ecosystem.",
      instructions:
        "Flip between apt, brew, dnf, winget. The verbs are the same — install, remove, update. Once you learn one, the others are just spelling.",
    },
    reflection: [
      "Someone says 'just curl this URL and pipe it into bash'. Why is that risky, and when is it acceptable anyway?",
      "Why keep language-level and system-level package managers separate?",
    ],
    modernAiConnection:
      "Reproducing an ML paper often means installing exact library versions on an exact OS. Package managers, lockfiles, and containers exist because otherwise 'it works on my machine' is the graveyard of open science.",
    knowledgeCheck: {
      question: "What does `sudo apt update` do?",
      options: [
        { text: "Upgrades every installed package to its latest version.", correct: false, feedback: "That's `sudo apt upgrade`. `update` only refreshes the catalogue." },
        { text: "Refreshes the list of available packages from the repositories.", correct: true, feedback: "Correct. Always run `update` before `install` or `upgrade` to see current versions." },
        { text: "Deletes cached packages to save disk space.", correct: false, feedback: "That's `sudo apt clean`." },
        { text: "Applies security patches to the kernel.", correct: false, feedback: "Requires a subsequent `upgrade` (or `dist-upgrade`) — and often a reboot." },
      ],
    },
    nextStepHint: "OS handled. Next: the terminal, the daily workspace of every professional engineer.",
  },
};
