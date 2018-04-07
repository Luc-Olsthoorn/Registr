var $ = require("jquery");

import SearchBox from "./search";

export default class searchHandler {
  constructor(divToBindTo) {
    this.divToBindTo = divToBindTo;
    this.searchBoxes = [];
    var self = this;
    this.addHtml();
    this.divToBindTo.append(this.accordion);
    console.log("test");
    this.addPossibleCoursesList();
  }
  addHtml() {
    this.accordion = $(`
			<div class="ui styled inverted fluid accordion active" style="background-color: RGBA(255, 255, 255, 0);
    			box-shadow: none;">
			  <div class="title active">
			    <i class="dropdown icon"></i>
			    Add courses
			  </div>

			 </div>
		    
		  `);
    var outer = $(`<div class="ui content active"></div>`);
    this.underTheFold = $(`<div class="ui cards two"></div>`);
    outer.append(this.underTheFold);
    this.accordion.append(outer);
    this.accordion.accordion();
  }
  addArtificialText(inputs) {
    for (var i = 0; i < this.searchBoxes.length; i++) {
      this.searchBoxes[i].deleteMe();
    }
    for (var i = 0; i < inputs.length; i++) {
      var x = this.newSearchBox(this.underTheFold, false);
      console.log(inputs[i]);
      x.artificialText(inputs[i]);
    }
    this.newSearchBox(this.getUnderTheFold(), true);
  }
  getUnderTheFold() {
    return this.underTheFold;
  }
  attachSearchBoxHandler(handler) {
    this.searchBoxHandler = handler;
  }
  addPossibleCoursesList() {
    var self = this;
    $.ajax({
      type: "GET",
      url: "/getAllPossibleCourses",
      success: function(data) {
        var temp = {};
        var output = [];
        for (var i = 0; i < data.length; i++) {
          if (!temp[data[i]]) {
            output.push({ title: data[i] });
            temp[data[i]] = true;
          }
        }

        self.possibleCoursesList = output;
        for (var i = 0; i < self.searchBoxes.length; i++) {
          self.searchBoxes[i].addAutoComplete(self.possibleCoursesList);
        }
      },
      error: function() {
        console.log(error);
      },
      contentType: "application/json"
    });
  }
  newSearchBox(divToBindTo, isAddMoreBox) {
    var self = this;
    if (isAddMoreBox) {
      var searchy = new SearchBox(divToBindTo, function() {
        self.newSearchBox(divToBindTo, true);
      });
    } else {
      var searchy = new SearchBox(divToBindTo);
    }

    var color = this.returnColor();
    searchy.addColor(color);
    if (this.possibleCoursesList) {
      searchy.addAutoComplete(self.possibleCoursesList);
    }

    this.searchBoxes.push(searchy);
    searchy.attachEnterPressHandler(function(inputText) {
      searchy.startLoad();
      searchy.addColor("#f44336");
      self.sendData({
        add: inputText,
        color: color,
        callback: function(result) {
          if (result.success) {
            searchy.addColor(color);
            searchy.endLoad();
            searchy.attachCoursePointer(result.success);
          }
          if (result.error == "doesNotExist") {
            searchy.addColor("#ffeb3b");
            searchy.endLoad();
            searchy.popup("Invalid Course Code");
          }
          if (result.error == "noSemesterSupport") {
            searchy.addColor("#ffeb3b");
            searchy.endLoad();
            searchy.popup("This semester does not support course numbers");
          }
          if (result.error == "length") {
            searchy.addColor("#ffeb3b");
            searchy.endLoad();
            searchy.popup("Invalid Length");
          }
          if (result.error == "serverNoResponse") {
            searchy.popup("Cannot connect to one.uf. Contact me pls");
            searchy.endLoad();
            searchy.addColor("#000000");
          }
        }
      });
    });
    searchy.attachDeleteHandler(function(course) {
      self.sendData({ deleteCourse: course });
    });
    return searchy;
  }
  attachColorGetter(callback) {
    this.returnColor = callback;
  }
  attachDataSend(callback) {
    this.sendData = callback;
  }
}
