// abbrevName
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
// 8 kyu

/* Description */
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

/* Function */
const abbrevName = (name) => {
 return name[0].toUpperCase() + '.' + name[name.indexOf(' ')+1].toUpperCase()
}

/* Export */
module.exports = abbrevName;

/* Test cases */
// console.log (abbrevName('Sam Harris'), 's/b', 'S.H');
// console.log (abbrevName('Patrick Feenan'), 's/b', 'P.F');
// console.log (abbrevName('Evan Cole'), 's/b', 'E.C');
// console.log (abbrevName('David Mendieta'), 's/b', 'D.M');
// console.log (abbrevName('John Dahle'), 's/b', 'J.D');
