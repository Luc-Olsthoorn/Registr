export class Course {
  setRawJSON(input) {
    console.log(input);
    this.rawJSON = input;
    this.sectionArray = this.rawJSON[0].COURSES[0].sections;
  }
  getClassNum(i) {
    return this.sectionArray[i].classNumber;
  }
  getInstructor(i) {
    if (this.sectionArray[i].instructors.length != 0) {
      return this.sectionArray[i].instructors[0].name;
    } else {
      return "";
    }
  }
  getDescription() {
    return this.rawJSON[0].COURSES[0].description;
  }
  getSectionTimes(i) {
    return this.sectionArray[i].meetTimes;
  }
  getSectionNumber(i) {
    return this.sectionArray[i].number;
  }
  getNumSections() {
    return this.sectionArray.length;
  }
  getCourseName() {
    return this.rawJSON[0].COURSES[0].name;
  }
  getCourseCode() {
    return this.rawJSON[0].COURSES[0].code;
  }
  getDeptName(i) {
    return this.sectionArray[i].deptName;
  }
  getCredits(i) {
    return this.sectionArray[i].credits;
  }
  getCourseFee(i) {
    return this.sectionArray[i].courseFee;
  }
  getRawJSON() {
    return this.rawJSON;
  }
  getIsWeb(i) {
    return this.sectionArray[i].meetTimes.length == 0;
  }
  addColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}
