// Formula: \(\text{BMI} = \text{weight in kilograms (kg)} / \text{height in meters (m)}^2\)
let weight =process.argv[2]; // weight in kilograms
let height =process.argv[3]; // height in meters

const bmi =Math.floor(weight / (height * height));
console.log(`Your BMI is: ${bmi}`);