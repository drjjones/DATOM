# Counsel review checklist (public site legal surfaces)

Items on privacy.html / terms.html that need counsel sign-off before being relied on as
binding. Plain-language policy is written to match what the code actually does; counsel
review is a separate gate (see the maintainer note at the top of privacy.html).

## Aggregate search sentiment disclosure (added 2026-07-22, Batch 1, item 3, per G2)

- Question: is any sentiment event write-path live in production?
- Answer: YES. `src/lambdas/elmerApi.ts` records query sentiment unconditionally on every
  resolved public claim query. Call site: `_sentimentSink.record(buildQuerySentimentEvent(...))`
  (elmerApi.ts:16585). Today the sink is `createLogSentimentSink()` (a structured, walled
  CloudWatch line, identity-dissociated by construction: claim id + raw question text +
  resolution path + timestamp only; no IP, no account, per querySentimentSink.ts).
  Firewall policy (`src/config/firewallPolicy.ts`) frames aggregate sentiment as a sellable
  measurement product that carries zero weight in verdicts/grades.
- Action taken (same push): disclosure added to privacy.html — new "Aggregate search
  sentiment" section (id="sentiment") plus reconciliation of the "never sell your
  information" bullet to "never sell information that identifies you; aggregates only."
  Effective date bumped to 22 July 2026.
- Still needs counsel: confirm the aggregate-resale characterization vs the CCPA
  "do not sell/share personal information" statement (privacy.html + terms.html#sec-4-1)
  is defensible given identity-dissociation; confirm "sold only as aggregates" wording.

## Coupling rule (for future changes)

If sentiment collection is ever expanded (new fields, a non-walled store, per-person
retention) the disclosure must change in the SAME push that enables the collection, never
after (G2). Do not ship a collection change ahead of its disclosure.
