export const cart = [
 {
  productId: '4567de',
  quantity: 2,
 },
 {
  productId: '1234ab',
  quantity: 1,
 },
];

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
