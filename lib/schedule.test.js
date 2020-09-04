const Schedule = require('./schedule');

describe('Schedule class', () => {
  it('finds the first unscheduled minute using the nextOpenMinute method', () => {
    const testSchedule = new Schedule();

    const openMinute = testSchedule.nextOpenMinute();

    expect(openMinute).toEqual(0);
  });

  
});
