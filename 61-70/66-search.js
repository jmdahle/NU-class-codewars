// badSearch
// https://www.codewars.com/kata/52cd53948d673a6e6600057
// 6 KYU

// Description
/*
The function must return the sequence of titles that match the string passed as an argument.

TITLES is a preloaded sequence of strings.

TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
search('ock') --> ['Rocky 1', 'Rocky 2']
But the function return some weird result and skip some of the matching results.

Does the function have special movie taste?

Let's figure out !
*/

// Function
const search = (searchTerm) => {
    return TITLES.filter(title => title.toLowerCase().includes(searchTerm.toLowerCase()) );
  }

// Export
module.exports = search;

// Log test
const TITLES = ['How I Met Your Mother', 'Doctor Who', 'The Hobbit']
console.log ( search('ho'));
console.log ( search('HO'));

