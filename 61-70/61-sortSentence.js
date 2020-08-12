// sortSentence
// https://www.codewars.com/kata/52dffa05467ee54b93000712
// 6 KYU

// Description
/*
Given a standard english sentence passed in as a string, write a method that will return a sentence made up of the same words, but sorted by their first letter. However, the method of sorting has a twist to it:

All words that begin with a lower case letter should be at the beginning of the sorted sentence, and sorted in ascending order.
All words that begin with an upper case letter should come after that, and should be sorted in descending order.
If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. Any punctuation must be discarded.

Example
For example, given the input string "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!", your method should return "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut". Lower case letters are sorted a -> l -> l -> o -> o -> t and upper case letters are sorted V -> T -> O -> M -> L -> C.
*/

// Function
const sortSentence = (sentence) => {
    return sentence.replace(/[,.?!;()]/gi,'').split(' ').sort( (a,b) => {
        if ( a.charCodeAt(0) >=97 && a.charCodeAt(0) <= 122 ) {
            // a is a lower case character
            if ( b.charCodeAt(0) >= 97 && b.charCodeAt(0) <= 122 ) {
                if (a > b) {return 1} else {return -1}; 
            } else {
                // b is upper case, use a
                return -1;
            }
        } else {
            // a is an upper case character
            if ( b.charCodeAt(0) >= 65 && b.charCodeAt(0) <= 90 ) {
                if (b > a) {return 1} else {return -1}; 
            } else {
                // b is lower case, use b
                return 1;
            }
        }
    }).join(' ');
}

// Export
module.exports = sortSentence;

// Log test
// console.log ( sortSentence('alan zebra, Alan Zebra.'),);
// console.log ( sortSentence('Alan Zebra, alan zebra.'),'');

