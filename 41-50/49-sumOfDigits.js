// sumOfDigits
// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba
// 7 kyu


// Description
/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 15
*/

// Original Function
/*
function getSumOfDigits(integer) {
  var sum = null;
  var digits =  Math.floor(integer).toString();
  for(var ix = 1; ix < digits.length; ix = sum + 1) {
    sum =+ digits[ix + 1]);
  }
  return sum;
}
*/

// Function Solution
function getSumOfDigits(integer) {
    var sum = null;
    var digits =  Math.floor(integer).toString();
    for(var ix = 0; ix < digits.length; ix++) {
      sum += parseInt(digits[ix]);
    }
    return sum;
  }
// Export
module.exports = getSumOfDigits;
// Log tests
// console.log( getSumOfDigits(123), 6);