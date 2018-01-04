class Course {
	setRawJSON(input){
		console.log(input);
		this.rawJSON= input;
		this.sectionArray = this.rawJSON[0].COURSES[0].sections;
	}
	getSectionTimes(i){
		return this.sectionArray[i].meetTimes;
	}
	getSectionNumber(i){
		return this.sectionArray[i].number;
	}
	getNumSections(){
		return this.sectionArray.length;
	}
	getCourseName(){
		return this.rawJSON[0].COURSES[0].name;
	}
	getCourseCode(){
		return this.rawJSON[0].COURSES[0].code;
	}
	getRawJSON(){
		return this.rawJSON;
	}
	addColor(color){
		this.color = color;
	}
	getColor(){
		return this.color;
	}
}