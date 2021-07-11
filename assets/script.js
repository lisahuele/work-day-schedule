
window.onload = function () {
    colourCode();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
}

// when user opens the planner
// then the current day & time is displayed at the top of the calendar
var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// when user scrolls, they are presented with time blocks for standard business hours (9am - 5pm)
// when user views the time blocks, each time block is colour-coded to indicate whether it is in the past, present, or future
// past (grey), present (red), future (green)
var now = new Date().getHours();

function colourCode() {
    if (now > 9) {
        $("#9am-text").addClass("past");
    } else if (now >= 9 && now < 10) {
        $("#9am-text").addClass("present");
    } else if (now < 9) {
        $("#9am-text").addClass("past");
    }

    if (now > 10) {
        $("#10am-text").addClass("past");
    } else if (now >= 10 && now < 11) {
        $("#10am-text").addClass("present");
    } else if (now < 10) {
        $("#10am-text").addClass("past");
    }

    if (now > 11) {
        $("#11am-text").addClass("past");
    } else if (now >= 11 && now < 12) {
        $("#11am-text").addClass("present");
    } else if (now < 11) {
        $("#11am-text").addClass("past");
    }

    if (now > 12) {
        $("#12pm-text").addClass("past");
    } else if (now >= 12 && now < 13) {
        $("#12pm-text").addClass("present");
    } else if (now < 12) {
        $("#12pm-text").addClass("past");
    }

    if (now > 13) {
        $("#1pm-text").addClass("past");
    } else if (now >= 13 && now < 14) {
        $("#1pm-text").addClass("present");
    } else if (now < 13) {
        $("#1pm-text").addClass("past");
    }

    if (now > 14) {
        $("#2pm-text").addClass("past");
    } else if (now >= 14 && now < 15) {
        $("#2pm-text").addClass("present");
    } else if (now < 14) {
        $("#2pm-text").addClass("past");
    }

    if (now > 15) {
        $("#3pm-text").addClass("past");
    } else if (now >= 15 && now < 16) {
        $("#3pm-text").addClass("present");
    } else if (now < 15) {
        $("#3pm-text").addClass("past");
    }

    if (now > 16) {
        $("#4pm-text").addClass("past");
    } else if (now >= 16 && now < 17) {
        $("#4pm-text").addClass("present");
    } else if (now < 16) {
        $("#4pm-text").addClass("past");
    }

    if (now > 17) {
        $("#5pm-text").addClass("past");
    } else if (now >= 17 && now < 18) {
        $("#5pm-text").addClass("present");
    } else if (now < 17) {
        $("#5pm-text").addClass("past");
    }
}

// when user clicks on a time block, user can enter an event
// when user click the save button for that time block
// then the text for that event is saved in local storage
// when user refreshes the page, the saved events remain

function nineAM() {
    var inputNineEl = document.getElementById("9am-text");
    var outputNineEl = document.getElementById("9am-text");
    var buttonNineEl = document.getElementById("9am-button");

    buttonNineEl.addEventListener("click", updateOutputNine);

    outputNineEl.textContent = localStorage.getItem("content9AM");
    inputNineEl.value = localStorage.getItem("content9AM");

    function updateOutputNine() {
        localStorage.setItem("content9AM", inputNineEl.value);
        outputNineEl.textContent = inputNineEl.value;
    }
};

function tenAM() {
    var inputTenEl = document.getElementById("10am-text");
    var outputTenEl = document.getElementById("10am-text");
    var buttonTenEl = document.getElementById("10am-button");

    buttonTenEl.addEventListener("click", updateOutputTen);

    outputTenEl.textContent = localStorage.getItem("content10AM");
    inputTenEl.value = localStorage.getItem("content10AM");

    function updateOutputTen() {
        localStorage.setItem("content10AM", inputTenEl.value);
        outputTenEl.textContent = inputTenEl.value;
    }
};

