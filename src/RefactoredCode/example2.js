const invoices = require('../utils/invoices.json');

// EXEMPLO 2: Extrair função
function getBanner() {
  let banner = '\n***********************';
  banner     += '\n**** Customer Owes ****';
  banner     += '\n***********************\n';

  return banner;
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }

  return result;
}

function recordDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function getDetails(invoice, outstanding) {
  let result = '';
  result += `\nname: ${invoice.customer}`;
  result += `\namount: ${outstanding}`;
  result += `\ndue: ${invoice.dueDate.toLocaleDateString()}`;

  return result;
}

function example2(invoice) {
  let owing = getBanner();
  let outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);

  owing += getDetails(invoice, outstanding);

  return owing;
}

console.log(example2(invoices[2]));

module.exports = {
  example2
};