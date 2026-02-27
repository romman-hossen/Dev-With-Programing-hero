let pi = Math.PI;  //global scope variable
// console.log(pi);
function scopeTest(pi) {
    const piAdd = 456 + pi; // local scope variable
    let data = 565;
    console.log(pi); 
    innerFunction(data)
    console.log(addNumber(23,54)); // this will work because addNumber is defined in the global scope and can be accessed from within the function scopeTest
    
    function innerFunction(value) {
        let x = 56;  //lexical scope variable
        console.log(value); // this will work because innerFunction has access to the variables of its parent function scopeTest
    }
    // console .log(x); // this will throw an error because x is not defined in the scope of the function scopeTest, it is only defined within the scope of the function innerFunction.
    return piAdd;

}
console.log(scopeTest(pi));
// console.log(piAdd); // this will throw an error because piAdd is not defined in the global scope, it is only defined within the scope of the function scopeTest.
// innerFunction(data); // this will throw an error because innerFunction is not defined in the global scope, it is only defined within the scope of the function scopeTest.
function addNumber(a,b){
    // let x = 65;
    // let y  = 45;
    // y = a;
    // x = b;
    // addNumber(545,4545);
    return a + b;
}

// console.log(x);
let  x = 56; // this will throw an error because x is not defined before it is used, due to the temporal dead zone of let and const declarations.

// values(); // this will throw an error because values is not defined before it is used, due to the temporal dead zone of function expressions.
//in expression function this will have same problem as above TDZ temporal dead zone 
const values = function(){
    console.log("This is an expression function");
}
values();