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
			<div class="ui styled inverted fluid accordion active" style="background-color: RGBA(255, 255, 255, 0);
    			box-shadow: none;">
			  <div class="title active">
			    <i class="dropdown icon"></i>
			    Add courses
			  </div>

			 </div>
		    
		  `);
		var outer = $(`<div class="ui content active"></div>`);
		this.underTheFold = $(`<div class="ui cards two"></div>`);
		outer.append(this.underTheFold);
		this.accordion.append(outer);
		this.accordion.accordion();

	}
	addArtificialText(inputs){
		for(var i =0; i < inputs.length; i++){
			var x =this.newSearchBox(this.underTheFold, false);
			x.artificialText(inputs[i]);
		}
	}
	getUnderTheFold(){
		return this.underTheFold;
	}
	attachSearchBoxHandler(handler){
		this.searchBoxHandler = handler;
	}
	newSearchBox(divToBindTo, isAddMoreBox){
		var self = this;
		if(isAddMoreBox){
			var searchy = new SearchBox(divToBindTo, function(){
				self.newSearchBox(divToBindTo, true);
			});
		}else{
			var searchy = new SearchBox(divToBindTo);
		}

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
		return searchy;
	}
	attachColorGetter(callback){
		this.returnColor = callback;
	}
	attachDataSend(callback){
		this.sendData = callback;
	}

}
