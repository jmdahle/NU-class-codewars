// Reverse Fizz Buzz
// https://www.codewars.com/kata/5a622f5f85bef7a9e90009e2
// 6 KYU

// Description
/*
FizzBuzz is often one of the first programming puzzle people learn. Now undo it with reverse FizzBuzz!

Write a function that accepts a string, which will always be a valid section of FizzBuzz. Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.

Notes:

If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
All numbers in the sequence will be greater than zero.
You will never receive an empty sequence.
Examples
reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]
*/

// Function
const reverseFizzBuzz = (s) => {
    let returnArray = [];
    let arr = s.split(' ');
    arr.forEach( (v, i) => {
        if (v === 'Fizz' || v === 'Buzz' || v === 'FizzBuzz') {
            if (i===0) {
                if (arr.length === 1) {
                    if (v === 'Fizz') { 
                        returnArray.push(3);
                    }
                    if (v === 'Buzz') { 
                        returnArray.push(5);
                    }
                    if (v === 'FizzBuzz') { 
                        returnArray.push(15);
                    }
                } else {
                    // find the next number
                    for (let c = 1; c < arr.length; c++) {
                        if(arr[i+c] === 'Fizz' || arr[i+c] === 'Buzz' || arr[i+c] === 'FizzBuzz') {
                            // if a word, that's two consecutive at the beginning!
                            // if it's not at the end, the next one MUST be a number... so we can continue
                            // but if it's at the end, then it must be FIZZ BUZZ or BUZZ FIZZ
                            // and the earliest occurrence of those ar 9,10 and 5,6 respectively
                            if (v === 'Fizz' && arr.length === 2) {
                                returnArray.push(9);
                                break;
                            } else if (v === 'Buzz' && arr.length === 2) {
                                returnArray.push(5);
                                break;
                            }
                        } else {
                            returnArray.push(parseInt(arr[i+c])-c);
                            break;
                        }
                    }
                }
            } else {
                returnArray.push(parseInt(returnArray[i-1])+1);
            }
        } else {
            returnArray.push(parseInt(v));
        }
    });
    return returnArray;
}

// Export
module.exports = reverseFizzBuzz;

// Log test
// console.log ( reverseFizzBuzz("Fizz 688 689 FizzBuzz"),'');

