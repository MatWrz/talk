import sum from './main';

describe('should sum ints correctly', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect.hasAssertions();
    expect(sum(1, 2)).toBe(3);
  });
});
