// Simple frequency sort
// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc
// 6 KYU

// Description
/*
n this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
--we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value

*/

// Function
const solve = (arr) => {
    // create an object of element, frequency for sorting the array
    let frequencyCounter = {};
    arr.forEach( (v) => {
        if (frequencyCounter[v]) {
            frequencyCounter[v] += 1;

        } else {
            frequencyCounter[v] = 1;
        }
    });
    // sort by frequency (desc), then by value (asc)
    return arr.sort( (a,b) => {
        if (frequencyCounter[b] === frequencyCounter[a]) {
            return a-b
        } else {
            return frequencyCounter[b]-frequencyCounter[a]
        }
    });
}

// Export
module.exports = solve;

// Log test
console.log ( solve([1,2,3,0,5,0,1,6,8,8,6,9,1]),[1,1,1,0,0,6,6,8,8,2,3,5,9]);

