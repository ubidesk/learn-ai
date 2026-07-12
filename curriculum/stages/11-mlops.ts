import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "mlops",
  order: 11,
  title: "AI Engineering, MLOps, Deployment, Security, and Operations",
  purpose:
    "Move an AI builder into a real production engineer — architecture, serving, containers, pipelines, CI/CD, observability, reliability, security, privacy, and cost.",
  startingLevel:
    "You have built AI applications end-to-end in notebooks or single processes. You have never shipped one to production behind an SLO.",
  prerequisites: ["generative-ai"],
  project: {
    title: "Production-Ready AI Service",
    description:
      "Deploy a real AI service behind a documented API, with containers, CI/CD, observability, an SLO, cost monitoring, a security review, and a runbook a colleague could follow at 2am.",
  },
  exitCriteria: [
    "Design an AI system with explicit service boundaries and failure domains.",
    "Package and deploy models with containers behind a versioned API.",
    "Build a training and evaluation pipeline you can trust.",
    "Instrument the system with logs, metrics, traces, and SLOs.",
    "Reason about AI security, privacy, and cost before it becomes an incident.",
  ],
  status: S,
  modules: [
    {
      id: "mlops-architecture",
      order: 1,
      title: "AI System Architecture",
      summary: "Reference architectures, service boundaries, and design docs for AI systems.",
      lessons: [
        L("mlops-architecture-service-boundaries", 1, "Service Boundaries", "Draw service boundaries that isolate failure."),
        L("mlops-architecture-failure-domains", 2, "Failure Domains", "Reason about correlated failure across a system."),
        L("mlops-architecture-adrs", 3, "Architecture Decision Records", "Write ADRs that future maintainers can read."),
        L("mlops-architecture-reference-arch", 4, "Reference AI Architectures", "Recognise the common shapes of production AI systems."),
      ],
    },
    {
      id: "mlops-serving",
      order: 2,
      title: "Serving Models",
      summary: "How predictions actually reach users — batch, online, and everything in between.",
      lessons: [
        L("mlops-serving-batch-vs-online", 1, "Batch vs Online Inference", "Choose between batch and online inference for a workload."),
        L("mlops-serving-caching", 2, "Caching Predictions", "Cache predictions safely."),
        L("mlops-serving-autoscaling", 3, "Autoscaling", "Scale services to match traffic without wasting money."),
        L("mlops-serving-cold-starts", 4, "Cold Starts", "Reason about cold-start latency for large models."),
        L("mlops-serving-versioning-rollback", 5, "Model Versioning and Rollback", "Version and roll back model deployments safely."),
      ],
    },
    {
      id: "mlops-containers-cloud",
      order: 3,
      title: "Containers and Cloud Deployment",
      summary: "Docker, registries, orchestration, and IaC — the plumbing under every production AI service.",
      lessons: [
        L("mlops-containers-cloud-docker", 1, "Docker Basics", "Containerise an AI service with a lean Dockerfile."),
        L("mlops-containers-cloud-registries", 2, "Registries and Images", "Push, tag, and pull images from a registry."),
        L("mlops-containers-cloud-networking-volumes", 3, "Networking and Volumes", "Wire container networking and persistent storage."),
        L("mlops-containers-cloud-orchestration", 4, "Container Orchestration", "Deploy on Kubernetes or a managed alternative."),
        L("mlops-containers-cloud-iac", 5, "Managed Services and IaC", "Manage infrastructure declaratively with IaC."),
      ],
    },
    {
      id: "mlops-pipelines",
      order: 4,
      title: "ML Pipelines",
      summary: "Training, evaluation, and retraining as pipelines you can trust.",
      lessons: [
        L("mlops-pipelines-training", 1, "Training Pipelines", "Turn a notebook workflow into a repeatable pipeline."),
        L("mlops-pipelines-registries", 2, "Model Registries", "Register, promote, and demote models."),
        L("mlops-pipelines-lineage", 3, "Data and Model Lineage", "Trace which data trained which model."),
        L("mlops-pipelines-retraining", 4, "Retraining Strategies", "Choose a retraining cadence and trigger."),
      ],
    },
    {
      id: "mlops-ci-cd",
      order: 5,
      title: "Continuous Integration and Delivery",
      summary: "CI/CD adapted for models, not just code.",
      lessons: [
        L("mlops-ci-cd-gates", 1, "CI Gates for ML", "Gate merges on tests, evals, and drift checks."),
        L("mlops-ci-cd-canary-shadow", 2, "Canary and Shadow Deployments", "Roll out models safely with canaries and shadow traffic."),
        L("mlops-ci-cd-artifacts", 3, "Artifact Management", "Version and promote artefacts through environments."),
        L("mlops-ci-cd-env-parity", 4, "Environment Parity", "Keep dev, staging, and prod close enough to matter."),
      ],
    },
    {
      id: "mlops-observability",
      order: 6,
      title: "Observability",
      summary: "Logs, metrics, traces, SLOs — and the ML-specific signals that come on top.",
      lessons: [
        L("mlops-observability-logs-metrics-traces", 1, "Logs, Metrics, and Traces", "Instrument a service with all three."),
        L("mlops-observability-slos", 2, "SLOs for ML Services", "Set and defend SLOs that reflect user experience."),
        L("mlops-observability-drift", 3, "Drift Detection", "Detect and act on input and prediction drift."),
        L("mlops-observability-quality", 4, "Quality Monitoring", "Monitor output quality in production, not just latency."),
        L("mlops-observability-cost", 5, "Cost Monitoring", "Watch cost per request as a first-class SLO."),
      ],
    },
    {
      id: "mlops-reliability",
      order: 7,
      title: "Reliability Engineering",
      summary: "Retries, backpressure, disaster recovery, runbooks, postmortems.",
      lessons: [
        L("mlops-reliability-retries-circuit-breakers", 1, "Retries and Circuit Breakers", "Retry safely and cut off unhealthy dependencies."),
        L("mlops-reliability-queues-load-shedding", 2, "Queues and Load Shedding", "Shed load intentionally under pressure."),
        L("mlops-reliability-dr", 3, "Disaster Recovery", "Plan and rehearse recovery from real disasters."),
        L("mlops-reliability-runbooks", 4, "Runbooks", "Write runbooks the on-call can actually use."),
        L("mlops-reliability-postmortems", 5, "Blameless Postmortems", "Run postmortems that produce lasting fixes, not blame."),
      ],
    },
    {
      id: "mlops-security",
      order: 8,
      title: "AI Security",
      summary: "The threats particular to AI systems — from prompt injection to model theft.",
      lessons: [
        L("mlops-security-threat-modeling", 1, "Threat Modeling AI Systems", "Threat-model an AI system before shipping it."),
        L("mlops-security-prompt-injection", 2, "Prompt Injection", "Defend against direct and indirect prompt injection."),
        L("mlops-security-data-exfiltration", 3, "Data Exfiltration", "Prevent AI systems from leaking sensitive data."),
        L("mlops-security-model-poisoning", 4, "Model and Data Poisoning", "Reason about supply-chain and dataset poisoning."),
        L("mlops-security-adversarial-inputs", 5, "Adversarial Inputs", "Anticipate adversarial inputs against your specific system."),
      ],
    },
    {
      id: "mlops-privacy-governance",
      order: 9,
      title: "Privacy and Governance",
      summary: "The legal and ethical guardrails that AI engineering runs inside.",
      lessons: [
        L("mlops-privacy-governance-privacy-retention", 1, "Privacy and Retention", "Design retention and deletion aligned with real policy."),
        L("mlops-privacy-governance-consent-audits", 2, "Consent and Audits", "Track consent and run audits on real user data."),
        L("mlops-privacy-governance-provenance", 3, "Provenance and Governance", "Attach provenance to models and their datasets."),
        L("mlops-privacy-governance-regulation", 4, "Regulation Overview", "Recognise the regulations that apply to your system."),
      ],
    },
    {
      id: "mlops-cost-performance",
      order: 10,
      title: "Cost and Performance",
      summary: "Making AI systems affordable enough to keep in production.",
      lessons: [
        L("mlops-cost-performance-capacity", 1, "Capacity Planning", "Plan capacity from real traffic and cost data."),
        L("mlops-cost-performance-inference-opt", 2, "Inference Optimization", "Apply quantization, caching, and batching to cut cost."),
        L("mlops-cost-performance-attribution", 3, "Cost Attribution", "Attribute cost to features so the business can decide honestly."),
      ],
    },
  ],
};
