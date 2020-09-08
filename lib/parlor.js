class Parlor {
    name;
    orders = [];
    drivers = [];

    constructor(name) {
      this.name = name;  
      this.orders = [];
      this.drivers = [];
    }

    #clearDriversSchedule() {
      this.drivers
        .forEach(driver => driver.currentSchedule.clear());
    }
  
    #sortOrders() {
      return this.orders
        .sort((a, b) => a.deliveryMinute - b.deliveryMinute);
    }

    #calculateSchedule() {
      this.#clearDriversSchedule();

      this.#sortOrders()
        .forEach(order => {
          for(let i = 0; i < this.drivers.length; i++) {
            const driverSchedule = this.drivers[i].currentSchedule;
            if(driverSchedule.freeWindow(order.startMinute, order.deliveryMinute)) {
              driverSchedule.addOrder(order);
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
      this.drivers
        .forEach(driver => {
          driver.currentSchedule.print();
        });
    }
}

module.exports = Parlor;
