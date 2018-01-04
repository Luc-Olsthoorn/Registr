$(document).ready(function() {
	console.log("eskeddit");
	var main = new Main();
	$("body").css('background-color', '#2196f3');//green
	main.main();
});
class Main{
	constructor(){
		this.searchBoxes = [];
		this.courses = [];
		this.colorCounter =-1;
	}
	main(){
		var button = new addNewSearchButton('addMore');
		this.newSearchBox('search');
		var self =this;
		button.attachClickHandler(function(){
			self.newSearchBox('search');
		});

		this.calendarHandly = new calendarHandler();
	}
	getColor(){
		var colorArray = ["#43a047","#ff5722","#795548","#607d8b","#673ab7","#d81b60","#9c27b0","#f44336"];
		if (this.colorCounter > colorArray.length){
			this.colorCounter = 0;
		}
		this.colorCounter++;
		return colorArray[this.colorCounter];
	}
	newSearchBox(divToBindTo){
		var color = this.getColor();
		var self = this;
		var searchy = new SearchBox(divToBindTo);
		searchy.addColor(color);
		searchy.addRemoveIcon(function(){
			searchy.deleteMe();
			self.calendarHandly.updateCalendars(self.courses);
		});
		this.searchBoxes.push(searchy);
		searchy.attachEnterPressHandler(function(course){
			searchy.addColor("#f44336");
			self.addNewCourse(course, color, function(result){
				if(result == "success"){
					self.calendarHandly.updateCalendars(self.courses);
					searchy.addColor(color);
				}
				if(result == "alreadyThere"){
					alert("Already exists");
				}
				if(result == "doesNotExist"){
					alert("Invalid Course Code");
				}
				if(result == "serverNoResponse"){
					alert("Cannot connect to one.uf. Contact me pls");
				}
			});	
		});
		searchy.attachCancelPressHandler(function(course){
			self.deleteCourse(course);
			self.calendarHandly.updateCalendars(self.courses);
		});
	}
	addNewCourse(code, color, callback){
		//Check that it isnt already in use
		var self = this;
		for(var i=0; i<self.courses.length; i++){
			if(self.courses[i].getCourseCode==code){
				callback("alreadyThere");
			}
		}
		//Make request	
		serverGetRequest(code, function(result){
			if(!result){
				callback("serverNoResponse");
			}else if(JSON.parse(result)[0].TOTALROWS != null){
				//not empty
				var coursey = new Course();
				coursey.setRawJSON(JSON.parse(result));
				coursey.addColor(color);
				self.courses.push(coursey);
				callback("success");
			}
			else{
				//error
				callback("doesNotExist");
			}

		});
	}
	deleteCourse(course){
		console.log("deleting course");
		for(var i=0; i<this.courses.length; i++){
			if(this.courses[i].getCourseCode()==course){
				console.log("deleted!");
				this.courses.splice(i, 1);
				return;
			}
		}
	}
}



//Make get note server request
function serverGetRequest(course, callback) {
	if(course==""){
		callback(false);
	}else{
		$.ajax({
			type: "POST",
			url: "/getCourseInfo",
			data: JSON.stringify({
				"course": course
			}),
			success: function(data) {
				callback(data);
			},
			error: function() {
				callback(false);
			},
			contentType: 'application/json'
		});
	}
}
