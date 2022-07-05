"use strict";

var start = false;

window.onload = function() {
    
    const incHour = document.getElementById("hour-inc");
    const decHour = document.getElementById("hour-dec");
    const incMin = document.getElementById("min-inc");
    const decMin = document.getElementById("min-dec");
    const incSec = document.getElementById("sec-inc");
    const decSec = document.getElementById("sec-dec");
    const startBtn = document.getElementById("start");

    const hourBox = document.getElementById("hours");
    const minBox = document.getElementById("minutes");
    const secBox = document.getElementById("seconds");

    incHour.addEventListener("click", () => {
        incOne(hourBox);
    });

    decHour.addEventListener("click", () => {
        decOne(hourBox);
    });

    incMin.addEventListener("click", () => {
        incOne(minBox);
    });

    decMin.addEventListener("click", () => {
        decOne(minBox);
    });

    incSec.addEventListener("click", () => {
        incOne(secBox);
    });

    decSec.addEventListener("click", () => {
        decOne(secBox);
    });

    startBtn.addEventListener("click", () => {
        startTimer(hourBox, minBox, secBox);
    });

}

function incOne(text) {
    let current = text.getAttribute("value");
    text.setAttribute("value", ("0" + (+current + 1)).slice(-2));
}

function decOne(text) {
    let current = text.getAttribute("value");
    if (+current) {
        text.setAttribute("value", ("0" + (+current - 1)).slice(-2));
    }
}

function startTimer(hBox, mBox, sBox) {
    
    start = !start;

    let hour = hBox.getAttribute("value");
    let min = mBox.getAttribute("value");
    let sec = sBox.getAttribute("value");

    updateTimer(hour, min, sec, arguments);
    let timerId = setTimeout(updateTimer, 0, hour, min, sec, arguments);
}

function updateTimer(hour, min, sec, args, timerId = null) {

    if (sec == "00") {
        if (!+min) {
            if (!+hour) {
                clearTimeout(timerId)
                console.log("done");
            } else {
                hour = "0" + (+hour - 1);
                min = "59";
                sec = "59";
            }
        } else {
            min = "0" + (+min - 1);
            sec = "59";
        }
    } else {
        sec = "0" + (+sec - 1);
    }

    args[0].setAttribute("value", hour.slice(-2));
    args[1].setAttribute("value", min.slice(-2));
    args[2].setAttribute("value", sec.slice(-2));

    timerId = setTimeout(updateTimer, 1000, hour, min, sec, args, timerId)

}