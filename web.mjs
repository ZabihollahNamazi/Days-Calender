// This is a placeholder file which shows how you can access functions and data defined in other files.
// It can be loaded into index.html.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getGreeting } from "./common.mjs";
import daysData from "./days.json" with { type: "json" };

let year = new Date().getFullYear();
let month = new Date().getMonth();

function displayCalender(year, month){
    let fistDayOfWeek = new Date(year, month, 1).getDay(); // gets first day of week (0-6), in computer starts from sunday = 0
    fistDayOfWeek = fistDayOfWeek == 0 ? 6 : fistDayOfWeek - 1; // formatted to start from monday = 0
    let dayCount = 1;
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate(); // 0 gives you the last day of the previous month, but we add month by 1 to get the total day of current month
    console.log(year, " , ", month)
    let table = document.getElementById("table-calender");
    table.innerHTML = ""; // This clears the previous calendar

    const weekDaysName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let weekDaysNameRow = document.createElement("tr");
    for(let wd = 0; wd <= 6; wd++){ //this loop make cells from first day for first week or first row
        let weekDay = document.createElement("th");
        weekDay.innerHTML = weekDaysName[wd];
        weekDay.style.border = "solid black";
        weekDaysNameRow.appendChild(weekDay)
    }
    table.appendChild(weekDaysNameRow)

    let firstRowOfCalender = document.createElement("tr");
    for(let i = 0; i < fistDayOfWeek; i++){  //this loop makes cells for empty days before starting first day of first week or row
        let emptyDay = document.createElement("th");
        emptyDay.innerHTML = "-";
        emptyDay.style.border = "solid black";
        firstRowOfCalender.appendChild(emptyDay)
    }
    table.appendChild(firstRowOfCalender)

    for(let i = fistDayOfWeek; i < 7; i++){ //this loop make cells from first day for first week or first row
        let firstRowDay = document.createElement("th");
        firstRowDay.innerHTML = dayCount;
        dayCount++;
        firstRowDay.style.border = "solid black";
        firstRowOfCalender.appendChild(firstRowDay)
    }
    table.appendChild(firstRowOfCalender)

    while(dayCount <= totalDaysInMonth){
        let newRow = document.createElement("tr");
        for(let j = 0; j <= 6; j++){
            if (dayCount > totalDaysInMonth) break;
            let restDay = document.createElement("th");
            restDay.innerHTML = dayCount;
            restDay.style.border = "solid black";
            newRow.appendChild(restDay);
            dayCount++;
        }
        table.appendChild(newRow)
    }
}

function preNextBtn(){
    let previousBtn = document.getElementById("previous");
    let next = document.getElementById("next");

    previousBtn.addEventListener("click", ()=>{
        month--;
        if(month < 0){
            month = 11;
            preYear--;
        }
        displayCalender(year, month)
    })

    next.addEventListener("click", ()=>{
        month++;
        if(month > 11){
            month = 0;
            nextYear++
        }
        displayCalender(year, month)
    })
}
window.onload = function() {
    
    displayCalender(year, month)
    preNextBtn()
}
