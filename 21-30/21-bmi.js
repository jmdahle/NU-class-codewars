// BMI
// https://www.codewars.com/kata/57a429e253ba3381850000fb
// 8 kyu

/* Description */
// Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

/* Function */
const bmi = (weight, height) => {
    let bmi = weight / Math.pow(height,2);
    return (bmi<=18.5) ? 'Underweight' : (bmi<=25) ? 'Normal' : (bmi<=30) ? 'Overweight' : 'Obese';
}
/* Export */
module.exports = bmi;
// /* Tests */
// console.log(bmi(80,1.8));