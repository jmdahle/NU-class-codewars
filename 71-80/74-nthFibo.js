// nth Fibonacci
// https://www.codewars.com/kata/522551eee9abb932420004a0
// 6 KYU

// Description
/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.

For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/

// Function
const nthFibo = (n) => {
    const fibArray = [0,1];
    for (let i=2; i<n; i++) {
        fibArray.push(fibArray[i-2] + fibArray[i-1]);
    }
    return fibArray[n-1];
}

// Export
module.exports = nthFibo;

// Log test
// console.log ( nthFibo(15),377);

