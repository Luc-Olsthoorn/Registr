
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
    //Its web
    if(options.sectWeb){
          var sectionMeetTimey = new sectionMeetTime(this.webDiv);
          sectionMeetTimey.addSectionName(options.section); 
          sectionMeetTimey.addColor(options.color);
          sectionMeetTimey.render();
          sectionMeetTimey.addSideBarHandler(self.toggleSideBar, options, self);
          tempArr.push(sectionMeetTimey);
        }
    //Its non-web
    else{
  		for(var i=0; i < options.sectionMeetTimes.length; i++){
  			for(var j =0; j< options.sectionMeetTimes[i].meetDays.length; j++){
         
          var sectionMeetTimey = new sectionMeetTime(this.days[options.sectionMeetTimes[i].meetDays[j]]);
          sectionMeetTimey.addSectionName(options.section);
          sectionMeetTimey.addStartStop(convertToNum(options.sectionMeetTimes[i].meetPeriodBegin), convertToNum(options.sectionMeetTimes[i].meetPeriodEnd));
          
  				sectionMeetTimey.addColor(options.color);
  				sectionMeetTimey.render();
  				sectionMeetTimey.addSideBarHandler(self.toggleSideBar, options, self);
  				tempArr.push(sectionMeetTimey);
          
  			}
  		}
    }
		this.boxArr[options.section] = tempArr;
	}

	removeSection(section){
		this.boxArr[section].deleteMe();
	}
	addSideBar(){
		return $(`<div class="ui sidebar inverted vertical "></div>`);
	}
	toggleSideBar(info, self){
		self.sideBar.empty();
		self.sideBar.append(`
			<div class="ui segment container" style="height:100%; background-color: ${info.color}">
			<h3 class="ui header">${info.code}</h3>
			<h2 class="ui sub header"><i>${info.name}</i></h2> 
			<div class="ui  divider"></div>
			<div class="ui list">
			  	<div class="item">
			    	<div class="header">Department Name</div>
			    	${info.deptName}
				</div>
			 
				<div class="item">
				    <div class="header">Credits</div>
				    ${info.credits}
				</div>
				 
				<div class="item">
				    <div class="header">Cost</div>
				     ${info.courseFee}
				</div>
			 </div>
		  </div>`);
		self.sideBar
		  .sidebar({
		    context: self.calendarDiv
		  })
		  .sidebar('toggle');
	}
	addDayColumns(innerElement){
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
    for (var i = 0; i < keys.length; i++) {
      innerElement.append(this.days[keys[i]]);
    }
  }
  addTimes(periods) {
    var text = "";
    var times = [
      " (7:25 - 8:15)",
      " (8:30 - 9:20)",
      " (9:35 - 10:25)",
      " (10:40 - 11:30)",
      " (11:45 - 12:35)",
      " (12:50 - 1:40)",
      " (1:55 - 2:45)",
      " (3:00 - 3:50)",
      " (4:05 - 4:55)",
      " (5:10 - 6:00)",
      " (6:15 - 7:05)",
      " (7:20 - 8:10)",
      " (8:20 - 9:10)",
      " (9:20 - 10:10)"
    ];
    for (var i = 0; i < periods.length; i++) {
      text += `<div style="height:20px; margin-bottom:20px; overflow:hidden; position:relative;"> <h4>${
        periods[i]
      }<span class="thin">${times[i]}</span></h4> </div>`;
    }
    return $(`<div class="two wide column">${text}</div>`);
  }
  addDividers(periods) {
    var text = "";
    for (var i = 0; i < periods.length; i++) {
      text += `<div style="top: ${i * 24 +
        40}px;     width: 100%; position:relative;"><div class="ui  divider"></div></div>`;
    }
    return $(`<div style="position: absolute;  width:100%;">${text}</div>`);
  }
  addBaseHtml() {
    var element = $(`<div  class="pushable"     style="    min-height: 740px;"> </div>`);
    var pusher = $(
      `<div  style="background-color:#2196f3; " class="pusher"> </div>`
    );
    var innerElement = $(`<div  class="ui grid " ></div>`);

    //Add day columns
    this.addDayColumns(innerElement);
    var periods = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "E1",
      "E2",
      "E3"
    ];

    innerElement.append(this.addTimes(periods));
    innerElement.append(this.addDividers(periods));

    this.webDiv = $(`<div style="width:100%;"></div>`);
    innerElement.append(this.webDiv);
    this.sideBar = this.addSideBar();
    element.append(this.sideBar);
        //add Schedule name and attach every thing
        pusher.append(`<h2 style="width:100%; text-align:center;">Option: ${this.calendarNumber+1}</h2>`);
    	pusher.append(innerElement);
    	element.append(pusher);
		this.calendarDiv = element;
		this.divToBindTo.append(element);
	}
	deleteMe(){
		this.calendarDiv.remove();
		delete this;
	}
}
class sectionMeetTime {
  constructor(divToBindTo) {
    this.divToBindTo = divToBindTo;
    this.element = $(
      `<div style=" width:100%; z-index:3; cursor: pointer;" class="ui middle aligned centered grid" ></div>`
    );
  }
  render() {
    this.divToBindTo.append(this.element);
  }
  addStartStop(start, stop) {
    this.element.css({
      position: "absolute",
      "margin-top": "0",
      top: `${start * 40 + 14}px`,
      height: `${(stop - start + 1) * 40}px`
    });
  }
  addSectionName(sectionName) {
    this.element.append(
      `<div class="column" style="padding:0px;"><h3 style="text-align:center; width:100%; ">${sectionName}</h3></div>`
    );
  }
  deleteMe() {
    this.element.remove();
  }
  addSideBarHandler(callback, info, self) {
    var x = callback;
    var box = this;
    this.element.click(function() {
      box.element.transition("pulse");
      x(info, self);
    });
  }
  addColor(color) {
    this.element.css("background-color", color);
  }
}
