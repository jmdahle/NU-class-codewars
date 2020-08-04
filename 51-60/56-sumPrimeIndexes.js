// Sum of Prime Indexes
// https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript
// 6 kyu

// Description
/*
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0. 
*/
// Function
const total = (arr) => {
    const getPrimes = (num) => {
        // return array of primes up to num (inclusive)
        let primes = [2];
        for (let i=3; i<=num; i++) {
            let isPrime = true;
            for (let j=2; j<i; j++) {
                if (i%j ===0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                primes.push(i);
            }
        }
        return primes;
    }
    let indexes = getPrimes(arr.length-1);
    return arr.reduce( (cum, cur, idx) => {
        return indexes.includes(idx) ? cum + cur: cum
    },0);
}

// Export
module.exports = total;

// Log test
// console.log( total([1,2,3,4,5,6,7,8,9,10,11]),21);

