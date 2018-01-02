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
		this.searchBoxes.push(searchy);
		searchy.attachEnterPressHandler(function(course){
			searchy.addColor("#f44336");
			self.addNewCourse(course, color, function(){
				self.updateCalendars();
				searchy.addColor(color);
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
				console.log("already exsists");
			}
		}
		//Make request	
		serverGetRequest(code, function(result){
			var coursey = new Course();
			coursey.setRawJSON(JSON.parse(result));
			coursey.addColor(color);
			self.courses.push(coursey);
			callback();
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
		console.log("deleting!"); 
		for(var i =0; i < this.calendars.length; i++){
			this.calendars[i].deleteMe();
		}
		this.calendars = [];
	}
	updateCalendars(){
		this.deleteCalendars();
		var self =this;
		if(this.courses.length>0){
			var temp = this.checkOverlap(this.createPermutation());
		}else{
			return false;
		}
		//Can sort temp here for overlap later 
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

		var last;
		for(var i =0; i< input.length; i++){
		

			var hit = {};
			//looping through every course
		loopy:
			for(var j=0; j< input[i].length; j++){
				var sectionMeetTimes = this.courses[input[i][j].course].getSectionTimes(input[i][j].section);
				//looping through every meet time
				
				for(var b =0; b < sectionMeetTimes.length; b++)
				{	//looping thru every day
					for(var k =0; k < sectionMeetTimes[b].meetDays.length; k++)
					{
						//looping thru every period of the meettime

						
						for(var l = parseInt(sectionMeetTimes[k].meetPeriodBegin, 10);  l < (parseInt(sectionMeetTimes[k].meetPeriodEnd,10)+1); l++){
							var key = " " + l + " " + sectionMeetTimes[b].meetDays[k];

							if(hit[key]){
								//make sure its not slicing based on overlaping itself
								if(last != j){
									input = input.slice(i);

									break loopy;
								}else{
									console.log("ERROR: overlapping itself");
								}
								
							}else{
								last = j;
								hit[key] = 1;
							}
						}
					}	
				}	
			}
			
		}
		return input;
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
		console.log(oldArray);
		if(1 < self.courses.length){
			for(var i = 1; i< self.courses.length; i++){
				var newArr = [];
				for (var k = 0; k<oldArray.length; k++){
					for(var j =0; j< self.courses[i].getNumSections(); j++){
						newArr.push(oldArray[k].concat([{course:i,section:j}]));
						
					}
				}
				console.log(newArr);
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
class addNewSearchButton{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
		this.addHtml();
		this.render();
	}
	addHtml(){
		this.element = $(`<button class="ui basic icon button">
  			<i class="add icon"></i>
			</button>`);
	}
	attachClickHandler(callback){
		this.element.on('click', function(){
			callback();
		});
	}
	render(){
		$('#' + this.divToBindTo).append(this.element);
	}
}
class SearchBox{
	constructor(divToBindTo){
		//Order matters
		this.divToBindTo = divToBindTo;
		this.active=false;
		this.addHtml();
		this.attachKeydownHandler();
		this.render();


	}
	addHtml(){
		this.element = $(`<div class="field basic segment"></div>`);
      	var innerHtml =$(`<div class="ui icon input transparent inverted "></div>`);
        this.searchBox = $(`<input type="text" placeholder="Enter Course">`);	
        var searchIcon = $(`<i class="search icon "></i>`);
      	innerHtml.append(this.searchBox);
      	innerHtml.append(searchIcon);
      	this.element.append(innerHtml);

	}
	addColor(color){
		if(this.label){
			this.label.remove();
		}
		this.label = $(`<a class="ui label" style="background-color: ${color}"></a>`);
		this.element.prepend(this.label)
	}
	render(){
		$('#'+ this.divToBindTo).append(this.element);
	}
	deleteMe(){
		this.element.remove();
		self.cancelPressed(course);
	}
	focus(){
		this.searchBox.focus();
	}
	getKey(){
		return this.course;
	}
	refreshKey(){
		this.course = this.searchBox.val();
	}
	attachKeydownHandler(){
		var self = this;
		this.element.keydown(function(e) {
			setTimeout(function() {
				
				if(this.active && e.keyCode != 13){
					this.active=false;
					self.cancelPressed(self.course);
					
				}
				self.refreshKey();
				if (e.keyCode == 13) {
					if(!this.active){
						this.active = self.course;
						self.enterPressed(self.course);
					}

				}
			}, 20);
		});
		
	}

	attachCancelPressHandler(callback){
		this.cancelPressed = callback;
	}
	attachEnterPressHandler(callback){
		this.enterPressed = callback;
	}
}
class calendarHandler{
	constructor(divToBindTo, calendarNumber){
		this.divToBindTo = divToBindTo;
		this.boxArr = {};
		this.calendarNumber = calendarNumber;
	}
	addSection(sectionMeetTimes, section, color){
		//Create elements
		var tempArr=[];
		var self =this;
		for(var i=0; i < sectionMeetTimes.length; i++){
			for(var j =0; j< sectionMeetTimes[i].meetDays.length; j++){
				var sectionMeetTimey = new sectionMeetTime(this.days[sectionMeetTimes[i].meetDays[j]]);
				sectionMeetTimey.addSectionName(section);
				sectionMeetTimey.addStartStop(self.convertToNum(sectionMeetTimes[i].meetPeriodBegin), self.convertToNum(sectionMeetTimes[i].meetPeriodEnd));
				
				sectionMeetTimey.addColor(color);
				sectionMeetTimey.render();
				tempArr.push(sectionMeetTimey);
			}
		}
		this.boxArr[section] = tempArr;
	}
	//UF has late classes with special codes, this strips them and returns an integer
	convertToNum(inputTime){
		switch(inputTime){
			case "E1":
				return 11;
			break;
			case "E2":
				return 12;
			break;
			case "E3":
				return 13;
			break;
			default: 
				return inputTime;
			break;
		}
	}
	removeSection(section){
		this.boxArr[section].deleteMe();
	}
	addBaseHtml(){
		var element = $(`<div style=""> </div>`);
        var innerElement = $(`<div class="ui grid" ></div>`);
        
		//Add day columns
		this.days = {}; 
		this.days["M"]=$(`<div class="two wide column">Monday</div>`);
		this.days["T"]=$(`<div class="two wide column">Tuesday</div>`);
		this.days["W"]=$(`<div class="two wide column">Wednesday</div>`);
		this.days["R"]=$(`<div class="two wide column">Thursday</div>`);
		this.days["F"]=$(`<div class="two wide column">Friday</div>`);
		this.days["S"]=$(`<div class="two wide column">Saturday</div>`);
		this.days["U"]=$(`<div class="two wide column">Sunday</div>`);
		var keys = Object.keys(this.days);

        innerElement.append(`<div class="two wide column"></div>`);
        for(var i = 0; i< keys.length; i++){
        	innerElement.append(this.days[keys[i]]);
        }
        //Add numbers
        var text = '';
		var arr=[1,2,3,4,5,6,7,8,9,10,11,"E1","E2","E3"];
    	for(var i = 0; i < arr.length; i++){
			text += `<div style="height:40px; position:relative;"> ${arr[i]} </div>`;
		}
        innerElement.append(`<div class="two wide column">${text}</div>`);

        //add dividers
        text = "";
        for(var i = 0; i < arr.length; i++){
			text += `<div style="top: ${i*26+40}px;     width: 100%; position:relative;"><div class="ui  divider"></div></div>`;
		}
		innerElement.append(`<div style="position: absolute;  width:100%;">${text}</div>`);
     
        //add Schedule name and attatch every thing
        element.append(`<h3>Schedule: ${this.calendarNumber+1}</h3>`);
    	element.append(innerElement);
		this.calendarDiv = element;
		$("#" + this.divToBindTo).append(element);
    	
	}
	deleteMe(){
		this.calendarDiv.remove();
	}
}
class sectionMeetTime{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
		this.element = $(`<div style=" width:100%; z-index:3;" class="ui middle aligned centered grid" ></div>`);
	}
	render(){
		this.divToBindTo.append(this.element);
	}
	addStartStop(start, stop){
		this.element.css({"position":"absolute",  "top":`${(start*40)+30}px`, "height":`${((stop-start)+1)*40}px`});
	}
	addSectionName(sectionName){
		this.element.append(`<div class="column"><h3 style="text-align:center; width:100%; ">${sectionName}</h3></div>`);
	}
	deleteMe(){
		this.element.remove();
	}
	addColor(color){
		
		this.element.css("background-color", color);
	}
}
class Course {
	setRawJSON(input){
		this.rawJSON= input;
		this.sectionArray = this.rawJSON[0].COURSES[0].sections;
	}
	getSectionTimes(i){
		return this.sectionArray[i].meetTimes;
	}
	getSectionNumber(i){
		return this.sectionArray[i].number;
	}
	getNumSections(){
		return this.sectionArray.length;
	}
	getCourseName(){
		return this.rawJSON[0].COURSES[0].name;
	}
	getCourseCode(){
		return this.rawJSON[0].COURSES[0].code;
	}
	getRawJSON(){
		return this.rawJSON;
	}
	addColor(color){
		this.color = color;
	}
	getColor(){
		return this.color;
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
