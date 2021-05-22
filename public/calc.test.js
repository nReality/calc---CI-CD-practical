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

// subtracting two number should give the difference
// given(precondition/input) 5 and 3 when(action) MINUS then(postcondition vs expectation) get 2