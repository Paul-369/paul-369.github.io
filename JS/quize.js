
var quize = document.getElementsByClassName("quize");
var nextButton = document.getElementById("next-btn");
var resultButton = document.getElementById("result-btn");
var currentQuize = document.getElementById("current-qstn");
var questionElement = document.getElementsByClassName("question");
var prevButton = document.getElementById("prev-btn");
var timer = document.getElementById("timer");
var noOfQuizes = document.getElementById("noOfQuize");

var getUser = new URLSearchParams(location.search);
var user = getUser.get("user");
var topic = getUser.get('topic').toLowerCase();
var classNames = ["qFirst", "qTwo", "qThree", "qFour", "qFive", "qSix", "qLast"];      // Should add new quiestion's className
var initSecond = 0, initMinute = 15;

var interval = setInterval(startTimer, 1000);

function startTimer(){    
    if(initSecond == 59) initMinute -= 1;

    setTimer();
    showResult();

    initSecond -= 1;    
    initSecond == -1 ? initSecond = 59 : initSecond;
}

function setTimer(){
    seconds = initSecond <= 9 ? "0" + initSecond : initSecond;
    minutes = initMinute <= 9 ? "0" + initMinute : initMinute;
    timer.style.borderColor = initMinute <= 10 ? "red" : "yellow";
    timer.style.color = initMinute <= 5 ? "red" : "white";
    timer.innerText = minutes+" : "+seconds;
}

function showResult(){
    if(minutes == 0 && seconds == 0) {
        clearInterval(interval);
        if(timer.innerText == "00 : 00") setTimeout(timeOut, 500);
        setTimeout(goToResult, 1000);
    }
}

function timeOut(){
    alert("Test ended! view your result");
}

// -------------------------------------------   References ---------------------------------------------------

// Designing questions - Reference :
//      https://letsfindcourse.com/software-engineering/software-design-mcq
//      https://examradar.com/software-engineering-design-concepts-mcq-type-questions-answers/
//      https://compsciedu.com/mcq-questions/Software-Engineering/Software-Design-Concepts

// Development questions - Reference :
//     https://www.careerride.com/view/web-programming-mcqs-for-placement-and-interview-set-4-20142.aspx

// Testing questions - Reference :
//     https://www.javatpoint.com/software-testing-mcq

// -----------------------------------------------------------------------------------------------------------


// -------------------------------  Load Questions and Answers  --------------------------------------------

var questions = {

    designing : {
        qstn : [
            "When multiple modules share common data structure and work on different part of it, it is called ___________.",

            "Which tool is use for structured designing ?",

            "In Design phase, which is the primary area of concern?",

            "The importance of software design can be summaraized in a single word",

            "<div class = 'images img-one'><img src = https://i0.wp.com/www.csscodelab.com/wp-content/uploads/2019/11/css-3d-button-border-hover-animation.png?fit=1018%2C604&ssl=1 /><img src = https://i0.wp.com/codemyui.com/wp-content/uploads/2017/06/animated-gradient-button-hover-effect.gif?fit=880%2C440&ssl=1 /></div><div class = 'qstn'>Which CSS property used here (hover on the images) ?</div",

            "<div class = 'images img-two'><img src = https://frontendmasters.com/books/front-end-handbook/2019/assets/images/web-tech-employed.jpg /><img src = https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/165179966/original/9741c77bdf4d4108f34b2d6331ad3154a69c4a4b/build-the-website-you-want.jpg /><img src = https://files.realpython.com/media/main-logo.94820fb0e17d.png /></div><div class = 'qstn'>Which one is used for front-end development only ?</div",

            "What is described by means of DFDs as studied earlier and represented in algebraic form?"
        ],
        choices : [
            [
                "A. Common coupling",
                "B. Share coupling",
                "C. Data coupling",
                "D. Stamp coupling"
            ],

            [
                "A. Program Chart",
                "B. Structure chart",
                "C. Module Chart",
                "D. All of the above"
            ],

            [
                "A. Architecture",
                "B. Data",
                "C. Interface",
                "D. All of the above"
            ],

            [
                "A. Accuracy",
                "B. Complexity",
                "C. Efficiency",
                "D. Quality"
            ],

            [
                "A. translate",
                "B. scale",
                "C. rotate",
                "D. skew"
            ],

            [
                "A. First image",
                "B. Second image",
                "C. Third image",
                "D. None of the above"
            ],

            [
                "A. Data flow",
                "B. Data storage",
                "C. Data Structures",
                "D. Data elements"
            ]
        ]
    },
    development : {
        qstn : [
            "Which of the following options is correct with regard to HTML?",
            "Which CSS property can provide to add an effect when changing from one style to another,without using Flash animations or javascript?",
            "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
            "Which of the following is NOT a Style?",
            "While working on a JavaScript project, in your JavaScript application, which function would you use to send messages to users requesting for text input?"
        ],
        choices : [
            [
                "A. modelling language",
                "B. scripting language",
                "C. programming language",
                "D. structure documents"
            ],

            [
                "A. Associations",
                "B. Transitions",
                "C. Transistor",
                "D. None of the above"
            ],

            [
                "A. wrapper",
                "B. link",
                "C. cursor",
                "D. form"
            ],

            [
                "A. Linked",
                "B. Embedded",
                "C. Inline",
                "D. Orthogonal"
            ],

            [
                "A. Display()",
                "B. Prompt()",
                "C. Alert()",
                "D. Confirm()"
            ]
        ]
    },
    testing : {
        qstn : [
            "Which term is used to define testing?",
            "Which of the following testing is also known as white-box testing?",
            "Which of the following is not a part of STLC (Software Testing Life Cycle)?",
            "In which environment we can performed the Alpha testing?",
            "Does the customer get a 100% bug-free product?"
        ],
        choices : [
            [
                "A. Find errors",
                "B. Finding broken code",
                "C. A stage of all projects",
                "D. None of the above"
            ],

            [
                "A. Structural testing",
                "B. Error guessing technique",
                "C. Design based testing",
                "D. None of the above"
            ],

            [
                "A. Testing Planning",
                "B. Requirement Gathering",
                "C. Test Design",
                "D. Testing closure"
            ],

            [
                "A. User's end",
                "B. Developer's end",
                "C. User's and developer's end",
                "D. None of the above"
            ],

            [
                "A. Product is old",
                "B. Developers are super",
                "C. Testing team is not good",
                "D. All of the above"
            ]
        ]
    }
}


