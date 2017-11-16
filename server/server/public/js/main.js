$(document).ready(function() {
	$("body").css('background-color', '#ef5350');
	var searchy = new SearchBox("search");
	var addNotey = new AddNoteBox('results' , 1024);
	var overheadloady = new OverheadLoader('body');
	var returnNotey = new ReturnNote('results');
	searchy.attachKeydownHandler();
	//Run on enter hit of search
	searchy.attachEnterPressHandler(function(key){
		//Add note section
		$("body").css('background-color', '#673ab7');//Purple
		addNoteBoxInit(key);
	});
	//Run everytime a server request is made
	searchy.attachServerRequestHandler(function(key){

		serverGetRequest(key,function(result){
			
			$("#results").empty();
			if (result) {
				//Found Note
				searchy.setFound(true);
				$("body").css('background-color', '#4caf50');//green
				returnNotey.addText(result);
			} else {
				searchy.setFound(false);
				$("body").css('background-color', '#f44336');//red		
				$("#searchBox > i").remove();

				if (searchy.getKey() == "") {
					searchy.addSearchButton();
				} else {
					$("#results").append(`<h3 style="text-align:center;" class="header inverted thin "><b>Cant find '${searchy.getKey()}'</b>:<i> smash that enter button to add a note to this key</i><h3>`);
					searchy.addNotFoundButton(function(key){
						addNoteBoxInit(key);
					});
				}		
			}
			
		});
	});
	
	//Run on add hit  
	function addNoteBoxInit(key){
		addNotey.setKey(key);
		addNotey.addHtml();
		addNotey.focus();
		addNotey.attachKeydownHandler();
		addNotey.attachSubmitHandler(function(key, note){
			overheadloady.addHtml();
			serverSetRequest(key, note, function() {
				//Found note
				overheadloady.complete();
				$('#results').empty();
				$("body").css('background-color', '#4caf50');//green
				returnNotey.addText(note);
				searchy.focus();
			}, function(){

				$('#progressBar').remove();
				$("#results").empty();
				dispNotFound(key);
			});
		});
		addNotey.attachExitHandler(function(note){
			if (note == "") {
				$("#results").empty();
				//dispAddNoteButton(key);
				searchy.focus();
			}
		});
	}
});



class SearchBox{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
	}
	focus(){
		$("#" + this.divToBindTo).focus();
	}
	getKey(){
		return this.key;
	}
	refreshKey(){
		this.key = $("#" + this.divToBindTo).val();
	}
	attachKeydownHandler(){
		
		var self = this;
		
			$("#" + this.divToBindTo).keydown(function(e) {
				setTimeout(function() {
					self.refreshKey();
					if (e.keyCode == 13) {
						
						if(!self.found){
							self.enterPressed(self.key);
						}
					} else {
						
						self.serverRequest(self.key);
					}
				}, 20);
			});
		
	}
	attachEnterPressHandler(callback){
		this.enterPressed = callback;
	}
	setFound(input){
		this.found = input;
	}
	attachServerRequestHandler(callback){
		
			this.serverRequest = callback;
	}
	addNotFoundButton(callback){
		var self = this;
		var element = $('<i id="addNew" class="add icon link"></i>');
		$("#searchBox").append(element);
		$('#addNew').click(function() {
			callback(self.key);
		});
	}
	addSearchButton(){
		$("#searchBox").append('<i class="search icon"></i>');
	}
}
class OverheadLoader{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
	}
	addHtml(){
		$(this.divToBindTo).append(`<div style ="width: 100%; position:absolute; top:0px;" class="ui black tiny progress" id="progressBar">
                  <div class="bar"></div>
                </div>`);
	}
	complete(){
		$('#progressBar').progress({
			percent: 100
		});
		setTimeout(function() {
			$('#progressBar').remove();
		}, 500);
	}
}
class AddNoteBox{
	constructor(divToBindTo, textBoxSize){
		this.divToBindTo = divToBindTo;
		this.textBoxSize = textBoxSize;
	}
	addHtml(){
		$("#" + this.divToBindTo).empty();
		$("#" + this.divToBindTo).append(`<h3 class="header inverted thin ">Enter in your note<h3>`);
		$("#" + this.divToBindTo).append(`<div class="ui search basic segment center aligned">
                <div class="ui icon input transparent inverted " style="width:100%;" id="textBox">
          <textarea id="textArea" maxlength="${this.textBoxSize}"></textarea>
          
          </div>
          </div>`);
		$("#" + this.divToBindTo).append(`<h3 style="text-align:center;" class="header inverted thin "><i> Smash that enter button to add this note (Shift enter if you want a new line)</i><h3>`);
	}
	focus(){
		$("#textArea").focus();
	}
	setKey(key){
		this.key = key;
	}
	refreshNote(){
		this.note = $("#textArea").val();
	}
	attachKeydownHandler(){
		var self=this;
		setTimeout(function() {
			$("#textArea").keydown(function(e) {
				if (e.keyCode == 13 && !e.shiftKey) {
					self.refreshNote();
					if(self.note != ""){
						self.serverRequest(self.key, self.note);
					}
				}
				if (e.keyCode == 8) {
					self.refreshNote();
					setTimeout(function(){
						self.exit(self.note);
					},10);
				}
			});
		},10);
	}
	attachExitHandler(callback){
		this.exit = callback;
	}
	attachSubmitHandler(callback){
		this.serverRequest = callback;
	}
}
class ReturnNote{
	constructor(divToBindTo){
		this.divToBindTo = divToBindTo;
	}
	addText(note){
		$('#' + this.divToBindTo).append(note);
	}
}



//Make get note server request
function serverGetRequest(key, callback) {
	if(key==""){
		callback(false);
	}else{
		$.ajax({
			type: "POST",
			url: "/getNote",
			data: JSON.stringify({
				"key": key
			}),
			success: function(data) {
				callback(data);
			},
			error: function() {
				callback(false);
			},
			contentType: 'application/json'
		});
	}
}
//Set the note server request
function serverSetRequest(key, note, callback) {
	console.log(note);
	if(key=="" || note==""){
		callback(false);
	}else{
		$("#textBox").addClass("disabled field");
		$.ajax({
			type: "POST",
			url: "/setNote",
			data: JSON.stringify({
				"key": key,
				"note": note
			}),
			success: function(data) {
				callback();
			},
			error: function() {
				console.log("fuck");
			},
			contentType: 'application/json'
		});
	}
}