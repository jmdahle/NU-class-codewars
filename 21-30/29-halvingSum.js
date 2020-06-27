// halvingSum
// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d
// 7 kyu

/* Description */

// Task
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

/* Function */
const halvingSum = (n) => {
    let returnSum = 0;
    let i = 0;
    do {
        returnSum += parseInt(n/(Math.pow(2,i)))
        i ++
    } while (parseInt(n/(Math.pow(2,i))) > 0)
    return returnSum;
}


/* Export */
module.exports = halvingSum;

/* Test Case */
//console.log( halvingSum(25) );
