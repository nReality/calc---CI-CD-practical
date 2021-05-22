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
  return NaN;
}

function calculate() {
  const a = parseInt(document.calc.val1.value, 10);
  const b = parseInt(document.calc.val2.value, 10);
  if (plus.selected) {
    document.calc.answer.value = calc(a, b, '+');
  }
  if (minus.selected) {
    document.calc.answer.value = calc(a, b, '-');
  }
}

module.exports = calc;