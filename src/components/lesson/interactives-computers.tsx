import { useState, useMemo, type ComponentType, type ReactNode } from "react";
import { InteractiveShell, ScenarioSorter, StepFlow, ModeSwitch } from "./primitives";

/**
 * Stage 2 interactives — Computers, OS, Networks, Web.
 * All deterministic, session-local, browser-only. No shell execution,
 * no network calls, no persistence.
 */

// ------------------ Small local primitives ------------------

function NumberInput({
  value,
  onChange,
  min = 0,
  max = 65535,
  label,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
  label: string;
}) {
  return (
    <label className="block text-xs">
      <span className="mr-2 font-mono text-muted-foreground">{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const n = Number(e.target.value);
          if (Number.isFinite(n)) onChange(Math.max(min, Math.min(max, n)));
        }}
        className="w-32 rounded-md border border-border/60 bg-background px-2 py-1 font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={label}
      />
    </label>
  );
}

function Grid({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 md:grid-cols-2">{children}</div>;
}

function Cell({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background p-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-1 font-mono text-sm break-all">{children}</div>
    </div>
  );
}

// ------------------ Module 1: Information Representation ------------------

function BinaryDecoder() {
  const [n, setN] = useState(65);
  const bin = n.toString(2).padStart(8, "0");
  const hex = n.toString(16).toUpperCase().padStart(2, "0");
  const ascii = n >= 32 && n < 127 ? String.fromCharCode(n) : "·";
  return (
    <InteractiveShell title="Byte inspector — one number, three ways">
      <NumberInput value={n} onChange={setN} min={0} max={255} label="Decimal (0–255):" />
      <Grid>
        <Cell label="Binary (base 2)">{bin}</Cell>
        <Cell label="Hex (base 16)">0x{hex}</Cell>
        <Cell label="Decimal">{n}</Cell>
        <Cell label="As ASCII char">{ascii}</Cell>
      </Grid>
      <p className="mt-3 text-xs text-muted-foreground">
        One byte holds a value from 0 to 255. Programmers read bytes in hex because two
        hex digits map exactly to eight binary bits.
      </p>
    </InteractiveShell>
  );
}

function NumberEncoding() {
  const [bits, setBits] = useState(8);
  const [val, setVal] = useState(200);
  const unsignedMax = 2 ** bits - 1;
  const signedMin = -(2 ** (bits - 1));
  const signedMax = 2 ** (bits - 1) - 1;
  const clamped = Math.min(unsignedMax, Math.max(0, val));
  const signedInterpretation = clamped > signedMax ? clamped - 2 ** bits : clamped;
  return (
    <InteractiveShell title="Same bits, different meanings">
      <div className="flex flex-wrap gap-4">
        <label className="text-xs">
          <span className="mr-2 font-mono">Bit width:</span>
          <select
            value={bits}
            onChange={(e) => setBits(Number(e.target.value))}
            className="rounded-md border border-border/60 bg-background px-2 py-1 font-mono text-sm"
          >
            <option value={4}>4-bit</option>
            <option value={8}>8-bit</option>
            <option value={16}>16-bit</option>
          </select>
        </label>
        <NumberInput
          value={clamped}
          onChange={setVal}
          min={0}
          max={unsignedMax}
          label="Bit pattern (as unsigned):"
        />
      </div>
      <Grid>
        <Cell label="Unsigned interpretation">
          {clamped} <span className="text-muted-foreground">(0 … {unsignedMax})</span>
        </Cell>
        <Cell label="Two's-complement signed">
          {signedInterpretation}{" "}
          <span className="text-muted-foreground">
            ({signedMin} … {signedMax})
          </span>
        </Cell>
        <Cell label="Binary">{clamped.toString(2).padStart(bits, "0")}</Cell>
        <Cell label="Approx. float (½ + …)">
          {(clamped / unsignedMax).toFixed(4)}
        </Cell>
      </Grid>
      <p className="mt-3 text-xs text-muted-foreground">
        Same bits, three meanings. The CPU only sees the pattern; the program decides
        how to read it. That's why choosing the wrong type causes bugs.
      </p>
    </InteractiveShell>
  );
}

function UnicodeInspector() {
  const [s, setS] = useState("A€🙂");
  const chars = Array.from(s); // splits by code point, not by UTF-16 unit
  return (
    <InteractiveShell title="Text is not bytes — meet Unicode">
      <label className="block text-xs">
        <span className="mr-2 font-mono text-muted-foreground">Type any text:</span>
        <input
          value={s}
          onChange={(e) => setS(e.target.value.slice(0, 20))}
          className="w-full rounded-md border border-border/60 bg-background px-3 py-2 font-mono text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Text to inspect"
        />
      </label>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full font-mono text-xs">
          <thead className="text-muted-foreground">
            <tr>
              <th className="pr-3 text-left">Char</th>
              <th className="pr-3 text-left">Code point</th>
              <th className="text-left">UTF-8 bytes</th>
            </tr>
          </thead>
          <tbody>
            {chars.map((c, i) => {
              const cp = c.codePointAt(0)!;
              const bytes = Array.from(new TextEncoder().encode(c))
                .map((b) => b.toString(16).toUpperCase().padStart(2, "0"))
                .join(" ");
              return (
                <tr key={i} className="border-t border-border/60">
                  <td className="py-1 pr-3">{c}</td>
                  <td className="py-1 pr-3">U+{cp.toString(16).toUpperCase().padStart(4, "0")}</td>
                  <td className="py-1">{bytes}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        ASCII takes 1 byte per char. Accented letters take 2. Most emoji take 4. UTF-8
        stays backward-compatible with ASCII while covering every writing system.
      </p>
    </InteractiveShell>
  );
}

function MediaBytes() {
  const [mode, setMode] = useState<"pixel" | "audio">("pixel");
  const [r, setR] = useState(200);
  const [g, setG] = useState(120);
  const [b, setB] = useState(64);
  const [freq, setFreq] = useState(4);
  const wave = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 60; i++) {
      const y = 40 + 30 * Math.sin((i / 60) * freq * Math.PI * 2);
      pts.push(`${i * 5},${y}`);
    }
    return pts.join(" ");
  }, [freq]);
  return (
    <InteractiveShell title="Media as bytes">
      <div className="flex gap-2" role="tablist">
        {(["pixel", "audio"] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`rounded-md border px-3 py-1.5 text-xs ${mode === m ? "border-accent bg-accent/10" : "border-border/60 hover:border-accent/60"}`}
          >
            {m === "pixel" ? "Image pixel" : "Audio sample"}
          </button>
        ))}
      </div>
      {mode === "pixel" ? (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-border/60 p-4">
            {(["R", "G", "B"] as const).map((ch, idx) => {
              const val = [r, g, b][idx]!;
              const setter = [setR, setG, setB][idx]!;
              return (
                <label key={ch} className="mt-2 block text-xs">
                  <span className="mr-2 font-mono">{ch}: {val}</span>
                  <input
                    type="range"
                    min={0}
                    max={255}
                    value={val}
                    onChange={(e) => setter(Number(e.target.value))}
                    className="accent-accent"
                    aria-label={`${ch} channel`}
                  />
                </label>
              );
            })}
            <p className="mt-3 font-mono text-xs">
              Bytes: {r.toString(16).padStart(2, "0").toUpperCase()}
              {g.toString(16).padStart(2, "0").toUpperCase()}
              {b.toString(16).padStart(2, "0").toUpperCase()} (3 bytes / pixel)
            </p>
          </div>
          <div
            aria-label="Preview swatch"
            className="rounded-lg border border-border/60"
            style={{ backgroundColor: `rgb(${r},${g},${b})`, minHeight: 120 }}
          />
        </div>
      ) : (
        <div className="mt-4">
          <label className="block text-xs">
            <span className="mr-2 font-mono">Cycles across the window: {freq}</span>
            <input
              type="range"
              min={1}
              max={20}
              value={freq}
              onChange={(e) => setFreq(Number(e.target.value))}
              className="accent-accent"
              aria-label="Waveform frequency"
            />
          </label>
          <svg viewBox="0 0 300 80" className="mt-2 w-full" aria-label="Waveform preview">
            <polyline points={wave} fill="none" stroke="currentColor" strokeWidth="2" className="text-accent" />
          </svg>
          <p className="mt-2 text-xs text-muted-foreground">
            Audio is samples-per-second. CD-quality: 44,100 samples × 2 bytes × 2
            channels ≈ 176 KB per second. Compression (MP3, AAC) removes what your ears
            can't tell apart.
          </p>
        </div>
      )}
    </InteractiveShell>
  );
}

