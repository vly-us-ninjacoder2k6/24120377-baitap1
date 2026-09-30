# AI-LOG

## 2026-09-30 — cartTotal implementation + harness

**Tool:** Google Gemini (Antigravity IDE, Claude Opus model).

**Asked for:** implement `cartTotal` in `src/cart.js` from the spec in `README.md`;
write edge-case tests in `test/cart.test.js`;
set up harness (rules file, ESLint gate, GitHub Actions CI).

**What the starter had (24120377_1):**
- `src/cart.js` — empty stub: `throw new Error('not implemented')`
- `test/cart.test.js` — 1 test (slides example, fails on the stub)
- `package.json` — only `"test": "node --test"`, no devDependencies

**What the AI produced:**
- `src/cart.js` — 24-line implementation: empty-cart guard, validation (price < 0 / qty not positive integer → RangeError), subtotal loop, VAT, conditional shipping, `Math.round` return.
- `test/cart.test.js` — added 7 tests on top of the starter's 1: empty cart, negative price, non-integer qty, zero qty, negative qty, free-shipping threshold, rounding.
- `package.json` — added `lint` and `gate` scripts, `eslint` + `globals` as devDependencies.
- `.agents/AGENTS.md` — rules file with stack, commands table, 4 "never" rules.
- `eslint.config.js` — ESLint 9 flat config.
- `.github/workflows/ci.yml` — runs `npm run gate` on push.
- `BRIEF.md` — the full prompt given to the AI.
- `SELF_ASSESSMENT_REPORT.md` — self-assessment against the 5-criterion rubric.

**Changed / rejected:**
- AI first generated `SELF_ASSESSMENT_REPORT.md` with 10 made-up criteria — rejected, rewrote with the actual 5-criterion rubric after I provided it.
- AI wrote verbose comments in `cart.js` (e.g. `// Empty cart → 0 (no VAT, no shipping)`) — kept but trimmed section headers.
- No logic changes were needed in `cart.js` or tests — first-generation code was correct.

**Written by hand:**
- Verified worked example by hand: 2×180000 + 1×45000 = 405000, ×0.08 = 32400, +30000 = 467400 ✓
- Checked `>=` (not `>`) for free-shipping threshold.
- Confirmed return type is `number` (no `toFixed`).
- Filled in self-assessment scores and evidence.
