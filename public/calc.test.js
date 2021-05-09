/* eslint-disable no-undef */
const calc = require('./calc.js');

test('calc should add two numbers given plus operator', () => {
  const result = calc(1, 2, '+');
  expect(result).toBe(3);
});
