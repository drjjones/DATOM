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
  // record-pending is its own page and must be tested before "record".
  if (path.includes("record-pending")) return "record-pending";
  if (path.includes("record"))    return "record";
  if (path.includes("claim"))     return "claim";
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
  const map = { home: "index.html", record: "record.html", claim: "claim.html", example: "example.html", product: "product.html", organizations: "organizations.html", pricing: "pricing.html", research: "research.html", try: "try.html" };
  return map[page] || "index.html";
}

// ── Page awareness: the record the visitor is currently reading ──
// A record page tells Elmer two things: which record is in front of the reader
// (so the backend can ground its answers in that record's real facts) and which
// parts of the page it can scroll them to. record.html is the fixed GLP-1
// record; claim.html and example.html are data-driven and carry the id in the
// query string. Sections are filtered to those actually present in the DOM, so
// a page that renders without (say) the evidence graph never offers to scroll
// to it. Selectors live here, keys go to the backend; the backend only ever
// echoes a key, so on-page anchors can change without touching the prompt.
const CLAIM_SECTIONS = [
  { key: "verdict",  label: "the verdict and confidence summary",              sel: "#verdict" },
  { key: "guide",    label: "how to read this record",                         sel: "#guide" },
  { key: "graph",    label: "the evidence graph",                              sel: "#figure" },
  { key: "claim",    label: "the exact claim being tested",                    sel: "#nucleus" },
  { key: "evidence", label: "the evidence and its sources",                    sel: "#evidence" },
  { key: "scoring",  label: "how the confidence score is built",               sel: "#confidence-scoring" },
  { key: "summary",  label: "the summary and what it means for a decision",    sel: "#summary" },
];
const RECORD_SECTIONS = [
  { key: "verdict",  label: "the verdict and Evidence Grade",                  sel: "#rec-verdict" },
  { key: "evidence", label: "what the evidence looks like (support vs against)", sel: "#rec-evidence" },
  { key: "sources",  label: "the sources behind the record",                   sel: "#rec-sources" },
  { key: "details",  label: "the record details and where it came from",       sel: "#rec-details" },
];

// The parts of the current page Elmer can scroll to, filtered to what exists.
function currentPageSections() {
  const page = detectPage();
  const candidates =
    page === "record" ? RECORD_SECTIONS :
    (page === "claim" || page === "example") ? CLAIM_SECTIONS :
    [];
  return candidates.filter(s => document.querySelector(s.sel));
}

// The curated record id for the page in front of the reader, or "" if none.
// Bounded on purpose: the backend only surfaces facts for records it can ground
// (the curated public set), so anything else resolves to "" and Elmer holds no
// facts about it, though it can still scroll the page.
function currentViewingRecordId() {
  const page = detectPage();
  if (page === "record") return "DTM-2026-0703-2E"; // record.html is the fixed GLP-1 record
  if (page === "claim") {
    const id = new URLSearchParams(window.location.search).get("id");
    return (id || "").trim();
  }
  return "";
}

