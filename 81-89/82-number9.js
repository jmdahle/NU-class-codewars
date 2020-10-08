// number9
// https://www.codewars.com/kata/55143152820d22cdf00001bb
// 5 KYU

// Description
/*
It's 9 time!

I want to count from 1 to n. How many times will I use a '9'?

9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

Note: n will always be a postive integer.

number9(8) //should return 0
number9(9) //should return 1
number9(10) //should return 1
number9(98) //should return 18
number9(100) //should return 20
*/

// Function
const number9 = (n) => {
    const power = parseInt(Math.log10(n)); // numnber of decimal places in n
    const numCount = (power+1)*Math.pow(10,power);  // total number of any non-0 digits in all numbers with up to "power" decimal places (e.g., for "3", from 0 to 999)
    // count the number of 9s in each number from n up to (10^power+1)-1
    let extras = 0;
    for (let i = n+1; i < Math.pow(10,power+1); i++) {
        if (i.toString().match(/9/g)) {
            extras += i.toString().match(/9/g).length
        }
    }
    // subtract the extras
    return numCount - extras;
}

// Export
module.exports = number9;

// Log test

// console.log ( 8,number9(8),0);
// console.log ( 9, number9(9),1);
// console.log ( 10,number9(10),1);
// console.log ( 98, number9(98),18);
// console.log ( 100, number9(100),20);
// console.log ( 200, number9(200),40);
// console.log ( 999, number9(999),300);
// console.log ( 7999,number9(7999),2400);
// console.log ( 8000, number9(8000),2400);
// console.log ( 8999, number9(8999),2700);
// console.log ( 9000, number9(9000),2701);
// console.log ( 9999, number9(9999),4000);
// console.log ( 565754, number9(565754),275645);
