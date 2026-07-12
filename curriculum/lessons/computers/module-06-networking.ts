import type { LessonBody } from "../schema";

export const module06: Record<string, LessonBody> = {
  "computers-networking-ip-packets": {
    curiosity:
      "You send a message from your phone in Berlin to a friend in Tokyo. It arrives in under a second, in the same order, without anyone in between reading it. Trillions of these happen every day. How?",
    whyThisMatters:
      "Every AI product is a network product. Understanding IP and packets is the foundation for reasoning about latency, reliability, cost, and privacy in anything you'll build.",
    intuition: [
      "The internet is millions of independent networks (autonomous systems), joined together and agreeing to forward each other's packets.",
      "A packet is a small envelope of data with a source and a destination address on the outside.",
      "Routers pass packets along, one hop at a time, until they arrive.",
    ],
    visual: { component: "packet-hop", caption: "One packet from your laptop to a server, hop by hop." },
    explanation: [
      "Every machine on the internet has an IP address. IPv4 addresses look like `192.0.2.42`; IPv6 addresses look like `2001:db8::1`. IPv4 has run out of room, so IPv6 is the long-term future.",
      "Public addresses are unique globally. Private addresses (10.x, 192.168.x) are only unique inside a home or office; a NAT router rewrites them on the way out.",
      "Data is split into packets — typically ~1500 bytes each. Each packet has an IP header (source, destination, TTL, protocol) and a payload.",
      "Packets are routed independently. Two packets from the same conversation might take different paths. Reassembly is the transport layer's job (next lesson).",
    ],
    experiment: {
      component: "packet-hop",
      caption: "Trace a packet from home to a data centre.",
      instructions:
        "Step through the hops. Each router only knows 'closer' and 'farther' relative to its own routing table — no single machine has a map of the whole internet.",
    },
    reflection: [
      "Why is 'the internet has no single owner and no single map' a strength rather than a weakness?",
      "Your home Wi-Fi shows you '192.168.1.42' as your IP. Why isn't that visible on the public internet?",
    ],
    modernAiConnection:
      "Every AI API call — every OpenAI chat completion, every image generation, every embedding request — is a bundle of packets from your machine to a data centre. The whole reliability story of your app depends on the same routing and NAT behaviour that gets an email to your friend.",
    knowledgeCheck: {
      question: "Two packets are sent from the same laptop to the same server. Do they take the same route through the internet?",
      options: [
        { text: "Always — the route is fixed for a session.", correct: false, feedback: "The internet doesn't guarantee a fixed route. Routers can and do change decisions." },
        { text: "Not necessarily — they're routed independently.", correct: true, feedback: "Correct. That's why higher layers must handle reordering and loss." },
        { text: "Only if you're using HTTPS.", correct: false, feedback: "HTTPS is about encryption, not routing." },
        { text: "Only over Wi-Fi.", correct: false, feedback: "Routing is independent of the last-mile technology." },
      ],
    },
    nextStepHint: "Packets are the atoms. Next: the transports that make a conversation out of many packets.",
  },

  "computers-networking-tcp-udp": {
    curiosity:
      "Downloading a Python package must not drop a single byte. A live voice call would sound worse if a lost packet stalled the whole stream than if it just skipped a millisecond. Both use the same internet. What's different?",
    whyThisMatters:
      "Every network application chooses between reliability and low latency. Knowing the two dominant answers (TCP vs UDP) — and when a modern hybrid like QUIC applies — is core network literacy.",
    intuition: [
      "TCP is a phone call: it sets up a connection, delivers everything in order, and retries on loss.",
      "UDP is a postcard: fire and forget, no guarantees, minimal overhead.",
      "Most 'streaming' protocols wrap UDP with just enough reliability to fit their use case.",
    ],
    visual: { component: "tcp-vs-udp", caption: "Match workloads to transports." },
    explanation: [
      "TCP (Transmission Control Protocol) does a three-way handshake, tracks acknowledgements, retransmits lost packets, and delivers bytes in order. This costs latency and complexity, but you get a reliable byte stream.",
      "UDP (User Datagram Protocol) is just 'send this datagram to that address'. No handshake, no retries, no ordering. Speed and simplicity.",
      "HTTP has historically ridden on TCP. HTTP/3 uses QUIC over UDP, adding its own reliability and encryption — mostly to reduce round-trip latency.",
      "DNS is UDP first (fast lookups, tolerant of retries). Video calls, games, and voice mostly use UDP because delayed data is worse than lost data.",
    ],
    experiment: {
      component: "tcp-vs-udp",
      caption: "Choose the right transport per scenario.",
      instructions:
        "For each task, ask: is losing a byte worse than losing a millisecond? If yes → TCP. If not → UDP.",
    },
    reflection: [
      "Explain in one sentence why 'reliable' isn't automatically 'better'.",
      "Why does HTTP/3 building on UDP not mean 'we gave up on reliability'?",
    ],
    modernAiConnection:
      "When you use an AI voice assistant, your speech is streamed over WebRTC (UDP-based) so it feels responsive. The chat completion API you call afterwards uses HTTP over TCP (or QUIC/UDP for HTTP/3), because there you'd rather wait than lose a byte.",
    knowledgeCheck: {
      question: "Streaming live audio in a video call. Best transport?",
      options: [
        { text: "TCP — reliability matters.", correct: false, feedback: "TCP's retransmissions add unbounded latency, which is worse for real-time audio than skipping a moment." },
        { text: "UDP (with app-level recovery).", correct: true, feedback: "Correct. Voice codecs prefer fresh data over old, retried data." },
        { text: "It doesn't matter.", correct: false, feedback: "It matters a lot — enough to be perceptible in every call." },
        { text: "Only HTTPS.", correct: false, feedback: "HTTPS is a security wrapper, not a transport choice." },
      ],
    },
    nextStepHint: "Transports handled. Next: how names like 'wikipedia.org' become IP addresses.",
  },

  "computers-networking-dns": {
    curiosity:
      "You type `wikipedia.org` and hit enter. Somehow, seven milliseconds later, your computer knows to send packets to 198.35.26.96. Nobody told it. What happened?",
    whyThisMatters:
      "DNS is one of the top two 'invisible until it breaks' failure modes in networking. Understanding it turns 'the internet is down' into a diagnosable problem.",
    intuition: [
      "DNS is the phonebook of the internet: names in, IP addresses out.",
      "Nobody has the whole phonebook. Instead, name servers are arranged in a hierarchy — one for `.org`, another for `wikipedia.org`, another for `en.wikipedia.org` — and a resolver walks the tree.",
      "Answers are cached everywhere along the path so the second lookup is instant.",
    ],
    visual: { component: "dns-resolver", caption: "Walk a real DNS lookup, step by step." },
    explanation: [
      "Your machine has a DNS resolver setting — usually your ISP's or a public one (1.1.1.1, 8.8.8.8).",
      "On a cache miss, the resolver asks the root name servers, gets pointed at the TLD (.org) servers, gets pointed at the authoritative server for wikipedia.org, and finally gets the IP.",
      "Answers carry a TTL (time to live) — the resolver caches for that many seconds before asking again. Short TTLs = fast updates + more load; long TTLs = less load + slow updates.",
      "DNS records go beyond addresses: A/AAAA for IPv4/IPv6, MX for mail, TXT for verification and SPF, CNAME for aliases. `dig` is the standard tool for inspecting them.",
    ],
    experiment: {
      component: "dns-resolver",
      caption: "Watch a full recursive lookup.",
      instructions:
        "Step through OS cache → resolver → root → TLD → authoritative → cache. Notice how the TTL step is often what makes 'why can't people reach my new site yet?' a two-hour wait.",
    },
    reflection: [
      "You change your website's IP address. Some visitors see the new site, others still see the old one. Why?",
      "Why is putting all your DNS on a single provider a form of risk?",
    ],
    modernAiConnection:
      "When you deploy an AI service behind a domain name, DNS decides how fast users find you after a change, how well you can fail over between regions, and — via TXT records — whether AI-training-related crawlers even try to crawl you.",
    knowledgeCheck: {
      question: "You change your domain's A record from 1.2.3.4 to 5.6.7.8 with a TTL of one hour. What's the worst case for visitors?",
      options: [
        { text: "They see the change instantly.", correct: false, feedback: "Only if their resolver had no cached entry — otherwise they wait." },
        { text: "They may see the old IP for up to about an hour, depending on caches.", correct: true, feedback: "Correct. TTL bounds cache freshness but doesn't eliminate the wait." },
        { text: "They see the old IP for 24 hours minimum.", correct: false, feedback: "TTL controls this. One hour TTL means about one hour, not 24." },
        { text: "They never see the change.", correct: false, feedback: "Once caches expire, resolvers ask again and get the new answer." },
      ],
    },
    nextStepHint: "Names resolve. Next: reasoning about how long each of these steps actually takes.",
  },

  "computers-networking-latency-throughput": {
    curiosity:
      "You have a fast broadband connection. Sending a small message across town takes 5 ms. Sending it across the world takes 200 ms. Downloading a 1 GB file takes 10 seconds either way. Why?",
    whyThisMatters:
      "Latency and throughput are two different things, confused constantly. Getting the difference into your bones is the difference between fast systems and slow ones.",
    intuition: [
      "Latency is 'how long until the first byte arrives'. Throughput is 'how many bytes per second, once it starts'.",
      "Latency is dominated by physical distance and by how many hops the packet has to make.",
      "Throughput is dominated by the narrowest link along the path.",
    ],
    visual: { component: "latency-ladder", caption: "Order-of-magnitude latencies from cache to internet." },
    explanation: [
      "Light in fibre travels at ~200,000 km/s — 5 ms per 1000 km, one way. A round-trip across the Atlantic is ~80 ms just from physics. You can't beat that.",
      "Every extra hop (router, load balancer, proxy) adds a few milliseconds. Long chains of proxies compound.",
      "Bandwidth improves with money; latency mostly doesn't. Doubling your bandwidth halves download time; doubling it doesn't help chat responsiveness.",
      "'Bandwidth-delay product' = bandwidth × round-trip latency. It sets how much data can be 'in flight' at once, which drives protocol design (TCP window sizes, etc.).",
    ],
    experiment: {
      component: "latency-ladder",
      caption: "Order the latencies of different operations.",
      instructions:
        "Match each operation to its rough time scale. Notice: reading from L1 cache to pinging a server is nine orders of magnitude. Every optimisation intuition builds on knowing this ladder.",
    },
    reflection: [
      "Your ML inference service takes 400 ms per response. About 200 ms of that is the model. Where would you look for the other 200 ms?",
      "Why do CDNs (content delivery networks) mostly improve latency, not throughput?",
    ],
    modernAiConnection:
      "Time-to-first-token in an LLM API is a latency number. Tokens-per-second thereafter is a throughput number. Product decisions (streaming vs waiting for the whole response) are choices about which of the two the user experiences.",
    knowledgeCheck: {
      question: "You need to load a 100 MB file from an S3 bucket in the same region as your VM. About how long?",
      options: [
        { text: "Milliseconds.", correct: false, feedback: "Latency is milliseconds; throughput takes real time on 100 MB." },
        { text: "A few seconds.", correct: true, feedback: "Yes — a same-region GB/s link finishes 100 MB in around a second, plus some setup." },
        { text: "A few minutes.", correct: false, feedback: "That would suggest a cross-region path or a slow link." },
        { text: "An hour.", correct: false, feedback: "That's dial-up territory, not modern cloud." },
      ],
    },
    nextStepHint: "Networking basics locked in. Next: the specific web protocols every AI product speaks.",
  },
};
