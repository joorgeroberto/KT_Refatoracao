const invoices = require('../utils/invoices.json');

// EXEMPLO 2: Extrair função
function example2(invoice) {
  let owing = '';
  let outstanding = 0;

  owing += '\n***********************';
  owing += '\n**** Customer Owes ****';
  owing += '\n***********************\n';

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  owing += `\nname: ${invoice.customer}`;
  owing += `\namount: ${outstanding}`;
  owing += `\ndue: ${invoice.dueDate.toLocaleDateString()}`;

  return owing;
}

console.log(example2(invoices[2]));

module.exports = {
  example2
};