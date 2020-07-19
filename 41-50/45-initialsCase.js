// Initials
// https://www.codewars.com/kata/55968ab32cf633c3f8000008
// 7 kyu

// Description
/*
Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

Similar to those kinda names we need to initialize the names.

See the pattern below:

initials('code wars') => returns C.Wars 
initials('Barack Hussain obama') => returns B.H.Obama 
Complete the function initials.
*/

// Function
const initialCase = (str) => {
    return str.split(' ').map( (itm, idx) => {
        if (idx === str.split(' ').length - 1) {
            return itm.charAt(0).toUpperCase() + itm.slice(1);
        } else { 
            return itm.charAt(0).toUpperCase()
        }
    }).join('.');
}

// Export
module.exports = initialCase;

// Log 
// console.log( initialCase('Barrack Hussein Obama'), 'B.H.Obama' );