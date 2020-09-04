class Schedule {
    #schedule = [...Array(480)].fill(false);

    nextOpenMinute() {
      return this.#schedule.findIndex((index) => index === false);
    }
}

module.exports = Schedule;
