class Schedule {
    #schedule = [...Array(480)].fill(false);

    nextOpenMinute() {
      return this.#schedule.findIndex((index) => index === false);
    }

    addOrder(startMinute, deliveryMinute) {
      const minutesNeeded = deliveryMinute - startMinute;
      for(let i = 0; i < minutesNeeded; i++) {
        this.#schedule[i + startMinute] = true;
      }
    }

    clear() {
      this.#schedule = [...Array(480)].fill(false);
    }

    print() {
      const driverSchedule = [];
      this.#schedule.map((minute, index) => {
        if(minute === true) {
          driverSchedule.push(index);
        }
      });
      return `You are handling orders at these times ${driverSchedule}`; 
    }
}

module.exports = Schedule;
