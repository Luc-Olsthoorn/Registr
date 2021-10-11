import {menu} from '../services/UF.js';
import {colorArray} from '../services/UF.js';
import {prepareInput} from '../services/queryservice.js';
const initState = {
    courseInput:[
    {name:"",color:colorArray[0],state:"search",error:null,online:"true",hybird:"true",traditional:"true"},
    {name:"",color:colorArray[1],state:"search",error:null,online:"true",hybird:"true",traditional:"true"},
    {name:"",color:colorArray[2],state:"search",error:null,online:"true",hybird:"true",traditional:"true"}
    ],
  courses:[],
  calendars:[],
  updateCalendar:false,
  currColor: 3,
  numCalendarsToDisplay:10,
  filters:{},
  filteredCalendars:[],
  updateFilters:false,
  filterPushedDown:false,
  numFiltered:0,
  loading:false,
  calendarDrawers:{},
  pinnedCalendars:{},
  bookMarkOnly:false,
  numBookmarked:0,
  choices:menu.semester.options,
  semesterVal:menu.semester.defaultVal,
  pinnedSections:{}
}

let mainReducer = (state = initState, action)=>{
  switch (action.type) {
  	case "NEW_COURSE":
      return {
        ...state,
    	courses:[
        ...state.courses,
            action.data.course
        ],
      updateCalendar:true,
      loading:false,
      calendarDrawers:{},
      numCalendarsToDisplay:10,

      courseInput:[
        ...state.courseInput.slice(0, action.data.index),
        {
         ...state.courseInput[action.data.index],
         courseValue:action.data.course
        },
        ...state.courseInput.slice(action.data.index+1),
      ]

      }
    break;
    case "TOGGLE_INFORMATION_DRAWER":
      return {
          ...state,
          calendarDrawers:{
            ...state.calendarDrawers,
            [action.data.number]:action.data.information
          }
        }
    break;
    case "TOGGLE_PIN_SECTION":
      return {
          ...state,
          pinnedSections:{
            ...state.pinnedSections,
            [action.data.courseName]:action.data.classNumber
          },
          updateFilters:true,
        }
    break;
    case "CHANGE_SEMESTER":
      console.log(action);
      return {
        ...state,
        semesterVal: action.data
      }
    break;
    case "TOGGLE_FILTERED_PUSHED_DOWN":
    return {
        ...state,
      filterPushedDown:action.data
      }
    break;
    case "TOGGLE_BOOK_MARK":

    return {
        ...state,
      bookMarkOnly:action.data,
      numCalendarsToDisplay:10,

      }
    break;
    case "NEW_INPUT_VALUE":
      return {
        ...state,
          courseInput:[
            ...state.courseInput.slice(0, action.data.index),
            {
             ...state.courseInput[action.data.index],
             name:action.data.value
            },
            ...state.courseInput.slice(action.data.index+1),
          ]
      }

    break;

    case "INCREASE_NUM_CALENDARS":
      return {
        ...state,
        numCalendarsToDisplay: state.numCalendarsToDisplay+10,

      }
    break;
    case "FILTER_TOGGLE":

      return {
        ...state,
        filters: {
          ...state.filters,
          [action.data.period]:{
            ...state.filters[action.data.period],
            [action.data.day]:action.data.value
          }
        },
        updateFilters:true,
        loading:true
      }
    break;

    case "NEW_FILTERED_CALENDARS":
      return {
        ...state,
        filteredCalendars: action.data.calendar,
        numFiltered:action.data.numFiltered,
        updateFilters:false,
        loading:false
      }
    break;
    case "NEW_CALENDARS":
      return {
        ...state,
        calendars:action.data,
        filteredCalendars: action.data,
        updateCalendar:false,
        updateFilters:true,
        loading:false

      }
    break;
    case "TOGGLE_PIN_CALENDAR":
    let toAdd = -1;
    if(action.data.information){toAdd=1}
      return {
        ...state,
        pinnedCalendars:{
        ...state.pinnedCalendars,
        [action.data.number]:action.data.information
        },
        numBookmarked: state.numBookmarked + toAdd
      }
    break;

    case "ADD_COURSE_INPUT":
      let currColor = state.currColor+1;
      if(state.currColor == colorArray.length-1){
        currColor=0;
      }
      return {
        ...state,

          courseInput:[
            ...state.courseInput,
            {
              name:"",
              color: colorArray[state.currColor],
              state:"search"
            }
          ],
        currColor: currColor
      }
    break;

    case "SEARCH_UPDATE_STATE":
      let loading = (action.data.state=="loading");
      return {
        ...state,
          courseInput:[
            ...state.courseInput.slice(0, action.data.index),
            {
             ...state.courseInput[action.data.index],
             state:action.data.state,
             error: action.data.error
            },
            ...state.courseInput.slice(action.data.index+1),
          ],

        loading:loading
      }
    break;
    case "SEARCH_DELETE":
      let courseIndex = state.courses.indexOf(action.data.courseValue);
      return {
        ...state,
        courseInput:[
          ...state.courseInput.slice(0, action.data.index),
          ...state.courseInput.slice(action.data.index+1),
        ],

        courses:[
          ...state.courses.slice(0, courseIndex),
          ...state.courses.slice(courseIndex+1),
        ],
        pinnedSections:{
          ...state.pinnedSections,
          [prepareInput(state.courseInput[action.data.index].name)]:null
        },
        updateCalendar:true,
        calendarDrawers:{},
        pinnedCalendars:{}
      }

    break;
    default:
      return state
  }
};

export {mainReducer}
