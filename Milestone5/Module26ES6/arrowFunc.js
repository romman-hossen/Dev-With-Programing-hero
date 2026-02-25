// console.log(basicFunction(45,56));
function basicFunction(num1,num2){
    return num1 + num2;
}
// console.log(expression(45,676)) // expression function don't work when it console on up to the function
const expression = function(no1,no2){
    return no1 + no2;
}

//  arrow function 
const arrowFunction = x => x*x;
// console.log(arrowFunction(7));
const mul = (x,y) => x*y;
console.log(mul(5,6)); 

const isTrue = (a,b) => a % b === 0;
console.log(isTrue(10,5));

const cosole = () => 3.1416;
console.log(cosole());

const multipleSum = (r,t,y,u,k) => r+t+y+u+k;
console.log(multipleSum(4,56,67,4,56));


const multiUse = (x,y) => {
    const sum = x+y;
    const sub = x-y;
    const result = sum * sub;
    return result;
}
console.log(multiUse(5,6));

// use document 
document.getElementById('demo').eventListener('click',(event) => {

})




