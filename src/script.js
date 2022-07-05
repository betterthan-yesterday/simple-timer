"use strict";

window.onload = function() {
    
    const incHour = document.getElementById("hour-inc");
    const decHour = document.getElementById("hour-dec");
    const incMin = document.getElementById("min-inc");
    const decMin = document.getElementById("min-dec");
    const incSec = document.getElementById("sec-inc");
    const decSec = document.getElementById("sec-dec");

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