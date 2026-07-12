import type { LessonBody } from "../schema";

export const module05: Record<string, LessonBody> = {
  "orientation-workspace-browsers": {
    curiosity:
      "You have 43 tabs open. You cannot remember why you opened 30 of them. Your last search was 'how to fix python not found mac'. Is your browser working for you, or you for it?",
    whyThisMatters:
      "The browser is your primary tool as a technical learner. It is your library, your workshop, your notebook. Small habit changes here compound massively over the years you'll be doing this work.",
    intuition: [
      "The browser is not just for reading. It's for research: bookmarking primary sources, working with multiple docs side-by-side, using search precisely.",
      "Great learners keep a small set of trusted primary sources bookmarked (official docs, canonical tutorials) so they don't get funneled into low-quality summaries.",
      "Search is a skill. Learn the operators (`site:`, quotes, `-word`) and you'll spend less time in the wrong articles.",
    ],
    visual: {
      component: "browser-search-lab",
      caption: "Same question, five queries — which returns the best results?",
    },
    explanation: [
      "Bookmarks: pin the official docs for languages and tools you'll use. Python docs, MDN Web Docs, PyTorch docs, TanStack docs — these are ground truth.",
      "Search operators: put phrases in \"quotes\" for exact matches. Use `site:python.org` to search inside one site. Use `-word` to exclude noise.",
      "Read primary sources before summaries. Blog posts and AI answers are downstream of docs; they add helpful framing but also add errors.",
      "Keep a 'reading' bookmarks folder for anything you would come back to. When it fills up, prune it.",
    ],
    experiment: {
      component: "browser-search-lab",
      caption: "Improve five real search queries with operators.",
      instructions:
        "For each vague query, apply operators to sharpen it. Read the feedback to see which change had the biggest effect.",
    },
    reflection: [
      "What's one tool or language whose official docs you should bookmark right now?",
      "What's a topic you consistently search badly? What operator would help?",
    ],
    modernAiConnection:
      "AI answers are only as good as your prompt, and the same is basically true of search. The skill you're building is the same in both places: describe what you want precisely, narrow the source, verify the answer.",
    knowledgeCheck: {
      question:
        "You want to know the correct way to open a file in Python. Which of these searches is most likely to give you an authoritative, current answer?",
      options: [
        {
          text: "how to open file python",
          correct: false,
          feedback: "Very broad; you'll get years of blog posts of varying quality.",
        },
        {
          text: "site:python.org tutorial \"open()\"",
          correct: true,
          feedback:
            "Yes. Narrows to the official docs and exact phrasing. This is how you find ground truth quickly.",
        },
        {
          text: "python file good?",
          correct: false,
          feedback: "The words are too vague and there are no operators to focus the search.",
        },
        {
          text: "read a book about Python",
          correct: false,
          feedback: "Great for depth, wrong for looking up one API.",
        },
      ],
    },
    nextStepHint: "Next: get your files and folders organised so you can find your own work.",
  },

  "orientation-workspace-files-and-cloud": {
    curiosity:
      "'Where did I save that file?' 'Which version is the latest?' 'Did I lose that work when my laptop crashed?' These are the same questions ten years ago and today — with better tools available now and no excuse for the pain.",
    whyThisMatters:
      "You will produce hundreds of files across this curriculum: notes, code, projects, screenshots. If you can't find them, you didn't learn from them. Organisation is a study skill, not admin.",
    intuition: [
      "A working folder tree is like a well-organised kitchen: everything has a place, and you never have to guess.",
      "The best folder structure is one you can navigate blindly in six months.",
      "Cloud sync is a safety net, not a plan. Understand what it saves, what it doesn't, and what happens when two devices disagree.",
    ],
    visual: {
      component: "file-tree-organiser",
      caption: "Design a folder tree for a year of Learn AI study.",
    },
    explanation: [
      "Suggested top-level layout: `~/learn-ai/` with subfolders per stage, per module, per project. Or by year and topic. Consistency matters more than perfection.",
      "Naming: kebab-case filenames without spaces (`neural-net-notes.md`, not `Neural Net Notes.md`). Prefix dates when order matters (`2026-07-12-first-experiment.md`).",
      "Cloud: sync your notes and small assets. Do not sync massive datasets, `node_modules`, or virtual environments — they hammer sync and often break things.",
      "Backups: cloud sync is not backup. A true backup is on separate hardware or provider. For a learner, the free tier of your cloud provider is usually enough for notes and code.",
      "Version control (git) enters seriously in Stage 3. Until then, cloud sync + sensible folders is enough.",
    ],
    experiment: {
      component: "file-tree-organiser",
      caption: "Sort messy files into a clean tree.",
      instructions:
        "Drag files into folders. The tool will critique the structure. Aim for something you'd navigate blindly.",
    },
    reflection: [
      "Open your current downloads folder. When did you last look at anything in it?",
      "What is the *one* naming rule you'll adopt this week?",
    ],
    modernAiConnection:
      "Later in this curriculum you'll manage datasets, model weights, and experiments — each thousands of times larger than a note file. The habits you build now on kilobytes become non-negotiable on gigabytes.",
    knowledgeCheck: {
      question: "Which is the cleanest of these filename choices for a lesson note?",
      options: [
        {
          text: "New Note (final)(3).md",
          correct: false,
          feedback:
            "Spaces, parentheses, ambiguous versioning — a nightmare six months from now.",
        },
        {
          text: "2026-07-12-what-is-ai.md",
          correct: true,
          feedback: "Sortable by date, lowercase, no spaces, describes the content. Excellent.",
        },
        {
          text: "notes.md",
          correct: false,
          feedback: "Fine for one file. Disaster once you have twenty.",
        },
        {
          text: "N O T E S.MD",
          correct: false,
          feedback:
            "Uppercase and spaces both cause pain across tools and shells. Avoid.",
        },
      ],
    },
    nextStepHint:
      "Next: passwords, security, and safe habits — because you're about to start signing up for developer accounts.",
  },

  "orientation-workspace-accounts-security": {
    curiosity:
      "You're about to create your first developer accounts — for a code host, an AI provider, maybe a cloud platform. Some will have API keys attached to real money. What's the *minimum* security posture you should have before you start?",
    whyThisMatters:
      "The most expensive mistakes in tech aren't bugs. They are leaked API keys, reused passwords, and disabled MFA. Fixing the habits after the leak is orders of magnitude harder than adopting them today.",
    intuition: [
      "Never reuse passwords. If any one site leaks, every site with the same password is compromised.",
      "A password manager is the single highest-ROI security tool. It generates strong, unique passwords and remembers them for you.",
      "Multi-factor authentication (MFA) makes a leaked password nearly harmless. Enable it everywhere important.",
      "Treat API keys and access tokens as passwords. Never paste them into public chats, screenshots, or repos.",
    ],
    visual: {
      component: "password-strength",
      caption: "Watch a real-time strength meter — and see why length beats symbols.",
    },
    explanation: [
      "Password manager: pick a reputable one (1Password, Bitwarden, browser-integrated ones). One strong master password, everything else generated.",
      "MFA: use an authenticator app (Google Authenticator, Authy) or a hardware key (YubiKey). SMS-based MFA is better than nothing but is phishable.",
      "Password strength: length beats complexity. A four-random-word passphrase (`correct-horse-battery-staple`) beats `P@ssw0rd!` by orders of magnitude. Your manager will generate ~20-character mixes.",
      "API keys: treat like credit cards. Never commit them to git, never paste into chat, rotate them if you're unsure whether they leaked.",
      "Backups of your MFA recovery codes matter. If you lose your phone, those codes are how you get back in.",
    ],
    experiment: {
      component: "password-strength",
      caption: "Type candidate passwords and see the estimated crack time.",
      instructions:
        "Try several passwords. Notice how a 20-character random passphrase demolishes a 'clever' short one.",
    },
    reflection: [
      "Which one account, if compromised, would cause the most damage in your life?",
      "Do you currently have MFA on your email? If not, that's your action item this week.",
    ],
    modernAiConnection:
      "AI providers issue API keys tied to billing. A leaked OpenAI or Anthropic key can be drained by attackers in hours. The security habits in this lesson are literally what stand between a beginner and a surprise thousand-dollar bill.",
    knowledgeCheck: {
      question: "Which of these single actions gives you the biggest security improvement?",
      options: [
        {
          text: "Change your passwords every 30 days",
          correct: false,
          feedback:
            "Old advice, now considered counterproductive — it pushes people to weaker, patterned passwords.",
        },
        {
          text: "Use a password manager to generate unique long passwords per site, and enable MFA on important accounts",
          correct: true,
          feedback:
            "Yes. This combination handles the two biggest risks: password reuse and stolen credentials.",
        },
        {
          text: "Use one strong password everywhere so you never forget it",
          correct: false,
          feedback:
            "A single leak anywhere becomes a leak everywhere. This is the classic anti-pattern.",
        },
        {
          text: "Write your passwords in a text file on your desktop",
          correct: false,
          feedback:
            "A plain-text file is a jackpot for malware. Use a password manager instead.",
        },
      ],
    },
    nextStepHint: "Last workspace lesson: a preview of the developer tools you'll meet next.",
  },

  "orientation-workspace-tools-preview": {
    curiosity:
      "Terminals, editors, notebooks, Python, git, PyTorch. If those words look like a foreign menu, you're exactly where this lesson wants you. Let's put a face to each name so they stop being intimidating.",
    whyThisMatters:
      "By the end of this curriculum you'll use all of these tools daily. Recognising them now — knowing what each is for, roughly — makes the first lesson of each stage far less overwhelming.",
    intuition: [
      "Every developer tool solves a specific problem. If you know the problem, the tool stops feeling arbitrary.",
      "You do not need to learn them now. You need to recognise them, so when they appear in later stages, you already know their shape.",
    ],
    visual: {
      component: "toolchain-map",
      caption: "The Learn AI toolchain, drawn as a map with stops.",
    },
    explanation: [
      "Terminal / shell: a text-based way to command your computer. Faster than clicking, and required for most developer tools. You'll meet it in Stage 1.",
      "Text editor / IDE (VS Code, Cursor): where you write code. Modern editors know about your language, autocomplete, and often integrate an AI assistant.",
      "Python: the language you'll write in for most of this curriculum. Simple, readable, dominant in AI.",
      "Notebooks (Jupyter): a Python-in-a-web-page style where you write and run tiny snippets alongside notes and charts. Ideal for exploring ideas.",
      "Version control (git) + a host (GitHub): keeps a full history of your code and lets you back it up and share it.",
      "PyTorch / other libraries: pre-built code that others wrote for hard problems. You will use libraries constantly. Learning to read their docs is a Stage 4 skill.",
      "AI tools (assistants, agents): you already met these. They live *inside* editors more and more.",
    ],
    experiment: {
      component: "toolchain-map",
      caption: "Match each tool to the problem it solves.",
      instructions:
        "For each tool, click the problem it primarily solves. The map fills in as you go.",
    },
    reflection: [
      "Which tool are you most curious about?",
      "Which tool has intimidated you in the past — and does it feel less scary now that you know its job?",
    ],
    modernAiConnection:
      "Modern AI engineering is exactly this toolchain — terminal + editor + Python + git + libraries + AI assistants — used together. You are not learning fifty separate things. You are learning one workflow that gets deeper as the stages go.",
    knowledgeCheck: {
      question: "Which of these is *most* accurately described as 'a language you write instructions in'?",
      options: [
        {
          text: "The terminal",
          correct: false,
          feedback:
            "The terminal is a place you type commands into — not a language itself.",
        },
        {
          text: "Python",
          correct: true,
          feedback:
            "Yes. Python is a programming language. You'll write it, and something will translate and run it.",
        },
        {
          text: "Git",
          correct: false,
          feedback: "Git is a version-control tool, not a language you write programs in.",
        },
        {
          text: "PyTorch",
          correct: false,
          feedback:
            "PyTorch is a Python library — pre-written code you call from your Python programs.",
        },
      ],
    },
    nextStepHint:
      "Everything you need to open the door. Next module: your first structured conversation with a modern AI system.",
  },
};
