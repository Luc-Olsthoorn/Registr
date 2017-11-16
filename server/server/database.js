var connected = false;
var database;
exports.connect = function (callback) {
	
    var MongoClient = require('mongodb').MongoClient, format = require('util').format;

	MongoClient.connect('mongodb://database:27017/mydb', function(err, db) {
  		if(err){
  			console.log("failed connecting to mongodb. Trying again.");
  			callback(false);
  		}else{
	    	connected = true;
	    	database = db;
	    	console.log("connected to mongoDB");
	    	callback(true);
	    }
	});
}
exports.query = function (){
	if(connected)
	{
		return database;
	}
	else 
	{
		console.log("database not connected");
	}
}
