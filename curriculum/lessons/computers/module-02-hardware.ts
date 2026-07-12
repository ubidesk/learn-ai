import type { LessonBody } from "../schema";

export const module02: Record<string, LessonBody> = {
  "computers-hardware-cpu": {
    curiosity:
      "Your phone's CPU runs at ~3 GHz — three billion cycles per second, per core. In the time it took you to blink, it executed roughly a billion instructions. What is it actually doing that fast?",
    whyThisMatters:
      "A working mental model of the CPU tells you why some code is a thousand times faster than other code that looks similar. It's the foundation for everything from tuning a Python loop to understanding GPU acceleration in ML.",
    intuition: [
      "A CPU is a very fast, very small factory: it reads an instruction, does one small thing, writes the result, then reads the next instruction.",
      "Clock speed is how often it can start a new step. But how much work it gets done per step depends on the design — modern CPUs run many instructions overlapping (pipelining) and in parallel (superscalar).",
      "'The CPU' is really billions of tiny transistors arranged into a few tightly-choreographed dance moves: fetch, decode, execute, writeback — repeated forever.",
    ],
    visual: { component: "cpu-cycle", caption: "One instruction, four stages, billions of times per second." },
    explanation: [
      "The CPU's job is to execute machine instructions from memory. Each instruction is a few bytes: an opcode plus operands (registers, addresses, constants).",
      "The instruction cycle is Fetch → Decode → Execute → Writeback. On modern chips, five to fifteen of these stages run in parallel via pipelining — while one instruction is executing, the next is being decoded and the one after is being fetched.",
      "Cores are independent copies of this machinery. A 'ten-core' CPU is essentially ten factories on the same chip, sharing caches and memory.",
      "Clock speed is not the whole story. Instructions-per-cycle (IPC), cache size, memory bandwidth, and branch prediction all matter as much or more. A 2 GHz Apple Silicon core beats a 3 GHz older Intel core on most workloads.",
    ],
    experiment: {
      component: "cpu-cycle",
      caption: "Walk through the four stages.",
      instructions:
        "Click Next repeatedly. Imagine this happening three billion times per second on each of eight cores. Now imagine one loaded webpage kicks off tens of billions of these cycles. That is why battery life exists.",
    },
    reflection: [
      "A friend says 'my new laptop has a slower clock speed but is faster than the old one.' In your own words, how is that possible?",
      "If clock speeds have barely moved since 2005, why do computers keep getting faster year over year?",
    ],
    modernAiConnection:
      "Training a modern language model is fundamentally quadrillions of these tiny instructions, dispatched not to eight CPU cores but to thousands of GPU cores or specialised matrix-multiply units. The fetch/decode/execute loop is still there; it just runs everywhere at once, and the bottleneck moves from arithmetic to feeding the machinery with data.",
    knowledgeCheck: {
      question: "Which single number best predicts how fast a CPU will run a real workload?",
      options: [
        { text: "The clock speed in GHz.", correct: false, feedback: "Necessary but nowhere near sufficient. Two chips at the same GHz can differ by 3× on real code." },
        { text: "It depends on the workload; no single number captures it.", correct: true, feedback: "Right. Instructions-per-cycle, cache size, memory bandwidth, and even the workload's memory access pattern all matter." },
        { text: "The number of cores.", correct: false, feedback: "Cores help only if the workload can actually be split. Many workloads run on one core." },
        { text: "The total RAM.", correct: false, feedback: "RAM matters, but it's not the CPU. A slow CPU with lots of RAM is still slow." },
      ],
    },
    nextStepHint: "The CPU is fast, but it's fed by memory. Next: why memory is a hierarchy, not one big pool.",
  },

  "computers-hardware-memory-hierarchy": {
    curiosity:
      "Reading a value from your CPU's L1 cache takes about a nanosecond. Reading it from a spinning hard disk takes about ten milliseconds — ten million times slower. Both look like 'memory' to your program. Where did the slowdown come from?",
    whyThisMatters:
      "Every performance problem in real software is somewhere on this ladder. Whether you're loading a page, training a model, or debugging a slow query, the answer usually involves 'the data is farther away than the code assumes'.",
    intuition: [
      "Think of a chef: things on the cutting board are instant, things in the fridge take a moment, things in the pantry take longer, things at the shop take a trip.",
      "The CPU has the cutting board (registers), a tiny fridge (L1 cache), a bigger fridge (L2/L3), a pantry (RAM), and a shop (disk).",
      "Small and fast is expensive; large and slow is cheap. Every layer is a trade-off, chosen so the whole system feels fast on average.",
    ],
    visual: { component: "memory-hierarchy", caption: "The full ladder from registers to the network, ordered by cost of a single access." },
    explanation: [
      "Registers live inside the CPU core. Access takes a fraction of a nanosecond. There are only tens of them.",
      "L1/L2/L3 caches sit on the CPU chip. L1 is per-core and tiny (~64 KB); L3 is shared and larger (~30 MB). Together they fetch data into the CPU before it's needed.",
      "RAM (dynamic RAM chips on your motherboard) is ~100× slower than L1 but tens of gigabytes big. Most 'main memory' means RAM.",
      "SSDs are 1000–10,000× slower than RAM but persistent. Hard disks are another 10–100× slower still. Network storage, in another building, is often faster than a local hard disk (!) but never faster than local RAM.",
    ],
    experiment: {
      component: "memory-hierarchy",
      caption: "Compare access costs on a log scale.",
      instructions:
        "Look at the widths — each rung uses log scale so you can see all seven orders of magnitude. If a function that fits in cache takes 1 ms, the same function reading from disk might take 15 minutes.",
    },
    reflection: [
      "Your ML training loop suddenly slows 10×. Where on the memory hierarchy would you look first? Why?",
      "Why do database engineers care so much about 'index size fits in RAM'?",
    ],
    modernAiConnection:
      "Training a large model is memory-bound before it is compute-bound. A big GPU can do 400 trillion floating-point ops per second, but only if the operands are already in on-chip memory. Half the engineering in modern ML is choreography: getting weights and activations to the compute units in time. FlashAttention, gradient checkpointing, and tensor-parallelism are all elaborate answers to this hierarchy.",
    knowledgeCheck: {
      question: "Roughly how much slower is a random read from a spinning hard disk than from L1 cache?",
      options: [
        { text: "About 10× slower.", correct: false, feedback: "Wildly optimistic. L1 to HDD spans about seven orders of magnitude." },
        { text: "About 1,000× slower.", correct: false, feedback: "Closer to RAM vs L1. HDD is worse." },
        { text: "About 10 million times slower.", correct: true, feedback: "Yes — nanoseconds vs milliseconds is a factor of 10⁷. This is why 'the data doesn't fit in RAM' is a career-shaping constraint." },
        { text: "About the same, thanks to prefetching.", correct: false, feedback: "Prefetching helps sequential access patterns. Random reads from disk are still catastrophically slow." },
      ],
    },
    nextStepHint: "You know memory is a ladder. Next: the storage rungs specifically — what to keep on which medium.",
  },

  "computers-hardware-storage": {
    curiosity:
      "A modern NVMe SSD is 100× faster than the SATA SSD you had five years ago, which was 100× faster than the hard disk before it. Why did we ever leave hard disks — and why do data centres still buy them by the truckload?",
    whyThisMatters:
      "Choosing the wrong storage tier is one of the top ways to burn money in the cloud, and one of the top ways to make a training pipeline crawl. Understanding the tiers turns a mystery bill into an obvious optimisation.",
    intuition: [
      "Storage sits below RAM: it is persistent (survives power off), roomier, cheaper, and slower.",
      "Within storage, there's a spectrum: fast and small (NVMe), balanced (SATA SSD), big and slow (HDD), enormous and glacial (tape or archive tiers).",
      "The right tier depends on how hot the data is: how often you touch it, and how quickly you need it.",
    ],
    visual: { component: "storage-picker", caption: "Match a workload to the right tier." },
    explanation: [
      "NVMe SSDs attach directly to the PCIe bus. Random reads in tens of microseconds; sequential throughput of several gigabytes per second. This is where your OS, code, and hot data belong.",
      "SATA SSDs are slower (older interface) but still hundreds of times faster than HDDs. Great for warm data that doesn't need to be blazing.",
      "Hard disks (HDDs) are spinning platters read by a moving arm. Fast for streaming (movies, backups), slow for random access. Cost per terabyte is unbeatable.",
      "Cold storage (S3 Glacier, tape libraries) is pennies per TB per month, at the cost of minutes-to-hours retrieval times. Perfect for backups you hope to never need.",
    ],
    experiment: {
      component: "storage-picker",
      caption: "Assign workloads to tiers.",
      instructions:
        "Notice the pattern: how hot is the data, how random is the access, and how much of it is there? Those three answers pick the tier every time.",
    },
    reflection: [
      "You have a training dataset of 5 TB accessed frequently by dozens of experiments. Which tier(s), and why?",
      "Why is putting a database's write-ahead log on a spinning disk usually a mistake?",
    ],
    modernAiConnection:
      "Model checkpoints — often hundreds of GB each — sit in object storage; the training loop streams them onto local NVMe before use. Vector databases keep their hottest indexes in RAM, warm data on SSD, and cold shards in object storage. Every AI infrastructure diagram is a story about this hierarchy.",
    knowledgeCheck: {
      question: "You need 20 TB of backups you'll almost never access, at the lowest possible monthly cost. Which tier?",
      options: [
        { text: "NVMe SSD.", correct: false, feedback: "Fastest and most expensive. Overkill for cold backups." },
        { text: "SATA SSD.", correct: false, feedback: "Still costly. Not needed for archived data." },
        { text: "HDD or cold-archive tier.", correct: true, feedback: "Correct. Pennies per TB per month; slow retrieval is fine for data you hope to never touch." },
        { text: "RAM.", correct: false, feedback: "RAM is volatile — it doesn't survive power off. And it's the most expensive per GB." },
      ],
    },
    nextStepHint: "You've matched storage to workloads. Next: the buses and I/O that shuttle bytes between all of these layers.",
  },

  "computers-hardware-io-buses": {
    curiosity:
      "You plug a 10 GB file into a USB-2 port and go make coffee. Same file, same disk, USB-3 port: it's done before you sit down. The disk was identical. What changed?",
    whyThisMatters:
      "The 'CPU speed' framing hides a lot of real-world performance. In practice, most systems are limited by I/O — the wires, buses, and interfaces that move data between components. Learning to spot I/O bottlenecks is a core engineering skill.",
    intuition: [
      "Inside your machine, everything talks over buses: shared highways carrying bytes between CPU, RAM, disk, GPU, and peripherals.",
      "Each bus has a width (bytes per transfer) and a clock rate (transfers per second). Multiplied together, that's the maximum bandwidth.",
      "The slowest link in the chain is the ceiling for the whole system.",
    ],
    visual: { component: "io-bottleneck", caption: "Same task, different bottlenecks." },
    explanation: [
      "The system bus (PCIe, on modern PCs) connects the CPU to fast peripherals: GPUs, NVMe SSDs, network cards. PCIe 4.0 x16 moves ~32 GB/s per direction.",
      "USB, Thunderbolt, Ethernet, and Wi-Fi are external I/O. Each has generations with wildly different speeds — USB-2 is 60 MB/s; USB-3 is 500+ MB/s; USB-4 rivals PCIe.",
      "Devices attach through drivers: OS-provided translators between the generic bus protocol and the device's specific commands. Bad drivers are a common source of mysterious performance cliffs.",
      "The most common performance surprise is discovering that your job wasn't CPU-bound at all — it was waiting on disk, network, or a slow bus.",
    ],
    experiment: {
      component: "io-bottleneck",
      caption: "Diagnose the bottleneck.",
      instructions:
        "Sort each scenario. Notice how often the answer is not 'the CPU'. Modern hardware is so imbalanced that a fast CPU idles most of the time; the game is keeping it fed.",
    },
    reflection: [
      "You copy files between two USB drives via your laptop and it's slow. Where would you look first?",
      "Why is 'GPU utilisation' a poor metric for training efficiency on its own?",
    ],
    modernAiConnection:
      "Multi-GPU training lives or dies by the interconnect between GPUs. NVLink and InfiniBand exist because PCIe wasn't fast enough for parameter gradients to flow between accelerators. Every 'scaling law' paper is quietly also a story about I/O.",
    knowledgeCheck: {
      question: "Your Python data-loading pipeline pins one CPU core at 100% and the GPU sits at 20%. What's the likely bottleneck?",
      options: [
        { text: "The GPU is too slow.", correct: false, feedback: "The GPU is idle — waiting. It's not the bottleneck." },
        { text: "The CPU pre-processing pipeline is the bottleneck.", correct: true, feedback: "Right. Speed up preprocessing (parallelise, cache, use faster libraries) and the GPU can finally get fed." },
        { text: "The RAM is full.", correct: false, feedback: "Possible but nothing here suggests that. Symptoms would be swapping or OOM." },
        { text: "The internet is slow.", correct: false, feedback: "Only relevant if you're streaming data over the network." },
      ],
    },
    nextStepHint: "Hardware handled. Next: how the code you write actually reaches the silicon.",
  },
};
