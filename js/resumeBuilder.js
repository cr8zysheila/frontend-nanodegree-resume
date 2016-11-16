/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /* The following are exercises for lesson two. Clean up for lesson three 
var name = HTMLheaderName.replace("%data%", "Peppa Pig");
var role = HTMLheaderRole.replace("%data%", "Web Developer");
var skills = ["C", "C++", "programming"];
var bio = {
	name: "Peppa Pig",
	"role": "Web Developer",
	"email": "peppa@gmail.com",
	"pictureUrl": "http://www.gstatic.com/tv/thumb/tvbanners/8672656/p8672656_b_v8_aa.jpg",
	"welcome": "Welcome!",
	"skills": skills
};

$("#header").prepend(HTMLskills.replace("%data%", bio["skills"]));
$("#header").prepend(HTMLskillsStart);
$("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio["welcome"]));
$("#header").prepend(HTMLbioPic.replace("%data%", bio["pictureUrl"]));
$("#header").prepend(HTMLemail.replace("%data%", bio["email"]));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio["role"]));
$("#header").prepend(HTMLheaderName.replace("%data%", bio["name"])); //using bio[name] will get undefined

var work = {};
var education = {};

work.position = "Software Developer";
work.employer = "Microsoft";
work.position = "Redmond WA";

education["school"] = "NTU";
education["location"] = "Singapore";

$("#header").append(work["position"]);
$("#header").append(education.school);
*/

var skills = ["C", "C++", "programming"];
var bio = {
	name: "Peppa Pig",  // quotes can be omitted for quialified identifiers
	"role": "Web Developer",
	"welcomeMessage": "Welcome!",
	"biopic": "http://www.gstatic.com/tv/thumb/tvbanners/8672656/p8672656_b_v8_aa.jpg",	
	"skills": skills,
	"contacts": {
		mobile: "435-666-8888",
		email: "peppa@gmail.com",
		github: "peppa.github.com"
		location: "Redmond"
	}
};

var work = {
	jobs: [
	{
		employer: "Microsoft",
		title: "Software engineer",
		location: "Redmond",
		dates: 2010,
		description: "Windows Graphics"
	},
	{	
		employer: "Microsft",
		title: "SDET",
		location: "Redmond",
		dates: 2007,         
		description: "Windows Graphics Test"
	}
	]
};

var projects = {
	projects: [
	{
		title: "Project2",
		dates: 2013,
		description: "Second project",
		images: [
			"http://placehold.it/400x410",
			"http://placehold.it/400x420"
		]

	},
	{
		title: "Project1",
		dates: 2010
		description: "First project",
		images: [
			"http://placehold.it/300x310",
			"http://placehold.it/300x320"
		]
	}
	]
};

var education = {
	schools: [
	{
		name: "NTU",
		location: "Singapore",
		degree: "PhD",
		date: 2007,
		url: "http://www.ntu.edu.sg",
		majors: [ "Computer Engineering"
		]

	},
	{
		name: "ZJU",
		location: "China",
		degree: "B.Eng",
		date: 2000,
		url: "http://www.zju.edu.cn",
		majors: [ "Computer Science"
		]
	}
	]
};


