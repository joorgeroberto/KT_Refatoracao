const orders = require('../utils/orders.json');

// EXEMPLO 1: Extrair variável
function example1(order) {
  // preço igual ao preço base - desconto por
  // quantidade (quantity discount) + frete (shipping)
  return order.quantity * order.itemPrice - 
  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 + 
  Math.min(order.quantity * order.itemPrice * 0.1, 100);
}

console.log(example1(orders[0]));

module.exports = {
  example1
};