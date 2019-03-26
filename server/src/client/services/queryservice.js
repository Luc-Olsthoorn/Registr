import request from 'request';
import {store} from '../index.js';
import {convertCourses} from './UF.js';
var query = {};
query.searchCourses = (courseIndex)=>{
  store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"loading"}});
  let courseInfo = store.getState().options.courseInput[courseIndex];
  let otherNames=[];
  store.getState().options.courseInput.forEach((element)=>{if(element.state=="success"){otherNames.push(element.name)}});
  console.log(courseInfo);
  let name = verifyInput(courseInfo.name, otherNames, courseIndex);
  if(name){
    let data ={
      course: name,
      category: "RES",
      semester: "2198"
    }
    let url = 'http://'+window.location.hostname + ":" + window.location.port +'/getCourseInfo';
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

        store.dispatch({type:"NEW_COURSE", data:{course:data, index:courseIndex}});
        store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"success"}});
      }
    })
  }
}

const verifyInput = (name, otherNames, courseIndex) => {
  let preparedName = prepareInput(name);  
  //Make sure it isnt searched 
  otherNames.forEach((element)=>{
    if(preparedName == prepareInput(element)){
      store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"error"}});
      preparedName = false;
    } 
  });
  return preparedName;
} 
const prepareInput = (name) =>{
  let noSpaceName = name.replace(/\s/g, '');
  let lowerCaseName = noSpaceName.toLowerCase();
  return lowerCaseName; 
}
export {query};

