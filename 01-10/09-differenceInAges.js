// differenceInAges
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2
// 8 kyu

/* Description */
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

/* Function */
const differenceInAges = (ages) => {
    // use spread operator and apply min function to get lowest age
    let minAge = Math.min(...ages);
    // user spread operator and apply max function to get highest age
    let maxAge = Math.max(...ages);
    // create an array with min, max, diff
    let ageArray = [minAge, maxAge, maxAge-minAge];
    // return the array
    return ageArray;
}


/* Export */
module.exports = differenceInAges;

/* test cases */
// console.log( differenceInAges([82, 15, 6, 38, 35]) );
// console.log( differenceInAges([57, 99, 14, 32]) );