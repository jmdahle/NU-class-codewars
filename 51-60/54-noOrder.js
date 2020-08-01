// noOrder
// https://www.codewars.com/kata/5e9df3a0a758c80033cefca1
// 6 kyu

// Description
/* 
Imagine if there were no order of operations. Instead, you would do the problem from left to right. For example, the equation a+b∗c/da +b *c /da+b∗c/d would become (((a+b)∗c)//d)(((a+b)*c)//d)(((a+b)∗c)//d) (Math.floor(((a+b)*c)/d) in JS). Return None/null (depending on your language) if the equation is "".

Task:
Given an equation with a random amount of spaces greater than or equal to zero between each number and operation, return the result without order of operations. Note that if two numbers are spaces apart, act as if they were one number: 1 3 = 13. However, if given something % 0 or something / 0, return None/null.

More about order of operations: here

Key:
^ represents **
/ should always be rounded down(Math.floor) because the result will always be an integer
Operations allowed:
+, -, * , /, ^, %

Example:
no_order(2 + 3 - 4 * 1 ^ 3) returns 1

because:

  2 + 3 - 4 * 1 ^ 3
= 2 + 3 - 4 * 1 ^ 3
= 5 - 4 * 1 ^ 3
= 1 * 1 ^ 3
= 1 ^ 3
= 1
*/

// Function
const noOrder = (str) => {
    const calc = (a, b, op) => {
        if (op === '+') {return a + b}
        if (op === '-') {return a - b;}
        if (op === '/') {return b===0 ? null : Math.floor(a / b);}
        if (op === '*') {return a * b;}
        if (op === '%') {return b===0 ? null : a % b;}
        if (op === '^') {return Math.pow(a,b);}
    }
    str = str.replace(/\s/g, '');
    let index = 0;
    let returnValue= '';
    while ('0123456789'.includes(str[index])) {
        returnValue += str[index];
        index++;
    }
    returnValue = parseInt(returnValue)
    // repeat until through entire string
    while (index < str.length) {
        let operation = str[index];
        index++;
        let num = '';
        while ('0123456789'.includes(str[index])) {
            num += str[index];
            index++;
        }
        num = parseInt(num);
        returnValue = calc(returnValue, num, operation);
        if (returnValue === null) return null;
    }
    return returnValue;
}

// Export
module.exports = noOrder;

// Log test
// console.log( noOrder('2+3-4*1^3'), 6716);
