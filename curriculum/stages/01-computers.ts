import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "computers",
  order: 1,
  title: "Computers, Operating Systems, Networks, and the Web",
  purpose:
    "Give a working mental model of what a computer is under the hood: how information is represented, how hardware and operating systems cooperate, how the shell works, and how networks and the web deliver software to your screen.",
  startingLevel:
    "You have completed Orientation. You can use a browser and files, but you do not know what an OS does, what a shell is, or how packets move across the internet.",
  prerequisites: ["orientation"],
  project: {
    title: "Developer Machine Notebook",
    description:
      "Write a short technical notebook describing your own machine — OS, filesystem layout, network configuration, a diagram of what happens when you load a page — and finish with a working shell, editor, git, and Python setup you built yourself.",
  },
  exitCriteria: [
    "Explain how bits, bytes, and Unicode represent numbers, text, images, and audio.",
    "Describe how CPU, memory, storage, and I/O cooperate to execute programs.",
    "Navigate a real filesystem and compose small pipelines from a shell.",
    "Describe how the internet delivers a web page from server to screen.",
    "Distinguish IaaS, PaaS, and SaaS, and reason about cost and latency in the cloud.",
  ],
  status: S,
  modules: [
    {
      id: "computers-info-representation",
      order: 1,
      title: "Information Representation",
      summary: "How bits and bytes encode numbers, text, images, and audio — the substrate every program manipulates.",
      lessons: [
        L("computers-info-representation-binary-bytes", 1, "Bits, Bytes, and Hex", "Read binary and hexadecimal fluently and explain why bytes are the unit of storage."),
        L("computers-info-representation-numbers", 2, "Encoding Numbers", "Explain unsigned, signed, and floating-point number encodings at a conceptual level."),
        L("computers-info-representation-text-unicode", 3, "Text and Unicode", "Distinguish characters, code points, and encodings, and explain why UTF-8 won."),
        L("computers-info-representation-images-audio", 4, "Images, Audio, and File Formats", "Describe how pixels, samples, and compression turn media into bytes."),
      ],
    },
    {
      id: "computers-hardware",
      order: 2,
      title: "Computer Hardware",
      summary: "The physical machine — CPU, memory hierarchy, storage, and buses — and the performance intuition it forces.",
      lessons: [
        L("computers-hardware-cpu", 1, "CPU, Clock, and Instruction Cycle", "Explain what the CPU does in each cycle and why clock speed alone does not predict speed."),
        L("computers-hardware-memory-hierarchy", 2, "The Memory Hierarchy", "Rank registers, caches, RAM, and disk by speed and size and reason about locality."),
        L("computers-hardware-storage", 3, "Storage: Disks, SSDs, and Beyond", "Distinguish storage tiers by speed, durability, and cost, and pick appropriately."),
        L("computers-hardware-io-buses", 4, "I/O, Buses, and Peripherals", "Describe how devices attach to the CPU and why I/O is often the real bottleneck."),
      ],
    },
    {
      id: "computers-programs-execution",
      order: 3,
      title: "Programs and Execution",
      summary: "What actually happens between the source code you write and the CPU executing instructions.",
      lessons: [
        L("computers-programs-execution-source-to-machine", 1, "From Source to Machine Code", "Explain the path from human-readable source to instructions the CPU executes."),
        L("computers-programs-execution-compilers-interpreters", 2, "Compilers, Interpreters, and VMs", "Distinguish compiled, interpreted, and virtual-machine languages with concrete examples."),
        L("computers-programs-execution-processes-memory", 3, "Processes and Their Memory", "Describe stack, heap, and virtual memory and why isolation between processes matters."),
        L("computers-programs-execution-threads", 4, "Threads, Cores, and Parallelism", "Explain the difference between concurrency and parallelism and where each helps."),
      ],
    },
    {
      id: "computers-os",
      order: 4,
      title: "Operating Systems",
      summary: "The OS as manager of processes, memory, files, and devices, and the abstractions it gives you to work with.",
      lessons: [
        L("computers-os-what-os-does", 1, "What an Operating System Does", "Explain the OS as a resource manager and abstraction layer."),
        L("computers-os-filesystems-permissions", 2, "Filesystems, Paths, and Permissions", "Use absolute and relative paths correctly and reason about read/write/execute permissions."),
        L("computers-os-processes-jobs-signals", 3, "Processes, Jobs, and Signals", "Start, inspect, and stop processes; understand foreground/background jobs and signals."),
        L("computers-os-virtual-memory", 4, "Virtual Memory and Swapping", "Describe virtual memory, paging, and what happens when a machine runs out of RAM."),
        L("computers-os-package-managers", 5, "System Package Managers", "Install and update system software with a package manager without breaking your OS."),
      ],
    },
    {
      id: "computers-shell",
      order: 5,
      title: "Terminal and Shell Foundations",
      summary: "The professional's interface to the machine — moving around, composing tools, and beginning to script.",
      lessons: [
        L("computers-shell-basics", 1, "Your First Shell Session", "Open a terminal, understand the prompt, and read shell output confidently."),
        L("computers-shell-navigation", 2, "Navigating and Manipulating Files", "Move, copy, rename, and inspect files without fear."),
        L("computers-shell-pipes-redirection", 3, "Pipes and Redirection", "Compose small tools with pipes and redirection to solve real tasks."),
        L("computers-shell-text-tools", 4, "Text Tools: grep, sed, awk", "Extract, filter, and transform text from the command line."),
        L("computers-shell-scripting", 5, "First Steps in Shell Scripting", "Write a short shell script that automates a repeatable task."),
      ],
    },
    {
      id: "computers-networking",
      order: 6,
      title: "Networking Foundations",
      summary: "How machines find and talk to each other reliably across the internet.",
      lessons: [
        L("computers-networking-ip-packets", 1, "IP Addresses and Packets", "Explain how machines are addressed and how data moves as packets."),
        L("computers-networking-tcp-udp", 2, "TCP vs UDP", "Distinguish reliable and unreliable transports and pick the right one for a task."),
        L("computers-networking-dns", 3, "DNS: Names to Addresses", "Describe how domain names are resolved and cached."),
        L("computers-networking-latency-throughput", 4, "Latency, Throughput, and Bandwidth", "Estimate order-of-magnitude timings across cache, RAM, disk, LAN, and internet."),
      ],
    },
    {
      id: "computers-web",
      order: 7,
      title: "How the Web Works",
      summary: "HTTP, TLS, URLs, and browsers — the layer most AI products live on.",
      lessons: [
        L("computers-web-http-basics", 1, "HTTP Requests and Responses", "Read HTTP methods, status codes, and headers and explain what each does."),
        L("computers-web-https-tls", 2, "HTTPS and TLS", "Explain what TLS protects, what it does not, and why HTTPS is the default."),
        L("computers-web-urls-requests", 3, "URLs, Query Strings, and Requests", "Deconstruct a URL and describe how servers route requests."),
        L("computers-web-browsers-rendering", 4, "Browsers, HTML, and Rendering", "Trace end-to-end what happens when you type a URL and press enter."),
      ],
    },
    {
      id: "computers-cloud",
      order: 8,
      title: "Cloud Computing Foundations",
      summary: "The cloud vocabulary you need before you can deploy anything — services, regions, cost, and limits.",
      lessons: [
        L("computers-cloud-what-is-cloud", 1, "What the Cloud Actually Is", "Explain the cloud as someone else's computers, with billing and shared responsibility."),
        L("computers-cloud-iaas-paas-saas", 2, "IaaS, PaaS, and SaaS", "Place common services (VMs, managed DBs, hosted APIs) into the correct layer."),
        L("computers-cloud-regions-latency", 3, "Regions, Zones, and Latency", "Reason about geography, availability zones, and why they affect user experience."),
        L("computers-cloud-serverless-containers", 4, "Serverless and Containers, First Look", "Preview containers and serverless functions as deployment units for AI systems."),
        L("computers-cloud-cost-limits", 5, "Cloud Cost and Rate Limits", "Read a cloud bill line-item and anticipate rate limits and quotas."),
      ],
    },
  ],
};
