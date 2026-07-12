import type { Track } from "./schema";

/**
 * Specialisation tracks are optional and taken after the 13-stage core.
 * They are represented separately because they are not prerequisites for
 * one another and each has its own dependency graph.
 */
export const tracks: Track[] = [
  {
    id: "computer-vision",
    title: "Computer Vision",
    summary:
      "Classical vision, modern CNN/ViT architectures, detection and segmentation, 3D, and vision-language models — with production considerations.",
    suggestedAfterStage: 8,
  },
  {
    id: "advanced-nlp-llms",
    title: "Advanced NLP and LLMs",
    summary:
      "Deeper NLP tasks, retrieval, structured extraction, evaluation frameworks, alignment methods, and open-source LLM engineering.",
    suggestedAfterStage: 9,
  },
  {
    id: "recommender-search",
    title: "Recommender Systems and Search",
    summary:
      "Collaborative filtering, learning to rank, sequence-aware recommendation, hybrid retrieval, and the systems that make them work at scale.",
    suggestedAfterStage: 7,
  },
  {
    id: "time-series",
    title: "Time Series and Forecasting",
    summary:
      "Classical forecasting (ARIMA, ETS), state-space models, gradient-boosted forecasting, deep sequence models, and probabilistic forecasting.",
    suggestedAfterStage: 7,
  },
  {
    id: "reinforcement-learning",
    title: "Reinforcement Learning",
    summary:
      "MDPs, value and policy methods, deep RL, offline RL, and RLHF-adjacent techniques — with an honest view of what works.",
    suggestedAfterStage: 8,
  },
  {
    id: "robotics-edge-ai",
    title: "Robotics and Edge AI",
    summary:
      "Perception, planning, control, sim-to-real, and running AI models on constrained edge devices with quantisation and hardware-aware design.",
    suggestedAfterStage: 8,
  },
  {
    id: "ai-research-foundations",
    title: "AI Research Foundations",
    summary:
      "Reading and reproducing research, running principled experiments, writing papers, and contributing to the frontier without pretending it is easy.",
    suggestedAfterStage: 9,
  },
];