// The {viewingRecordId, sections} the backend reads to become page-aware.
function buildPageContext() {
  return {
    viewingRecordId: currentViewingRecordId(),
    sections: currentPageSections().map(s => ({ key: s.key, label: s.label })),
  };
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
// getPageContext() lived here and was DEAD: it had a definition and zero call
// sites, so every fact in it was decorative. handleSend sends only {message,
// history, page}. It is deleted rather than left dormant because of what it
// held: the GLP-1 claim with its polarity reversed ("reduces skeletal muscle
// mass", where the real record asks whether GLP-1 PRESERVES it and finds the
// evidence says no), a bare confidence percentage, the retired Observer /
// Investigator $12mo / DATOM Pro tiers, and stale carousel figures (CRISPR 82%,
// eating-disorder 76%) that came from superseded 6-source stubs and contradicted
// the site's own claim pages. Anyone rewiring it would have shipped all of that
// at once. Page context now comes from elmerPublicPersona.ts, and claim facts
// come from the record lookup in elmer-api, which reads the ledger.

// ── State ──
let isOpen = false;
let conversationHistory = [];
let suggestionsShown = false;
// True when Elmer was expanded to full-page chat from the homepage answer box.
// In this mode, and ONLY this mode, a confident record match navigates the page
// to that claim (the chat's job was to identify the claim). The corner dock
// never navigates; it just shows the answer with a link.
let elmerFullMode = false;

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

  // Dimmed backdrop, shown only in full-chat mode (when the homepage answer box
  // expands Elmer into a full-page conversation). The corner dock does not use it.
  const backdrop = document.createElement("div");
  backdrop.className = "elmer-backdrop";
  backdrop.id = "elmerBackdrop";

  document.body.appendChild(dock);
  document.body.appendChild(backdrop);
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
      // Greetings state NO claim facts. The one that used to live here said
      // "GLP-1 Therapy to Muscle Reduction ... 59% of the 130 studies that
      // directly measure this support it, but DATOM's confidence score is still
      // only 44%", which was wrong three ways at once: it named the claim with
      // its polarity reversed (the real record asks whether GLP-1 PRESERVES
      // muscle mass, and on the evidence the answer is no), it printed a bare
      // confidence percentage, which is banned from public surfaces because it
      // reads as a probability that the claim is true, and it taught the retired
      // score vocabulary. Numbers about a claim now come from the record lookup
      // in elmer-api and nowhere else, so a greeting has no business holding any.
      let greeting;
      if (page === "record" || page === "claim" || page === "example") {
        greeting = "I'm Elmer. This page is one claim, checked against the studies that tested it. I can explain what the verdict means, what the Evidence Grade is telling you, or point you to any part of the page. What would you like to know?";
      } else if (page === "try") {
        greeting = "I'm Elmer. Tell me the claim you want to check, or ask me anything about how DATOM works.";
      } else if (page === "product") {
        greeting = "I'm Elmer. This page explains how DATOM checks a claim. I can walk you through any of it in plain language. What would you like to know?";
      } else {
        greeting = "I'm Elmer. Ask me about any health or science claim and I'll tell you what DATOM's record says, or that we haven't checked it yet. What's on your mind?";
      }
      addBubble(greeting, "elmer");
    }
    setTimeout(() => document.getElementById("elmerInput")?.focus(), 120);
  } else {
    dock.classList.remove("hidden");
    panel.classList.remove("open");
    exitFullMode();
  }
}

// ── Open Elmer with a claim the visitor typed elsewhere on the page ──
// This is what the homepage answer box calls. The bar says "Ask about any health
// or science claim", so a submitted query must go straight into Elmer's claim
// lookup (the intent ladder in elmer-api: understand what they meant, surface the
// matching record, or suggest the nearest one). It used to navigate to try.html,
// which dropped the visitor into the get-started branch selector ("What are you
// here to do?") instead of answering the claim. Opening the chat directly is the
// fix: no greeting (the answer IS the first turn), just the question and Elmer's
// resolution.
function askElmerWithClaim(text) {
  const q = (text || "").trim();
  if (!q) return;
  const dock = document.getElementById("elmerDock");
  const panel = document.getElementById("elmerPanel");
  const backdrop = document.getElementById("elmerBackdrop");
  if (!panel) return; // UI not built yet; caller keeps the form fallback
  isOpen = true;
  elmerFullMode = true; // expand into full-page chat
  dock.classList.add("hidden");
  panel.classList.add("open");
  panel.classList.add("elmer-panel--full");
  if (backdrop) backdrop.classList.add("show");
  document.body.classList.add("elmer-full-open"); // lock page scroll behind the chat
  suggestionsShown = true; // no generic prompts; they already asked something
  const s = document.getElementById("elmerSuggestions");
  if (s) s.innerHTML = "";
  handleSend(q); // routes through /api/elmer-public-chat -> intent ladder
}
// Exposed for the homepage answer box (index.html) and any other on-page entry.
window.datomAskElmer = askElmerWithClaim;

// Leave full-chat mode (on close). Idempotent; a no-op for the corner dock.
function exitFullMode() {
  elmerFullMode = false;
  const panel = document.getElementById("elmerPanel");
  const backdrop = document.getElementById("elmerBackdrop");
  if (panel) panel.classList.remove("elmer-panel--full");
  if (backdrop) backdrop.classList.remove("show");
  document.body.classList.remove("elmer-full-open");
}

// Only a bare same-site page is a valid navigation target: "record.html" or
// "claim.html?id=D-ABC123". Anything with a scheme, a host, or a leading slash
// is rejected, so a malformed match can never redirect the visitor off-site.
function isSafeRecordHref(href) {
  return typeof href === "string" && /^[a-z0-9_-]+\.html(\?[a-z0-9=&_.-]*)?$/i.test(href);
}

