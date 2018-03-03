class searchHandler{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
		this.searchBoxes=[];
		var self = this;
		this.addHtml();
		this.divToBindTo.append(this.accordion);
	}
	addHtml(){
		this.accordion = $(`
			<div class="ui styled inverted fluid accordion " style="background-color: RGBA(255, 255, 255, 0);
    			box-shadow: none;">
			  <div class="title">
			    <i class="dropdown icon"></i>
			    Add courses
			  </div>

			 </div>
		    
		  `);
		var outer = $(`<div class="ui content"></div>`);
		this.underTheFold = $(`<div class="ui cards two"></div>`);
		outer.append(this.underTheFold);
		this.accordion.append(outer);
		this.accordion.accordion();

	}
	getUnderTheFold(){
		return this.underTheFold;
	}
	attachSearchBoxHandler(handler){
		this.searchBoxHandler = handler;
	}
	newSearchBox(divToBindTo){
		var self = this;
		var searchy = new SearchBox(divToBindTo, function(){
			self.newSearchBox(divToBindTo);
		});
		var color = this.returnColor();
		searchy.addColor(color);
		searchy.addRemoveIcon(function(){
			searchy.deleteMe();
		});
		this.searchBoxes.push(searchy);
		searchy.attachEnterPressHandler(function(inputText){
			searchy.startLoad();
			searchy.addColor("#f44336");
			self.sendData({
				"add" : inputText, 
				"color" :color, 
				"callback" : function(result){
					if(result.success){
						searchy.addColor(color);
						searchy.endLoad();
						searchy.attachCoursePointer(result.success);
					}
					if(result.error == "doesNotExist"){
						searchy.addColor("#ffeb3b");
						searchy.endLoad();
						searchy.popup("Invalid Course Code");
						
					}
					if(result.error == "serverNoResponse"){
						searchy.popup("Cannot connect to one.uf. Contact me pls");
						searchy.endLoad();
						searchy.addColor("#000000");
					}
				}
			});
		});
		searchy.attachDeleteHandler(function(course){
			self.sendData({"deleteCourse": course});
		});
	}
	attachColorGetter(callback){
		this.returnColor = callback;
	}
	attachDataSend(callback){
		this.sendData = callback;
	}

}
