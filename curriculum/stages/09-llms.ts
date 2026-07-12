import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "60–90 min";

export const stage: Stage = {
  id: "llms",
  order: 9,
  title: "Language, Transformers, and Large Language Models",
  purpose:
    "Understand how modern LLMs work end-to-end: from tokens to attention to pretraining, fine-tuning, alignment, and evaluation — enough to build with them honestly.",
  startingLevel:
    "You are fluent in PyTorch and can train and debug neural networks.",
  prerequisites: ["deep-learning"],
  project: {
    title: "Mini-GPT from Scratch",
    description:
      "Implement, train, and evaluate a small transformer-based language model from scratch on a modest dataset, with a written explanation of every architectural choice.",
  },
  exitCriteria: [
    "Explain tokenisation, embeddings, and positional information precisely.",
    "Derive multi-head self-attention and implement a transformer block.",
    "Distinguish pretraining, fine-tuning, and alignment concretely.",
    "Evaluate LLMs beyond simple accuracy.",
    "Reason about the compute, memory, and cost of an LLM.",
  ],
  status: S,
  modules: [
    {
      id: "llms-language-and-tokens",
      order: 1,
      title: "Language, Tokens, and Embeddings",
      summary: "How text becomes something a neural network can consume.",
      lessons: [
        { id: "llms-lt-nlp-preview", order: 1, title: "A Short History of NLP", outcome: "Trace NLP from n-grams to embeddings to transformers.", effort: eff, status: S },
        { id: "llms-lt-tokenisation", order: 2, title: "Tokenisation (BPE and Beyond)", outcome: "Explain subword tokenisation and its consequences.", effort: eff, status: S },
        { id: "llms-lt-embeddings", order: 3, title: "Word and Token Embeddings", outcome: "Interpret embeddings as learned geometry of meaning.", effort: eff, status: S },
        { id: "llms-lt-positional", order: 4, title: "Positional Information", outcome: "Compare positional encodings (sinusoidal, learned, RoPE, ALiBi).", effort: eff, status: S },
      ],
    },
    {
      id: "llms-transformers",
      order: 2,
      title: "The Transformer Architecture",
      summary: "The architecture that defines modern AI, from the inside.",
      lessons: [
        { id: "llms-tf-self-attention", order: 1, title: "Self-Attention in Depth", outcome: "Derive and implement multi-head self-attention from scratch.", effort: eff, status: S },
        { id: "llms-tf-block", order: 2, title: "The Transformer Block", outcome: "Assemble attention + MLP + normalisation into a working block.", effort: eff, status: S },
        { id: "llms-tf-variants", order: 3, title: "Encoder-only, Decoder-only, Encoder-Decoder", outcome: "Match architecture variants to their tasks.", effort: eff, status: S },
        { id: "llms-tf-implement", order: 4, title: "Implementing a Small Transformer", outcome: "Write a small GPT-style model in PyTorch and train it.", effort: eff, status: S },
      ],
    },
    {
      id: "llms-training",
      order: 3,
      title: "Training and Adapting LLMs",
      summary: "Pretraining, fine-tuning, and alignment — where the intelligence appears.",
      lessons: [
        { id: "llms-train-pretraining", order: 1, title: "Pretraining Objectives", outcome: "Contrast causal LM, masked LM, and mixture objectives.", effort: eff, status: S },
        { id: "llms-train-scaling", order: 2, title: "Scaling Laws and Compute", outcome: "Reason about model/data/compute scaling relationships.", effort: eff, status: S },
        { id: "llms-train-finetune", order: 3, title: "Supervised Fine-Tuning", outcome: "Fine-tune a base model on task data responsibly.", effort: eff, status: S },
        { id: "llms-train-peft", order: 4, title: "Parameter-Efficient Fine-Tuning (LoRA, QLoRA)", outcome: "Adapt large models on modest hardware with PEFT.", effort: eff, status: S },
        { id: "llms-train-rlhf", order: 5, title: "Alignment: RLHF, DPO, and Preference Data", outcome: "Explain how alignment methods shape model behaviour.", effort: eff, status: S },
      ],
    },
    {
      id: "llms-inference-and-decoding",
      order: 4,
      title: "Inference, Decoding, and Prompting",
      summary: "What actually happens when you 'talk' to an LLM.",
      lessons: [
        { id: "llms-inf-decoding", order: 1, title: "Sampling and Decoding Strategies", outcome: "Choose greedy, beam, top-k, top-p, and temperature deliberately.", effort: eff, status: S },
        { id: "llms-inf-kv-cache", order: 2, title: "KV Caches and Inference Cost", outcome: "Reason about inference memory and speed.", effort: eff, status: S },
        { id: "llms-inf-prompting", order: 3, title: "Prompting as an Engineering Discipline", outcome: "Design prompts systematically and evaluate them empirically.", effort: eff, status: S },
        { id: "llms-inf-structured-output", order: 4, title: "Structured Output and Function Calling", outcome: "Produce reliable structured output for programmatic use.", effort: eff, status: S },
      ],
    },
    {
      id: "llms-evaluation-and-safety",
      order: 5,
      title: "Evaluating and Governing LLMs",
      summary: "Honestly measuring what LLMs do — and what they must not.",
      lessons: [
        { id: "llms-ev-benchmarks", order: 1, title: "Benchmarks and Their Limits", outcome: "Read benchmark results with informed scepticism.", effort: eff, status: S },
        { id: "llms-ev-evals-custom", order: 2, title: "Building Your Own Evals", outcome: "Design task-specific evals that reflect real use.", effort: eff, status: S },
        { id: "llms-ev-hallucination", order: 3, title: "Hallucination, Calibration, and Truthfulness", outcome: "Measure and mitigate hallucination in real systems.", effort: eff, status: S },
        { id: "llms-ev-safety", order: 4, title: "Safety, Misuse, and Red-Teaming", outcome: "Red-team an LLM system and reason about failure modes.", effort: eff, status: S },
      ],
    },
  ],
};
