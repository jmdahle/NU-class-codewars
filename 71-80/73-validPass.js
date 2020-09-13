// validate password
// https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript
// 6 KYU

// Description
/*
I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.

Passwords must abide by the following requirements:

More than 3 characters but less than 20.

Must contain only alphanumeric characters.

Must contain letters and numbers.
*/

// Function
const validPass = (password) => {
    regex = /(?!^[0-9]+$)(?!^[a-zA-Z]+$)^([a-zA-Z0-9]{4,20})$/
    return regex.test(password) ? 'VALID' : 'INVALID';
}

// Export
module.exports = validPass;

// Log test
// console.log( validPass('1x3d'),'VALID');


