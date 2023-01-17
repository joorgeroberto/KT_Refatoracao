// EXEMPLO 4_2: Cláusula de Guarda
// Calcula o preco de um sorvete de acordo com as opções.
// Somente sorvetes premium podem ter casquinha.
// Apenas sorvetes de casquinha podem ter cobertura extra.
function example4_2({premium, cone, toppings}) {
  let price = 15 + 1 + 1;
  if(!premium) return price;

  price = 20 + 1;
  if(!cone) return price;

  price = 20 + 2;
  return toppings > 1 ? price + 2 : price + 1;
}

console.log(example4_2({premium: true, cone: false, toppings: 2}));

module.exports = {
  example4_2
};