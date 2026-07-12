import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "60–90 min";

export const stage: Stage = {
  id: "generative-ai",
  order: 10,
  title: "Generative AI Applications, RAG, Tools, Agents, and Multimodal Systems",
  purpose:
    "Build real generative-AI systems that go beyond a single API call — retrieval-augmented, tool-using, agentic, and multimodal — with production-grade reliability from day one.",
  startingLevel:
    "You understand transformers and can fine-tune, prompt, and evaluate LLMs.",
  prerequisites: ["llms"],
  project: {
    title: "Production Generative-AI System",
    description:
      "Design and build a nontrivial generative-AI application (RAG assistant, agent, or multimodal tool) that runs end-to-end, with evaluations, observability, guardrails, and cost accounting.",
  },
  exitCriteria: [
    "Design a RAG system responsibly, including retrieval quality evaluation.",
    "Give an LLM tools/functions and reason about failure modes.",
    "Design and evaluate a small agentic system safely.",
    "Work with multimodal models (image, audio) at an application level.",
    "Budget cost, latency, and quality trade-offs explicitly.",
  ],
  status: S,
  modules: [
    {
      id: "generative-ai-embeddings-and-vector-search",
      order: 1,
      title: "Embeddings and Vector Search",
      summary: "The substrate every retrieval-augmented system runs on.",
      lessons: [
        { id: "generative-ai-emb-embeddings", order: 1, title: "Embedding Models in Practice", outcome: "Choose and use embedding models for real content.", effort: eff, status: S },
        { id: "generative-ai-emb-vector-dbs", order: 2, title: "Vector Databases", outcome: "Index and query with a vector database (e.g. pgvector, Qdrant).", effort: eff, status: S },
        { id: "generative-ai-emb-hybrid", order: 3, title: "Hybrid Search: Lexical + Semantic", outcome: "Combine BM25 and vector search for better recall.", effort: eff, status: S },
        { id: "generative-ai-emb-eval", order: 4, title: "Evaluating Retrieval", outcome: "Measure retrieval quality with hit rate, MRR, and NDCG.", effort: eff, status: S },
      ],
    },
    {
      id: "generative-ai-rag",
      order: 2,
      title: "Retrieval-Augmented Generation",
      summary: "Grounding LLMs in your own data, without lying about your uncertainty.",
      lessons: [
        { id: "generative-ai-rag-basics", order: 1, title: "RAG from First Principles", outcome: "Design a basic RAG pipeline and its data flow.", effort: eff, status: S },
        { id: "generative-ai-rag-chunking", order: 2, title: "Chunking, Metadata, and Indexing", outcome: "Design chunking strategies for your content type.", effort: eff, status: S },
        { id: "generative-ai-rag-rerank", order: 3, title: "Rerankers and Query Rewriting", outcome: "Improve RAG quality with reranking and query transformation.", effort: eff, status: S },
        { id: "generative-ai-rag-eval", order: 4, title: "Evaluating RAG End-to-End", outcome: "Build RAG evals that reflect the actual user experience.", effort: eff, status: S },
        { id: "generative-ai-rag-advanced", order: 5, title: "Advanced RAG Patterns", outcome: "Reason about multi-hop RAG, graph RAG, and structured retrieval.", effort: eff, status: S },
      ],
    },
    {
      id: "generative-ai-tools-and-agents",
      order: 3,
      title: "Tools, Function Calling, and Agents",
      summary: "LLMs that act, not just answer — with disciplined guardrails.",
      lessons: [
        { id: "generative-ai-agent-tools", order: 1, title: "Tool Use and Function Calling", outcome: "Design tool interfaces LLMs can call reliably.", effort: eff, status: S },
        { id: "generative-ai-agent-patterns", order: 2, title: "Agentic Patterns: ReAct, Plan-and-Execute", outcome: "Choose an agent pattern deliberately, not by default.", effort: eff, status: S },
        { id: "generative-ai-agent-memory", order: 3, title: "Memory and State in Agents", outcome: "Design short- and long-term memory for agents.", effort: eff, status: S },
        { id: "generative-ai-agent-guardrails", order: 4, title: "Guardrails and Safety", outcome: "Prevent agents from doing harm they were not asked to do.", effort: eff, status: S },
        { id: "generative-ai-agent-eval", order: 5, title: "Evaluating Agent Behaviour", outcome: "Measure agent success rate and cost honestly.", effort: eff, status: S },
      ],
    },
    {
      id: "generative-ai-multimodal",
      order: 4,
      title: "Multimodal AI",
      summary: "Working with images, audio, and video alongside text.",
      lessons: [
        { id: "generative-ai-mm-vision-models", order: 1, title: "Vision-Language Models", outcome: "Use CLIP-style and VLM models for real tasks.", effort: eff, status: S },
        { id: "generative-ai-mm-diffusion", order: 2, title: "Diffusion Models for Image Generation", outcome: "Explain and use diffusion models responsibly.", effort: eff, status: S },
        { id: "generative-ai-mm-audio", order: 3, title: "Speech and Audio Models", outcome: "Do transcription, TTS, and audio understanding.", effort: eff, status: S },
        { id: "generative-ai-mm-applications", order: 4, title: "Multimodal Applications and Trade-offs", outcome: "Design real multimodal features and know their limits.", effort: eff, status: S },
      ],
    },
    {
      id: "generative-ai-application-engineering",
      order: 5,
      title: "Building Real Generative Applications",
      summary: "The engineering discipline that separates a demo from a product.",
      lessons: [
        { id: "generative-ai-app-architecture", order: 1, title: "Reference Architectures", outcome: "Sketch reference architectures for common GenAI products.", effort: eff, status: S },
        { id: "generative-ai-app-cost-latency", order: 2, title: "Cost, Latency, and Quality Trade-offs", outcome: "Budget cost/latency/quality explicitly across an app.", effort: eff, status: S },
        { id: "generative-ai-app-observability", order: 3, title: "Observability for LLM Apps", outcome: "Trace, log, and monitor LLM applications in production.", effort: eff, status: S },
        { id: "generative-ai-app-security", order: 4, title: "Prompt Injection and Data Exfiltration", outcome: "Defend LLM apps against prompt injection and data leaks.", effort: eff, status: S },
      ],
    },
  ],
};
