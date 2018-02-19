$(document).ready(function() {
	console.log("eskeddit");
	var main = new Main();
	$("body").css('background-color', '#2196f3');
	main.main();
});
class Main{
	constructor(){
		this.colorCounter = 0;
		this.colorArray = ["#e91e63","#9c27b0","#3f51b5","#2196f3","#00bcd4","#4caf50","#ff9800"];
	}
	main(){
		var nothingSelected = $(`
			<div id= "nothingSelected">
			<div style ="    background-image: url(img/daddy.jpg);
	    height: 120%;
	    background-position: center;
	    background-repeat: no-repeat;
	    z-index: -1;
	    background-size: cover;
	    position: absolute;
	    width: 125%;
	    top: -75px;
	    left: -50px;">
	  </div>
	    <div style="text-align:center; top: 24%; ">
	       <h1 class="header inverted thin " style="text-align:center; background: rgba(0, 0, 0, 0.4); font-size: 60px; margin:0px;"> Oops you have nothing selected. </h1>
	      <h6 class="header inverted thin "> Enjoy this photo</h6>

	    </div></div`);	
		var self =this;
		this.settings = new settingsHandler($('#settings'));
		this.calendarHandly = new calendarHandler($('#results'));
		this.searchy = new searchHandler($('#search'));
		this.filters = new filterHandler($('#filters'));
		//Get color
		this.searchy.attachColorGetter(function(){
			return self.getColor();
		});
		//Add a single search manually
		this.searchy.newSearchBox(this.searchy.getButtonElement());
		//Change of courses
		this.searchy.attachDataSend(function(input){
			self.calendarHandly.handleInputUpdate(input);
		});
		//Change of filters
		this.filters.attachOnFilterClick(function(){
			self.calendarHandly.handleInputUpdate({"updateFilters":true});
		});
		//Change of settings (year / semester)
		this.settings.attachOnSettingsClick(function(input){
			console.log("settings changed pt.4");
			self.calendarHandly.handleInputUpdate({"updateSettings":true});
		});
		//Get filters
		this.calendarHandly.attachGetFilters(function(){
			return self.filters.getValues();
		});
		this.calendarHandly.attachGetSettings(function(){
			return self.settings.getValues();
		});
		//Attach empty result
		this.calendarHandly.attachRunOnEmpty(function(){
			$('#results').append(nothingSelected);
		});
		
	}
	getColor(){
		//console.log(this);
		var color = this.colorArray[this.colorCounter];
		this.colorCounter = (this.colorCounter + 1) % this.colorArray.length;
		return color;
	}
	
}
