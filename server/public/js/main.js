$(document).ready(function() {
	console.log("eskeddit");
	var main = new Main();
	$("body").css('background-color', '#2196f3');//green
	main.main();
});
class Main{
	constructor(){
		this.searchBoxes = [];
		this.colorCounter =-1;
		this.colorArray = ["#f44336","#e91e63","#9c27b0","#3f51b5","#2196f3","#00bcd4","#4caf50","#ff9800"];
	}
	main(){
		var button = new addNewSearchButton('addMore');
		this.newSearchBox('search');
		var self = this;
		button.attachClickHandler(function(){
			self.newSearchBox('search');
		});

		this.calendarHandly = new calendarHandler();
	}
	getColor(){
		var color = this.colorArray[this.colorCounter];
		this.colorCounter = (this.colorCounter + 1) % this.colorArray.length;
		return this.colorCounter;
	}
	newSearchBox(divToBindTo){
		var color = this.getColor();
		var self = this;
		var searchy = new SearchBox(divToBindTo);
		searchy.addColor(color);
		searchy.addRemoveIcon(function(){
			searchy.deleteMe();
		});
		this.searchBoxes.push(searchy);
		searchy.attachEnterPressHandler(function(inputText){
			searchy.addColor("#f44336");
			self.calendarHandly.addCourse(inputText, color, function(result){
				if(result.success){
					self.calendarHandly.updateCalendars();
					searchy.addColor(color);
					searchy.attachCoursePointer(result.success);
				}
				if(result.error == "doesNotExist"){
					searchy.addColor("#ffeb3b");
					searchy.popup("Invalid Course Code");
					
				}
				if(result.error == "serverNoResponse"){
					searchy.popup("Cannot connect to one.uf. Contact me pls");
					searchy.addColor("#000000");
				}
			});	
		});
		searchy.attachDeleteHandler(function(course){
			self.calendarHandly.deleteCourse(course);
			self.calendarHandly.updateCalendars();
		});
	}
	
}
