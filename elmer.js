/* ============================================================
   Elmer — Evidence Steward Chatbot
   Uses DATOM's existing /api/chat endpoint (Bedrock Haiku)
   Page-aware, navigation-capable, conversation-persistent
   ============================================================ */

// ── Config ──
const API_BASE = "https://ebv5sdivvc.execute-api.us-east-1.amazonaws.com";

// ── Detect current page context ──
function detectPage() {
  const path = window.location.pathname;
  if (path.includes("example"))  return "example";
  if (path.includes("product"))  return "product";
  if (path.includes("research")) return "research";
  if (path.includes("try"))      return "try";
  return "home";
}

function getPageContext() {
  const page = detectPage();
  let context = `The visitor is currently on the ${page.toUpperCase()} page of datom.science.\n`;

  if (page === "example" && typeof DATOMERS !== "undefined") {
    context += `\nThis page shows an interactive datomer: "Remote Work → Productivity" with 32 datoms across 4 clusters:\n`;
    context += `- Cluster A: Aggregate productivity metrics (${DATOMERS[0]?.datoms?.length || 8} datoms)\n`;
    context += `- Cluster B: Task-level performance (${DATOMERS[1]?.datoms?.length || 8} datoms)\n`;
    context += `- Cluster C: Collaboration & coordination (${DATOMERS[2]?.datoms?.length || 8} datoms)\n`;
    context += `- Cluster D: Contextual & moderating factors (${DATOMERS[3]?.datoms?.length || 8} datoms)\n`;
    context += `\nThe datomer's Structural Confidence Score is 64/100 (Moderate/Conditional).\n`;
    context += `This means: evidence supports the claim conditionally — remote work effects are task-dependent.\n\n`;
    context += `FULL DATOMER DATA:\n` + JSON.stringify(DATOMERS) + `\n`;
    context += `\nWhen the user asks about a specific datom (like "B6"), look it up and provide: the claim, direction, source, year, and population.\n`;
    context += `Walk the user through the evidence structure: clusters, how datoms relate, what the confidence score means.\n`;
  } else if (page === "product") {
    context += `This page explains how DATOM works — the pipeline from raw research to structured evidence.\n`;
    context += `Key sections: Atomic Extraction, Datomer Assembly, Confidence Scoring, Knowledge Graph.\n`;
  } else if (page === "research") {
    context += `This page covers DATOM's academic foundations and methodology.\n`;
  } else if (page === "try") {
    context += `This page has two CTAs: Schedule a Technical Briefing (Calendly) and Join the Early Access Waitlist (Google Form).\n`;
    context += `The Calendly link is: https://calendly.com/jordan-datom/30min\n`;
    context += `The waitlist form is: https://forms.gle/gGic2gbcEoENU9U78\n`;
  } else {
    context += `This is the homepage with the hero: "Confidence you can defend." and links to all other pages.\n`;
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
        greeting = "Welcome to the Live Example! I'm Elmer, your Evidence Steward. This page shows a real datomer — **Remote Work → Productivity** — with 32 atomic evidence units across 4 clusters. I can walk you through the evidence structure, explain any specific datom, or show you how confidence scoring works. What would you like to explore?";
      } else if (page === "try") {
        greeting = "Hello! I'm Elmer. You're on our engagement page. You can [schedule a 30-minute briefing](https://calendly.com/jordan-datom/30min) or [join the early access waitlist](https://forms.gle/gGic2gbcEoENU9U78). How can I help you decide?";
      } else {
        greeting = "Hello! I'm Elmer, your Evidence Steward. I can help you understand DATOM — what it is, how it works, and how it can fit your workflow. What would you like to know?";
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
    chips = ["Walk me through the evidence", "What is datom B6?", "How is the confidence score calculated?", "How can I use this?"];
  } else if (page === "try") {
    chips = ["What happens in a briefing?", "What is early access?", "Tell me about DATOM first"];
  } else {
    chips = ["What is DATOM?", "How is it different from AI?", "Show me the live example", "How do I get started?"];
  }

  container.innerHTML = "";
  chips.forEach(text => {
    const chip = document.createElement("button");
    chip.className = "elmer-chip";
    chip.textContent = text;
    chip.addEventListener("click", () => {
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

  // Convert markdown: **bold**, [links](url), and navigation shortcuts
  let html = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" style="color:#06b6d4;text-decoration:underline;">$1</a>')
    .replace(/\n/g, "<br>");

  // Convert page references to clickable navigation links
  html = html.replace(/\b(example\.html|Live Example page|live example)\b/gi,
    '<a href="example.html" style="color:#06b6d4;text-decoration:underline;cursor:pointer;">Live Example</a>');
  html = html.replace(/\b(product\.html|How It Works page)\b/gi,
    '<a href="product.html" style="color:#06b6d4;text-decoration:underline;cursor:pointer;">How It Works</a>');
  html = html.replace(/\b(try\.html|Get Started page|engagement page)\b/gi,
    '<a href="try.html" style="color:#06b6d4;text-decoration:underline;cursor:pointer;">Get Started</a>');
  html = html.replace(/\b(research\.html|Research page)\b/gi,
    '<a href="research.html" style="color:#06b6d4;text-decoration:underline;cursor:pointer;">Research</a>');

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
    const reply = data.reply || data.message || data.response || "I couldn't generate a response. Please try again.";

    removeTyping();
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

  document.addEventListener("click", (e) => {
    if (isOpen && !e.target.closest("#elmerPanel") && !e.target.closest("#elmerDock")) {
      toggle(false);
    }
  });
});
