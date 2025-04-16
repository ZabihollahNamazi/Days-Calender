// This is a placeholder file which shows how you can define functions which can be used from both a browser script and a node script. You can delete the contents of the file once you have understood how it works.
import daysData from "./days.json" with { type: "json" };
// let count = 8;
// let firstDayOfWeek = 1;
// let month = 3;
// let year = 2025;
let secondTuesday = 0;
export function getGreeting(dayCount, month, year) {
    
    if(month == 3){
        if((new Date(year, month, dayCount).getDay()) == 2){
            secondTuesday++;
            if(secondTuesday == 2){
                return "count";
            }
            else{
                return dayCount;
            }
        }
        else{
            return dayCount;
        }
    }
}
// console.log(getGreeting(count, month, year));