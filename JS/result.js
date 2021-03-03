//  get Values from URL

var getUser = new URLSearchParams(location.search);

var user = getUser.get("user");  // user Name
var rAns = getUser.get("myAns");  // user Answers
var topic = getUser.get("topic");  // quize Topic

// -----------------------------  Original Answers  --------------------------------------------

var originalAnswers = {
    designing : [
        "D. Stamp coupling",
        "B. Structure chart",
        "D. All of the above",
        "D. Quality",
        "A. translate",
        "A. First image",
        "A. Data flow"
    ],
    development : [
        "D. structure documents",
        "B. Transitions",
        "A. wrapper",
        "D. Orthogonal",
        "B. Prompt()"
    ],
    testing : [
        "A. Find errors",
        "A. Structural testing",
        "B. Requirement Gathering",
        "B. Developer's end",
        "C. Testing team is not good"
    ]
};

// ---------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx---------------------------------


var receivedAnswers = rAns.split(",");     //  Received answers

//  ----------------------  Marks and Percentage Calculation  --------------------------

var initMark = 0;
var totMark = getMark(originalAnswers[topic]);
var result = totMark >= originalAnswers[topic].length/2 ? "pass" : "fail";
var percentage = (totMark/originalAnswers[topic].length) * 100;

//  ---------------------  insert Datas into HTML elements  --------------------------------

document.getElementById("my-name").innerHTML = user;
document.getElementById("your-score").innerHTML = totMark;
document.getElementById("tot-score").innerHTML = "/"+originalAnswers[topic].length;
document.getElementById("perc").innerHTML = Math.round(percentage) + "%";

var myResult = document.getElementById("res");

myResult.innerHTML = result.toUpperCase();
myResult.innerHTML == "PASS" ? myResult.style.color = "green" : myResult.style.color = "red";;

function getMark(originalAns){

    receivedAnswers.forEach((answer,i) => {
        if (answer == originalAns[i]) {
            initMark += 1;
        }
    });
    return initMark;
}

//  -----------------------------  Show the Progress of the completed Quize  --------------------------

function showProgress(){

    var qNum = document.getElementsByClassName("col-1");
    var correctAns = document.getElementsByClassName("col-2");
    var userAns = document.getElementsByClassName("col-3");
    var markPerQuestion = document.getElementsByClassName("col-4");
    var tableCells = document.getElementsByClassName("col");
    var toggle = document.getElementById("btn");
    var progReport = document.getElementsByClassName("progress")[0];
    var tableRow = document.getElementsByClassName("prog-result");

    toggle.innerHTML == "View Progress" ? viewProg() : hideProg();

    function viewProg(){
        toggle.innerHTML = "Hide Progress";
        progReport.style.display = "block"
    }

    function hideProg(){
        toggle.innerHTML = "View Progress";
        progReport.style.display = "none"
    }

    originalAnswers[topic].forEach((ans,i) => {
        qNum[i].innerHTML = i+1;
        correctAns[i].innerHTML = ans;
    });

    receivedAnswers.forEach((myAns,i) => {
        userAns[i].innerHTML = myAns;
        if (myAns == originalAnswers[topic][i]) {
            markPerQuestion[i].innerHTML = 1;
            userAns[i].style.color = "green";
            markPerQuestion[i].style.color = "green";
        }
        else{
            markPerQuestion[i].innerHTML = 0;
            userAns[i].style.color = "red";
            markPerQuestion[i].style.color = "red";
        }
    });

    for(let ind = 0; ind < tableCells["length"]; ind++){
        if(tableCells[ind].innerHTML == "") {
            tableCells[ind].style.display = "none";
        }
    }

    for(let j = originalAnswers[topic].length; j < tableRow.length; j++){
        tableRow[j].style.border = "none";
    }

}