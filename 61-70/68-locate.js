// locate in multidimensional array
// https://www.codewars.com/kata/52840d2b27e9c932ff0016ae
// 6 KYU

// Description
/*
Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

Example:

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false
*/

// Function
const locate = (arr,searchItem) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) {
            locate(arr[i])
        } else {
            if (arr[i] === searchItem) {
                return true;
            }    
        }
    }
    return false;
}

// Export
module.exports = locate;

// Log test
console.log ( locate(['a','b',['c','d',['e']]]),'a');
console.log ( locate(['a','b',['c','d',['e']]]),'e');
console.log ( locate(['a','b',['c','d',['e']]]),'f');
