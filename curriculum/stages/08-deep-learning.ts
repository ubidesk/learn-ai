import type { Stage, Lesson } from "../schema";

const S = "planned" as const;
const E = "45–75 min";
const L = (id: string, order: number, title: string, outcome: string, effort = E): Lesson => ({
  id, order, title, outcome, effort, status: S,
});

export const stage: Stage = {
  id: "deep-learning",
  order: 8,
  title: "Deep Learning with PyTorch",
  purpose:
    "Take a classical-ML engineer and give them honest fluency with PyTorch, autograd, optimization, and the neural-network families — CNNs, RNNs, and transformers — that modern AI is built on.",
  startingLevel:
    "You have shipped classical ML models and understand evaluation. You have never trained a neural network from scratch.",
  prerequisites: ["classical-ml"],
  project: {
    title: "A Deep-Learning Model You Trained Yourself",
    description:
      "Design, train, evaluate, and document a neural network on a real dataset — with proper baselines, honest evaluation, checkpoints, mixed precision, and a report that explains your choices.",
  },
  exitCriteria: [
    "Manipulate tensors on CPU and GPU without shape and dtype confusion.",
    "Explain autograd, backpropagation, and the training loop from first principles.",
    "Train, evaluate, and debug MLPs, CNNs, and small transformers in PyTorch.",
    "Use standard reliability tricks — regularization, augmentation, mixed precision — deliberately.",
    "Recognise the shape of the compute, memory, and cost of your own training runs.",
  ],
  status: S,
  modules: [
    {
      id: "dl-tensors",
      order: 1,
      title: "Tensors",
      summary: "The core PyTorch object — shapes, dtypes, and devices — and the debugging habits that come with them.",
      lessons: [
        L("dl-tensors-basics", 1, "Tensor Basics", "Create, index, and reshape tensors."),
        L("dl-tensors-shapes-broadcasting", 2, "Shapes and Broadcasting", "Predict broadcasting behaviour before running code."),
        L("dl-tensors-devices", 3, "Devices: CPU and GPU", "Move tensors between devices deliberately."),
        L("dl-tensors-dtype-precision", 4, "dtype and Precision", "Choose dtypes for correctness and memory."),
        L("dl-tensors-pitfalls", 5, "Common Shape and Device Pitfalls", "Diagnose the classic shape/device mistakes."),
      ],
    },
    {
      id: "dl-autograd",
      order: 2,
      title: "Automatic Differentiation",
      summary: "How autograd actually works — computation graphs, backward passes, and the gotchas.",
      lessons: [
        L("dl-autograd-graphs", 1, "Computation Graphs", "Explain what PyTorch records when you run a forward pass."),
        L("dl-autograd-requires-grad", 2, "requires_grad and Leaves", "Predict which tensors get gradients."),
        L("dl-autograd-backward", 3, "The Backward Pass", "Trace how loss.backward() populates .grad."),
        L("dl-autograd-accumulation", 4, "Gradient Accumulation", "Simulate a larger batch with gradient accumulation."),
        L("dl-autograd-detach", 5, "detach() and no_grad()", "Turn off gradients when you don't need them."),
      ],
    },
    {
      id: "dl-nn-foundations",
      order: 3,
      title: "Neural-Network Foundations",
      summary: "From a single perceptron to multi-layer networks — the math and the intuition together.",
      lessons: [
        L("dl-nn-foundations-perceptron", 1, "Perceptron to MLP", "Build an MLP and explain each layer's role."),
        L("dl-nn-foundations-activations", 2, "Activation Functions", "Compare ReLU, GELU, sigmoid, and tanh."),
        L("dl-nn-foundations-losses", 3, "Loss Functions", "Match a loss function to the task."),
        L("dl-nn-foundations-init", 4, "Initialization", "Explain why initialization matters and pick a sensible scheme."),
        L("dl-nn-foundations-approximation", 5, "Universal Approximation, Intuition", "State what universal approximation does and does not promise."),
      ],
    },
    {
      id: "dl-optimization",
      order: 4,
      title: "Optimization",
      summary: "SGD, Adam, schedules, and the tricks that make training converge.",
      lessons: [
        L("dl-optimization-sgd", 1, "SGD and Momentum", "Train a model with plain SGD and reason about learning-rate choice."),
        L("dl-optimization-adam", 2, "Adam and Friends", "Use Adam, AdamW, and their siblings correctly."),
        L("dl-optimization-lr-schedules", 3, "Learning-Rate Schedules", "Apply warmup and cosine schedules."),
        L("dl-optimization-clipping", 4, "Gradient Clipping", "Clip gradients to stabilise training."),
        L("dl-optimization-second-order-preview", 5, "Second-Order Methods, Preview", "Recognise where second-order methods are still competitive."),
      ],
    },
    {
      id: "dl-workflow",
      order: 5,
      title: "PyTorch Engineering Workflow",
      summary: "The training loop as a real engineering artefact — Datasets, DataLoaders, checkpoints, and reproducibility.",
      lessons: [
        L("dl-workflow-dataset-dataloader", 1, "Dataset and DataLoader", "Load data efficiently with Dataset and DataLoader."),
        L("dl-workflow-training-loop", 2, "The Training Loop", "Write a training loop you can trust."),
        L("dl-workflow-validation-loop", 3, "The Validation Loop", "Validate without leaking training state."),
        L("dl-workflow-checkpoints", 4, "Checkpoints and Resume", "Save and resume runs deterministically."),
        L("dl-workflow-reproducibility", 5, "Reproducibility", "Pin seeds, versions, and hardware settings for reproducible runs."),
      ],
    },
    {
      id: "dl-training-reliability",
      order: 6,
      title: "Training Reliability",
      summary: "How to keep training stable — overfitting, normalization, augmentation, early stopping, mixed precision.",
      lessons: [
        L("dl-training-reliability-overfitting", 1, "Overfitting and Regularization", "Diagnose overfitting and apply weight decay."),
        L("dl-training-reliability-dropout-norm", 2, "Dropout and Normalization", "Apply dropout, batch norm, and layer norm deliberately."),
        L("dl-training-reliability-augmentation", 3, "Data Augmentation", "Use augmentation to expand effective dataset size."),
        L("dl-training-reliability-early-stopping", 4, "Early Stopping", "Stop training before you overfit."),
        L("dl-training-reliability-mixed-precision", 5, "Mixed Precision", "Train in fp16/bf16 without breaking numerics."),
      ],
    },
    {
      id: "dl-cv",
      order: 7,
      title: "Computer Vision",
      summary: "How neural networks see — CNNs, ResNets, transfer learning, detection, and segmentation.",
      lessons: [
        L("dl-cv-image-tensors", 1, "Image Tensors", "Load, transform, and normalise image data."),
        L("dl-cv-cnn-basics", 2, "CNN Basics", "Build and explain a small CNN."),
        L("dl-cv-resnets", 3, "ResNets and Skip Connections", "Explain why skip connections train deeper networks."),
        L("dl-cv-transfer", 4, "Transfer Learning", "Fine-tune a pretrained backbone."),
        L("dl-cv-detection", 5, "Object Detection, Preview", "Recognise the detection problem and pick a starting model."),
        L("dl-cv-segmentation", 6, "Segmentation, Preview", "Recognise pixel-level tasks and pick a starting model."),
      ],
    },
    {
      id: "dl-sequences",
      order: 8,
      title: "Sequence Models",
      summary: "RNNs, LSTMs, GRUs, and the sequence-to-sequence framing that predates transformers.",
      lessons: [
        L("dl-sequences-rnn", 1, "RNN Basics", "Explain the vanilla RNN and its failure modes."),
        L("dl-sequences-lstm-gru", 2, "LSTM and GRU", "Compare LSTM and GRU for practical sequence problems."),
        L("dl-sequences-padding-masking", 3, "Padding and Masking", "Handle variable-length sequences correctly."),
        L("dl-sequences-seq2seq", 4, "Sequence-to-Sequence, Preview", "Frame translation and summarization as seq2seq."),
        L("dl-sequences-teacher-forcing", 5, "Teacher Forcing", "Explain teacher forcing and its exposure-bias trade-off."),
      ],
    },
    {
      id: "dl-attention-transformers",
      order: 9,
      title: "Attention and Transformers",
      summary: "The attention mechanism, self-attention, and the transformer block that underlies modern AI.",
      lessons: [
        L("dl-attention-transformers-attention", 1, "The Attention Mechanism", "Compute attention as query, key, and value."),
        L("dl-attention-transformers-self-attention", 2, "Self-Attention", "Explain self-attention as content-addressable memory."),
        L("dl-attention-transformers-block", 3, "The Transformer Block", "Assemble multi-head attention, feedforward, residuals, and norms."),
        L("dl-attention-transformers-positional", 4, "Positional Encodings", "Compare learned, sinusoidal, and rotary positional encodings."),
        L("dl-attention-transformers-encoder-decoder", 5, "Encoder-Decoder vs Decoder-Only", "Pick the right transformer variant for a task."),
      ],
    },
    {
      id: "dl-efficient-training",
      order: 10,
      title: "Efficient Training",
      summary: "The engineering choices that make big models trainable — memory, quantization, and distributed concepts.",
      lessons: [
        L("dl-efficient-training-gpu-memory", 1, "GPU Memory in Practice", "Read and reduce GPU memory usage."),
        L("dl-efficient-training-checkpointing", 2, "Gradient Checkpointing", "Trade compute for memory with gradient checkpointing."),
        L("dl-efficient-training-distributed", 3, "Distributed Training, Concepts", "Distinguish data, model, and pipeline parallelism."),
        L("dl-efficient-training-quantization", 4, "Quantization, Preview", "Recognise int8/fp8 quantization as a deployment tool."),
        L("dl-efficient-training-profiling", 5, "Profiling Training Runs", "Profile a training run to find the real bottleneck."),
      ],
    },
  ],
};
