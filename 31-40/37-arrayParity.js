// Array element parity
// https://www.codewars.com/kata/5a092d9e46d843b9db000064
// 7 kyu

/* Decrtiption */
// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

/* Function */
const arrayParity = (arr) => {
    let int = arr[0];
    for (let i = 1; i < arr.length; i++) {
        //console.log(i,arr[i],arr.slice(i+1,arr.length))
        if ( !arr.slice(i+1,arr.length).includes(arr[i]*-1) && !arr.slice(0,i-1).includes(arr[i]*-1) ) {
            int = arr[i];
        }
    }
    return int;
}

/* Export */
module.exports = arrayParity;

/* Test Cases */
// console.log( arrayParity([1,-1,2,-2,3,3]),3 );
// console.log( arrayParity([-3,1,2,3,-1,-4,-2]),-4);