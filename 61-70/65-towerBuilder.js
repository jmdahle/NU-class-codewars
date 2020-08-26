// towerBuilder
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b
// 6 KYU

// Description
/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;

Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

// Function
const towerBuilder = (nFloors) => {
  return Array.from(Array(nFloors)).map( (v, i) => {
    return i < nFloors - 1 ? ' '.repeat(nFloors -1- i) + '*'.repeat(i*2+1) + ' '.repeat(nFloors -1 -i) : '*'.repeat(i*2+1)
  });
}

// Export
module.exports = towerBuilder;

// Log test
console.log ( towerBuilder(12),'');

