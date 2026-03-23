/* ============================================================
   Elmer — Evidence Steward Chatbot
   Uses DATOM's existing /api/chat endpoint (Bedrock Haiku)
   ============================================================ */

// ── Config ──
const API_BASE = "https://ebv5sdivvc.execute-api.us-east-1.amazonaws.com";

// ── System context (sent with each message to guide the model) ──
const WEBSITE_PREFIX = "[WEBSITE VISITOR — unauthenticated] ";

// ── State ──
let isOpen = false;
let conversationHistory = [];
let suggestionsShown = false;

// ── Build UI ──
function createUI() {
  // Dock button
  const dock = document.createElement("button");
  dock.className = "elmer-dock";
  dock.id = "elmerDock";
  dock.innerHTML = `<svg class="elmer-dock-avatar" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="12" fill="#fff"/><ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#fff" stroke-width="3" transform="rotate(-30 50 50)"/><ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#fff" stroke-width="3" transform="rotate(30 50 50)"/><ellipse cx="50" cy="50" rx="42" ry="16" fill="none" stroke="#fff" stroke-width="3" transform="rotate(90 50 50)"/></svg> Ask Elmer`;

  // Panel
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
      addBubble("Hello! I'm Elmer, your Evidence Steward. I can help you understand DATOM \u2014 what it is, how it works, and how it can fit your workflow. What would you like to know?", "elmer");
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

  const isExamplePage = !!window.DATOMERS_CONTEXT;
  const chips = isExamplePage
    ? ["What am I looking at?", "What is datom B6?", "How is confidence scored?", "Schedule a briefing"]
    : ["What is DATOM?", "How is it different from AI?", "See the live example", "Schedule a briefing"];

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

  // Simple markdown: **bold** and [links](url)
  let html = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
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

// ── API call to existing DATOM /api/chat endpoint ──
async function handleSend(overrideText) {
  const input = document.getElementById("elmerInput");
  const text = overrideText || input?.value?.trim();
  if (!text) return;
  if (!overrideText && input) input.value = "";
  updateSendButton();

  // Clear suggestions on first real message
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
        message: WEBSITE_PREFIX + text,
        source: "website",
      }),
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

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

  // Close panel on outside click
  document.addEventListener("click", (e) => {
    if (isOpen && !e.target.closest("#elmerPanel") && !e.target.closest("#elmerDock")) {
      toggle(false);
    }
  });
});
