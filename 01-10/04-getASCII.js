// getASCII
// https://www.codewars.com/kata/55acfc59c3c23d230f00006d
// 8 kyu

/* DESCRIPTION */
/*
Get ASCII value of a character.

For the ASCII table you can refer to http://www.asciitable.com/
*/

/* FUNCTION */
function getASCII(c) {
    return c.charCodeAt(0);
}

/* EXPORT */
module.exports = getASCII;

/* TEST CASES */
// console.log(getASCII('A'), 's/b 65');
// console.log(getASCII(' '), 's/b 32');
// console.log(getASCII('!'), 's/b 33');
