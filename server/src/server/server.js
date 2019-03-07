//kill it when I say kill it
process.on("SIGINT", function() {
  process.exit();
});

//Doesnt die all the time
process.on("uncaughtException", function(err) {
  console.log("Caught exception: " + err);
});

("use strict");
const http = require("http");
const express = require("express"); //routing
const app = express();

const path = require("path");
const bodyParser = require("body-parser");

const PORT = 8080;

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.text()); // to support JSON-encoded bodies

const interfacer = require("./oneUFInterfacer");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/getMenuSettings", function(req, res) {
  interfacer.getSettingsMenu(res);
});

app.get("/generateAllPossibleCourses", function(req, res) {
  interfacer.generatePossibleCourses(res);
});
app.get("/getAllPossibleCourses", function(req, res) {
  interfacer.getPossibleCourses(res);
});
app.post("/getCourseInfo", function(req, res) {
  console.log("course:" + req.body.course);
  interfacer.getCourseInfo(req, res);
});

//start this bitch up
const server = app.listen(process.env.PORT || PORT, function() {
  console.log("Server listening on port " + PORT);
});
