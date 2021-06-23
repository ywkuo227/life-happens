var timeEl = document.querySelector(".time");
var dateEl = document.querySelector(".date");
var nameEl = $(".displayedName");

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