$(document).ready(function() {
	console.log("eskeddit");
	var main = new Main();
	$("body").css('background-color', '#2196f3');//green
	main.main();
});
class Main{
	constructor(){
		this.calendars = [];
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
			self.updateCalendars();
		});
		this.searchBoxes.push(searchy);
		searchy.attachEnterPressHandler(function(course){
			searchy.addColor("#f44336");
			self.addNewCourse(course, color, function(result){
				if(result == "success"){
					self.updateCalendars();
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
			self.updateCalendars();
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
	deleteCalendars(){
		
		for(var i =0; i < this.calendars.length; i++){
			this.calendars[i].deleteMe();
		}
		this.calendars = [];
	}
	updateCalendars(){
		this.deleteCalendars();
		var self =this;
		if(this.courses.length>0){
			var temp = this.createPermutation();
		}else{
			return false;
		}
		temp = this.checkOverlap(temp);
		for(var i =0; i< temp.length; i++){
			var calendar = new calendarHandler('results', i);
			calendar.addBaseHtml();
			for(var j=0; j< temp[i].length; j++)
			{
				//adds to calendar the sectiion based on the permutation
				calendar.addSection(self.courses[temp[i][j].course].getSectionTimes(temp[i][j].section), self.courses[temp[i][j].course].getSectionNumber(temp[i][j].section), self.courses[temp[i][j].course].getColor());	
			}
			self.calendars.push(calendar);
		}
	}
	checkOverlap(input){
		//looping through every calender
		var output = [];
		var toDelete = false;
		for(var i =0; i< input.length; i++){
			console.log("newCalender");
			var hit = {};
			//looping through every course
			for(var j=0; j< input[i].length; j++){
				console.log(input[i][j].section);
				var sectionMeetTimes = this.courses[input[i][j].course].getSectionTimes(input[i][j].section);

				//looping through every meet time
				for(var b =0; b < sectionMeetTimes.length; b++)
				{	//looping thru every day
					for(var k =0; k < sectionMeetTimes[b].meetDays.length; k++)
					{
						//looping thru every period of the meettime
						for(var l = parseInt(sectionMeetTimes[b].meetPeriodBegin, 10);  l < (parseInt(sectionMeetTimes[b].meetPeriodEnd,10)+1); l++){
							var key = " " + l + " " + sectionMeetTimes[b].meetDays[k];
							console.log(key);
							if(hit[key]){
								//make sure its not slicing based on overlaping itself
									console.log("hit" + key);
									toDelete=true;
							}else{
					
								hit[key] = 1;
							}
						}
					}	
				}	
			}
			if(!toDelete){
				toDelete = false;
				output.push(input[i]);
			}
		}
		return output;
	}
	createPermutation(){
		//creates a permutation of every possible section
		//algo riddim basis - btw this sucks at like O(n^3) but it doesnt get much load
		//go to a course 
		//duplicate every current array section times, and add a section to each
		//store i,j 
		var self =this;
		var oldArray = [];
		var newArr = [];
		for(var j =0; j< self.courses[0].getNumSections(); j++){
			oldArray[j]=[{course:0,section:j}];
		}

		if(1 < self.courses.length){
			for(var i = 1; i< self.courses.length; i++){
				var newArr = [];
				for (var k = 0; k<oldArray.length; k++){
					for(var j =0; j< self.courses[i].getNumSections(); j++){
						newArr.push(oldArray[k].concat([{course:i,section:j}]));
						
					}
				}
				
				oldArray = newArr.slice();
			}
		}
		else{
			newArr = oldArray.slice();
		}
	
		return newArr;
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
