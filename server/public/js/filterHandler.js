class filterHandler{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
		this.addHtml();
	}
	addHtml(){
		var name = "swag";
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
		var underTheFold = $(`<div class="content"></div>`);
		this.filterArray = [
			{name: "Monday" , val: true},
			{name: "Tuesday" , val: true},
			{name: "Wednesday" , val: true},
			{name: "Thursday" , val: true},
			{name: "Friday" , val: true},
				];
		for(var i=0; i<this.filterArray.length; i++){
			var filter = new filterBox(this.filterArray[i].name, underTheFold);
			this.filterArray[i].filterBox = filter;
		}
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
}
class filterBox{
	constructor(name, divToBindTo){
		this.name = name;
		this.divToBindTo = divToBindTo;
		this.addHtml();
	}
	addHtml(){
		this.checkbox = $(`<div class="ui toggle checkbox"></div>`);
		this.actualBox =$(`
			      <input type="checkbox" tabindex="0" class="hidden">
			      <label>${this.name}</label>
			      `);
		this.checkbox.checkbox();
		this.checkbox.append(this.actualBox);
		this.divToBindTo.append(this.checkbox);
	}
	getValue(){
		return this.actualBox.is(":checked");
	}
}