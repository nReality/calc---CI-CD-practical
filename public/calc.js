/* eslint-disable no-unused-vars */
let plus;
let minus;

function calc(a, b, operator) {
  if (operator === '+') {
    return a + b;
  }
  return NaN;
}

function initialize() {
  [plus, minus] = document.calc.operator.options;
}
function calculate() {
  const a = parseInt(document.calc.val1.value, 10);
  const b = parseInt(document.calc.val2.value, 10);
  let operator = '';
  if (plus.selected) {
    operator = '+';
  }

  document.calc.answer.value = calc(a, b, operator);
}

module.exports = calc;
