# Brief — cartTotal implementation

## Goal
Implement the function `cartTotal(items, options)` in `src/cart.js`.
Write tests in `test/cart.test.js`.
You may **not** touch any other file or add any runtime dependency.

## Files you may edit
- `src/cart.js` — the implementation (export `cartTotal`)
- `test/cart.test.js` — tests using `node:test` and `node:assert/strict`

## Function signature
```js
export function cartTotal(items, options)
```

### Parameters
- `items` — `Array<{ name: string, price: number, qty: number }>`
- `options` — `{ vatRate: number, freeShipFrom: number, shipFee: number }`

### Return value
A **number** (not a string), rounded to the nearest whole đồng using `Math.round`.

## Contract (business rules)
1. **Subtotal** = sum of `price × qty` for every item.
2. **VAT** = `subtotal × vatRate`.
3. **Shipping** = `0` when `subtotal >= freeShipFrom`; otherwise `shipFee`.
4. **Total** = `Math.round(subtotal + VAT + shipping)`.
5. **Empty cart** (`items` is `[]`) → return `0`. No VAT, no shipping.
6. **Negative price** (`price < 0`) → throw `RangeError`.
7. **Invalid quantity** (`qty` is not a positive integer) → throw `RangeError`.
   - `qty = 0`, `qty = -1`, `qty = 1.5` are all invalid.

## Worked example
| Item    | Price   | Qty | Line total |
|---------|---------|-----|------------|
| Áo thun | 180 000 | 2   | 360 000    |
| Sổ tay  | 45 000  | 1   | 45 000     |

- Subtotal = 405 000
- VAT = 405 000 × 0.08 = 32 400
- Shipping = 30 000 (405 000 < 500 000 threshold)
- **Total = 467 400**

## Constraints
- **No dependencies** — no `lodash`, no `decimal.js`, nothing. Plain JavaScript only.
- **No `toFixed()`** — it returns a string, not a number.
- Use `Math.round()` for rounding.
- The function must be an ES module export (`export function`).

## Tests to write
Cover at minimum:
1. The worked example → `467400`
2. Empty cart → `0`
3. Negative price → `RangeError`
4. Non-integer quantity (e.g. `1.5`) → `RangeError`
5. Zero quantity → `RangeError`
6. Negative quantity → `RangeError`
7. Subtotal exactly at free-shipping threshold → shipping is `0`
8. A case where `Math.round` matters (fractional total)

Each test should assert **one thing** so it can fail for exactly **one reason**.
