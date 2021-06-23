var timeEl = document.querySelector(".time");
var dateEl = document.querySelector(".date");
var nameEl = $(".displayedName");
var icon = $(".userIcon");

nameEl.text(JSON.parse(localStorage.getItem("UsrInfo")).userName.firstName);
function setDateTime() {
    var today = moment().format("[Today is] dddd, MMMM D, YYYY");
    
    dateEl.textContent = today;

    setInterval(function () {
        var time = moment().format("h:mm A")
        timeEl.textContent = time;
    }, 1000);

};

setDateTime();
//icon
text = JSON.parse(localStorage.getItem("UsrInfo")).userName.firstName[0]+JSON.parse(localStorage.getItem("UsrInfo")).userName.lastName[0];
icon.text(text);
icon.css("background-color", "#61b69f");
icon.css("border-radius", "50px");