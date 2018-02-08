const request = require("request");

class UF {
  constructor() {}
  getCoursePeriods(req, res) {}
  
  getCourseInfo(req, res) {
    var semesterMap = {
      "Spring" : 1,
      "Fall": 8,
      "Summer": 5
    };
    let url =
      "https://one.uf.edu/apix/soc/schedule/?category=RES&course-code=" +
      req.body.course +
      "&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t" +
      "=&day-w=&days=false&dept=+&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d" +
      "=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-row=0&level-max=--&level-min" +
      "=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e" +
      "=&prog-level=+&section=&term="+
      req.body.year +
      semesterMap[req.body.semester] + "&var-cred=true&writing=";

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
