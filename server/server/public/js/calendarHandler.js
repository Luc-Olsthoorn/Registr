class calendarHandler{
	constructor(){
		this.calendars = [];
	}
	deleteCalendars(){
		
		for(var i =0; i < this.calendars.length; i++){
			this.calendars[i].deleteMe();
		}
		this.calendars = [];
	}
	updateCalendars(inputCourses){
		this.courses=inputCourses; 
		this.deleteCalendars();
		var self =this;
		if(this.courses.length>0){
			var temp = this.createPermutation();
		}else{
			return false;
		}
		temp = this.checkOverlap(temp);
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