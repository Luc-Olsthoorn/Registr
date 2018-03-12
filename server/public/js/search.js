
class SearchBox{
	constructor(divToBindTo, isAnAddButton){
		//Order matters
		this.divToBindTo = divToBindTo;
		this.active=false;
		this.addHtml();
		this.attachKeydownHandler();
		this.addRemoveIcon();
		this.render();
		if(isAnAddButton){
			this.makeDisabled(isAnAddButton);
		}
	}
	
	addHtml(){
		this.element = $(`<div class="ui inverted card" style="background:black; box-shadow: none;"></div>`);
      	this.innerHtml =$(`<div class="ui icon input "></div>`);
        this.searchBox = $(`<input type="search" placeholder="Enter Course">`);	
        this.searchIcon = $(`<i class=" circular link search icon "></i>`);
        var self = this;
        this.searchIcon.click(function(){
        	console.log("pressed");
        	if(!this.active){
				self.startActive();
				self.enterPressed(self.inputText);
			}
        });
      	this.innerHtml.append(this.searchBox);
      	this.innerHtml.append(this.searchIcon);
      	this.element.append(this.innerHtml);

      	this.label = $(` <div class="content" ></div></div>`);
		this.element.prepend(this.label)
	}
	artificialText(textInput){
		this.searchBox.val(textInput);
		this.refreshKey();
		this.startActive();
		this.enterPressed(this.inputText);
	}
	makeDisabled(callback){
		//REMOVE
		this.innerHtml.addClass("disabled");
		this.label.css("opacity",".45");
		this.button=$(`<button style=" 
			position: absolute;
		    z-index: 2;
		    width: 20%;
		    min-width: 45px;
		    left: 37.5%;
		    height: 25%;
		    min-height: 45px;
    		top: 20px;" 
    		class="ui inverted icon button" data-tooltip="Add more courses" data-inverted="" data-position="right center">
  			<i class="add icon"></i>
			</button>`);
		this.removeIcon.detach();
		//ADD
		this.element.append(this.button);
		var self =this;

		this.button.on('click', function(){
			callback();
			self.removeDisabled();
		});
	}
	removeDisabled(){
		this.innerHtml.removeClass("disabled");
		this.label.css("opacity","1");
		this.label.append(this.removeIcon);
		this.button.remove();
	}
	addSwitch(){
		$(this.element).append(`<div class="content"><div class="ui toggle checkbox">
  			<input type="checkbox" name="public">
  			<label></label>
		</div></div>`);
	}
	popup(text){
		this.label.popup({
			content : text
		});

		this.label.popup('show');
		var self =this;
		setTimeout(function(){
			self.label.popup('hide');
		}, 3000);
	}
	addColor(color){
		this.label.css("background-color", color);
	}
	startLoad(){
		this.innerHtml.addClass('loading');
		this.innerHtml.addClass('disabled');
	}
	
	endLoad(){
		this.innerHtml.removeClass('loading');
		this.innerHtml.removeClass('disabled');
	}

	startActive(){
		this.active = true;
		this.searchIcon.addClass('disabled');
		this.searchIcon.removeClass('link');
	}
	endActive(){
		this.active=false;
		this.searchIcon.removeClass('disabled');
		this.searchIcon.addClass('link');
	}

	addRemoveIcon(){
		this.removeIcon = $(`<i class=" remove icon"></i>`); 
		var self =this;
		this.removeIcon.on('click', function(){
			self.deleteMe();
		});
		this.label.append(this.removeIcon);
	}
	render(){
		this.divToBindTo.append(this.element);
		
	}
	deleteMe(){
		this.element.remove();
		this.deleteCourseCallback(this.coursePointer);
	}
	focus(){
		this.searchBox.focus();
	}
	getKey(){
		return this.inputText;
	}
	refreshKey(){
		this.inputText = this.searchBox.val();
	}
	attachKeydownHandler(){
		var self = this;
		this.element.keydown(function(e) {
			setTimeout(function() {
				console.log(self.active);
				if(self.active && e.keyCode != 13){ //delete as long as enter not pressed, and its still active
					self.endActive();
					self.deleteCourseCallback(self.coursePointer);			
				}
				self.refreshKey();
				if (!self.active && e.keyCode == 13) { //enter is pressed  and its not already active
					self.startActive();
					self.enterPressed(self.inputText);
				}
			}, 20);
		});
	}
	attachCoursePointer(course){
		this.coursePointer = course;
	}
	attachDeleteHandler(callback){
		this.deleteCourseCallback = callback;
	}
	attachEnterPressHandler(callback){
		this.enterPressed = callback;
	}
}
