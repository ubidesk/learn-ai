import type { LessonBody } from "../schema";

export const module01: Record<string, LessonBody> = {
  "computers-info-representation-binary-bytes": {
    curiosity:
      "Your keyboard, your video calls, the entire internet — all of it, ultimately, is patterns of ones and zeros moving through metal. A photograph and a poem live on the same disk in the same alphabet. How does that alphabet work?",
    whyThisMatters:
      "Every layer of the stack — Python variables, images, network packets, model weights — is bytes underneath. Once you can read binary and hex fluently, error messages, file headers, and low-level bugs stop being mysterious symbols and start being words.",
    intuition: [
      "A bit is the smallest possible answer: yes or no, 1 or 0. Everything else is bits arranged in patterns.",
      "A byte is eight bits, and it's the unit that actually moves around your machine — RAM addresses, disk blocks, and network buffers are all measured in bytes.",
      "Hex is just bytes wearing shorter pants: two hex digits (0–F) cover exactly one byte, so programmers read '0xFF' faster than they read '11111111'.",
    ],
    visual: {
      component: "binary-decoder",
      caption: "Type a decimal number and watch it become binary, hex, and an ASCII character.",
    },
    explanation: [
      "A bit has two states because a transistor is either mostly-on or mostly-off — cheap, fast, and forgiving of electrical noise. Everything else is a convention layered on top.",
      "One byte (8 bits) holds 2⁸ = 256 distinct values. That's enough for a small integer, one ASCII character, or one colour channel of a pixel.",
      "We write bytes in hex because base 16 lines up with 4 bits per digit. Two hex digits = 8 bits = one byte. A three-byte RGB colour like #FF8040 packs three numbers into six readable characters.",
      "Kilobyte, megabyte, gigabyte, terabyte — each ~1000× the last. When you see 'a 4 GB file', you're seeing four billion of those little yes/no answers.",
    ],
    experiment: {
      component: "binary-decoder",
      caption: "Try the byte inspector.",
      instructions:
        "Type 65 — that's the letter 'A'. Try 32 (space), 48 ('0'), 90 ('Z'), 255 (the largest single-byte value). Notice how patterns cluster: capital letters, digits, and punctuation live in tidy ranges.",
    },
    reflection: [
      "Explain out loud why 0xFF and 255 and 11111111 are three ways of saying the same thing.",
      "If a byte can only hold 256 values, how do we possibly represent every possible emoji? Take a guess — next lesson expands this.",
    ],
    modernAiConnection:
      "A modern LLM has, roughly, a hundred billion parameters, each stored as two bytes. That's ~200 GB of pure numbers riding on top of exactly the bit patterns you just learned. When a model 'runs quantized to int8', someone chose to spend one byte per weight instead of two — and the whole machine got smaller and faster.",
    knowledgeCheck: {
      question: "How many distinct values fit in one byte?",
      options: [
        { text: "8", correct: false, feedback: "8 is the number of bits in a byte, not the number of values. Each bit doubles the possibilities." },
        { text: "16", correct: false, feedback: "16 is the base for hex digits, and one hex digit represents 4 bits, half a byte." },
        { text: "256", correct: true, feedback: "Exactly — 2⁸ = 256 (values 0 through 255)." },
        { text: "1024", correct: false, feedback: "1024 is 2¹⁰, related to KiB. One byte is 2⁸ = 256." },
      ],
    },
    nextStepHint: "You can now read raw bytes. Next: how those bytes take on meaning as numbers, positive and negative, whole and fractional.",
  },

  "computers-info-representation-numbers": {
    curiosity:
      "A CPU register holds the pattern 11111111. Is that 255? Is it -1? Is it the boundary of a texture in a game? The pattern doesn't say. The program does. What could go wrong?",
    whyThisMatters:
      "Nearly every 'strange numeric bug' in your career will come from a mismatch between bits and their intended meaning. Overflow, silent truncation, floating-point drift — none of them are exotic. They come from four or five encodings you can learn today.",
    intuition: [
      "Unsigned integers are your fingers: count up from zero and don't go negative.",
      "Signed integers are your fingers plus a sign, using a trick called two's complement that lets addition work without special cases.",
      "Floating-point numbers are scientific notation for machines: a fixed number of significant digits and a movable decimal point.",
    ],
    visual: {
      component: "number-encoding",
      caption: "The same bit pattern, viewed as unsigned, signed, and normalised float.",
    },
    explanation: [
      "Unsigned integers are the simplest: n bits give 0 through 2ⁿ − 1. Perfect for counters, sizes, and indices — anything that cannot logically be negative.",
      "Signed integers use two's complement: the top bit means 'subtract 2ⁿ⁻¹'. An 8-bit signed value covers −128 to +127. This trick makes hardware addition free — the CPU doesn't need to know signed from unsigned.",
      "Floating-point (IEEE 754) is what most languages call 'float' or 'double'. It splits bits into a sign, an exponent, and a fraction. Great for a huge dynamic range; terrible for exact decimal arithmetic (0.1 + 0.2 is famously 0.30000000000000004).",
      "Choose the type to match the domain. Money in floats is a career-limiting move; use integer cents. Physics simulations in int32 will overflow spectacularly.",
    ],
    experiment: {
      component: "number-encoding",
      caption: "Flip the same bits between meanings.",
      instructions:
        "Set 8-bit width and try 200. Notice unsigned reads it as 200 but signed reads it as −56. Now try width 4 with value 15 — the top bit is set, so signed = −1. This is what happens when a C program reads a byte with the wrong type.",
    },
    reflection: [
      "You store the current temperature (which can go below zero) in an unsigned integer. What breaks and when?",
      "Someone stores a bank balance as a double-precision float. Name two ways this hurts, one obvious and one subtle.",
    ],
    modernAiConnection:
      "Neural network weights typically live in 16-bit or even 8-bit floats to fit huge models in GPU memory. Whole subfields exist to prevent tiny rounding errors from compounding across billions of operations. Every 'low-precision inference' or 'mixed-precision training' claim in an AI paper is a statement about which encoding they picked.",
    knowledgeCheck: {
      question: "You store a distance in metres in a 16-bit unsigned integer. The distance grows past 65,535. What happens on most systems?",
      options: [
        { text: "The program crashes with an overflow error.", correct: false, feedback: "In most low-level languages there's no crash — the value silently wraps. Some higher-level languages do check." },
        { text: "The value wraps around to 0 and keeps counting.", correct: true, feedback: "Classic integer overflow. The Ariane 5 rocket exploded partly because of exactly this. Choose your width and your signedness deliberately." },
        { text: "The value pins at 65,535 forever.", correct: false, feedback: "Saturating arithmetic exists (some audio DSPs use it) but is not the default." },
        { text: "It automatically promotes to a larger type.", correct: false, feedback: "Only in languages with arbitrary-precision integers like Python. In C, Rust, or Go with fixed widths, it wraps." },
      ],
    },
    nextStepHint: "Numbers are handled. Next: text — which turns out to be much stranger than it looks.",
  },

  "computers-info-representation-text-unicode": {
    curiosity:
      "You send the word 'café' to a friend. Their phone shows 'café'. Neither of you is doing anything wrong. Where did those extra symbols come from?",
    whyThisMatters:
      "Every real-world app deals with text from multiple languages, and text is not just letters — it's code points, encodings, and normalisation forms. Getting this wrong corrupts data quietly for years. Getting it right takes one lesson.",
    intuition: [
      "A character is what you type; a code point is a Unicode-assigned number for that character; an encoding is how that number becomes bytes on disk.",
      "ASCII (0–127) is the ancient ancestor everyone still uses. UTF-8 extends it: familiar English letters take one byte, everything else takes two, three, or four.",
      "A mismatch between what wrote the bytes and what reads them is where the mojibake ('café') comes from.",
    ],
    visual: {
      component: "unicode-inspector",
      caption: "Type text and see its code points and UTF-8 bytes.",
    },
    explanation: [
      "Unicode is a giant table mapping every character in every writing system (plus emoji) to a code point — a number like U+0041 for 'A' or U+1F642 for '🙂'.",
      "An encoding turns code points into bytes. UTF-8 is the encoding to standardise on: it's backward-compatible with ASCII, variable-width (1–4 bytes per character), and used by the entire modern web.",
      "UTF-16 is what Windows and Java historically used internally. UTF-32 wastes space but has fixed width. Legacy encodings like Latin-1 are the source of most 'weird characters' bugs — they misread UTF-8 bytes as single-byte characters.",
      "Two visually identical strings can differ in bytes because of normalisation (é as one code point vs. e + combining accent). If you compare user input naively, this bites.",
    ],
    experiment: {
      component: "unicode-inspector",
      caption: "Explore how bytes-per-character grows.",
      instructions:
        "Type 'A' (1 byte). Add 'é' (2 bytes). Add '中' (3 bytes). Add '🙂' (4 bytes). Notice: your text is 4 characters but 10 bytes. That's why string length is not the same as byte length — a common source of buffer bugs.",
    },
    reflection: [
      "Explain why saving a file 'as UTF-8' matters even if the file only contains English words.",
      "A form asks users for their name and truncates the byte length to 20. Why is that a bug for non-English users?",
    ],
    modernAiConnection:
      "Language models don't process characters directly — they process tokens, small chunks of text that are ultimately byte sequences. English words often get one token each; emoji or Chinese characters often get several. Your API bill scales with tokens, so knowing what a token actually is (a UTF-8 byte sub-sequence) starts here.",
    knowledgeCheck: {
      question: "You save a Python file containing `name = 'café'` as ASCII by mistake. What happens?",
      options: [
        { text: "It's fine — Python auto-converts.", correct: false, feedback: "It's not fine. ASCII cannot represent 'é' — the file save either fails or replaces the character." },
        { text: "The file fails to save or loses the accent.", correct: true, feedback: "Correct. ASCII covers 0–127 only; 'é' isn't in it. UTF-8 is the safe default for source files." },
        { text: "The program runs but crashes when it reads the string.", correct: false, feedback: "The corruption happens at save time, not read time." },
        { text: "Python refuses to open non-ASCII source files.", correct: false, feedback: "Modern Python defaults to UTF-8 source files precisely to avoid this." },
      ],
    },
    nextStepHint: "Text handled. Next: how the same bytes-plus-headers idea encodes images and audio, and why compression is where the interesting engineering lives.",
  },

  "computers-info-representation-images-audio": {
    curiosity:
      "A 12-megapixel raw photo is roughly 36 MB. The JPEG your phone saved is 3 MB. It looks identical. Where did 90% of the data go — and can you get it back?",
    whyThisMatters:
      "Every model that reads or writes images, audio, or video is manipulating exactly these representations. Understanding pixels, samples, and lossy vs lossless compression is the difference between debugging by faith and debugging by knowledge.",
    intuition: [
      "An image is a grid of pixels. Each pixel is a colour, typically stored as three or four bytes (RGB or RGBA).",
      "Audio is a very fast measurement of pressure: how loud, right now — thousands of times per second.",
      "Compression is a bet: some bits carry more information than others, and we can throw the low-information bits away (lossy) or store them shorter (lossless).",
    ],
    visual: {
      component: "media-bytes",
      caption: "Slide RGB channels, or change audio frequency, and watch the bytes.",
    },
    explanation: [
      "A 1920×1080 uncompressed image with 3-byte RGB pixels is 6.2 MB. That's why nothing on the web ships raw pixels — it would break bandwidth.",
      "JPEG throws away high-frequency detail your eyes barely notice (lossy). PNG rearranges pixels for smaller byte sequences without losing any of them (lossless). WebP and AVIF do both, better.",
      "Audio is characterised by sample rate (how many measurements per second — 44.1 kHz for CDs) and bit depth (how precise each measurement is — 16 bits is standard).",
      "MP3, AAC, and Opus drop the parts of audio human hearing can't distinguish. FLAC preserves everything, at 2–3× the file size.",
    ],
    experiment: {
      component: "media-bytes",
      caption: "Adjust an RGB pixel and an audio waveform.",
      instructions:
        "Move the R/G/B sliders and see how the swatch and the byte string change. Then flip to audio and increase the frequency — watch the wave become denser without needing more bytes to store. Compression cares about redundancy, and simple patterns compress dramatically.",
    },
    reflection: [
      "A friend sends you a 'photo' that's 10 KB. What was probably done to it, and why does that matter for an ML pipeline?",
      "Why might a speech recognition model handle low-bitrate compressed audio poorly, even if humans understand it fine?",
    ],
    modernAiConnection:
      "Vision models literally receive a tensor of pixel values as input — often normalised to floats between 0 and 1. Audio models receive samples or spectrograms. The whole first layer of every image model is doing arithmetic on the bytes you saw in the swatch. When your model 'sees a photo', it sees numbers.",
    knowledgeCheck: {
      question: "Which is a lossy image format?",
      options: [
        { text: "PNG", correct: false, feedback: "PNG is lossless — it compresses without discarding pixel information." },
        { text: "JPEG", correct: true, feedback: "Correct. JPEG discards high-frequency detail. Great for photos, bad for text screenshots." },
        { text: "BMP", correct: false, feedback: "BMP is uncompressed — no compression at all, lossy or otherwise." },
        { text: "TIFF (default)", correct: false, feedback: "TIFF is typically lossless. It supports many encodings, but the default is not lossy." },
      ],
    },
    nextStepHint: "Data is handled. Next: the machine that manipulates all these bytes — the CPU itself.",
  },
};