// The chat identified the claim; change the page to it. Shows a brief transition
// so the jump does not feel abrupt, then navigates. Returns true when it has
// taken over (so the caller stops), false when the href was unusable.
function goToRecord(match) {
  if (!isSafeRecordHref(match.href)) return false;
  const label = match.question ? '"' + String(match.question).slice(0, 140) + '"' : "the record";
  addBubble("Found the record for " + label + ". Opening it now…", "elmer");
  window.setTimeout(function () { window.location.href = match.href; }, 1600);
  return true;
}

// A clickable card for a record Elmer suggested but did not assert. It is a real
// same-site <a>, so clicking navigates natively; the href is validated first so
// a bad suggestion can never point off-site.
function addRecordSuggestion(suggest) {
  if (!isSafeRecordHref(suggest.href)) return;
  const messages = document.getElementById("elmerMessages");
  if (!messages) return;
  const a = document.createElement("a");
  a.className = "elmer-record-cta";
  a.href = suggest.href;
  const q = suggest.question ? String(suggest.question) : "this record";
  a.innerHTML = '<span class="elmer-record-cta-body">' +
                '<span class="elmer-record-cta-label">Read the record</span>' +
                '<span class="elmer-record-cta-q">' +
                q.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") +
                '</span></span>' +
                '<span class="elmer-record-cta-arrow" aria-hidden="true">&rarr;</span>';
  messages.appendChild(a);
  messages.scrollTop = messages.scrollHeight;
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

  // Pull out any [[GO:key]] scroll command Elmer emitted. The key maps to a
  // section of the page the reader is on; scrolling reveals nothing private (it
  // is their own page), so there is no href to guard, only a whitelist check
  // against the sections we actually offered this page. At most one scroll per
  // reply. The token itself is stripped so the reader never sees it.
  let scrollKey = null;
  let html = text.replace(/\[\[GO:([a-z0-9_-]+)\]\]/gi, function (_m, k) {
    if (!scrollKey) scrollKey = String(k).toLowerCase();
    return ' ';
  });

  // Strip any legacy [[NAV:...]] commands; navigation happens via [[GO:...]] now
  html = html.replace(/\s*\[\[NAV:[^\]]*?\]\]\s*/gi, ' ').trim();

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

  // Act on a scroll command, but only from Elmer (never a user echo) and only
  // for a key on the current page. A tiny delay lets the bubble lay out first so
  // the page scroll is not fighting the message-list scroll above.
  if (scrollKey && who !== "user") {
    const sec = currentPageSections().find(s => s.key === scrollKey);
    if (sec) window.setTimeout(function () { scrollToSelector(sec.sel); }, 300);
  }
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
        page: detectPage(), // pass page context so AI knows where the visitor is
        pageContext: buildPageContext() // the record being read + parts to scroll to
      })
    });

    removeTyping();

    if (!res.ok) throw new Error(`API ${res.status}`);
    const data = await res.json();
    addBubble(data.reply, "elmer");
    conversationHistory.push({ role: "assistant", content: data.reply });

    // A match means the claim has been identified. In full-chat mode (opened
    // from the homepage answer box), that is the cue to change the page to the
    // claim page, which is the whole point of the flow. The corner dock does not
    // navigate: it leaves the reader where they are with the link in the answer.
    // Guard the href to a same-site relative path so a bad value can never
    // redirect off-site.
    if (elmerFullMode && data.match && typeof data.match.href === "string" && goToRecord(data.match)) {
      return;
    }

    // A suggestion means Elmer named a likely record but was not confident
    // enough to change the page on its own (an offer, or a miss with a related
    // record). Give the visitor a one-click way to open it, so "Elmer suggested
    // the correct claim but could not navigate" cannot happen. Shown in both the
    // full chat and the dock; it is a user click, never an auto-redirect.
    if (data.suggest && typeof data.suggest.href === "string") {
      addRecordSuggestion(data.suggest);
    }

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

  // The homepage now leads with the answer box ("Ask about any health or science
  // claim"), which opens Elmer with the visitor's own question. Auto-popping the
  // dock with a generic greeting on top of that is redundant and competes with
  // the box for attention, so the homepage does not auto-open. The dock is still
  // one click away via "Ask Elmer". Other pages keep the auto-open.
  if (page === "home") return;

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
