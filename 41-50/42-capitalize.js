// Indexed Capitalization
// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
// 7 kyu

// Description
/*
Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/

// Function
const capitalize =  (str, arr) => {
    return str.split('').map( (char, index) => arr.includes(index) ? char.toUpperCase() : char).join('');
}

// Export
module.exports = capitalize;

// Log test
// console.log( capitalize('burger',[0,3]), 'BurGer');
