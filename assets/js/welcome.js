//timeEl = document.querySelector(".time");
//dateEl = document.querySelector(".date");
timeEl = $(".time");
dateEl = $(".date");
editInfoBttn = $(".editInfoBttn");
//editInfoBttn = document.querySelector("editInfoBttn");
submitUserInfo = $(".submitUserInfo");
form = $(".userInfo");

// var aryUserInfo = [
//     firstName,
//     lastName,
//     city,
//     latitude,
//     longitude,
// ]


// "savedWeather": [
//     (cityName)
// ],
// "savedToDo": [
//     (saved-to-dos)
// ]



function setDateTime() {
    var today = moment().format("[Today is] dddd, MMMM D, YYYY");
    dateEl.text(today);
    setInterval(function () {
        var time = moment().format("h:mm A")
        timeEl.text(time);
    }, 1000);
};
function editInfo(){
    console.log("you click edit user info");
    //display: block
    console.log(form);
    form.css("display","block");
}

function saveUserInfo(event){
     event.preventDefault();
     console.log("you click submit")
//     //var = input.value
//     //stringify
//     //store
//     //refresh?
};

setDateTime();

console.log(editInfoBttn)
editInfoBttn.on('click', editInfo);
submitUserInfo.on('click', saveUserInfo);