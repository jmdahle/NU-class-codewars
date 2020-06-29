// unique strings
// https://www.codewars.com/kata/5a262cfb8f27f217f700000b
// 7 kyu

/* Description */
// In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

// For example:

// solve("xyab","xzca") = "ybzc" 
// --The first string has 'yb' which is not in the second string. 
// --The second string has 'zc' which is not in the first string. 
// Notice also that you return the characters from the first string concatenated with those from the second string.

// More examples in the tests cases.

// Good luck!

// Please also try Simple remove duplicates

/* Function */
const solve = (a,b) => {
    c = a + b
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) !== -1) {
            // duplicate! remove it!!
            let re = new RegExp(a[i],"g");
            c = c.replace(re,'');
        }
    }
    return c;
}
/* Export */
module.exports = solve;
/* Test Cases */
//console.log( solvej('xyab','xzca'), 'ybzc');
