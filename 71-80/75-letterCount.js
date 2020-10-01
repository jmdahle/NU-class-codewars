// letterCount
// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/
// 6 KYU

// Description
/*
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

Example:

letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

*/

// Function
const letterCount = (str) => {
    let letterCounter = {}
    for (let i=0; i<str.length; i++) {
        if (letterCounter[str[i].toLowerCase()]) {
            letterCounter[str[i].toLowerCase()] += 1;
        } else {
            letterCounter[str[i].toLowerCase()] = 1
        }
    }    
    return letterCounter
}


// Export
module.exports = letterCount;

// Log test
console.log ( letterCount('subsidiary'),{s:2, u:1, b:1, i:2, d:1, a:1, r:1, y: 1});

