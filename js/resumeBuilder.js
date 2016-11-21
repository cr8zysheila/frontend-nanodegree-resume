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
		github: "peppa.github.com",
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
		dates: 2010,
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


$("#header").prepend(HTMLskills.replace("%data%", bio["skills"]));
$("#header").prepend(HTMLskillsStart);
$("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio["welcomeMessage"]));
$("#header").prepend(HTMLbioPic.replace("%data%", bio["biopic"]));
$("#header").prepend(HTMLemail.replace("%data%", bio.contacts["email"]));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio["role"]));
$("#header").prepend(HTMLheaderName.replace("%data%", bio["name"])); //using bio[name] will get undefined 
/*if(bio.skills)
{
	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%", bio["skills"]));
}*/

/* It's bad practice using for-in on arrays
for(job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);
	var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

	var workDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var workLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var workDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(workEmployer + workTitle);
	$(".work-entry:last").append(workDate);
	$(".work-entry:last").append(workLocation);
	$(".work-entry:last").append(workDescription);

}
*/
function displayWork()
{
	work.jobs.forEach( function (job) {

		$("#workExperience").append(HTMLworkStart);
		var workEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var workTitle = HTMLworkTitle.replace("%data%", job.title);

		var workDate = HTMLworkDates.replace("%data%", job.dates);
		var workLocation = HTMLworkLocation.replace("%data%", job.location);
		var workDescription = HTMLworkDescription.replace("%data%", job.description);

		$(".work-entry:last").append(workEmployer + workTitle);
		$(".work-entry:last").append(workDate);
		$(".work-entry:last").append(workLocation);
		$(".work-entry:last").append(workDescription);

	});
}
displayWork();

projects.display = function(){
	projects.projects.forEach(function( project ){


		$("#projects").append(HTMLprojectStart);

		var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
		var projectDates = HTMLprojectDates.replace("%data%", project.dates);
		var projectDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(projectTitle);
		$(".project-entry:last").append(projectDates);
		$(".project-entry:last").append(projectDescription);


		project.images.forEach(function(img){
			projectImage = HTMLprojectImage.replace("%data%", img);
			$(".project-entry:last").append(projectImage);
		})
	})
}
projects.display();

education.display = function () {
	education.schools.forEach(function( school ){
		$("#education").append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%", school.name);
		schoolName = schoolName.replace("#", school.url);
		var schoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		var schoolDates = HTMLschoolDates.replace("%data%", school.date);
		var shcoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
		$(".education-entry:last").append(schoolName + schoolDegree);
		$(".education-entry:last").append(schoolLocation);
		$(".education-entry:last").append(schoolDates);
		$(".education-entry:last").append(shcoolMajor);
	})
}
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


/* challenge 1
function getRelationship(first, second)
{
	var isFirstNum = ( typeof first === 'number' && !isNaN(first) );
	var isSecondNum = ( typeof second === 'number' && !isNaN(second));

	if( !isFirstNum && isSecondNum)
	{
		return ("can't compare relationships because " + first +
			" is not a number.");
	}
	else if( isFirstNum && !isSecondNum)
	{
		return ("can't compare relationships because " + second +
			" is not a number.");
	}
	else if( !isFirstNum && !isSecondNum)
	{
		return ("can't compare relationships because " + first + " and " + second +
			" are not numbers.");
	}
	else
	{
		if( first > second)
		{
			return (first + " > " + second);
		}
		else if( first < second)
		{
			return (first + " < " + second);
		}
		else( first === second)
		{
			return (first + " = " +second);
		}
	}

}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
*/

/* challenge 1
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function normalizeName(name)
{
	var nameArray = name.split(" ");
	//swap  first name  and last name
	[nameArray[0], nameArray[1]] = [nameArray[1], nameArray[0]];
	return nameArray.join(', ');
}

function alphabetizer(names) {
    // Your code goes here!
    names.forEach( function(name, index){
    	names[index] = normalizeName(name);
    });

    return names.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
*/