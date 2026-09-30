import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('empty cart returns 0', () => {
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal([], options), 0)
})

test('negative price throws RangeError', () => {
  const items = [{ name: 'Bad', price: -100, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('non-integer quantity throws RangeError', () => {
  const items = [{ name: 'Bad', price: 100, qty: 1.5 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('zero quantity throws RangeError', () => {
  const items = [{ name: 'Bad', price: 100, qty: 0 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('negative quantity throws RangeError', () => {
  const items = [{ name: 'Bad', price: 100, qty: -2 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('free shipping when subtotal >= freeShipFrom', () => {
  const items = [{ name: 'Laptop', price: 500000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  // subtotal 500000 + VAT 40000 + shipping 0 = 540000
  assert.equal(cartTotal(items, options), 540000)
})

test('result is rounded to the whole đồng', () => {
  const items = [{ name: 'Widget', price: 33333, qty: 1 }]
  const options = { vatRate: 0.07, freeShipFrom: 500000, shipFee: 15000 }
  // subtotal 33333, VAT 33333*0.07 = 2333.31, shipping 15000
  // total = 33333 + 2333.31 + 15000 = 50666.31 → rounds to 50666
  assert.equal(cartTotal(items, options), 50666)
})

