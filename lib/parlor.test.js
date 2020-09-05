const Parlor = require('./parlor');
const Driver = require('./driver');
const Order = require('./order');

describe('Parlor class', () => {
  it('adds orders and drivers to the parlor, then calculates the schedule', () => {
    const testParlor = new Parlor;

    testParlor.addDriver(new Driver('Steve'));
    testParlor.addDriver(new Driver('Eve'));
    testParlor.addOrder(new Order('Bill', 100, 20));
    testParlor.addOrder(new Order('Jill', 100, 20));

    testParlor.printSchedule();
  });
});
