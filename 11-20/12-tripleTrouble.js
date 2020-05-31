// tripleTrouble
// https://www.codewars.com/kata/5704aea738428f4d30000914/
// 8 kyu

/* Description */
// Triple Trouble
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

/* Function */
const tripleTrouble = (one, two, three) => {
    // assuming one, two, and three are of equal length...
    let resultString = '';
    for (let i = 0; i < one.length; i++) {
        resultString += one[i].toString() + two[i].toString() + three[i].toString();
    }
    return resultString;
}

/* Exports */
module.exports = tripleTrouble;

/* test cases */
// console.log(tripleTrouble("this","test","lock"), "ttlheoiscstk");
// console.log(tripleTrouble("aa","bb","cc"), "abcabc");
// console.log(tripleTrouble("Bm", "aa", "tn"), "Batman");
// console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");