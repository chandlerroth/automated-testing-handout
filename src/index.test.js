const { add } = require('./index.js');

describe('add', () => {
  it('should equal "3" when arguments are "1, 2"', () => {
    expect(add(1, 2)).toBe(3);
  });
});
