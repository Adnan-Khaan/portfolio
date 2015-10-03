/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio={
        "Name":"Adnan Khan",
        "Role" : "Web Developer",
        "WelcomeMessage": "Hello world",
        "bioPic":"images/fry.jpg",
        "contacts":{ 
                    "contact":"4155132092 ",
                    "email":"adnankhan.developer@gmail.com",
                    "github":"github.com/Adnan-Khaan",
                    "linkedin":"http://lnked.in/3JBT6",
                    "location":"Fremont, CA"
                    },
        "skill":["HTML","CSS","JavaScript","Python","PostgreSQL","Git"],
        "Frameworks":["Bootstrap","WordPress"]
        
         }
bio.Display = function()
{
var formattedName = HTMLheaderName.replace("%data%", bio.Name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.Role);
var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedlinkedin = HTMLlinkedin.replace("%data%",bio.contacts.linkedin);
var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage);


$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedlinkedin);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);
$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(HTMLskillsStart);
//$("#header").append(HTMLLanguages);

for (skills in bio.skill)
    { 
         var formattedskills = HTMLskills.replace("%data%",bio.skill[skills]);

        $("#header").append(formattedskills);
     }

//$("#header").append(HTMLFramework);

for (Framework in bio.Frameworks)
    {
        var formattedFrameworks = HTMLFrameworks.replace("%data%",bio.Frameworks[Framework]);
        $("#header").append(formattedFrameworks);   
     } 

$("#header").prepend(formattedbioPic);

}

var Projects = {
    "project":[
     {
            "title":"Portfolio",
            "Date":"September 2015",
            "Description": "<ul class=\"list\"><li>Designed and developed an interactive portfolio using JavaScript, jQuery, HTML and CSS.</li><li>Integrated a map using Google API.</li></ul>"
    },
    {
            "title":"<a href=\"https://github.com/Adnan-Khaan/Project-2-Tournament\" target=\"_blank\">Tournament Results<\a>",
            "Date":"August 2015",
            "Description":"<ul class=\"list\"><li>Designed a database schema using PostgreSQL to store the game matches between players.</li><li>Developed Python module that uses the PostgreSQL database to keep track of players, matches and query the data to determine winners of various matches in a Swiss pairing style tournament.</li></ul>",
            "Image":"\"#\" onClick=\"window.open('images/tournament.jpg', 'WindowC', 'width=500, height=500,scrollbars=yes');\"><img src=\"images/thumbtournament.jpg\""
    },

    {
            "title":"<a href=\"https://github.com/Adnan-Khaan/Udacity-P1--Movie-\" target=\"_blank\">Movie Trailer Website<\a>",
            "Date":"June 2015",
            "Description":"<ul class=\"list\"><li>Single-page, mobile friendly responsive application built with Python, Bootstrap and JavaScript hosted on Github.</li><li>The web page loads 8 movies of editor’s choice with images, description and star rating in a grid layout.</li><li>User can watch the live trailer of those movies in a popup window without leaving the page.</li></ul>",
            "Image":"\"#\" onClick=\"window.open('images/movie.jpg', 'WindowC', 'width=500, height=500,scrollbars=yes');\"><img src=\"images/thumbmovie.jpg\""               
    }
   
               
               ]

}


Projects.Display = function()
 {
   for (pro in Projects.project)
    { 
    
    
    var formattedProTitle = HTMLprojectTitle.replace("%data%",Projects.project[pro].title);
    var formattedProDate = HTMLprojectDates.replace("%data%",Projects.project[pro].Date);
    var formattedProDescription = HTMLprojectDescription.replace("%data%",Projects.project[pro].Description);
    var formattedProImage = HTMLprojectImage.replace("%data%", Projects.project[pro].Image);   

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedProTitle);
    $(".project-entry:last").append(formattedProDate);
    $(".project-entry:last").append(formattedProDescription);
    $(".project-entry:last").append(formattedProImage);
    }

 }



