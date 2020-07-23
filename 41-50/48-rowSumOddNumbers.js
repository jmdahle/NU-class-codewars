// rowSumOddNumbers
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
// 7 kyu

// Description
/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

// Function
const rowSumOddNumbers = (n) => {
    // initial number in a row n is (n * (n-1)) + 1
    // e.g. row 4 starts with a 13 ( 4 * 3 + 1 )
    // and each row has n numbers in it, each 2 higer than the last
    // the final number in a row is starting number + (n-1) * 2
    // e.g. row 4 ends with 13 + 3 *2 = 13 + 6 = 19
    // the sum is the (first number + last number)/ 2 * n
    // or ((((n * (n-1)) + 1 )*2 + (n-1) *2)/2 * n)
    return (((n * (n -1)) + 1) * 2 + (n-1) * 2) * (n/2);
}
// Export
module.exports = rowSumOddNumbers

// Log test
// console.log( rowSumOddNumbers(1), 1);
// console.log( rowSumOddNumbers(2), 8);
// console.log( rowSumOddNumbers(3), 27);
// console.log( rowSumOddNumbers(4), 64);