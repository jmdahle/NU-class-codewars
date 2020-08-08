// largestPair
// https://www.codewars.com/kata/556196a6091a7e7f58000018
// 7 kyu

// Description 
/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

// Function
const largestPairSum = (arr) => {
    // sort the array, then take first(largest) two members and sum them
    return arr.sort( (a,b) => { return b-a }).slice(0,2).reduce( (sum, item) => { return sum + item });
}
// Export
module.exports = largestPairSum;

// Log test
//console.log( largestPairSum([99, 2, 2, 23, 19])); // s/b 122