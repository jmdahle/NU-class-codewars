// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

/** Directions **/
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

/** Function **/
var countSheep = function (num) {
    // initialize a variable to hold the contatenated text
    let returnText = '';
    // loop from 1 to num
    for (let i = 1; i <= num; i++) {
        returnText += i + ' sheep...';
    }
    return returnText;
}

/** Export function */

module.exports = countSheep;

/** Test Cases **/
// create these tests in jest
// console.log (countSheep(1) ); //, "1 sheep...");
// console.log (countSheep(2) ); //, "1 sheep...2 sheep...");
// console.log (countSheep(3) ); //, "1 sheep...2 sheep...3 sheep...");

