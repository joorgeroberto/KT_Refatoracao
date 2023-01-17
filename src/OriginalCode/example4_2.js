// EXEMPLO 4_2: Cláusula de Guarda
// Calcula o preco de um sorvete de acordo com as opções.
// Somente sorvetes premium podem ter casquinha.
// Apenas sorvetes de casquinha podem ter cobertura extra.
function example4_2({premium, cone, toppings}) {
  let price = 0;
  if(premium) {
    price = 20;
    if(cone) {
      price = price + 2;
      if(toppings > 1) {
        price = price + 2;
      } else {
        price = price + 1;
      }
    } else {
      price = price + 1;
    }
  } else {
    price = 15 + 1 + 1;
  }

  return price;
}

console.log(example4_2({premium: true, cone: false, toppings: 2}));

module.exports = {
  example4_2
};