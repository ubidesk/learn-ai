import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "llms",
  order: 9,
  title: "Language, Transformers, and Large Language Models",
  purpose:
    "Move the learner from generic deep learning into modern language modelling — tokenization, embeddings, the transformer LM, pretraining and alignment, model APIs, prompting as interface design, fine-tuning, and honest evaluation.",
  startingLevel:
    "You can train small transformers in PyTorch. You have used ChatGPT-style products but never called an LLM API from code or fine-tuned a model.",
  prerequisites: ["deep-learning"],
  project: {
    title: "LLM Application with Evaluation",
    description:
      "Ship a small LLM-powered application that solves a real task, versioned prompts and evaluations, structured output, and a written honest assessment of where the system fails.",
  },
  exitCriteria: [
    "Tokenize, embed, and reason about language data.",
    "Explain pretraining, instruction tuning, and preference optimization.",
    "Call hosted and open LLMs from code with proper limits and streaming.",
    "Design, version, and evaluate prompts as first-class artefacts.",
    "Fine-tune a small model with LoRA and evaluate it against baselines.",
  ],
  status: S,
  modules: [
    {
      id: "llm-language-as-data",
      order: 1,
      title: "Language as Data",
      summary: "The unglamorous but decisive work of turning text into tokens a model can learn from.",
      lessons: [
        L("llm-language-as-data-tokenization", 1, "Tokenization Strategies", "Compare word, subword, and byte-level tokenization."),
        L("llm-language-as-data-bpe", 2, "BPE and Vocabularies", "Explain how BPE builds a vocabulary."),
        L("llm-language-as-data-context-windows", 3, "Context Windows and Truncation", "Reason about context length as a real constraint."),
        L("llm-language-as-data-corpora", 4, "Corpora and Data Quality", "Recognise where pretraining data comes from and its quality issues."),
        L("llm-language-as-data-licensing", 5, "Licensing and Provenance", "Reason about data licensing and provenance before shipping."),
      ],
    },
    {
      id: "llm-embeddings",
      order: 2,
      title: "Embeddings",
      summary: "Vectors as meaning — the substrate of retrieval, clustering, and similarity in modern NLP.",
      lessons: [
        L("llm-embeddings-word-to-embedding", 1, "From Words to Embeddings", "Explain word embeddings historically and today."),
        L("llm-embeddings-sentence", 2, "Sentence and Document Embeddings", "Choose a sentence embedding model for a task."),
        L("llm-embeddings-similarity", 3, "Similarity Metrics", "Pick between cosine, dot, and Euclidean for embeddings."),
        L("llm-embeddings-bias", 4, "Bias in Embeddings", "Detect and reason about bias in embedding spaces."),
        L("llm-embeddings-domain-mismatch", 5, "Domain Mismatch", "Predict when a generic embedding model will fail your domain."),
      ],
    },
    {
      id: "llm-transformer-lms",
      order: 3,
      title: "Transformer Language Models",
      summary: "The architecture and inference behaviour of the models everyone is now shipping.",
      lessons: [
        L("llm-transformer-lms-causal-masked", 1, "Causal vs Masked Language Models", "Distinguish decoder-only, encoder-only, and encoder-decoder models."),
        L("llm-transformer-lms-decoder-stack", 2, "The Decoder Stack in Detail", "Trace a token through a decoder-only transformer."),
        L("llm-transformer-lms-sampling", 3, "Sampling: Temperature, Top-k, Top-p", "Sample from an LM deliberately."),
        L("llm-transformer-lms-perplexity", 4, "Perplexity", "Interpret perplexity as an intrinsic evaluation."),
        L("llm-transformer-lms-inference-cost", 5, "Inference Cost", "Reason about tokens/sec, memory, and cost of inference."),
      ],
    },
    {
      id: "llm-pretraining-alignment",
      order: 4,
      title: "Pretraining, Instruction Tuning, and Alignment",
      summary: "The training pipeline that turns raw text into a helpful assistant.",
      lessons: [
        L("llm-pretraining-alignment-pretraining", 1, "Pretraining and Data Filtering", "Explain what pretraining actually optimises."),
        L("llm-pretraining-alignment-instruction-tuning", 2, "Instruction Tuning", "Explain what instruction tuning changes about a base model."),
        L("llm-pretraining-alignment-rlhf-dpo", 3, "RLHF and DPO", "Compare RLHF and DPO as preference-optimisation methods."),
        L("llm-pretraining-alignment-synthetic-data", 4, "Synthetic Data", "Reason about synthetic data as both a tool and a hazard."),
        L("llm-pretraining-alignment-reward-hacking", 5, "Reward Hacking and Alignment Failures", "Recognise reward hacking and misalignment failure modes."),
      ],
    },
    {
      id: "llm-model-apis",
      order: 5,
      title: "Model APIs and Open Models",
      summary: "Talking to hosted LLMs and running open ones — properly.",
      lessons: [
        L("llm-model-apis-hosted", 1, "Hosted Model APIs", "Call a hosted LLM API from code with retries and timeouts."),
        L("llm-model-apis-open-local", 2, "Open Models, Local and Hosted", "Run an open model locally or on your own infra."),
        L("llm-model-apis-rate-limits-streaming", 3, "Rate Limits and Streaming", "Stream tokens and respect rate limits."),
        L("llm-model-apis-structured-output", 4, "Structured Output", "Get reliable JSON out of an LLM."),
        L("llm-model-apis-licensing", 5, "Model Licensing", "Reason about model licences before shipping."),
      ],
    },
    {
      id: "llm-prompting",
      order: 6,
      title: "Prompting as Interface Design",
      summary: "Prompts as a versioned, tested product artefact — not vibes.",
      lessons: [
        L("llm-prompting-anatomy", 1, "The Anatomy of a Good Prompt", "Design prompts with clear roles, constraints, and examples."),
        L("llm-prompting-few-shot-cot", 2, "Few-Shot and Chain-of-Thought", "Use few-shot and CoT prompts deliberately."),
        L("llm-prompting-system-personas", 3, "System Prompts and Personas", "Set consistent behaviour with system prompts."),
        L("llm-prompting-versioning-tests", 4, "Prompt Versioning and Tests", "Version prompts and test them like code."),
        L("llm-prompting-jailbreaks", 5, "Jailbreaks and Defences", "Anticipate common jailbreak patterns."),
      ],
    },
    {
      id: "llm-fine-tuning",
      order: 7,
      title: "Fine-Tuning and Adaptation",
      summary: "When and how to specialise a model — including parameter-efficient methods.",
      lessons: [
        L("llm-fine-tuning-full-vs-peft", 1, "Full Fine-Tuning vs PEFT", "Choose between full and parameter-efficient fine-tuning."),
        L("llm-fine-tuning-lora", 2, "LoRA and Adapters", "Fine-tune with LoRA and merge adapters."),
        L("llm-fine-tuning-dataset-curation", 3, "Dataset Curation", "Curate a high-signal fine-tuning dataset."),
        L("llm-fine-tuning-eval-during-tuning", 4, "Evaluation During Tuning", "Track eval during tuning to catch regression."),
        L("llm-fine-tuning-deployment", 5, "Deploying Tuned Models", "Ship a fine-tuned model behind an API."),
      ],
    },
    {
      id: "llm-evaluation",
      order: 8,
      title: "LLM Evaluation",
      summary: "How to know whether an LLM system is actually good — including the traps.",
      lessons: [
        L("llm-evaluation-benchmarks", 1, "Benchmarks and Their Limits", "Read public benchmarks without overreading them."),
        L("llm-evaluation-task-specific", 2, "Task-Specific Evaluations", "Design an eval for your own task."),
        L("llm-evaluation-llm-as-judge", 3, "LLM-as-Judge and Its Biases", "Use LLM-as-judge without being fooled by it."),
        L("llm-evaluation-adversarial-safety", 4, "Adversarial and Safety Evaluations", "Probe your system with adversarial and safety cases."),
        L("llm-evaluation-human", 5, "Human Evaluation", "Run a small human eval that actually informs decisions."),
      ],
    },
  ],
};
