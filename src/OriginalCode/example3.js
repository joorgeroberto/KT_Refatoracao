const moment = require('moment');
const plans = require('../utils/plans.json');

// EXEMPLO 3: Decompor Condicional
function example3(plan, date, quantity) {
  let charge;
  // Calcula o valor cobrado de um plano que tem diferentes preços no verão e em outras estações do ano.
  if (!moment(date).isBefore(plan.summerStart) && !moment(date).isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
  else
    charge = quantity * plan.regularRate + plan.regularServiceCharge;

  return charge;
}

const plan = plans[0];
const date = '2023-01-13T17:09:58.135Z';
const quantity = 5;

console.log(example3(plan, date, quantity));

module.exports = {
  example3
};