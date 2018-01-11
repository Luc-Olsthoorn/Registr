
class calendar{
	constructor(divToBindTo, calendarNumber){
		this.divToBindTo = divToBindTo;
		this.boxArr = {};
		this.calendarNumber = calendarNumber;
	}
	addSection(options){
		//Create elements
		var tempArr=[];
		var self =this;
		for(var i=0; i < options.sectionMeetTimes.length; i++){
			for(var j =0; j< options.sectionMeetTimes[i].meetDays.length; j++){
				var sectionMeetTimey = new sectionMeetTime(this.days[options.sectionMeetTimes[i].meetDays[j]]);
				sectionMeetTimey.addSectionName(options.section);
				sectionMeetTimey.addStartStop(convertToNum(options.sectionMeetTimes[i].meetPeriodBegin), convertToNum(options.sectionMeetTimes[i].meetPeriodEnd));
				
				sectionMeetTimey.addColor(options.color);
				sectionMeetTimey.render();
				tempArr.push(sectionMeetTimey);
			}
		}
		this.boxArr[options.section] = tempArr;
	}

	removeSection(section){
		this.boxArr[section].deleteMe();
	}
	addBaseHtml(){

		var element = $(`<div style=""> </div>`);
        var innerElement = $(`<div class="ui grid" ></div>`);
        
		//Add day columns
		this.days = {}; 
		this.days["M"]=$(`<div class="two wide column"><div style="overflow:hidden;">Monday</div></div>`);
		this.days["T"]=$(`<div class="two wide column"><div style="overflow:hidden;">Tuesday</div></div>`);
		this.days["W"]=$(`<div class="two wide column"><div style="overflow:hidden;">Wednesday</div></div>`);
		this.days["R"]=$(`<div class="two wide column"><div style="overflow:hidden;">Thursday</div></div>`);
		this.days["F"]=$(`<div class="two wide column"><div style="overflow:hidden;">Friday</div></div>`);
		this.days["S"]=$(`<div class="two wide column"><div style="overflow:hidden;">Saturday</div></div>`);
		this.days["U"]=$(`<div class="two wide column"><div style="overflow:hidden;">Sunday</div></div>`);
		var keys = Object.keys(this.days);

        innerElement.append(`<div class="two wide column"></div>`);
        for(var i = 0; i< keys.length; i++){
        	innerElement.append(this.days[keys[i]]);
        }
        //Add numbers
        var text = '';
		var periods=["1","2","3","4","5","6","7","8","9","10","11","E1","E2","E3"];
    	var times=[" (7:25 - 8:15)", " (8:30 - 9:20)", " (9:35 - 10:25)", " (10:40 - 11:30)", " (11:45 - 12:35)", " (12:50 - 1:40)", " (1:55 - 2:45)", " (3:00 - 3:50)", " (4:05 - 4:55)", " (5:10 - 6:00)", " (6:15 - 7:05)", " (7:20 - 8:10)", " (8:20 - 9:10)", " (9:20 - 10:10)" ];
    	for(var i = 0; i < periods.length; i++){
			text += `<div style="height:20px; margin-bottom:20px; overflow:hidden; position:relative;"> <h4>${periods[i]}<span class="thin">${times[i]}</span></h4> </div>`;
		}
        innerElement.append(`<div class="two wide column">${text}</div>`);

        //add dividers
        text = "";
        for(var i = 0; i < periods.length; i++){
			text += `<div style="top: ${i*24+40}px;     width: 100%; position:relative;"><div class="ui  divider"></div></div>`;
		}
		innerElement.append(`<div style="position: absolute;  width:100%;">${text}</div>`);
     
        //add Schedule name and attatch every thing
        element.append(`<h2 style="width:100%; text-align:center;">Option: ${this.calendarNumber+1}</h2>`);
    	element.append(innerElement);
		this.calendarDiv = element;
		console.log(element);
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
		this.element.append(`<div class="column" style="padding:0px;"><h3 style="text-align:center; width:100%; ">${sectionName}</h3></div>`);
	}
	deleteMe(){
		this.element.remove();
	}
	addColor(color){
		
		this.element.css("background-color", color);
	}
}

module.exports = UF;