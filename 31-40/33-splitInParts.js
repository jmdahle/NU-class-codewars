// splitInParts
// https://www.codewars.com/kata/5650ab06d11d675371000003
// 7 kyu

/* Description */
// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:

// String length is always greater than 0
// String has no spaces
// Size is always positive

/* Function */
const splitInParts = function(s, partLength){
    let returnString = '';
    for (let i = 0; i < s.length; i += partLength) {
        returnString += s.substr(i,partLength) + ' ';
    }
    return returnString.trim();
}

/* Export */
module.exports = splitInParts;

/* Cases */
// console.log( splitInParts("supercalifragilisticexpialidocious", 3) );
