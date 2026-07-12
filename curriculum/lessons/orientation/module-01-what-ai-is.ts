import type { LessonBody } from "../schema";

export const module01: Record<string, LessonBody> = {
  "orientation-what-ai-is-what-is-ai": {
    curiosity:
      "You ask your phone for the weather and it answers in a friendly sentence. You upload a photo and it finds your dog's face. You type half a message and it suggests the rest. All of this is called 'AI' in headlines. But is it the same kind of thing?",
    whyThisMatters:
      "The word 'AI' is used for wildly different systems. Some are rules a person wrote down. Some are patterns a computer discovered from millions of examples. Confusing them is how learners get lost, how companies get scammed, and how the public gets misled. Getting this vocabulary right is the single highest-leverage habit you can build in week one.",
    intuition: [
      "Imagine three cooks. The first follows a recipe exactly — do this, then this. The second tastes thousands of dishes and slowly gets a feel for what 'good' means. The third has tasted more food than any human ever could, and can invent new dishes in styles it has learned. That is roughly rules-based software, machine learning, and deep learning.",
      "None of them are 'intelligent' the way you are. They are useful — sometimes astonishingly useful — and they fail in ways a human wouldn't. Both facts will stay true for a long time.",
      "AI is the umbrella term. Machine learning is a family of methods inside it. Deep learning is a family inside machine learning. Every deep-learning system is machine learning; not every AI system is.",
    ],
    visual: {
      component: "ai-family-tree",
      caption: "AI, machine learning, and deep learning as nested circles — not synonyms.",
    },
    explanation: [
      "Artificial Intelligence (AI) is the broad idea that computers can perform tasks we usually associate with human thinking — recognising faces, translating language, playing chess, answering questions.",
      "Machine Learning (ML) is one specific way to build AI. Instead of writing rules by hand, you show a computer many examples and let it discover the pattern statistically. If you feed a spam filter 10,000 emails labelled 'spam' or 'not spam', it learns which words tilt the odds.",
      "Deep Learning is a specific kind of ML that uses layered mathematical structures called neural networks. It is what powers today's most impressive systems — image generators, chatbots, voice cloners.",
      "Rules-based software is not AI in this sense, even when it feels smart. A thermostat that turns on the heater below 18°C is following a rule you could write on a napkin. A modern language model is not.",
    ],
    experiment: {
      component: "rules-vs-ml-vs-dl",
      caption: "Sort real systems into rules-based, classical ML, or deep-learning.",
      instructions:
        "Read each system description and pick the category that best fits. Watch for the tell: is a human writing the logic, is a computer learning it from tables of data, or is a large neural network involved?",
    },
    reflection: [
      "Name one product you use daily. Which of the three categories does it most likely fall into, and why?",
      "Write one sentence you could send a family member that would prevent them from confusing 'AI' with 'AGI' or 'sentient robot'.",
    ],
    modernAiConnection:
      "When you hear 'ChatGPT is an AI', a more precise statement is: it is a deep-learning system, specifically a large language model, trained on enormous amounts of text and fine-tuned to behave like a helpful assistant. That precision matters — it tells you why it can write a poem and why it can still confidently invent a fake book title.",
    knowledgeCheck: {
      question:
        "A spam filter is trained on 100,000 emails labelled 'spam' or 'not spam' and then predicts labels on new emails. What is it, most precisely?",
      options: [
        {
          text: "Rules-based software",
          correct: false,
          feedback:
            "Not quite. No human wrote 'if the word FREE appears more than 3 times, mark as spam'. The system learned the pattern from labelled examples.",
        },
        {
          text: "Machine learning",
          correct: true,
          feedback:
            "Exactly. It learned a statistical pattern from labelled data. It may or may not use deep learning under the hood; both are ML.",
        },
        {
          text: "Artificial General Intelligence",
          correct: false,
          feedback:
            "AGI would mean a system with broad, human-level reasoning across many domains. A spam classifier does one narrow thing.",
        },
        {
          text: "Not AI at all",
          correct: false,
          feedback:
            "It is AI — specifically the machine-learning kind. That is the whole point of the term.",
        },
      ],
    },
    nextStepHint:
      "Next you'll see concrete examples of each category side-by-side, so the difference stops being verbal and becomes visible.",
  },

  "orientation-what-ai-is-ml-vs-dl-vs-rules": {
    curiosity:
      "Two systems both decide whether an email is spam. One was written by an engineer over a weekend in the 1990s. The other was trained on billions of emails and uses a neural network. From the outside, they can score the same email the same way. From the inside, they could not be more different.",
    whyThisMatters:
      "Being able to picture what is actually happening inside each category will make every later lesson easier. You'll debug better, choose tools better, and — importantly — call BS on marketing better.",
    intuition: [
      "A rules-based system is a decision tree a human drew. Every branch is a condition someone thought of. If they forgot a case, the system fails on that case.",
      "A classical ML system is a small formula whose numbers were tuned automatically to fit examples. Think 'best-fit line', but often with many variables.",
      "A deep-learning system is a stack of such formulas, arranged in layers, with millions or billions of numbers tuned together. It can capture patterns no human could enumerate by hand.",
    ],
    visual: {
      component: "rules-vs-ml-vs-dl",
      caption: "Three ways to tell spam from not-spam, side by side.",
    },
    explanation: [
      "Rules-based: 'If subject contains WINNER or FREE MONEY, flag as spam.' Fast to build, transparent, brittle to new tricks.",
      "Classical ML: A logistic-regression model that assigns each word a weight learned from labelled data, then adds them up. Robust to new phrasings, still readable by an expert.",
      "Deep learning: A transformer model that reads the whole email as a sequence, encodes context, and outputs a probability. Handles subtle cases the previous two miss, but you cannot easily point at 'why' — the reasoning is spread across billions of numbers.",
      "The trade-off is a recurring theme in this curriculum: interpretability vs power. Rules are easy to inspect and hard to make smart. Deep learning is hard to inspect and can capture nearly anything — including patterns you did not intend.",
    ],
    experiment: {
      component: "rules-vs-ml-vs-dl",
      caption: "Predict which approach a task needs.",
      instructions:
        "For each task, guess whether rules, classical ML, or deep learning is the right fit. There's often more than one workable answer — read the feedback for the trade-off.",
    },
    reflection: [
      "For a system that decides who gets a bank loan, which category do you think is most appropriate — and why does the answer involve more than just accuracy?",
      "Which category most closely resembles how you learned to recognise your friends' faces?",
    ],
    modernAiConnection:
      "Modern AI products almost always mix categories. A customer-support bot might use rules to decide when to escalate to a human, classical ML to route tickets, and a deep language model to draft the reply. 'AI' is rarely one thing.",
    knowledgeCheck: {
      question:
        "Which pairing best matches system to typical approach?",
      options: [
        {
          text: "A thermostat firmware — deep learning",
          correct: false,
          feedback:
            "A thermostat is a classic rules-based system. Deep learning would be extreme overkill and probably worse.",
        },
        {
          text: "A photo-realistic image generator — rules-based",
          correct: false,
          feedback:
            "No one can write rules that produce photo-realistic images of arbitrary prompts. This is squarely deep learning.",
        },
        {
          text: "A credit-scoring model with clear per-feature weights — classical ML",
          correct: true,
          feedback:
            "Correct. Interpretability is often required by regulators, and classical ML (like logistic regression) offers readable weights per feature.",
        },
        {
          text: "All three approaches produce equally interpretable systems",
          correct: false,
          feedback:
            "Interpretability drops sharply from rules to deep learning. That trade-off is one of the most important themes of this curriculum.",
        },
      ],
    },
    nextStepHint:
      "You've placed today's AI into categories. Next: how 'narrow' today's AI actually is, and what 'general intelligence' would even mean.",
  },

  "orientation-what-ai-is-narrow-vs-general": {
    curiosity:
      "A chess engine beats every human on Earth at chess. It cannot make you a cup of tea. It cannot even understand the question. Is it intelligent?",
    whyThisMatters:
      "Whether AI systems are 'narrow' or 'general' shapes how you should trust them, deploy them, and legislate them. The public conversation blurs the two constantly. Getting the distinction right protects you from both hype and unnecessary fear.",
    intuition: [
      "Narrow AI is like a world-class specialist. Extremely good at one task, useless outside it.",
      "General intelligence is what humans (mostly) have: transfer skills across domains, common sense, the ability to learn a wildly new task from a few examples.",
      "Modern chatbots feel general because language is a universal interface. Under the hood, they are still narrow — trained to predict text, not to think.",
    ],
    visual: {
      component: "narrow-vs-general",
      caption: "Same input, different tasks: watch a narrow model refuse to transfer.",
    },
    explanation: [
      "Every AI system in production today is narrow AI. It was trained for a specific class of tasks — recognise faces, translate text, drive on highways, complete sentences.",
      "Artificial General Intelligence (AGI) is a hypothetical system that could learn or adapt to essentially any intellectual task a human can. It does not exist. Reasonable experts disagree strongly about whether current techniques will get us there.",
      "Language models blur the line because they can appear to do many tasks. But 'appearing to' and 'reliably being able to' are different, and the failure modes give it away — confident nonsense, brittleness to phrasing, inability to notice when a task is impossible.",
      "When you hear 'AGI is 2 years away' or 'AGI is impossible', treat both with the same skepticism reserved for any confident prediction about a system nobody has built.",
    ],
    experiment: {
      component: "narrow-vs-general",
      caption: "Ask a 'general-looking' model to do things outside its training.",
      instructions:
        "Toggle between simulated tasks and see when the narrow model succeeds, fails silently, or refuses.",
    },
    reflection: [
      "Describe one task you do every day that would require genuinely general intelligence to automate.",
      "Why might a company have a business incentive to describe its narrow product as if it were general?",
    ],
    modernAiConnection:
      "Frontier language models today can pass professional exams and still fail to reliably count the number of r's in 'strawberry'. That is not a bug you can patch — it is what 'narrow, trained on text' looks like at scale. Recognising this pattern lets you use these tools without over-trusting them.",
    knowledgeCheck: {
      question:
        "Which is the most accurate description of today's most advanced AI systems?",
      options: [
        {
          text: "General artificial intelligence — human-level across all domains",
          correct: false,
          feedback:
            "No system today meets that bar. They can look impressive on many tasks and still fail catastrophically outside their training distribution.",
        },
        {
          text: "Narrow AI systems that are extremely capable within their trained domain",
          correct: true,
          feedback:
            "Exactly. Even the most impressive frontier models are, technically, narrow AI. They are broad-*seeming* narrow AI.",
        },
        {
          text: "Sentient beings with preferences and consciousness",
          correct: false,
          feedback:
            "There is no scientific evidence any current system is sentient. Systems can be trained to say they are — that is not the same thing.",
        },
        {
          text: "Purely rules-based systems",
          correct: false,
          feedback:
            "Modern flagship systems are deep-learning systems, not rules-based. But they are still narrow in the technical sense.",
        },
      ],
    },
    nextStepHint:
      "Next you'll get a short history of how the field arrived here — because knowing where it came from tells you what its blind spots probably are.",
  },

  "orientation-what-ai-is-history": {
    curiosity:
      "The word 'artificial intelligence' was coined at a summer workshop in 1956. The organisers thought a small team could crack most of it in two months. Nearly seventy years later, we still cannot make a robot reliably fold laundry. What happened?",
    whyThisMatters:
      "Every generation of AI researchers has believed they were close. Every generation has been wrong in interesting ways. Knowing this history is a cheap way to inoculate yourself against present-day hype.",
    intuition: [
      "Symbolic AI (1950s–80s) tried to program intelligence with logic rules. It got surprisingly far and then hit a wall.",
      "Statistical / classical ML (1990s–2010s) let computers learn patterns from data. This is what powered spam filters, recommenders, and speech recognition for decades.",
      "Deep learning (2012–now) let neural networks with many layers, trained on huge datasets and GPUs, blow past previous benchmarks in vision, speech, and language.",
    ],
    visual: {
      component: "ai-history-timeline",
      caption: "AI's seven decades in one scrollable timeline.",
    },
    explanation: [
      "Early AI (1950s–1970s) was optimistic and symbolic — write rules and inference engines. It excelled at toy problems and stumbled on real ones. Funding collapsed twice, in stretches called 'AI winters'.",
      "Statistical methods (1980s–2000s) traded elegance for data. If you cannot enumerate the rules, learn them from examples. This era gave us spam filters, credit scoring, product recommendations.",
      "The deep-learning breakthrough (2012, ImageNet) showed that scaling up neural networks on GPUs beat every hand-crafted approach on image recognition. That template — scale data, scale compute, keep the architecture simple — has driven progress since.",
      "The transformer architecture (2017) let deep learning generalise to language at scale. Everything you now call 'generative AI' descends from that lineage.",
    ],
    experiment: {
      component: "ai-history-timeline",
      caption: "Drop each milestone into the correct era.",
      instructions:
        "Read each milestone and place it in the right decade. Notice how progress isn't smooth — it clusters around new ideas that unlock long plateaus.",
    },
    reflection: [
      "Two AI winters have already happened. What would a third one look like — and what would cause it?",
      "If today's approach hits a wall, what kind of breakthrough might unstick it?",
    ],
    modernAiConnection:
      "Everything you interact with under the label 'AI' today — image generators, chatbots, voice assistants — sits on top of ideas from the 1950s (neurons as math), the 1980s (backpropagation), and the 2010s (transformers, GPUs, huge data). Understanding that stack of shoulders makes 'AI' look less like magic and more like a long relay race.",
    knowledgeCheck: {
      question:
        "Which of these best explains why deep learning suddenly worked in the 2010s after decades of underwhelming results?",
      options: [
        {
          text: "Someone finally invented the neural network",
          correct: false,
          feedback:
            "Neural networks are 1950s ideas. What changed was scale, data, and hardware — not the core concept.",
        },
        {
          text: "A combination of much more data, faster GPU compute, and refined training techniques",
          correct: true,
          feedback:
            "Yes. The pieces existed for a long time; they only produced dramatic results when combined at scale.",
        },
        {
          text: "Rules-based systems finally became powerful enough",
          correct: false,
          feedback:
            "Rules-based AI's limitations are exactly what deep learning routed around.",
        },
        {
          text: "AGI was achieved in 2012",
          correct: false,
          feedback:
            "Nothing close to AGI has been achieved. 2012 was the ImageNet moment for image classification — impressive, and still narrow.",
        },
      ],
    },
    nextStepHint:
      "History primed you to spot hype. Next: a working checklist for evaluating any AI claim you encounter.",
  },

  "orientation-what-ai-is-hype-vs-reality": {
    curiosity:
      "'This model reasons.' 'AI is now conscious.' 'AI will take every job by next Tuesday.' Some of these are marketing. Some are honest confusion. Some are worth taking seriously. How do you tell?",
    whyThisMatters:
      "Your career, your investments, and your civic opinions will all be shaped by AI claims for the next decade. You need a small, reliable filter you can apply in seconds.",
    intuition: [
      "The core question: what did the system actually *do*, reproducibly, in a setting resembling the real world?",
      "Demos are not products. Benchmarks are not deployments. A model that scores 95% on a test does not necessarily work 95% of the time for you.",
      "Claims about 'consciousness', 'reasoning', or 'understanding' should be treated as metaphors unless there's a precise definition attached.",
    ],
    visual: {
      component: "hype-vs-reality",
      caption: "A five-question checklist you can apply to any AI headline.",
    },
    explanation: [
      "Ask: what task, exactly? 'AI writes code' is meaningless without knowing which task, which language, which difficulty level.",
      "Ask: measured how? Benchmarks are gamed constantly, sometimes accidentally, sometimes not. Look for evaluations resembling actual use.",
      "Ask: how often does it work? An impressive best-case demo can hide a bad average case.",
      "Ask: what does it fail at? Trustworthy reports name failure modes. Marketing hides them.",
      "Ask: who benefits from the claim? Any strong claim about AI has a paying audience. That is not automatically wrong — it is just worth naming.",
    ],
    experiment: {
      component: "hype-vs-reality",
      caption: "Run five real-sounding claims through the filter.",
      instructions:
        "For each claim, decide which of the five checklist questions punctures it or supports it. Some are legit; some are not.",
    },
    reflection: [
      "Pick one AI claim you have seen this month. Apply the five-question filter. What do you now think of it?",
      "Which of the five questions do you personally forget to ask most often?",
    ],
    modernAiConnection:
      "The people building the most advanced AI systems today publicly disagree — sometimes bitterly — about what these systems can do. That is not a scandal; it is the honest state of a young field. Your filter should let you hold nuance instead of picking a team.",
    knowledgeCheck: {
      question:
        "A headline says: 'New AI passes the bar exam in the top 10% of test-takers.' Which follow-up question does the most to check whether this is real progress?",
      options: [
        {
          text: "'What programming language was it written in?'",
          correct: false,
          feedback:
            "Interesting trivia but doesn't test the claim.",
        },
        {
          text: "'Was the test set contaminated with data the model was trained on?'",
          correct: true,
          feedback:
            "Excellent question. If the model has seen the exam or similar during training, the score is inflated. Contamination is a huge, real issue in AI benchmarks.",
        },
        {
          text: "'Is the AI conscious?'",
          correct: false,
          feedback:
            "Consciousness is not testable by exam scores. This question conflates capability with sentience.",
        },
        {
          text: "'How many people worked on it?'",
          correct: false,
          feedback:
            "Doesn't tell you whether the score is genuine.",
        },
      ],
    },
    nextStepHint:
      "You now have a filter. Next module: a tour of the actual, existing categories of AI systems you'll meet in the wild.",
  },
};
