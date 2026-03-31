/* ============================================================
   Elmer — Evidence Steward Chatbot
   Page-aware, physically navigates the website, scrolls to sections
   ============================================================ */

// ── Pre-scripted response tree (board-approved 2026-03-31, DAT-141) ──
const INTENTS = [
  {
    keywords: ["datom", "what is", "tell me about", "explain", "how does it work", "overview"],
    response:
      "DATOM is decision infrastructure for scientific work. It takes claims — from published literature, from your own experimental data, or both — and maps the evidence structure that sits behind them.\n\n" +
      "The output isn't a summary or a recommendation. It's a structured Confidence Report: a timestamped, auditable map of how much evidence exists for a claim, where it comes from, what it supports, and what it contradicts.\n\n" +
      "The goal is to make confidence legible at the exact moment a decision has to be made — whether that's a resource allocation, a pivot, or an investment.\n\n" +
      "Would you like to see what a Confidence Report looks like in practice? There's a live example at [datom.science/example](https://datom.science/example).",
  },
  {
    keywords: ["confidence report", "report", "output", "deliverable", "what do i get", "what does it produce"],
    response:
      "A Confidence Report is the core deliverable DATOM produces. It's a structured document — not a narrative — that maps the evidence state of a specific scientific claim at a specific point in time.\n\n" +
      "Each report includes:\n" +
      "- The claim being evaluated, stated precisely\n" +
      "- The evidence units (Datoms) that support or contradict it, each with full provenance\n" +
      "- A confidence score reflecting evidence density — not our opinion, but the structural weight of what exists\n" +
      "- A decision-readiness assessment: where the evidence is strong, where it's thin, and where the remaining de-risking work lives\n\n" +
      "Reports are timestamped and auditable. If the evidence changes, the confidence changes — and you can see exactly why.\n\n" +
      "If you're curious what this looks like for a real claim, the live example at [datom.science/example](https://datom.science/example) walks through the full structure.",
  },
  {
    keywords: ["confidence score", "score", "how do you calculate", "algorithm", "what does the number mean", "how is it calculated", "scoring"],
    response:
      "The confidence score is a measure of evidence density — not truth, and not certainty. It reflects how much structured evidence exists for a claim, weighted by the credibility of its sources and the consistency of what they show.\n\n" +
      "A higher score means the claim is well-supported by credible, replicable evidence. A lower score means the evidence is thin, mixed, or contested — which is valuable information in itself. Disagreement is preserved, not averaged away.\n\n" +
      "The score is not a probability. It doesn't tell you the claim is correct. It tells you how defensible your confidence in the claim is, given what currently exists in the literature and your own data.\n\n" +
      "The methodology is transparent — every component of the score traces back to specific evidence units you can inspect. If you want to challenge a score, you can see exactly what's driving it.\n\n" +
      "The live example at [datom.science/example](https://datom.science/example) shows how scores are structured in practice.",
  },
  {
    keywords: ["access", "sign up", "get started", "try", "pilot", "how do i start", "how to use", "onboard", "apply"],
    response:
      "DATOM runs in a structured pilot model right now. We work with a limited number of labs and investors at a time to make sure each engagement is properly scoped.\n\n" +
      "For research labs: you can apply for a pilot at [datom.science/try](https://datom.science/try). The process starts with a 30-minute scoping call — we confirm the claim you want to evaluate, understand your data environment, and make sure DATOM is the right fit. If it's a fit, we'll scope the engagement together and agree on next steps from there.\n\n" +
      "For investors: you submit the company and the claim you want evaluated, and we scope the engagement from there — useful for active due diligence or preliminary evaluation.\n\n" +
      "Either way, the right starting point is [datom.science/try](https://datom.science/try) — or you can reach Jordan directly at jordan@datom.science.",
  },
  {
    keywords: ["lab", "research", "institution", "university", "academic", "researcher", "pi", "principal investigator", "for scientists", "my team"],
    response:
      "DATOM was designed with research labs in mind. The core problem it addresses is one most labs encounter: evidence accumulates across literature and internal experiments, but it stays disconnected — in papers, in notebooks, in people's heads. When you need to make a decision about where to invest effort, that evidence doesn't speak with one voice.\n\n" +
      "DATOM consolidates it. You submit the claim you're working around, and the system maps what the published literature shows, what your internal data shows, and where the two agree or diverge. The result is a Confidence Report you can actually defend to collaborators, funders, or your own team.\n\n" +
      "It's particularly useful when you're deciding whether to replicate, pivot, or commit resources to a line of research — and you want to know what the evidence actually supports before you do.\n\n" +
      "If that sounds relevant, the best next step is a brief scoping conversation. You can apply at [datom.science/try](https://datom.science/try).",
  },
  {
    keywords: ["investor", "vc", "venture", "fund", "due diligence", "portfolio", "investment", "biotech", "investor relations", "lp", "capital"],
    response:
      "DATOM produces VC Confidence Reports for technical due diligence. The use case is straightforward: a portfolio company or prospective investment makes claims about their science — efficacy, mechanism, reproducibility — and you need to know how much structural evidence exists behind those claims before you make a decision.\n\n" +
      "A VC Confidence Report maps the evidence structure for a specific scientific claim: what the literature shows, how credible the sources are, where the evidence is strong, and where the remaining uncertainty lives. It doesn't tell you whether to invest — it tells you what the science actually supports, so that decision rests on something defensible.\n\n" +
      "If you'd like to request a report, the best starting point is a brief intake call where we confirm the claim and scope the engagement. You can initiate that at [datom.science/try](https://datom.science/try) — or reach Jordan directly at jordan@datom.science.",
  },
  {
    keywords: ["literature review", "meta-analysis", "systematic review", "different", "compare", "versus", "alternative", "how is this different", "what makes this different", "is this just", "existing tools"],
    response:
      "A literature review produces a narrative. DATOM produces a structure.\n\n" +
      "The distinction matters: a narrative synthesizes and summarizes — it's useful, but the reasoning is inside the prose. You can't inspect a literature review to see exactly which finding drove a conclusion, or what was weighted against what.\n\n" +
      "DATOM decomposes claims into atomic evidence units — each one sourced, tagged with provenance, and weighted by credibility. The result is a map you can interrogate, not a summary you have to trust.\n\n" +
      "A few other differences worth noting:\n" +
      "- DATOM handles contradiction explicitly — conflicting findings are preserved and reflected in the confidence score, not smoothed over\n" +
      "- It can incorporate your own experimental data alongside published literature, not just external sources\n" +
      "- The output is timestamped and auditable — if new evidence changes the picture, the system updates; you can see what changed and why\n\n" +
      "The goal isn't to replace literature review as a research practice. It's to make the evidence structure behind a claim legible — especially when a decision depends on it.\n\n" +
      "The live example at [datom.science/example](https://datom.science/example) shows the difference concretely.",
  },
  {
    keywords: ["reproducibility", "replicate", "replication", "crisis", "retraction", "p-hacking", "fraud", "scientific integrity", "irreproducible", "failed to replicate"],
    response:
      "The reproducibility crisis is real, and DATOM was built in direct response to it — though not in the way most responses work.\n\n" +
      "Most interventions focus on individual researcher behavior: better protocols, pre-registration, open data. Those matter. But DATOM addresses something further upstream: the infrastructure problem. Evidence from published research and internal experiments exists — it's just not structured in a way that lets decision-makers use it.\n\n" +
      "When evidence isn't consolidated and auditable, irreproducible work propagates. Labs replicate failed findings not because they're careless, but because there was no clear signal that the evidence was weak.\n\n" +
      "DATOM makes the evidence structure explicit. You can see how much weight exists behind a claim, where it comes from, and whether it's been replicated in different populations or conditions. That doesn't guarantee correct science — but it makes the current state of knowledge defensible and inspectable, rather than hidden inside narrative.\n\n" +
      "If that framing resonates with work you're doing, I'm happy to discuss what it would look like applied to your specific domain. You can reach us at [datom.science/try](https://datom.science/try).",
  },
];

