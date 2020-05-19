// Array plus array
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
// 8 KYU

/* Description */
/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

/* Function */
//without comments
arrayPlusArray = (arr1, arr2) => {
    return (
        arr1.reduce( (a,b) => {return a+b} ) + 
        arr2.reduce( (a,b) => {return a+b} )
    );
}

/*
arrayPlusArray = (arr1, arr2) => {
    // reduce first array to a single number
    let sum1 = arr1.reduce( (a,b) => {return a+b} );
    // reduce second array to a single number
    let sum2 = arr2.reduce( (a,b) => {return a+b} );
    // return the sum
    return sum1 + sum2;
}
*/

/* Export */
module.exports = arrayPlusArray;

/* Tests */
//console.log( arrayPlusArray([1,2,3],[4,5,6]) );
