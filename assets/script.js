
window.onload = function () {
    colourCode();
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




