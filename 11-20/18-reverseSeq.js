// reverseSeq
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// 8kyu

/* Description */
// Get the number n (n>0) to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

/* Function */
const reverseSeq = (n) => {
    let returnArray = [];
    for (let i = n; i >0 ; i--) {
        returnArray.push(i);
    }
    return returnArray;
}

/* Export */
module.exports = reverseSeq;

/* test cases  */
//console.log(reverseSeq(5));