const FALLBACK =
  "That's a question I'd rather not answer imprecisely. DATOM is a specific tool for a specific kind of problem — and whether it fits your situation depends on details I don't have yet.\n\n" +
  "If you'd like to explore whether DATOM is right for your lab or your fund, the best next step is a short conversation with Jordan. You can request access or schedule a briefing at [datom.science/try](https://datom.science/try) — or reach out directly at jordan@datom.science.";

function matchResponse(input) {
  const lower = input.toLowerCase();
  for (const intent of INTENTS) {
    if (intent.keywords.some(kw => lower.includes(kw))) {
      return intent.response;
    }
  }
  return FALLBACK;
}

// ── Navigation map: all scrollable sections across the site ──
const NAV_MAP = {
  // index.html
  "home:hero":      { page: "index.html",    selector: ".hero" },
  "home:problem":   { page: "index.html",    selector: "#problem" },
  "home:audience":  { page: "index.html",    selector: "#audience" },
  // product.html
  "product:hero":          { page: "product.html",  selector: "#hero" },
  "product:proof":         { page: "product.html",  selector: "#proof-preview" },
  "product:comparison":    { page: "product.html",  selector: "#comparison" },
  "product:pillars":       { page: "product.html",  selector: "#pillars" },
  "product:use-cases":     { page: "product.html",  selector: "#see-yourself" },
  "product:responsibility":{ page: "product.html",  selector: "#responsibility" },
  // example.html
  "example:top":           { page: "example.html",  selector: "#top" },
  "example:guide":         { page: "example.html",  selector: "#guide" },
  "example:graph":         { page: "example.html",  selector: "#figure" },
  "example:nucleus":       { page: "example.html",  selector: "#nucleus" },
  "example:evidence":      { page: "example.html",  selector: "#evidence" },
  "example:confidence":    { page: "example.html",  selector: "#confidence-scoring" },
  "example:summary":       { page: "example.html",  selector: "#summary" },
  "example:faq":           { page: "example.html",  selector: "#faq" },
  // research.html
  "research:top":          { page: "research.html", selector: "main" },
  // try.html
  "try:top":               { page: "try.html",      selector: "main" },
};

