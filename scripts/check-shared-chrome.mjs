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

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

// Pages that share the canonical header/nav/footer. Bare redirect stubs
// deliberately have no header/nav/footer and are excluded: example.html and
// solutions.html (redirect to record.html / organizations.html), and
// investigator-coming-soon.html (removed 2026-07-22; now redirects to
// pricing.html per B3/H1/A4). research.html is excluded pending keep-or-kill
// triage. 404.html is the minimal error page and carries its own chrome.
const PAGES = [
  'index.html',
  'claim.html',
  'record.html',
  'record-pending.html',
  'product.html',
  'organizations.html',
  'pricing.html',
  'firewall.html',
  'privacy.html',
  'ledger.html',
  'try.html',
  'refine.html',
  'pitch-select.html',
  'terms.html',
  'thankyou.html',
  'signup.html',
];

// Nav is allowed to differ in exactly these page-specific ways. Anything
// else diverging is reported as drift. All in-scope pages now carry the
// identical full nav, so there are no page-specific nav variants at present.
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

// The canonical top nav, per the content-rules doc (global nav) and Batch 1:
// Example, How it works, For Organizations, Pricing, Sign in. "How it works"
// (product.html) MUST be in the nav and reachable from every record page: a
// skeptic reading a verdict needs a path to the mechanism page. "Browse" stays
// absent until the first topic page unlocks (amended threshold rule).
const CANONICAL_NAV = [
  'record.html::Example',
  'product.html::How it works',
  'organizations.html::For Organizations',
  'pricing.html::Pricing',
  '/app/login::Sign in',
];

// Footer must link to all four per the content-rules doc (global elements):
// terms, privacy, firewall, methodology (methodology = product.html / How it works).
const CANONICAL_FOOTER_LINKS = [
  'href="terms.html"',
  'href="privacy.html"',
  'href="firewall.html"',
  'href="product.html"',
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

  for (const expected of CANONICAL_NAV) {
    if (!navLinks.includes(expected)) {
      const variantOk = (KNOWN_NAV_VARIANTS[page] || []).length > 0 && !navHrefs.includes(expected.split('::')[0]);
      if (!variantOk) {
        console.error(`[FAIL] ${page}: nav link "${expected}" missing or label drifted (found: ${navLinks.join(', ') || 'none'})`);
        failures++;
      }
    }
  }

  // Content deltas in the footer are allowed (index.html/terms.html
  // legitimately carry extra lines) but the footer must still carry the
  // tagline and all four canonical policy/methodology links.
  if (!footer.includes('Science, verified. For everyone.')) {
    console.error(`[FAIL] ${page}: footer missing the tagline`);
    failures++;
  }
  for (const link of CANONICAL_FOOTER_LINKS) {
    if (!footer.includes(link)) {
      console.error(`[FAIL] ${page}: footer missing canonical link ${link}`);
      failures++;
    }
  }
}

if (failures === 0) {
  console.log(`OK: shared chrome consistent across ${PAGES.length} pages.`);
  process.exit(0);
} else {
  console.error(`\n${failures} issue(s) found.`);
  process.exit(1);
}
