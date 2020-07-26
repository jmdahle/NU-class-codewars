// multiplyAndFilter
// https://www.codewars.com/kata/55ed875819ae85ca8b00005c
// 7 kyu

// Description
/*
Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.
*/

// Function
const multiplyAndFilter = (array, multiplier) => {
    return array.filter( item => typeof item === 'number').map( number => number * multiplier);
}

// Export
module.exports = multiplyAndFilter;

// Test log
// console.log( multiplyAndFilter([1,2,3,'g',4],2),[2,4,6,8]);

