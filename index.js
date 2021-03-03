var uName = document.getElementById("name");
var topic = document.getElementById("topic");
var mobNumber = document.getElementById("mob");
var warnMessage = document.getElementById("warn");
var age = document.getElementById("age");

mobNumber.onkeydown = (e) => {
    if(mobNumber.value.length == 10) return keyControl(e);
}

age.onkeydown = (e) => {
    if(age.value.length == 2) return keyControl(e);
}

function keyControl(evnt){
    if(evnt.keyCode == 8 || evnt.keyCode == 37 || evnt.keyCode == 39 || evnt.keyCode == 46){
            return true;
        }
        else return false;
}

topic.onchange = () => {
    if(topic.value != "--select--") {
        warnMessage.innerText = "";
    }
}

function navigateToHome(){
    var sName = uName.value;
    var qTopic = topic.value;

    if(topic.value == "--select--") {
        warnMessage.innerText = "Please select valid topic";
        warnMessage.style["color"] = "yellow";
        return false;
    }

    else {
        location.href = "HTML/home.html?name="+sName+"&"+"topic="+qTopic;
        return false;
    }
}
