import request from 'request';
import {store} from '../index.js';
import {convertCourses} from './UF.js';
var query = {};
query.searchCourses = (courseIndex)=>{
  store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"loading"}});
  let courseInfo = store.getState().courseInput[courseIndex];
  let otherNames=[];
  store.getState().courseInput.forEach((element)=>{if(element.state=="success"){otherNames.push(element.name)}});
  console.log(courseInfo);
  let name = verifyInput(courseInfo.name, otherNames, courseIndex);
  let semester = store.getState().semesterVal;
  let online = courseInfo.online;
  let traditional = courseInfo.traditional;
  let hybrid = courseInfo.hybrid;
  // let online = "false";
  // let traditional = "true";
  // let hybrid = "false";
  if(name){
    let options = generateRequest(name, semester, online, hybrid, traditional);
    makeRequest(options, courseIndex, courseInfo.color, name);
  }
}
query.searchAllCourses = ()=>{
  store.getState().courseInput.forEach((element, index)=>{
    console.log(element);
    if(element.state!="success"){
      query.searchCourses(index);
    }
  });
}

const generateRequest = (name, semester, online, hybrid, traditional)=>{
  let data ={
      course: name,
      category: "RES",
      semester: semester,
      online: online,
      hybrid: hybrid,
      traditional: traditional
    }
    let url = window.location.protocol+ '//'+window.location.hostname + ":" + window.location.port +'/getCourseInfo';
    let options = {
      method: 'post',
      body: data,
      json: true,
      url: url,
      contentType: "application/json"
    }
  return options;
}
const makeRequest = (options, courseIndex, color, name) =>{
  request(options, function (err, res, body) {
      if (err) {
        console.error('error posting json: ', err)
        store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"error", error:"Connection Error"}});
        throw err
      }else if(res.body.error){
        if(res.body.error=="length"){
          store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"error", error:"Invalid length"}});
        }
        if(res.body.error=="notFound"){
          store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"error", error:"Course not found"}});
        }

      }else{
        let course = convertCourses({data:body,color:color}, name);
        console.log('body: ', body);

        store.dispatch({type:"NEW_COURSE", data:{course:course, index:courseIndex}});
        store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"success"}});
      }
    })
}
const verifyInput = (name, otherNames, courseIndex) => {
  let preparedName = prepareInput(name);
  if(preparedName.length == 0){

    preparedName = false;
  }
  //Make sure it isnt searched
  otherNames.forEach((element)=>{
    if(preparedName == prepareInput(element)){
      store.dispatch({type:"SEARCH_UPDATE_STATE", data:{index:courseIndex, state:"error", error:"Already searched"}});
      preparedName = false;
    }
  });
  return preparedName;
}
const prepareInput = (name) =>{
  let noSpaceName = name.replace(/\s/g, '');
  let upperCaseName = noSpaceName.toUpperCase();
  return upperCaseName;
}
export {prepareInput};
export {query};
