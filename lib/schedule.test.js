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

    testSchedule.addOrder(testOrder);

    expect(testSchedule.nextOpenMinute()).toEqual(21);
  });

  it('should should make all schedule items false with the clear method', () => {
    const testSchedule = new Schedule();
    const testOrder = new Order('Steve', 20, 20);

    testSchedule.addOrder(testOrder.startMinute, testOrder.deliveryMinute);
    testSchedule.clear();

    const openMinute = testSchedule.nextOpenMinute();

    expect(openMinute).toEqual(0);
  });

  it('prints the schedule', () => {
    console.table = jest.fn();
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    schedule.print();

    expect(console.table).toHaveBeenCalledWith([
      { start: 0, end: 40, status: 'busy' },
      { start: 41, end: 1439, status: 'free' }
    ]);
  });

  it('adds an order to the schedule', () => {
    const schedule = new Schedule();
    const order = new Order('pizza order', 40, 20);
    schedule.addOrder(order);

    expect(schedule.freeWindow(0, 41)).toBeFalsy();
    expect(schedule.freeWindow(41, 50)).toBeTruthy();
  });
});

