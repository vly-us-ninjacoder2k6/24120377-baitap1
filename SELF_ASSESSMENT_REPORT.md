# Self-Assessment Report

**Student ID:** 24120377

| # | Criterion | Max | Self | Evidence |
|---|-----------|-----|------|----------|
| 1 | **cartTotal behaves as specified** | 30 | 28 | `src/cart.js`: worked example returns `467400` as a number (line 22: `Math.round()`). Empty cart → `0` (lines 3–5). Negative price → `RangeError` (lines 9–11). Non-positive-integer qty → `RangeError` (lines 12–14). Free shipping at threshold with `>=` (line 20). All 8 tests pass. |
| 2 | **Tests** | 20 | 18 | `test/cart.test.js`: 8 tests — slides example, empty cart, negative price, non-integer qty, zero qty, negative qty, free-shipping threshold, rounding. Each test asserts one thing. `npm test` passes. |
| 3 | **The harness** | 20 | 16 | `.agents/AGENTS.md`: rules file with stack, commands, 4 "never" rules. `eslint.config.js`: ESLint 9 flat config. `npm run gate` = test + lint. `.github/workflows/ci.yml` present but CI not yet verified green on remote. |
| 4 | **The brief** | 15 | 14 | `BRIEF.md`: names 2 files to edit, full contract (7 rules), all error cases, constraints ("no dependencies", "no toFixed"), worked example. A stranger could follow it. |
| 5 | **AI-LOG.md** | 15 | 13 | `AI-LOG.md`: names tool, lists starter state vs AI output, what was changed/rejected (wrong self-assessment criteria), what was verified by hand (6 checks). Matches the diff. |

**What I did not manage:**
- CI not verified green on a remote GitHub repo yet — scored criterion 3 at 16 instead of 18+.
- No formatter (Prettier) alongside ESLint.

**Total: 89/100**
