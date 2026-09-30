# AI-LOG

## Session 1 — 2026-09-30

### Tool used
Google Gemini (Antigravity IDE — Claude Opus model)

### What I asked (the brief)
See [`BRIEF.md`](BRIEF.md) for the full brief. Summary:
> Implement `cartTotal(items, options)` in `src/cart.js`. Plain JS, no deps.
> Subtotal + VAT + shipping, free shipping at threshold, empty cart → 0,
> negative price / non-integer qty → RangeError. Round with Math.round.
> Write tests in `test/cart.test.js` covering all edge cases.
> Do NOT use toFixed. Do NOT add dependencies.

### What the AI produced

#### `src/cart.js` — full implementation
- Empty-cart guard: `if (!items || items.length === 0) return 0`
- Validation loop: `price < 0` → RangeError, `!Number.isInteger(qty) || qty <= 0` → RangeError
- Subtotal via `for...of` accumulation
- VAT: `subtotal * options.vatRate`
- Shipping: ternary `subtotal >= freeShipFrom ? 0 : shipFee`
- Return: `Math.round(subtotal + vat + shipping)`

#### `test/cart.test.js` — 7 tests added (starter had 1)
1. Slides example → 467400
2. Empty cart → 0
3. Negative price → RangeError
4. Non-integer qty (1.5) → RangeError
5. Zero qty → RangeError
6. Negative qty → RangeError
7. Free shipping at threshold (subtotal = 500000) → 540000
8. Rounding test (fractional total) → 50666

#### Harness files
- `.agents/AGENTS.md` — rules file with stack, commands, 4 "never" rules
- `eslint.config.js` — ESLint 9 flat config (no-unused-vars, eqeqeq, prefer-const, etc.)
- `.github/workflows/ci.yml` — GitHub Actions running `npm run gate` on push
- `package.json` — added `lint` and `gate` scripts, ESLint devDependency

### What I reviewed and verified
- **Worked example by hand:** 2×180000 + 1×45000 = 405000, ×0.08 = 32400, +30000 = 467400 ✓
- **Edge cases:** qty=0, qty=-2, qty=1.5, price=-100 all throw RangeError ✓
- **Empty array** returns 0 with no VAT/shipping ✓
- **`Math.round`** is used (not `Math.floor`, `Math.ceil`, or `toFixed`) ✓
- **Free shipping** triggers when subtotal **equals** threshold (`>=`, not `>`) ✓
- **Return type** is `number`, not string ✓
- **ESLint config** uses flat config format (ESLint 9 compatible) ✓
- **CI workflow** triggers on push to main/master ✓

### What I changed or rejected
- The AI initially generated a `SELF_ASSESSMENT_REPORT.md` with 10 criteria that didn't match the actual rubric. I rejected it and asked for a rewrite using the correct 5-criterion rubric.
- No changes were needed to `src/cart.js` or the test logic — the implementation was correct on first generation.

### What I wrote by hand
- Verified each test assertion against the spec manually
- Reviewed the rubric and adjusted the self-assessment report to match the 5 official criteria
- Filled in the self-assessment scores and evidence
