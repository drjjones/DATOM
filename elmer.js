/* ============================================================
   Elmer — Evidence Steward Chatbot
   Page-aware, physically navigates the website, scrolls to sections
   ============================================================ */

// ── Navigation map: all scrollable sections across the site ──
const NAV_MAP = {
  // index.html
  "home:hero":      { page: "index.html",    selector: ".hero" },
  "home:featured":  { page: "index.html",    selector: "#featured-entry" },
  "home:two-paths": { page: "index.html",    selector: "#two-paths" },
  "home:problem":   { page: "index.html",    selector: "#problem" },
  "home:ledger":    { page: "index.html",    selector: "#ledger" },
  "home:faq":       { page: "index.html",    selector: "#faq" },
  // product.html
  "product:hero":          { page: "product.html",  selector: "#hero" },
  "product:proof":         { page: "product.html",  selector: "#proof-preview" },
  "product:comparison":    { page: "product.html",  selector: "#comparison" },
  "product:pillars":       { page: "product.html",  selector: "#pillars" },
  "product:responsibility":{ page: "product.html",  selector: "#responsibility" },
  // organizations.html
  "organizations:audience":    { page: "organizations.html", selector: "#audience" },
  "organizations:use-cases":   { page: "organizations.html", selector: "#see-yourself" },
  "organizations:pricing":     { page: "organizations.html", selector: "#pricing" },
  "organizations:get-started": { page: "organizations.html", selector: "#get-started" },
  // pricing.html
  "pricing:comparison":        { page: "pricing.html", selector: "#comparison" },
  // example.html
  "example:top":           { page: "example.html",  selector: "#top" },
  "example:guide":         { page: "example.html",  selector: "#guide" },
  "example:graph":         { page: "example.html",  selector: "#figure" },
  "example:nucleus":       { page: "example.html",  selector: "#nucleus" },
  "example:evidence":      { page: "example.html",  selector: "#evidence" },
  "example:confidence":    { page: "example.html",  selector: "#confidence-scoring" },
  "example:summary":       { page: "example.html",  selector: "#summary" },
  // research.html
  "research:top":          { page: "research.html", selector: "main" },
  // try.html
  "try:top":               { page: "try.html",      selector: "main" },
};

// ── Detect current page ──
function detectPage() {
  const path = window.location.pathname;
  if (path.includes("example"))   return "example";
  if (path.includes("product"))   return "product";
  if (path.includes("organizations")) return "organizations";
  if (path.includes("pricing"))   return "pricing";
  if (path.includes("research"))  return "research";
  if (path.includes("try"))       return "try";
  return "home";
}

