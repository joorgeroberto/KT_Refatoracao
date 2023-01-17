// EXEMPLO 4: Cláusula de guarda para testes
function example4_1({divided, divisive}) {
  if(divided != null) {
    if(divisive != null) {
      if(divisive != 0) {
        return divided / divisive;
      }
    }
  }
  // Código ruim de testar pois o erro é genérico para os três casos. 
 throw new Error('Math error!');
}

console.log(example4_1({divided: 10, divisive: 2}));

module.exports = {
  example4_1
};