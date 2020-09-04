const Schedule = require('./schedule');
const Order = require('./order');

describe('Schedule class', () => {
  it('finds the first unscheduled minute using the nextOpenMinute method', () => {
    const testSchedule = new Schedule();

    const openMinute = testSchedule.nextOpenMinute();

    expect(openMinute).toEqual(0);
  });

  it('should add a new order to the schedule using the addOrder method', () => {
    const testSchedule = new Schedule();
    const testOrder = new Order('Steve', 20, 20);

    testSchedule.addOrder(testOrder.startMinute, testOrder.deliveryMinute);

    const openMinute = testSchedule.nextOpenMinute();

    expect(openMinute).toEqual(20);
  });

  it('should should make all schedule items false with the clear method', () => {
    const testSchedule = new Schedule();
    const testOrder = new Order('Steve', 20, 20);

    testSchedule.addOrder(testOrder.startMinute, testOrder.deliveryMinute);

    testSchedule.clear();

    const openMinute = testSchedule.nextOpenMinute();

    expect(openMinute).toEqual(0);
  });

  it('should print out a readable schedule using the print method', () => {
    const testSchedule = new Schedule();
    const testOrder = new Order('Steve', 20, 20);

    testSchedule.addOrder(testOrder.startMinute, testOrder.deliveryMinute);

    const driverSchedule = testSchedule.print();

    expect(driverSchedule).toEqual('You are handling orders at these times 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19');
  });
});
