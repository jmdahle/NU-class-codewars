// twoSort
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e
// 8 kyu

// Directions
// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// Function
const twoSort = (arr) => {
    return arr.sort()[0].split('').join('***');
}
// Export
module.exports = twoSort;

// Test
// console.log( twoSort(['bob','brant','are']),'a***r***e');