import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "generative-ai",
  order: 10,
  title: "Generative AI Applications, RAG, Tools, Agents, and Multimodal Systems",
  purpose:
    "Take LLM fluency into real applications — retrieval-augmented generation, tool use, stateful workflows, agents, multimodal AI, generative media, and human-centred product design.",
  startingLevel:
    "You can call LLM APIs, version prompts, and evaluate simple LLM systems. You have never built a RAG system, a tool-using agent, or a multimodal application.",
  prerequisites: ["llms"],
  project: {
    title: "A Real Generative-AI Application",
    description:
      "Ship a real generative-AI application — RAG or tool-using or multimodal — with a retrieval or workflow architecture, an evaluation harness, human-in-the-loop where warranted, and an honest security review.",
  },
  exitCriteria: [
    "Design and evaluate a RAG system, including citations and grounding.",
    "Wire tools into an LLM safely, with validation and sandboxing.",
    "Reason about when — and when not — to use agents.",
    "Integrate multimodal or generative-media components responsibly.",
    "Design human-in-the-loop review flows for AI products.",
  ],
  status: S,
  modules: [
    {
      id: "gen-retrieval",
      order: 1,
      title: "Retrieval Systems",
      summary: "The retrieval layer that grounds most generative-AI applications.",
      lessons: [
        L("gen-retrieval-ingestion", 1, "Ingestion and Parsing", "Ingest PDFs, HTML, and structured docs into a retrievable form."),
        L("gen-retrieval-chunking", 2, "Chunking Strategies", "Chunk documents to match retrieval and answer needs."),
        L("gen-retrieval-metadata", 3, "Metadata and Filters", "Attach and query metadata alongside embeddings."),
        L("gen-retrieval-dense-sparse-hybrid", 4, "Dense, Sparse, and Hybrid Retrieval", "Combine dense embeddings and BM25 for hybrid retrieval."),
        L("gen-retrieval-reranking", 5, "Reranking", "Add a reranker on top of a first-stage retriever."),
      ],
    },
    {
      id: "gen-rag",
      order: 2,
      title: "Retrieval-Augmented Generation",
      summary: "Grounding LLM answers in retrieved evidence — architecture, evaluation, and security.",
      lessons: [
        L("gen-rag-architecture", 1, "RAG Architecture", "Design a RAG pipeline end-to-end."),
        L("gen-rag-citations", 2, "Citations and Grounding", "Force models to cite their retrieved sources."),
        L("gen-rag-query-rewriting", 3, "Query Rewriting", "Rewrite user queries into better retrieval queries."),
        L("gen-rag-context-compression", 4, "Context Compression", "Fit retrieved evidence into a limited context window."),
        L("gen-rag-evaluation", 5, "RAG Evaluation and Security", "Evaluate faithfulness and answerability, and defend against prompt injection through documents."),
      ],
    },
    {
      id: "gen-tool-calling",
      order: 3,
      title: "Tool Calling",
      summary: "Letting an LLM call your code — safely.",
      lessons: [
        L("gen-tool-calling-schemas", 1, "Tool Schemas", "Design tool schemas an LLM can call reliably."),
        L("gen-tool-calling-validation", 2, "Argument Validation", "Validate tool arguments before executing them."),
        L("gen-tool-calling-sandboxing", 3, "Sandboxing Tools", "Sandbox powerful tools to limit blast radius."),
        L("gen-tool-calling-errors", 4, "Error Handling in Tool Loops", "Return useful errors that let the model recover."),
        L("gen-tool-calling-human-approval", 5, "Human Approval for Sensitive Actions", "Gate sensitive tools behind a human approval step."),
      ],
    },
    {
      id: "gen-stateful-workflows",
      order: 4,
      title: "Stateful Workflows",
      summary: "Long-running, resumable AI workflows — not just one-shot chats.",
      lessons: [
        L("gen-stateful-workflows-session", 1, "Session State", "Model per-conversation state deliberately."),
        L("gen-stateful-workflows-checkpoints", 2, "Checkpoints and Recovery", "Persist and resume long-running AI workflows."),
        L("gen-stateful-workflows-graphs", 3, "Workflow Graphs", "Model workflows as graphs with typed edges."),
        L("gen-stateful-workflows-long-running", 4, "Long-Running Jobs", "Design long jobs that survive restarts and failures."),
      ],
    },
    {
      id: "gen-agents",
      order: 5,
      title: "Agents",
      summary: "When agents actually help — and when they don't.",
      lessons: [
        L("gen-agents-planning-acting", 1, "Planning and Acting", "Explain the plan-and-act loop honestly."),
        L("gen-agents-termination", 2, "Termination and Loop Control", "Design agents that stop when they should."),
        L("gen-agents-multi-agent", 3, "Multi-Agent Systems", "Compose multiple agents without collapsing into chaos."),
        L("gen-agents-when-not-to-use", 4, "When Not to Use Agents", "Prefer a workflow to an agent when the task is well-defined."),
        L("gen-agents-evaluation", 5, "Evaluating Agents", "Design an eval harness for agent behaviour."),
      ],
    },
    {
      id: "gen-multimodal",
      order: 6,
      title: "Multimodal AI",
      summary: "Vision-language, audio, and document understanding as first-class components.",
      lessons: [
        L("gen-multimodal-vlm", 1, "Vision-Language Models", "Use a VLM for image understanding."),
        L("gen-multimodal-audio", 2, "Audio Models", "Use speech-to-text and text-to-speech deliberately."),
        L("gen-multimodal-documents", 3, "Document Understanding", "Extract structured information from real documents."),
        L("gen-multimodal-eval", 4, "Multimodal Evaluation", "Evaluate multimodal systems honestly."),
      ],
    },
    {
      id: "gen-media",
      order: 7,
      title: "Generative Media",
      summary: "Image, video, and audio generation — with provenance, consent, and copyright taken seriously.",
      lessons: [
        L("gen-media-diffusion", 1, "Diffusion, Intuition", "Explain diffusion models at a working level of detail."),
        L("gen-media-image", 2, "Image Generation in Practice", "Generate and iterate on images from code."),
        L("gen-media-video-audio", 3, "Video and Audio Generation", "Recognise the state of the art in video and audio generation."),
        L("gen-media-provenance", 4, "Provenance and Watermarking", "Attach and check provenance metadata on generated media."),
        L("gen-media-copyright-consent", 5, "Copyright and Consent", "Reason about copyright and consent before publishing generated media."),
      ],
    },
    {
      id: "gen-human-centered",
      order: 8,
      title: "Human-Centered AI Products",
      summary: "Designing AI products people can trust, contest, and use safely.",
      lessons: [
        L("gen-human-centered-hitl", 1, "Human-in-the-Loop Design", "Choose where humans stay in the loop."),
        L("gen-human-centered-review-queues", 2, "Review Queues and Escalation", "Design review queues that catch failures early."),
        L("gen-human-centered-accessibility", 3, "Accessibility of AI Interfaces", "Make AI features accessible by default."),
        L("gen-human-centered-trust", 4, "Trust and Transparency", "Communicate uncertainty and limits inside the product itself."),
      ],
    },
  ],
};
