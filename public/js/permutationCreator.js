class permutationCreator {
  run(courses, filters) {
    let permutation = this.createPermutation(courses);
    let filtered = this.removeOverlapAndFilter(permutation, courses, filters);
    return filtered;
  }
  removeOverlapAndFilter(permutation, courses, filters) {
    //looping through every possible calender
    var output = [];
    var toDelete = false;
    for (var i = 0; i < permutation.length; i++) {
      //console.log("newCalender" + i);
      var hit = {};
      //looping through every course
      for (var j = 0; j < permutation[i].length; j++) {
        //console.log(permutation[i][j].section);
        var sectionMeetTimes = courses[
          permutation[i][j].course
        ].getSectionTimes(permutation[i][j].section);

        //looping through every meet time
        for (var b = 0; b < sectionMeetTimes.length; b++) {
          //looping thru every day
          for (var k = 0; k < sectionMeetTimes[b].meetDays.length; k++) {
            //looping thru every period of the meettime
            for (
              var l = parseInt(
                convertToNum(sectionMeetTimes[b].meetPeriodBegin),
                10
              );
              l <
              parseInt(convertToNum(sectionMeetTimes[b].meetPeriodEnd), 10) + 1;
              l++
            ) {
              var key =
                " " + l + " " + convertToNum(sectionMeetTimes[b].meetDays[k]);
              //console.log(key);
              if (
                hit[key] ||
                !this.checkFilter(sectionMeetTimes[b].meetDays[k], l, filters)
              ) {
                //console.log("hit" + key);
                toDelete = true;
              } else {
                hit[key] = 1;
              }
            }
          }
        }
      }
      if (!toDelete) {
        //console.log("pushing");
        output.push(permutation[i]);
      } else {
        toDelete = false;
      }
    }
    //console.log(output);
    return output;
  }
  createPermutation(courses) {
    //creates a permutation of every possible section
    //algo riddim basis - btw this sucks at like O(n^3) but it doesnt get much load
    //go to a course
    //duplicate every current array section times, and add a section to each
    //store i,j
    var self = this;
    var oldArray = [];
    var newArr = [];
    for (var j = 0; j < courses[0].getNumSections(); j++) {
      oldArray[j] = [{ course: 0, section: j }];
    }

    if (1 < courses.length) {
      for (var i = 1; i < courses.length; i++) {
        var newArr = [];
        for (var k = 0; k < oldArray.length; k++) {
          for (var j = 0; j < courses[i].getNumSections(); j++) {
            newArr.push(oldArray[k].concat([{ course: i, section: j }]));
          }
        }

        oldArray = newArr.slice();
      }
    } else {
      newArr = oldArray.slice();
    }
    //console.log(newArr);
    return newArr;
  }
  //UF has late classes with special codes, this strips them and returns an integer
  convertToNum(inputTime) {
    switch (inputTime) {
      case "E1":
        return 12;
        break;
      case "E2":
        return 13;
        break;
      case "E3":
        return 14;
        break;
      default:
        return inputTime;
        break;
    }
  }
  checkFilter(day, time, filters) {
    var self = this;
    //console.log(self.filters);
    var map = {
      M: "Monday",
      T: "Tuesday",
      W: "Wednesday",
      R: "Thursday",
      F: "Friday",
      1: "Period 1",
      2: "Period 2",
      3: "Period 3",
      4: "Period 4",
      5: "Period 5",
      6: "Period 6",
      7: "Period 7",
      8: "Period 8",
      9: "Period 9",
      10: "Period 10",
      11: "Period 11",
      12: "Period E1",
      13: "Period E2",
      14: "Period E3"
    };
    var result = filters.find(function(element) {
      return element.name == map[day];
    });

    if (!result.val) {
      return false;
    }
    var result = filters.find(function(element) {
      return element.name == map[time];
    });
    //console.log(time);
    //console.log(map[time]);
    //console.log(result);
    if (!result.val) {
      return false;
    }
    return true;
  }
}
//UF has late classes with special codes, this strips them and returns an integer
function convertToNum(inputTime) {
  switch (inputTime) {
    case "E1":
      return 12;
      break;
    case "E2":
      return 13;
      break;
    case "E3":
      return 14;
      break;
    default:
      return inputTime;
      break;
  }
}
