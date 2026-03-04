// pass byy value
function multiply(a,b){
    a = a - 5;
    b = b - 10;
    return a * b;
}
let x = 10;
let y = 20;

console.log('before calling multiply :',x,y); 
const result = multiply(x,y);
console.log('after calling multiply :',x,y);
console.log('result of multiply :',result);
// console.log(muliply(x,y)); 

// pass by reference
function firstSum(num1 ,num2){
    num1[0] = 388;
    num2[0] = 400;
    const first = num1[0];
    const second = num2[0];
    return first + second;

}
let arr1 = [10,20,30];
let arr2 = [40,50,60];
console.log('before calling firstSum :',arr1,arr2);
const sumResult = firstSum(arr1,arr2); //value of arr1 and arr2 will be changed because they are passed by reference, they are passed as reference to the function, so when we change the value of num1 and num2 inside the function, it will change the value of arr1 and arr2 outside the function as well.
console.log('after calling firstSum :',arr1,arr2);
console.log('result of firstSum :',sumResult);

const person = {
    name : "Romman",
    age : 30
}
let nam = "sonamuni";
console.log('before changing name :',nam);
 nam =person.name ;
console.log('after changing name :',nam);




