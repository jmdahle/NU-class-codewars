// play with 2 strings
// https://www.codewars.com/kata/56c30ad8585d9ab99b000c54
// 5 KYU

// Description
/*
Your task is to Combine two Strings. But consider the rule...

By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks, only two input strings and as result one output string;-)...

And here's the rule:
Input Strings a and b: For every character in string a swap the casing of every occurrence of the same character in string b. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of a followed by the changed version of b. A char of a is in b regardless if it's in upper or lower case - see the testcases too.
I think that's all;-)...

Some easy examples:

Input: "abc" and "cde"      => Output: "abCCde" 
Input: "ab" and "aba"       => Output: "aBABA"
Input: "abab" and "bababa"  => Output: "ABABbababa"
Once again for the last example - description from KenKamau, see discourse;-):

a) swap the case of characters in string b for every occurrence of that character in string a
char 'a' occurs twice in string a, so we swap all 'a' in string b twice. This means we start with "bababa" then "bAbAbA" => "bababa"
char 'b' occurs twice in string a and so string b moves as follows: start with "bababa" then "BaBaBa" => "bababa"

b) then, swap the case of characters in string a for every occurrence in string b
char 'a' occurs 3 times in string b. So string a swaps cases as follows: start with "abab" then => "AbAb" => "abab" => "AbAb"
char 'b' occurs 3 times in string b. So string a swaps as follow: start with "AbAb" then => "ABAB" => "AbAb" => "ABAB".

c) merge new strings a and b
return "ABABbababa"
*/

// Function
const workOnStrings = (a,b) => {
    const switchCase = (str) => {
        return str.toUpperCase() === str ? str.toLowerCase() : str.toUpperCase();
    }

    const frequencyCount = (str) => {
        let frequencyCounter = {}
        for (let i=0; i<str.length; i++) {
            if (frequencyCounter[str[i].toLowerCase()]) {
                frequencyCounter[str[i].toLowerCase()] += 1;
            } else {
                frequencyCounter[str[i].toLowerCase()] = 1
            }
        }    
        return frequencyCounter
    }

    const updateString = (freqCounter, stringToUpdate) => {
        let returnString = stringToUpdate;
        for (let i=0; i<Object.keys(freqCounter).length; i++) {
            // if the letter occurs an odd # of times, the corresponding items in string switches cases
            let letter = Object.keys(freqCounter)[i];
            if ( freqCounter[letter]%2 !==0 ) {
                // console.log(letter, stringToUpdate);
                // change the case of each letter occurence in string
                returnString = returnString.split("").map( item => item.toLowerCase() === letter ? switchCase(item) : item).join("");
            }
        }
        return returnString;    
    }

    let freqA = frequencyCount(a);
    let freqB = frequencyCount(b);
    // console.log(freqA, freqB);

    let returnB = updateString(freqA, b);
    // console.log(b, returnB);
    let returnA = updateString(freqB, a);
    // console.log(a, returnA);

    return returnA + returnB;
}

// Export
module.exports = workOnStrings;

// Log test
// console.log ( workOnStrings("abab", "bababa"),"ABABbababa"); //skips changes for evens; makes changes for odds
// console.log ( workOnStrings("ABAB", "bababa"),"ababbababa"); // ingores case for matching




