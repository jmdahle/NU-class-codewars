// London CityHacker
// https://www.codewars.com/kata/5bce125d3bb2adff0d000245/
// 7 kyu

// Description
/*
You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']
Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx
*/

// Function
const londonCityHacker = (journey) => {
    let returnAmount = 0.00;
    const busFare = 1.5; // numbered routes
    const tubeFare = 2.4; // named stops
    let partOfTwoBusTrip = false;
    for (let i = 0; i < journey.length; i++) {
        if (typeof journey[i] === 'string') {
            returnAmount += tubeFare;
            partOfTwoBusTrip = false;
        }
        if (typeof journey[i] === 'number') {
            if (!partOfTwoBusTrip) {
                returnAmount += busFare;
                partOfTwoBusTrip = true;    
            } else {
                partOfTwoBusTrip = false;
            }
        }
    }

    return "£" + returnAmount.toFixed(2).toString();
}

// Export
module.exports = londonCityHacker;

// Log
// console.log( londonCityHacker([12, 'Central', 'Circle', 21]), "£7.80");;

