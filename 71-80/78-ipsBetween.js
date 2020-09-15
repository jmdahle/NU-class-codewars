// Count IP Addresses
// https://www.codewars.com/kata/526989a41034285187000de4
// 5 KYU

// Description
/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
*/

// Function
const ipsBetween = (start, end) => {
    let startArray = start.split(".");
    let endArray = end.split(".");
    let numAddr = 0;
    for (let i=0; i<4; i++) {
        numAddr += (parseInt(endArray[i]) - parseInt(startArray[i])) * Math.pow(256,3-i);
    }
    return numAddr;
}

// Export
module.exports = ipsBetween;

// Log test
// console.log ( ipsBetween("10.0.0.0", "10.0.1.1"),257);

