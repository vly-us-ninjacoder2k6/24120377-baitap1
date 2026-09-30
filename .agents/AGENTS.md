# Project Rules — cart-starter

## Stack
- **Language:** Plain JavaScript (ES modules, `"type": "module"`)
- **Runtime:** Node.js ≥ 18
- **Test runner:** `node --test` (built-in, no framework)
- **Linter:** ESLint 9 (flat config)
- **Dependencies:** None for production code; ESLint is a dev-only dependency

## Commands
| Task | Command |
|------|---------|
| Run tests | `npm test` |
| Lint | `npx eslint .` |
| Gate (test + lint) | `npm run gate` |

## Rules
1. **Never** add runtime dependencies — `cartTotal` must work with zero `npm install`.
2. **Never** change the function signature `cartTotal(items, options)` — the grading script imports it.
3. **Never** use `toFixed()` — it returns a string, not a number. Use `Math.round()`.
4. **Never** commit with `npm test` or `npx eslint .` failing.
5. All source lives in `src/`; all tests live in `test/`.
6. Every test must assert **one** thing so it can fail for **one** reason.
7. Keep `cart.js` under 40 lines — it is a pure function, not a module.
