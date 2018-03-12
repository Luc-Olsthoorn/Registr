const request = require("request");

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
    var prefix = "";
    var cat = "";
    if(req.body.semester == "2188"){
        cat = fallMap[req.body.category]
        prefix = "soc";
      }else{
        cat = req.body.category;
        prefix = "soc-summer"
      }
    let url =
      "https://one.uf.edu/apix/"+
      prefix+
      "/schedule/?category="+
       cat + 
      "&course-code=" +
      req.body.course +
      "&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t" +
      "=&day-w=&days=false&dept=+&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d" +
      "=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-row=0&level-max=--&level-min" +
      "=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e" +
      "=&prog-level=+&section=&term="+
     req.body.semester + "&var-cred=true&writing=";

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
