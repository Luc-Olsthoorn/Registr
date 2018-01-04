class addNewSearchButton{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
		this.addHtml();
		this.render();
	}
	addHtml(){
		this.element = $(`<button class="ui basic icon button">
  			<i class="add icon"></i>
			</button>`);
	}
	attachClickHandler(callback){
		this.element.on('click', function(){
			callback();
		});
	}
	render(){
		$('#' + this.divToBindTo).append(this.element);
	}
}
class SearchBox{
	constructor(divToBindTo){
		//Order matters
		this.divToBindTo = divToBindTo;
		this.active=false;
		this.addHtml();
		this.attachKeydownHandler();
		this.render();


	}
	addHtml(){
		this.element = $(`<div class="ui inverted card"></div>`);
      	var innerHtml =$(`<div class="ui icon input "></div>`);
        this.searchBox = $(`<input type="text" placeholder="Enter Course">`);	
        var searchIcon = $(`<i class="search icon "></i>`);
      	innerHtml.append(this.searchBox);
      	innerHtml.append(searchIcon);
      	this.element.append(innerHtml);

	}
	addSwitch(){
		$(this.element).append(`<div class="content"><div class="ui toggle checkbox">
  			<input type="checkbox" name="public">
  			<label></label>
		</div></div>`);
	}
	addColor(color){
		if(this.label){
			this.label.remove();
		}
		this.label = $(` <div class="content" style="background-color: ${color}"> </div>`);
		this.element.prepend(this.label)
	}
	addRemoveIcon(callback){
		this.removeIcon = $(`<i class=" remove icon"></i>`); 
		this.removeIcon.on('click', function(){
			callback();
		});
		this.label.append(this.removeIcon);
	}
	render(){
		this.addSwitch();
		$('#'+ this.divToBindTo).append(this.element);
		
	}
	deleteMe(){
		this.element.remove();
		self.cancelPressed(course);
	}
	focus(){
		this.searchBox.focus();
	}
	getKey(){
		return this.course;
	}
	refreshKey(){
		this.course = this.searchBox.val();
	}
	attachKeydownHandler(){
		var self = this;
		this.element.keydown(function(e) {
			setTimeout(function() {
				
				if(this.active && e.keyCode != 13){
					this.active=false;
					self.cancelPressed(self.course);
					
				}
				self.refreshKey();
				if (e.keyCode == 13) {
					if(!this.active){
						this.active = self.course;
						self.enterPressed(self.course);
					}

				}
			}, 20);
		});
		
	}

	attachCancelPressHandler(callback){
		this.cancelPressed = callback;
	}
	attachEnterPressHandler(callback){
		this.enterPressed = callback;
	}
}