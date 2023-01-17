const moment = require('moment');
const plans = require('../utils/plans.json');

// EXEMPLO 3: Decompor Condicional

function example3(plan, date, quantity) {
  const isSummer = !moment(date).isBefore(plan.summerStart) && !moment(date).isAfter(plan.summerEnd);
  function summerCharge() { return quantity * plan.summerRate; }
  function regularCharge() { return quantity * plan.regularRate + plan.regularServiceCharge; }
  
  let charge = isSummer ? summerCharge() : regularCharge();

  return charge;
}

const plan = plans[0];
const date = '2023-01-13T17:09:58.135Z';
const quantity = 5;

console.log(example3(plan, date, quantity));

module.exports = {
  example3
};