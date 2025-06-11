const { CariTandaBilangan } = require('./script.js');

test('returns "Negatif" for negative numbers', () => {
  expect(CariTandaBilangan(-5)).toBe("Negatif");
});

test('returns "Positif" for positive numbers', () => {
  expect(CariTandaBilangan(5)).toBe("Positif");
});

test('returns "Nol" for zero', () => {
  expect(CariTandaBilangan(0)).toBe("Nol");
});
