var url = location.search;
var urlParams = new URLSearchParams(url);

var userName = urlParams.get("name");
var topic = urlParams.get("topic");

var topicDescription = {

    designing : "Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.",

    development : "Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.",

    testing : "Web application testing, a software testing technique exclusively adopted to test the applications that are hosted on web in which the application interfaces and other functionalities are tested."
}

userName = userName.charAt(0).toUpperCase()+userName.slice(1).toLowerCase();
topic = topic.charAt(0).toUpperCase()+topic.slice(1).toLowerCase();

document.getElementById("user-name").innerText = userName;
document.getElementById("selected-topic-1").innerText = topic;
document.getElementById("selected-topic-2").innerText = topic;

var description = document.getElementById("current-desc");

switch(topic.toLowerCase()){

    case "designing" : description.innerText = topicDescription.designing; break;

    case "development" : description.innerText = topicDescription.development; break;

    case "testing" : description.innerText = topicDescription.testing; break;

    default : description.innerText = "error"; break;
}

function goToQuize(){
    location.href = "../HTML/quize.html?user="+userName+"&"+"topic="+topic;
}