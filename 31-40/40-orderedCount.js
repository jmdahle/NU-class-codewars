// orderedCount
// https://www.codewars.com/kata/57a6633153ba33189e000074
// 7 kyu

// Description
/*
ount the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// Function
const orderedCount = (str) => {
    let returnArray = [];
    // select unique letters
    str.split('').forEach( letter => {
        if (!returnArray.includes(letter)) {
            returnArray.push(letter);
        }
    });
    // get the count of each letter
    return returnArray.map(letter => {
        let rx = new RegExp(letter, 'gi');
        return [letter, str.match(rx).length]
    });
}

// Export
module.exports = orderedCount;

// Log test
// console.log( orderedCount('abracadabra'), [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);