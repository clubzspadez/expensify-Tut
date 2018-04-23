const greeting = (name) => `Hello ${name}`;

test('should return greeting', () => {
  const result = greeting('Jonathan');

  expect(result).toBe('Hello Jonathan');
});