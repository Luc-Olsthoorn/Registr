class calendarHandler{
	constructor(){
		this.calendars = [];
		this.courses = [];
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
		temp = this.checkOverlap(temp); //TODO create switch for this
		for(var i =0; i< temp.length; i++){
			var calendary = new calendar('results', i);
			calendary.addBaseHtml();
			for(var j=0; j< temp[i].length; j++)
			{
				//adds to calendar the sectiion based on the permutation
				calendary.addSection(self.courses[temp[i][j].course].getSectionTimes(temp[i][j].section), self.courses[temp[i][j].course].getSectionNumber(temp[i][j].section), self.courses[temp[i][j].course].getColor());	
			}
			self.calendars.push(calendary);
		}
	}
	addCourse(code, color, callback){
		//Check that it isnt already in use
		var self = this;
		//Make request	
		serverGetRequest(code, function(result){
			if(!result){
				callback({"error":"serverNoResponse"});
			}else if(JSON.parse(result)[0].TOTALROWS != null){
				//not empty
				var coursey = new Course();
				coursey.setRawJSON(JSON.parse(result));
				coursey.addColor(color);
				self.courses.push(coursey);
				callback({"success": coursey});
			}
			else{
				//error
				callback({"error":"doesNotExist"});
			}

		});
	}
	deleteCourse(course){
		for(var i=0; i<this.courses.length; i++){
			if(this.courses[i]==course){
				this.courses.splice(i, 1);
				return;
			}
		}
		console.log("delete failed"); //TODO make this better
	}
	checkOverlap(input){
		//looping through every possible calender
		var output = [];
		var toDelete = false;
		for(var i =0; i< input.length; i++){
			//console.log("newCalender" + i);
			var hit = {};
			//looping through every course
			for(var j=0; j< input[i].length; j++){
				//console.log(input[i][j].section);
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
									//console.log("hit" + key);
									toDelete=true;
							}else{
					
								hit[key] = 1;
							}
						}
					}	
				}	
			}
			if(!toDelete){
				//console.log("pushing");
				output.push(input[i]);
			}else{
				toDelete = false;
			}
		}
		console.log(output);
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
		console.log(newArr);
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