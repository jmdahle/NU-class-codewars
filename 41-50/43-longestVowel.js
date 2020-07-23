// longestVowel
// https://www.codewars.com/kata/59c5f4e9d751df43cf000035
// 7 kyu

// Description
/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon
*/

// Function
const longestVowelSubstring = (str) => {
    let vowelCount = 0;
    let maxVowelCount = 0;
    const vowels = 'aeiou';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i]) ) {
            vowelCount ++;
        } else {
            if (vowelCount > maxVowelCount) {   
                maxVowelCount = vowelCount; 
            }
            vowelCount = 0;
        }
    }
    return maxVowelCount;
}

// Exports
module.exports = longestVowelSubstring;

// Log test
// console.log( longestVowelSubstring('codewarriors'),2)