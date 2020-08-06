// Sum of "Dominant Primes"
// https://www.codewars.com/kata/59ce11ea9f0cbc8a390000ed/train/javascript
// 6 kyu

// Description
/*
The prime number sequence starts with: 2,3,5,7,11. Notice that 2 is in position one.

3 occupies position two, which is a prime-numbered position. Similarly, 5 and 11 also occupy prime-numbered positions. We shall call primes such as 3,5,11 dominant primes because they occupy prime-numbered positions in the prime number sequence.

As you can see, for the prime range range(0,10), there are only two dominant primes (3 and 5), which occupy prime-numbered positions 2 and 3 in the prime number sequence, and the sum of these primes is: 3 + 5 = 8.

Given a range (a,b), what is the sum of dominant primes within that range? Note that a <= range <= b and b will not exceed 500000.
*/

// Function
const solve = (a,b) => {
    const isPrime = (n) => {
        if (n < 2) {return false}
        let max = Math.floor(Math.sqrt(n));
        for (let j=2; j<=max; j++) {
            if (n%j ===0) {
                return false;
            }
        }
        return true;
    }

    const getPrimes = (n) => {
        let primes = [];
        // return array of primes up to n (inclusive)
        for (let i=2; i<=n; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    }

    let primesArray = getPrimes(b)
    let sum = 0;
    for (let c = 0; c < primesArray.length; c++) {
        if ( primesArray.includes(c+1) && primesArray[c] >= a ) {
            sum += primesArray[c];
        } 
    }
    return sum;
}

// Export
module.exports = solve;

// Log test
// console.log( solve(4000,450000), 806250440 );