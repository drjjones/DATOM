#!/usr/bin/env node
/**
 * Verifies the shared header/nav/footer markup stays consistent across every
 * page that uses it. Not a build step: run manually (or via a pre-commit
 * hook if you want) after touching any page's header/nav/footer.
 *
 * This is NOT a run-at-deploy-time check (GitHub Pages just serves whatever
 * is committed, no build). It exists because the site has no template/partial
 * system: every page carries a full literal copy of the header/nav/footer.
 * This script is the "careful diffing" the mechanism relies on, made
 * repeatable instead of manual.
 *
 * Usage: node scripts/check-shared-chrome.mjs
 * Exit code 0 = consistent. Exit code 1 = drift found, details printed.
 */

import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

// Pages that share the canonical header/nav/footer. research.html is
// intentionally excluded (slated for deletion separately). example.html was
// removed from this list 2026-07-20: it is now a bare redirect stub pointing at
// record.html (like solutions.html), so it deliberately has no header/nav/footer
// to compare and this check would fail on it forever.
const PAGES = [
  'index.html',
  'product.html',
  'organizations.html',
  'pricing.html',
  'ledger.html',
  'try.html',
  'refine.html',
  'pitch-select.html',
  'terms.html',
  'thankyou.html',
  'signup.html',
  'investigator-coming-soon.html',
  'claim.html',
];

// Nav is allowed to differ in exactly these page-specific ways. Anything
// else diverging is reported as drift. All in-scope pages now carry the
// identical full nav (refine.html was standardized to canonical during the
// look pass), so there are no page-specific nav variants at present.
const KNOWN_NAV_VARIANTS = {};

function extractBlock(html, tagOpenRe, tagClose) {
  const m = html.match(tagOpenRe);
  if (!m) return null;
  const start = m.index;
  const end = html.indexOf(tagClose, start);
  if (end === -1) return null;
  return html.slice(start, end + tagClose.length);
}

function normalizeNavLinks(navBlock) {
  if (!navBlock) return [];
  const hrefs = [...navBlock.matchAll(/<a\s+href="([^"]+)"[^>]*>([^<]*)</g)];
  return hrefs.map(([, href, label]) => `${href}::${label.trim()}`);
}

let failures = 0;

// product.html ("How It Works") is intentionally NOT in the top nav: its
// content reads as B2B-oriented, so it now lives behind organizations.html
// (reachable via the "See how it works" card-link there) rather than as a
// general-audience nav destination.
const CANONICAL_NAV = [
  'record.html::Example',
  'pricing.html::Pricing',
  'organizations.html::For Organizations',
];

for (const page of PAGES) {
  const filePath = path.join(ROOT, page);
  let html;
  try {
    html = readFileSync(filePath, 'utf8');
  } catch {
    console.error(`[MISSING] ${page} not found at ${filePath}`);
    failures++;
    continue;
  }

  const header = extractBlock(html, /<header[^>]*>/, '</header>');
  const footer = extractBlock(html, /<footer[^>]*>/, '</footer>');

  if (!header) {
    console.error(`[FAIL] ${page}: no <header> found`);
    failures++;
    continue;
  }
  if (!footer) {
    console.error(`[FAIL] ${page}: no <footer> found`);
    failures++;
    continue;
  }

  if (!header.includes('class="header-logo"')) {
    console.error(`[FAIL] ${page}: header does not reference the DATOM logo`);
    failures++;
  }

  const navLinks = normalizeNavLinks(extractBlock(header, /<nav[^>]*>/, '</nav>'));
  const navHrefs = navLinks.map(l => l.split('::')[0]);
  const bodyLinks = navLinks.filter(l => CANONICAL_NAV.some(c => l.startsWith(c.split('::')[0] + '::')));

  for (const expected of CANONICAL_NAV) {
    if (!navLinks.includes(expected)) {
      const variantOk = (KNOWN_NAV_VARIANTS[page] || []).length > 0 && !navHrefs.includes(expected.split('::')[0]);
      if (!variantOk) {
        console.error(`[FAIL] ${page}: nav link "${expected}" missing or label drifted (found: ${navLinks.join(', ') || 'none'})`);
        failures++;
      }
    }
  }

  // Structural chrome (mark + nav shell) must match byte-for-byte modulo the
  // known variants above and the active-page nav highlight. Content deltas in
  // the footer are allowed (index.html/terms.html legitimately carry extra
  // lines) but the footer must still contain the tagline and Terms link.
  if (!footer.includes('Science, verified. For everyone.')) {
    console.error(`[FAIL] ${page}: footer missing the tagline`);
    failures++;
  }
  if (!footer.includes('href="terms.html"')) {
    console.error(`[FAIL] ${page}: footer missing the Terms link`);
    failures++;
  }
}

if (failures === 0) {
  console.log(`OK: shared chrome consistent across ${PAGES.length} pages.`);
  process.exit(0);
} else {
  console.error(`\n${failures} issue(s) found.`);
  process.exit(1);
}
