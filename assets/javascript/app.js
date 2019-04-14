// =============================== Variables ===============================
// Initialize connection with firebase.
var config = {
    apiKey: "AIzaSyBVduicjSagRcZbWga7LhS6zrCIq0OZYuw",
    authDomain: "daredevils-project.firebaseapp.com",
    databaseURL: "https://daredevils-project.firebaseio.com",
    projectId: "daredevils-project",
    storageBucket: "",
    messagingSenderId: "746048417171"
};
firebase.initializeApp(config);

var weatherURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=";
var weatherAPI = "Pw6sEtuGM1QQngSJFGOR9LFJLUtgnFhs";
var fixerURL;
var fixerAPI;
var unsplashURL;
var unsplashAPI;
var triposoURL;
var triposoAPI;

var currentCity;
var country;

// =============================== Functions ===============================
// Get info for a city.
function getInfo(cityName) {
    $.ajax({
        url: weatherURL + weatherAPI + "&q=" + cityName,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        country = response[0].Country.EnglishName;
        console.log("country is " + country);
        // Check if country name has culture info.
        switch (country) {
            case "Brazil":
                console.log("it's in brazil");
                document.getElementById("customs").style.display = "block";
                $( "#content" ).load( "ajax/customs.html div#brazil" );
                break;
            case "Japan":
                console.log("it's in japan");
                document.getElementById("customs").style.display = "block";
                $( "#customs" ).load( "ajax/customs.html div#japan" );
                break;
            case "United Arab Emirates":
                console.log("it's in uae");
                document.getElementById("customs").style.display = "block";
                $( "#customs" ).load( "ajax/customs.html div#uae" );
                break;
            case "Russia":
                console.log("it's in russia");
                document.getElementById("customs").style.display = "block";
                $( "#customs" ).load( "ajax/customs.html div#russia" );
                break;
            case "Spain":
                console.log("it's in spain");
                document.getElementById("customs").style.display = "block";
                $( "#customs" ).load( "ajax/customs.html div#spain" );
                break;
            default:
                console.log("default");
                break;

        }
    });
}
// =============================== Main ===============================

$(function () {
    $("#modal").modal('show');
});

// Hide elements on load
window.onload = function () {
    console.log("Onload");
    document.getElementById("customs").style.display = "none";
    document.getElementById("journal").style.display = "none";
}

$("#searchButton").on("click", function () {
    currentCity = $("#citySearch").val();
    $("#citySearch").val("");
    console.log("current city is " + currentCity);
    getInfo(currentCity);
});

$("#minisearchButton").on("click", function () {
    currentCity = $("#minicitySearch").val();
    $("#minicitySearch").val("");
    console.log("current city is " + currentCity);
    getInfo(currentCity);
});

