class searchHandler{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
		this.searchBoxes=[];
		var self = this;
		this.addHtml();
		this.button = new searchButton(this.underTheFold);
		this.divToBindTo.append(this.accordion);
		this.button.attachClickHandler(function(){
			self.newSearchBox(self.button.element);
		});
		
	}
	getButtonElement(){
		return this.button.element;
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
	attachSearchBoxHandler(handler){
		this.searchBoxHandler = handler;
	}
	newSearchBox(divToBindBefore){
		var self = this;
		var searchy = new SearchBox(divToBindBefore);
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
class searchButton{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
		this.addHtml();
		this.render();
	}
	addHtml(){
		this.element = $(`<button style="margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 15px;
    height: 40px;" class="ui  icon button" data-tooltip="Add more courses" data-inverted="" data-position="right center">
  			<i class="add icon"></i>
			</button>`);
	}
	attachClickHandler(callback){
		this.element.on('click', function(){
			callback();
		});
	}
	render(){
		$(this.divToBindTo).append(this.element);
	}
}