import type { LessonBody } from "../schema";

export const module07: Record<string, LessonBody> = {
  "computers-web-http-basics": {
    curiosity:
      "Almost every AI product you'll ever build sends and receives HTTP requests. Loading a web page? HTTP. Calling GPT-4? HTTP. Uploading a photo to be edited? HTTP. What is it?",
    whyThisMatters:
      "HTTP is the lingua franca of software. Being fluent in requests, methods, headers, and status codes turns error messages into readable prose and API docs into obvious instructions.",
    intuition: [
      "HTTP is a text-based conversation: you send a request, the server sends a response.",
      "Every request has a method (GET, POST, PUT, DELETE, …), a path, headers, and (sometimes) a body.",
      "Every response has a status code (2xx success, 3xx redirect, 4xx you goofed, 5xx server goofed), headers, and a body.",
    ],
    visual: { component: "http-inspector", caption: "Send GET, POST, PUT, DELETE and see what a real server says." },
    explanation: [
      "Methods carry meaning: GET is 'read, no side effects'. POST is 'create'. PUT/PATCH is 'update'. DELETE is 'remove'. This is a convention — servers must enforce it themselves.",
      "Headers are key-value metadata: `Content-Type: application/json`, `Authorization: Bearer …`, `User-Agent: …`, `Accept: …`.",
      "Status codes to memorise: 200 OK, 201 Created, 204 No Content, 301/302 redirects, 400 bad request, 401 unauthorized, 403 forbidden, 404 not found, 429 rate limited, 500 server error, 503 unavailable.",
      "Bodies carry the payload. For APIs, JSON dominates. For web pages, HTML.",
    ],
    experiment: {
      component: "http-inspector",
      caption: "Watch the difference between methods.",
      instructions:
        "Flip GET → POST → PUT → DELETE. Notice how the status code changes (200 vs 201 vs 204). This is the vocabulary of every REST API on earth.",
    },
    reflection: [
      "You call an API and get a 401. What did you almost certainly forget?",
      "Why is idempotency (calling the same request twice gives the same result) a valuable property, and which methods should have it?",
    ],
    modernAiConnection:
      "Every OpenAI or Anthropic call is a POST with a JSON body containing your prompt and settings, and a JSON (or streamed) response. When you see 429 rate limits, 500 server errors, or 401 unauthorized in your AI logs, the meaning is the same as it would be for any other API.",
    knowledgeCheck: {
      question: "You call an API endpoint and get HTTP 429. What's the situation?",
      options: [
        { text: "You're not authenticated.", correct: false, feedback: "That's 401." },
        { text: "The endpoint doesn't exist.", correct: false, feedback: "That's 404." },
        { text: "You're being rate limited — slow down.", correct: true, feedback: "Correct. Back off, retry with jitter, or request a higher rate limit." },
        { text: "The server crashed.", correct: false, feedback: "That's usually 5xx (500, 502, 503)." },
      ],
    },
    nextStepHint: "You can read HTTP. Next: how HTTPS keeps it private on the wire.",
  },

  "computers-web-https-tls": {
    curiosity:
      "You submit a password on a hotel Wi-Fi. Between you and the server sit dozens of routers, any of which could theoretically read it. Almost none of them can. Why?",
    whyThisMatters:
      "HTTPS is the security layer under every real product. Knowing what it does — and what it doesn't do — separates people who worry about the wrong things from people who protect their users effectively.",
    intuition: [
      "TLS wraps every byte of your HTTP conversation in encryption keyed by a fresh secret negotiated at connection time.",
      "It also gives you identity: the server proves it's really who its certificate says, via a chain of trust rooted in browser-shipped root certificate authorities.",
      "It does not hide who you're talking to (the IP address and often the domain are visible), and it doesn't authenticate you to the server (that's separate — cookies, tokens, etc.).",
    ],
    visual: { component: "tls-handshake", caption: "Client and server negotiate a secure channel in five steps." },
    explanation: [
      "The handshake exchanges: supported ciphers, random values, the server's certificate. From these, both sides derive the same symmetric session key without ever sending it directly.",
      "Certificate verification checks the signature chain against the browser's built-in trusted root CAs. A broken chain or a mismatched hostname aborts the connection with a scary warning — heed those.",
      "After the handshake, all payload bytes are encrypted with a fast symmetric cipher (AES, ChaCha20) and integrity-protected against tampering.",
      "TLS versions matter: 1.2 is a working minimum, 1.3 is the modern default and dramatically faster.",
    ],
    experiment: {
      component: "tls-handshake",
      caption: "Trace a handshake step by step.",
      instructions:
        "Step through ClientHello → ServerHello → certificate check → key derivation → encrypted traffic. Notice: the certificate check is the whole trust foundation of the web.",
    },
    reflection: [
      "Someone says 'HTTPS is enough, we don't need to encrypt data at rest'. Where does that reasoning fall apart?",
      "Why is a broken certificate warning genuinely dangerous to click through, not just an inconvenience?",
    ],
    modernAiConnection:
      "Every AI API you call is HTTPS. Every model checkpoint you download is HTTPS. When a corporate proxy in the middle does 'TLS interception', it becomes a party to every one of those conversations — a serious privacy and security consideration worth being aware of.",
    knowledgeCheck: {
      question: "What does HTTPS not protect against?",
      options: [
        { text: "Someone reading your password on a public Wi-Fi.", correct: false, feedback: "That's exactly what it protects against — content is encrypted." },
        { text: "An observer knowing which domain you visited.", correct: true, feedback: "Correct. TLS hides the payload; the destination hostname (via SNI) and IP are typically visible." },
        { text: "Tampering with data in flight.", correct: false, feedback: "TLS provides integrity too — tampering is detected." },
        { text: "Impersonation of the server (given a real cert chain).", correct: false, feedback: "That's what the certificate step exists to prevent." },
      ],
    },
    nextStepHint: "Traffic is safe. Next: reading URLs like a professional.",
  },

  "computers-web-urls-requests": {
    curiosity:
      "You see `https://api.example.com:8443/v1/chat/completions?model=gpt&stream=true`. Six little symbols carry a surprising amount of information. What is each part telling the machine to do?",
    whyThisMatters:
      "You'll write and debug URLs all day. A precise mental model of what each piece does eliminates a huge amount of routing and API-integration confusion.",
    intuition: [
      "A URL is an address. Parts of it tell the client how to connect, and other parts tell the server what you want.",
      "Scheme, host, and port set up the connection. Path selects the resource. Query string carries parameters. Fragment is for the browser only.",
      "Special characters need to be percent-encoded, which is why spaces become `%20`.",
    ],
    visual: { component: "url-decoder", caption: "Type a URL, see its parts labelled." },
    explanation: [
      "Scheme: `https:` or `http:` or others (`ws:`, `mailto:`). Host: domain name or IP. Port: `:443` for HTTPS by default, `:80` for HTTP.",
      "Path: `/v1/chat/completions` — servers route requests based on this. It looks like a filesystem path but is entirely up to the server.",
      "Query string: `?model=gpt&stream=true` — key/value pairs after `?`. Order isn't meaningful; duplicates are usually treated as lists.",
      "Fragment: `#section` — everything after `#` stays in the browser, never sent to the server. That's why single-page apps historically used them for routing.",
    ],
    experiment: {
      component: "url-decoder",
      caption: "Break down real URLs.",
      instructions:
        "Paste your favourite website's URL. Now paste an API endpoint you've seen. Notice which parts change per request (path, query) and which stay constant (scheme, host).",
    },
    reflection: [
      "A colleague sends you a URL with your API key in the query string. Why is that concerning even if you trust the recipient?",
      "Why should GET request URLs be safe to bookmark, share, and cache?",
    ],
    modernAiConnection:
      "Every AI provider's docs live in URL patterns like `POST /v1/chat/completions`. Once you can read a URL, an API doc becomes almost mechanical to translate into code.",
    knowledgeCheck: {
      question: "In `https://api.example.com:8443/v1/data?q=hello#top`, what is `#top` used for?",
      options: [
        { text: "It's sent to the server for routing.", correct: false, feedback: "Fragments (`#…`) are never sent to the server." },
        { text: "It's used only by the browser (or client), often to scroll to an anchor or drive client-side routing.", correct: true, feedback: "Correct. It's for the client." },
        { text: "It's a security token.", correct: false, feedback: "It has no security semantics." },
        { text: "It's the port.", correct: false, feedback: "The port is `:8443`, before the path." },
      ],
    },
    nextStepHint: "URLs read. Next: the whole end-to-end journey when you press enter in a browser.",
  },

  "computers-web-browsers-rendering": {
    curiosity:
      "You type `wikipedia.org` and press enter. About a hundred small things happen in the next second, most of them invisible. What's the honest story?",
    whyThisMatters:
      "Every AI product either runs in a browser or has a browser component. Understanding the browser's pipeline — from URL to painted pixels — makes you a better front-end and full-stack engineer, and a much sharper performance thinker.",
    intuition: [
      "The browser walks a well-defined pipeline: resolve, connect, request, parse, paint.",
      "Each step can be measured, cached, and optimised. Every 'performance win' is a story about one of them.",
      "Modern web pages routinely trigger dozens of parallel requests for images, fonts, scripts, and data.",
    ],
    visual: { component: "page-load-trace", caption: "Ten steps from enter-key to interactive page." },
    explanation: [
      "URL parsing → DNS lookup → TCP handshake → TLS handshake → HTTP request → server response.",
      "The response is HTML. The browser parses it into a DOM (Document Object Model) and discovers linked resources: CSS, JavaScript, images, fonts. Each triggers more requests, often in parallel.",
      "CSS blocks rendering — nothing is painted until the browser knows how it should look. JavaScript can block parsing unless marked `defer` or `async`.",
      "Layout computes where every element goes; paint rasterises it to pixels; composite stitches layers. JavaScript then wires up event handlers, making the page interactive.",
    ],
    experiment: {
      component: "page-load-trace",
      caption: "Walk the full trace.",
      instructions:
        "Step through the ten stages. Notice: the bytes on the wire are only a small part of the story. Rendering costs matter as much or more.",
    },
    reflection: [
      "Why does a well-designed website 'feel fast' even when the network is slow?",
      "Give one reason a page can be fully loaded and still not respond to your clicks.",
    ],
    modernAiConnection:
      "AI-powered web apps (ChatGPT, Claude, image generators) live inside this exact pipeline. Streaming responses exist precisely because the alternative — wait 20 seconds, then dump everything — feels awful. Understanding rendering is understanding user experience.",
    knowledgeCheck: {
      question: "Your web page's HTML arrives fast, but the page still takes 3 seconds to become interactive. What is most likely happening?",
      options: [
        { text: "The server is slow.", correct: false, feedback: "The HTML arrived fast — the server's initial response wasn't the bottleneck." },
        { text: "CSS or JavaScript is blocking layout and interactivity.", correct: true, feedback: "Correct. Render-blocking resources delay first paint; heavy JS delays interactivity." },
        { text: "DNS is broken.", correct: false, feedback: "You wouldn't have gotten the HTML at all if DNS were broken." },
        { text: "The user's typing.", correct: false, feedback: "Irrelevant to page load timing." },
      ],
    },
    nextStepHint: "You understand the web. Next: how all of this scales in the cloud.",
  },
};
