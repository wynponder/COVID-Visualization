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
            $('#totalCasesUS').html(numberWithCommas(confirmedCasesUS));

            n = new Date();
            y = n.getFullYear();
            m = n.getMonth() + 1;
            d = n.getDate();
            var todayDate = $('#todayDate').html(m + "/" + d + "/" + y);
        })
});

//top right component - complete vaccinations
$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/vaccines?country=US",
        function (data) {
            var peopleFullyVaccinated = data["All"]["people_vaccinated"];
            $('#usaPeople').html(numberWithCommas(peopleFullyVaccinated));

            n = new Date();
            y = n.getFullYear();
            m = n.getMonth() + 1;
            d = n.getDate();

            var todayDate = $('#todayDateTwo').html(m + "/" + d + "/" + y);

        })
});

//bottom left component - partial vaccinations
$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/vaccines?country=US",
        function (data) {
            var partiallyVaccinated = data["All"]["people_partially_vaccinated"];
            $('#partialUS').html(numberWithCommas(partiallyVaccinated));


            n = new Date();
            y = n.getFullYear();
            m = n.getMonth() + 1;
            d = n.getDate();
            var todayDate = $('#todayDateThree').html(m + "/" + d + "/" + y);

        })
});

//center component - total vaccinations: partial + complete
$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/vaccines?country=US",
        function (data) {
            var administeredShots = data["All"]["administered"];
            $('#admin').html(numberWithCommas(administeredShots));
        })
});

//bottom right component - top three states
$(document).ready(function () {
    $.getJSON("https://covid-api.mmediagroup.fr/v1/cases?country=US",
        function (data) {
            var sortable = [];
            //filtering out non-states from new array
            var ignoredStates = [
                "All",
                "Grand Princess"
            ];
            for (var state in data) {
                if (!ignoredStates.includes(state)) {
                    sortable.push([state, data[state].confirmed])
                };
            }

            var sorted = sortable.sort(function (a, b) {
                return a[1] < b[1] ? 1 : -1;
            })

            //pulling the top three states from the new array
            var firstState = sorted[0];
            var secondState = sorted[1];
            var thirdState = sorted[2];

            //adding commas to the number of cases for each of the top three states
            var firstStateCommas = firstState[0] + ": " + numberWithCommas(firstState[1]);
            var secondStateCommas = secondState[0] + ": " + numberWithCommas(secondState[1]);
            var thirdStateCommas = thirdState[0] + ": " + numberWithCommas(thirdState[1]);

            //using JQuery to show the results of the top three states
            $('#firstState').html(firstStateCommas);
            $('#secondState').html(secondStateCommas);
            $('#thirdState').html(thirdStateCommas);

            //showing today's date to update the data
            n = new Date();
            y = n.getFullYear();
            m = n.getMonth() + 1;
            d = n.getDate();
            var todayDate = $('#todayDateFour').html(m + "/" + d + "/" + y);

        })
});
