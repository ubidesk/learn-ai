import type { LessonBody } from "../schema";

export const module05: Record<string, LessonBody> = {
  "computers-shell-basics": {
    curiosity:
      "You open a terminal. A blinking cursor. A little `$`. Your machine, which just watched a movie for you and streamed a chat window, is now waiting silently for you to type. What is this thing, and why do professionals live in it?",
    whyThisMatters:
      "The shell is the fastest way to control a computer. Every professional-quality workflow — starting servers, running training jobs, deploying code, debugging in production — passes through it. Fluency here doubles your effective speed.",
    intuition: [
      "The shell is a program that reads commands you type and runs them. When it prints `$ `, it's saying 'ready for the next one'.",
      "Every command is one program. You compose them by piping one into another.",
      "The prompt tells you who you are, where you are, and (via the `$` or `#`) whether you have superuser rights.",
    ],
    visual: { component: "shell-prompt", caption: "Anatomy of a shell prompt." },
    explanation: [
      "A shell (bash, zsh, fish) is itself just another program. It reads a line, splits it into a command + arguments, runs the command as a new process, prints the output, and prompts again.",
      "You've been talking to shells your whole computer life — every time you double-clicked an icon, a shell-like thing ran under the hood.",
      "Small commands compose into powerful workflows: `ls | wc -l` counts files, `grep TODO *.py | wc -l` counts TODOs across a codebase.",
      "Getting stuck? `--help` on almost any command shows a summary. `man command` opens the full manual. `q` exits it.",
    ],
    experiment: {
      component: "shell-prompt",
      caption: "Read the prompt piece by piece.",
      instructions:
        "Match each part of the prompt to its role. In a real terminal, that same information tells you at a glance which server you're on, which folder you're in, and whether you're doing something dangerous with sudo.",
    },
    reflection: [
      "You see a prompt ending in `#` instead of `$`. Why should that make you slow down?",
      "Name one everyday task you'd rather do in the shell than through a GUI, and one you'd rather leave to the GUI.",
    ],
    modernAiConnection:
      "Almost every real AI system is deployed by shell commands wrapped in a script. `docker build`, `kubectl apply`, `python train.py --config ...` — all shell. Even Jupyter notebooks are launched from one.",
    knowledgeCheck: {
      question: "In `alice@laptop:~/projects$`, what does the tilde (`~`) mean?",
      options: [
        { text: "The last visited directory.", correct: false, feedback: "That's `-` (as in `cd -`), not `~`." },
        { text: "The root of the filesystem.", correct: false, feedback: "The root is `/`." },
        { text: "The user's home directory.", correct: true, feedback: "Correct. `~/projects` expands to `/home/alice/projects` (or `/Users/alice/projects` on macOS)." },
        { text: "A temporary folder.", correct: false, feedback: "That's `/tmp`." },
      ],
    },
    nextStepHint: "You can read the prompt. Next: how to move around and manipulate files without the mouse.",
  },

  "computers-shell-navigation": {
    curiosity:
      "You've clicked through folders in Finder or Explorer for years. Doing the same thing in a terminal feels alien for about ten minutes and then feels ten times faster forever. What are you actually learning?",
    whyThisMatters:
      "Every professional workflow starts with 'change directory into the project'. Fluent navigation is the difference between typing four commands to do something and clicking through six windows.",
    intuition: [
      "You are always 'somewhere' in the filesystem — the current working directory (cwd). Commands act relative to it unless you give an absolute path.",
      "A handful of commands cover 95% of what you need: `pwd`, `ls`, `cd`, `mkdir`, `mv`, `cp`, `rm`, `cat`.",
      "Every command has options that modify behaviour (`ls -la` shows hidden files with details).",
    ],
    visual: { component: "shell-navigator", caption: "A safe in-memory practice shell." },
    explanation: [
      "`pwd` prints the current directory. `ls` lists what's in it. `cd path` moves. `cd ..` moves up; `cd ~` goes home; `cd -` returns to the previous directory.",
      "Files: `cat file` dumps contents; `less file` scrolls interactively (`q` to quit); `head`/`tail` show the ends. `mv old new` renames or moves; `cp` copies; `rm` deletes.",
      "Directories: `mkdir new-dir`; `mkdir -p a/b/c` creates missing parents. `rmdir` removes empty directories; `rm -r` removes non-empty ones (dangerous — no undo).",
      "Wildcards (globbing): `ls *.py` matches every Python file in the current directory. `**` (with globstar) matches recursively.",
    ],
    experiment: {
      component: "shell-navigator",
      caption: "Practice safely.",
      instructions:
        "Try: `pwd`, `ls`, `cd projects`, `ls`, `cd ..`, `cat notes.md`, `cat ../../etc/hosts`. Everything happens in memory; there's nothing you can break here.",
    },
    reflection: [
      "Why is `rm -rf /` a joke that keeps happening for real? What safety habit could prevent it?",
      "Design a personal folder structure for the rest of this course: where would notes, code, and stage projects live?",
    ],
    modernAiConnection:
      "Every reproducible ML experiment starts by cloning a repo, changing into its directory, and running one command. The cleanliness of your local folder structure directly affects how hard it is to switch between experiments and how confident you can be about which version of what produced which result.",
    knowledgeCheck: {
      question: "You are in `/home/alice/projects`. What does `cd ../notes` do?",
      options: [
        { text: "Moves to `/home/alice/projects/notes`.", correct: false, feedback: "That would be `cd notes` (no `..`). `..` goes up first." },
        { text: "Moves to `/home/alice/notes`.", correct: true, feedback: "Correct. `..` moves up to `/home/alice`, then `notes` moves down into it." },
        { text: "Moves to `/notes`.", correct: false, feedback: "That would need an absolute path (`cd /notes`), and would fail if the folder doesn't exist." },
        { text: "Errors — `..` is not a real directory.", correct: false, feedback: "`..` is a real (special) entry in every directory that points to its parent." },
      ],
    },
    nextStepHint: "You can move around. Next: composing tiny commands into pipelines that solve real problems.",
  },

  "computers-shell-pipes-redirection": {
    curiosity:
      "You have a 10 GB log file. You want the ten most frequent error lines. In Python, that's fifteen lines and needs a moment of thought. In the shell, it's one line. How?",
    whyThisMatters:
      "The Unix philosophy — small tools, connected by pipes — is one of the most durable ideas in software. Once you internalise it, whole categories of tasks disappear into two lines.",
    intuition: [
      "Every command has three streams: standard input, standard output, standard error.",
      "A pipe (`|`) sends one command's output into the next command's input.",
      "Redirects (`>`, `>>`, `<`) send those streams to and from files.",
    ],
    visual: { component: "pipe-composer", caption: "Compose a real pipeline stage by stage." },
    explanation: [
      "Pipes glue commands: `cat access.log | grep ERROR | wc -l` counts error lines. Each stage sees only what the previous one produced.",
      "Redirects go to files: `command > out.txt` overwrites, `>> out.txt` appends, `< in.txt` uses a file as input. `2>` redirects stderr; `2>&1` merges stderr into stdout.",
      "This composition is what makes small tools powerful: `sort | uniq -c` counts duplicates, `sort -rn | head -n 10` gets the top ten.",
      "Pipes are streaming — a huge log doesn't need to fit in RAM. Each stage processes lines as they arrive.",
    ],
    experiment: {
      component: "pipe-composer",
      caption: "Build the classic 'top error lines' pipeline.",
      instructions:
        "Click stages in order: read the file, filter to errors, sort, count duplicates, sort by count descending, take the top few. You've just done in six clicks what would take a paragraph of Python.",
    },
    reflection: [
      "Give one advantage of pipes over writing a Python script for the same task, and one advantage of Python.",
      "Why does `grep ERROR huge.log > errors.txt` finish faster than opening `huge.log` in a text editor?",
    ],
    modernAiConnection:
      "Preparing a dataset almost always starts with a pipeline: filter, dedupe, count, sample. Doing this in the shell first, before touching pandas, is often the fastest way to sanity-check what you're about to feed a model.",
    knowledgeCheck: {
      question: "What does `command > out.txt 2>&1` do?",
      options: [
        { text: "Writes stdout to out.txt and stderr to the screen.", correct: false, feedback: "The `2>&1` explicitly merges stderr into stdout, which is now the file." },
        { text: "Writes both stdout and stderr to out.txt.", correct: true, feedback: "Correct. `> out.txt` sends stdout to the file; `2>&1` says 'send stderr to wherever stdout is going'." },
        { text: "Writes stderr to out.txt and stdout to the screen.", correct: false, feedback: "That would be `2> out.txt` alone." },
        { text: "Nothing — it's a syntax error.", correct: false, feedback: "It's a standard idiom. It works in bash, zsh, and sh." },
      ],
    },
    nextStepHint: "You can compose pipelines. Next: the text-processing tools that make each stage powerful.",
  },

  "computers-shell-text-tools": {
    curiosity:
      "A senior engineer joins your screenshare, types twenty characters, and answers a question that had you stuck for an hour. She used one command you didn't know. Which one — and why is it so common?",
    whyThisMatters:
      "grep, sed, and awk are ubiquitous, tiny, and quietly do most of the text munging in every real Unix pipeline. Being able to reach for them turns text tasks from 'write a script' into 'type a line'.",
    intuition: [
      "grep filters lines that match a pattern.",
      "sed edits lines in a stream — mostly search-and-replace.",
      "awk treats each line as fields (columns) and lets you print or compute on them.",
    ],
    visual: { component: "text-tools", caption: "See each tool applied to the same log." },
    explanation: [
      "`grep 'ERROR'` keeps lines containing ERROR. Flags: `-i` case-insensitive; `-v` invert; `-r` recursive; `-n` show line numbers; `-E` extended regex; `-c` count matches.",
      "`sed 's/old/new/g'` replaces old with new on every line, globally per line. `sed -i` edits in place (dangerous — keep backups).",
      "`awk '{print $2, $4}'` prints the 2nd and 4th whitespace-separated fields. `awk -F,` uses comma as the separator (useful for CSVs).",
      "Modern alternatives (`rg` for ripgrep, `sd` instead of sed) are faster and friendlier, but every server you'll ever SSH into has the originals.",
    ],
    experiment: {
      component: "text-tools",
      caption: "Try grep, sed, and awk on a small log.",
      instructions:
        "Flip between the three. Notice: grep chooses lines, sed changes lines, awk picks columns. That triad covers most of what you'll ever need to do with text on the command line.",
    },
    reflection: [
      "Which of these would you reach for to count how many times a word appears in a large log?",
      "Someone says 'just use Python for that'. When are they right, and when are they wrong?",
    ],
    modernAiConnection:
      "Log analysis in production AI systems relies on exactly this triad plus modern jq-for-JSON tooling. When your inference service is 500ing, the first useful thing is often a one-liner: `grep 500 access.log | awk '{print $7}' | sort | uniq -c | sort -rn`.",
    knowledgeCheck: {
      question: "You want lines that DO NOT contain the word 'DEBUG'. Which command?",
      options: [
        { text: "`grep DEBUG`.", correct: false, feedback: "That keeps DEBUG lines — the opposite." },
        { text: "`grep -v DEBUG`.", correct: true, feedback: "Correct. `-v` inverts the match." },
        { text: "`sed 's/DEBUG//g'`.", correct: false, feedback: "That would remove the word 'DEBUG' but keep the (now edited) lines." },
        { text: "`awk '$1 != DEBUG'`.", correct: false, feedback: "Close in spirit, but awk needs quoted string comparisons and this checks only the first field." },
      ],
    },
    nextStepHint: "You can wield text tools. Next: bundling commands into repeatable scripts.",
  },

  "computers-shell-scripting": {
    curiosity:
      "You've typed the same three commands every morning for a week to boot up your project. There must be a better way — and there is. It's called a script.",
    whyThisMatters:
      "The instant you write your first script, you've stepped from user to author. Anything you can type, you can automate. Scripts are the connective tissue of every real ML pipeline.",
    intuition: [
      "A shell script is a text file containing commands. Give it a shebang line and executable permissions, and running it runs the commands in order.",
      "Add variables and conditionals and you have a small program.",
      "The professional version adds error handling: fail loudly on the first mistake instead of quietly continuing.",
    ],
    visual: { component: "shell-script", caption: "Assemble a small, safe script." },
    explanation: [
      "Every script starts with a shebang: `#!/usr/bin/env bash`. That line tells the OS which interpreter to use.",
      "`set -euo pipefail` is the professional's opener: `-e` exits on any error, `-u` treats undefined variables as errors, `-o pipefail` makes a pipeline fail if any stage fails.",
      "Variables and arguments: `name=$1` grabs the first argument; `${name:-default}` uses a default if unset; `[ -f \"$file\" ]` tests if a file exists.",
      "Give scripts descriptive names, put them in one folder on your `PATH`, and comment the tricky parts. Future you will thank present you.",
    ],
    experiment: {
      component: "shell-script",
      caption: "Compose a safe, useful script.",
      instructions:
        "Click each line in order. Notice: the shebang tells the OS how to run it, `set -euo pipefail` prevents silent failures, the default value keeps it usable without arguments, the file check gives a clear error, and the actual work is one line.",
    },
    reflection: [
      "Turn one repetitive command you already type into a two-line script. What did you name it?",
      "Why is `set -e` so widely recommended, and when might you disable it deliberately?",
    ],
    modernAiConnection:
      "Every experiment tracking system (Weights & Biases, MLflow, etc.) starts life as someone getting tired of typing the same command. Every containerised training run is a shell script inside a Docker container, invoked by another script.",
    knowledgeCheck: {
      question: "Why do professional Bash scripts start with `set -euo pipefail`?",
      options: [
        { text: "It's stylistic — cosmetically expected.", correct: false, feedback: "It's functional. Each flag changes behaviour." },
        { text: "It makes the script fail fast on errors, undefined vars, and broken pipelines.", correct: true, feedback: "Correct. Without it, scripts often silently continue past failures and produce corrupt output." },
        { text: "It enables coloured output.", correct: false, feedback: "That's unrelated." },
        { text: "It changes the interpreter to a stricter shell.", correct: false, feedback: "The interpreter is chosen by the shebang; `set` only tweaks the current shell's options." },
      ],
    },
    nextStepHint: "You can automate your local machine. Next: how machines find and talk to each other across the network.",
  },
};
