/* eslint-disable no-undef */
const calc = require('./calc.js');

test('my first tests', () => {
  expect(calc(1, 2)).toBe(3);
});