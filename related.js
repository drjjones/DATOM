/* ============================================================
   DATOM — related.js
   The related-claims strip (3.9, browse priority one). On a record page it
   renders 3-5 neighbouring records so a reader who arrived through one claim
   keeps moving through the ledger. Neighbours are precomputed in
   records-index.json (built from featuredRecords.ts), so this is deterministic
   and reads no live model. Sparse-proof: it renders whatever neighbours exist
   and hides itself entirely if the index is unreachable, never an empty shell.

   Include on any record page with a container:
     <div id="related-records" data-entry="DTM-2026-0703-2E"></div>   (record.html)
     <div id="related-records"></div>                                  (claim.html, id from ?id=)
   ============================================================ */
(function () {
  'use strict';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // Only a bare same-site page is a valid link target.
  function isSafeHref(h) { return /^[a-z0-9_\-]+\.html(\?[a-z0-9_\-=&]*)?$/i.test(h || ''); }
  function verdictClass(v) {
    var t = (v || '').toLowerCase();
    if (t.indexOf('unsupported') !== -1) return 'rel-v-unsupported';
    if (t.indexOf('insufficient') !== -1) return 'rel-v-insufficient';
    if (t.indexOf('contested') !== -1) return 'rel-v-contested';
    return 'rel-v-supported';
  }

  function injectStyle() {
    if (document.getElementById('related-records-style')) return;
    var st = document.createElement('style');
    st.id = 'related-records-style';
    st.textContent = [
      '.related-wrap { margin: var(--s6, 48px) 0 0; }',
      '.related-h { font-family: var(--font-data); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--faint); margin: 0 0 4px; border-bottom: 1px solid var(--line); padding-bottom: 6px; }',
      '.related-sub { font-family: var(--font-body); font-size: 13px; color: var(--muted); margin: 8px 0 16px; }',
      '.related-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); }',
      '.related-card { display: flex; flex-direction: column; gap: 10px; background: var(--paper); padding: 16px 16px 14px; text-decoration: none; transition: background 0.15s; }',
      '.related-card:hover { background: var(--nest, #f1f4f7); }',
      '.related-topic { font-family: var(--font-data); font-size: 10px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--faint); }',
      '.related-claim { font-family: var(--font-body); font-size: 14px; line-height: 1.4; color: var(--ink); flex: 1; }',
      '.related-foot { display: flex; align-items: center; gap: 8px; }',
      '.related-verdict { font-family: var(--font-data); font-size: 11px; font-weight: 600; letter-spacing: 0.02em; }',
      '.rel-v-supported { color: var(--signal); }',
      '.rel-v-contested { color: var(--verdict-mixed); }',
      '.rel-v-unsupported { color: var(--verdict-contra); }',
      '.rel-v-insufficient { color: var(--verdict-unrated); }',
      '.related-grade { font-family: var(--font-data); font-size: 11px; color: var(--muted); border: 1px solid var(--line-2); padding: 1px 6px; }',
      '.related-card:hover .related-claim { color: var(--signal); }'
    ].join('\n');
    document.head.appendChild(st);
  }

  function currentEntryId(container) {
    var attr = container.getAttribute('data-entry');
    if (attr) return attr;
    try { return new URLSearchParams(window.location.search).get('id') || ''; } catch (e) { return ''; }
  }

  function render(container, byId, ids) {
    var cards = ids
      .map(function (id) { return byId[id]; })
      .filter(function (r) { return r && isSafeHref(r.href); })
      .slice(0, 5);
    if (cards.length < 3) { container.style.display = 'none'; return; } // sparse-proof: never a thin strip

    injectStyle();
    var html = '<div class="related-wrap">' +
      '<h2 class="related-h">Related records</h2>' +
      '<p class="related-sub">Other claims on the ledger, checked the same way.</p>' +
      '<div class="related-grid">' +
      cards.map(function (r) {
        return '<a class="related-card" href="' + esc(r.href) + '">' +
          '<span class="related-topic">' + esc(r.topic) + '</span>' +
          '<span class="related-claim">' + esc(r.plainQuestion) + '</span>' +
          '<span class="related-foot">' +
            '<span class="related-verdict ' + verdictClass(r.verdict) + '">' + esc(r.verdict) + '</span>' +
            '<span class="related-grade">' + esc(r.grade) + '</span>' +
          '</span>' +
        '</a>';
      }).join('') +
      '</div></div>';
    container.innerHTML = html;
  }

  function init() {
    var container = document.getElementById('related-records');
    if (!container) return;
    var entryId = currentEntryId(container);
    if (!entryId) { container.style.display = 'none'; return; }

    fetch('records-index.json?v=20260719a')
      .then(function (r) { if (!r.ok) throw new Error('index ' + r.status); return r.json(); })
      .then(function (records) {
        var byId = {};
        records.forEach(function (rec) { byId[rec.entryId] = rec; });
        var self = byId[entryId];
        if (!self || !Array.isArray(self.relatedIds)) { container.style.display = 'none'; return; }
        render(container, byId, self.relatedIds);
      })
      .catch(function () { container.style.display = 'none'; }); // never leave an empty shell
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
