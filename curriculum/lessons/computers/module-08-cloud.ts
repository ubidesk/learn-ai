import type { LessonBody } from "../schema";

export const module08: Record<string, LessonBody> = {
  "computers-cloud-what-is-cloud": {
    curiosity:
      "You've never seen the machine your Google account lives on. You'll never see the GPUs that answered your last chatbot query. And yet you use them daily. Where are they, and who's paying?",
    whyThisMatters:
      "Almost every AI system you'll build or use runs in the cloud. Understanding what it actually is — not the marketing — is the foundation for making sound engineering, cost, and privacy decisions.",
    intuition: [
      "The cloud is 'someone else's computers, rented by the hour, in massive buildings around the world'.",
      "You pay for what you use: CPU time, GB stored, bytes transferred, and specific higher-level services.",
      "You and the cloud provider share responsibility: they secure the buildings and the hardware; you secure your data, code, and configuration.",
    ],
    visual: { component: "cloud-responsibility", caption: "Who is responsible for what, item by item." },
    explanation: [
      "Data centres are large buildings full of racks of servers, connected to each other and to the internet by very fast networks.",
      "'Cloud providers' (AWS, Google Cloud, Azure, Cloudflare, Fly, DigitalOcean, and dozens of smaller ones) rent slices of these servers on demand.",
      "Billing is granular: per-second compute, per-GB storage, per-request API calls. This flexibility is why you can spin up an experiment for pennies and shut it down.",
      "The 'shared responsibility model' is a security concept: the provider is responsible for the security of the cloud (buildings, hardware, hypervisor); you are responsible for security in the cloud (accounts, configuration, code, data).",
    ],
    experiment: {
      component: "cloud-responsibility",
      caption: "Sort each item into 'you' or 'provider'.",
      instructions:
        "Notice the pattern: they own the building, the wires, the hypervisor. You own the passwords, the app code, the data classification, and — crucially — the configuration.",
    },
    reflection: [
      "Someone says 'I don't trust the cloud with my data'. Under what circumstances is that a reasonable stance, and under what circumstances is it superstition?",
      "Why is a leaky S3 bucket almost always the customer's fault, not the provider's?",
    ],
    modernAiConnection:
      "Every hosted AI model — from Claude to Stable Diffusion to your custom fine-tune — runs on cloud infrastructure. When you send a prompt, someone else's GPU processes it in someone else's building, and the cost of that flows back through your API bill.",
    knowledgeCheck: {
      question: "Whose responsibility is it to configure a storage bucket to be private?",
      options: [
        { text: "The provider — they should default to private.", correct: false, feedback: "Modern providers default to private for new buckets, but the customer still owns the config." },
        { text: "The customer — configuration is always the customer's job.", correct: true, feedback: "Correct. In the shared responsibility model, configuration is squarely on you." },
        { text: "The customer's ISP.", correct: false, feedback: "ISPs are not part of this model." },
        { text: "Nobody — buckets can't be public.", correct: false, feedback: "They can. Misconfigured public buckets are a recurring source of breaches." },
      ],
    },
    nextStepHint: "You know what the cloud is. Next: how services are layered by how much of the stack you manage.",
  },

  "computers-cloud-iaas-paas-saas": {
    curiosity:
      "You need a database for your app. You could rent a raw Linux VM and install Postgres. Or a managed database. Or use a hosted service that pretends the database doesn't even exist. Same problem, three answers. Why?",
    whyThisMatters:
      "Every cloud purchase is a choice about how much of the stack you want to manage yourself. IaaS/PaaS/SaaS aren't buzzwords — they're a spectrum you'll be picking a point on constantly.",
    intuition: [
      "IaaS (Infrastructure as a Service): you get a virtual machine. You manage the OS, the runtime, the app, the data.",
      "PaaS (Platform as a Service): you push code or push a query; the provider handles the machine, patches, backups.",
      "SaaS (Software as a Service): you use a finished product. The provider handles everything under the UI.",
    ],
    visual: { component: "iaas-paas-saas", caption: "Place common services in the correct layer." },
    explanation: [
      "IaaS examples: EC2 VMs, GCE VMs, DigitalOcean droplets. You pay for compute, you're on the hook for everything above the hypervisor.",
      "PaaS examples: Cloud Run, App Runner, managed Postgres, Vercel/Netlify for static sites. Great when 'give me a runtime, don't make me care about the OS' is what you need.",
      "SaaS examples: Gmail, Notion, Slack, GitHub, OpenAI's chat API. From your seat, it's a finished product delivered over the web.",
      "The boundaries are fuzzy. Kubernetes managed by the cloud is usually classed PaaS from the app team's point of view and IaaS from the platform team's.",
    ],
    experiment: {
      component: "iaas-paas-saas",
      caption: "Classify real services.",
      instructions:
        "For each, notice how much you manage vs how much is handled. The right layer is whichever puts your effort on your actual differentiator, not on plumbing.",
    },
    reflection: [
      "You're a solo developer shipping a small AI product. Which layer usually gets you fastest to real users, and why?",
      "You're a large enterprise with a compliance team. When would you deliberately move down the stack?",
    ],
    modernAiConnection:
      "Calling an OpenAI or Anthropic API is SaaS. Running your own model behind a managed endpoint is PaaS. Owning a fleet of GPU VMs where you also manage CUDA drivers is IaaS. The same 'chatbot' can be built at any of these three layers.",
    knowledgeCheck: {
      question: "You use Google Docs. That is …",
      options: [
        { text: "IaaS — you're renting infrastructure.", correct: false, feedback: "You're not managing any OS or runtime — this is not infrastructure to you." },
        { text: "PaaS — you're pushing code.", correct: false, feedback: "You're not pushing code either." },
        { text: "SaaS — you're using a finished product.", correct: true, feedback: "Correct. Someone else runs everything under the UI." },
        { text: "None of the above — it's a website.", correct: false, feedback: "Every website is delivered over infrastructure that fits somewhere on this ladder. Google Docs is SaaS." },
      ],
    },
    nextStepHint: "Layers understood. Next: geography — why regions and zones matter for latency and reliability.",
  },

  "computers-cloud-regions-latency": {
    curiosity:
      "You launch a service that feels instant from your desk. A friend in another country tries it and it stutters. You didn't change anything. What did?",
    whyThisMatters:
      "Where your servers live matters. It sets baseline latency, it determines which laws apply to your data, and it decides how survivable your app is when a whole data centre goes offline.",
    intuition: [
      "A region is a geographic location. A zone is an isolated data centre inside a region.",
      "Latency to a region is set by physics: distance from your users, plus routing.",
      "Reliability is engineered by putting copies across zones (or across regions).",
    ],
    visual: { component: "region-picker", caption: "Pick a region for different user populations." },
    explanation: [
      "Regions have names like `us-east-1`, `eu-central-1`, `ap-northeast-1`. Each region has multiple availability zones (AZs) — physically separate buildings with independent power and network, so a single failure doesn't take down everything.",
      "Regional services (managed DBs, storage) can replicate across AZs automatically. That's why you should always design for AZ failure — because they do fail.",
      "Multi-region is harder: data has to move between regions (latency, cost), and consistency gets subtle (which region is 'primary'?).",
      "Data residency and regulation (GDPR, HIPAA, sovereignty rules) also drive region choice. Sometimes you don't get to put data 'wherever's cheapest'.",
    ],
    experiment: {
      component: "region-picker",
      caption: "Match region to users.",
      instructions:
        "Flip between user populations and see which region wins. Notice that 'global users' is a hard case — no single region is close to everyone; you need multi-region + a CDN.",
    },
    reflection: [
      "Your app is used mostly in Europe. Which region(s) should you host in, and why?",
      "Why is 'multi-region active-active' both attractive and terrifying?",
    ],
    modernAiConnection:
      "AI providers offer regional endpoints so latency and residency constraints can be met. Choosing between `us-east` and `eu-central` for your model endpoint is often about privacy law more than milliseconds.",
    knowledgeCheck: {
      question: "Your users are almost entirely in Germany. Which region typically minimises latency?",
      options: [
        { text: "US-East, because it's the largest.", correct: false, feedback: "Size doesn't shrink distance. Frankfurt beats Virginia for German users by ~70 ms." },
        { text: "Whichever is cheapest.", correct: false, feedback: "Cost matters, but physics still sets a floor." },
        { text: "Frankfurt (eu-central-1) or similar.", correct: true, feedback: "Correct — a European region minimises round-trip time for European users." },
        { text: "It doesn't matter with a good CDN.", correct: false, feedback: "CDNs help for static content but not for stateful backend calls." },
      ],
    },
    nextStepHint: "Geography sorted. Next: the unit you actually deploy — VMs, containers, or functions.",
  },

  "computers-cloud-serverless-containers": {
    curiosity:
      "You have a small Python function that runs when someone uploads a photo. On a VM, it costs money 24/7. As a serverless function, it costs pennies per week. Both run 'in the cloud'. What changed?",
    whyThisMatters:
      "Choosing between VMs, containers, and serverless functions is one of the most consequential architectural choices in any cloud system. Get it wrong and you either overpay or fight the platform.",
    intuition: [
      "A VM is a whole simulated computer. You pay for it whether it's busy or not. Full control, high maintenance.",
      "A container is one app plus its dependencies, packaged so it runs identically anywhere. Lighter than a VM, faster to start, easier to move.",
      "A serverless function is even lighter: you upload code, the provider runs it on demand and charges per invocation. Zero cost when idle.",
    ],
    visual: { component: "deployment-unit", caption: "Match each workload to the right deployment unit." },
    explanation: [
      "VMs: use for long-running services, custom OS kernels, GPU workloads with driver-heavy setups. Full flexibility, full responsibility.",
      "Containers (Docker + orchestrator): package once, run everywhere. Kubernetes, ECS, Cloud Run are the mainstream ways to run them at scale.",
      "Serverless functions (AWS Lambda, Cloud Functions, Cloudflare Workers): event-driven, stateless, sub-second boots. Ideal for webhooks, glue code, occasional batch jobs.",
      "Cost profile differs sharply. Serverless is cheap at low usage and expensive at very high steady load. VMs are the opposite. Containers sit in between and dominate serious production.",
    ],
    experiment: {
      component: "deployment-unit",
      caption: "Assign each workload.",
      instructions:
        "Ask: is this stateless and bursty? → serverless. Is this a long-running service that needs identical dev/prod environments? → containers. Do I need custom drivers or huge GPUs? → VMs.",
    },
    reflection: [
      "Someone says 'serverless is always cheaper'. When are they wrong?",
      "Why do most non-trivial production AI systems land on containers rather than pure serverless?",
    ],
    modernAiConnection:
      "Model training almost always uses GPU VMs. Inference for small, bursty workloads is a great fit for serverless. Inference for high-throughput steady traffic usually ends up in containers behind a load balancer. Every real AI product is a mix.",
    knowledgeCheck: {
      question: "You have a rarely-used webhook endpoint that runs a small Python function. Best default?",
      options: [
        { text: "A dedicated 24/7 VM.", correct: false, feedback: "You'd pay all month for a few seconds of work per day." },
        { text: "A serverless function.", correct: true, feedback: "Correct. Stateless, event-driven, near-zero idle cost — the canonical serverless win." },
        { text: "A managed Kubernetes cluster.", correct: false, feedback: "K8s is overkill for a single occasional function." },
        { text: "A local script.", correct: false, feedback: "Local scripts can't receive webhooks reliably from the public internet." },
      ],
    },
    nextStepHint: "Deployment units understood. Next: reading the bill and staying inside quotas.",
  },

  "computers-cloud-cost-limits": {
    curiosity:
      "A junior engineer accidentally leaves a large GPU instance running over a long weekend. On Monday the bill is $4,000. This story is legendary because it keeps happening. How do you avoid being it?",
    whyThisMatters:
      "Cloud cost surprises end projects, careers, and startups. Reading a cloud bill fluently and knowing how rate limits and quotas protect you (from the cloud, and from yourself) is a career skill.",
    intuition: [
      "Everything on a cloud bill boils down to a small number of unit prices multiplied by quantities.",
      "Some prices sting more than the size suggests: egress bandwidth, GPU compute, cross-region traffic, API calls to premium AI models.",
      "Rate limits and quotas protect the provider's infrastructure and your wallet — they're a feature, not just a nuisance.",
    ],
    visual: { component: "cloud-cost", caption: "Slide usage sliders and see the bill shape change." },
    explanation: [
      "Compute is priced per instance-hour (or per vCPU-hour, per GPU-hour). Discounts exist for commitments (reserved) and interruptible instances (spot).",
      "Storage has a base per-GB-month rate and separate per-request rates. Object storage is cheap to store, non-negligible to read repeatedly.",
      "Egress (data leaving the cloud to the internet) is usually the most expensive line per byte. Same-region and same-VPC traffic is often free.",
      "AI APIs charge per input/output token. Long system prompts add up. Streaming and prompt caching are levers for cost control.",
    ],
    experiment: {
      component: "cloud-cost",
      caption: "Estimate a monthly bill.",
      instructions:
        "Adjust the sliders. Notice: egress and AI tokens balloon fastest. If your bill jumps mysteriously, look there first.",
    },
    reflection: [
      "Sketch three habits you'll adopt right now to avoid the weekend-GPU story.",
      "Why are rate limits genuinely useful to you, not just protective of the provider?",
    ],
    modernAiConnection:
      "AI budgets are dominated by token costs, GPU time, and egress. Rate limits on model APIs are often the reason your prototype 'suddenly slowed down' — and they're also the reason your bill didn't tenfold overnight.",
    knowledgeCheck: {
      question: "You notice your cloud bill jumped 3× last month. Compute usage looks normal. Where would you look next?",
      options: [
        { text: "Storage capacity.", correct: false, feedback: "Storage is usually a slow-moving line item — a sudden 3× is unusual." },
        { text: "Egress and cross-region data transfer.", correct: true, feedback: "Correct. Egress and inter-region traffic are the classic sneaky lines. A misconfigured client can burn thousands overnight." },
        { text: "The provider's default pricing.", correct: false, feedback: "Prices don't usually change silently by 3×." },
        { text: "The number of user accounts.", correct: false, feedback: "Accounts are typically free; usage is what's billed." },
      ],
    },
    nextStepHint:
      "You've completed Stage 2. You now understand computers from bits up to the cloud. Next: writing your first real programs in Stage 3 — Programming Foundations and Computational Thinking.",
  },
};
