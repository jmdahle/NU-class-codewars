// maximum subarray sum
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c
// 5 KYU

// Description
/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

// Function
const maxSequence = (arr) => {
    let maxSum = 0;
    // note that the max must start and end with a non-negative number
    // loop through beginning locations
    for (let beginLoc = 0; beginLoc < arr.length; beginLoc ++) {
        // if the number is positive, loop through the possible ending locaitons
        if (arr[beginLoc] > 0) {
            for (let endLoc = arr.length - 1; endLoc >= beginLoc; endLoc--) {
                // if the number is positive, get the sum
                if (arr[endLoc] > 0) {
                    let testArray = arr.slice(beginLoc, endLoc+1);
                    let testArraySum = testArray.reduce( (sum,item) => { return sum += item },0);
                    console.log(beginLoc, arr[beginLoc], endLoc, arr[endLoc], testArray, testArraySum);
                    if (testArraySum > maxSum) {
                        maxSum = testArraySum;
                    }
                }
            }
        }
    }
    return maxSum;
}

// Export
module.exports = maxSequence;

// Log test
console.log ( maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]),6);

