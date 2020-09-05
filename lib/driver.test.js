const Driver = require('./driver');

describe('Driver class', () => {
  const testDriver = new Driver('Steve');
  it('Creates a new driver', () => {
    expect(testDriver.name).toEqual('Steve');
  });
});
  
