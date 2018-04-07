// Imports
import calendarHandler from "./calendarHandler";
import filterHandler from "./filterHandler";

import searchHandler from "./searchHandler";
import settingsHandler from "./settingsHandler";

import "jquery-ui";
var $ = require("jquery");
window.jQuery = $;

require("../../semantic/dist/semantic");

$(document).ready(function() {
  console.log("eskeddit");
  var main = new Main();
  $("body").css("background-color", "#2196f3");
  main.main();
});
class Main {
  constructor() {
    this.colorCounter = 0;
    this.colorArray = [
      "#e91e63",
      "#9c27b0",
      "#3f51b5",
      "#00bcd4",
      "#4caf50",
      "#ff9800"
    ];
  }
  main() {
    function resize() {
      if ($(window).width() > 767) {
        $("#menu").addClass("fixed");
      } else {
        $("#menu").removeClass("fixed");
      }
    }
    $(window).resize(function() {
      resize();
    });
    resize();

    this.nothingSelected = $(`
			<div id= "nothingSelected">
			
	  		</div>
	    	<div style="text-align:center; top: 24%; ">
	       <h1 class="header inverted thin " style="text-align:center; font-size: 60px; margin:0px;"> Oops you have nothing selected. </h1>

	    </div></div`);

    var self = this;
    this.calendarHandly = new calendarHandler($("#results"));
    this.courseHandly = new courseHandler();
    this.permutationCreaty = new permutationCreator();
    this.searchHandley = new searchHandler($("#search"));
    this.filtersHandley = new filterHandler($("#filters"));
    this.settingsHandley = new settingsHandler($("#settings"));

    //Fake filters
    var temp = new filterHandler($("#filtersExample"));
    temp.openAccordion();
    //Get color
    this.searchHandley.attachColorGetter(function() {
      return self.getColor();
    });
    //Add a single search manually
    this.searchHandley.newSearchBox(
      this.searchHandley.getUnderTheFold(),
      false
    );
    this.searchHandley.newSearchBox(this.searchHandley.getUnderTheFold(), true);

    //------------------
    //Change of courses
    //------------------
    this.searchHandley.attachDataSend(function(input, color) {
      //TODO, getcourses
      if (input.deleteCourse) {
        self.courseHandly.deleteCourse(input.deleteCourse);
        self.updateCalenders();
      } else if (input.add) {
        console.log(input);
        let settings = self.settingsHandley.getValues();
        //console.log(input.add);
        self.courseHandly.addCourse(
          input.add,
          input.color,
          function(serverResponse) {
            input.callback(serverResponse);
            if (serverResponse.success) {
              self.updateCalenders();
            }
          },
          settings
        );
      }
    });

    //-------------------
    //Change of filters
    //-------------------
    this.filtersHandley.attachOnFilterClick(function() {
      self.updateCalenders();
    });

    //-------------------
    //Change of settings
    //-------------------
    this.settingsHandley.attachOnSettingsClick(function() {
      let currentCourseCodes = [];
      let courses = self.courseHandly.getCourses();
      console.log(courses);
      for (let i = 0; i < courses.length; i++) {
        currentCourseCodes.push(courses[i].getCourseCode());
      }
      self.searchHandley.addArtificialText(currentCourseCodes);
    });

    //TEST
    $("#tryItOutBtn").on("click", function() {
      self.searchHandley.addArtificialText(["cop3502", "cop4600", "iuf1000"]);
    });
  }
  getColor() {
    //console.log(this);
    var color = this.colorArray[this.colorCounter];
    this.colorCounter = (this.colorCounter + 1) % this.colorArray.length;
    return color;
  }
  updateCalenders() {
    this.calendarHandly.deleteAll();

    let filters = this.filtersHandley.getValues();
    let courses = this.courseHandly.getCourses();
    if (courses.length != 0) {
      let permutation = this.permutationCreaty.run(courses, filters);
      this.calendarHandly.addCalendars(courses, permutation);
    } else {
      $("#results").append(this.nothingSelected);
    }
  }
}
