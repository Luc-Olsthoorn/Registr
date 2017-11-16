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

var PORT=8080; 

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.text() );       // to support JSON-encoded bodies

var database = require('./database.js');	
connectDB(function(){
	var collectionName= "myTable";
	database.query().createCollection(collectionName, function(err, res) {
		if (err) throw err;
		console.log("Collection created!");

	});
	console.log("This bitch ready");
});
function connectDB(callback){
	database.connect(function(success){
		if(success){
			callback();
		}else{
			setTimeout(connectDB.bind(this, callback), 1000);
		}

	});
};

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
  		res.sendFile(path.join(__dirname, 'public/index.html'));
	});
app.post('/getNote', function(req, res){
	console.log("key:" + req.body.key);
 	var collection = database.query().collection('myTable');
 	collection.find({"key" :req.body.key}).toArray(function(err, records) {
		if(err)//cannot connect to database
		{
			console.log("error getting records");
		}
		else if(records[0] == null)//cannot find username
		{
			res.send(false);
		}
		else
		{
			res.send(records[0].note);
		}
	});


});
app.post('/setNote', function(req, res){
	console.log("key:" + req.body.key);
	console.log("Note:" + req.body.note);
	var collection = database.query().collection('myTable');
	collection.insert({
		key:req.body.key,
		note: req.body.note
	}, function(err, docs) {
		if(err){
			console.log("error registering");
		}
		else{
			res.send(docs.note);
		}
	});
});
//start this bitch up
var server = app.listen(PORT, function(){
  console.log('Server listening on port');
});
