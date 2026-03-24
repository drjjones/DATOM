/* ============================================================
   Elmer — Evidence Steward Chatbot
   Page-aware, physically navigates the website, scrolls to sections
   ============================================================ */

// ── Config ──
const API_BASE = "https://ebv5sdivvc.execute-api.us-east-1.amazonaws.com";

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
  "example:anchor":        { page: "example.html",  selector: "#anchor" },
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
    context += `Navigable sections: example:top (overview), example:guide (DATOM standard explanation), example:graph (interactive knowledge graph), example:anchor (anchor claim), example:evidence (all 4 cluster cards), example:confidence (confidence scoring breakdown), example:summary (operational outcome), example:faq (FAQ).\n`;
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

// ── API call ──
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
    const res = await fetch(`${API_BASE}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: text,
        source: "website",
        page: detectPage(),
        pageContext: getPageContext(),
        history: conversationHistory.slice(0, -1),
      }),
    });

    if (!res.ok) throw new Error(`API returned ${res.status}`);

    const data = await res.json();
    let reply = data.reply || data.message || data.response || "I couldn't generate a response. Please try again.";

    removeTyping();

    // Determine if we need to navigate
    let navKey = null;
    const navMatch = reply.match(/\[\[NAV:([a-z\-:]+?)(?:\|[^\]]+?)?\]\]/i);
    if (navMatch) {
      navKey = navMatch[1];
    } else {
      // Fallback: check for plain page links
      const pageLinkMatch = reply.match(/\b(example\.html|product\.html|research\.html|try\.html)\b/i);
      if (pageLinkMatch) {
        const pageNavMap = {
          "example.html": "example:top",
          "product.html": "product:hero",
          "research.html": "research:top",
          "try.html": "try:top",
        };
        navKey = pageNavMap[pageLinkMatch[1].toLowerCase()] || null;
      }
    }

    if (navKey) {
      const target = NAV_MAP[navKey];
      const currentFile = getCurrentPageFile();

      if (target && target.page !== currentFile) {
        // Cross-page: navigate first, reply will be shown after page loads
        // Store the reply so it can be displayed after navigation
        sessionStorage.setItem("elmer_pending_reply", reply);
        conversationHistory.push({ role: "assistant", content: reply });
        sessionStorage.setItem("elmer_history", JSON.stringify(conversationHistory));
        navigateTo(navKey);
        return;
      } else {
        // Same page: scroll first, then show reply after a beat
        scrollToSelector(target.selector);
        await new Promise(r => setTimeout(r, 600));
      }
    }

    addBubble(reply, "elmer");
    conversationHistory.push({ role: "assistant", content: reply });
  } catch (e) {
    console.error("Elmer error:", e);
    removeTyping();
    addBubble("I'm having trouble connecting right now. Please try again in a moment.", "elmer");
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

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  createUI();
  checkPendingNav();

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
