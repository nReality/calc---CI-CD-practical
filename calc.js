var plus;
var minus;
const testVariable = 'Test';

function initialize() {
  plus = document.calc.operator.options[0];
  minus = document.calc.operator.options[1];
}
function calculate() {
  a = parseInt(document.calc.val1.value);
  b = parseInt(document.calc.val2.value);
  if (plus.selected) {
    document.calc.answer.value = a + b;
  }
  if (minus.selected) {
    document.calc.answer.value = a - b;
  }
}

function calc(a, b) {
  console.log(`${a} ${b}`);
  return 3;
}
module.exports = calc;
