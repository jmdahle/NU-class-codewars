// ATM
// https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript
// 7 kyu

// Description 
/*
There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.
*/

// Function
const ATM = (n) => {
    let bills = [500, 200, 100, 50, 20, 10];
    let count = 0;
    for (let i=0; i<bills.length; i++) {
        let numBills = Math.floor(n/bills[i]);
        count += numBills;
        n -= numBills * bills[i];
    }
    return n > 0 ? -1 : count;
}

// Export
module.exports = ATM;

// Log test
// console.log( ATM(885), 6);