function getCurrentPageFile() {
  const page = detectPage();
  const map = { home: "index.html", example: "example.html", product: "product.html", organizations: "organizations.html", pricing: "pricing.html", research: "research.html", try: "try.html" };
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
    context += `\nThis page shows a REAL claim from DATOM's production system: "GLP-1 receptor agonist therapy reduces skeletal muscle mass during weight loss in overweight and obese adults" — with 224 real, cited sources (130 direct, 94 background). Of the 130 direct studies, 59% support the claim while 19% contradict it. DATOM's confidence score is still only 44% (Preliminary band) — measuring evidence quality, a separate number from the raw support/contradict split. Every source is a real paper with a real DOI.\n`;
    context += `Navigable sections: example:top (overview), example:guide (DATOM standard explanation), example:graph (interactive knowledge graph), example:nucleus (Nucleus Claim), example:evidence (all 4 cluster cards), example:confidence (confidence scoring breakdown), example:summary (operational outcome). The general FAQ moved to home:faq on the homepage; this page keeps only a short medical-disclaimer note near the bottom.\n`;
    context += `\nFULL DATOMER DATA:\n` + JSON.stringify(DATOMERS) + `\n`;
    context += `\nWhen discussing a specific datom or cluster, use [[NAV:example:evidence]] to scroll to it.\n`;
  } else if (page === "product") {
    context += `This page is technical/mechanism detail aimed at organizations evaluating DATOM (reached via the "See how it works" link on the For Organizations page, not from the main nav). Navigable sections: product:hero (intro), product:proof (real-time inspectability demo), product:comparison (DATOM vs LLMs table), product:pillars (3 pillars of legibility), product:responsibility (human judgment statement). Broader audience use cases live on the For Organizations page: organizations:use-cases.\n`;
  } else if (page === "home") {
    context += `Page order top to bottom: home:hero (main headline), home:problem (the reproducibility crisis and misinformation/disinformation on social media -- this page's main educational job for a general audience), home:featured (a manually-cycled carousel of real claims from the production ledger, all Established band and Supported: CRISPR genome editing 82%, smallholder farm productivity 81%, hybrid COVID immunity 81%, eating-disorder brain structure 76%, HPV vaccination coverage 77%, vaccine-funding equity 77%), home:ledger (the public ledger: independent, recorded, public), home:two-paths (Read the record vs. Get your claims verified -- this is the funnel moment for institutions, pointing to the For Organizations page), home:faq (general FAQ, moved here from example.html). Full pricing lives on pricing:comparison. Institutional/B2B content lives on the For Organizations page: organizations:audience, organizations:use-cases, organizations:pricing, organizations:get-started.\n`;
  } else if (page === "organizations") {
    context += `Navigable sections: organizations:audience (who it's for: labs & investors), organizations:use-cases (Research Ledger / Maturity Framework / Diligence Primitive), organizations:pricing (DATOM Pro, two paths: Verification -- Confidence Report, Pilot, Verification Membership -- and Integration -- API access, volume verification), organizations:get-started (Pilot Access / Confidence Report CTAs). The site-wide tier comparison lives on pricing:comparison.\n`;
    context += `DATOM Pro pricing is intentionally not published: it depends on scope and duration. If asked about price, do not state or estimate a number. Direct the visitor to schedule a call: [[NAV:organizations:get-started]] or the "Schedule a call to discuss pricing" link in organizations:pricing.\n`;
  } else if (page === "pricing") {
    context += `This page is a ruled comparison of the three tiers, each accumulating on the one before it. Observer ($0): featured entries, full depth, shareable, archive entries show a verdict card only. Investigator ($12/mo, toggle on the page also shows $120/yr): everything in Observer, plus full explanation on every archive claim, plus 3 new-claim requests included monthly then $5 each. Investigators submit and request claims; they do not verify them, the DATOM pipeline does, independent of any subscriber. DATOM Pro (call for pricing, routes to a call, covers what were formerly the separate Organizations and Scale tiers): everything in Investigator, plus commissioned Confidence Reports, Pilot R&D Sandbox access, Verification Membership, full reports and methodology on every claim, API access, and volume verification commitments. Navigable section: pricing:comparison.\n`;
    context += `DATOM Pro pricing is intentionally not published: it depends on scope and duration. If asked about price, do not state or estimate a number. Direct the visitor to book a call using the links on this page.\n`;
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
        greeting = "Welcome to the Live Example! I'm Elmer, your Evidence Steward. This page shows a real claim from DATOM's production system — **GLP-1 Therapy → Muscle Reduction** — backed by 224 real, cited sources. 59% of the 130 studies that directly measure this support it, but DATOM's confidence score is still only 44%. I can explain why agreement isn't confidence, walk you through the evidence, or show you how confidence scoring works. What would you like to explore?";
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
    chips = [
      "Walk me through the evidence",
      "What is the confidence score here?",
      "What is the nucleus claim?",
      "How is this different from a literature review?"
    ];
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

// ── Response handler ──
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

  try {
    // AI first — always
    const res = await fetch('https://ebv5sdivvc.execute-api.us-east-1.amazonaws.com/api/elmer-public-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: text,
        history: conversationHistory.slice(-6),
        page: detectPage() // pass page context so AI knows where the visitor is
      })
    });

    removeTyping();

    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    addBubble(data.reply, "elmer");
    conversationHistory.push({ role: "assistant", content: data.reply });

  } catch (err) {
    removeTyping();
    const fallback = "I'm having trouble connecting right now. You can reach the DATOM team at info@datom.science or visit [datom.science/try](https://datom.science/try).";
    addBubble(fallback, "elmer");
    conversationHistory.push({ role: "assistant", content: fallback });
  }
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
