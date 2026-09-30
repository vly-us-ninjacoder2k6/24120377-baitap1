// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  // Empty cart → 0 (no VAT, no shipping)
  if (!items || items.length === 0) {
    return 0;
  }

  // Validate each item and compute subtotal
  let subtotal = 0;
  for (const item of items) {
    if (item.price < 0) {
      throw new RangeError(`Negative price: ${item.price}`);
    }
    if (!Number.isInteger(item.qty) || item.qty <= 0) {
      throw new RangeError(`Invalid quantity: ${item.qty}`);
    }
    subtotal += item.price * item.qty;
  }

  // VAT
  const vat = subtotal * options.vatRate;

  // Shipping: free when subtotal reaches the threshold
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee;

  // Total, rounded to the whole đồng
  return Math.round(subtotal + vat + shipping);
}
