/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
const weight = 56;
const height = 167.50/100;
console.log(parseFloat(height.toFixed(2)))
let myBmi = weight / (height*2);
console.log(parseFloat(myBmi.toFixed(3)))
if(myBmi < 18.5)
{
    console.log("you are underweight.")
}
else if(myBmi >= 18.5 && myBmi <= 24.9)
{
    console.log('you are normal.')
}
else if(myBmi >= 25 && myBmi <= 29.9)
{
    console.log('you are overweight.')
}
else{
    console.log('you are obese.')
}
