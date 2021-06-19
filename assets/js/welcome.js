timeEl = document.querySelector(".time");
dateEl = document.querySelector(".date");


function setDateTime() {
    var today = moment().format("[Today is] dddd, MMMM D, YYYY");
    dateEl.textContent = today;
    setInterval(function () {
        var time = moment().format("h:mm A")
        timeEl.textContent = time;
    }, 1000);
};

setDateTime();