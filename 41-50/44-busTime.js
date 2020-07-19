// Bus Timer
// https://www.codewars.com/kata/5736378e3f3dfd5a820000cb
// 7 kyu

// Description
/*
It's been a tough week at work and you are stuggling to get out of bed in the morning.

While waiting at the bus stop you realise that if you could time your arrival to the nearest minute you could get valuable extra minutes in bed.

There is a bus that goes to your office every 15 minute, the first bus is at 06:00, and the last bus is at 00:00.

Given that it takes 5 minutes to walk from your front door to the bus stop, implement a function that when given the curent time will tell you much time is left, before you must leave to catch the next bus.

Examples
"05:00"  =>  55
"10:00"  =>  10
"12:10"  =>  0
"12:11"  =>  14
Notes
Return the number of minutes till the next bus
Input will be formatted as HH:MM (24-hour clock)
The input time might be after the buses have stopped running, i.e. after 00:00
*/

// Function 
const busTimer = (t) => {
    let timeArray = t.split(":");
    // convert current time to minutes from 0
    let currentTimeInMinutes = parseInt(timeArray[0]) * 60 + parseInt(timeArray[1]);
    // earliest I can get to bus stop is t + 5, in minutes from 0;
    let earliestArrival = currentTimeInMinutes + 5;
    // the next bus after that is the next closest 15 minute interval from 0
    let nextBusTime = ( Math.ceil(earliestArrival/15) ) * 15;
    // if nextBusTime is before 6am, use 6am
    // 6 am is 360min
    nextBusTime = nextBusTime < 360 ? 360 : nextBusTime;
    // console.log(currentTimeInMinutes, earliestArrival, nextBusTime);
    // if the earliest arrival is tomorrow, return values need adjusting;
    if (earliestArrival > 1440 ) { 
        // adjust for value at 24:00 to be 0 at 00:00; 1440 minutes
        earliestArrival -= 1440; 
        // buses start at 6am
        nextBusTime = 360;
        let timeToLeave = nextBusTime - 5;
        let timeUntilLeave = timeToLeave - (currentTimeInMinutes - 1440); // again, adjust for 24:00 to 00:00
        return timeUntilLeave;
        }
    let timeToLeave = nextBusTime - 5;
    let timeUntilLeave = timeToLeave - currentTimeInMinutes;
    return timeUntilLeave;
}

// Export
module.exports = busTimer;

// Log Tests
// console.log(busTimer("10:00"), 10);
