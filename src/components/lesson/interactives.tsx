import { useState } from "react";
import type { InteractiveKey } from "@curriculum/lessons/schema";
import {
  InteractiveShell,
  ScenarioSorter,
  StepFlow,
  ModeSwitch,
  NestedCircles,
  CurveExplorer,
  TimelineBuilder,
  PasswordMeter,
} from "./primitives";

/**
 * Registry mapping InteractiveKey -> a React component. Each component owns
 * its own deterministic content; no props required from the lesson body
 * beyond an optional `data` payload (unused for most).
 *
 * Every interactive is browser-only, session-local, and safe — no code
 * execution, no network calls, no persisted state.
 */

function AiFamilyTree() {
  return (
    <InteractiveShell title="AI family tree">
      <NestedCircles
        layers={[
          { label: "Artificial Intelligence", sub: "The umbrella idea" },
          { label: "Machine Learning", sub: "Learned from data" },
          { label: "Deep Learning", sub: "Layered neural networks" },
        ]}
      />
      <p className="mt-4 text-xs text-muted-foreground">
        Every deep-learning system is machine learning. Every ML system is AI. The reverse isn't true.
      </p>
    </InteractiveShell>
  );
}

function RulesVsMlVsDl() {
  return (
    <InteractiveShell title="Sort each system">
      <ScenarioSorter
        choices={[
          { id: "rules", label: "Rules-based" },
          { id: "ml", label: "Classical ML" },
          { id: "dl", label: "Deep learning" },
        ]}
        scenarios={[
          {
            id: "s1",
            text: "A thermostat that turns on the heater when the temperature drops below 18°C.",
            correct: "rules",
            feedback: "One human-written rule. No learning from data.",
          },
          {
            id: "s2",
            text: "A model that gives each word a weight and adds them up to classify emails as spam.",
            correct: "ml",
            feedback: "Weights were learned from labelled data, but the model is small and interpretable.",
          },
          {
            id: "s3",
            text: "A chatbot with billions of parameters trained on huge amounts of text.",
            correct: "dl",
            feedback: "Huge neural network with layered structure — squarely deep learning.",
          },
          {
            id: "s4",
            text: "A calculator app that adds, subtracts, multiplies, and divides.",
            correct: "rules",
            feedback: "Pure arithmetic rules — not learning anything.",
          },
          {
            id: "s5",
            text: "An image tagger that recognises faces using a convolutional neural network.",
            correct: "dl",
            feedback: "Convolutional neural networks are deep-learning models.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function NarrowVsGeneral() {
  return (
    <InteractiveShell title="Narrow vs general — try the toggle">
      <ModeSwitch
        modes={[
          {
            id: "trained",
            label: "In-training task",
            render: () => (
              <div>
                <p className="text-sm">
                  Ask: <em>Summarise this article.</em>
                </p>
                <p className="mt-2 text-sm text-highlight-foreground">
                  ✓ Works confidently. This is what the model was trained on — sequence to sequence text.
                </p>
              </div>
            ),
          },
          {
            id: "outside",
            label: "Outside training",
            render: () => (
              <div>
                <p className="text-sm">
                  Ask: <em>How many r's are in 'strawberry'?</em>
                </p>
                <p className="mt-2 text-sm text-destructive">
                  ✗ Often gets it wrong. Character-counting is not what a next-token predictor is built for.
                </p>
              </div>
            ),
          },
          {
            id: "novel",
            label: "Truly novel task",
            render: () => (
              <div>
                <p className="text-sm">
                  Ask: <em>Fold this laundry with a robot arm.</em>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Silence. A text model has no arm, no plan, and no embodied training. This is where 'narrow' becomes obvious.
                </p>
              </div>
            ),
          },
        ]}
      />
    </InteractiveShell>
  );
}

function AiHistoryTimeline() {
  return (
    <InteractiveShell title="Place each milestone">
      <TimelineBuilder
        eras={[
          { id: "sym", label: "Symbolic era", range: "1950s–1980s" },
          { id: "stat", label: "Statistical era", range: "1990s–2010" },
          { id: "dl", label: "Deep-learning era", range: "2012–now" },
        ]}
        items={[
          {
            id: "dartmouth",
            year: "1956",
            text: "The Dartmouth workshop coins the term 'artificial intelligence'.",
            correct: "sym",
          },
          {
            id: "backprop",
            year: "1986",
            text: "Backpropagation popularised for training neural networks.",
            correct: "sym",
          },
          {
            id: "svm",
            year: "1995",
            text: "Support vector machines become a workhorse of practical ML.",
            correct: "stat",
          },
          {
            id: "imagenet",
            year: "2012",
            text: "AlexNet crushes the ImageNet benchmark using deep learning on GPUs.",
            correct: "dl",
          },
          {
            id: "transformer",
            year: "2017",
            text: "The transformer architecture is published — the backbone of modern language models.",
            correct: "dl",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function HypeVsReality() {
  return (
    <InteractiveShell title="Five-question filter">
      <ScenarioSorter
        choices={[
          { id: "task", label: "What task exactly?" },
          { id: "measure", label: "Measured how?" },
          { id: "often", label: "How often works?" },
          { id: "fail", label: "What fails?" },
          { id: "who", label: "Who benefits from the claim?" },
        ]}
        scenarios={[
          {
            id: "h1",
            text: "'Our AI outperforms doctors.' Which question punctures this fastest?",
            correct: "task",
            feedback: "Which task? Reading which images? Diagnosing which conditions? 'Doctors' is a whole profession.",
          },
          {
            id: "h2",
            text: "'Scores 95% on the medical licensing exam.' Which check matters most?",
            correct: "measure",
            feedback: "Was the exam data seen during training (contamination)? A huge, real issue.",
          },
          {
            id: "h3",
            text: "'Our agent booked 100 flights successfully.' Which follow-up matters most?",
            correct: "often",
            feedback: "Out of how many attempts? A 20% success rate can be dressed up as 100 successes.",
          },
          {
            id: "h4",
            text: "'The model reasons like a human.' Which reflex helps most?",
            correct: "fail",
            feedback: "What are the failure modes? Vague 'reasoning' claims collapse when you look at where they fall over.",
          },
          {
            id: "h5",
            text: "A vendor whitepaper promises 10x ROI on deploying their AI. First question?",
            correct: "who",
            feedback: "The vendor benefits from believing the claim. That's not disqualifying — it's just something to name.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function CategoryMatcher() {
  return (
    <InteractiveShell title="Match products to categories">
      <ScenarioSorter
        choices={[
          { id: "perc", label: "Perception" },
          { id: "pred", label: "Prediction" },
          { id: "gen", label: "Generation" },
          { id: "agent", label: "Agent" },
          { id: "retr", label: "Retrieval" },
        ]}
        scenarios={[
          {
            id: "c1",
            text: "Face unlock on your phone.",
            correct: "perc",
            feedback: "Perception — interpreting a camera image into an identity match.",
          },
          {
            id: "c2",
            text: "Netflix recommending your next show.",
            correct: "pred",
            feedback: "Predictive — scoring likely-watch probability for each candidate.",
          },
          {
            id: "c3",
            text: "An image generator creating a new artwork from a prompt.",
            correct: "gen",
            feedback: "Generative — producing new content that matches learned patterns.",
          },
          {
            id: "c4",
            text: "A shopping assistant that adds items to your cart and checks out.",
            correct: "agent",
            feedback: "Agentic — takes actions in the world, not just answers questions.",
          },
          {
            id: "c5",
            text: "Semantic search inside a company's internal wiki.",
            correct: "retr",
            feedback: "Retrieval — finding relevant information rather than generating new content.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function FoundationModelAdapter() {
  return (
    <InteractiveShell title="Adapt one foundation to many tasks">
      <ModeSwitch
        modes={[
          {
            id: "pt",
            label: "Pre-trained (raw)",
            render: () => (
              <p className="text-sm">
                A very well-read model that completes text on any topic. Broad, unfocused, sometimes rude — needs adaptation to be useful.
              </p>
            ),
          },
          {
            id: "assistant",
            label: "Prompted as assistant",
            render: () => (
              <p className="text-sm">
                Same model, wrapped with a system prompt: 'You are a helpful assistant. Be concise and safe.' Instantly usable for chat.
              </p>
            ),
          },
          {
            id: "code",
            label: "Fine-tuned for code",
            render: () => (
              <p className="text-sm">
                Same base, extra training on high-quality code. Now excels at completing and reviewing Python — at the cost of some general fluency.
              </p>
            ),
          },
          {
            id: "tools",
            label: "Given tools",
            render: () => (
              <p className="text-sm">
                Same base, plus access to search, code execution, and a calendar. Now it can *do things* — with all the risks that unlocks.
              </p>
            ),
          },
        ]}
      />
    </InteractiveShell>
  );
}

function GenerativeVsPredictive() {
  return (
    <InteractiveShell title="Predictive or generative?">
      <ScenarioSorter
        choices={[
          { id: "pred", label: "Predictive" },
          { id: "gen", label: "Generative" },
        ]}
        scenarios={[
          {
            id: "g1",
            text: "Estimating tomorrow's electricity demand.",
            correct: "pred",
            feedback: "Predictive — outputs a number given features.",
          },
          {
            id: "g2",
            text: "Drafting a birthday poem for a friend.",
            correct: "gen",
            feedback: "Generative — no single correct answer, produces new content.",
          },
          {
            id: "g3",
            text: "Deciding whether a review is positive or negative.",
            correct: "pred",
            feedback: "Predictive classification — output is a label.",
          },
          {
            id: "g4",
            text: "Generating an image of a golden retriever wearing sunglasses.",
            correct: "gen",
            feedback: "Generative — creates new content.",
          },
          {
            id: "g5",
            text: "Forecasting a customer's likelihood to churn.",
            correct: "pred",
            feedback: "Predictive — outputs a probability.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function AgentToolbelt() {
  return (
    <InteractiveShell title="An agent's decision loop">
      <StepFlow
        steps={[
          {
            title: "Receive goal",
            body: "The user asks: 'Find me a cheap flight to Berlin next Friday and add it to my calendar.'",
          },
          {
            title: "Choose tool",
            body: "The agent decides to call `search_flights(destination='Berlin', date=next-friday)`.",
          },
          {
            title: "Observe result",
            body: "The tool returns 12 flights. The agent picks the cheapest that matches user preferences.",
          },
          {
            title: "Second tool call",
            body: "The agent calls `add_to_calendar(...)`. This is a *write* action — the blast radius just grew.",
          },
          {
            title: "Return to user",
            body: "The agent replies: 'Booked. Details on your calendar.' If any step went wrong, this is where damage becomes visible.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function TaskFitPredictor() {
  return (
    <InteractiveShell title="Three-question fit check">
      <ScenarioSorter
        choices={[
          { id: "yes", label: "Green light" },
          { id: "care", label: "Proceed carefully" },
          { id: "no", label: "Not a fit" },
        ]}
        scenarios={[
          {
            id: "f1",
            text: "Drafting cold-outreach emails you'll edit before sending.",
            correct: "yes",
            feedback: "Verifiable, reversible, in-distribution. Green light.",
          },
          {
            id: "f2",
            text: "Auto-approving loan applications without human review.",
            correct: "no",
            feedback: "Irreversible, high-stakes, hard to verify per decision. Not a fit for autonomous AI.",
          },
          {
            id: "f3",
            text: "Summarising your own private meeting notes.",
            correct: "yes",
            feedback: "You can verify by reading; the stakes are low; the content is text — a great fit.",
          },
          {
            id: "f4",
            text: "Summarising last week's local news in your city.",
            correct: "care",
            feedback: "The model may not have seen last week's local news; verify against actual sources.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function LearningScienceCards() {
  const cards = [
    { title: "Retrieval", body: "Pull ideas from memory without looking. Every struggle strengthens the memory." },
    { title: "Spacing", body: "Revisit with growing gaps. Beats cramming every time." },
    { title: "Interleaving", body: "Mix similar topics. The confusion is the learning." },
    { title: "Worked examples", body: "Study full solutions before attempting problems yourself." },
    { title: "Reflection", body: "Write 2–3 sentences after each session on what stuck and what confused you." },
  ];
  return (
    <InteractiveShell title="The five techniques">
      <ul className="grid gap-3 md:grid-cols-2">
        {cards.map((c) => (
          <li key={c.title} className="rounded-lg border border-border/60 bg-background p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{c.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </li>
        ))}
      </ul>
    </InteractiveShell>
  );
}

function SpacingScheduler() {
  const [reviews, setReviews] = useState([1, 3, 7, 21]);
  // Simulated retention: baseline decays; each review resets closer to 100.
  const points: { day: number; retention: number }[] = [];
  let strength = 1;
  for (let day = 0; day <= 60; day++) {
    strength *= 0.955;
    if (reviews.includes(day)) strength = Math.min(1, strength + 0.5);
    points.push({ day, retention: Math.max(4, strength * 100) });
  }
  return (
    <InteractiveShell title="Design your spacing schedule">
      <CurveExplorer
        label="Move each review earlier or later and watch retention shift."
        values={reviews}
        onChange={setReviews}
        points={points}
      />
    </InteractiveShell>
  );
}

function ConfusionDetector() {
  return (
    <InteractiveShell title="Which confusion signal fires?">
      <ScenarioSorter
        choices={[
          { id: "reread", label: "Re-reading same line" },
          { id: "cantexplain", label: "Can't explain in own words" },
          { id: "unknownterm", label: "Unknown term glossed" },
          { id: "bored", label: "Boredom masking fog" },
        ]}
        scenarios={[
          {
            id: "cd1",
            text: "You breeze past the phrase 'stochastic gradient descent' without a second thought.",
            correct: "unknownterm",
            feedback: "Look it up now — five minutes here saves an hour later.",
          },
          {
            id: "cd2",
            text: "You've read this paragraph three times and it still feels fuzzy.",
            correct: "reread",
            feedback: "Stop. Write the specific fuzzy sentence and target one clarifying source.",
          },
          {
            id: "cd3",
            text: "You could not summarise what you just read in your own words if asked.",
            correct: "cantexplain",
            feedback: "Back up. Try to teach the concept out loud. Where you stall is where the fog is.",
          },
          {
            id: "cd4",
            text: "You feel unusually bored on a topic you were curious about ten minutes ago.",
            correct: "bored",
            feedback: "Often boredom masks unresolved confusion. Name the last thing that felt solid.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function AiTutorCrosscheck() {
  return (
    <InteractiveShell title="Spot the hallucination">
      <ScenarioSorter
        choices={[
          { id: "trust", label: "Likely correct" },
          { id: "verify", label: "Verify before trusting" },
          { id: "wrong", label: "Almost certainly wrong" },
        ]}
        scenarios={[
          {
            id: "t1",
            text: "AI cites: 'As shown in Smith & Chen (2019), Neural Reasoning Quarterly, 42(3), pp. 88–104.'",
            correct: "wrong",
            feedback: "Fabricated-citation smell. Search for the journal — it usually does not exist.",
          },
          {
            id: "t2",
            text: "AI explains: 'Python's `len(x)` returns the number of items in `x`.'",
            correct: "trust",
            feedback: "Verifiable against docs in seconds — and it's correct.",
          },
          {
            id: "t3",
            text: "AI claims: 'The transformer architecture was published in 2017 by Vaswani et al.'",
            correct: "trust",
            feedback: "Verifiable and correct. Search 'Attention Is All You Need' — it's a real, canonical paper.",
          },
          {
            id: "t4",
            text: "AI answers a question about last week's news in your city.",
            correct: "wrong",
            feedback: "Almost certainly hallucinated — most models have knowledge cutoffs and no local news access.",
          },
          {
            id: "t5",
            text: "AI recommends a Python library called `superfast-embed` with a fluent installation guide.",
            correct: "verify",
            feedback: "Very common failure — check PyPI. Sometimes real, sometimes invented.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function StudyPlanBuilder() {
  const [minutes, setMinutes] = useState({ learn: 90, visualize: 20, practice: 60, build: 60, reflect: 15 });
  const total = Object.values(minutes).reduce((a, b) => a + b, 0);
  const target = { learn: 0.4, visualize: 0.1, practice: 0.25, build: 0.2, reflect: 0.05 };
  return (
    <InteractiveShell title="Assemble your week">
      <div className="space-y-3">
        {(Object.keys(minutes) as (keyof typeof minutes)[]).map((k) => (
          <label key={k} className="block text-xs">
            <span className="mr-2 inline-block w-24 font-mono capitalize">{k}</span>
            <input
              type="range"
              min={0}
              max={180}
              step={5}
              value={minutes[k]}
              onChange={(e) => setMinutes((m) => ({ ...m, [k]: Number(e.target.value) }))}
              className="align-middle accent-accent"
              aria-label={`${k} minutes per week`}
            />
            <span className="ml-2 font-mono text-muted-foreground">{minutes[k]} min</span>
          </label>
        ))}
        <p className="text-xs">
          <span className="font-mono">Total: </span>
          {total} minutes / week (~{(total / 60).toFixed(1)} hours)
        </p>
        <ul className="space-y-1 text-xs text-muted-foreground">
          {(Object.keys(target) as (keyof typeof target)[]).map((k) => {
            const actual = total > 0 ? minutes[k] / total : 0;
            const off = Math.abs(actual - target[k]);
            return (
              <li key={k}>
                {k}: {(actual * 100).toFixed(0)}% (target {(target[k] * 100).toFixed(0)}%)
                {off > 0.1 && <span className="ml-1 text-destructive">· off-balance</span>}
              </li>
            );
          })}
        </ul>
      </div>
    </InteractiveShell>
  );
}

function InputProcessOutput() {
  return (
    <InteractiveShell title="Trace input → process → output">
      <ModeSwitch
        modes={[
          {
            id: "text",
            label: "Send a text message",
            render: () => (
              <ol className="space-y-1 text-sm">
                <li><b>Input:</b> Keyboard taps → characters.</li>
                <li><b>Process:</b> Messaging app formats + encrypts, network hardware packets it.</li>
                <li><b>Output:</b> Packets over Wi-Fi → recipient's screen.</li>
                <li><b>Storage:</b> Message history saved locally and often to cloud.</li>
              </ol>
            ),
          },
          {
            id: "photo",
            label: "Take a photo",
            render: () => (
              <ol className="space-y-1 text-sm">
                <li><b>Input:</b> Camera sensor reads light.</li>
                <li><b>Process:</b> Image signal processor turns pixels into a JPEG.</li>
                <li><b>Output:</b> Displayed on screen.</li>
                <li><b>Storage:</b> Saved to disk; often synced to cloud.</li>
              </ol>
            ),
          },
          {
            id: "chat",
            label: "Ask a chatbot",
            render: () => (
              <ol className="space-y-1 text-sm">
                <li><b>Input:</b> Your prompt (text).</li>
                <li><b>Process:</b> Sent over the network to a data centre; GPUs run the model.</li>
                <li><b>Output:</b> Generated text streamed back to your screen.</li>
                <li><b>Storage:</b> Conversation may be logged server-side.</li>
              </ol>
            ),
          },
        ]}
      />
    </InteractiveShell>
  );
}

function SourceToExecution() {
  return (
    <InteractiveShell title="From code to running program">
      <StepFlow
        steps={[
          {
            title: "1. Source code",
            body: "You type `print('Hello, world!')` in a file. Just text on disk.",
          },
          {
            title: "2. Parse",
            body: "Python's parser reads the text and turns it into a structured tree. Syntax errors caught here.",
          },
          {
            title: "3. Compile to bytecode",
            body: "Python translates the tree into compact bytecode instructions the interpreter can run quickly.",
          },
          {
            title: "4. Interpret",
            body: "The Python virtual machine runs each bytecode instruction, using the CPU underneath.",
          },
          {
            title: "5. Output",
            body: "`Hello, world!` appears on your screen. All of that happened in milliseconds.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function InternetTrace() {
  return (
    <InteractiveShell title="One web request, end to end">
      <StepFlow
        steps={[
          { title: "1. Parse URL", body: "Your browser splits `wikipedia.org/wiki/AI` into domain + path." },
          { title: "2. DNS lookup", body: "Your machine asks a DNS server: what's the IP for wikipedia.org?" },
          { title: "3. Open connection", body: "TCP handshake with the server's IP; then TLS negotiation for encryption." },
          { title: "4. Send HTTP request", body: "'GET /wiki/AI HTTP/1.1' — a text message asking for the page." },
          { title: "5. Server responds", body: "The server returns HTML, styles, images. Your browser renders them." },
        ]}
      />
    </InteractiveShell>
  );
}

function DataForms() {
  return (
    <InteractiveShell title="Which shape of data?">
      <ScenarioSorter
        choices={[
          { id: "scalar", label: "Scalar" },
          { id: "vec", label: "Vector" },
          { id: "table", label: "Tabular" },
          { id: "img", label: "Image" },
          { id: "seq", label: "Sequence" },
          { id: "graph", label: "Graph" },
        ]}
        scenarios={[
          {
            id: "d1",
            text: "A person's body temperature reading right now.",
            correct: "scalar",
            feedback: "One number — a scalar.",
          },
          {
            id: "d2",
            text: "Latitude, longitude, and altitude of a drone.",
            correct: "vec",
            feedback: "Three ordered numbers — a small vector.",
          },
          {
            id: "d3",
            text: "A spreadsheet of customer names, ages, and purchase totals.",
            correct: "table",
            feedback: "Rows × columns — tabular data.",
          },
          {
            id: "d4",
            text: "A photograph of a sunset.",
            correct: "img",
            feedback: "A grid of pixels — image data.",
          },
          {
            id: "d5",
            text: "The audio waveform of someone speaking.",
            correct: "seq",
            feedback: "An ordered sequence of samples over time.",
          },
          {
            id: "d6",
            text: "The friend network in a social media app.",
            correct: "graph",
            feedback: "Nodes (people) and edges (friendships) — a graph.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function BrowserSearchLab() {
  return (
    <InteractiveShell title="Improve these searches">
      <ScenarioSorter
        choices={[
          { id: "site", label: "Add site: operator" },
          { id: "quote", label: "Quote exact phrase" },
          { id: "minus", label: "Exclude with -" },
          { id: "keep", label: "Already good" },
        ]}
        scenarios={[
          {
            id: "s1",
            text: "You want the official Python docs for `open()`. Query: 'python open function'.",
            correct: "site",
            feedback: "Add `site:python.org` to land straight on the canonical source.",
          },
          {
            id: "s2",
            text: "You want the exact quote 'attention is all you need'. Query: attention is all you need.",
            correct: "quote",
            feedback: "Put it in \"quotes\" for an exact match.",
          },
          {
            id: "s3",
            text: "You want React tutorials but not React Native. Query: 'react tutorial'.",
            correct: "minus",
            feedback: "Add `-\"react native\"` to filter out the noise.",
          },
          {
            id: "s4",
            text: "Query: site:python.org \"list comprehension\"",
            correct: "keep",
            feedback: "Already narrowed by site and exact phrase — excellent.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function FileTreeOrganiser() {
  return (
    <InteractiveShell title="Sort into a clean folder tree">
      <ScenarioSorter
        choices={[
          { id: "notes", label: "notes/" },
          { id: "code", label: "code/" },
          { id: "projects", label: "projects/" },
          { id: "delete", label: "Delete or archive" },
        ]}
        scenarios={[
          {
            id: "f1",
            text: "learn-ai/stage-01/lesson-01.md",
            correct: "notes",
            feedback: "A lesson note — belongs in notes.",
          },
          {
            id: "f2",
            text: "first-python-script.py",
            correct: "code",
            feedback: "A small script — belongs in code.",
          },
          {
            id: "f3",
            text: "stage-project-personal-learning-map/",
            correct: "projects",
            feedback: "A stage project deserves its own subfolder in projects/.",
          },
          {
            id: "f4",
            text: "screenshot-2024-01-14-untitled(3).png",
            correct: "delete",
            feedback: "Random ancient screenshot — delete or archive.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function PasswordStrengthComp() {
  return (
    <InteractiveShell title="Password strength playground">
      <PasswordMeter />
    </InteractiveShell>
  );
}

function ToolchainMap() {
  return (
    <InteractiveShell title="Match tool to problem">
      <ScenarioSorter
        choices={[
          { id: "term", label: "Terminal" },
          { id: "editor", label: "Editor / IDE" },
          { id: "python", label: "Python" },
          { id: "git", label: "Git" },
          { id: "notebook", label: "Notebook" },
          { id: "lib", label: "Library (PyTorch)" },
        ]}
        scenarios={[
          {
            id: "tm1",
            text: "Give commands to your computer as text — install things, run scripts, navigate files.",
            correct: "term",
            feedback: "The terminal is your command line.",
          },
          {
            id: "tm2",
            text: "Write, edit, and debug code with syntax highlighting and autocomplete.",
            correct: "editor",
            feedback: "That's your editor/IDE — VS Code, Cursor, etc.",
          },
          {
            id: "tm3",
            text: "A general-purpose language dominant in AI, data, and scripting.",
            correct: "python",
            feedback: "Python.",
          },
          {
            id: "tm4",
            text: "Keep a full history of every change to your code and share it with collaborators.",
            correct: "git",
            feedback: "Git + a host like GitHub.",
          },
          {
            id: "tm5",
            text: "Run tiny snippets of code alongside markdown notes and charts.",
            correct: "notebook",
            feedback: "A Jupyter notebook.",
          },
          {
            id: "tm6",
            text: "Pre-built code for building and training neural networks in Python.",
            correct: "lib",
            feedback: "PyTorch (or similar libraries).",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function PromptLab() {
  const responses: Record<string, string> = {
    fact:
      "The first ImageNet moment was 2012, when AlexNet dramatically beat prior methods on image classification.\n\n(Verify: search 'AlexNet 2012'. Correct.)",
    creative:
      "Steaming ramen glows on the counter,\nSteam rising like a whispered 'again'.\n\n(Generic-ish. Adjust with more constraints for a personal feel.)",
    reasoning:
      "Let me think step by step. If Alice is older than Bob, and Bob is older than Cara, then Alice > Bob > Cara. So Alice is oldest.\n\n(Correct chain. But it can still fail on subtly harder versions.)",
    unknown:
      "I don't have reliable information about last week's news in your specific town. I could invent something — please verify anything time-sensitive against a real news source.",
  };
  const [pick, setPick] = useState<keyof typeof responses>("fact");
  return (
    <InteractiveShell title="Run the four experiments">
      <div className="flex flex-wrap gap-2" role="tablist">
        {(Object.keys(responses) as (keyof typeof responses)[]).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={pick === k}
            onClick={() => setPick(k)}
            className={`rounded-md border px-3 py-1.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              pick === k ? "border-accent bg-accent/10" : "border-border/60 hover:border-accent/60"
            }`}
          >
            {k}
          </button>
        ))}
      </div>
      <pre className="mt-4 whitespace-pre-wrap rounded-lg border border-border/60 bg-background p-4 font-mono text-xs leading-relaxed">
        {responses[pick]}
      </pre>
    </InteractiveShell>
  );
}

function PromptDelta() {
  const base = "Write me an email.";
  const variants: { id: string; label: string; prompt: string; output: string }[] = [
    { id: "base", label: "Base", prompt: base, output: "Subject: Hello\n\nDear [Recipient],\n\nI hope this email finds you well. …\n\n(Generic and could be for anyone.)" },
    { id: "specific", label: "+ specific", prompt: base + " A 60-word warm note to a coworker I haven't seen in a year.", output: "Subject: Hey — coffee soon?\n\nIt's been way too long. I was thinking about the marketing project we shipped last spring — still one of my favourites. If you're free this month, I'd love to grab coffee and catch up properly. My weeks are pretty open on Thursdays." },
    { id: "role", label: "+ role", prompt: base + " You are a warm, concise, slightly informal writer.", output: "Subject: Long overdue\n\nHi — writing on a whim. Realising it's been a year is uncomfortable, honestly. Would love to catch up if you're around this month." },
    { id: "format", label: "+ format", prompt: base + " Return exactly three subject-line options and one two-sentence body, no preamble.", output: "Subject options:\n1. Long overdue\n2. Coffee soon?\n3. A year already?\n\nBody: Realised it's been almost a year — that's on me. Free for coffee sometime this month?" },
    { id: "example", label: "+ example", prompt: "Match this style: 'Hey — random impulse email…'. Now write one to a friend I haven't seen in a year.", output: "Hey — random impulse email. Last week I walked past that pizza place we used to go to and I owe you at least a coffee. When are you free?" },
  ];
  const [pick, setPick] = useState("base");
  const cur = variants.find((v) => v.id === pick) ?? variants[0]!;
  return (
    <InteractiveShell title="Change one thing, observe">
      <div className="flex flex-wrap gap-2">
        {variants.map((v) => (
          <button
            key={v.id}
            type="button"
            aria-pressed={pick === v.id}
            onClick={() => setPick(v.id)}
            className={`rounded-md border px-3 py-1.5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              pick === v.id ? "border-accent bg-accent/10" : "border-border/60 hover:border-accent/60"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-lg border border-border/60 bg-background p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Prompt</p>
          <p className="mt-2 text-sm leading-relaxed">{cur.prompt}</p>
        </div>
        <div className="rounded-lg border border-border/60 bg-background p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Output</p>
          <pre className="mt-2 whitespace-pre-wrap text-sm leading-relaxed">{cur.output}</pre>
        </div>
      </div>
    </InteractiveShell>
  );
}

function VerifyTheAi() {
  return (
    <InteractiveShell title="Which failure mode?">
      <ScenarioSorter
        choices={[
          { id: "cite", label: "Fake citation" },
          { id: "code", label: "Broken code" },
          { id: "fact", label: "Confident wrong fact" },
          { id: "ok", label: "Likely correct" },
        ]}
        scenarios={[
          {
            id: "v1",
            text: "AI states: 'As shown in the 1998 book Neural Winds by J. Alvarez (MIT Press)...' — but you cannot find this book anywhere.",
            correct: "cite",
            feedback: "Fabricated citation. Common failure. Search catches these fast.",
          },
          {
            id: "v2",
            text: "AI-generated Python throws `AttributeError: module 'pandas' has no attribute 'read_xlsx'`.",
            correct: "code",
            feedback: "Wrong function name — the real one is `read_excel`. Running the code catches it.",
          },
          {
            id: "v3",
            text: "AI claims the Eiffel Tower was completed in 1912.",
            correct: "fact",
            feedback: "Confidently wrong — it was completed in 1889. Cross-check dates with a search.",
          },
          {
            id: "v4",
            text: "AI says: 'In Python, `len(x)` returns the number of items in `x`.'",
            correct: "ok",
            feedback: "Correct and easy to verify against docs.",
          },
          {
            id: "v5",
            text: "AI recommends a Python package `mega-quick-embed`. You search PyPI and don't find it.",
            correct: "cite",
            feedback: "Same failure family as fake citations — invented package names. Always verify on PyPI.",
          },
        ]}
      />
    </InteractiveShell>
  );
}

function LearningContract() {
  const [state, setState] = useState({
    why: "",
    pace: "",
    recovery: "",
    accountability: "",
  });
  const filled = Object.values(state).filter((v) => v.trim().length > 4).length;
  return (
    <InteractiveShell title="Draft your learning contract">
      <div className="grid gap-3">
        {(
          [
            ["why", "Why: two sentences on what pulled you here."],
            ["pace", "Pace: your two fixed weekly time blocks."],
            ["recovery", "Recovery: what you do when you miss a session."],
            ["accountability", "Accountability: one person you'll tell + one artifact you'll publish."],
          ] as const
        ).map(([k, label]) => (
          <label key={k} className="block text-xs">
            <span className="text-muted-foreground">{label}</span>
            <textarea
              value={state[k]}
              onChange={(e) => setState((s) => ({ ...s, [k]: e.target.value }))}
              rows={2}
              className="mt-1 w-full rounded-md border border-border/60 bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
        ))}
        <p className="text-xs">
          <span className="font-mono">Contract completion: </span>
          {filled}/4 sections filled.
          {filled === 4 && (
            <span className="ml-2 text-highlight-foreground">
              ✓ Save this somewhere you'll see it — a note, a print, a pinned tab.
            </span>
          )}
        </p>
        <p className="text-[11px] text-muted-foreground">
          This contract lives in your browser only. Nothing is saved or sent anywhere.
        </p>
      </div>
    </InteractiveShell>
  );
}

const registry: Record<InteractiveKey, () => JSX.Element> = {
  "ai-family-tree": AiFamilyTree,
  "rules-vs-ml-vs-dl": RulesVsMlVsDl,
  "narrow-vs-general": NarrowVsGeneral,
  "ai-history-timeline": AiHistoryTimeline,
  "hype-vs-reality": HypeVsReality,
  "category-matcher": CategoryMatcher,
  "foundation-model-adapter": FoundationModelAdapter,
  "generative-vs-predictive": GenerativeVsPredictive,
  "agent-toolbelt": AgentToolbelt,
  "task-fit-predictor": TaskFitPredictor,
  "learning-science-cards": LearningScienceCards,
  "spacing-scheduler": SpacingScheduler,
  "confusion-detector": ConfusionDetector,
  "ai-tutor-crosscheck": AiTutorCrosscheck,
  "study-plan-builder": StudyPlanBuilder,
  "input-process-output": InputProcessOutput,
  "source-to-execution": SourceToExecution,
  "internet-trace": InternetTrace,
  "data-forms": DataForms,
  "browser-search-lab": BrowserSearchLab,
  "file-tree-organiser": FileTreeOrganiser,
  "password-strength": PasswordStrengthComp,
  "toolchain-map": ToolchainMap,
  "prompt-lab": PromptLab,
  "prompt-delta": PromptDelta,
  "verify-the-ai": VerifyTheAi,
  "learning-contract": LearningContract,
};

export function Interactive({ component }: { component: InteractiveKey }) {
  const Comp = registry[component];
  if (!Comp) {
    return (
      <div className="rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">
        Interactive '{component}' is authored but not yet available.
      </div>
    );
  }
  return <Comp />;
}
