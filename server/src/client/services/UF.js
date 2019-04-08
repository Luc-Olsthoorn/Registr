const periods = ["1","2","3","4","5","6","7","8","9","10","11","E1","E2","E3"];
export{ periods };
const periodTimesNormal = {
  semesters: ["2198"],
  "1":"7:25 - 8:15",
  "2":"8:30  - 9:20 ",
  "3":"9:35  - 10:25 ",
  "4":"10:40  - 11:30 ",
  "5":"11:45  - 12:35 ",
  "6":"12:50  - 1:40 ",
  "7":"1:55  - 2:45 ",
  "8":"3:00  - 3:50 ",
  "9":"4:05  - 4:55 ",
  "10":"5:10  - 6:00 ",
  "11":"6:15  - 7:05 ",
  "E1":"7:20  - 8:10 ",
  "E2":"8:20  - 9:10 ",
  "E3":"9:20  - 10:10 "
};
export{ periodTimesNormal };
const periodTimesSummer = {
semesters: ["21956W1", "21956W1", "21956W2", "21951", "2195"],
"1": "8:00  - 9:15 ",
"2" :"9:30  - 10:45 ",
"3": "11:00  - 12:15 ",
"4": "12:30  - 1:45 ",
"5": "2:00  - 3:15 ",
"6": "3:30  - 4:45 ",
"7": "5:00  - 6:15 ",
"E1": "7:00  - 8:15 ",
"E2": "8:30  - 9:45 "
};
export{ periodTimesSummer };
const days = [
      "M",
      "T",
      "W",
      "R",
      "F"
    ]; 
export {days};
const colorArray = [
      "#e91e63",
      "#9c27b0",
      "#3f51b5",
      "#00bcd4",
      "#4caf50",
      "#ff9800"
    ];
const menu = {
      semester: {
        defaultVal: "2198",
        options : [
          {"val":"2198","name": "Fall 2019"},
          {"val":"21956W1","name":"Summer A 2019"},
          {"val":"21956W2", "name":"Summer B 2019"},
          {"val":"21951", "name":"Summer C 2019"},
          {"val":"2195", "name":"Summer 2019"}
        ]
      },
      categories:{
        defaultVal: "RES",
        options : [
          {"val":"RES","name":"Campus / Web / Special Program"},
          {"val":"UFO","name":"UF Online Program"},
          {"val":"IA","name":"Innovation Academy"},
          {"val":"HUR","name":"Puerto Rico/U.S. Virgin Islands"}
        ]
      }
    };
