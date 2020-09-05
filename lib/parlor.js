class Parlor {
    name;
    orders = [];
    drivers = [];

    constructor(name) {
      this.name = name;  
      this.orders = [];
      this.drivers = [];
    }

    #calculateSchedule(orders, drivers) {
      orders.forEach((order) => {
        for(let i = 0; i < drivers.length; i++) {
          if(drivers[i].currentSchedule.freeWindow(order.startMinute, order. deliveryMinute)) {
            drivers[i].currentSchedule.addOrder(order.startMinute, order.deliveryMinute);
            break;
          }
        }
      });
    }

    addDriver(driver) {
      this.drivers.push(driver);
      this.#calculateSchedule(this.orders, this.drivers);
    }

    addOrder(order) {
      this.orders.push(order);
      this.#calculateSchedule(this.orders, this.drivers);
    }

    printSchedule() {
      this.drivers.forEach((driver) => {
        console.log(`Hello ${driver.name}, here is your schedule:`);
        driver.currentSchedule.print();
      });
    }
}

module.exports = Parlor;
