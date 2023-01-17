// EXEMPLO 4: Cláusula de guarda para testes
function example4_1({divided, divisive}) {
  if(divided == null) {
    throw new Error('Divided value can\'t be null.');
  }

  if(divisive == null) {
    throw new Error('Divisive value can\'t be null.');
  }

  if(divisive == 0) {
    throw new Error('Divisive value can\'t be zero.');
  }

  return divided / divisive;
}

console.log(example4_1({divided: 10, divisive: 2}));

module.exports = {
  example4_1
};