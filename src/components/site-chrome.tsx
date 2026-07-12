import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-display text-lg font-semibold text-primary-foreground">
            L
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Learn AI
          </span>
          <span className="hidden rounded-full border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:inline-block">
            Open source
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/ubidesk/learn-ai"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground hover:text-foreground sm:inline-block"
          >
            GitHub ↗
          </a>
          <Link
            to="/start"
            className="rounded-md bg-accent px-3.5 py-1.5 text-xs font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            Start learning
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary font-display text-lg font-semibold text-primary-foreground">
              L
            </span>
            <span className="font-display text-lg font-semibold">Learn AI</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            An open-source path from AI-curious to AI-capable. Built in public,
            free forever, refined by the people who use it.
          </p>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Learn
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/curriculum" className="hover:text-foreground text-muted-foreground">Curriculum</Link></li>
            <li><Link to="/projects" className="hover:text-foreground text-muted-foreground">Projects</Link></li>
            <li><Link to="/start" className="hover:text-foreground text-muted-foreground">Start here</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Project
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-foreground text-muted-foreground">About</Link></li>
            <li>
              <a
                href="https://github.com/ubidesk/learn-ai"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ubidesk/learn-ai/blob/main/LICENSE"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                License
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} Learn AI · MIT licensed</span>
          <span>Made openly, together.</span>
        </div>
      </div>
    </footer>
  );
}
