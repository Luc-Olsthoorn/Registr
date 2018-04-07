var $ = require("jquery");

import Course from "./course";

//Make get note server request
export default class courseHandler {
  constructor() {
    this.courses = [];
  }
  getCourses() {
    return this.courses;
  }
  deleteCourse(course) {
    for (var i = 0; i < this.courses.length; i++) {
      if (this.courses[i] == course) {
        this.courses.splice(i, 1);
        return;
      }
    }
  }
  addCourse(code, color, callback, settings) {
    var self = this;
    //Extract year and semester from the settings
    var category = settings.find(function(element) {
      return element.name == "Categories";
    });
    var semester = settings.find(function(element) {
      return element.name == "Semester";
    });
    serverGetRequest(category.val, semester.val, code, function(result) {
      //console.log(category.val);
      if (!result) {
        callback({ error: "serverNoResponse" });
      } else if (JSON.parse(result).error) {
        callback(JSON.parse(result));
      } else if (
        JSON.parse(result)[0].TOTALROWS != 0 &&
        JSON.parse(result)[0].TOTALROWS != null
      ) {
        //console.log(result);
        //not empty
        var coursey = new Course();
        coursey.setRawJSON(JSON.parse(result));
        coursey.addColor(color);
        self.courses.push(coursey);
        callback({ success: coursey });
      } else {
        //error
        callback({ error: "doesNotExist" });
      }
    });
  }
}
function serverGetRequest(category, semester, course, callback) {
  if (course == "") {
    callback(false);
  } else {
    $.ajax({
      type: "POST",
      url: "/getCourseInfo",
      data: JSON.stringify({
        course: course,
        category: category,
        semester: semester
      }),
      success: function(data) {
        callback(data);
      },
      error: function() {
        callback(false);
      },
      contentType: "application/json"
    });
  }
}
