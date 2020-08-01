// encryptThis
// https://www.codewars.com/kata/5848565e273af816fb000449
// 6 kyu

// Description
/*
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

// Fucntion
const encryptThis = (str) => {
    return str.split(' ').map(word => word.length === 1 ? word.charCodeAt(0) : word.length === 2 ? word.charCodeAt(0) + word[word.length -1] : word.charCodeAt(0) + word[word.length -1] + word.substring(2,word.length-1) + word[1]).join(' ');
}

// Export
module.exports = encryptThis;

// Log test
console.log ( encryptThis('A wise'), '65 119esi');