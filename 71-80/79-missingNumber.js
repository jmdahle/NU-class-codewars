// Simple number sequence
// https://www.codewars.com/kata/5a28cf591f7f7019a80000de
// 5 KYU

// Description
/*
In this Kata, you will be given a string of numbers in sequence and your task will be to return the missing number. If there is no number missing or there is an error in the sequence, return -1.

For example:

missing("123567") = 4 
missing("899091939495") = 92
missing("9899101102") = 100
missing("599600601602") = -1 -- no number missing
missing("8990919395") = -1 -- error in sequence. Both 92 and 94 missing.
The sequence will always be in ascending order.
*/

// Function
const missingNumber = (str) => {
    const firstNumber = (str) => {
        for (let numDigits = Math.floor(str.length/2)-1; numDigits > -1; numDigits--) {
            let initNumber = parseInt(str.substr(0,numDigits));
            // does the number have a leading 0?  If so, we need to skip to next # number of digits
            if (initNumber.toString().length === numDigits) {
                // what is the next number?
                let nextNumber = initNumber + 1;
                if ( 
                    (nextNumber === parseInt(str.substr(numDigits,nextNumber.toString().length))) ||
                    (nextNumber + 1 === parseInt(str.substr(numDigits,nextNumber.toString().length)))
                ) {
                    return initNumber;
                }
            }
            
        }
    }

    let currentNumber = firstNumber(str);
    // console.log (currentNumber);
    let missingNumber = -1;
    let pointer = 0;
    let currentNumberDigits = currentNumber.toString().length;

    while (pointer+currentNumber.toString().length < str.length-1) {
        // is next number 1 greater than current number?
        if (currentNumber + 1 === parseInt(str.substr(pointer+(currentNumberDigits),(currentNumber+1).toString().length))) {
            // yes? move the pointer to the next number, change the current number to the next number and repeat
            // console.log(`Found ${currentNumber+1} at position ${pointer+(currentNumberDigits)}`);
            pointer += currentNumberDigits;
            currentNumber++
            currentNumberDigits = currentNumber.toString().length;

        } else {
            // no? Is there a missing number already?
            // console.log(`Missing number ${currentNumber + 1} at position ${pointer + currentNumberDigits} with length ${(currentNumber+1).toString().length}.`)
            // console.log(`Instead I found ${parseInt(str.substr(pointer+(currentNumber.toString().length),(currentNumber+1).toString().length))}.`)

            if (missingNumber === -1) {
                // no? make NEXT the missing number, make next the CURRENt number (dont move pointer) and continue
                missingNumber = currentNumber + 1;
                currentNumber++;
            } else {
                // yes? 2 missing numbers is a fail.  return -1
                return -1
            }
        }
    }
    // return the missing number
    return missingNumber;

}

// Export
module.exports = missingNumber;

// Log test
// console.log ( missingNumber("123567"),4);
// console.log ( missingNumber("134567"),2);
// console.log ( missingNumber("899091939495"),92);
// console.log ( missingNumber("9899101102"),100);
// console.log ( missingNumber("599600601602"),-1);
// console.log ( missingNumber("8990919395"),-1);
// console.log ( missingNumber("01234678910111213"),5);
