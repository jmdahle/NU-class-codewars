// capitalize
// https://www.codewars.com/kata/59cfc000aeb2844d16000075
// 7 kyu


// Description
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/


// Function
const capitalize = (s) => {
    return [
        s.split('').map( (itm, idx) => {
        return (idx % 2 !== 0) ? itm.toLowerCase() : itm.toUpperCase()
    }).join(''),
    s.split('').map( (itm, idx) => {
        return (idx % 2 !== 0) ? itm.toUpperCase() : itm.toLowerCase()
    }).join('')
];
}

// Export
module.exports = capitalize;
// Log
console.log(capitalize('abcdef'));