// ------------------ Module 2: Hardware ------------------

function CpuCycle() {
  return (
    <InteractiveShell title="What the CPU does every tick">
      <StepFlow
        steps={[
          { title: "Fetch", body: "CPU reads the next instruction from memory at the address in the program counter." },
          { title: "Decode", body: "The instruction is decoded: which operation, which registers, which operands?" },
          { title: "Execute", body: "The arithmetic/logic unit performs the operation. Results go to a register." },
          { title: "Writeback", body: "Results are written back to a register or memory. Program counter advances." },
          { title: "Repeat — billions of times per second", body: "A 3 GHz CPU runs three billion cycles per second, per core. Modern chips overlap these stages (pipelining) so many instructions are in flight at once." },
        ]}
      />
    </InteractiveShell>
  );
}

function MemoryHierarchy() {
  const levels = [
    { name: "CPU register", ns: 0.3, size: "~1 KB", note: "Right inside the CPU core" },
    { name: "L1 cache", ns: 1, size: "~64 KB", note: "Per core, fastest cache" },
    { name: "L2 cache", ns: 4, size: "~1 MB", note: "Per core, larger" },
    { name: "L3 cache", ns: 15, size: "~30 MB", note: "Shared across cores" },
    { name: "RAM (DRAM)", ns: 100, size: "16–64 GB", note: "Main memory" },
    { name: "NVMe SSD", ns: 100_000, size: "~1 TB", note: "Persistent, fast" },
    { name: "Hard disk (HDD)", ns: 10_000_000, size: "1–8 TB", note: "Spinning platters" },
    { name: "Network (LAN)", ns: 500_000, size: "—", note: "Another machine nearby" },
  ];
  const max = Math.max(...levels.map((l) => Math.log10(l.ns + 1)));
  return (
    <InteractiveShell title="How far away is your data?">
      <ul className="space-y-2">
        {levels.map((l) => {
          const w = ((Math.log10(l.ns + 1) / max) * 100).toFixed(1);
          return (
            <li key={l.name} className="rounded-lg border border-border/60 bg-background p-3">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium">{l.name}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  ~{l.ns < 1 ? "0.3" : l.ns.toLocaleString()} ns · {l.size}
                </p>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-border">
                <div className="h-1.5 rounded-full bg-accent" style={{ width: `${w}%` }} aria-hidden="true" />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{l.note}</p>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs text-muted-foreground">
        Notice the jumps: cache to RAM is ~10×, RAM to SSD is ~1000×, RAM to spinning
        disk is ~100,000×. That's why locality (keeping data close to the CPU) is the
        single most important performance idea.
      </p>
    </InteractiveShell>
  );
}

function StoragePicker() {
  return (
    <InteractiveShell title="Pick storage for the workload">
      <ScenarioSorter
        choices={[
          { id: "reg", label: "CPU register" },
          { id: "ram", label: "RAM" },
          { id: "ssd", label: "SSD" },
          { id: "hdd", label: "HDD" },
          { id: "tape", label: "Tape / cold archive" },
        ]}
        scenarios={[
          { id: "st1", text: "The variable a loop is incrementing right now.", correct: "reg", feedback: "Live variables sit in registers or L1 — the CPU can't afford anything slower." },
          { id: "st2", text: "The 10 GB dataset a training job is streaming this hour.", correct: "ram", feedback: "Hot working set → RAM. Fast enough, big enough, priced per hour." },
          { id: "st3", text: "A user's photo library, opened often but not every second.", correct: "ssd", feedback: "SSD is the sweet spot for warm, frequently accessed but not blazing-hot data." },
          { id: "st4", text: "Ten years of backups a company might never touch.", correct: "tape", feedback: "Cold, cheap, slow. Tape or object-storage 'archive' tiers are pennies per TB per month." },
          { id: "st5", text: "8 TB of movies streamed occasionally at home.", correct: "hdd", feedback: "Large, cheap, and sequential reads are fine — HDDs still win on $/TB for bulk media." },
        ]}
      />
    </InteractiveShell>
  );
}

function IoBottleneck() {
  return (
    <InteractiveShell title="Where's the bottleneck?">
      <ScenarioSorter
        choices={[
          { id: "cpu", label: "CPU-bound" },
          { id: "mem", label: "Memory-bound" },
          { id: "disk", label: "Disk-bound" },
          { id: "net", label: "Network-bound" },
        ]}
        scenarios={[
          { id: "io1", text: "Downloading a 4 GB dataset over a hotel Wi-Fi.", correct: "net", feedback: "The pipe is the limit. Faster CPU won't help." },
          { id: "io2", text: "Computing SHA-256 of a small string in a tight loop.", correct: "cpu", feedback: "Pure arithmetic on tiny data — CPU-bound." },
          { id: "io3", text: "Aggregating a 200 GB CSV that doesn't fit in RAM.", correct: "disk", feedback: "You'll spend the wall clock reading from disk. Batch, stream, and compress." },
          { id: "io4", text: "Multiplying two 30 GB matrices that just barely fit in RAM.", correct: "mem", feedback: "Data movement between RAM and cache dominates. Locality matters more than raw FLOPs." },
        ]}
      />
    </InteractiveShell>
  );
}

// ------------------ Module 3: Programs & Execution ------------------

function SourceToMachine() {
  return (
    <InteractiveShell title="From your keystrokes to the CPU">
      <StepFlow
        steps={[
          { title: "1. Source code", body: "You write `x = a + b` in Python. Just text saved to disk as bytes." },
          { title: "2. Lex + Parse", body: "The interpreter/compiler splits the text into tokens and builds a syntax tree." },
          { title: "3. Intermediate form", body: "The tree is lowered into an intermediate representation — bytecode (Python), IR (C via LLVM), or bytecode + JIT (JavaScript, Java)." },
          { title: "4. Machine code", body: "For compiled languages this becomes CPU instructions ahead of time. For interpreted/JIT languages, it happens as the program runs." },
          { title: "5. Execute", body: "The CPU runs those instructions. Registers update. Eventually a result reaches your screen, disk, or network." },
        ]}
      />
    </InteractiveShell>
  );
}

function ExecModes() {
  return (
    <InteractiveShell title="Three ways to run a program">
      <ModeSwitch
        modes={[
          {
            id: "compiled",
            label: "Compiled (C, Rust)",
            render: () => (
              <p className="text-sm">
                A separate build step turns source into a machine-code binary. The binary
                runs directly on the CPU. Fast startup, fast execution, but tied to a
                specific OS + CPU architecture.
              </p>
            ),
          },
          {
            id: "interpreted",
            label: "Interpreted (Python, Bash)",
            render: () => (
              <p className="text-sm">
                A runtime reads your source (or its bytecode) line by line and executes
                it. Slower per operation, but portable and interactive — you can change
                code and re-run instantly.
              </p>
            ),
          },
          {
            id: "vm",
            label: "VM / JIT (Java, JS)",
            render: () => (
              <p className="text-sm">
                A middle path: source is compiled to bytecode for a virtual machine, then
                the hot parts are compiled to native code on the fly. Startup like an
                interpreter, steady-state speed close to a compiled language.
              </p>
            ),
          },
        ]}
      />
    </InteractiveShell>
  );
}

function ProcessMemoryMap() {
  const regions = [
    { name: "Stack", note: "Function call frames, local variables. Grows and shrinks fast.", top: 10 },
    { name: "Heap", note: "Long-lived allocations. Managed by malloc/GC.", top: 30 },
    { name: "Data (BSS + globals)", note: "Global variables, both initialised and zeroed.", top: 55 },
    { name: "Code (text segment)", note: "The read-only machine instructions of your program.", top: 78 },
  ];
  return (
    <InteractiveShell title="One process's memory">
      <div className="grid gap-4 md:grid-cols-[220px_1fr] items-start">
        <div className="relative h-64 rounded-lg border border-border/60 bg-background">
          {regions.map((r) => (
            <div
              key={r.name}
              className="absolute inset-x-2 rounded border border-accent/40 bg-accent/10 p-2 text-xs"
              style={{ top: `${r.top}%`, height: "18%" }}
            >
              <p className="font-mono">{r.name}</p>
            </div>
          ))}
          <p className="absolute left-2 top-0 font-mono text-[10px] text-muted-foreground">high addresses ↑</p>
          <p className="absolute left-2 bottom-0 font-mono text-[10px] text-muted-foreground">low addresses ↓</p>
        </div>
        <ul className="space-y-2 text-xs">
          {regions.map((r) => (
            <li key={r.name} className="rounded border border-border/60 bg-background p-2">
              <p className="font-mono text-[11px] text-accent">{r.name}</p>
              <p className="mt-1 text-muted-foreground">{r.note}</p>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Every process gets its own private map. Two processes can't read each other's
        memory without asking the OS. That isolation is what makes multi-app machines
        possible.
      </p>
    </InteractiveShell>
  );
}

function ConcurrencyVsParallel() {
  const [cores, setCores] = useState(2);
  const [tasks, setTasks] = useState(6);
  const wallTime = Math.ceil(tasks / cores);
  return (
    <InteractiveShell title="Concurrency vs parallelism">
      <div className="flex flex-wrap gap-4">
        <label className="text-xs">
          <span className="mr-2 font-mono">Cores: {cores}</span>
          <input
            type="range"
            min={1}
            max={8}
            value={cores}
            onChange={(e) => setCores(Number(e.target.value))}
            className="accent-accent"
            aria-label="Cores"
          />
        </label>
        <label className="text-xs">
          <span className="mr-2 font-mono">Independent tasks: {tasks}</span>
          <input
            type="range"
            min={1}
            max={12}
            value={tasks}
            onChange={(e) => setTasks(Number(e.target.value))}
            className="accent-accent"
            aria-label="Tasks"
          />
        </label>
      </div>
      <div className="mt-3 grid gap-2" style={{ gridTemplateColumns: `repeat(${wallTime}, minmax(0,1fr))` }}>
        {Array.from({ length: cores * wallTime }).map((_, i) => {
          const has = i < tasks;
          return (
            <div
              key={i}
              className={`h-8 rounded border ${has ? "border-accent bg-accent/20" : "border-dashed border-border/60"}`}
              aria-hidden="true"
            />
          );
        })}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        With {cores} core{cores > 1 ? "s" : ""} and {tasks} independent tasks, wall
        time ≈ {wallTime} slot{wallTime > 1 ? "s" : ""}. Concurrency = tasks in
        flight; parallelism = tasks actually running simultaneously. Async I/O gives
        you concurrency on 1 core; more cores give you real parallelism.
      </p>
    </InteractiveShell>
  );
}

// ------------------ Module 4: OS ------------------

function OsRole() {
  return (
    <InteractiveShell title="The OS as a manager">
      <ModeSwitch
        modes={[
          { id: "proc", label: "Processes", render: () => <p className="text-sm">Schedules which process runs on which core, when, and for how long. Keeps unresponsive apps from freezing the whole machine.</p> },
          { id: "mem", label: "Memory", render: () => <p className="text-sm">Hands out virtual memory to each process, translates virtual addresses to physical RAM, moves cold pages to disk when RAM is tight.</p> },
          { id: "fs", label: "Files", render: () => <p className="text-sm">Turns raw disk blocks into a tree of files and folders with permissions. Buffers reads and writes.</p> },
          { id: "dev", label: "Devices", render: () => <p className="text-sm">Loads drivers for keyboards, screens, network cards, GPUs. Programs talk to devices through OS APIs, not the hardware directly.</p> },
          { id: "sec", label: "Security", render: () => <p className="text-sm">Enforces who can read what, isolates users, contains crashes. Without the OS, one buggy app could nuke your disk.</p> },
        ]}
      />
    </InteractiveShell>
  );
}

function PermissionsLab() {
  const [r, setR] = useState({ owner: [true, true, false], group: [true, false, false], other: [true, false, false] });
  type Who = keyof typeof r;
  const toggle = (w: Who, i: number) =>
    setR((cur) => ({ ...cur, [w]: cur[w].map((v, j) => (i === j ? !v : v)) }));
  const octal = (["owner", "group", "other"] as const)
    .map((w) => (r[w][0] ? 4 : 0) + (r[w][1] ? 2 : 0) + (r[w][2] ? 1 : 0))
    .join("");
  const rwx = (bits: boolean[]) => `${bits[0] ? "r" : "-"}${bits[1] ? "w" : "-"}${bits[2] ? "x" : "-"}`;
  return (
    <InteractiveShell title="Build a chmod string">
      <div className="grid gap-3 md:grid-cols-3">
        {(["owner", "group", "other"] as const).map((w) => (
          <fieldset key={w} className="rounded-lg border border-border/60 p-3">
            <legend className="font-mono text-[11px] uppercase tracking-[0.15em] text-accent capitalize">{w}</legend>
            {(["read", "write", "execute"] as const).map((perm, i) => (
              <label key={perm} className="mt-1 flex items-center gap-2 text-xs">
                <input
                  type="checkbox"
                  checked={r[w][i]}
                  onChange={() => toggle(w, i)}
                  aria-label={`${w} ${perm}`}
                />
                {perm}
              </label>
            ))}
          </fieldset>
        ))}
      </div>
      <p className="mt-3 font-mono text-sm">
        ls -l: -{rwx(r.owner)}{rwx(r.group)}{rwx(r.other)} · chmod {octal}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        Three actors (owner, group, everyone else), three permissions each (read,
        write, execute). Each triplet packs into one octal digit. `chmod 755` means
        `rwxr-xr-x`.
      </p>
    </InteractiveShell>
  );
}

function SignalsLab() {
  return (
    <InteractiveShell title="Which signal fits?">
      <ScenarioSorter
        choices={[
          { id: "term", label: "SIGTERM (polite quit)" },
          { id: "kill", label: "SIGKILL (force)" },
          { id: "int", label: "SIGINT (Ctrl-C)" },
          { id: "stop", label: "SIGSTOP (pause)" },
          { id: "cont", label: "SIGCONT (resume)" },
        ]}
        scenarios={[
          { id: "sg1", text: "You are running a long script in the terminal and want to cancel it right now.", correct: "int", feedback: "Ctrl-C sends SIGINT. Well-behaved programs clean up." },
          { id: "sg2", text: "A production process refuses to exit after SIGTERM. You need it gone.", correct: "kill", feedback: "SIGKILL cannot be caught. Last resort — no cleanup will run." },
          { id: "sg3", text: "You want a service to shut down gracefully after finishing its current request.", correct: "term", feedback: "SIGTERM is the default `kill` signal and the polite ask." },
          { id: "sg4", text: "You want to freeze a running process temporarily to inspect it, then keep going.", correct: "stop", feedback: "SIGSTOP pauses. SIGCONT resumes." },
          { id: "sg5", text: "You already paused a process; now bring it back to life.", correct: "cont", feedback: "SIGCONT wakes it up from wherever SIGSTOP left it." },
        ]}
      />
    </InteractiveShell>
  );
}

function VirtualMemory() {
  const [used, setUsed] = useState(70);
  const swap = Math.max(0, used - 85);
  const bar = (label: string, pct: number, cls: string) => (
    <div className="mt-2">
      <p className="flex justify-between text-xs">
        <span>{label}</span>
        <span className="font-mono text-muted-foreground">{pct}%</span>
      </p>
      <div className="h-2 rounded-full bg-border">
        <div className={`h-2 rounded-full ${cls}`} style={{ width: `${pct}%` }} aria-hidden="true" />
      </div>
    </div>
  );
  return (
    <InteractiveShell title="Virtual memory & swap">
      <label className="block text-xs">
        <span className="mr-2 font-mono">Memory demand: {used}% of RAM</span>
        <input
          type="range"
          min={10}
          max={130}
          value={used}
          onChange={(e) => setUsed(Number(e.target.value))}
          className="accent-accent"
          aria-label="Memory demand"
        />
      </label>
      {bar("Resident in RAM", Math.min(100, used - swap), "bg-accent")}
      {bar("Paged out to swap", swap, "bg-destructive")}
      <p className="mt-3 text-xs text-muted-foreground">
        The OS gives each program its own virtual address space. When RAM fills up, it
        writes cold pages to disk (swap). Once you cross into swap, everything gets
        dramatically slower — that's "thrashing."
      </p>
    </InteractiveShell>
  );
}

function PackageManager() {
  return (
    <InteractiveShell title="How your OS installs software">
      <ModeSwitch
        modes={[
          { id: "apt", label: "apt (Debian/Ubuntu)", render: () => <pre className="whitespace-pre-wrap text-xs">sudo apt update{"\n"}sudo apt install ripgrep{"\n"}sudo apt remove ripgrep{"\n"}{"\n"}Central repos maintained by the distro; system-wide install.</pre> },
          { id: "brew", label: "brew (macOS)", render: () => <pre className="whitespace-pre-wrap text-xs">brew update{"\n"}brew install ripgrep{"\n"}brew uninstall ripgrep{"\n"}{"\n"}Community formulas; installs into your user prefix — no sudo.</pre> },
          { id: "dnf", label: "dnf (Fedora/RHEL)", render: () => <pre className="whitespace-pre-wrap text-xs">sudo dnf install ripgrep{"\n"}sudo dnf remove ripgrep{"\n"}{"\n"}RPM-based; strong dependency solver.</pre> },
          { id: "winget", label: "winget (Windows)", render: () => <pre className="whitespace-pre-wrap text-xs">winget install BurntSushi.ripgrep.MSVC{"\n"}winget uninstall BurntSushi.ripgrep{"\n"}{"\n"}Microsoft-run repo; per-user or per-machine install.</pre> },
        ]}
      />
    </InteractiveShell>
  );
}

// ------------------ Module 5: Shell ------------------

function ShellPrompt() {
  const parts = [
    { part: "alice", note: "User you are logged in as" },
    { part: "@", note: "Separator" },
    { part: "laptop", note: "Hostname of this machine" },
    { part: ":", note: "Separator" },
    { part: "~/projects/learn-ai", note: "Current working directory (~ = home)" },
    { part: "$", note: "Ready-for-input prompt ($ for user, # for root)" },
  ];
  return (
    <InteractiveShell title="Reading a shell prompt">
      <pre className="rounded-md bg-background p-3 font-mono text-sm">alice@laptop:~/projects/learn-ai$ _</pre>
      <ul className="mt-3 space-y-1 text-xs">
        {parts.map((p) => (
          <li key={p.part} className="flex gap-3">
            <span className="rounded bg-accent/10 px-2 py-0.5 font-mono">{p.part}</span>
            <span className="text-muted-foreground">{p.note}</span>
          </li>
        ))}
      </ul>
    </InteractiveShell>
  );
}

// Safe simulated shell filesystem
interface FsNode {
  name: string;
  type: "dir" | "file";
  children?: FsNode[];
  content?: string;
}
const seedFs = (): FsNode => ({
  name: "/",
  type: "dir",
  children: [
    {
      name: "home",
      type: "dir",
      children: [
        {
          name: "alice",
          type: "dir",
          children: [
            { name: "notes.md", type: "file", content: "# Learn AI notes\nStage 2 — Computers.\n" },
            { name: "hello.py", type: "file", content: "print('hello')\n" },
            {
              name: "projects",
              type: "dir",
              children: [{ name: "readme.txt", type: "file", content: "My first project.\n" }],
            },
          ],
        },
      ],
    },
    { name: "etc", type: "dir", children: [{ name: "hosts", type: "file", content: "127.0.0.1 localhost\n" }] },
  ],
});
function resolvePath(root: FsNode, cwd: string[], input: string): string[] | null {
  const parts = input.startsWith("/") ? input.split("/").filter(Boolean) : [...cwd, ...input.split("/").filter(Boolean)];
  const out: string[] = [];
  for (const p of parts) {
    if (p === "." || p === "") continue;
    if (p === "..") out.pop();
    else out.push(p);
  }
  let node: FsNode = root;
  for (const seg of out) {
    if (node.type !== "dir") return null;
    const next = node.children?.find((c) => c.name === seg);
    if (!next) return null;
    node = next;
  }
  return out;
}
function nodeAt(root: FsNode, path: string[]): FsNode | null {
  let node: FsNode = root;
  for (const seg of path) {
    if (node.type !== "dir") return null;
    const next = node.children?.find((c) => c.name === seg);
    if (!next) return null;
    node = next;
  }
  return node;
}

function ShellNavigator() {
  const [root] = useState<FsNode>(seedFs());
  const [cwd, setCwd] = useState<string[]>(["home", "alice"]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ cmd: string; out: string }[]>([
    { cmd: "", out: "Try: pwd, ls, cd projects, cd .., cat notes.md" },
  ]);
  const cwdStr = "/" + cwd.join("/");
  const run = () => {
    const cmd = input.trim();
    if (!cmd) return;
    const [op, ...args] = cmd.split(/\s+/);
    let out = "";
    if (op === "pwd") out = cwdStr;
    else if (op === "ls") {
      const target = args[0] ? resolvePath(root, cwd, args[0]) : cwd;
      if (!target) out = `ls: ${args[0]}: No such file or directory`;
      else {
        const n = nodeAt(root, target);
        if (!n) out = `ls: ${args[0]}: not found`;
        else if (n.type === "file") out = n.name;
        else out = (n.children ?? []).map((c) => (c.type === "dir" ? c.name + "/" : c.name)).join("  ");
      }
    } else if (op === "cd") {
      const target = args[0] ? resolvePath(root, cwd, args[0]) : ["home", "alice"];
      if (!target) out = `cd: ${args[0]}: No such directory`;
      else {
        const n = nodeAt(root, target);
        if (!n || n.type !== "dir") out = `cd: ${args[0]}: Not a directory`;
        else {
          setCwd(target);
          out = "";
        }
      }
    } else if (op === "cat") {
      if (!args[0]) out = "cat: missing operand";
      else {
        const target = resolvePath(root, cwd, args[0]);
        const n = target && nodeAt(root, target);
        if (!n) out = `cat: ${args[0]}: No such file`;
        else if (n.type === "dir") out = `cat: ${args[0]}: Is a directory`;
        else out = n.content ?? "";
      }
    } else if (op === "help") out = "Available: pwd, ls [path], cd [path], cat <file>, help";
    else out = `${op}: command not found (try 'help')`;
    setHistory((h) => [...h, { cmd, out }].slice(-20));
    setInput("");
  };
  return (
    <InteractiveShell title="Safe practice shell">
      <div className="rounded-lg border border-border/60 bg-background p-3 font-mono text-xs">
        <div className="max-h-56 space-y-1 overflow-y-auto" aria-live="polite">
          {history.map((h, i) => (
            <div key={i}>
              {h.cmd && (
                <p>
                  <span className="text-accent">alice@practice:{cwdStr}$</span> {h.cmd}
                </p>
              )}
              {h.out && <pre className="whitespace-pre-wrap text-muted-foreground">{h.out}</pre>}
            </div>
          ))}
        </div>
        <form
          className="mt-2 flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            run();
          }}
        >
          <span className="text-accent">alice@practice:{cwdStr}$</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            aria-label="Shell input"
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        Nothing here touches your real filesystem — just a small in-memory tree. Try
        <span className="ml-1 font-mono">ls</span>, <span className="font-mono">cd projects</span>,
        <span className="font-mono"> cat ../notes.md</span>.
      </p>
    </InteractiveShell>
  );
}

function PipeComposer() {
  const [pipeline, setPipeline] = useState<string[]>([]);
  const options = [
    { id: "cat access.log", label: "cat access.log", desc: "read the file" },
    { id: "grep 'ERROR'", label: "grep 'ERROR'", desc: "keep matching lines" },
    { id: "sort", label: "sort", desc: "sort them" },
    { id: "uniq -c", label: "uniq -c", desc: "count duplicates" },
    { id: "sort -rn", label: "sort -rn", desc: "sort by count, descending" },
    { id: "head -n 3", label: "head -n 3", desc: "keep the top 3" },
  ];
  const optimal = ["cat access.log", "grep 'ERROR'", "sort", "uniq -c", "sort -rn", "head -n 3"];
  const optimalStr = optimal.join(" | ");
  const currentStr = pipeline.join(" | ");
  const solved = currentStr === optimalStr;
  return (
    <InteractiveShell title="Compose a Unix pipeline">
      <p className="text-xs text-muted-foreground">
        Goal: from an access log, find the three most common error lines.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => setPipeline((p) => [...p, o.id])}
            className="rounded-md border border-border/60 bg-card px-2 py-1 text-xs hover:border-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title={o.desc}
          >
            {o.label}
          </button>
        ))}
      </div>
      <pre className="mt-3 min-h-10 rounded-md border border-border/60 bg-background p-2 font-mono text-xs">
        {currentStr || "(empty — click stages to add them)"}
      </pre>
      <div className="mt-2 flex gap-2">
        <button type="button" onClick={() => setPipeline([])} className="rounded-md border border-border/60 px-2 py-1 text-xs hover:border-accent/60">
          Clear
        </button>
        <button
          type="button"
          onClick={() => setPipeline((p) => p.slice(0, -1))}
          className="rounded-md border border-border/60 px-2 py-1 text-xs hover:border-accent/60"
        >
          Undo
        </button>
      </div>
      {solved && (
        <p className="mt-2 text-xs text-highlight-foreground">
          ✓ Correct. Each stage does one small thing; the pipe carries text from one to
          the next.
        </p>
      )}
      <p className="mt-2 text-[11px] text-muted-foreground">
        Reference solution: <span className="font-mono">{optimalStr}</span>
      </p>
    </InteractiveShell>
  );
}

function TextTools() {
  const corpus = [
    "2025-08-01 10:12 INFO service=api status=200 path=/v1/chat",
    "2025-08-01 10:13 ERROR service=api status=500 path=/v1/chat",
    "2025-08-01 10:14 INFO service=web status=200 path=/",
    "2025-08-01 10:15 ERROR service=api status=500 path=/v1/embed",
    "2025-08-01 10:16 WARN service=web status=302 path=/login",
  ];
  const [tool, setTool] = useState<"grep" | "sed" | "awk">("grep");
  const outputs: Record<typeof tool, { cmd: string; out: string[] }> = {
    grep: { cmd: "grep ERROR", out: corpus.filter((l) => l.includes("ERROR")) },
    sed: { cmd: "sed 's/ERROR/⚠️/g'", out: corpus.map((l) => l.replace(/ERROR/g, "⚠️")) },
    awk: {
      cmd: "awk '{print $2, $4}'  (col 2 = time, col 4 = service)",
      out: corpus.map((l) => {
        const cols = l.split(/\s+/);
        return `${cols[1]} ${cols[3]}`;
      }),
    },
  };
  const current = outputs[tool];
  return (
    <InteractiveShell title="Text tools on a fixed log">
      <div className="flex gap-2" role="tablist">
        {(["grep", "sed", "awk"] as const).map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            aria-selected={tool === t}
            onClick={() => setTool(t)}
            className={`rounded-md border px-3 py-1.5 text-xs ${tool === t ? "border-accent bg-accent/10" : "border-border/60 hover:border-accent/60"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <pre className="mt-3 rounded-md bg-background p-2 font-mono text-[11px]">
        $ {current.cmd}
        {"\n"}
        {current.out.join("\n")}
      </pre>
      <p className="mt-2 text-xs text-muted-foreground">
        <b>grep</b> filters lines by pattern. <b>sed</b> substitutes text. <b>awk</b>{" "}
        treats each line as fields and prints selected columns. Together they cover
        90% of text munging you'll ever do.
      </p>
    </InteractiveShell>
  );
}

function ShellScript() {
  const lines = [
    { id: "shebang", text: "#!/usr/bin/env bash" },
    { id: "safe", text: "set -euo pipefail" },
    { id: "arg", text: 'file="${1:-notes.md}"' },
    { id: "check", text: '[ -f "$file" ] || { echo "Missing $file"; exit 1; }' },
    { id: "count", text: "wc -l \"$file\"" },
  ];
  const [built, setBuilt] = useState<string[]>([]);
  const target = ["shebang", "safe", "arg", "check", "count"];
  const done = built.length === target.length && built.every((id, i) => id === target[i]);
  return (
    <InteractiveShell title="Assemble a small, safe script">
      <p className="text-xs text-muted-foreground">
        Goal: a script that counts lines in a file, defaulting to notes.md, that fails
        loudly if the file is missing.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {lines
          .filter((l) => !built.includes(l.id))
          .map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setBuilt((b) => [...b, l.id])}
              className="rounded-md border border-border/60 bg-card px-2 py-1 font-mono text-[11px] hover:border-accent/60"
            >
              {l.text}
            </button>
          ))}
      </div>
      <pre className="mt-3 min-h-24 rounded-md border border-border/60 bg-background p-3 font-mono text-[11px]">
        {built.length === 0
          ? "(click lines to add them in order)"
          : built.map((id) => lines.find((l) => l.id === id)!.text).join("\n")}
      </pre>
      <button
        type="button"
        onClick={() => setBuilt([])}
        className="mt-2 rounded-md border border-border/60 px-2 py-1 text-xs hover:border-accent/60"
      >
        Reset
      </button>
      {done && <p className="mt-2 text-xs text-highlight-foreground">✓ Solid script. Each guard exists for a reason.</p>}
    </InteractiveShell>
  );
}

// ------------------ Module 6: Networking ------------------

function PacketHop() {
  return (
    <InteractiveShell title="One packet's journey">
      <StepFlow
        steps={[
          { title: "Your machine", body: "OS wraps your data in TCP + IP headers. Destination: 93.184.216.34 (an example server)." },
          { title: "Home router", body: "First hop. Does NAT (rewrites source to your public IP) and forwards to your ISP." },
          { title: "ISP backbone", body: "Passes through several ISP routers, each consulting its routing table to send the packet closer to its destination." },
          { title: "Peering / transit", body: "Between networks: your ISP hands the packet to another that knows how to reach the destination network." },
          { title: "Destination network", body: "The packet arrives at the server's ISP, then the data centre router, then the server's NIC." },
          { title: "Server responds", body: "It builds a reply packet and the whole thing happens in reverse — often via a different path." },
        ]}
      />
    </InteractiveShell>
  );
}

function TcpVsUdp() {
  return (
    <InteractiveShell title="TCP or UDP?">
      <ScenarioSorter
        choices={[
          { id: "tcp", label: "TCP (reliable, in-order)" },
          { id: "udp", label: "UDP (fast, best-effort)" },
        ]}
        scenarios={[
          { id: "t1", text: "Downloading a Python package. Every byte must arrive.", correct: "tcp", feedback: "TCP is the default for anything where losing a byte breaks the payload." },
          { id: "t2", text: "Live voice call. A dropped packet is worse if it stalls than if you skip a millisecond.", correct: "udp", feedback: "UDP — voice codecs prefer newer frames over old, delayed ones." },
          { id: "t3", text: "Loading a web page.", correct: "tcp", feedback: "HTTP has traditionally used TCP. Reliability wins for structured docs." },
          { id: "t4", text: "Multiplayer game position updates 60 times per second.", correct: "udp", feedback: "UDP again — the next update supersedes the lost one anyway." },
          { id: "t5", text: "DNS lookups.", correct: "udp", feedback: "Small, fast, tolerant of retries — UDP is the default (with TCP as fallback)." },
        ]}
      />
    </InteractiveShell>
  );
}

function DnsResolver() {
  return (
    <InteractiveShell title="Resolving example.com">
      <StepFlow
        steps={[
          { title: "1. OS cache", body: "Your OS checks its local DNS cache. Hit? Done in microseconds." },
          { title: "2. Resolver", body: "Miss? Your machine asks a recursive resolver (your ISP's, or 1.1.1.1)." },
          { title: "3. Root servers", body: "The resolver asks a root server: 'who knows .com?'" },
          { title: "4. TLD servers", body: "It asks a .com TLD server: 'who knows example.com?'" },
          { title: "5. Authoritative server", body: "Finally, the authoritative name server for example.com returns the IP." },
          { title: "6. Cache & reply", body: "The resolver caches the answer (respecting TTL) and returns it to your machine. Future lookups are instant until the TTL expires." },
        ]}
      />
    </InteractiveShell>
  );
}

function LatencyLadder() {
  return (
    <InteractiveShell title="Where does the time go?">
      <ScenarioSorter
        choices={[
          { id: "ns", label: "Nanoseconds (~1 ns)" },
          { id: "us", label: "Microseconds (~100 µs)" },
          { id: "ms1", label: "1 ms" },
          { id: "ms10", label: "10–100 ms" },
          { id: "s", label: "Seconds" },
        ]}
        scenarios={[
          { id: "l1", text: "Read one value from L1 cache.", correct: "ns", feedback: "Sub-nanosecond to a few nanoseconds. The fastest thing in the machine." },
          { id: "l2", text: "Random read from an NVMe SSD.", correct: "us", feedback: "Tens to hundreds of microseconds — remarkable, but 1000× slower than RAM." },
          { id: "l3", text: "Ping a server across the country.", correct: "ms10", feedback: "Physics of the wire: light isn't infinite. Coast-to-coast is ~40 ms round-trip." },
          { id: "l4", text: "Round-trip on the same local network.", correct: "ms1", feedback: "Roughly a millisecond." },
          { id: "l5", text: "Downloading a 1 GB file on a home connection.", correct: "s", feedback: "Even at 100 Mbps that's tens of seconds." },
        ]}
      />
    </InteractiveShell>
  );
}

// ------------------ Module 7: Web ------------------

function HttpInspector() {
  const [method, setMethod] = useState<"GET" | "POST" | "PUT" | "DELETE">("GET");
  const responses: Record<string, { status: number; body: string }> = {
    GET: { status: 200, body: "{\n  \"id\": 42,\n  \"name\": \"Ada\"\n}" },
    POST: { status: 201, body: "{\n  \"id\": 43,\n  \"created\": true\n}" },
    PUT: { status: 200, body: "{\n  \"id\": 42,\n  \"updated\": true\n}" },
    DELETE: { status: 204, body: "" },
  };
  const resp = responses[method]!;
  return (
    <InteractiveShell title="Make an HTTP request">
      <div className="flex gap-2" role="tablist">
        {(["GET", "POST", "PUT", "DELETE"] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={method === m}
            onClick={() => setMethod(m)}
            className={`rounded-md border px-3 py-1.5 text-xs ${method === m ? "border-accent bg-accent/10" : "border-border/60 hover:border-accent/60"}`}
          >
            {m}
          </button>
        ))}
      </div>
      <pre className="mt-3 rounded-md bg-background p-3 font-mono text-[11px]">
        {method} /users/42 HTTP/1.1{"\n"}Host: api.example.com{"\n"}Accept: application/json{"\n\n"}
        (simulated — nothing leaves your browser)
      </pre>
      <pre className="mt-2 rounded-md border border-accent/40 bg-accent/5 p-3 font-mono text-[11px]">
        HTTP/1.1 {resp.status}{" "}
        {resp.status === 200 ? "OK" : resp.status === 201 ? "Created" : resp.status === 204 ? "No Content" : ""}
        {"\n"}Content-Type: application/json{"\n\n"}
        {resp.body || "(empty body)"}
      </pre>
      <p className="mt-2 text-xs text-muted-foreground">
        2xx = success, 3xx = redirect, 4xx = you sent something wrong, 5xx = the server
        broke. Almost every API call in AI (chat completions, embeddings, image
        generation) is an HTTP POST that returns JSON.
      </p>
    </InteractiveShell>
  );
}

function TlsHandshake() {
  return (
    <InteractiveShell title="How HTTPS establishes trust">
      <StepFlow
        steps={[
          { title: "1. ClientHello", body: "Browser sends: 'here are the TLS versions and ciphers I support; here's a random number.'" },
          { title: "2. ServerHello + certificate", body: "Server picks a cipher, sends its certificate signed by a certificate authority the browser trusts, plus its own random." },
          { title: "3. Verify certificate", body: "Browser checks the signature chain against its root CA store. If any link is broken, connection aborts with a security warning." },
          { title: "4. Key exchange", body: "Both sides use the exchanged materials to derive the same symmetric session key without ever sending it in the clear." },
          { title: "5. Encrypted traffic", body: "From now on, everything is encrypted with fast symmetric crypto. TLS protects the content and integrity — but not which site you visited." },
        ]}
      />
    </InteractiveShell>
  );
}

function UrlDecoder() {
  const [url, setUrl] = useState("https://api.example.com:8443/v1/chat/completions?model=gpt&stream=true#footer");
  let parsed: { scheme?: string; host?: string; port?: string; path?: string; query?: string; hash?: string; err?: string } = {};
  try {
    const u = new URL(url);
    parsed = {
      scheme: u.protocol.replace(":", ""),
      host: u.hostname,
      port: u.port || "(default)",
      path: u.pathname,
      query: u.search || "(none)",
      hash: u.hash || "(none)",
    };
  } catch {
    parsed = { err: "Not a valid URL" };
  }
  return (
    <InteractiveShell title="Deconstruct a URL">
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full rounded-md border border-border/60 bg-background px-3 py-2 font-mono text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="URL to parse"
        spellCheck={false}
      />
      {parsed.err ? (
        <p className="mt-3 text-xs text-destructive">{parsed.err}</p>
      ) : (
        <Grid>
          <Cell label="Scheme">{parsed.scheme}</Cell>
          <Cell label="Host">{parsed.host}</Cell>
          <Cell label="Port">{parsed.port}</Cell>
          <Cell label="Path">{parsed.path}</Cell>
          <Cell label="Query string">{parsed.query}</Cell>
          <Cell label="Fragment (#)">{parsed.hash}</Cell>
        </Grid>
      )}
      <p className="mt-2 text-xs text-muted-foreground">
        Every URL fits this shape. Servers use scheme + host + port to connect, path
        + query to route, and hash purely inside the browser.
      </p>
    </InteractiveShell>
  );
}

function PageLoadTrace() {
  return (
    <InteractiveShell title="You typed a URL and pressed enter">
      <StepFlow
        steps={[
          { title: "1. Parse URL", body: "Browser splits it into scheme, host, path." },
          { title: "2. DNS resolution", body: "Look up the host's IP (see the DNS lesson)." },
          { title: "3. TCP handshake", body: "SYN, SYN-ACK, ACK — three packets before any real data." },
          { title: "4. TLS handshake", body: "Only if HTTPS. Adds another round-trip or two." },
          { title: "5. HTTP request", body: "Browser sends GET /path. Server picks up on port 443." },
          { title: "6. Server processes + responds", body: "May hit a database, an AI model, a cache. Sends back HTML." },
          { title: "7. Parse HTML", body: "Browser builds the DOM tree. Discovers <script>, <link>, <img> → more requests." },
          { title: "8. Fetch CSS + JS + images", body: "Often in parallel. CSS blocks painting; JS may block parsing." },
          { title: "9. Layout + paint", body: "Browser figures out where each box goes, then rasterises to pixels." },
          { title: "10. Interactive", body: "JavaScript wires up event handlers. The tab feels 'done'." },
        ]}
      />
    </InteractiveShell>
  );
}

// ------------------ Module 8: Cloud ------------------

function CloudResponsibility() {
  return (
    <InteractiveShell title="Who is responsible for what?">
      <ScenarioSorter
        choices={[
          { id: "you", label: "You" },
          { id: "them", label: "Cloud provider" },
        ]}
        scenarios={[
          { id: "cr1", text: "Physical security of the data centre.", correct: "them", feedback: "Always the provider — you don't have keys to their building." },
          { id: "cr2", text: "The password rules for your admin account.", correct: "you", feedback: "Always you. Weak passwords are the #1 cloud breach cause." },
          { id: "cr3", text: "Patching the underlying hypervisor.", correct: "them", feedback: "The provider patches the infrastructure they run." },
          { id: "cr4", text: "Encrypting sensitive customer data before you upload it.", correct: "you", feedback: "Provider encryption protects storage at rest; your data classification is on you." },
          { id: "cr5", text: "Configuring your storage bucket to not be publicly readable.", correct: "you", feedback: "Misconfigured buckets are a top-3 real-world incident category." },
        ]}
      />
    </InteractiveShell>
  );
}

function IaasPaasSaas() {
  return (
    <InteractiveShell title="Place each service in its layer">
      <ScenarioSorter
        choices={[
          { id: "iaas", label: "IaaS" },
          { id: "paas", label: "PaaS" },
          { id: "saas", label: "SaaS" },
        ]}
        scenarios={[
          { id: "l1", text: "A raw Linux virtual machine you SSH into.", correct: "iaas", feedback: "IaaS — you get infrastructure and manage the OS up." },
          { id: "l2", text: "A hosted PostgreSQL where you never touch the OS.", correct: "paas", feedback: "PaaS — you push data + queries; provider handles the machine, patches, backups." },
          { id: "l3", text: "Gmail.", correct: "saas", feedback: "SaaS — a finished product delivered over the web." },
          { id: "l4", text: "A hosted 'chat completions' API you call from your app.", correct: "saas", feedback: "SaaS from your perspective — you consume the finished capability." },
          { id: "l5", text: "A managed Kubernetes cluster you deploy your own containers to.", correct: "paas", feedback: "Blurry line but usually classed PaaS — provider handles the control plane." },
        ]}
      />
    </InteractiveShell>
  );
}

function RegionPicker() {
  const [users, setUsers] = useState<"eu" | "us" | "asia" | "global">("eu");
  const regions = [
    { id: "eu", label: "Frankfurt (eu-central)", latency: { eu: 20, us: 100, asia: 180, global: 100 } },
    { id: "us", label: "Virginia (us-east)", latency: { eu: 90, us: 20, asia: 160, global: 90 } },
    { id: "asia", label: "Tokyo (ap-northeast)", latency: { eu: 220, us: 150, asia: 20, global: 130 } },
  ] as const;
  return (
    <InteractiveShell title="Match region to users">
      <div className="flex flex-wrap gap-2" role="tablist">
        {(["eu", "us", "asia", "global"] as const).map((u) => (
          <button
            key={u}
            type="button"
            role="tab"
            aria-selected={users === u}
            onClick={() => setUsers(u)}
            className={`rounded-md border px-3 py-1.5 text-xs ${users === u ? "border-accent bg-accent/10" : "border-border/60 hover:border-accent/60"}`}
          >
            Users mostly: {u.toUpperCase()}
          </button>
        ))}
      </div>
      <ul className="mt-3 space-y-2">
        {regions
          .slice()
          .sort((a, b) => a.latency[users] - b.latency[users])
          .map((r, i) => (
            <li key={r.id} className="rounded border border-border/60 bg-background p-2 text-xs">
              <span className={i === 0 ? "text-highlight-foreground" : ""}>
                {i === 0 ? "✓ " : "  "}
                {r.label}
              </span>
              <span className="ml-3 font-mono text-muted-foreground">~{r.latency[users]} ms typical</span>
            </li>
          ))}
      </ul>
      <p className="mt-2 text-xs text-muted-foreground">
        Latency is set by geography. If your users are in one region, deploy there. If
        they're global, multi-region + a CDN gets you closer to everyone.
      </p>
    </InteractiveShell>
  );
}

function DeploymentUnit() {
  return (
    <InteractiveShell title="Which deployment unit fits?">
      <ScenarioSorter
        choices={[
          { id: "vm", label: "Virtual machine" },
          { id: "container", label: "Container" },
          { id: "serverless", label: "Serverless function" },
        ]}
        scenarios={[
          { id: "d1", text: "A tiny endpoint that runs once per webhook and idles the rest of the day.", correct: "serverless", feedback: "Serverless shines for bursty, short, stateless workloads. Zero cost when idle." },
          { id: "d2", text: "A GPU-heavy AI training job that runs for hours and needs specific drivers.", correct: "vm", feedback: "You want full control of the machine, drivers, and long-running lifecycle." },
          { id: "d3", text: "A web service you want to run identically on your laptop, staging, and prod.", correct: "container", feedback: "Containers package the app + its dependencies into one runnable image." },
          { id: "d4", text: "An image thumbnail generator triggered per uploaded photo.", correct: "serverless", feedback: "Event-driven, stateless, bursty — the classic serverless win." },
        ]}
      />
    </InteractiveShell>
  );
}

function CloudCost() {
  const [instHrs, setInstHrs] = useState(200);
  const [storageGb, setStorageGb] = useState(500);
  const [egressGb, setEgressGb] = useState(50);
  const [tokens, setTokens] = useState(500);
  // Made-up but reasonable order-of-magnitude prices
  const rates = { inst: 0.05, storage: 0.023, egress: 0.09, tokens: 0.002 };
  const parts = [
    { name: "Compute (small VM · $/hr)", qty: instHrs, unit: rates.inst, cost: instHrs * rates.inst },
    { name: "Object storage ($/GB·mo)", qty: storageGb, unit: rates.storage, cost: storageGb * rates.storage },
    { name: "Egress ($/GB out)", qty: egressGb, unit: rates.egress, cost: egressGb * rates.egress },
    { name: "AI tokens ($/1K tokens)", qty: tokens, unit: rates.tokens, cost: tokens * rates.tokens },
  ];
  const total = parts.reduce((a, p) => a + p.cost, 0);
  const slider = (label: string, val: number, set: (n: number) => void, max: number, step: number) => (
    <label className="block text-xs">
      <span className="mr-2 font-mono">{label}: {val.toLocaleString()}</span>
      <input
        type="range"
        min={0}
        max={max}
        step={step}
        value={val}
        onChange={(e) => set(Number(e.target.value))}
        className="accent-accent"
        aria-label={label}
      />
    </label>
  );
  return (
    <InteractiveShell title="Estimate a monthly cloud bill">
      <div className="grid gap-2 md:grid-cols-2">
        {slider("Compute hours", instHrs, setInstHrs, 720, 10)}
        {slider("Storage GB", storageGb, setStorageGb, 5000, 50)}
        {slider("Egress GB", egressGb, setEgressGb, 1000, 10)}
        {slider("AI tokens (thousands)", tokens, setTokens, 10000, 100)}
      </div>
      <table className="mt-3 w-full text-xs">
        <thead className="text-muted-foreground">
          <tr>
            <th className="text-left">Line item</th>
            <th className="text-right">Qty</th>
            <th className="text-right">Rate</th>
            <th className="text-right">$</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((p) => (
            <tr key={p.name} className="border-t border-border/60">
              <td className="py-1">{p.name}</td>
              <td className="py-1 text-right font-mono">{p.qty.toLocaleString()}</td>
              <td className="py-1 text-right font-mono">${p.unit.toFixed(3)}</td>
              <td className="py-1 text-right font-mono">${p.cost.toFixed(2)}</td>
            </tr>
          ))}
          <tr className="border-t border-accent/40">
            <td colSpan={3} className="py-2 text-right font-mono">
              Estimated total
            </td>
            <td className="py-2 text-right font-mono font-bold">${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-2 text-xs text-muted-foreground">
        Illustrative numbers — real providers differ by region and reserved-capacity
        discounts. The insight is the shape: egress and AI tokens often dominate.
      </p>
    </InteractiveShell>
  );
}

// ------------------ Registry export ------------------

export const computersRegistry: Record<string, ComponentType> = {
  "binary-decoder": BinaryDecoder,
  "number-encoding": NumberEncoding,
  "unicode-inspector": UnicodeInspector,
  "media-bytes": MediaBytes,
  "cpu-cycle": CpuCycle,
  "memory-hierarchy": MemoryHierarchy,
  "storage-picker": StoragePicker,
  "io-bottleneck": IoBottleneck,
  "source-to-machine": SourceToMachine,
  "exec-modes": ExecModes,
  "process-memory-map": ProcessMemoryMap,
  "concurrency-vs-parallel": ConcurrencyVsParallel,
  "os-role": OsRole,
  "permissions-lab": PermissionsLab,
  "signals-lab": SignalsLab,
  "virtual-memory": VirtualMemory,
  "package-manager": PackageManager,
  "shell-prompt": ShellPrompt,
  "shell-navigator": ShellNavigator,
  "pipe-composer": PipeComposer,
  "text-tools": TextTools,
  "shell-script": ShellScript,
  "packet-hop": PacketHop,
  "tcp-vs-udp": TcpVsUdp,
  "dns-resolver": DnsResolver,
  "latency-ladder": LatencyLadder,
  "http-inspector": HttpInspector,
  "tls-handshake": TlsHandshake,
  "url-decoder": UrlDecoder,
  "page-load-trace": PageLoadTrace,
  "cloud-responsibility": CloudResponsibility,
  "iaas-paas-saas": IaasPaasSaas,
  "region-picker": RegionPicker,
  "deployment-unit": DeploymentUnit,
  "cloud-cost": CloudCost,
};
