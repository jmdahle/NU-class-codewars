// ISBN Validation
// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001
// 5 KYU

// Description
/*
ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9. The last digit can be either on the range 0 to 9 or the letter 'X' used to indicate a value of 10.

For an ISBN-10 to be valid, the sum of the digits multiplied by their position has to equal zero modulo 11. For example, the ISBN-10: 1112223339 is valid because:

(((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
Complete the validISBN10() function.

validISBN10('1112223339') ; should return true
validISBN10('1234554321') ; should return true
validISBN10('1234512345') ; should return false
*/

// Function
const validISBN10 = (isbn) => {
    if (isbn.match(/^\d{9}(\d|X)$/)) {
        return isbn.split("").reduce( (tot, cur, idx) => {
            return tot += (cur === "X" ? 10 : parseInt(cur)) * (idx + 1);
        },0) % 11 === 0;
    } else return false
}

// Export
module.exports = validISBN10;

// Log test
// const sampleTests = [
//     ["1112223339", true ],
//     ["048665088X", true ],
//     ["1293000000", true ],
//     ["1234554321", true ],
//     ["1234512345", false],
//     ["1293"      , false],
//     ["X123456788", false],
//     ["ABCDEFGHIJ", false],
//     ["XXXXXXXXXX", false]
// ]
// for (let i=0; i<sampleTests.length; i++) {
//     console.log(sampleTests[i][0], validISBN10(sampleTests[i][0]), sampleTests[i][1]);
// }
//console.log ( validISBN10(),'');

