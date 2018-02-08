
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
      	var innerHtml =$(`<div class="ui icon input "></div>`);
        this.searchBox = $(`<input type="text" placeholder="Enter Course">`);	
        var searchIcon = $(`<i class="search icon "></i>`);
        var self = this;
        searchIcon.click(function(){
        	self.enterPressed;
        });
      	innerHtml.append(this.searchBox);
      	innerHtml.append(searchIcon);
      	this.element.append(innerHtml);

      	this.label = $(` <div class="content" > </div>`);
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
				if(this.active && e.keyCode != 13){
					this.active=false;
					self.deleteCourseCallback(self.coursePointer);
					
				}
				self.refreshKey();
				if (e.keyCode == 13) {
					if(!this.active){
						this.active = self.inputText;
						self.enterPressed(self.inputText);
					}

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
