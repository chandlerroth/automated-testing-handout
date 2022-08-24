const { sum } = require('./index.js');

describe('sum', () => {
  it('should equal "3" when arguments are "1, 2"', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
