// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getGreeting } from "./common.mjs";
import daysData from "./days.json" with { type: "json" };
let year = new Date().getFullYear();
let month = new Date().getMonth();
let fistDayOfWeek = new Date(year, month, 1).getDay();
fistDayOfWeek = fistDayOfWeek == 0 ? 6 : fistDayOfWeek == 6 ? 0 : fistDayOfWeek - 1;
console.log(fistDayOfWeek)
console.log(year, " ", month)
function displayCalender(year, month){
    let fistDayOfWeek = new Date(year, month, 1).getDay(); // gets first day of week (0-6), in computer starts from sunday = 0
    fistDayOfWeek = fistDayOfWeek == 0 ? 6 : fistDayOfWeek == 6 ? 0 : fistDayOfWeek - 1; // formatted to start from monday = 0
    let dayCount = 1;
    
    let table = document.querySelector("#table-calender");

    let firstRowOfCalender = document.createElement("tr");
    for(let i = 0; i < fistDayOfWeek; i++){
        let emptyDay = document.createElement("th");
        emptyDay.innerHTML = "-";
        emptyDay.style.border = "solid black";
        firstRowOfCalender.appendChild(emptyDay)
    }
    table.append(firstRowOfCalender)

    for(let i = fistDayOfWeek; i < 7; i++){
        let firstRowDay = document.createElement("th");
        firstRowDay.innerHTML = dayCount;
        dayCount++;
        firstRowDay.style.border = "solid black";
        firstRowOfCalender.appendChild(firstRowDay)
    }
    table.appendChild(firstRowOfCalender)
}

window.onload = function() {
    displayCalender(2025, 4)
}
