// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
// Level 8kyu

/** Directions **/

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum
// (also as a string):
//
// sumStr("4", "5")    // should output "9"
// sumStr("34", "5")   // should output "39"
// If either input is an empty string, consider it as zero.

/** Function **/

function sumStr(a,b) {
    // convert string arguments into numbers, but return 0 if not a number
    a = parseFloat(a) || 0;
    b = parseFloat(b) || 0;
    // return the sum as a string
    return (a + b).toString();
}

/** Test Cases **/

console.log( sumStr("4","5") ); // should return "9"
console.log( sumStr("34","5") ); // should return "39"
console.log( sumStr("4.5", "5") ); // should return "9.5"
console.log( sumStr("", "5") ); // should return "5"
console.log( sumStr( "x", "5") ); // should return "5"


