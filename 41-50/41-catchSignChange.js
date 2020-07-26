// catchSignChange
// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca
// 7 kyu

// Description
/*
Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

catchSignChange(arr) == 2;
*/

// Function
const catchSignChange = (arr) => {
    let countChanges = 0;
    if (arr.length>1) {
        for (let i = 1; i < arr.length; i++) {
            if (
                ((arr[i] < 0) && (arr[i-1]>=0)) ||
                ((arr[i] >= 0 && (arr[i-1]<0)))
                ) {
                    countChanges++
            }
        }
    }
    return countChanges;
}

// Export
module.exports = catchSignChange;

// Log tests
// console.log( catchSignChange([1,1,1]),0);
// console.log( catchSignChange([1,-1,-1]),1);
// console.log( catchSignChange([1,-1,1]),2);
// console.log( catchSignChange([-1,1,1]),1);
// console.log( catchSignChange([-1,0,1]),1);
// console.log( catchSignChange([-1,0,-1]),2);