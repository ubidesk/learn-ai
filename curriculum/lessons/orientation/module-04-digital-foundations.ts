import type { LessonBody } from "../schema";

export const module04: Record<string, LessonBody> = {
  "orientation-digital-foundations-what-is-computer": {
    curiosity:
      "You press a key. A letter appears on the screen. In between those two events, something like a billion tiny electrical decisions happened. What actually is a computer, and what part of it did you just touch?",
    whyThisMatters:
      "Nearly every later lesson in this curriculum leans on a shared mental model of what a computer does: takes input, transforms it under instructions, produces output, remembers state. Get this picture solid now and the abstractions above it stop feeling magical.",
    intuition: [
      "Think of a computer as a kitchen. Ingredients (input) come in. A cook follows recipes (instructions) and uses tools (processor, memory). Meals go out (output). The pantry (storage) keeps what you might want later.",
      "Every device you call a 'computer' — phone, laptop, thermostat, satellite — is a variation on this picture. They differ in scale, not shape.",
      "The physical parts (hardware) run the instructions. The instructions themselves (software) are just very careful lists.",
    ],
    visual: {
      component: "input-process-output",
      caption: "The universal loop: input → process → output → (maybe store).",
    },
    explanation: [
      "Input: keyboards, mice, cameras, microphones, network packets, files. Anything that becomes data inside the machine.",
      "Processing: the CPU (and increasingly the GPU) runs instructions on that data. Add these numbers, compare these bytes, jump to that instruction if true.",
      "Output: screen, speakers, network, files, robot arms. Anything the machine sends back into the world.",
      "Memory (RAM) is the fast, temporary desk space the processor works on. Storage (disk, SSD) is the slower, permanent pantry.",
      "The operating system is a thin, extremely careful layer that shares the CPU, memory, and devices between whatever programs are running.",
    ],
    experiment: {
      component: "input-process-output",
      caption: "Trace the flow: pick a scenario and watch input become output.",
      instructions:
        "Choose a scenario (send a text, take a photo, ask a chatbot). Step through the flow and label each stage.",
    },
    reflection: [
      "Take one everyday task on your phone. Which parts are input, process, output, storage?",
      "Where in the loop do you think most 'AI' happens?",
    ],
    modernAiConnection:
      "When a large language model answers you, your text is input, tokens are processed on many GPU chips, generated tokens are output, and conversation state may or may not be stored. It's still the same loop — just at bewildering scale.",
    knowledgeCheck: {
      question: "Which of these best captures what a CPU does?",
      options: [
        {
          text: "Stores files for you",
          correct: false,
          feedback: "That's storage (SSD/disk), not the CPU.",
        },
        {
          text: "Executes instructions on data, step by step, extremely fast",
          correct: true,
          feedback:
            "Right. The CPU is the cook. Billions of small operations per second, following the software's recipe.",
        },
        {
          text: "Connects the computer to Wi-Fi",
          correct: false,
          feedback: "That's the network hardware and drivers.",
        },
        {
          text: "Trains AI models autonomously",
          correct: false,
          feedback:
            "The CPU can help train models, but training is a specific programmed process — the CPU itself doesn't 'want' to train.",
        },
      ],
    },
    nextStepHint: "Next: what a program actually is, and how it gets from source code to running.",
  },

  "orientation-digital-foundations-what-is-program": {
    curiosity:
      "You type `hello.py` and press enter. Somewhere between the letters you wrote and the words 'Hello, world!' on your screen, the machine did an enormous amount of work translating human language into electricity. What actually happens in that gap?",
    whyThisMatters:
      "Every programming lesson in this curriculum sits on top of this idea: humans write instructions in a language readable to us, and something translates them into instructions readable to the machine. Losing this mental picture makes debugging feel supernatural.",
    intuition: [
      "Programs are recipes. Programming languages are how humans write those recipes without insanity.",
      "The computer doesn't 'understand' Python or JavaScript. Something else translates each line into something the CPU actually runs.",
      "Two common translation styles: compilers translate all at once ahead of time; interpreters translate line by line as they go. Both end in the CPU running low-level instructions.",
    ],
    visual: {
      component: "source-to-execution",
      caption: "From source code to running program, in five stages.",
    },
    explanation: [
      "Source code: what you type. Human-friendly text with strict grammar rules.",
      "Parser: the language's tooling reads your text and turns it into a structured tree it can reason about. Syntax errors happen here.",
      "Compiler or interpreter: converts that tree into instructions the machine can run — either as a standalone binary or one instruction at a time.",
      "Runtime: the environment your program runs inside, providing memory management, standard libraries, and services.",
      "Execution: the CPU actually runs the resulting instructions on your data.",
      "Python is interpreted (usually via a bytecode step). C is compiled. JavaScript in a browser is Just-In-Time compiled — the browser translates and runs your code together.",
    ],
    experiment: {
      component: "source-to-execution",
      caption: "Watch a one-line program travel from source to output.",
      instructions:
        "Step through the five stages for a tiny program. Change one character and see which stage catches the error.",
    },
    reflection: [
      "Why do you think we need programming languages at all — why not just write the raw instructions?",
      "What might be one advantage of an interpreter over a compiler for a learner?",
    ],
    modernAiConnection:
      "Large language models generate source code. The moment you run that code, everything in this diagram happens exactly the same way as if you'd written it yourself. The AI doesn't run the code — your machine still does. Which is why AI-written code can still crash spectacularly.",
    knowledgeCheck: {
      question: "What's the most important thing that a compiler or interpreter does?",
      options: [
        {
          text: "It stores your program on the disk",
          correct: false,
          feedback: "That's the operating system's job.",
        },
        {
          text: "It translates code written in a human-friendly language into instructions the CPU can execute",
          correct: true,
          feedback:
            "Exactly. Without that translation step, the computer has no idea what your Python file 'means'.",
        },
        {
          text: "It runs the code on someone else's computer",
          correct: false,
          feedback: "That would be a server or cloud service, not the compiler.",
        },
        {
          text: "It only checks the spelling of your code",
          correct: false,
          feedback:
            "Spell-checking is a tiny sliver of what compilers and interpreters do.",
        },
      ],
    },
    nextStepHint: "Next: what actually happens when you open a website — the internet, conceptually.",
  },

  "orientation-digital-foundations-internet": {
    curiosity:
      "You type `wikipedia.org` and half a second later a page appears. In that half-second, your request likely bounced through several machines, across at least one ocean, waited on multiple queues, and ended up at a specific computer that had never met you before. How does *any* of that work?",
    whyThisMatters:
      "AI systems live on the internet. APIs, cloud, streaming inference, retrieval — none of it makes sense without a mental picture of how one computer talks to another. This lesson builds that picture.",
    intuition: [
      "Think of the internet as the world's postal system for tiny packets of data.",
      "Every device has an address (IP). Every service has a mailbox number (port). Every message is broken into small packets that find their own way.",
      "Domain names (like wikipedia.org) are human-friendly labels that get looked up in a giant phonebook (DNS) to find the real numeric address.",
    ],
    visual: {
      component: "internet-trace",
      caption: "The end-to-end journey of one web request.",
    },
    explanation: [
      "Step 1: You type a URL. Your browser splits it into a domain (wikipedia.org) and a path (/wiki/AI).",
      "Step 2: DNS lookup. Your machine asks a DNS server: 'what's the IP for wikipedia.org?' It gets back something like 208.80.154.224.",
      "Step 3: Your machine opens a connection to that IP (typically over TCP), then negotiates encryption (TLS) so the conversation is private.",
      "Step 4: Your browser sends an HTTP request: 'GET /wiki/AI'. The server sends back HTML, images, styles.",
      "Step 5: Your browser renders those into the page you see. Along the way it may make dozens more requests for images, fonts, and scripts.",
      "Everything else — email, video calls, chat, APIs — is variations on the same pattern.",
    ],
    experiment: {
      component: "internet-trace",
      caption: "Follow one request from browser to server and back.",
      instructions:
        "Step through the trace. Toggle a broken step and see the whole request fail — this is a great intuition for real network debugging.",
    },
    reflection: [
      "If DNS were down for you specifically, what would the internet look like from your machine?",
      "Where in this flow does encryption (HTTPS) protect you, and from whom?",
    ],
    modernAiConnection:
      "When you use a chatbot, your message travels through this exact flow to a data centre running the model, and its answer travels back the same way. When 'the AI is slow', the bottleneck is often not the model but network round-trips.",
    knowledgeCheck: {
      question: "You type wikipedia.org and the page loads. What did DNS most directly do?",
      options: [
        {
          text: "Encrypted your traffic",
          correct: false,
          feedback: "That's TLS, not DNS.",
        },
        {
          text: "Translated the domain name into a numeric IP address",
          correct: true,
          feedback:
            "Yes — DNS is the internet's phonebook. Without it, you'd need to memorise numeric addresses for every site.",
        },
        {
          text: "Rendered the HTML into a visible page",
          correct: false,
          feedback: "That's the browser's rendering engine.",
        },
        {
          text: "Stored the page in your history",
          correct: false,
          feedback: "That's your browser's local storage.",
        },
      ],
    },
    nextStepHint: "Networks move data. Next: what data actually is, and why AI is built on top of it.",
  },

  "orientation-digital-foundations-data": {
    curiosity:
      "A photo of a cat, a tweet, a heart-rate reading, a shipping manifest. Different in every way — except that a computer sees all of them as numbers. How does that reduction happen, and what does it enable?",
    whyThisMatters:
      "Machine learning literally cannot happen without data. Understanding the shapes data takes, and where it comes from, is the honest starting point for every ML lesson later in the curriculum.",
    intuition: [
      "Data comes in shapes: single numbers, lists of numbers, tables, images, sequences, graphs.",
      "The magic isn't that computers can store cat photos. It's that when we express many different things as numbers, we can use the same math on all of them.",
      "AI systems eat data the way ovens eat electricity. Cut the supply and the whole thing stops.",
    ],
    visual: {
      component: "data-forms",
      caption: "Five shapes of data — and where each shows up in daily life.",
    },
    explanation: [
      "Scalar: one number. Body temperature, a price, a probability.",
      "Vector: an ordered list of numbers. A location (latitude, longitude, altitude). Or an entire word represented as an 'embedding' of 1,024 numbers.",
      "Tabular: rows and columns. Spreadsheets, database tables, most business data.",
      "Image / video: grids of numbers, one per pixel. Colour images are three grids stacked (red, green, blue).",
      "Sequence: ordered items. Text is a sequence of words. Audio is a sequence of samples.",
      "Graph: nodes and edges. Social networks, molecules, road maps.",
      "AI systems are usually specialists in one or two of these shapes. Recognising the shape is the first step in choosing the right technique.",
    ],
    experiment: {
      component: "data-forms",
      caption: "Classify ten real-world data sources by shape.",
      instructions:
        "For each source, pick the closest shape. Some are multi-shape — read the feedback for the trade-off.",
    },
    reflection: [
      "What's one data source in your life that no AI system currently uses well?",
      "Which shape of data do you find most intuitive, and which most alien?",
    ],
    modernAiConnection:
      "Modern 'multimodal' AI can accept several data shapes at once — a photo *and* a caption, audio *and* transcript. Under the hood it converts each shape into vectors, then does math on the vectors. Multimodality is not one model that 'understands everything'; it is a translation trick into a shared numeric space.",
    knowledgeCheck: {
      question: "Which shape best describes an English sentence when passed to a language model?",
      options: [
        {
          text: "A single scalar",
          correct: false,
          feedback: "Way too small — a whole sentence carries far more structure than one number.",
        },
        {
          text: "A sequence of tokens (each represented as vectors)",
          correct: true,
          feedback:
            "Yes. Language models treat text as an ordered sequence of tokens, each mapped to a vector of numbers.",
        },
        {
          text: "A single image",
          correct: false,
          feedback:
            "Different shape entirely. Some models can accept both, but text is a sequence.",
        },
        {
          text: "A graph of characters",
          correct: false,
          feedback:
            "Sentences do have grammatical structure, but the mainstream representation is a sequence, not a graph.",
        },
      ],
    },
    nextStepHint:
      "You now know what a computer, a program, the internet, and data are. Next: the everyday tools you already use — treated with intent.",
  },
};
