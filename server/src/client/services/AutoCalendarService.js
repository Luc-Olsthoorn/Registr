import request from 'request';
import {store} from '../index.js';
import {createCalendars, filterCalendarTime, filterCalendarPinnedSection} from './UF.js';

const Run=()=>{
	store.subscribe(()=>{
		if(store.getState().updateCalendar){
			
			let courses = store.getState().courses;
			console.log(courses);
			if(courses.length>0){
				//console.log("updating");
				//console.log(courses);
				let calendars = createCalendars(courses);
				//console.log(calendars);
				store.dispatch({type:"NEW_CALENDARS", data:calendars});
			}else{
				store.dispatch({type:"NEW_CALENDARS", data:[]});
			}
		}
		if(store.getState().updateFilters){
			let calendars = store.getState().calendars;
			let timeFilters = store.getState().filters;
			let pinnedSectionFilters = store.getState().pinnedSections;
			let counter = 0;
			let filteredCalendar =[];
			for(let i =0; i<calendars.length; i++){

				if(filterCalendarPinnedSection(calendars[i], pinnedSectionFilters)){
					//console.log("yeet");
					if(filterCalendarTime(calendars[i], timeFilters)){
						filteredCalendar.push(calendars[i]);
					}else{
						counter++;
					}
				}else{
					counter ++;
				}
			}
			console.log(filteredCalendar);
			store.dispatch({type:"NEW_FILTERED_CALENDARS", data:{calendar:filteredCalendar, numFiltered:counter}});
		}
	});
}
export {Run}