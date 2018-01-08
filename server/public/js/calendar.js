
class calendar{
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
	//UF has late classes with special codes, this strips them and returns an integer //TODO verify if this is necessary
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
		var arr=["1 (7:25 - 8:15)","2 (8:30 - 9:20)","3 (9:35 - 10:25)","4 (10:40 - 11:30)","5 (11:45 - 12:35)","6 (12:50 - 1:40)","7 (1:55 - 2:45)","8 (3:00 - 3:50)","9 (4:05 - 4:55)","10 (5:10 - 6:00)","11 (6:15 - 7:05)","E1 (7:20 - 8:10)","E2 (8:20 - 9:10)","E3 (9:20 - 10:10)"];
    	for(var i = 0; i < arr.length; i++){
			text += `<div style="height:40px; position:relative;"> ${arr[i]} </div>`;
		}
        innerElement.append(`<div class="two wide column">${text}</div>`);

        //add dividers
        text = "";
        for(var i = 0; i < arr.length; i++){
			text += `<div style="top: ${i*24+40}px;     width: 100%; position:relative;"><div class="ui  divider"></div></div>`;
		}
		innerElement.append(`<div style="position: absolute;  width:100%;">${text}</div>`);
     
        //add Schedule name and attatch every thing
        element.append(`<h2 style="width:100%; text-align:center;">Option: ${this.calendarNumber+1}</h2>`);
    	element.append(innerElement);
		this.calendarDiv = element;
		$("#" + this.divToBindTo).append(element);
    	
	}
	deleteMe(){
		this.calendarDiv.remove();
		delete this;
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
		this.element.css({"position":"absolute", "margin-top":"0", "top":`${((start*40)+14)}px`, "height":`${((stop-start)+1)*40}px`});
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