import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "45–75 min";

export const stage: Stage = {
  id: "computers",
  order: 1,
  title: "Computers, Operating Systems, Networks, and the Web",
  purpose:
    "Give the learner a working mental model of what a computer is under the hood: how hardware, operating systems, filesystems, networks, and the web fit together — enough to reason about performance, security, and where programs live.",
  startingLevel:
    "You have completed Orientation. You can use a browser and files, but you do not know what an OS does, what a shell is, or how packets move across the internet.",
  prerequisites: ["orientation"],
  project: {
    title: "Developer Machine Notebook",
    description:
      "Write a short technical notebook describing your own machine: its OS, filesystem layout, network configuration, and a diagram of what happens when you load a page. Include a fully working development environment (shell, editor, git, Python) that you set up yourself.",
  },
  exitCriteria: [
    "Navigate a real filesystem confidently from a terminal.",
    "Explain what an operating system does and how processes, memory, and files relate.",
    "Describe how the internet delivers a web page from a server to your screen.",
    "Distinguish HTTP, HTTPS, DNS, and TCP/IP at a conceptual level.",
    "Have a working, reproducible developer environment on your machine.",
  ],
  status: S,
  modules: [
    {
      id: "computers-hardware",
      order: 1,
      title: "Hardware and How Programs Run",
      summary: "How CPU, memory, storage, and I/O cooperate to execute programs.",
      lessons: [
        { id: "computers-hardware-cpu-memory", order: 1, title: "CPU, Memory, and Storage", outcome: "Explain the roles of CPU, RAM, and disk and why the distinction matters for performance.", effort: eff, status: S },
        { id: "computers-hardware-binary", order: 2, title: "Binary, Bytes, and Encoding", outcome: "Read binary and hexadecimal and explain how text, numbers, and images become bytes.", effort: eff, status: S },
        { id: "computers-hardware-processes", order: 3, title: "Processes and Threads", outcome: "Describe what happens when a program starts, and how processes share the machine.", effort: eff, status: S },
        { id: "computers-hardware-perf-intuition", order: 4, title: "Performance Intuition: Latency vs Throughput", outcome: "Give order-of-magnitude estimates for common operations (cache, RAM, disk, network).", effort: eff, status: S },
      ],
    },
    {
      id: "computers-os-and-shell",
      order: 2,
      title: "Operating Systems and the Shell",
      summary: "The OS as manager of resources, and the shell as the professional's interface to it.",
      lessons: [
        { id: "computers-os-what-os-does", order: 1, title: "What an Operating System Does", outcome: "Explain the OS as a resource manager and abstraction layer.", effort: eff, status: S },
        { id: "computers-os-files-and-paths", order: 2, title: "Files, Folders, and Paths", outcome: "Use absolute and relative paths correctly and understand file permissions.", effort: eff, status: S },
        { id: "computers-os-shell-basics", order: 3, title: "The Shell: Your Command-Line Interface", outcome: "Navigate, inspect, and manipulate files from a shell (bash/zsh) without fear.", effort: eff, status: S },
        { id: "computers-os-pipes-and-redirection", order: 4, title: "Pipes, Redirection, and Composition", outcome: "Compose small tools with pipes and redirection to solve real tasks.", effort: eff, status: S },
        { id: "computers-os-processes-jobs", order: 5, title: "Processes, Jobs, and Signals", outcome: "Start, inspect, and stop processes; understand foreground/background jobs.", effort: eff, status: S },
      ],
    },
    {
      id: "computers-networking-and-web",
      order: 3,
      title: "Networks and the Web",
      summary: "How the internet actually moves bytes, and what the web is built on top of.",
      lessons: [
        { id: "computers-networking-tcp-ip", order: 1, title: "IP, TCP, and Packets", outcome: "Explain how machines find each other and reliably exchange data.", effort: eff, status: S },
        { id: "computers-networking-dns", order: 2, title: "DNS: Names to Addresses", outcome: "Describe how domain names are resolved and cached.", effort: eff, status: S },
        { id: "computers-networking-http", order: 3, title: "HTTP and HTTPS", outcome: "Read HTTP requests and responses and describe the role of TLS.", effort: eff, status: S },
        { id: "computers-networking-web-model", order: 4, title: "How the Web Actually Works", outcome: "Trace end-to-end what happens when you type a URL and press enter.", effort: eff, status: S },
        { id: "computers-networking-apis", order: 5, title: "APIs: Programs Talking to Programs", outcome: "Explain what an API is and why REST/JSON dominates today.", effort: eff, status: S },
      ],
    },
    {
      id: "computers-dev-setup",
      order: 4,
      title: "Setting Up a Professional Dev Environment",
      summary: "A stable, reproducible machine setup you will use for the rest of the curriculum.",
      lessons: [
        { id: "computers-dev-editors", order: 1, title: "Editors and IDEs", outcome: "Configure a modern editor (e.g. VS Code) with the extensions you actually need.", effort: eff, status: S },
        { id: "computers-dev-python-install", order: 2, title: "Installing Python Correctly", outcome: "Install and manage Python without breaking your OS Python.", effort: eff, status: S },
        { id: "computers-dev-virtual-envs", order: 3, title: "Virtual Environments and Package Managers", outcome: "Use virtual environments and pip/uv to isolate project dependencies.", effort: eff, status: S },
        { id: "computers-dev-git-basics", order: 4, title: "Version Control Basics with Git", outcome: "Track changes, undo mistakes, and share code with git.", effort: eff, status: S },
        { id: "computers-dev-safety", order: 5, title: "Safety, Backups, and Not Losing Your Work", outcome: "Adopt habits that make your dev machine hard to break and easy to recover.", effort: eff, status: S },
      ],
    },
  ],
};
