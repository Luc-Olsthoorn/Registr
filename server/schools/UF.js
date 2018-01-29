const request = require("request");

class UF {
  constructor() {}
  getCoursePeriods(req, res) {}
  getCourseInfo(req, res) {
    let url =
      "https://one.uf.edu/apix/soc/schedule/?category=RES&course-code=" +
      req.body.course +
      "&course-title=&cred-srch=&credits=&day-f=&day-m=&day-r=&day-s=&day-t" +
      "=&day-w=&days=false&dept=+&eep=&fitsSchedule=false&ge=&ge-b=&ge-c=&ge-d" +
      "=&ge-h=&ge-m=&ge-n=&ge-p=&ge-s=&instructor=&last-row=0&level-max=--&level-min" +
      "=--&no-open-seats=false&online-a=&online-c=&online-h=&online-p=&period-b=&period-e" +
      "=&prog-level=+&section=&term=20181&var-cred=true&writing=";

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
