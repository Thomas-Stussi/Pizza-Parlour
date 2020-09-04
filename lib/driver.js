const Schedule = require('./schedule');

class Driver {
    name;
    #currentSchedule;

    constructor(name) {
      this.name = name;
      this.#currentSchedule = new Schedule;
    }
}

module.exports = Driver;
