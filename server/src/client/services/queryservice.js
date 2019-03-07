import request from 'request';
import {store} from '../index.js';
import {convertCourses} from './UF.js';
var query = {};
query.searchCourses = (courseIndex)=>{
  store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"loading"}});
  let courseInfo = store.getState().options.courseInput[courseIndex];
  console.log(courseInfo);
  let data ={
    course: courseInfo.name,
    category: "RES",
    semester: "2198"
  }
  let url = 'http://localhost:8080/getCourseInfo';
  let options = {
    method: 'post',
    body: data,
    json: true,
    url: url,
    contentType: "application/json"
  }
   request(options, function (err, res, body) {
    if (err) {
      console.error('error posting json: ', err)
      store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"error"}});
      throw err
    }else if(res.body.error){
      store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"error"}});
    }else{
      let data = convertCourses({data:body,color:courseInfo.color});
      console.log('body: ', body);

      store.dispatch({type:"NEW_COURSE", data:data});
      store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"success"}});
    }
  })
}


export {query};

