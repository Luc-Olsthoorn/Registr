const MeetingTime = require("./meetingTime").MeetingTime;

module.exports.Section = class Section {
  constructor(
    id = "",
    credits = "",
    final = "",
    instructors = [],
    meetingTimes = []
  ) {
    this.id = id;
    this.credits = credits;
    this.final = final;
    this.instructors = instructors;
    this.meetingTimes = meetingTimes;
  }
  initializeFromJSON(sectionJSON) {
    this.id = sectionJSON["number"];
    this.credits = sectionJSON["credits"];
    this.final = sectionJSON["finalExam"];
    this.instructors = sectionJSON["instructors"].map(x => x["name"]);
    this.meetingTimes = sectionJSON["meetTimes"].map(function(x) {
      var meetingTime = new MeetingTime();
      meetingTime.initializeFromJSON(x);
      return meetingTime;
    });
  }

  toJSON() {
    return {
      id: this.id,
      credits: this.credits,
      final: this.final,
      instructors: this.instructors,
      meetingTimes: this.meetingTimes.map(x => x.toJSON())
    };
  }
};
