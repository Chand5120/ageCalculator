"use strict";

const years = document.querySelector(".year");
const months = document.querySelector(".month");
const day1 = document.querySelector(".day");
const displayYear = document.querySelector(".disYear");
const displayMonth = document.querySelector(".disMonth");
const displayDay = document.querySelector(".disDay");
const button1 = document.querySelector(".btn");
const currentDate = 17;
const currentYear = 2023;
const currentMonth = 12;

document.querySelector(".buttonDiv1").addEventListener("click", function() {
    let birthYear = years.value;
    let birthMonth = months.value;
    let birthDate = day1.value;

    let year = Math.floor(currentYear - birthYear);
    let month = Math.floor(currentMonth - birthMonth);
    if (month < 0) {
        year -= 1;
        month += 12;
    }
    let day = currentDate - birthDate;
    if (day < 0) {
        month -= 1;
        day += 30;
    };

    displayMonth.textContent = month;
    displayDay.textContent = day;
    displayYear.textContent = year;
});