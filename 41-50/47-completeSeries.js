// completeSeries
// https://www.codewars.com/kata/580a4001d6df740d61000301
// 7 kyu

// Description
/*
You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.

If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:

inputs        outputs
[2,1]     ->  [0,1,2]
[1,4,4,6] ->  [0]
Notes: all numbers are positive integers.

This is set of example outputs based on the input sequence.

inputs        outputs
[0,1]   ->    [0,1]
[1,4,6] ->    [0,1,2,3,4,5,6]
[3,4,5] ->    [0,1,2,3,4,5]
[0,1,0] ->    [0]
*/

// Function
const completeSeries = (arr) => {
    let largestInteger = 0;
    let returnArray = [];
    for (let i = 0; i < arr.length; i++ ) {
        // if item is in the rest of the array, we have a duplicate
        if (arr.slice(i+1).includes(arr[i])) {
            return [0]
        } else {
            if (arr[i]>largestInteger) {largestInteger = arr[i]}
        }
    }
    for (let a = 0; a <= largestInteger; a++) {
        returnArray.push(a);
    }
    return returnArray;
}

// Export
module.exports = completeSeries;

// Log
// console.log( completeSeries([1,4,6]));
// console.log( completeSeries([1,4,1]));
// console.log( completeSeries([1,2,3]));