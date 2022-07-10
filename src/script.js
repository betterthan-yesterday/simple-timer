"use strict";

var start = false;
var running = false;

window.onload = function() {
    
    const incHour = document.getElementById("hour-inc");
    const decHour = document.getElementById("hour-dec");
    const incMin = document.getElementById("min-inc");
    const decMin = document.getElementById("min-dec");
    const incSec = document.getElementById("sec-inc");
    const decSec = document.getElementById("sec-dec");

    const startBtn = document.getElementById("start");
    const resetBtn = document.getElementById("reset");

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
        startTimer(hourBox, minBox, secBox, startBtn);
    });

    resetBtn.addEventListener("click", () => {
        window.location.reload();
    });

}

function incOne(text) {
    let current = text.getAttribute("value");
    if ((current < 60) || (text.getAttribute("id") == "hours")) {
        text.setAttribute("value", ("0" + (+current + 1)).slice(-2));
    }
}

function decOne(text) {
    let current = text.getAttribute("value");
    if (+current) {
        text.setAttribute("value", ("0" + (+current - 1)).slice(-2));
    }
}

function startTimer(hBox, mBox, sBox, button) {
    
    start = !start;

    button.innerText = (start) ? "Pause" : "Start";
    button.className = (start) ? "clicked" : "start";

    if (!running) {
        updateTimer(arguments);
    }

    running = true;

}

function updateTimer(args) {

    let hour = args[0].value;
    let min =  args[1].value;
    let sec =  args[2].value;

    if (start) {
        if (sec == "00") {
            if (!+min) {
                if (!+hour) {
                    updateTimer = function(){}
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
    }

    console.log(hour, min, sec)
    
    args[0].value = hour.slice(-2);
    args[1].value = min.slice(-2);
    args[2].value = sec.slice(-2);

    setTimeout(updateTimer, 1000, args)

}