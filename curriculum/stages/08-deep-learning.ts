import type { Stage } from "../schema";

const S = "planned" as const;
const eff = "60–90 min";

export const stage: Stage = {
  id: "deep-learning",
  order: 8,
  title: "Deep Learning with PyTorch",
  purpose:
    "Build genuine understanding of neural networks — what they compute, how they train, and how to design them — while becoming fluent in PyTorch.",
  startingLevel:
    "You have done classical ML end-to-end and understand gradients, matrices, and probability at a working level.",
  prerequisites: ["classical-ml", "mathematics"],
  project: {
    title: "Custom Deep Learning Project",
    description:
      "Design, train, evaluate, and document a deep-learning model on a real dataset of your choosing — including a from-scratch reimplementation of a small component (e.g. attention, a training loop) to prove you understand it.",
  },
  exitCriteria: [
    "Explain forward and backward passes precisely.",
    "Train and debug neural networks in PyTorch.",
    "Choose architectures (MLP, CNN, RNN, transformer) appropriately.",
    "Recognise and fix training pathologies.",
    "Read a modern deep learning paper and reproduce its core ideas.",
  ],
  status: S,
  modules: [
    {
      id: "deep-learning-neural-networks",
      order: 1,
      title: "Neural Networks from First Principles",
      summary: "What a neural net is, before we let a library do it for us.",
      lessons: [
        { id: "deep-learning-nn-perceptron", order: 1, title: "The Perceptron and Its Limits", outcome: "Implement a perceptron and understand why it isn't enough.", effort: eff, status: S },
        { id: "deep-learning-nn-mlp", order: 2, title: "Multi-Layer Perceptrons", outcome: "Explain what layers, activations, and depth actually do.", effort: eff, status: S },
        { id: "deep-learning-nn-activations", order: 3, title: "Activations and Nonlinearity", outcome: "Choose activations understanding their trade-offs.", effort: eff, status: S },
        { id: "deep-learning-nn-loss", order: 4, title: "Losses and Objectives Revisited", outcome: "Pick losses that match the task and understand their gradients.", effort: eff, status: S },
        { id: "deep-learning-nn-backprop", order: 5, title: "Backpropagation, by Hand", outcome: "Derive and hand-execute backprop on a small network.", effort: eff, status: S },
      ],
    },
    {
      id: "deep-learning-pytorch",
      order: 2,
      title: "PyTorch in Practice",
      summary: "The tools you will actually use for the rest of the curriculum.",
      lessons: [
        { id: "deep-learning-pt-tensors", order: 1, title: "Tensors and Autograd", outcome: "Manipulate tensors and understand automatic differentiation.", effort: eff, status: S },
        { id: "deep-learning-pt-modules", order: 2, title: "nn.Module and Layers", outcome: "Compose models with torch.nn.", effort: eff, status: S },
        { id: "deep-learning-pt-training-loop", order: 3, title: "Writing a Real Training Loop", outcome: "Write a training loop with checkpoints, logging, and validation.", effort: eff, status: S },
        { id: "deep-learning-pt-datasets", order: 4, title: "Datasets and DataLoaders", outcome: "Load large datasets efficiently, including on GPU.", effort: eff, status: S },
        { id: "deep-learning-pt-devices", order: 5, title: "GPUs, Mixed Precision, and Speed", outcome: "Move training to a GPU and use mixed precision safely.", effort: eff, status: S },
      ],
    },
    {
      id: "deep-learning-training-craft",
      order: 3,
      title: "Training Neural Networks Well",
      summary: "The craft that separates a training run that works from one that doesn't.",
      lessons: [
        { id: "deep-learning-train-optimizers", order: 1, title: "SGD, Momentum, and Adam", outcome: "Choose an optimiser and reason about its behaviour.", effort: eff, status: S },
        { id: "deep-learning-train-lr-schedule", order: 2, title: "Learning Rates and Schedules", outcome: "Set and schedule learning rates that actually train.", effort: eff, status: S },
        { id: "deep-learning-train-regularization", order: 3, title: "Regularisation, Dropout, and BatchNorm", outcome: "Apply regularisation techniques and understand why they help.", effort: eff, status: S },
        { id: "deep-learning-train-init", order: 4, title: "Weight Initialisation and Numerical Stability", outcome: "Initialise networks so they can train at all.", effort: eff, status: S },
        { id: "deep-learning-train-diagnosing", order: 5, title: "Diagnosing Training Failures", outcome: "Read loss curves and diagnose common pathologies.", effort: eff, status: S },
      ],
    },
    {
      id: "deep-learning-architectures",
      order: 4,
      title: "Core Architectures",
      summary: "The architectural families that power modern deep learning.",
      lessons: [
        { id: "deep-learning-arch-cnn", order: 1, title: "Convolutional Networks", outcome: "Design and train CNNs for image tasks.", effort: eff, status: S },
        { id: "deep-learning-arch-rnn", order: 2, title: "RNNs, LSTMs, and Sequences", outcome: "Model sequential data with recurrent networks.", effort: eff, status: S },
        { id: "deep-learning-arch-attention", order: 3, title: "Attention and the Transformer Building Block", outcome: "Explain and implement scaled dot-product attention.", effort: eff, status: S },
        { id: "deep-learning-arch-encoders-decoders", order: 4, title: "Encoders, Decoders, and Encoder-Decoders", outcome: "Distinguish architectural patterns for different tasks.", effort: eff, status: S },
      ],
    },
    {
      id: "deep-learning-applied",
      order: 5,
      title: "Applied Deep Learning",
      summary: "Using pretrained models and fine-tuning them for your own problems.",
      lessons: [
        { id: "deep-learning-app-transfer", order: 1, title: "Transfer Learning and Fine-Tuning", outcome: "Adapt pretrained models to new tasks efficiently.", effort: eff, status: S },
        { id: "deep-learning-app-augment", order: 2, title: "Data Augmentation", outcome: "Improve generalisation with disciplined augmentation.", effort: eff, status: S },
        { id: "deep-learning-app-experiment-tracking", order: 3, title: "Experiment Tracking and Reproducibility", outcome: "Track experiments so results are trustworthy and repeatable.", effort: eff, status: S },
        { id: "deep-learning-app-paper-reading", order: 4, title: "Reading Deep Learning Papers", outcome: "Read a paper for what to reproduce, not what to admire.", effort: eff, status: S },
      ],
    },
  ],
};