// ── Detect current page ──
function detectPage() {
  const path = window.location.pathname;
  if (path.includes("example"))  return "example";
  if (path.includes("product"))  return "product";
  if (path.includes("research")) return "research";
  if (path.includes("try"))      return "try";
  return "home";
}

function getCurrentPageFile() {
  const page = detectPage();
  const map = { home: "index.html", example: "example.html", product: "product.html", research: "research.html", try: "try.html" };
  return map[page] || "index.html";
}

// ── Physical navigation ──
function navigateTo(navKey) {
  const target = NAV_MAP[navKey];
  if (!target) return;

  const currentFile = getCurrentPageFile();

  if (target.page !== currentFile) {
    // Different page — navigate with hash to trigger scroll on load
    window.location.href = target.page + "?elmer_nav=" + encodeURIComponent(navKey);
  } else {
    // Same page — scroll directly
    scrollToSelector(target.selector);
  }
}

function scrollToSelector(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    // Flash highlight
    el.style.transition = "box-shadow 0.3s";
    el.style.boxShadow = "0 0 0 3px rgba(6, 182, 212, 0.4), 0 0 20px rgba(6, 182, 212, 0.15)";
    el.style.borderRadius = "12px";
    setTimeout(() => {
      el.style.boxShadow = "";
      el.style.borderRadius = "";
    }, 2500);
  }
}

// On page load, check if we arrived via Elmer navigation
function checkPendingNav() {
  const params = new URLSearchParams(window.location.search);
  const navKey = params.get("elmer_nav");
  if (navKey && NAV_MAP[navKey]) {
    // Clean up URL
    const clean = window.location.pathname;
    window.history.replaceState(null, "", clean);

    // Restore conversation history from before navigation
    const savedHistory = sessionStorage.getItem("elmer_history");
    if (savedHistory) {
      try { conversationHistory = JSON.parse(savedHistory); } catch {}
      sessionStorage.removeItem("elmer_history");
    }

    // Scroll after page renders, then open Elmer and show pending reply
    setTimeout(() => {
      scrollToSelector(NAV_MAP[navKey].selector);
      toggle(true);

      // Show the pending reply that was queued before navigation
      const pendingReply = sessionStorage.getItem("elmer_pending_reply");
      if (pendingReply) {
        sessionStorage.removeItem("elmer_pending_reply");
        setTimeout(() => addBubble(pendingReply, "elmer"), 400);
      }
    }, 600);
  }
}

// ── Page context for the API ──
function getPageContext() {
  const page = detectPage();
  let context = `The visitor is currently on the ${page.toUpperCase()} page of datom.science.\n`;

  if (page === "example" && typeof DATOMERS !== "undefined") {
    context += `\nThis page shows an interactive datomer: "Remote Work → Productivity" with 32 datoms across 4 clusters.\n`;
    context += `Navigable sections: example:top (overview), example:guide (DATOM standard explanation), example:graph (interactive knowledge graph), example:nucleus (Nucleus Claim), example:evidence (all 4 cluster cards), example:confidence (confidence scoring breakdown), example:summary (operational outcome), example:faq (FAQ).\n`;
    context += `\nFULL DATOMER DATA:\n` + JSON.stringify(DATOMERS) + `\n`;
    context += `\nWhen discussing a specific datom or cluster, use [[NAV:example:evidence]] to scroll to it.\n`;
  } else if (page === "product") {
    context += `Navigable sections: product:hero (intro), product:proof (real-time inspectability demo), product:comparison (DATOM vs LLMs table), product:pillars (3 pillars of legibility), product:use-cases (Research Ledger / Maturity Framework / Diligence Primitive), product:responsibility (human judgment statement).\n`;
  } else if (page === "home") {
    context += `Navigable sections: home:hero (main headline), home:problem (reproducibility crisis stats), home:audience (who it's for — labs & investors).\n`;
  } else if (page === "try") {
    context += `This page has: Schedule a Technical Briefing (Calendly) and Join the Early Access Waitlist (Google Form).\n`;
  }

  return context;
}

