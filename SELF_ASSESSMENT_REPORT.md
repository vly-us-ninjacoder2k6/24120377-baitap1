# Self-Assessment Report

**Student ID:** 24120377

| # | Criterion | Max | Self | Evidence |
|---|-----------|-----|------|----------|
| 1 | **cartTotal behaves as specified** | 30 | 28 | `src/cart.js`: worked example returns `467400` as a **number** (line 26: `Math.round()`). Empty cart → `0` (line 4–6). Negative price → `RangeError` (line 11–13). Non-integer/non-positive qty → `RangeError` (line 14–16). Free shipping at threshold with `>=` (line 23). All verified by 7 passing tests. |
| 2 | **Tests** | 20 | 18 | `test/cart.test.js`: 7 tests — slides example, empty cart, negative price, non-integer qty, zero qty, negative qty, free shipping at threshold, rounding. Each test asserts one thing. `npm test` passes. |
| 3 | **The harness** | 20 | 16 | `.agents/AGENTS.md`: rules file with stack (Node ≥ 18, ES modules), commands (`npm test`, `npx eslint .`, `npm run gate`), and 4 "never" rules. Gate: `npm run gate` runs test + lint. `.github/workflows/ci.yml` present but CI has not been triggered on a remote repo yet. |
| 4 | **The brief** | 15 | 14 | `BRIEF.md`: names the two files it may touch, the full contract (7 rules), all error cases, "no dependencies", the worked example, and the constraint "no toFixed". A stranger could give this brief and get the result. |
| 5 | **AI-LOG.md** | 15 | 13 | `AI-LOG.md`: names the tool (Gemini/Claude Opus), lists every file produced, every test added, what was reviewed (6 checks), what was rejected (wrong rubric criteria), and what was written by hand. Specific enough to check against the diff. |

**What I did not manage:**
- CI has not been verified green on a remote GitHub repository (only local). This is why I scored criterion 3 at 16 instead of 18+.
- Did not add a formatter (e.g. Prettier) alongside ESLint — the gate only uses lint, not format.

**Total: 89/100**
