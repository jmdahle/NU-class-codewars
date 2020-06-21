// drawStairs
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/
// 8 kyu

/* Description */
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in "I\n I\n I", or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

/* Function */
const drawStairs = (n) => {
    let returnString = 'I'
    if (n > 1) {
        for (let i = 2; i <= n; i++) {
            returnString += '\n' + ' '.repeat(i-1) + 'I'
        }
    }
    return returnString;
}

/* Export */
module.exports = drawStairs;

/* Test */
console.log( drawStairs(1) );
console.log( drawStairs(3) );