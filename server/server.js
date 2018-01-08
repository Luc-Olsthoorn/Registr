//kill it when I say kill it
process.on('SIGINT', function() {
    process.exit();
});
//Doesnt die all the time
process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});
"use strict";
var http = require('http');
var express = require('express'); //routing
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var request = require('request');

var PORT=8080; 

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.text() );       // to support JSON-encoded bodies


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
  		res.sendFile(path.join(__dirname, 'public/index.html'));
	});
app.post('/getCourseInfo', function(req, res){
	console.log("course:" + req.body.course);
	url = 'https://one.uf.edu/apix/soc/schedule/?category=RES&course-code='+req.body.course+'&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t=&day-w=&days=false&dept=+&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-row=0&level-max=--&level-min=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e=&prog-level=+&section=&term=20181&var-cred=true&writing=';
	console.log(url);
	request(url, function(error, response, html){
		if(!error){
			console.log("got it");
			res.send(html);
		}
	});
	
	

});



//start this bitch up
var server = app.listen(process.env.PORT || PORT, function(){
  	console.log("Server listening on port " + PORT);
});