noOfQuizes.innerText = questions[topic]["qstn"]["length"];

questions[topic].qstn.forEach((question,i) => {
    questionElement[i].innerHTML = question;

    questions[topic].choices[i].forEach((choice,index) => {
        document.getElementsByClassName(classNames[i])[index].innerText = choice;
    });

    if(i == (questions[topic].qstn["length"])-1){
        for(var ind = 0; ind < 4; ind++){
            document.getElementsByClassName(classNames[i])[0].setAttribute("class","qLast");
        }
    }
});

// ------------------------------ xxxxxxxxxxxx  Loaded  xxxxxxxxxxxx------------------------------------------------------------

// --------------------------------  Display Currecnt Slide Operations ------------------------------------------
var answers = [];
for(var i = 0; i < questions[topic].qstn.length; i++){
    answers[i] = "Not Answered";
}

currentQuestion = 1
currentQuize.innerText = currentQuestion;

quize[0].style.display = "block";

function navQuize(nav){

    nav == "nextQuize" ? nextQuize() : prevQuize();
    currentQuestion > 1 ? prevButton.style.visibility = "visible" : prevButton.style.display = "hidden";
    
    function nextQuize(){
        currentQuestion += 1;
        currentQuize.innerText = currentQuestion;

            if(questions[topic].qstn.length == currentQuestion){
                nextButton.style.display = "none";
                resultButton.style.display = "block";
            }

        if(answers[currentQuestion-1] == "Not Answered"){
            document.getElementById("next-btn").disabled = true;
        }

        quize[currentQuestion-2].style.display = "none";
        quize[currentQuestion-1].style.display = "block";
    }

    function prevQuize(){
        document.getElementById("next-btn").disabled = false;
        currentQuestion -= 1;
        currentQuize.innerText = currentQuestion;

        if(currentQuestion < 2){
            prevButton.style.visibility = "hidden";
        }
        
        quize[currentQuestion-1].style.display = "block";
        quize[currentQuestion].style.display = "none";

        nextButton.style.display = "block";
        resultButton.style.display = "none";
    }
}

// -------------------------------- xxxxxxxxxxx  Displayed  xxxxxxxxxxxx -----------------------------------------

// ----------------------------------  Get and Send User Answers  ------------------------------------------------

function result(e){
    test(e);
}

var test = (e) =>{
    var a = e.target.getAttribute("class");

        switch(a){
            case "qFirst" : myChoice("qFirst");
                            answers[0] = e.target.innerText;
                            break;

            case "qTwo" :   myChoice("qTwo");
                            answers[1] = e.target.innerText;
                            break;

            case "qThree" : myChoice("qThree");
                            answers[2] = e.target.innerText;
                            break;

            case "qFour" :  myChoice("qFour");
                            answers[3] = e.target.innerText;
                            break;

            case "qFive" :  myChoice("qFive");
                            answers[4] = e.target.innerText;
                            break;

            case "qSix" :  myChoice("qSix");
                            answers[5] = e.target.innerText;
                            break;

            case "qLast" :  var nxt = addClass("qLast");
                            nxt == "added" ? document.getElementById("result-btn").disabled = false : document.getElementById("next-btn").disabled = true;  // insert into last question
                            answers[questions[topic].qstn["length"]-1] = e.target.innerText;
                            addClass();
                            break;

            case "result-btn" : goToResult(); break;

            default : "error"; break;
        }


// -------------------------- xxxxxxxxxxxxxxxx  got answers xxxxxxxxxxxxxxxxxxxxxxx  -----------------------------


        function myChoice(getClass){
            var nxt = addClass(getClass);
            nxt == "added" ? document.getElementById("next-btn").disabled = false : document.getElementById("next-btn").disabled = true;
        }

// ------------------------------------  Add Styles for active selecet ----------------------------------------------

        function addClass(getVal){

            if (a == getVal) {
                var element = document.getElementsByClassName("getVal");

                for(var i = 0 ; i < 4; i++){
                    document.getElementsByClassName(getVal)[i].classList.remove("select");
                }

                e.target.classList.add("select");
                return "added";
            }
        }

}

var goToResult = () => location.href = "../HTML/result.html?myAns="+answers+"&"+"user="+user+"&"+"topic="+topic;


// -------------------------------- xxxxxxxxxxxxxxxxxxx  Ended  xxxxxxxxxxxxxxxxxxx  --------------------------------------



