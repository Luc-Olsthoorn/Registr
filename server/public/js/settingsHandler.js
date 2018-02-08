class settingsHandler{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
		this.addHtml();
	}
	addHtml(){
		var element = $(`
			<div class="ui styled inverted fluid accordion" style="background-color: #ffffff00;
    box-shadow: none;">
			  <div class="title">
			    <i class="dropdown icon"></i>
			    Settings
			  </div>
			 </div>
		    
		  `);
		element.accordion(); 
		var underTheFold = $(`<div class="ui grid content"></div>`);
		this.settingsArray = [
			{
				name: "Semester" , 
				val: "Spring", 
				options: [
					"Spring",
					"Summer",
					"Fall"
					],
				defaultVal: "Spring"
			},
			{
				name: "Year" , 
				val: 2018, 
				options: [
					2016,
					2017,
					2018,
					2019
					],
				defaultVal: "2018" 				
			}
			
				];
		for(var i=0; i<this.settingsArray.length; i++){
			
			var dropDownBoxy = new dropDownBox(this.settingsArray[i].name, this.settingsArray[i].options, this.settingsArray[i].defaultVal, underTheFold);

			var self =this;
			dropDownBoxy.attachOnChange(function(){
				self.filterClicked();
				console.log("settings changed pt.2");
			});
			this.settingsArray[i].settingsDropDown = dropDownBoxy;
		}
		element.append(underTheFold);
		this.divToBindTo.append(element);
	}
	getValues(){
		for(var i=0; i<this.settingsArray.length; i++){
			this.settingsArray[i].val = this.settingsArray[i].settingsDropDown.getValue();
		}
		console.log(this.settingsArray);
		return this.settingsArray;
	}
	attachOnSettingsClick(callback){
		console.log("settings changed pt.3");
		this.filterClicked = callback;

	}
}
class dropDownBox{
	constructor(name, options, defaultVal,divToBindTo){
		this.options = options; 
		this.name = name;
		this.divToBindTo = divToBindTo;
		this.defaultVal = defaultVal;
		this.addHtml();
	}
	addHtml(){
		this.outer = $(`<div class="ui selection dropdown" style="
			    background-color: transparent;
			    border: 2px solid white;
			    color: white;
			">
			<input type="hidden">
		  	<i class="dropdown icon"></i>
		  	<div class="default text">${this.defaultVal}</div>

		</div>`);
		
		this.inner = $(`<div class="menu"></div>`);
		for(var i=0; i<this.options.length; i++){
			this.inner.append(`<div class="item" data-value="${this.options[i]}">${this.options[i]}</div>`);
		}
		
		var self = this;
		this.inner.on("click", function(){
			console.log("clicked settiings");
			self.onChange();
		});
		this.outer.append(this.inner);
		this.outer.dropdown();
		this.outer.dropdown('set value', this.defaultVal);
		
		this.divToBindTo.append(this.outer);
	}
	getValue(){
		return this.outer.dropdown('get value');
	}
	attachOnChange(callback){
		this.onChange = callback;
	}
}