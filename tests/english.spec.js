//math2.spec.js

const math = require('../src/math');
const { test, expect } = require('@playwright/test');

test.describe('Math', () => {
  test('add 2', () => {
    expect(math.add(2, 3)).toBe(5);
  });

  test('sub 2', () => {
    expect(math.subtract(5, 3)).toBe(3);
    });
  test('Test with steps', async () => {
    await test.step('Step 1', async () => {
      expect(true).toBe(true);
    });
     await test.step('Step 2', async () => {
      expect(true).toBe(true);
    });
    expect(true).toBe(true);
  });  
});