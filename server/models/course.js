const Section = require("./section").Section;
const MeetingTime = require("./meetingTime").MeetingTime;

class Course {
  constructor(code = "", name = "", sections = []) {
    this.code = code;
    this.name = name;
    this.sections = sections;
  }

  initializeFromJSON(courseJSON) {
    this.code = courseJSON["code"];
    this.name = courseJSON["name"];
    this.sections = courseJSON["sections"].map(function(x) {
      var section = new Section();
      section.initializeFromJSON(x);
      return section;
    });
  }

  toJSON() {
    return {
      code: this.code,
      name: this.name,
      sections: this.sections.map(x => x.toJSON())
    };
  }
}

let c = {
  code: "MAD4401",
  name: "Introduction to Numerical Analysis",
  termInd: " ",
  cNote: "",
  sections: [
    {
      number: "184G",
      display: "184G",
      credits: "3",
      note: "",
      dNote: "",
      genEd: [],
      sectWeb: "C",
      rotateTitle: "",
      deptCode: "011613000",
      deptName: "MATHEMATICS",
      finalExam: " 3A",
      grWriting: "",
      courseFee: "0",
      EEP: "Y",
      LMS: "",
      instructors: [
        {
          name: "Keesling,James E"
        }
      ],
      meetTimes: [
        {
          meetNo: "1",
          meetDays: ["M", "W", "F"],
          meetTimeBegin: "12:50 PM",
          meetTimeEnd: "1:40 PM",
          meetPeriodBegin: "6",
          meetPeriodEnd: "6",
          meetBuilding: "LIT",
          meetBldgCode: "0655",
          meetRoom: "0221 "
        }
      ]
    },
    {
      number: "23C8",
      display: "Department Controlled",
      credits: "3",
      note: "",
      dNote: "",
      genEd: [],
      sectWeb: "C",
      rotateTitle: "",
      deptCode: "011613000",
      deptName: "MATHEMATICS",
      finalExam: " 2D",
      grWriting: "",
      courseFee: "0",
      EEP: "Y",
      LMS: "",
      instructors: [],
      meetTimes: [
        {
          meetNo: "1",
          meetDays: ["M", "W", "F"],
          meetTimeBegin: "3:00 PM",
          meetTimeEnd: "3:50 PM",
          meetPeriodBegin: "8",
          meetPeriodEnd: "8",
          meetBuilding: "LIT",
          meetBldgCode: "0655",
          meetRoom: "0219 "
        }
      ]
    },
    {
      number: "3132",
      display: "3132",
      credits: "3",
      note: "",
      dNote: "",
      genEd: [],
      sectWeb: "C",
      rotateTitle: "",
      deptCode: "011613000",
      deptName: "MATHEMATICS",
      finalExam: " 2B",
      grWriting: "",
      courseFee: "0",
      EEP: "Y",
      LMS: "",
      instructors: [
        {
          name: "Edwards,Bruce H"
        }
      ],
      meetTimes: [
        {
          meetNo: "1",
          meetDays: ["M", "W", "F"],
          meetTimeBegin: "11:45 AM",
          meetTimeEnd: "12:35 PM",
          meetPeriodBegin: "5",
          meetPeriodEnd: "5",
          meetBuilding: "LIT",
          meetBldgCode: "0655",
          meetRoom: "0219 "
        }
      ]
    },
    {
      number: "4815",
      display: "4815",
      credits: "3",
      note: "",
      dNote: "",
      genEd: [],
      sectWeb: "C",
      rotateTitle: "",
      deptCode: "011613000",
      deptName: "MATHEMATICS",
      finalExam: "30A",
      grWriting: "",
      courseFee: "0",
      EEP: "Y",
      LMS: "",
      instructors: [
        {
          name: "Edwards,Bruce H"
        }
      ],
      meetTimes: [
        {
          meetNo: "1",
          meetDays: ["M", "W", "F"],
          meetTimeBegin: "1:55 PM",
          meetTimeEnd: "2:45 PM",
          meetPeriodBegin: "7",
          meetPeriodEnd: "7",
          meetBuilding: "LIT",
          meetBldgCode: "0655",
          meetRoom: "0239 "
        }
      ]
    }
  ]
};

var course = new Course();
course.initializeFromJSON(c);
course.sections.map(section => console.log(section));
