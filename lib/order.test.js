const Order = require("./order");

describe('Order class', () => {
  const testOrder = new Order('Steve', 100, 20);
  it('Creates a new order', () => {
    expect(testOrder).toEqual({
      name: 'Steve',
      deliveryMinute: 100,
      startMinute: 60
    });
  });
});
