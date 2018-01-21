class filterHandler{
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
			    Filter
			  </div>
			 </div>
		    
		  `);
		element.accordion(); 
		var underTheFold = $(`<div class="ui grid content"></div>`);
		var days = $(`<div class="eight wide column"></div>`);
		var times = $(`<div class="eight wide column"></div>`);
		this.filterArray = [
			{name: "Monday" , val: true , type: "day"},
			{name: "Tuesday" , val: true, type: "day"},
			{name: "Wednesday" , val: true, type: "day"},
			{name: "Thursday" , val: true, type: "day"},
			{name: "Friday" , val: true, type: "day"},
			{name: "Period 1" , val: true, type: "time"},
			{name: "Period 2" , val: true, type: "time"},
			{name: "Period 3" , val: true, type: "time"},
			{name: "Period 4" , val: true, type: "time"},
			{name: "Period 5" , val: true, type: "time"},
			{name: "Period 6" , val: true, type: "time"},
			{name: "Period 7" , val: true, type: "time"},
			{name: "Period 8" , val: true, type: "time"},
			{name: "Period 9" , val: true, type: "time"},
			{name: "Period 10" , val: true, type: "time"},
			{name: "Period 11" , val: true, type: "time"},
			{name: "Period E1" , val: true, type: "time"},
			{name: "Period E2" , val: true, type: "time"},
			{name: "Period E3" , val: true, type: "time"}
				];
		for(var i=0; i<this.filterArray.length; i++){
			if(this.filterArray[i].type == "day"){
				var filter = new filterBox(this.filterArray[i].name, days);
			}else if(this.filterArray[i].type == "time"){
				var filter = new filterBox(this.filterArray[i].name, times);
			}
			var self =this;
			filter.attachOnChange(function(){
				self.filterClicked();
			});
			this.filterArray[i].filterBox = filter;
		}
		underTheFold.append(days);
		underTheFold.append(times);
		
		element.append(underTheFold);
		this.divToBindTo.append(element);
	}
	getValues(){
		for(var i=0; i<this.filterArray.length; i++){
			this.filterArray[i].val = this.filterArray[i].filterBox.getValue();
		}
		console.log(this.filterArray);
		return this.filterArray;
	}
	attachOnFilterClick(callback){
		this.filterClicked = callback;
	}
}
class filterBox{
	constructor(name, divToBindTo){
		this.name = name;
		this.divToBindTo = divToBindTo;
		this.addHtml();
	}
	addHtml(){
		this.outer =$(`<div class="inline field"></div>`);
		this.checkbox = $(`<div class="ui checked toggle checkbox"></div>`);
		this.actualBox =$(`
			      <input type="checkbox" checked="" tabindex="0" class="hidden">
			      <label>${this.name}</label>
			      `);

		this.checkbox.checkbox();
		var self =this;
		this.checkbox.on("click", function(){
			self.onChange();
		});
		this.checkbox.append(this.actualBox);
		this.outer.append(this.checkbox);
		this.divToBindTo.append(this.outer);
	}
	getValue(){
		return this.actualBox.is(":checked");
	}
	attachOnChange(callback){
		this.onChange = callback;
	}
}