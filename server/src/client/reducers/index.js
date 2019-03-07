import {menu} from '../services/UF.js';
import {colorArray} from '../services/UF.js';
const initState = {
  options:{
    semester: menu.semester.defaultVal,
    categories: menu.categories.defaultVal,
    courseInput:[
    {name:"COP3502",color:colorArray[0],state:"search"},
    {name:"",color:colorArray[1],state:"search"},
    {name:"",color:colorArray[2],state:"search"}
    ]
  },
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
  calendarDrawers:{}
}

let mainReducer = (state = initState, action)=>{
  switch (action.type) {
  	case "NEW_COURSE":
      return {
        ...state,
    	courses:[
        ...state.courses,
            action.data
        ],
      updateCalendar:true,
      loading:false
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
    case "TOGGLE_FILTERED_PUSHED_DOWN":
    return {
        ...state,
      filterPushedDown:action.data
      }
    break;
    case "NEW_INPUT_VALUE":
      return {
        ...state,
        options:{
          ...state.options,
          courseInput:[
            ...state.options.courseInput.slice(0, action.data.index),
            {
             ...state.options.courseInput[action.data.index],
             name:action.data.value
            },
            ...state.options.courseInput.slice(action.data.index+1),
          ]
        }
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
    case "ADD_COURSE_INPUT":
      return {
        ...state,
        options:{
          ...state.options,
          courseInput:[
            ...state.options.courseInput,
            {
              name:"",
              color: colorArray[state.currColor],
              state:"search"
            }
          ]
        },
        currColor: state.currColor+1
      }
    break;

    case "SEARCH_UPDATE_STATE":
      let loading = (action.data.state=="loading");
      return {
        ...state,
        options:{
          ...state.options,
          courseInput:[
            ...state.options.courseInput.slice(0, action.data.index),
            {
             ...state.options.courseInput[action.data.index],
             state:action.data.state
            },
            ...state.options.courseInput.slice(action.data.index+1),
          ]
        },
        loading:loading
      }
    break;
    case "SEARCH_DELETE":
      return {
        ...state,
        options:{
          ...state.options,
          courseInput:[
            ...state.options.courseInput.slice(0, action.data.index),
            ...state.options.courseInput.slice(action.data.index+1),
          ]
        },
        courses:[
          ...state.courses.slice(0, action.data.index),
          ...state.courses.slice(action.data.index+1),
        ],
        updateCalendar:true
      }

    break;
    default:
      return state
  }
};

export {mainReducer}