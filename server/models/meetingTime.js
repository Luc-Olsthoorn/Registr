module.exports.MeetingTime = class MeetingTime {
  constructor(
    days = [],
    timeBegin = "",
    timeEnd = "",
    periodBegin = "",
    periodEnd = "",
    building = "",
    bldgCode = "",
    room = ""
  ) {
    this.days = days;
    this.timeBegin = timeBegin;
    this.timeEnd = timeEnd;
    this.periodBegin = periodBegin;
    this.periodEnd = periodEnd;
    this.building = building;
    this.bldgCode = bldgCode;
    this.room = room;
  }

  initializeFromJSON(meetingTimeJSON) {
    this.days = meetingTimeJSON["meetDays"];
    this.timeBegin = meetingTimeJSON["meetTimeBegin"];
    this.timeEnd = meetingTimeJSON["meetTimeEnd"];
    this.periodBegin = meetingTimeJSON["meetPeriodBegin"];
    this.periodEnd = meetingTimeJSON["meetPeriodEnd"];
    this.building = meetingTimeJSON["meetBuilding"];
    this.bldgCode = meetingTimeJSON["meetBldgCode"];
    this.room = meetingTimeJSON["meetRoom"];
  }

  toJSON() {
    return {
      days: this.days,
      timeBegin: this.timeBegin,
      timeEnd: this.timeBegin,
      periodBegin: this.periodBegin,
      periodEnd: this.periodEnd,
      building: this.building,
      bldgCode: this.bldgCode,
      room: this.room
    };
  }
};
