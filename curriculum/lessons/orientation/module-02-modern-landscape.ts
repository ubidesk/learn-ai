import type { LessonBody } from "../schema";

export const module02: Record<string, LessonBody> = {
  "orientation-modern-landscape-categories": {
    curiosity:
      "Open your phone and count the AI-powered things you can find in five minutes. Face unlock. Autocomplete. Voice-to-text. Photo search. A translator. A code assistant. Are these all the same technology wearing different faces, or different technologies wearing similar names?",
    whyThisMatters:
      "You'll pick tools, evaluate startups, and choose careers in one of these categories. Knowing the categories keeps you from confusing 'AI' with any single one of them.",
    intuition: [
      "AI systems can be sorted by what kind of output they produce: a label, a number, an image, a sentence, an action.",
      "Perception systems interpret the world (vision, speech). Predictive systems forecast a number or label (fraud score, weather). Generative systems produce new content (text, images, audio). Agentic systems take actions in some environment.",
      "The same underlying deep-learning ideas power surprisingly different-looking applications.",
    ],
    visual: {
      component: "category-matcher",
      caption: "Match real-world products to the category they belong to.",
    },
    explanation: [
      "Perception: computer vision, speech recognition, biometric identification. Turns raw sensory data into structured information.",
      "Prediction: recommendation systems, fraud detection, risk scoring, demand forecasting. Assigns a score or label to a case.",
      "Generation: text generation, image and video synthesis, code generation, voice cloning. Produces new content.",
      "Decision & agency: game-playing systems, robotics, autonomous vehicles, task-executing 'agents'. Chooses actions to achieve goals.",
      "Retrieval & reasoning: search engines, semantic search, question answering. Finds and combines information.",
      "Most real products combine two or three of these. A voice assistant does perception (speech-to-text), reasoning (understanding intent), and generation (speech-out).",
    ],
    experiment: {
      component: "category-matcher",
      caption: "Sort ten familiar products into categories.",
      instructions:
        "For each product, choose its dominant category. Read the feedback — many products live in more than one.",
    },
    reflection: [
      "Which category do you interact with most in daily life without noticing?",
      "Which category are you most excited to build in?",
    ],
    modernAiConnection:
      "When a company says 'we do AI', the useful follow-up is: which category, which task, which failure mode? A vision startup and a chatbot startup share almost no operational reality even if their pitch decks look similar.",
    knowledgeCheck: {
      question:
        "A ride-sharing app's ETA predictor is best described as which category?",
      options: [
        {
          text: "Generative AI",
          correct: false,
          feedback: "It isn't producing new content — it's outputting a number.",
        },
        {
          text: "Predictive AI",
          correct: true,
          feedback:
            "Correct. It predicts a numerical value (minutes until arrival) from features like traffic, distance, and time of day.",
        },
        {
          text: "Perception AI",
          correct: false,
          feedback: "Perception would be interpreting camera or microphone input.",
        },
        {
          text: "Agentic AI",
          correct: false,
          feedback:
            "An agent takes actions. ETA prediction is a scored value the app then uses — the prediction itself isn't acting.",
        },
      ],
    },
    nextStepHint:
      "Categories give you a map. Next: what 'foundation models' are, and why one model can be adapted to so many of these categories at once.",
  },

  "orientation-modern-landscape-foundation-models": {
    curiosity:
      "One neural network can summarise a legal document, write a Python function, and roleplay as a pirate — none of which it was specifically trained to do. How is that possible from a single model?",
    whyThisMatters:
      "Foundation models are the economic centre of modern AI. Nearly every product you use is either one or built on one. Understanding what they are — and are not — is a prerequisite for reasoning about the whole industry.",
    intuition: [
      "Old AI: train one model per task. Spam detection model, translation model, image tagging model — separate projects, separate teams.",
      "New AI: train one very large model on a lot of general data, then adapt it to specific tasks. Like teaching one very well-read intern who can then be pointed at many jobs.",
      "The 'foundation' is that broad base. The 'adaptation' is prompting, fine-tuning, or wrapping it with tools.",
    ],
    visual: {
      component: "foundation-model-adapter",
      caption: "One trunk, many branches: how a foundation model powers many tasks.",
    },
    explanation: [
      "A foundation model is a large neural network pre-trained on huge amounts of data — usually text, images, or both — so that it captures general patterns about its domain.",
      "Adaptation is the second step. Techniques include prompting (asking the right question), fine-tuning (a small extra training pass on task-specific data), and tool-use (giving the model buttons it can press, like calling a search API).",
      "This 'pre-train then adapt' pattern is why we see the same model brand behind wildly different apps.",
      "The trade-off: foundation models are expensive to train (millions of dollars, months of compute) but cheap to adapt. Very few organisations train them; many organisations use them.",
    ],
    experiment: {
      component: "foundation-model-adapter",
      caption: "Adapt one 'foundation' to four different downstream tasks.",
      instructions:
        "Try each adaptation slot and watch how the same base capability gets pointed at different jobs. Notice what changes and what doesn't.",
    },
    reflection: [
      "Would you rather train a foundation model or build on top of one? What does each choice mean for your career?",
      "What is a task where you'd want a small purpose-built model instead of a large foundation model?",
    ],
    modernAiConnection:
      "GPT-4, Claude, Gemini, Llama — these are all foundation models. The apps you use built on top of them are adaptations. When those apps 'feel similar', it's often because they share a foundation underneath.",
    knowledgeCheck: {
      question: "Which best describes the value of the foundation-model paradigm?",
      options: [
        {
          text: "Every task now requires training a new model from scratch",
          correct: false,
          feedback:
            "That is the *old* paradigm foundation models replaced. The whole point is not re-training from scratch.",
        },
        {
          text: "One large pre-trained model can be cheaply adapted to many downstream tasks",
          correct: true,
          feedback:
            "Yes. The huge cost is paid once (pre-training); many teams benefit from many cheap adaptations.",
        },
        {
          text: "It makes AI systems fully general and reliable",
          correct: false,
          feedback:
            "Foundation models are more general than task-specific ones, but they are still narrow AI with real failure modes.",
        },
        {
          text: "It eliminates the need for data",
          correct: false,
          feedback:
            "Foundation models require *enormous* amounts of data to pre-train. They just spare downstream teams from needing as much.",
        },
      ],
    },
    nextStepHint:
      "Next: two flavours of what foundation models can do — predicting things vs generating things.",
  },

  "orientation-modern-landscape-generative-vs-predictive": {
    curiosity:
      "A weather app tells you tomorrow's rain probability. An AI drawing tool makes you a picture of a cat wearing a spacesuit. Both are AI. One is a prediction; one is a creation. What's the real difference under the hood?",
    whyThisMatters:
      "Confusing the two leads to bad product decisions. You wouldn't ask a poem generator to price your insurance policy. You wouldn't ask a fraud detector to write your birthday card.",
    intuition: [
      "Predictive AI answers: 'given these inputs, what is the most likely value / label / score?'",
      "Generative AI answers: 'given this context, what is a plausible new example that fits the pattern?'",
      "The engines can overlap — a language model both predicts (the next word) and generates (the whole essay). But the *use case* is what matters.",
    ],
    visual: {
      component: "generative-vs-predictive",
      caption: "The same technology, viewed as a predictor and as a generator.",
    },
    explanation: [
      "Predictive systems are usually evaluated by accuracy on labelled data — did the predicted value match the true value?",
      "Generative systems are harder to evaluate — there's no single 'correct' image or paragraph. Quality is judged by humans, or by proxy metrics that are imperfect.",
      "Predictive systems are usually higher-stakes: they inform decisions like loans, medical diagnoses, hiring. Generative systems are usually augmenting a human: drafting text, sketching designs.",
      "The failure modes differ too. Predictive systems fail by being subtly wrong on average. Generative systems fail by being confidently, floridly wrong — hallucinations.",
    ],
    experiment: {
      component: "generative-vs-predictive",
      caption: "Sort ten AI tasks into predictive vs generative.",
      instructions:
        "For each task, pick the mode. Watch for tasks that could plausibly be either — the framing matters.",
    },
    reflection: [
      "Name a task where you'd want predictive AI even though generative AI could do it.",
      "Name a task where you'd tolerate generative AI's hallucinations because the upside outweighs them.",
    ],
    modernAiConnection:
      "'Generative AI' has become the industry buzzword since 2022. Meanwhile predictive AI still runs your credit score, your ad feed, your fraud alerts, and most of the infrastructure of modern life. Both are important; only one is trending.",
    knowledgeCheck: {
      question:
        "Which of these is best framed as generative AI, not predictive AI?",
      options: [
        {
          text: "Estimating a customer's churn probability",
          correct: false,
          feedback: "Classic predictive task — output a number given features.",
        },
        {
          text: "Drafting a new marketing email in a brand's voice",
          correct: true,
          feedback:
            "Yes. There's no single 'right' email; the system produces new plausible content.",
        },
        {
          text: "Detecting whether a transaction is fraudulent",
          correct: false,
          feedback:
            "Predictive — a labelled classification with a clear right answer.",
        },
        {
          text: "Predicting tomorrow's temperature",
          correct: false,
          feedback: "Predictive by definition.",
        },
      ],
    },
    nextStepHint:
      "Next: what happens when an AI stops answering questions and starts taking actions.",
  },

  "orientation-modern-landscape-agents-and-tools": {
    curiosity:
      "A chatbot answers your question. An 'agent' books your flight. Both are language models under the hood. What magic ingredient turns one into the other — and what breaks?",
    whyThisMatters:
      "Agents are the fastest-growing area of applied AI. They also fail in the most spectacular ways. Understanding the pattern lets you both build with them and be sceptical of them.",
    intuition: [
      "A chatbot's output is text. An agent's output is actions — API calls, code execution, clicks in a browser, transactions.",
      "The extra ingredient is 'tools': a language model that can call functions, read their results, and decide what to do next.",
      "This turns a question-answerer into a doer. It also multiplies the blast radius of any mistake.",
    ],
    visual: {
      component: "agent-toolbelt",
      caption: "An agent's loop: think, choose a tool, observe, repeat.",
    },
    explanation: [
      "The core loop: the model receives a goal, decides what tool to invoke, sees the result, decides the next action, and eventually returns.",
      "Tools are just functions the model has been taught to call — search-the-web, run-python, send-email, book-a-thing.",
      "Every tool call is a chance for the model to do something the user didn't intend. Good agent design is largely about narrowing what the model *can* do.",
      "Multi-step agents can get stuck in loops, hallucinate tool outputs, or take confident wrong actions. The engineering is not glamorous; it is monitoring, guardrails, and undo.",
    ],
    experiment: {
      component: "agent-toolbelt",
      caption: "Walk through an agent's decision loop step by step.",
      instructions:
        "Give the agent a goal, watch it choose tools, and see how each choice branches the outcome.",
    },
    reflection: [
      "What's a task you'd trust an agent to do end-to-end today, and one you would not?",
      "What kind of undo, dry-run, or approval step would make you more comfortable letting an agent act on your behalf?",
    ],
    modernAiConnection:
      "Coding assistants that edit your codebase, browsing agents that fill out forms, and 'operator'-style agents that click through websites are all instances of this pattern. When they impress, it's because the loop worked. When they horrify, it's because it didn't.",
    knowledgeCheck: {
      question: "What is the single most important difference between a chatbot and an agent?",
      options: [
        {
          text: "Agents use larger models",
          correct: false,
          feedback:
            "Model size can vary. What defines an agent is whether it takes actions in the world, not how big it is.",
        },
        {
          text: "Agents can invoke tools / take actions, not just produce text",
          correct: true,
          feedback:
            "Exactly. Tool use turns a text machine into an actor with a growing blast radius.",
        },
        {
          text: "Agents are more accurate than chatbots",
          correct: false,
          feedback:
            "Sometimes yes, sometimes emphatically no. Agents can compound errors across steps.",
        },
        {
          text: "Agents are conscious",
          correct: false,
          feedback:
            "No. Acting in the world is not the same as being aware of it.",
        },
      ],
    },
    nextStepHint:
      "Last landscape lesson: given a task, can you predict whether today's AI is likely to help you, mislead you, or fail you?",
  },

  "orientation-modern-landscape-use-and-limits": {
    curiosity:
      "You have a new task: summarising 50 legal contracts. Should you reach for AI, hire a person, write a script, or do it by hand? Different learners land in different places — and the reason matters more than the answer.",
    whyThisMatters:
      "The difference between someone useful with AI and someone constantly disappointed by it is usually not skill. It's the ability to predict, before you press 'run', where AI is likely to help and where it will bite you.",
    intuition: [
      "AI works well where mistakes are cheap, patterns are recurring, and inputs look like things it has seen.",
      "AI works badly where mistakes are irreversible, tasks are novel, or the training data doesn't resemble your world.",
      "The verify-ability of the output matters most. If you can check the answer in seconds, AI is a great accelerator. If you can't, you're just moving trust around.",
    ],
    visual: {
      component: "task-fit-predictor",
      caption: "A 3-question decision aid for whether to reach for AI.",
    },
    explanation: [
      "Question 1: Can you verify the output cheaply? If yes, AI can safely propose; you check.",
      "Question 2: Are mistakes reversible? If yes, experiment freely. If no, add human review or don't use AI here.",
      "Question 3: Does this look like something it has seen? Frontier models have seen most of the public internet — but not your private codebase, your niche jargon, or last week's news.",
      "If all three answers are 'yes', AI is often a huge accelerator. If any answer is 'no', proceed with proportional caution.",
    ],
    experiment: {
      component: "task-fit-predictor",
      caption: "Run the 3-question filter on real tasks.",
      instructions:
        "Pick a task, answer the three questions, and see the recommendation. Read the feedback to test your reasoning.",
    },
    reflection: [
      "Pick one task you already use AI for. Run it through the three questions. Would you still use AI for it?",
      "Pick one task you avoid AI on. Same exercise. Would you now try it?",
    ],
    modernAiConnection:
      "The best-known 'AI mistakes' — lawyers filing hallucinated cases, doctors relying on wrong summaries — are almost always cases where the user skipped the verification step. The tools weren't broken; the workflow was.",
    knowledgeCheck: {
      question:
        "You want AI to help you draft cold outreach emails. Which factor most affects whether this is a good fit?",
      options: [
        {
          text: "Whether the AI can be verified is irrelevant here",
          correct: false,
          feedback:
            "Verification always matters. Here you *can* verify — you read each email before sending — which is exactly why this is a good fit.",
        },
        {
          text: "You can read every draft before sending, so mistakes are cheap and reversible",
          correct: true,
          feedback:
            "Exactly. Cheap verification + reversible mistakes make this a green-light task.",
        },
        {
          text: "The AI must be conscious to draft emails well",
          correct: false,
          feedback:
            "Consciousness isn't required to draft prose that you then edit.",
        },
        {
          text: "You should never use AI for text tasks",
          correct: false,
          feedback:
            "Too strong. Text tasks with a human in the loop are often ideal.",
        },
      ],
    },
    nextStepHint:
      "You've oriented to AI. Next module: how to actually learn this material without stalling.",
  },
};
