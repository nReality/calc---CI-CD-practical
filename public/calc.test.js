/* eslint-disable no-undef */
const calc = require('./calc.js');

// adding two numbers should give the sum
// given(precondition/input) 1 and 2 when(action) ADD then(postcondition vs expectation) get 3

test('adding two numbers should give the sum', () => {
  // given
  const firstNumber = 1;
  const secondNumber = 2;

  // when
  const result = calc(firstNumber, secondNumber, '+');

  // then
  expect(result).toBe(3);
});

test('subtracting two number should give the difference', () => {
  // given
  const firstNumber = 5;
  const secondNumber = 3;

  // when
  const result = calc(firstNumber, secondNumber, '-');

  // then
  expect(result).toBe(2);
});
