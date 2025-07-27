export const cart = [];

export function addToCart(productId) {
 const existingItem = cart.find((cartItem) => cartItem.productId === productId);
 if (existingItem) {
  existingItem.quantity += 1;
 } else {
  cart.push({
   productId,
   quantity: 1,
  });
 }
}
