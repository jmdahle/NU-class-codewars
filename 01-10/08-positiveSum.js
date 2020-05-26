// Positive Sum
// https://www.codewars.com/kata/5715eaedb436cf5606000381
// 8 kyu

/* Description */
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

/* Function */
// without comments
const positiveSum = (array) => {
    return array.filter( (item) => { return item > 0; } ).reduce( (total, positiveItem) => { return total + positiveItem; },0);
}
//with comments
/* 
const positiveSum = (array) => {
    // filter to an array of only the positive items

    return (
        array.filter( (item) => {
            return item > 0;
        } ).reduce( (total, positiveItem) => {     // then sum the remaining (positive) items
            return total + positiveItem;
        },0)  // the second value of the reduce function sets the initial value; this returns 0 if the array is empty
    );
}
*/

/* Export */
module.exports = positiveSum;

/* test cases */
// console.log( positiveSum([1,-4,5]), 's/b', 6);
