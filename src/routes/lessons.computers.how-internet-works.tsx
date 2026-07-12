import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  LessonSection,
  LearningObjectives,
  KnowledgeCheck,
  LessonNav,
} from "@/components/learn-ui";
import { RequestJourney } from "@/components/request-journey";

export const Route = createFileRoute("/lessons/computers/how-internet-works")({
  head: () => ({
    meta: [
      { title: "How the Internet Works — Learn AI" },
      {
        name: "description",
        content:
          "Clients, servers, DNS, IP addresses, HTTP requests and responses, status codes, JSON, and APIs — the foundations every AI system runs on.",
      },
      { property: "og:title", content: "How the Internet Works — Learn AI" },
      {
        property: "og:description",
        content:
          "The whole trip from typing a URL to seeing a page — slowed down and made obvious.",
      },
    ],
  }),
  component: LessonInternet,
});

const objectives = [
  "Explain the client/server model in one sentence.",
  "Describe what DNS does and why it's needed.",
  "Read an HTTP request and response, and interpret common status codes.",
  "Say what an API is and why AI systems are built out of them.",
];

const questions = [
  {
    q: "You call an API and get back status 404. What does that mean?",
    options: [
      "The server is down.",
      "You're not logged in.",
      "The resource you asked for doesn't exist at that URL.",
      "The server is thinking — try again.",
    ],
    answerIndex: 2,
    explain:
      "2xx = success. 3xx = redirect. 4xx = you (the client) asked for something wrong — 404 specifically means 'not found.' 5xx = the server broke.",
  },
  {
    q: "Why does the browser do a DNS lookup before it can fetch a page?",
    options: [
      "To translate the human-readable hostname into an IP address the network can actually route to.",
      "To compress the URL.",
      "To verify the site isn't malicious.",
      "To warm up the CPU.",
    ],
    answerIndex: 0,
    explain:
      "Networks route by IP, not by name. DNS is the phone book that maps 'learn-ai.dev' to something like '76.76.21.21'.",
  },
];

function LessonInternet() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav aria-label="Breadcrumb" className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/curriculum" className="hover:text-foreground">
            Stage 02 · Computers
          </Link>{" "}
          / Lesson 03
        </nav>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
          How a page{" "}
          <span className="italic text-accent">actually arrives.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Every AI app you use — ChatGPT, a RAG demo, your own future
          project — is a client asking a server for something and getting an
          answer. Let's slow the trip down until it stops feeling magical.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span className="rounded-full border border-border bg-card px-2 py-0.5">
            ~20 min read · interactive journey
          </span>
        </div>

        <div className="mt-10">
          <LearningObjectives items={objectives} />
        </div>

        <LessonSection eyebrow="Curiosity" title="Two computers, one very short conversation.">
          <p>
            Strip everything away and the internet is just this: your
            computer asks another computer for something, and the other
            computer answers. That's it. All the acronyms are just names for
            the steps.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Why this matters" title="AI = client + server, everywhere.">
          <p>
            Calling an LLM is an HTTP request. Fetching documents for RAG is
            an HTTP request. Deploying your model exposes it as… you
            guessed it, an HTTP endpoint. If HTTP feels vague, everything on
            top of it will feel like guesswork.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Intuition" title="Client, server, request, response.">
          <ul className="ml-4 list-disc space-y-1">
            <li><strong>Client</strong>: the thing that asks. Your browser, an app, a Python script.</li>
            <li><strong>Server</strong>: the thing that answers. A machine (or many) running a program that listens for requests.</li>
            <li><strong>Request</strong>: a small text message: method (GET / POST), URL, headers, sometimes a body.</li>
            <li><strong>Response</strong>: another small text message: status code, headers, and the actual content.</li>
          </ul>
        </LessonSection>

        <LessonSection eyebrow="Visual explanation" title="The full trip, one click at a time.">
          <div className="not-prose">
            <RequestJourney />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Explanation" title="A vocabulary you can trust.">
          <div className="not-prose grid gap-3 md:grid-cols-2">
            {[
              { term: "URL", body: "Uniform Resource Locator — the full address: https://learn-ai.dev/curriculum?tab=1" },
              { term: "DNS", body: "Domain Name System — maps hostnames (learn-ai.dev) to IPs (76.76.21.21)." },
              { term: "IP address", body: "The numeric address networks actually route packets to." },
              { term: "HTTP / HTTPS", body: "The rules for how requests and responses are shaped. HTTPS = HTTP over encrypted TLS." },
              { term: "Status code", body: "200 OK, 301 moved, 404 not found, 500 server error. Read them; they're not decorative." },
              { term: "Headers", body: "Small key/value pairs on both request and response — content type, auth tokens, cache hints." },
              { term: "JSON", body: "The most common way APIs shape their data — nested objects and lists as plain text." },
              { term: "API", body: "A named set of endpoints a server offers for programs (not humans) to call." },
              { term: "Latency", body: "The wall-clock time from request sent to response received. Blame it on distance and slow servers." },
            ].map((t) => (
              <div key={t.term} className="rounded-lg border border-border bg-card p-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-accent">{t.term}</div>
                <p className="mt-1 text-sm">{t.body}</p>
              </div>
            ))}
          </div>
        </LessonSection>

        <LessonSection eyebrow="Small experiment" title="Read a real request out loud.">
          <p>
            Here's a real HTTP request and response, roughly what your
            browser sends every time. Read it slowly. Every piece has a name
            you now know.
          </p>
          <pre className="not-prose overflow-auto rounded-md border border-border bg-background p-4 font-mono text-xs leading-relaxed">
{`GET /curriculum HTTP/1.1
Host: learn-ai.dev
Accept: text/html
User-Agent: Mozilla/5.0

--- response ---

HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Cache-Control: max-age=3600

<!doctype html>
<html>…`}
          </pre>
        </LessonSection>

        <LessonSection eyebrow="Reflection" title="Predict, then check.">
          <ul className="ml-4 list-disc space-y-2">
            <li>If a page suddenly loads slowly, which step in the journey might be the culprit?</li>
            <li>What status code would you expect if a URL used to work but the page was deleted?</li>
            <li>Why is JSON so popular for APIs? What's it giving up compared to HTML?</li>
          </ul>
        </LessonSection>

        <LessonSection eyebrow="Modern AI connection" title="Calling an LLM is one HTTP POST.">
          <p>
            When you call OpenAI, Anthropic, or a local model server, you're
            sending a POST request with a JSON body ("here's the prompt")
            and getting back a JSON response ("here's the completion"). All
            of the "AI engineering" stack — RAG, agents, tool use — is
            layered on top of exactly these primitives.
          </p>
        </LessonSection>

        <LessonSection eyebrow="Knowledge check" title="Two quick questions.">
          <div className="not-prose">
            <KnowledgeCheck questions={questions} />
          </div>
        </LessonSection>

        <LessonSection eyebrow="Next step" title="Set up a real developer machine.">
          <p>
            You've got the mental models. Time to make them real. In the
            last lesson of Stage 2, we set up a professional development
            environment — one you'll use for years.
          </p>
        </LessonSection>

        <LessonNav
          prev={{ to: "/lessons/computers/files-and-terminal", label: "Lesson 2: Files, Folders, and the Terminal" }}
          next={{ to: "/lessons/computers/dev-setup", label: "Lesson 4: Setting Up Your Machine" }}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
