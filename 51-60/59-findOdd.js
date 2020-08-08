// findOdd
// https://www.codewars.com/kata/54da5a58ea159efa38000836/
// 6 kyu

// Description
/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

// Function
const findOdd = (arr) => {
    for (let i=0; i<arr.length; i++) {
        // count the number of instances in the array
        if ( (arr.filter(a => a === arr[i]).length)%2 === 1 ) {
            return arr[i];
        } 
    }
}

// Export
module.exports = findOdd;

// Log test
// console.log( findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5 );