export {menu}
export {colorArray};
//Converts courses:
//To
/*
"1":{
              "M":{
                name:"Cop3502",
                color: "#e91e63"
              }
            },
            "2":{
              "M":{
                name:"Cop3502",
                color: "#e91e63"
              }
            },
            "4":{
              "M":{
                name:"Cop3502",
                color: "#e91e63"
              }
            }
          }    
*/
//Needs to be put in different file
class Indexer {
  constructor(rawJSON){
    this.arrayOfLengths = this.generateArrayOfLengths(rawJSON);
    this.indexes = this.arrayOfLengths.map(()=>0);
    this.arrayIndex = 0;
    this.finished = false;
  }
  generateArrayOfLengths(rawJSON){
    let lengthArrays =[];
    for(let i=0; i<rawJSON.length;i++){
      lengthArrays.push(rawJSON[i].length);
    }
    return lengthArrays;
  }
  getArrayIndex(){
    return this.arrayIndex;
  }
  getElementIndex(){
    return this.indexes[this.arrayIndex];
  }
  updateArrayIndexes(){
    if(this.arrayIndex<this.indexes.length-1){
      this.arrayIndex++;
    }else{
      this.arrayIndex=0;
      //increment element index. if element index is longer then arrayoflengths, incremnet next, 
      //if it goes to the top, it is finished.
      for(let i = this.indexes.length-1; i>=0; i--){
        //-1 for checking for addition ability 
        if(this.indexes[i] < this.arrayOfLengths[i] - 1){
          this.indexes[i]=this.indexes[i]+ 1;
          break;
        }else{
          this.indexes[i] = 0; 
          if(i==0){
            this.finished = true;
            break;
          }
        }
      }
    }
  }
  isFinished(){
    return this.finished;
  }
  isEndOfRow(){
    return (this.arrayIndex == this.arrayOfLengths.length-1)
  }
}
//dif file
const createCalendars=(courses)=>{
  let calendars=[];
  let indexer = new Indexer(courses);
  let tempCal = {};
  let counter = 1;
  while(!indexer.isFinished()){
    if(tempCal){
      let courseToAdd = courses[indexer.getArrayIndex()][indexer.getElementIndex()];
      tempCal = mergeCalender(tempCal, courseToAdd);
    }
    if(indexer.isEndOfRow()){
      //console.log(tempCal);
      if(tempCal){

        calendars.push({
          meetTimes:tempCal,
          number:counter
        });
        counter++;
      }
      tempCal = {};
    }
    indexer.updateArrayIndexes();
  }
  return calendars;
}
export {createCalendars};
//diff file
const mergeCalender=(calendar, newCourse)=>{
  //Copies current calendar to new calendar
  let newCal = {};
  let calendarKeys = Object.keys(calendar);

    for(let i=0; i<calendarKeys.length; i++){
      let currProperty = calendarKeys[i];
      if(currProperty == "web"){
        newCal["web"]=newCal["web"]||[];
        newCal["web"] = calendar[currProperty];
      }else{
        let currPropertyKeys = Object.keys(calendar[currProperty]);
        for(let j=0; j<currPropertyKeys.length; j++){
          let nestedProperty = currPropertyKeys[j];
          newCal[currProperty] = newCal[currProperty] || {};
          newCal[currProperty][nestedProperty] = calendar[currProperty][nestedProperty];
        }
      }
    }
  
  //Checks overlap
  if(newCourse["web"]){
    newCal["web"]=newCal["web"]||[];
    newCal["web"].push(newCourse["web"]);
  }else{
    let keys = Object.keys(newCourse);
    for(let i=0; i<keys.length; i++){
      let currProperty = keys[i];
      if(calendar[currProperty]){
        let currPropertyKeys = Object.keys(newCourse[currProperty]);
        for(let j=0; j<currPropertyKeys.length; j++){
          let nestedProperty = currPropertyKeys[j];
          if(calendar[currProperty][nestedProperty]){
            return false;
          }else{
            newCal[currProperty] = newCal[currProperty] || {};
            newCal[currProperty][nestedProperty] = newCourse[currProperty][nestedProperty];
          }
        }
      }else{
        newCal[currProperty] = newCourse[currProperty];
      }
    }
  }
  
  return newCal;
  //input is array of sections. 
}
//difff file
const filterCalendar=(calendar, filter)=>{
  let meetTimes = calendar.meetTimes;
  let keys = Object.keys(filter);
  for(let i=0; i<keys.length; i++){
    let currProperty = keys[i];
    if(meetTimes[currProperty]){
      if(filter["web"] && filter["web"]["web"]){
        return false;
      }
      let currPropertyKeys = Object.keys(filter[currProperty]);
      for(let j=0; j<currPropertyKeys.length; j++){
        let nestedProperty = currPropertyKeys[j];
        if(meetTimes[currProperty][nestedProperty]){
          if(filter[currProperty][nestedProperty]){
            return false;
          }
        }
      }
    }
  }
  return true;
}
export {filterCalendar};
const convertCourses=(input)=>{
  let newCourses = [];
  let courses = input.data[0].COURSES;
  let color = input.color;
  for(let a=0; a<courses.length; a++){
    let course = courses[a];
    let sections = course["sections"];
    for(let i=0; i< sections.length; i++){
      let section = sections[i];
      let newSection ={};
      //Remove duplicate teachers
      let tempMap = {};
      let instructors = [];
      for(let i=0;i<section.instructors.length; i++){
        if(!tempMap[section.instructors[i].name]){
          instructors.push(section.instructors[i]);
          tempMap[section.instructors[i].name] = true;
        }
      }
      //Web Course
      if(section.sectWeb == "AD"){
        let data ={
            name:course.code,
            classNumber:section.classNumber,
            color:color,
            periodLength:1,
            description:course.description,
            title: course.name,
            instructors: instructors
          }
        newCourses.push({web:data});
      }else{
      //In person course
        let meetTimes = section["meetTimes"];
        for(let j=0; j<meetTimes.length; j++){
          let meeting = meetTimes[j];
          let start = periods.indexOf(meeting["meetPeriodBegin"]);
          let end = periods.indexOf(meeting["meetPeriodEnd"]);
          for(let k = start; k<=end; k++){
            let period = periods[k];
            let periodLength = 0;
            if(k==start){
              periodLength = ((end-start)+1);
            }
            
            let data ={
              name:course.code,
              classNumber:section.classNumber,
              color:color,
              periodLength:periodLength,
              description:course.description,
              title: course.name,
              instructors: instructors
            }
            newSection[period] = newSection[period] || {};
            for(let m=0; m< meeting.meetDays.length; m++){
               newSection[period][meeting.meetDays[m]] = data;
            }
           
          }
        }
        newCourses.push(newSection);
      }
      
    }
  }
  console.log(newCourses);
  return newCourses;
}
export {convertCourses};

