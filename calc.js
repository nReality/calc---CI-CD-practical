/* eslint-disable no-unused-vars */
let plus;
let minus;

function initialize() {
  [plus, minus] = document.calc.operator.options;
}
function calculate() {
  a = parseInt(document.calc.val1.value, 10);
  b = parseInt(document.calc.val2.value, 10);
  if (plus.selected) {
    document.calc.answer.value = a + b;
  }
  if (minus.selected) {
    document.calc.answer.value = a - b;
  }
}

function calc(a, b, operation) {
  if (operation === '+') {
    return a + b;
  }
  return NaN;
}

module.exports = calc;
