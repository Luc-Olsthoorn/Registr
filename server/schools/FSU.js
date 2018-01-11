const request = require('request');

class FSU {
    constructor(){

    }
    getCoursePeriods(req, res) {

    }
    getCourseInfo(req, res) {
        let url = 'https://fsusucks.com/wegoodtho';

        console.log(url);
        request(url, function(error, response, html){
            if(!error){
                console.log("got it");
                res.send(html);
            }
        });
    }
}

module.exports = new FSU();