// ── State ──
let isOpen = false;
let conversationHistory = [];
let suggestionsShown = false;

// ── Build UI ──
function createUI() {
  const dock = document.createElement("button");
  dock.className = "elmer-dock";
  dock.id = "elmerDock";
  dock.innerHTML = `<svg class="elmer-dock-avatar" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="12" fill="#fff"/><ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#fff" stroke-width="3" transform="rotate(-30 50 50)"/><ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#fff" stroke-width="3" transform="rotate(30 50 50)"/><ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#fff" stroke-width="3" transform="rotate(90 50 50)"/></svg> Ask Elmer`;

  const panel = document.createElement("div");
  panel.className = "elmer-panel";
  panel.id = "elmerPanel";
  panel.innerHTML = `
    <div class="elmer-header">
      <svg class="elmer-header-avatar" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="12" fill="#06b6d4"/><ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#06b6d4" stroke-width="3" transform="rotate(-30 50 50)"/><ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#06b6d4" stroke-width="3" transform="rotate(30 50 50)"/><ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#06b6d4" stroke-width="3" transform="rotate(90 50 50)"/></svg>
      <div class="elmer-header-info">
        <div class="elmer-header-name">ELMER</div>
        <div class="elmer-header-role"><span class="elmer-status-dot"></span> Evidence Steward</div>
      </div>
      <button class="elmer-close" id="elmerClose">&times;</button>
    </div>
    <div class="elmer-messages" id="elmerMessages"></div>
    <div class="elmer-suggestions" id="elmerSuggestions"></div>
    <div class="elmer-input-bar">
      <textarea class="elmer-textarea" id="elmerInput" rows="1" placeholder="Ask about DATOM..."></textarea>
      <button class="elmer-send" id="elmerSend">&#8593;</button>
    </div>
  `;

  document.body.appendChild(dock);
  document.body.appendChild(panel);
}

// ── Toggle ──
function toggle(forceState) {
  isOpen = forceState !== undefined ? forceState : !isOpen;
  const dock = document.getElementById("elmerDock");
  const panel = document.getElementById("elmerPanel");
  if (isOpen) {
    dock.classList.add("hidden");
    panel.classList.add("open");
    if (!suggestionsShown) showSuggestions();
    if (conversationHistory.length === 0) {
      const page = detectPage();
      let greeting;
      if (page === "example") {
        greeting = "Welcome to the Live Example! I'm Elmer, your Evidence Steward. This page shows a real datomer — **Remote Work \u2192 Productivity** — with 32 atomic evidence units across 4 clusters. I can walk you through the evidence, explain any specific datom, or show you how confidence scoring works. What would you like to explore?";
      } else if (page === "try") {
        greeting = "Hello! I'm Elmer. You're on our engagement page \u2014 here you can schedule a 30-minute technical briefing or join the early access waitlist. How can I help you decide?";
      } else if (page === "product") {
        greeting = "Hello! I'm Elmer. This page explains how DATOM works at a high level. I can walk you through any section \u2014 the three pillars, how we differ from LLMs, or our use cases. What interests you?";
      } else {
        greeting = "Hello! I'm Elmer, your Evidence Steward. I can help you understand DATOM, walk you through any page on the site, or discuss how it applies to your workflow. What would you like to know?";
      }
      addBubble(greeting, "elmer");
    }
    setTimeout(() => document.getElementById("elmerInput")?.focus(), 120);
  } else {
    dock.classList.remove("hidden");
    panel.classList.remove("open");
  }
}

