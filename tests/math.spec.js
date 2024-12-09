//math.spec.js

const math = require('../src/math');
const { test, expect } = require('@playwright/test');

test.describe('Math module', () => {
  test('should correctly add two numbers', () => {
    expect(math.add(2, 3)).toBe(5);
  });

  test('should correctly subtract two numbers', () => {
    expect(math.subtract(5, 3)).toBe(3);
  });
});