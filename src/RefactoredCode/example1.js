const orders = require('../utils/orders.json');

// EXEMPLO 1: Extrair variável
function example1(order) {
  // preço igual ao preço base - desconto por
  // quantidade (quantity discount) + frete (shipping)
  let basePrice = order.quantity * order.itemPrice;
  let quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  let shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  
  return basePrice - quantityDiscount + shipping;
}

console.log(example1(orders[0]));

module.exports = {
  example1
};