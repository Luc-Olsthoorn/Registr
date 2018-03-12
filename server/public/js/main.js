$(document).ready(function() {
	console.log("eskeddit");
	var main = new Main();
	$("body").css('background-color', '#2196f3');
	main.main();
});
class Main{
	constructor(){
		this.colorCounter = 0;
		this.colorArray = ["#e91e63","#9c27b0","#3f51b5","#00bcd4","#4caf50","#ff9800"];
	}
	main(){
		var nothingSelected = $(`
			<div id= "nothingSelected">
			
	  </div>
	    <div style="text-align:center; top: 24%; ">
	       <h1 class="header inverted thin " style="text-align:center; font-size: 60px; margin:0px;"> Oops you have nothing selected. </h1>

	    </div></div`);	
		var self =this;
		
		this.calendarHandly = new calendarHandler($('#results'));
		this.searchy = new searchHandler($('#search'));
		this.filters = new filterHandler($('#filters'));
		//Fake filters 
		var temp = new filterHandler($('#filtersExample'));
		temp.openAccordion();
		//Get color
		this.searchy.attachColorGetter(function(){
			return self.getColor();
		});
		//Add a single search manually
		this.searchy.newSearchBox(this.searchy.getUnderTheFold(), false);
		this.searchy.newSearchBox(this.searchy.getUnderTheFold(), true);

		//Change of courses
		this.searchy.attachDataSend(function(input){
			self.calendarHandly.handleInputUpdate(input);
		});
		//Change of filters
		this.filters.attachOnFilterClick(function(){
			self.calendarHandly.handleInputUpdate({"updateFilters":true});
		});
		this.settings = new settingsHandler($('#settings'),function(){
			self.calendarHandly.attachGetSettings(function(){
				return self.settings.getValues();
			});
			//Change of settings (year / semester)
			self.settings.attachOnSettingsClick(function(input){
				self.calendarHandly.handleInputUpdate({"updateSettings":true});
			});
		});
		//Get filters
		this.calendarHandly.attachGetFilters(function(){
			return self.filters.getValues();
		});
		
		//Attach empty result
		this.calendarHandly.attachRunOnEmpty(function(){
			$('#results').append(nothingSelected);
		});
		
		//TEST
		$("#tryItOutBtn").on("click", function(){
			self.searchy.addArtificialText(["cop3502","cop4600","iuf1000"]);
		});
		
	}
	getColor(){
		//console.log(this);
		var color = this.colorArray[this.colorCounter];
		this.colorCounter = (this.colorCounter + 1) % this.colorArray.length;
		return color;
	}
	
}
