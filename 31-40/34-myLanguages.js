// myLanguages
// https://www.codewars.com/kata/5b16490986b6d336c900007d
// 7 kyu

// Description
/*
Your task
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

Note: the scores will always be unique (so no duplicate values)

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

*/

// Fucntion
const myLanguages = (obj) => {
    return  Object.keys(obj).map(key => [key, obj[key]]).filter(pair => pair[1]>=60).sort( (a,b) => b[1]-a[1]).map(item => item[0]);
}

// Export
module.exports = myLanguages;

// Log test

let testObj = {"Java": 10, "Ruby": 80, "Python": 65}
console.log( myLanguages(testObj), ['Ruby','Python']);