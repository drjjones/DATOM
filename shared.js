/* ============================================================
   DATOM — shared.js
   Scroll reveals, card glow tracking, hamburger menu, header shadow,
   medical-advice acknowledgment gate
   ============================================================ */

/* ── Medical-advice acknowledgment gate ──
   A blocking modal shown before a health claim/record page can be read. The
   reader must click "I understand" once; the acknowledgment is remembered for
   the browser session (sessionStorage) so it does not nag on every page. Defined
   at top level (not inside DOMContentLoaded) so a page can call it after its own
   async render — claim.html invokes it once its JSON confirms the health domain;
   record.html auto-fires it via the data-med-gate="health" attribute below.
   Acknowledgment is required, so Esc does NOT dismiss and focus is trapped to the
   button. Fully self-injected (style + markup) so no page markup or stylesheet
   version needs to change. */
window.datomMedicalGate = function datomMedicalGate() {
  try { if (sessionStorage.getItem('datom_med_ack') === '1') return; } catch (e) {}
  if (document.getElementById('datom-med-gate')) return; // already open

  if (!document.getElementById('datom-med-gate-style')) {
    const st = document.createElement('style');
    st.id = 'datom-med-gate-style';
    st.textContent = `
      .med-gate { position: fixed; inset: 0; z-index: 12000; display: flex;
        align-items: center; justify-content: center; padding: 24px;
        background: rgba(238, 242, 246, 0.86);
        backdrop-filter: blur(10px) saturate(115%);
        -webkit-backdrop-filter: blur(10px) saturate(115%);
        animation: medGateFade 0.2s ease; }
      @keyframes medGateFade { from { opacity: 0; } to { opacity: 1; } }
      .med-gate-card { max-width: 440px; width: 100%;
        background: var(--paper, #F7F9FA); border: 1px solid var(--ink, #13253A);
        border-left: 4px solid var(--verdict-mixed, #B47A16);
        padding: 28px 30px 26px; box-shadow: 0 24px 60px rgba(19, 37, 58, 0.22); }
      .med-gate-eyebrow { font-family: var(--font-data); font-size: 10px;
        letter-spacing: 0.1em; text-transform: uppercase;
        color: var(--faint, #8a97a6); margin: 0 0 10px; }
      .med-gate-title { font-family: var(--font-display); font-size: 22px;
        line-height: 1.25; color: var(--ink, #13253A); margin: 0 0 12px; }
      .med-gate-body { font-family: var(--font-body); font-size: 15px;
        line-height: 1.6; color: var(--ink, #13253A); margin: 0 0 22px; }
      .med-gate-btn { font-family: var(--font-data); font-size: 13px;
        letter-spacing: 0.04em; text-transform: uppercase;
        color: var(--paper, #F7F9FA); background: var(--ink, #13253A);
        border: 1px solid var(--ink, #13253A); padding: 12px 22px; cursor: pointer; }
      .med-gate-btn:hover { background: #0b1a2b; }
      .med-gate-btn:focus-visible { outline: 2px solid var(--signal, #0B6E84);
        outline-offset: 2px; }
      body.med-gate-locked { overflow: hidden; }`;
    document.head.appendChild(st);
  }

  const overlay = document.createElement('div');
  overlay.className = 'med-gate';
  overlay.id = 'datom-med-gate';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'med-gate-title');
  overlay.setAttribute('aria-describedby', 'med-gate-body');
  overlay.innerHTML =
    '<div class="med-gate-card">' +
      '<p class="med-gate-eyebrow">Before you read this record</p>' +
      '<h2 class="med-gate-title" id="med-gate-title">This is not medical advice</h2>' +
      '<p class="med-gate-body" id="med-gate-body">DATOM checks whether current evidence supports one specific claim. It does not cover safety, dosing, or side effects, and it is not a recommendation to use or avoid anything. Talk to a doctor before making any decision about your health.</p>' +
      '<button type="button" class="med-gate-btn" id="med-gate-ok">I understand</button>' +
    '</div>';
  document.body.appendChild(overlay);
  document.body.classList.add('med-gate-locked');

  const btn = document.getElementById('med-gate-ok');
  const prevFocus = document.activeElement;

  function onKey(e) {
    // Acknowledgment is required: Esc must not dismiss. Only one focusable
    // control, so keep Tab pinned to it rather than escaping to the page behind.
    if (e.key === 'Escape' || e.key === 'Tab') {
      e.preventDefault();
      e.stopPropagation();
      btn.focus();
    }
  }
  function close() {
    try { sessionStorage.setItem('datom_med_ack', '1'); } catch (e) {}
    document.body.classList.remove('med-gate-locked');
    document.removeEventListener('keydown', onKey, true);
    overlay.remove();
    if (prevFocus && prevFocus.focus) { try { prevFocus.focus(); } catch (e) {} }
  }
  document.addEventListener('keydown', onKey, true);
  btn.addEventListener('click', close);
  setTimeout(() => btn.focus(), 30);
};

document.addEventListener('DOMContentLoaded', () => {

  /* Fire the medical gate on any page that marks itself a health record. Pages
     whose health status is only known after an async fetch (claim.html) call
     window.datomMedicalGate() themselves once they know. */
  if (document.body && document.body.getAttribute('data-med-gate') === 'health') {
    window.datomMedicalGate();
  }


  /* ── Scroll Reveal (IntersectionObserver) ── */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target); // reveal once, then stop tracking
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(el => revealObserver.observe(el));
  } else {
    // No IntersectionObserver support — never leave content hidden; show it all.
    reveals.forEach(el => el.classList.add('active'));
  }

  /* ── Card Mouse Glow Tracking ── */
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });

  /* ── Hamburger Menu ── */
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      nav.classList.toggle('open');
    });
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !e.target.closest('nav') && !e.target.closest('.menu-toggle')) {
        nav.classList.remove('open');
      }
    });
  }

  /* ── Click Ripple Effect ── */
  document.addEventListener('click', (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
    // Fallback cleanup
    setTimeout(() => { if (ripple.parentNode) ripple.remove(); }, 600);
  });

  /* ── Header Shadow on Scroll ── */
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

});
