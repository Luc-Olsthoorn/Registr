class searchHandler{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
		this.searchBoxes=[];
		var self = this;
		var button = new searchButton(divToBindTo);
		button.attachClickHandler(function(){
			self.newSearchBox(button.element);
		});
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
			searchy.addColor("#f44336");
			self.sendData({
				"add" : inputText, 
				"color" :color, 
				"callback" : function(result){
					if(result.success){
						console.log(result.success);
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
		this.element = $(`<button class="ui basic icon button" data-tooltip="Add more courses" data-inverted="">
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