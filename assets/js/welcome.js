var timeEl = $(".time");
var dateEl = $(".date");
var editInfoBttn = $(".editInfoBttn");
var submitUserInfo = $(".submitUserInfo");
var form = $(".userInfo");

var firstNameEl = $('input[name="firstName"]');
var lastNameEl = $('input[name="lastName"]');
var cityEl = $('input[name="city"]');

var aryUserInfo = {
    userName: {
    firstName: "",
    lastName: ""
    },
    location: {
        city: "",
        latitude: "",
        longtitude: ""
    },
    savedWeather: [
        //(cityName)
    ],
    savedToDo: [
        //(saved to-dos)
    ]
}



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
    //event.preventDefault();
    aryUserInfo.userName.firstName = firstNameEl.val();
    aryUserInfo.userName.lastName = lastNameEl.val();
    aryUserInfo.location.city = cityEl.val();
    console.log(aryUserInfo);
    // stringify
    // store
    // refresh?
};

setDateTime();

console.log(editInfoBttn)
editInfoBttn.on('click', editInfo);
submitUserInfo.on('click', saveUserInfo);