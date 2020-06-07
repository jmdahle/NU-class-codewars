// digitize
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// 8 kyu

/* Directions */
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

/* Function */

const digitize = (int) => {
    let array = [];
    for (let i = 0; i < int.toString().length; i++) {
        array.unshift(parseInt(int.toString()[i]));
    }
    return array;
}


/* Export */
module.exports = digitize;

/* Test Cases */
console.log ( digitize(35231), [1,3,2,5,3]);
