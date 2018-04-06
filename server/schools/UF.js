const request = require("request");
const fs = require('fs');
class UF {
  constructor() {}
  getCoursePeriods(req, res) {}
  getSettingsMenu(res){
    var outputSettingsMenu = [
      {
        name: "Semester",
        defaultVal: "2188",
        options : [
          {"val":"20181","name":"Spring 2018"},
          {"val":"20185","name":"Summer 2018"},
          {"val":"20185A","name":"Summer A 2018"},
          {"val":"20185B","name":"Summer B 2018"},
          {"val":"20185C","name":"Summer C 2018"},
          {"val":"2188","name": "Fall 2018"}
        ]
      },
      {
        name: "Categories",
        defaultVal: "RES",
        options : [
          {"val":"RES","name":"Campus / Web / Special Program"},
          {"val":"UFO","name":"UF Online Program"},
          {"val":"IA","name":"Innovation Academy"},
          {"val":"HUR","name":"Puerto Rico/U.S. Virgin Islands"}
        ]
      }
    ];
    res.send(JSON.stringify(outputSettingsMenu));
  }
  recourse(x, res){
    var self =this;
      console.log("Made " + x + " request");
      var url = "https://one.uf.edu/apix/soc/schedule/?category=CWSP&term=2188&last-control-number=" + x;
        request(url, function(error, response, html) {
          if (!error) {
            var temp = JSON.parse(html);
            for(var i =0; i<temp[0].COURSES.length; i++){
              self.courses.push(temp[0].COURSES[i].code);
              console.log(temp[0].COURSES[i].code);
            }
            if(x+50>10832){
              fs.writeFile("/public/json/allPossibleCourses.json", JSON.stringify(self.courses), 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
              });
            } 
            else{
              self.recourse(x+50, res);
            }
            
          }
        });
      
  }
  generatePossibleCourses(res){
    var x =0;
    this.courses = [];
    this.recourse(x, res);
  }
  getPossibleCourses(res){
    var self = this;
    if(this.possibleCourses){
      res.send(JSON.stringify(self.possibleCourses));
    }else{
      fs.readFile('/public/json/allPossibleCourses.json', 'utf8', function(err, data) {
        if(!err){
          res.header("Content-Type",'application/json');
          self.possibleCourses = JSON.parse(data);
          //console.log(self.possibleCourses);
          res.send(JSON.stringify(self.possibleCourses));
        }else{
          console.log(err);
        }
        
        
      });
    }
  }


  getCourseInfo(req, res) {
    var fallMap = {
      "UFO" : "UFOL",
      "RES": "CWSP"
    };
    //Current           Fall
    //c traditional     traditional
    //a online(80-99%)  online 100%
    //h hybrid          hybrid 
    //p                 not online
    //https://one.uf.edu/apix/soc/schedule/?category=CWSP&class-num=&course-code=cop3502&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t=&day-w=&days=false&dept=+&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-control-number=0&level-max=--&level-min=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e=&prog-level=+&term=2188&wr-2000=&wr-4000=&wr-6000=&writing=
    let prefix = "";
    let cat = "";
    let classNum = "";
    let courseCode= "";
    if(req.body.semester == "2188"){
        cat = fallMap[req.body.category]
        prefix = "soc";
      }else{
        cat = req.body.category;
        prefix = "soc-summer"
      }
    if(!isNaN(req.body.course) && req.body.course.length == 5){
      //Searching by class number 
      if(req.body.semester != "2188"){
        res.send(JSON.stringify({"error": "noSemesterSupport"}));
        return;
      }
       classNum= req.body.course;
    }else if(req.body.course.length < 6 ||req.body.course.length > 10){
      //Searching by course code
      courseCode = req.body.course;
    }else{
      res.send(JSON.stringify({"error": "length"}));
      return;
    }
    let url =
      "https://one.uf.edu/apix/"+
      prefix+
      "/schedule/?category="+
       cat + 
       "&class-num="+ classNum + 
      "&course-code=" + courseCode+
      "&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t=&day-w=&days=false&dept=+&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-control-number=0&level-max=--&level-min=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e=&prog-level=+&term="+
      req.body.semester+
      "&wr-2000=&wr-4000=&wr-6000=&writing=";
      console.log(url);
    request(url, function(error, response, html) {
      if (!error) {
        console.log("got it");
        res.send(html);
      }
    });
  }
}

module.exports = new UF();
