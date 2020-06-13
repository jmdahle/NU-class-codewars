// nth power
// https://www.codewars.com/kata/57d814e4950d8489720008db
// 8 kyu

/* Description */
// This kata is from check py.checkio.org

// You are given an array with positive numbers and a number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

/* Function */
const index = (array, n) => {
//    console.log(Math.pow(array[n],n),array[n],n)
    return isNaN(Math.pow(array[n],n)) ? -1 : Math.pow(array[n],n);
}

/* Export */
module.exports = index;

// /* test cases */
// console.log( index([1,2,3],2), '3^2=',9);
// console.log( index([1,2,9],2), '9^2=', 81);
// console.log( index([2,3,4,4,5],4), '5^4=25*25=625', 625 );
// console.log( index([1,2,9],3), '?^3=', -1);
//console.log( index([0,-8,0,4,0],2), '0^0=',0 );