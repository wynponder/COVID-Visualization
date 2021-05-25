var data = {
    "url": "https://covid-api.mmediagroup.fr/v1/",
    "method": "GET",
    "timeout": 0,
};

//display large numbers to show with commas for readibility
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//top left component - confirmed US Cases
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


//top right component - complete vaccinations
$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/vaccines?country=US",
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

//bottom left component - partial vaccinations
$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/vaccines?country=US",
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

//center component - total vaccinations: partial + complete
$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/vaccines?country=US",
        function (data) {
            var administeredShots = data["All"]["administered"];
            document.getElementById("admin").innerHTML = numberWithCommas(administeredShots);
        })
});

//bottom right component - top three states
$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/cases?country=US",
        function (data) {
            var sortable = [];
            /*create variable called ignored states - actual check here within the for loop would be if state is not in ignored states, push*/
            var ignoredStates = [
                "All",
                "Grand Princess"
            ];
            //console.log(data);
            for (var state in data) {
                //if ignored states includes state, it would just push all and GP
                if (!ignoredStates.includes(state)) {
                    sortable.push([state, data[state].confirmed])
                };
            }


            var sorted = sortable.sort(function (a, b) {
                return a[1] < b[1] ? 1 : -1;
            })


            var firstState = sorted[0];
            var secondState = sorted[1];
            var thirdState = sorted[2];

            //document.getElementById("firstState").innerHTML = firstState.join(" ");
            document.getElementById("firstState").innerHTML = firstState[0] + ": " + numberWithCommas(firstState[1]);
            document.getElementById("secondState").innerHTML = secondState[0] + ": " + numberWithCommas(secondState[1]);
            document.getElementById("thirdState").innerHTML = thirdState[0] + ": " + numberWithCommas(thirdState[1]);


            n = new Date();
            y = n.getFullYear();
            m = n.getMonth() + 1;
            d = n.getDate();
            var todayDate = document.getElementById("todayDateFour").innerHTML = m + "/" + d + "/" + y;

        })
});
