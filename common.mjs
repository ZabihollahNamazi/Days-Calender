// This is a placeholder file which shows how you can define functions which can be used from both a browser script and a node script. You can delete the contents of the file once you have understood how it works.
import daysData from "./days.json" with { type: "json" };
// let count = 8;
// let firstDayOfWeek = 1;
// let month = 3;
// let year = 2025;
let secondTuesdayOfOctober = 0;
let secondSaturdayOfMay = 0;
let saturdayOfSeptember = 0;
let lastFridayOfOctober = 0;
export function getGreeting(dayCount, month, year) {
    if((new Date(year, month + 1, 0).getDate()) <= dayCount){ // this is because when to go to next month, needs to reset them to zero again -- if you don't then we you click next month btn for example from jan to dec an we you go to next year it does'nt show you any event days bcz the variables are not refreshed
        secondTuesdayOfOctober = 0;
        secondSaturdayOfMay = 0;
        saturdayOfSeptember = 0;
        lastFridayOfOctober = 0;

    }

    if(month == 9){ // october
        if((new Date(year, month, dayCount).getDay()) == 2){ //if the index of the day is 2 which is tuesday
            secondTuesdayOfOctober++; // adds 1 to the variable till it will be 2  - it can continue after 2 but we need it when its 2
            if(secondTuesdayOfOctober == 2){ // when its 2 then we found the second tuesday
                const eventDay = {
                    day: dayCount,
                    name: daysData[0].name,
                    link: daysData[0].descriptionURL
                  };
                return eventDay; //`${dayCount} - ${daysData[0].name}`; // return the events day of second tuesday
            }
            else{
                return dayCount;
            }
        }
        if((new Date(year, month, dayCount).getDay()) == 5){
            lastFridayOfOctober = (new Date(year, month + 1, 0).getDate()) - dayCount; // remaining of dayCount minus total days of the month
            console.log(lastFridayOfOctober)
            if(lastFridayOfOctober < 7){ // if the remaining is less than 7
                const eventDay = {
                    day: dayCount,
                    name: daysData[4].name,
                    link: daysData[4].descriptionURL
                  };
                return eventDay; //`${dayCount} - ${daysData[4].name}`;
            }
            else{
                return dayCount;
            }
        }
        else{
            return dayCount;
        }
    }
    if(month == 4){
        if((new Date(year, month, dayCount).getDay()) == 6){
            secondSaturdayOfMay++;
            if(secondSaturdayOfMay == 2){
                const eventDay = {
                    day: dayCount,
                    name: daysData[1].name,
                    link: daysData[1].descriptionURL
                  };
                return eventDay; //`${dayCount} - ${daysData[1].name}`;
            }
            else{
                return dayCount;
            }
        }
        else{
            return dayCount;
        }
    }
    if(month == 8){
        if((new Date(year, month, dayCount).getDay()) == 6){
            saturdayOfSeptember++;
            if(saturdayOfSeptember == 1){
                const eventDay = {
                    day: dayCount,
                    name: daysData[2].name,
                    link: daysData[2].descriptionURL
                  };
                return eventDay; //`${dayCount} - ${daysData[2].name}`;
            }
            else if(saturdayOfSeptember == 3){
                const eventDay = {
                    day: dayCount,
                    name: daysData[3].name,
                    link: daysData[3].descriptionURL
                  };
                return eventDay; //`${dayCount} - ${daysData[3].name}`;
            }
            else{
                return dayCount;
            }
        }
        else{
            return dayCount;
        }
    }
    else{
        return dayCount;
    }
}
// console.log(getGreeting(count, month, year));