var timeEl = $(".time");
var dateEl = $(".date");
var editInfoBttn = $(".editInfoBttn");
var submitUserInfo = $(".submitUserInfo");
var form = $(".userInfo");
var displayedName = $(".displayedName");

//icon
var text

//elements in user info arry
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
function editInfo() {
    console.log("you click edit user info");
    //display: block
    console.log(form);
    form.css("display", "block");
}

function saveUserInfo(event) {
    //event.preventDefault();
    aryUserInfo.userName.firstName = firstNameEl.val();
    aryUserInfo.userName.lastName = lastNameEl.val();
    aryUserInfo.location.city = cityEl.val();
    console.log(aryUserInfo);
    // stringify key: UsrInfo, stringify UsrInfoarry
    localStorage.setItem("UsrInfo", JSON.stringify(aryUserInfo));
    //set name (below icon) to first name
    console.log(aryUserInfo.userName.firstName);
    $(".displayedName").text(aryUserInfo.userName.firstName);
    text = aryUserInfo.userName.firstName[0]+aryUserInfo.userName.lastName[0];
    console.log(text);

    form.css("display", "none");
};

setDateTime();

console.log(aryUserInfo.userName.firstName);
if (JSON.parse(localStorage.getItem("UsrInfo")) !== null) {
    displayedName.text(JSON.parse(localStorage.getItem("UsrInfo")).userName.firstName);
}

console.log(JSON.parse(localStorage.getItem("UsrInfo")));
if (JSON.parse(localStorage.getItem("UsrInfo")) == null) {
    editInfo();
}



editInfoBttn.on('click', editInfo);
submitUserInfo.on('click', saveUserInfo);