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

    
}

module.exports = Schedule;
