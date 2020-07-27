// consecutiveStrings
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
// 6 kyu

// Descrtiption
/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/

// Function
const consecutiveStrings = (strarr, k) => {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return '';
    return strarr.slice(0,strarr.length - (k-1)).map( (item, index) => item + strarr.slice(index+1,index+k).join('')).reduce( (endval, currval) => currval.length > endval.length ? currval : endval);
}
// Export
module.exports = consecutiveStrings;

// Log test
// console.log(
//     consecutiveStrings(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 3),
//     'zoneaibigailtheta'
// );