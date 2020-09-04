const Driver = require('./driver');

describe('Driver class', () => {
  const testDriver = new Driver('Steve');
  it('Creates a new Driver', () => {
    expect(testDriver).toEqual({
      name: 'Steve'
    });
  });
});
