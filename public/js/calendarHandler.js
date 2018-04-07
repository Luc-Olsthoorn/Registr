import "jquery-ui";
import { $ } from "jquery";

import convertToNum from "./utils";
import Course from "./course";
import calendar from "./calendar";

export class calendarHandler {
  constructor(divToBindTo) {
    this.divToBindTo = divToBindTo;
    this.calendars = [];
    this.currCal = 0; //keeps track of the last calendar to be loaded
  }
  addCalendars(courses, permutation) {
    this.permutation = permutation;
    this.courses = courses;
    this.addLoadMoreButton();
    this.loadMoreContent();
    this.addNumberOfOptionsGenerated();
    if (this.currCal < this.permutation.length) {
      this.divToBindTo.append(this.loadMoreBtn);
    }
    this.addAutoScroll();
  }
  addAutoScroll() {
    var self = this;
    this.divToBindTo.visibility({
      once: false,
      observeChanges: true,
      onBottomVisible: function() {
        self.loadMoreBtn.detach();
        self.loadMoreContent(self);
        if (self.currCal < self.permutation.length) {
          self.divToBindTo.append(self.loadMoreBtn);
        }
      }
    });
  }
  deleteAll() {
    this.divToBindTo.visibility("disable callbacks");
    this.divToBindTo.empty();
    for (var i = 0; i < this.calendars.length; i++) {
      this.calendars[i].deleteMe();
    }
    this.calendars = [];
    this.currCal = 0;
  }
  addNumberOfOptionsGenerated() {
    this.divToBindTo.prepend(
      `<h3>${this.permutation.length} options generated</h3>`
    );
  }
  addLoadMoreButton() {
    var self = this;
    self.loadMoreBtn = $(`
				<div style="
    			text-align: center;
    			padding-bottom: 20px;
				"></div>
				
			`);
    var innerHTML = $(
      `<button class="ui white basic button">Load more</button>`
    );
    self.loadMoreBtn.append(innerHTML);
    innerHTML.on("click", function() {
      self.loadMoreBtn.detach();
      self.loadMoreContent(self);
      if (self.currCal < self.permutation.length) {
        self.divToBindTo.append(self.loadMoreBtn);
      }
    });
  }

  loadMoreContent() {
    var self = this;
    //console.log("adding more");
    //Adds all courses up to 10
    var amountToAdd = 10;
    for (
      var i = 0;
      i < amountToAdd && self.currCal < self.permutation.length;
      i++, self.currCal++
    ) {
      var calendary = new calendar(self.divToBindTo, self.currCal);
      calendary.addBaseHtml();
      //Adds all sections of a course
      for (var j = 0; j < self.permutation[i].length; j++) {
        //adds to calendar the section based on the permutation
        var course = self.permutation[i][j].course;
        var section = self.permutation[i][j].section;
        calendary.addSection({
          sectionMeetTimes: self.courses[course].getSectionTimes(section),
          section: self.courses[course].getSectionNumber(section),
          color: self.courses[course].getColor(),
          code: self.courses[course].getCourseCode(),
          name: self.courses[course].getCourseName(),
          deptName: self.courses[course].getDeptName(section),
          credits: self.courses[course].getCredits(section),
          sectWeb: self.courses[course].getIsWeb(section),
          classNum: self.courses[course].getClassNum(section),
          instructor: self.courses[course].getInstructor(section),
          description: self.courses[course].getDescription(section),
          courseFee: self.courses[course].getCourseFee(section)
        });
      }

      self.calendars.push(calendary);
    }
  }
}
