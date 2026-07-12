import type { LessonBody } from "../schema";

export const module06: Record<string, LessonBody> = {
  "orientation-first-ai-chat-experiment": {
    curiosity:
      "You've read about AI. You've sorted it into categories. You've been warned about hallucinations. Now: what actually happens when you sit down and *use* one on purpose, with a plan?",
    whyThisMatters:
      "There is a specific kind of understanding you can only get by touching the tool. Everything in this stage becomes real in this lesson. So do the failure modes.",
    intuition: [
      "A structured chat with an AI is not a conversation. It is a small experiment. You have a hypothesis, you probe, you observe, you change one thing.",
      "Same prompt, same day, can give different answers. That non-determinism is a feature of the underlying math and something you'll learn to work with.",
      "You are running four experiments in this lesson: ask a factual question, ask a creative task, ask a reasoning task, ask something outside its knowledge.",
    ],
    visual: {
      component: "prompt-lab",
      caption: "A simulated chat, deterministic per prompt — like a real one but reproducible.",
    },
    explanation: [
      "Experiment 1 — factual: ask something with a verifiable answer ('What year did the first ImageNet moment happen?'). Cross-check.",
      "Experiment 2 — creative: ask for a rhyming couplet about your favourite food. Notice the style and whether it feels generic.",
      "Experiment 3 — reasoning: give it a small logic puzzle. Notice whether it walks through the steps or leaps to an answer.",
      "Experiment 4 — outside knowledge: ask something specific to your local town or last week's news. Watch it hallucinate or admit uncertainty.",
      "After each: write one sentence on what surprised you. This is the raw material for your stage project.",
    ],
    experiment: {
      component: "prompt-lab",
      caption: "Run the four experiments in a simulated chat.",
      instructions:
        "Pick each of the four experiment types. The simulated responses reflect real patterns of AI behaviour. Log what you observe.",
    },
    reflection: [
      "Which experiment surprised you most?",
      "Where did the AI feel most like a peer? Where did it feel like a slightly-broken tool?",
    ],
    modernAiConnection:
      "Every AI-adjacent job — from prompt engineer to research scientist — starts with this same discipline: form a hypothesis, probe, observe, iterate. You just did the same loop that senior AI engineers run daily.",
    knowledgeCheck: {
      question:
        "Ask the same question to the same AI twice within a minute and you get slightly different answers. What is the most correct explanation?",
      options: [
        {
          text: "The AI is offended and randomising to punish you",
          correct: false,
          feedback: "The AI has no state between messages and no feelings.",
        },
        {
          text: "The model samples from probability distributions when generating each token, and small differences compound",
          correct: true,
          feedback:
            "Yes. Non-determinism is built into how these models generate text unless the temperature is explicitly set to zero.",
        },
        {
          text: "The AI's opinions changed between the two queries",
          correct: false,
          feedback: "The model has no persistent opinions between separate sessions.",
        },
        {
          text: "There is a bug in the AI",
          correct: false,
          feedback:
            "It's an intentional design property, not a bug. It gives varied, less-robotic-sounding outputs.",
        },
      ],
    },
    nextStepHint:
      "You've probed. Next: change one thing at a time in a prompt and watch the output shift — the first taste of prompt engineering.",
  },

  "orientation-first-ai-prompting-first-look": {
    curiosity:
      "Ask a chatbot 'write me an email'. Then ask 'write a warm, one-paragraph email to a friend I haven't spoken to in a year, mentioning we should get coffee'. Same model. Wildly different result. Why?",
    whyThisMatters:
      "Prompting is the interface to modern AI, and small changes have outsized effects. This lesson gives you the scientist's habit — vary one thing, observe, learn.",
    intuition: [
      "The model has read a lot of everything. Your prompt is a very short instruction that has to select which 'kind of everything' to draw from.",
      "Concrete beats abstract. Constraints beat freedom. Roles ('you are a patient tutor') focus tone. Examples ('here is the style I want') focus form.",
      "Change one variable at a time. If you rewrite the whole prompt and get a different answer, you learned nothing about which change helped.",
    ],
    visual: {
      component: "prompt-delta",
      caption: "One base prompt, five isolated variations, five observable effects.",
    },
    explanation: [
      "Specificity: 'write an email' vs 'write a 60-word warm email to a coworker'. The second selects far more sharply.",
      "Role: 'explain X' vs 'explain X as if to a curious 12-year-old'. Role changes vocabulary, examples, and pacing.",
      "Format: 'give me options' vs 'give me exactly three options, each one sentence, no preamble'. Format constraints reduce fluff.",
      "Examples (few-shot): showing the model 2–3 examples of the input-output pattern is often more effective than describing it.",
      "Reasoning cue: 'think step by step before answering' can improve results on reasoning-heavy tasks. Not always, but often.",
    ],
    experiment: {
      component: "prompt-delta",
      caption: "Apply each variation to the same base prompt.",
      instructions:
        "Start with the base prompt. Apply one variation at a time. Compare outputs side by side. Note which variation had the biggest effect on your task.",
    },
    reflection: [
      "Which variation surprised you most?",
      "What kind of task in your life could you improve by applying one of these variations tomorrow?",
    ],
    modernAiConnection:
      "Every serious LLM application — coding assistants, agents, RAG systems — is built on prompts. The habits from this lesson generalise directly. Later in Stage 9 you'll formalise these patterns into evaluation-grade prompt engineering.",
    knowledgeCheck: {
      question: "You want an AI to write a code review. Which prompt is likely to yield the best result?",
      options: [
        {
          text: "'Review this code.'",
          correct: false,
          feedback: "No constraints, no role, no format. You'll get a generic answer.",
        },
        {
          text: "'You are a senior Python engineer. Review this code for correctness, readability, and edge cases. Return exactly three bullet points, one per category.'",
          correct: true,
          feedback:
            "Yes — role + specific criteria + format constraint. All three variations layered.",
        },
        {
          text: "'Please please please review this code, thanks.'",
          correct: false,
          feedback: "Politeness is fine, but does no work.",
        },
        {
          text: "'Review this. Also tell me about the weather.'",
          correct: false,
          feedback: "Multiple unrelated instructions typically weaken the response.",
        },
      ],
    },
    nextStepHint:
      "Better prompts still hallucinate. Next: how to verify what an AI told you before you rely on it.",
  },

  "orientation-first-ai-verifying-outputs": {
    curiosity:
      "The AI just gave you a citation. It looks real. The book title is plausible, the author is real, the year is right. You search — and the citation does not exist. What just happened, and how do you catch it in future?",
    whyThisMatters:
      "Verification is what separates learners who use AI as a superpower from learners who slowly, invisibly, absorb an increasing number of wrong things.",
    intuition: [
      "AI outputs are proposals, not facts. Treat every claim you'd cite as one to verify.",
      "The cost of verification is small; the cost of internalising a wrong fact is huge and cumulative.",
      "Different failure modes need different checks — hallucinated citations, subtly wrong code, misremembered dates, made-up definitions.",
    ],
    visual: {
      component: "verify-the-ai",
      caption: "Four common failure modes, and the specific check that catches each.",
    },
    explanation: [
      "Citations: always click through. If the source doesn't exist, or doesn't say what the AI claimed, it hallucinated.",
      "Code: run it. Read the error messages. Read the docs for any function it used unfamiliarly.",
      "Facts (dates, names, quotes): search for the claim in quotes. If nothing authoritative pops up, doubt it.",
      "Definitions: read the same concept in an authoritative source — a docs page, a well-cited paper, a canonical textbook.",
      "A useful habit: at the end of any AI-assisted work, spend two minutes listing 'what would I be embarrassed by if this turned out to be wrong?' — and verify those specifically.",
    ],
    experiment: {
      component: "verify-the-ai",
      caption: "Diagnose five AI outputs; identify the failure mode and the fix.",
      instructions:
        "For each output, decide whether it's likely correct, and if not, which failure mode it exhibits. Read the feedback carefully.",
    },
    reflection: [
      "What's a piece of AI-assisted work you accepted uncritically in the past month? What would you have caught with a two-minute verification pass?",
      "Which failure mode do you think you're personally most vulnerable to?",
    ],
    modernAiConnection:
      "Every professional workflow with AI — coding, writing, research — has a verification step. Companies with mature AI use call this 'human-in-the-loop'. You are learning the exact same discipline that professional engineers apply.",
    knowledgeCheck: {
      question: "An AI gives you a beautifully written summary of a paper. What is the single most important verification step?",
      options: [
        {
          text: "Ask the AI if the summary is accurate",
          correct: false,
          feedback:
            "The AI cannot reliably self-evaluate. Asking it to grade itself is worse than useless — it will confidently affirm.",
        },
        {
          text: "Open the paper and check that the summary reflects what it actually says",
          correct: true,
          feedback:
            "Yes. Primary source is the ground truth. Two minutes here can save you from citing something the paper doesn't actually claim.",
        },
        {
          text: "Trust it because the writing is fluent",
          correct: false,
          feedback: "Fluency is orthogonal to correctness for language models.",
        },
        {
          text: "Ignore the summary and write your own",
          correct: false,
          feedback: "Overkill — the summary is often useful. It just needs verification, not replacement.",
        },
      ],
    },
    nextStepHint:
      "One lesson left. It's not a lesson exactly — it's your commitment to the next thirteen stages.",
  },

  "orientation-first-ai-learning-contract": {
    curiosity:
      "Every learner who finishes this curriculum has, at some point, made a promise to themselves in writing. Every learner who quits has, at some point, quietly let a slipping schedule become a permanent one. What's the difference between the two moments?",
    whyThisMatters:
      "This lesson is the smallest one and does the most work. Writing your intentions down — pace, boundaries, accountability — is the difference between wanting to learn AI and being someone who is learning AI.",
    intuition: [
      "A learning contract is a short document you write to future-you. Not to a teacher, not to a company. To you.",
      "The commitment doesn't need to be ambitious. It needs to be honest and small enough to keep.",
      "Missed days are not the failure. Not restarting after a missed day is.",
    ],
    visual: {
      component: "learning-contract",
      caption: "Assemble your learning contract from durable, tested clauses.",
    },
    explanation: [
      "A workable contract has five parts: your why, your pace, your recovery plan, your accountability, your signature.",
      "Why: two sentences on what pulled you here. Read this before every session.",
      "Pace: your fixed weekly time blocks. Not aspirational — sustainable.",
      "Recovery: what you do when you miss a session. ('Do the next one at the next scheduled time; do not double up.')",
      "Accountability: one person you'll tell, one artifact you'll publish, one review date on the calendar.",
      "Signature: date it. That specific gesture — signing something to yourself — is a well-documented commitment technique.",
    ],
    experiment: {
      component: "learning-contract",
      caption: "Build a contract you'd actually sign.",
      instructions:
        "Fill each section. Reject any clause you can't defend keeping. When each field is honest, save it — a print or a file kept where you'll see it.",
    },
    reflection: [
      "What is the smallest commitment you know you can keep for 12 weeks?",
      "Who is one person you will tell — this week — that you're doing this?",
    ],
    modernAiConnection:
      "The 'Personal Learning Map and First AI Experiment' project that closes this stage is exactly this contract, paired with a written log of your first structured AI chat. You've built both pieces during this stage — the last step is putting them side by side.",
    knowledgeCheck: {
      question: "Which of these is the most useful clause in a learning contract, according to research on habit formation?",
      options: [
        {
          text: "'I will study every day for at least an hour, no exceptions.'",
          correct: false,
          feedback:
            "Zero-tolerance rules are brittle. The first inevitable exception cascades into abandonment.",
        },
        {
          text: "'If I miss a session, I do the next one at the next scheduled time — I do not double up or restart from zero.'",
          correct: true,
          feedback:
            "Yes. Well-designed recovery rules are what separate finishers from stallers. Missing is inevitable; giving up is not.",
        },
        {
          text: "'I will only study when I feel motivated.'",
          correct: false,
          feedback:
            "Motivation is not a schedule. Every learner who relies on it stalls.",
        },
        {
          text: "'I will study until I master everything before starting Stage 1.'",
          correct: false,
          feedback:
            "Perfectionism at the start is a very common failure mode. Move forward at a sustainable pace.",
        },
      ],
    },
    nextStepHint:
      "This is the end of Stage 1. Ahead: Stage 2, where you meet computers, operating systems, and networks close up.",
  },
};
