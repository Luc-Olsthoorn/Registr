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

let schools = {
  UF: require("./schools/UF"),
  FSU: require("./schools/FSU")
};

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/getMenuSettings", function(req, res) {
  schools["UF"].getSettingsMenu(res);
});
app.post("/getCourseInfo", function(req, res) {
  console.log("course:" + req.body.course);

  // eventually get the school from the request like schools[req.body.school].getCourseInfo(req, res)
  schools["UF"].getCourseInfo(req, res);
});

// app.get("/getCoursePeriods", function(req, res) {
//   // eventually get the school from the request like schools[req.body.school].getCoursePeriods(req, res)
//   schools["UF"].getCoursePeriods(req, res);
// });

//start this bitch up
const server = app.listen(process.env.PORT || PORT, function() {
  console.log("Server listening on port " + PORT);
});
