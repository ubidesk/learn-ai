import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "60–90 min";

export const stage: Stage = {
  id: "mlops",
  order: 11,
  title: "AI Engineering, MLOps, Deployment, Security, and Operations",
  purpose:
    "Turn a competent ML/AI builder into someone who can ship, operate, and maintain AI systems in production — with the discipline of a software engineer and the honesty of a scientist.",
  startingLevel:
    "You have built ML and generative-AI systems that work in a notebook or demo.",
  prerequisites: ["python-professional", "classical-ml", "generative-ai"],
  project: {
    title: "Production Deployment",
    description:
      "Take one of your earlier projects, deploy it as a real service (containerised, observable, monitored, secured, versioned) with a documented runbook, and operate it for at least two weeks.",
  },
  exitCriteria: [
    "Package ML/AI systems as reproducible services.",
    "Deploy models with awareness of cost, scaling, and failure modes.",
    "Instrument systems so you can detect drift and regressions.",
    "Reason about ML/AI security and privacy end-to-end.",
    "Write runbooks, incident reports, and postmortems.",
  ],
  status: S,
  modules: [
    {
      id: "mlops-fundamentals",
      order: 1,
      title: "MLOps Fundamentals",
      summary: "What changes about DevOps when you add models.",
      lessons: [
        { id: "mlops-fund-lifecycle", order: 1, title: "The ML Lifecycle", outcome: "Map the lifecycle from data to retirement.", effort: eff, status: S },
        { id: "mlops-fund-versioning", order: 2, title: "Versioning Data, Code, and Models", outcome: "Version all three artefacts consistently.", effort: eff, status: S },
        { id: "mlops-fund-reproducibility", order: 3, title: "Reproducibility in Practice", outcome: "Make results reproducible, not just recorded.", effort: eff, status: S },
        { id: "mlops-fund-registry", order: 4, title: "Model Registries and Metadata", outcome: "Use a model registry to make deployments boring.", effort: eff, status: S },
      ],
    },
    {
      id: "mlops-deployment",
      order: 2,
      title: "Serving and Deployment",
      summary: "Getting a model in front of real requests, reliably.",
      lessons: [
        { id: "mlops-dep-serving", order: 1, title: "Batch, Online, and Streaming Serving", outcome: "Choose the right serving pattern for the workload.", effort: eff, status: S },
        { id: "mlops-dep-containers", order: 2, title: "Containers and Reproducible Runtimes", outcome: "Package models with Docker without dependency roulette.", effort: eff, status: S },
        { id: "mlops-dep-inference-servers", order: 3, title: "Inference Servers and APIs", outcome: "Serve models with FastAPI, TorchServe, or vLLM as appropriate.", effort: eff, status: S },
        { id: "mlops-dep-scaling", order: 4, title: "Scaling, GPUs, and Autoscaling", outcome: "Scale services under load without wasting money.", effort: eff, status: S },
        { id: "mlops-dep-cicd", order: 5, title: "CI/CD for ML Systems", outcome: "Automate build, test, and deploy of ML systems.", effort: eff, status: S },
      ],
    },
    {
      id: "mlops-monitoring-and-reliability",
      order: 3,
      title: "Monitoring, Drift, and Reliability",
      summary: "You cannot manage what you cannot see.",
      lessons: [
        { id: "mlops-mon-observability", order: 1, title: "Metrics, Logs, and Traces", outcome: "Instrument ML services with proper observability.", effort: eff, status: S },
        { id: "mlops-mon-drift", order: 2, title: "Data and Concept Drift", outcome: "Detect and respond to drift with statistical tests.", effort: eff, status: S },
        { id: "mlops-mon-shadow-canary", order: 3, title: "Shadow, Canary, and Rollback", outcome: "Deploy new models safely and roll back cleanly.", effort: eff, status: S },
        { id: "mlops-mon-slos", order: 4, title: "SLOs, SLIs, and On-Call for ML", outcome: "Own your service with SLOs and honest on-call practice.", effort: eff, status: S },
      ],
    },
    {
      id: "mlops-security-and-privacy",
      order: 4,
      title: "Security, Privacy, and Governance",
      summary: "Doing AI in a way you can defend in front of a regulator, a user, or a lawyer.",
      lessons: [
        { id: "mlops-sec-threat-model", order: 1, title: "Threat Modelling AI Systems", outcome: "Enumerate realistic threats to your specific AI system.", effort: eff, status: S },
        { id: "mlops-sec-data-privacy", order: 2, title: "Data Privacy and PII", outcome: "Protect PII across ingestion, training, and inference.", effort: eff, status: S },
        { id: "mlops-sec-model-attacks", order: 3, title: "Adversarial, Extraction, and Membership Attacks", outcome: "Reason about ML-specific attacks and defences.", effort: eff, status: S },
        { id: "mlops-sec-governance", order: 4, title: "AI Governance and Regulation", outcome: "Meet common governance and regulatory obligations pragmatically.", effort: eff, status: S },
      ],
    },
    {
      id: "mlops-cost-and-scale",
      order: 5,
      title: "Cost, Scale, and Operations",
      summary: "Making AI systems cheap enough to keep running.",
      lessons: [
        { id: "mlops-cost-cost-modelling", order: 1, title: "Cost Modelling for AI Workloads", outcome: "Estimate cost per request and cost per training run.", effort: eff, status: S },
        { id: "mlops-cost-quantization", order: 2, title: "Quantisation, Distillation, and Efficient Inference", outcome: "Shrink models with awareness of quality trade-offs.", effort: eff, status: S },
        { id: "mlops-cost-caching", order: 3, title: "Caching and Batching", outcome: "Cache and batch to cut cost without breaking correctness.", effort: eff, status: S },
        { id: "mlops-cost-multitenancy", order: 4, title: "Multi-Tenancy and Rate Limits", outcome: "Serve many users fairly without noisy-neighbour problems.", effort: eff, status: S },
      ],
    },
  ],
};
