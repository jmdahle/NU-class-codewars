// calculate
// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/
// 7 kyu

// Description 
/*
Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character. If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers. If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).

calculate(2,"+", 4); //Should return 6
calculate(6,"-", 1.5); //Should return 4.5
calculate(-4,"*", 8); //Should return -32
calculate(49,"/", -7); //Should return -7
calculate(8,"m", 2); //Should return null
calculate(4,"/",0) //should return null
Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#)/(None in Python).
*/

// Function
const calculate = (num1, operation, num2) => {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if ('+-*/'.includes(operation) && !(operation==='/' && num2 === 0)) {
        return operation === '+' ? num1 + num2 : operation === '-' ? num1 - num2 : operation === '*' ? num1 * num2 : num1 / num2;
    } else {
         return null
    }

}
// Export
module.exports = calculate;

// Log test
// console.log( calculate(2,'+',4), 6);
// console.log( calculate(2,'*',4), 8);
// console.log( calculate(2,'-',4), -2);
// console.log( calculate(2,'/',4), 0.5);
// console.log( calculate(2,'m',4), null);
// console.log( calculate(2,'/',0), null);