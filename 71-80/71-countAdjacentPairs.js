// Adjacent repeating words
// https://www.codewars.com/kata/5245a9138ca049e9a10007b8
// 6 KYU

// Description
/*
You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that *"the"* is doubled in the first sentence of this description?

As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like *"as"* at the beginning of the sentence.

Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other count as one.

Example:

"dog cat"                 --> 0
"dog DOG cat"             --> 1
"apple dog cat"           --> 0
"pineapple apple dog cat" --> 0
"apple     apple dog cat" --> 1
"apple dog apple dog cat" --> 0
"dog dog DOG dog dog dog" --> 1
"dog dog dog dog cat cat" --> 2
"cat cat dog dog cat cat" --> 3
*/

// Function
const countAdjacentPairs = (str) => {
    let count = 0;
    let last;
    let isNew = true;
    let arr = str.split(/[ ]+/);
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i].toLowerCase() === last) {
            if (isNew) {
                isNew = false;
                count++;
            }
        } else {
            last = arr[i].toLowerCase();
            isNew = true;
        }
    }
    return count;
}

// Export
module.exports = countAdjacentPairs;

// Log test
// console.log ( countAdjacentPairs("dog      dog dog dog cat cat banana cat banana"),2);

