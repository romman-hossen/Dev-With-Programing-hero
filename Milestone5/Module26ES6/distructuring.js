const {name , age ,city,work = "devloper"} ={
    name: "John",
    age: 30,
    city: "New York"
    
}
// console.log(name.toLowerCase()); // this will work because the destructuring assignment allows us to extract values from an object and assign them to variables
console.log(work); 

const furits = ["apple", "banana", "orange"];
furits.push("grape")

const [furit1, furit2, furit3,furit4 = "Pineapple"] = furits;

console.log(furit4); // this will work because the destructuring assignment allows us to extract values from an array and assign them to variables

// swaping variables using destructuring assignment
let a = 34;
let b = 56;
 [a,b] = [b,a];
console.log(a,b);

const nums = [1,4,5,67,8];
const [num1,num2,...rest] = nums;
console.log(num1,num2,...rest); // this will work because the destructuring assignment allows us to extract values from an array and assign them to variables, and the rest operator (...) allows us to collect the remaining elements of the array into a new array