// removeEveryOther
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
// 8 kyu

/* Description */
// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!

/* Function */
const removeEveryOther = (arr) => {
    let loc = 0;
    do {
        loc++;
        arr.splice(loc,1);
    }
    while (loc < arr.length);
    return arr;
}

/* Export */
module.exports = removeEveryOther;

/* Test cases */
console.log( removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep', 'Remove']) );