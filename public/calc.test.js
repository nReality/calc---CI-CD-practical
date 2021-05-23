/* eslint-disable no-undef */
const { Assertion } = require('chai');
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

test('subtracting two numbers should give the difference', () => {
  // given
  const firstNumber = 5;
  const secondNumber = 3;
  set up database 
  //nockjs: set up external services

  // when
  const result = calc(firstNumber, secondNumber, '-');

  // then
  expect(result).toBe(2);
});

test('multiply two numbers should give the product', () => {
  // given
  const firstNumber = 5;
  const secondNumber = 3;

  // when
  const result = calc(firstNumber, secondNumber, '*');

  // then
  expect(result).toBe(15);
});