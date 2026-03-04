// exploring closures
function global(){
    let a = 10;
    function inner(){
        console.log("I am tbge inner function",a); // this will work because inner function has access to the variables of its parent function global, this is called closure

    }
    return inner;
}
// const rtnFunction = global();
// console.log(global())
// rtnFunction()
// closures are used to create private variables and functions, they are also used in functional programming to create higher order functions and to implement currying and partial application.

function counter(name){
    let count = 0;
    function increment (){
        count++;
        console.log("I am counting ",name,count);
    }
    return increment;
}
const incrementCounter = counter();
incrementCounter();
incrementCounter();
incrementCounter();
const incrementCounter2 = counter("Romman");
incrementCounter2();
incrementCounter2 ();
incrementCounter2 ();
incrementCounter ();

const incrementCounter3 = counter("Roman2");
incrementCounter3();
incrementCounter3 ();
incrementCounter2();