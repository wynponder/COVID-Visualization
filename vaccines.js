var data = {
    "url": "https://covid-api.mmediagroup.fr/v1/",
    "method": "GET",
    "timeout": 0,
};

//display large numbers to show with commas for readibility
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Total US Cases
$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/cases?country=US",
        function (data) {
            var confirmedCasesUS = data["All"]["confirmed"];
            document.getElementById("totalCasesUS").innerHTML = numberWithCommas(confirmedCasesUS);

            n = new Date();
            y = n.getFullYear();
            m = n.getMonth() + 1;
            d = n.getDate();
            var todayDate = document.getElementById("todayDate").innerHTML = m + "/" + d + "/" + y;

        })
});

/*var items = [];
var confirmedCases;

$(document).ready(function () {
    $.getJSON(url,
        function (data) {
            confirmedCases = $.each(data, function (key, value) {
                return data.;
            });
            console.log(confirmedCases);
        })
})*/


var usVaccineData = {
    "url": "https://covid-api.mmediagroup.fr/v1/vaccines?country=United%20States",
    "method": "GET",
    "timeout": 0,
};

$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/vaccines?country=United%20States",
        function (data) {
            var peopleFullyVaccinated = data["All"]["people_vaccinated"];
            document.getElementById("usaPeople").innerHTML = numberWithCommas(peopleFullyVaccinated);

            n = new Date();
            y = n.getFullYear();
            m = n.getMonth() + 1;
            d = n.getDate();
            var todayDate = document.getElementById("todayDateTwo").innerHTML = m + "/" + d + "/" + y;

        })
});

$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/vaccines?country=United%20States",
        function (data) {
            var partiallyVaccinated = data["All"]["people_partially_vaccinated"];
            document.getElementById("partialUS").innerHTML = numberWithCommas(partiallyVaccinated);

            n = new Date();
            y = n.getFullYear();
            m = n.getMonth() + 1;
            d = n.getDate();
            var todayDate = document.getElementById("todayDateThree").innerHTML = m + "/" + d + "/" + y;

        })
});

$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/vaccines?country=United%20States",
        function (data) {
            var administeredShots = data["All"]["administered"];
            document.getElementById("admin").innerHTML = numberWithCommas(administeredShots);
        })
});

/*$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/cases?ab=US&status=confirmed",
        function (data) {
            var top5 = function sortByKeyDesc(array, confirmed) {
                return array.sort(function (a, b) {
                    var x = a["confirmed"]; var y = b["confirmed"];
                    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
                });
            }
            console.log(top5); 
        })
});*/