var education = {
    "schools":[
            {
            "Name": "Udacity",
            "Major": "Web Developement",
            "Minors": "DataBases",
            "GradYear": "2015",
            "location": "San Francisco",
            "onlineCourses":[
                {
                "title":"Full-Stack Web Developement Nanodegree",
                 "school":"udacity",
                 "date":"Feb 2015"
                 },
                 {
                 "title":"JavaScripts",
                  "school":"Udacity",
                  "date":"Feb 2015"
                 }
     
                ]
            },
            {
            "Name": "Curtin University Of Technology",
            "Major": "Computer Sciences",
            "Minors": "Business",
            "GradYear": "2004",
            "location": "Perth, Australia", 
            "onlineCourses":[
                   {
                    "title":"Bachelors of Business and IT",
                    "school":"",
                    "date":""
                    },
                      {
                 "title":"",
                  "school":"",
                  "date":""
                 }
                  ]
              }    

        ]
    }


education.Display = function()
{  
     
     $("#education").append(HTMLschoolStart);
    
     for (s in education.schools)
     {
    var formattedschoolDegree=[];
    var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[s].Name);
        for(onlinecourse in education.schools[s].onlineCourses)
        { formattedschoolDegree.push(HTMLschoolDegree.replace("%data%",education.schools[s].onlineCourses[onlinecourse].title));}
    var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[s].GradYear);   
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[s].location);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[s].Major);   
    
    
    $(".education-entry").append(formattedschoolName);
    for(items in formattedschoolDegree) {$(".education-entry").append(formattedschoolDegree[items]);}
    $(".education-entry").append(formattedschoolDates);
    $(".education-entry").append(formattedschoolLocation);
    $(".education-entry").append(formattedschoolMajor);
        
    }
   }


var work = {
    "jobs":[
        {
            "Employer":"Egnaro Ltd",
            "Title":"Full Stack Web developer",
            "location":"London, UK",
            "Date":"Feb 2014",
            "Description":"<ul class=\"list\"><li>Developed, designed and implemented a web application using Python and PostgreSQL for the Sales department to check inventory, create orders, manage appointments and keep customer’s order history.</li><li>Developed, designed and implemented a system for the Payroll departments to keep track of staff productivity, commissions and performances. </li><li>I streamlined the process, which saved my group 30 man-hours each month increased customer retention by 25% and increased sales by 40% in first quarter. </li><li>Managed all aspects of website functions, from front-end and back-end development to troubleshooting, updates, and administration.</li> </ul>"
        },
        {
            "Employer":"Phones 4U",
            "Title":"Web Developer",
            "location":"Stoke-on-trend, UK",
            "Date":"July 2011",
            "Description":"<ul class=\"list\"><li>Worked closely with clients, key stakeholders, internal account management teams, creative and development staff and other key user groups to define solutions primarily for Hybris-based ecommerce solutions, but also for mobile contentsolutions and in-store kiosk and tablet interfaces.</li><li>Worked with Lead Developer, on projects using PHP, MySQL, PERL, JavaScript / JQuery, HTML and CSS.</li><li>Responsible for the front and back end development of a variety of internal micro sites and web applications, and the maintenance of existing e-learning material.</li><li>Content collaboration, and creating fun, informative, and engaging e-learning material for the entire 500+ strong retail estate.</li></ul>"  
        }   
    ]
}

work.DisplayWork= function()
{

    for(job in work.jobs)
    {

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].Employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].Title);
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].Date);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].Description);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployer+formattedTitle);
    $(".work-entry:last").append(formattedDate);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);

    }

}


bio.Display();
work.DisplayWork();
Projects.Display();
education.Display();

$("#mapDiv").append(googleMap);


/*function inName(name)
{
     array_name=name.split(" ");
     array_name[0]=array_name[0].slice(0,1).toUpperCase() + array_name[0].slice(1).toLowerCase();
     array_name[1]=array_name[1].toUpperCase();
 return array_name[0]+" "+array_name[1];
}

console.log(inName("adnan Khan"));

//$("#main").append(internationalizeButton); */




/*if (bio.skill!==0)
{
var formattedSkill =HTMLskills.replace("%data%", ,bio.Role);
$("#header").prepend(HTMLskillsStart);
$("#header").append(formattedSkill);

}
*/

			







