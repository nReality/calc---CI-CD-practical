/* eslint-disable no-unused-vars */
let plus;
let minus;

function initialize() {
  [plus, minus] = document.calc.operator.options;
}

function calc(a, b, operator) {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  if (operator === '*') {
    return a * b;
  }
  return NaN;
}

function calculate() {
  // integration
  const a = parseInt(document.calc.val1.value, 10);
  const b = parseInt(document.calc.val2.value, 10);

  let operator = '';
  if (plus.selected) {
    operator = '+';
  }
  if (minus.selected) {
    operator = '-';
  }

  // logic
  const result = calc(a, b, operator);

  // integration
  document.calc.answer.value = result;
}

try {
  module.exports = calc;
} catch (err) {
  console.log(err);
}
