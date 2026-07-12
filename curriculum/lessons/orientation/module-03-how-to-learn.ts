import type { LessonBody } from "../schema";

export const module03: Record<string, LessonBody> = {
  "orientation-how-to-learn-science": {
    curiosity:
      "You've probably highlighted a textbook, re-read notes, and pulled an all-nighter before an exam. How much of what you 'learned' that way is still in your head today? Cognitive science says: shockingly little.",
    whyThisMatters:
      "This curriculum is thirteen stages long. You will not finish it on willpower alone. The specific study techniques you use — not how many hours you sit — determine whether it sticks.",
    intuition: [
      "Your brain does not save what it reads. It saves what it struggles to retrieve.",
      "Learning that feels easy is often forgotten fast. Learning that feels hard is often what sticks.",
      "Five techniques do most of the heavy lifting: retrieval, spacing, interleaving, worked examples, and reflection.",
    ],
    visual: {
      component: "learning-science-cards",
      caption: "The five evidence-based techniques, one card each.",
    },
    explanation: [
      "Retrieval: force your brain to pull up an idea without looking. Flashcards, closed-book summaries, teaching a friend. Every retrieval strengthens the memory.",
      "Spacing: revisit material with growing gaps. A 5-minute review tomorrow, next week, next month beats a 3-hour cram.",
      "Interleaving: mix related topics instead of drilling one to death. Confusion between similar ideas is the *whole point* — it builds discrimination.",
      "Worked examples: study fully worked solutions before attempting problems yourself. Cheaper than banging your head against a blank page.",
      "Reflection: after each session, write 2–3 sentences on what you learned and what confused you. This is where fragile knowledge becomes durable.",
    ],
    experiment: {
      component: "learning-science-cards",
      caption: "Pick two techniques you'll actually try this week.",
      instructions:
        "Read each card. Choose two techniques you commit to using in the next 7 days. You'll design the schedule in the next lesson.",
    },
    reflection: [
      "Which technique were you doing already?",
      "Which technique is closest to what you've been doing wrong?",
    ],
    modernAiConnection:
      "AI can generate infinite flashcards for you in seconds. It can also invent facts on those flashcards. The techniques in this lesson are how you get the benefit without letting the AI silently teach you nonsense.",
    knowledgeCheck: {
      question:
        "You have 60 minutes to study before an exam next week. What is the most effective single use of that time, according to learning science?",
      options: [
        {
          text: "Re-read the chapter twice, highlighting the important parts",
          correct: false,
          feedback:
            "Re-reading and highlighting feel productive but produce the smallest long-term gains. They are the classic 'illusion of learning'.",
        },
        {
          text: "Close the book and try to write down everything you can remember, then check what you missed",
          correct: true,
          feedback:
            "Yes — that's active retrieval, one of the strongest evidence-based techniques. The struggle is the mechanism.",
        },
        {
          text: "Watch a video of someone explaining the material at 2x speed",
          correct: false,
          feedback:
            "Passive intake, faster. Feels efficient; doesn't build durable memory.",
        },
        {
          text: "Copy your notes over into neater handwriting",
          correct: false,
          feedback:
            "This is a beloved procrastination habit. It engages motor memory, not conceptual memory.",
        },
      ],
    },
    nextStepHint:
      "Next: turn 'retrieval and spacing' from a slogan into a concrete weekly routine for this curriculum.",
  },

  "orientation-how-to-learn-retrieval-spacing": {
    curiosity:
      "You could learn 100 flashcards in a day and forget 80 by next week. You could also learn 20 a day and remember most of them a year later. Same brain. Different schedule.",
    whyThisMatters:
      "Spaced retrieval is the single biggest ROI you can extract from your study time. Skipping it is like doing 100 push-ups every morning and never stretching — technically effort, mostly wasted.",
    intuition: [
      "Every time you almost forget something, then successfully retrieve it, the memory gets stronger.",
      "The trick is scheduling the reviews at the edge of forgetting — not too early (wasted effort), not too late (fully forgotten).",
      "The intervals grow: 1 day, 3 days, 1 week, 2 weeks, 1 month, 3 months. This is the shape of a good long-term memory schedule.",
    ],
    visual: {
      component: "spacing-scheduler",
      caption: "Watch the forgetting curve — with and without spaced reviews.",
    },
    explanation: [
      "Forgetting is exponential. Without review, you lose most new material within a week.",
      "Each successful retrieval flattens the curve. After 4–5 well-spaced reviews, the interval before forgetting stretches into months and years.",
      "For this curriculum, a workable minimum: for every lesson, do 5 minutes of retrieval within 24 hours, again after a week, again after a month.",
      "Free tools like Anki automate the scheduling. Paper flashcards work fine too. The tool matters less than the habit.",
    ],
    experiment: {
      component: "spacing-scheduler",
      caption: "Design your own spacing schedule for this week.",
      instructions:
        "Move the sliders to set your review intervals. Watch the retention curve change. Commit to intervals you'll actually keep.",
    },
    reflection: [
      "What time of day will you do your daily 5-minute retrieval?",
      "What is one class or subject you learned this way in the past — and one you didn't? What was the difference in what stuck?",
    ],
    modernAiConnection:
      "The same principle powers modern language-model training: the model sees each example many times, spaced across training. When learners *don't* apply spacing, they end up doing worse than the systems they're trying to understand.",
    knowledgeCheck: {
      question:
        "You review a lesson intensely for one hour today and never touch it again. According to the forgetting curve, what happens?",
      options: [
        {
          text: "You will remember it permanently — one hour is enough",
          correct: false,
          feedback:
            "The forgetting curve says otherwise. Without further review, memory decays quickly.",
        },
        {
          text: "You will forget most of it within days to weeks",
          correct: true,
          feedback:
            "Right. Massed practice without spacing is well-studied — retention is much lower than short spaced reviews.",
        },
        {
          text: "You will forget it faster than if you had studied less",
          correct: false,
          feedback:
            "You'll forget quickly, but not *faster* than studying less. The point is that time invested this way is largely wasted.",
        },
        {
          text: "The forgetting curve does not apply to technical subjects",
          correct: false,
          feedback: "It applies universally.",
        },
      ],
    },
    nextStepHint:
      "Even with a great schedule, confusion silently compounds. Next: how to notice it before it derails you.",
  },

  "orientation-how-to-learn-notice-confusion": {
    curiosity:
      "You're three lessons deep. Something felt fuzzy in lesson one, but you kept going because you assumed it would clarify itself. Now nothing makes sense. Where did that failure actually start?",
    whyThisMatters:
      "The learners who stall in technical subjects almost always share a pattern: small unresolved confusion, compounded silently over weeks. Noticing it early is a cheap superpower.",
    intuition: [
      "Confusion has a smell before it has a name. You feel a mild fog, skim past a word, hope it'll click.",
      "The cost of pausing to resolve confusion right now is minutes. The cost of not resolving it is that you fail a whole later chapter and can't tell why.",
      "Learning to name what confuses you is more than half of resolving it.",
    ],
    visual: {
      component: "confusion-detector",
      caption: "A short checklist of confusion signals you can catch in real time.",
    },
    explanation: [
      "Signal 1: you're re-reading the same sentence and it isn't sticking. Stop.",
      "Signal 2: you could not explain the last paragraph to a friend in your own words. Try to. If you can't, back up.",
      "Signal 3: a word appeared that you'd nod along to but couldn't define. Look it up now.",
      "Signal 4: you feel bored in a way that's different from tiredness. Boredom often masks confusion.",
      "For each signal, the fix is the same: write down the specific thing you don't understand, then find one concrete resource to resolve it — the lesson itself, a search, or a well-scoped question to an AI tutor.",
    ],
    experiment: {
      component: "confusion-detector",
      caption: "Practice on four snippets that hide different kinds of confusion.",
      instructions:
        "For each snippet, pick which confusion signal fires most strongly. Read the feedback to see what a good response looks like.",
    },
    reflection: [
      "Think back to a class you dropped or a book you gave up on. Can you name the specific concept where the fog first rolled in?",
      "What one signal are you most likely to ignore?",
    ],
    modernAiConnection:
      "AI tutors are extraordinary at answering specific, well-scoped questions and terrible at rescuing you from vague fog. Naming your confusion crisply is what makes the AI actually useful. Fuzzy question in, fuzzy answer out.",
    knowledgeCheck: {
      question:
        "You realise you've re-read the same paragraph three times and it still feels fuzzy. What is the best next move?",
      options: [
        {
          text: "Keep going — it'll probably click later",
          correct: false,
          feedback:
            "This is the exact habit that produces stalled learners two chapters later.",
        },
        {
          text: "Write down the specific thing that confuses you and resolve it before continuing",
          correct: true,
          feedback:
            "Yes. Naming the confusion is 80% of resolving it, and the cost of pausing now is much less than the cost of compounding fog.",
        },
        {
          text: "Watch a totally unrelated video to reset",
          correct: false,
          feedback:
            "You might feel better, but the underlying confusion is still there when you come back.",
        },
        {
          text: "Assume the material is wrong",
          correct: false,
          feedback:
            "Sometimes true — but only after you've done the work of naming what's not clicking.",
        },
      ],
    },
    nextStepHint:
      "You'll have an AI tutor throughout this curriculum. Next: how to use it without letting it teach you confidently wrong things.",
  },

  "orientation-how-to-learn-ai-tutors": {
    curiosity:
      "An AI tutor patiently answers every question, never rolls its eyes, and is available at 2am. It is also occasionally, fluently, completely wrong. How do you extract the good and defuse the bad?",
    whyThisMatters:
      "AI tutors are the single biggest change in learning since the printing press — and the single largest source of confidently wrong 'facts' entering learners' heads. Both are true.",
    intuition: [
      "Treat the AI tutor as a very well-read peer, not an authority. Peers are useful and wrong sometimes.",
      "Ask specific, scoped questions. 'Explain gradient descent' beats 'help me understand ML'. A concrete example beats a topic name.",
      "Cross-check anything factual — dates, names, quotes, formulas — against a source.",
    ],
    visual: {
      component: "ai-tutor-crosscheck",
      caption: "Same question, two answers — spot the confident hallucination.",
    },
    explanation: [
      "AI tutors are language models. They are trained to produce plausible-sounding text. When they know, they explain well; when they don't, they still explain well — but wrongly.",
      "A great pattern: ask for an explanation, then ask for a counter-example, then ask what could go wrong. If any of the three answers contradict, you've caught a hallucination.",
      "Never ask an AI tutor to grade its own answer. It cannot reliably tell you when it is wrong.",
      "Prefer to use the AI for: reformulating, giving worked examples, generating practice problems, unstuck-ing you. Use human-vetted materials for authoritative facts.",
    ],
    experiment: {
      component: "ai-tutor-crosscheck",
      caption: "Cross-check five AI-generated 'facts' against ground truth.",
      instructions:
        "Read each pair of AI answers. Decide which is right, which is wrong, and identify the tell. Real hallucinations, curated for this lesson.",
    },
    reflection: [
      "Write down one topic you'd feel confident using AI to learn, and one where you would not — with a reason for each.",
      "Draft a template question you'd use to check the AI's explanation of any new concept.",
    ],
    modernAiConnection:
      "The same models teaching you here also power professional-grade coding assistants, medical scribes, and legal research tools. The exact same 'confident wrong answers' problem shows up in every one of those. Your habit of cross-checking scales with you.",
    knowledgeCheck: {
      question:
        "Which of these is the strongest signal that an AI tutor might have hallucinated an answer?",
      options: [
        {
          text: "The answer is written confidently",
          correct: false,
          feedback:
            "AI tutors are almost always confident, both when right and wrong. Confidence is not a reliable signal on its own.",
        },
        {
          text: "The answer cites a specific book, quote, or date you cannot find via search",
          correct: true,
          feedback:
            "Yes — fabricated citations are one of the most reliable tells of an LLM hallucination.",
        },
        {
          text: "The answer is long",
          correct: false,
          feedback: "Length is not correlated with correctness.",
        },
        {
          text: "The answer uses technical vocabulary",
          correct: false,
          feedback: "Correct answers use technical vocabulary too.",
        },
      ],
    },
    nextStepHint:
      "You have techniques, a schedule shape, and a tutor policy. Next: turn all of that into a concrete weekly study plan you can actually run.",
  },

  "orientation-how-to-learn-study-plan": {
    curiosity:
      "'I'll study whenever I can find time.' Every learner who says this stops within four weeks. Every learner who blocks two 90-minute slots per week keeps going for months. What does the second group know?",
    whyThisMatters:
      "A study plan is the difference between 'I want to learn AI' and 'I am learning AI'. The plan doesn't have to be perfect. It has to exist and be small enough to keep.",
    intuition: [
      "The Learn AI weekly rhythm has five modes: Learn (new content), Visualize (see it), Practice (retrieve), Build (make something), Reflect (write).",
      "A realistic week has 3–6 hours of learning time. That's enough — if it's the right shape.",
      "The single largest predictor of finishing is a fixed weekly schedule you can defend against life.",
    ],
    visual: {
      component: "study-plan-builder",
      caption: "Assemble a weekly plan across Learn / Visualize / Practice / Build / Reflect.",
    },
    explanation: [
      "Learn (40% of your time): move forward through new lessons. Read, watch, take notes.",
      "Visualize (10%): draw diagrams, run interactives, sketch what you understand.",
      "Practice (25%): retrieval — flashcards, closed-book summaries, teaching someone.",
      "Build (20%): small projects that apply the ideas. Portfolio-worthy is good, throwaway is fine.",
      "Reflect (5%): 3–5 sentences per session on what stuck and what confused you.",
      "A workable minimum week: 2 x 90-minute sessions (Learn + Practice + Reflect) + 1 x 60-minute session (Build + Visualize). About 4 hours. Sustainable for months.",
    ],
    experiment: {
      component: "study-plan-builder",
      caption: "Build your own weekly plan and see the balance.",
      instructions:
        "Drop time blocks into your week across the five modes. The tool will show your total and warn if the balance is off.",
    },
    reflection: [
      "When, specifically, will you do this week's first study session? Time, place, what happens right before?",
      "What is one thing that will try to steal that time — and what's your pre-committed response?",
    ],
    modernAiConnection:
      "The 'Personal Learning Map' project that closes this stage asks you to write this plan down and pair it with a first structured chat with an AI system. You now have every piece you need to draft that map.",
    knowledgeCheck: {
      question:
        "Which weekly pattern is most likely to keep a beginner making progress over three months?",
      options: [
        {
          text: "One 10-hour weekend cram, then nothing during the week",
          correct: false,
          feedback:
            "Massed practice without spacing produces the biggest forgetting curve. It also collapses the first time a weekend is disrupted.",
        },
        {
          text: "Two 90-minute focused sessions plus a 60-minute build session, at fixed times",
          correct: true,
          feedback:
            "Yes. Predictable, small, spaced blocks compound. This is the shape that finishes.",
        },
        {
          text: "Whenever inspiration strikes, no matter how long",
          correct: false,
          feedback:
            "Inspiration is unreliable. Almost every learner who follows this pattern stops within a month.",
        },
        {
          text: "One 15-minute session per day, no build or practice time",
          correct: false,
          feedback:
            "Better than nothing, but too short to make progress on the Build and Practice modes. You'd move forward without ever consolidating.",
        },
      ],
    },
    nextStepHint:
      "Now the mental models for what a computer, a program, the internet, and data actually are — the foundation everything else stands on.",
  },
};
