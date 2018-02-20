
class SearchBox{
	constructor(divToBindBefore){
		//Order matters
		this.divToBindBefore = divToBindBefore;
		this.active=false;
		this.addHtml();
		this.attachKeydownHandler();
		this.render();
	}
	addHtml(){
		this.element = $(`<div class="ui inverted card" style="box-shadow: none;"></div>`);
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

	addRemoveIcon(callback){
		this.removeIcon = $(`<i class=" remove icon"></i>`); 
		this.removeIcon.on('click', function(){
			callback();
		});
		this.label.append(this.removeIcon);
	}
	render(){
		this.divToBindBefore.before(this.element);
		
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