// ── Suggestions ──
function showSuggestions() {
  const container = document.getElementById("elmerSuggestions");
  if (!container) return;
  suggestionsShown = true;

  const page = detectPage();
  let chips;
  if (page === "example") {
    chips = ["Walk me through the evidence", "What is datom B6?", "Show me the confidence score", "How can I use this?"];
  } else if (page === "product") {
    chips = ["Show me the three pillars", "How is DATOM different from AI?", "Show me the use cases"];
  } else if (page === "try") {
    chips = ["What happens in a briefing?", "What is early access?", "Tell me about DATOM first"];
  } else {
    chips = ["What is DATOM?", "Show me the live example", "Who is this for?", "How do I get started?"];
  }

  container.innerHTML = "";
  chips.forEach(text => {
    const chip = document.createElement("button");
    chip.className = "elmer-chip";
    chip.textContent = text;
    chip.addEventListener("click", (e) => {
      e.stopPropagation();
      container.innerHTML = "";
      handleSend(text);
    });
    container.appendChild(chip);
  });
}

// ── Messages ──
function addBubble(text, who) {
  const messages = document.getElementById("elmerMessages");
  if (!messages) return;
  const bubble = document.createElement("div");
  bubble.className = who === "user" ? "elmer-bubble elmer-bubble-user" : "elmer-bubble";

  // Strip [[NAV:...]] commands — navigation happens automatically, not via links
  let html = text.replace(/\s*\[\[NAV:[^\]]*?\]\]\s*/gi, ' ').trim();

  // Convert markdown page links [Text](page.html) to just the text — no links shown
  html = html.replace(/\[([^\]]+)\]\(((?:example|product|research|try|index)\.html[^)]*)\)/g, '$1');

  // Standard markdown — keep external links (Calendly, Google Forms, etc.)
  html = html
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" style="color:#06b6d4;text-decoration:underline;">$1</a>')
    .replace(/\n/g, "<br>");

  bubble.innerHTML = html;

  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
  return bubble;
}

function showTyping() {
  const messages = document.getElementById("elmerMessages");
  const typing = document.createElement("div");
  typing.className = "elmer-typing";
  typing.id = "elmerTyping";
  typing.innerHTML = '<div class="elmer-typing-dot"></div><div class="elmer-typing-dot"></div><div class="elmer-typing-dot"></div>';
  messages.appendChild(typing);
  messages.scrollTop = messages.scrollHeight;
}

function removeTyping() {
  document.getElementById("elmerTyping")?.remove();
}

// ── Pre-scripted response handler (no backend calls) ──
async function handleSend(overrideText) {
  const input = document.getElementById("elmerInput");
  const text = overrideText || input?.value?.trim();
  if (!text) return;
  if (!overrideText && input) input.value = "";
  updateSendButton();

  const suggestions = document.getElementById("elmerSuggestions");
  if (suggestions) suggestions.innerHTML = "";

  addBubble(text, "user");
  conversationHistory.push({ role: "user", content: text });

  showTyping();

  // Brief thinking pause before responding
  await new Promise(r => setTimeout(r, 600));

  removeTyping();

  const reply = matchResponse(text);
  addBubble(reply, "elmer");
  conversationHistory.push({ role: "assistant", content: reply });
}

// ── Input handling ──
function updateSendButton() {
  const input = document.getElementById("elmerInput");
  const send = document.getElementById("elmerSend");
  if (input && send) {
    send.classList.toggle("active", input.value.trim().length > 0);
  }
}

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = Math.min(textarea.scrollHeight, 80) + "px";
}

// ── Auto-open on new page ──
function autoOpenForPage() {
  // Don't auto-open if we arrived via Elmer navigation (checkPendingNav handles that)
  const params = new URLSearchParams(window.location.search);
  if (params.get("elmer_nav")) return;

  const page = detectPage();
  const seenKey = "elmer_seen_" + page;

  // Only auto-open once per page per session
  if (sessionStorage.getItem(seenKey)) return;
  sessionStorage.setItem(seenKey, "1");

  // Small delay so the page renders first
  setTimeout(() => {
    toggle(true);
  }, 1200);
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  createUI();
  checkPendingNav();
  autoOpenForPage();

  document.getElementById("elmerDock").addEventListener("click", () => toggle(true));
  document.getElementById("elmerClose").addEventListener("click", () => toggle(false));

  const input = document.getElementById("elmerInput");
  const send = document.getElementById("elmerSend");

  input.addEventListener("input", () => {
    updateSendButton();
    autoResize(input);
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });
  send.addEventListener("click", () => handleSend());

  document.addEventListener("mousedown", (e) => {
    if (isOpen && !e.target.closest("#elmerPanel") && !e.target.closest("#elmerDock")) {
      toggle(false);
    }
  });
});