const exampleData = {
  "meetTimes": {
    "1": {
      "M": {
        "name": "CHM2045",
        "classNumber": 11091,
        "color": "#3f51b5",
        "periodLength": 1,
        "description": "The first semester of the CHM 2045/CHM 2045L and CHM 2046/CHM 2046L sequence. Stoichiometry, atomic and molecular structure, the states of matter, reaction rates and equilibria. A minimum grade of C is required to progress to CHM 2046. (P)",
        "title": "General Chemistry 1",
        "instructors": []
      },
      "W": {
        "name": "CHM2045",
        "classNumber": 11091,
        "color": "#3f51b5",
        "periodLength": 1,
        "description": "The first semester of the CHM 2045/CHM 2045L and CHM 2046/CHM 2046L sequence. Stoichiometry, atomic and molecular structure, the states of matter, reaction rates and equilibria. A minimum grade of C is required to progress to CHM 2046. (P)",
        "title": "General Chemistry 1",
        "instructors": []
      },
      "F": {
        "name": "CHM2045",
        "classNumber": 11091,
        "color": "#3f51b5",
        "periodLength": 1,
        "description": "The first semester of the CHM 2045/CHM 2045L and CHM 2046/CHM 2046L sequence. Stoichiometry, atomic and molecular structure, the states of matter, reaction rates and equilibria. A minimum grade of C is required to progress to CHM 2046. (P)",
        "title": "General Chemistry 1",
        "instructors": []
      }
    },
    "2": {
      "M": {
        "name": "COP3502",
        "classNumber": 13292,
        "color": "#e91e63",
        "periodLength": 1,
        "description": "First course of a two-semester introductory sequence for those planning further study in computer science, digital arts and sciences or computer engineering. Concepts of computer science and the process of computer programming, including object-oriented programming, procedural and data abstraction and program modularity.",
        "title": "Programming Fundamentals 1",
        "instructors": [
          {
            "name": "Philippa Brown"
          }
        ]
      },
      "W": {
        "name": "COP3502",
        "classNumber": 13292,
        "color": "#e91e63",
        "periodLength": 1,
        "description": "First course of a two-semester introductory sequence for those planning further study in computer science, digital arts and sciences or computer engineering. Concepts of computer science and the process of computer programming, including object-oriented programming, procedural and data abstraction and program modularity.",
        "title": "Programming Fundamentals 1",
        "instructors": [
          {
            "name": "Philippa Brown"
          }
        ]
      },
      "F": {
        "name": "COP3502",
        "classNumber": 13292,
        "color": "#e91e63",
        "periodLength": 1,
        "description": "First course of a two-semester introductory sequence for those planning further study in computer science, digital arts and sciences or computer engineering. Concepts of computer science and the process of computer programming, including object-oriented programming, procedural and data abstraction and program modularity.",
        "title": "Programming Fundamentals 1",
        "instructors": [
          {
            "name": "Philippa Brown"
          }
        ]
      },
      "T": {
        "name": "COP3502",
        "classNumber": 13292,
        "color": "#e91e63",
        "periodLength": 1,
        "description": "First course of a two-semester introductory sequence for those planning further study in computer science, digital arts and sciences or computer engineering. Concepts of computer science and the process of computer programming, including object-oriented programming, procedural and data abstraction and program modularity.",
        "title": "Programming Fundamentals 1",
        "instructors": [
          {
            "name": "Philippa Brown"
          }
        ]
      }
    },
    "3": {
      "T": {
        "name": "CHM2045",
        "classNumber": 11091,
        "color": "#3f51b5",
        "periodLength": 1,
        "description": "The first semester of the CHM 2045/CHM 2045L and CHM 2046/CHM 2046L sequence. Stoichiometry, atomic and molecular structure, the states of matter, reaction rates and equilibria. A minimum grade of C is required to progress to CHM 2046. (P)",
        "title": "General Chemistry 1",
        "instructors": []
      }
    },
    "5": {
      "R": {
        "name": "PHY2048L",
        "classNumber": 20585,
        "color": "#4caf50",
        "periodLength": 2,
        "description": "Laboratory experience for PHY 2048 illustrating the practical applications of Newtonian mechanics. (P)",
        "title": "Laboratory for Physics with Calculus 1",
        "instructors": [
          {
            "name": "Robert Deserio"
          },
          {
            "name": "Charles Parks"
          }
        ]
      }
    },
    "6": {
      "R": {
        "name": "PHY2048L",
        "classNumber": 20585,
        "color": "#4caf50",
        "periodLength": 0,
        "description": "Laboratory experience for PHY 2048 illustrating the practical applications of Newtonian mechanics. (P)",
        "title": "Laboratory for Physics with Calculus 1",
        "instructors": [
          {
            "name": "Robert Deserio"
          },
          {
            "name": "Charles Parks"
          }
        ]
      }
    },
    "8": {
      "T": {
        "name": "COP4600",
        "classNumber": 13074,
        "color": "#9c27b0",
        "periodLength": 2,
        "description": "Design and implementation of various components of a modern operating system, including I/O programming, interrupt handling, process and resource management, computer networks and distributed systems. (M)",
        "title": "Operating Systems",
        "instructors": [
          {
            "name": "Jeremiah Blanchard"
          }
        ]
      }
    },
    "9": {
      "T": {
        "name": "COP4600",
        "classNumber": 13074,
        "color": "#9c27b0",
        "periodLength": 0,
        "description": "Design and implementation of various components of a modern operating system, including I/O programming, interrupt handling, process and resource management, computer networks and distributed systems. (M)",
        "title": "Operating Systems",
        "instructors": [
          {
            "name": "Jeremiah Blanchard"
          }
        ]
      },
      "R": {
        "name": "COP4600",
        "classNumber": 13074,
        "color": "#9c27b0",
        "periodLength": 1,
        "description": "Design and implementation of various components of a modern operating system, including I/O programming, interrupt handling, process and resource management, computer networks and distributed systems. (M)",
        "title": "Operating Systems",
        "instructors": [
          {
            "name": "Jeremiah Blanchard"
          }
        ]
      }
    },
    "10": {
      "R": {
        "name": "COP4600",
        "classNumber": 13074,
        "color": "#9c27b0",
        "periodLength": 1,
        "description": "Design and implementation of various components of a modern operating system, including I/O programming, interrupt handling, process and resource management, computer networks and distributed systems. (M)",
        "title": "Operating Systems",
        "instructors": [
          {
            "name": "Jeremiah Blanchard"
          }
        ]
      }
    }
  },
  "number": 30
}
export{exampleData};