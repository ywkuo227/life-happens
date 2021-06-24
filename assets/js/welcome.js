var timeEl = $(".time");
var dateEl = $(".date");
var editInfoBttn = $(".editInfoBttn");
var submitUserInfo = $(".submitUserInfo");
var form = $(".userInfo");
var displayedName = $(".displayedName");
var icon = $(".userIcon");

//icon
var text

//elements from form input
var firstNameEl = $('input[name="firstName"]');
var lastNameEl = $('input[name="lastName"]');
var cityEl = $('input[name="city"]');
//element in usr info arry local storage

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
    form.css("display", "block");
}

function saveUserInfo(event) {
    event.preventDefault();
    console.log("you clicked submit");
    console.log("form first name: " + firstNameEl.val());
    if (firstNameEl.val() == null) {
        console.log("first name null");
        location.reload();
    }
    else {
        aryUserInfo.userName.firstName = firstNameEl.val();
    };
    if (lastNameEl.val() == "") {
        console.log("last name null");
        location.reload();
    }
    else {
        aryUserInfo.userName.lastName = lastNameEl.val();
    };
    if (firstNameEl.val() == "") {
        console.log("first name null");
        location.reload();
    }
    else {
        aryUserInfo.location.city = cityEl.val();
    }
    console.log("array updated");
    // stringify key: UsrInfo, stringify UsrInfoarry
    localStorage.setItem("UsrInfo", JSON.stringify(aryUserInfo));
    //set name (below icon) to first name
    //console.log(aryUserInfo.userName.firstName);
    $(".displayedName").text(aryUserInfo.userName.firstName);
    text = aryUserInfo.userName.firstName[0] + aryUserInfo.userName.lastName[0];
    console.log("save user info: " + text);
    icon.text(text);
    form.css("display", "none");
    icon.css("display", "block");
    displayedName.css("display", "block");
};

setDateTime();

//console.log(aryUserInfo.userName.firstName);
if (JSON.parse(localStorage.getItem("UsrInfo")) !== null) {
    if (JSON.parse(localStorage.getItem("UsrInfo")).userName.firstName !== "") {
        displayedName.text(JSON.parse(localStorage.getItem("UsrInfo")).userName.firstName);
        text = JSON.parse(localStorage.getItem("UsrInfo")).userName.firstName[0] + JSON.parse(localStorage.getItem("UsrInfo")).userName.lastName[0];
        icon.text(text);
        console.log("user first name not null" + text);
    }

};

console.log(JSON.parse(localStorage.getItem("UsrInfo")));
if (JSON.parse(localStorage.getItem("UsrInfo")) == null) {
    console.log("userInfo null " + text);
    icon.css("display", "none");
    displayedName.css("display", "none");
    editInfo();
}
else if (JSON.parse(localStorage.getItem("UsrInfo")).userName.firstName == "") {
    console.log("first name null "+JSON.parse(localStorage.getItem("UsrInfo")).userName.firstName);
    icon.css("display", "none");
    displayedName.css("display", "none");
    editInfo();
}
else if (JSON.parse(localStorage.getItem("UsrInfo")).userName.lastName == "") {
    console.log("first name null "+JSON.parse(localStorage.getItem("UsrInfo")).userName.firstName);
    icon.css("display", "none");
    displayedName.css("display", "none");
    editInfo();
}
else if (JSON.parse(localStorage.getItem("UsrInfo")).userName.city == "") {
    console.log("first name null "+JSON.parse(localStorage.getItem("UsrInfo")).userName.firstName);
    icon.css("display", "none");
    displayedName.css("display", "none");
    editInfo();
}
//create icon styling
icon.css("padding", "10px");
icon.css("background-color", "#61b69f");
icon.css("border-radius", "50px");

editInfoBttn.on('click', editInfo);
//submitUserInfo.on('click', saveUserInfo(event));
submitUserInfo.on('click', (event) => {
    event.preventDefault();
    saveUserInfo(event);
});

console.log(aryUserInfo.userName);
console.log(aryUserInfo.userName.firstName);