function elevenAM() {
    var inputElevenEl = document.getElementById("11am-text");
    var outputElevenEl = document.getElementById("11am-text");
    var buttonElevenEl = document.getElementById("11am-button");

    buttonElevenEl.addEventListener("click", updateOutputEleven);

    outputElevenEl.textContent = localStorage.getItem("content11AM");
    inputElevenEl.value = localStorage.getItem("content11AM");

    function updateOutputEleven() {
        localStorage.setItem("content11AM", inputElevenEl.value);
        outputElevenEl.textContent = inputElevenEl.value;
    }
};

function twelvePM() {
    var inputTwelveEl = document.getElementById("12pm-text");
    var outputTwelveEl = document.getElementById("12pm-text");
    var buttonTwelveEl = document.getElementById("12pm-button");

    buttonTwelveEl.addEventListener("click", updateOutputTwelve);

    outputTwelveEl.textContent = localStorage.getItem("content12PM");
    inputTwelveEl.value = localStorage.getItem("content12PM");

    function updateOutputTwelve() {
        localStorage.setItem("content12PM", inputTwelveEl.value);
        outputTwelveEl.textContent = inputTwelveEl.value;
    }
};

function onePM() {
    var inputOneEl = document.getElementById("1pm-text");
    var outputOneEl = document.getElementById("1pm-text");
    var buttonOneEl = document.getElementById("1pm-button");

    buttonOneEl.addEventListener("click", updateOutputOne);

    outputOneEl.textContent = localStorage.getItem("content1PM");
    inputOneEl.value = localStorage.getItem("content1PM");

    function updateOutputOne() {
        localStorage.setItem("content1PM", inputOneEl.value);
        outputOneEl.textContent = inputOneEl.value;
    }
};

function twoPM() {
    var inputTwoEl = document.getElementById("2pm-text");
    var outputTwoEl = document.getElementById("2pm-text");
    var buttonTwoEl = document.getElementById("2pm-button");

    buttonTwoEl.addEventListener("click", updateOutputTwo);

    outputTwoEl.textContent = localStorage.getItem("content2PM");
    inputTwoEl.value = localStorage.getItem("content2PM");

    function updateOutputTwo() {
        localStorage.setItem("content2PM", inputTwoEl.value);
        outputTwoEl.textContent = inputTwoEl.value;
    }
};

function threePM() {
    var inputThreeEl = document.getElementById("3pm-text");
    var outputThreeEl = document.getElementById("3pm-text");
    var buttonThreeEl = document.getElementById("3pm-button");

    buttonThreeEl.addEventListener("click", updateOutputThree);

    outputThreeEl.textContent = localStorage.getItem("content3PM");
    inputThreeEl.value = localStorage.getItem("content3PM");

    function updateOutputThree() {
        localStorage.setItem("content3PM", inputThreeEl.value);
        outputThreeEl.textContent = inputThreeEl.value;
    }
};

function fourPM() {
    var inputFourEl = document.getElementById("4pm-text");
    var outputFourEl = document.getElementById("4pm-text");
    var buttonFourEl = document.getElementById("4pm-button");

    buttonFourEl.addEventListener("click", updateOutputFour);

    outputFourEl.textContent = localStorage.getItem("content4PM");
    inputFourEl.value = localStorage.getItem("content4PM");

    function updateOutputFour() {
        localStorage.setItem("content4PM", inputFourEl.value);
        outputFourEl.textContent = inputFourEl.value;
    }
};

function fivePM() {
    var inputFiveEl = document.getElementById("5pm-text");
    var outputFiveEl = document.getElementById("5pm-text");
    var buttonFiveEl = document.getElementById("5pm-button");

    buttonFiveEl.addEventListener("click", updateOutputFive);

    outputFiveEl.textContent = localStorage.getItem("content5PM");
    inputFiveEl.value = localStorage.getItem("content5PM");

    function updateOutputFive() {
        localStorage.setItem("content5PM", inputFiveEl.value);
        outputFiveEl.textContent = inputFiveEl.value;
    }
};

