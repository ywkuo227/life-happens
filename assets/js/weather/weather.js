var aryUserInfo = JSON.parse(localStorage.getItem("UsrInfo"));

function displayLocalWeather() {
    fetch(genWeatherQueryURL(aryUserInfo.location.city))
        .then((response) => {
            if (!response.ok) {
                throw response.json();
            }
            return response.json();
        })
        .then((weatherData) => {

            fetch(genOneCallQueryURL(weatherData.coord.lat, weatherData.coord.lon))
                .then((response) => {
                    if (!response.ok) {
                        throw response.json();
                    }
                    return response.json();
                })
                .then((oneCallData) => {
                    var uviColor;

                    $("#dispDailyWeather").empty();
                    $("#weekForecast").empty();

                    if (oneCallData.current.uvi <= 2.99) {
                        uviColor = "uvi-low";
                    } else if (oneCallData.current.uvi >= 3 && oneCallData.current.uvi <= 5.99) {
                        uviColor = "uvi-medium";
                    } else if (oneCallData.current.uvi >= 6 && oneCallData.current.uvi <= 7.99) {
                        uviColor = "uvi-high";
                    } else if (oneCallData.current.uvi >= 8 && oneCallData.current.uvi <= 10.99) {
                        uviColor = "uvi-very-high";
                    } else if (oneCallData.current.uvi >= 11) {
                        uviColor = "uvi-extreme";
                    }

                    $("#dispDailyWeather").append(`
                        <div class="columns">
                            <i class="column is-one-quarter weather-icon">
                                <img src="${genIconURL(weatherData.weather[0].icon)}" height="100px" width="100px" alt="${weatherData.weather[0].description}">
                            </i>
                            <div class="column">
                                <div class="columns">
                                    <div class="column is-full">
                                        ${weatherData.name}
                                        <div class="columns">
                                            <div class="column is-half">
                                                ${weatherData.weather[0].main}  -  ${Math.round(weatherData.main.temp)}°F<br>
                                                Wind:  ${Math.round(weatherData.wind.speed * 10) / 10} MPH
                                            </div>
                                            <div class="column">
                                                UV Index:  <span class="p-1 uvi ${uviColor}">${Math.round(oneCallData.current.uvi * 10) / 10}</span><br>
                                                Humidity:  ${weatherData.main.humidity}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `);

                    for (i = 1; i < 8; i++) {
                        $("#weekForecast").append(`
                            <div class="forecastContent">
                                <div>
                                    ${moment.unix(oneCallData.daily[i].dt).format("ddd")}
                                </div>
                                <i>
                                <img src="${genIconURL(oneCallData.daily[i].weather[0].icon)}" alt="${oneCallData.daily[i].weather.description}">
                                </i>
                                <div>
                                    ${Math.round(oneCallData.daily[i].temp.day)}°F
                                </div>
                            </div>
                        `)
                    }
                })
        })
}

function displayRegionalWeather() {
    $("#interestedWeather").empty();
    for (i = 0; i < aryUserInfo.savedWeather.length; i++) {
        fetch(genWeatherQueryURL(aryUserInfo.savedWeather[i]))
            .then((response) => {
                if (!response.ok) {
                    throw response.json();
                }
                return response.json();
            })
            .then((weatherData) => {

                fetch(genOneCallQueryURL(weatherData.coord.lat, weatherData.coord.lon))
                    .then((response) => {
                        if (!response.ok) {
                            throw response.json();
                        }
                        return response.json();
                    })
                    .then((oneCallData) => {
                        var uviColor;

                        if (oneCallData.current.uvi <= 2.99) {
                            uviColor = "uvi-low";
                        } else if (oneCallData.current.uvi >= 3 && oneCallData.current.uvi <= 5.99) {
                            uviColor = "uvi-medium";
                        } else if (oneCallData.current.uvi >= 6 && oneCallData.current.uvi <= 7.99) {
                            uviColor = "uvi-high";
                        } else if (oneCallData.current.uvi >= 8 && oneCallData.current.uvi <= 10.99) {
                            uviColor = "uvi-very-high";
                        } else if (oneCallData.current.uvi >= 11) {
                            uviColor = "uvi-extreme";
                        }

                        $("#interestedWeather").append(`
                            <div class="columns mx-1">
                                <i class="column weather-icon">
                                    <img src="${genIconURL(weatherData.weather[0].icon)}" height="75px" width="75px" alt="${weatherData.weather[0].description}">
                                </i>
                                <div class="column is-8">
                                    <div class="columns">
                                        <div class="column is-full">
                                            ${weatherData.name}
                                            <div class="columns">
                                                <div class="column is-half">
                                                    ${weatherData.weather[0].main}  -  ${Math.round(weatherData.main.temp)}°F<br>
                                                    Wind:  ${Math.round(weatherData.wind.speed * 10) / 10} MPH
                                                </div>
                                                <div class="column">
                                                    UV Index:  <span class="p-1 uvi ${uviColor}">${Math.round(oneCallData.current.uvi * 10) / 10}</span><br>
                                                    Humidity:  ${weatherData.main.humidity}%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-1 is-flex is-justify-content-center is-align-items-center">
                                <button class="button is-text delLocBtn" value="${weatherData.name}">
                                    <span class="icon is-small">
                                    <i class="fas fa-minus-square"></i>
                                    </span>
                                </button>
                                </div>
                            </div>
                        `);
                    })
            })
    }
}

// REMOVE BEFORE FLIGHT: pageInitialization
function pgInitialize() {
    displayLocalWeather();
    displayRegionalWeather();
}

pgInitialize();

setInterval(() => {
    pgInitialize();
}, 300000);

$("#addLocBtn").on("click", () => {
    aryUserInfo.savedWeather.unshift($("#inputSearchLoc").val());
    if (aryUserInfo.savedWeather.length > 6) {
        aryUserInfo.savedWeather.length = 6
    }
    localStorage.removeItem("UsrInfo");
    localStorage.setItem("UsrInfo", JSON.stringify(aryUserInfo));
    displayRegionalWeather();
    $("#inputSearchLoc").val("");
});

$("#interestedWeather").on("click", ".delLocBtn", (event) => {
    aryUserInfo.savedWeather.splice(aryUserInfo.savedWeather.indexOf(event.currentTarget.value), 1);
    localStorage.removeItem("UsrInfo");
    localStorage.setItem("UsrInfo", JSON.stringify(aryUserInfo));
    displayRegionalWeather();
});