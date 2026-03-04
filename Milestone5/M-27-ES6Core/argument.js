// EXploring arguments
function nums(...numbers){
    // console.log('arguments :',arguments);
    console.log('arguments[0] :',arguments[0]);
    console.log('arguments length :',arguments.length);
    console.log(...arguments);
    console.log(numbers)
}
nums(1,2,3,4,5); // arguments is an array like object that contains all the arguments passed to the function, it is not an array but it has length property and we can access the elements using index. it is a local variable available inside the function. it is not available outside the function. it is not a real array but it is an array like object. it is not iterable but we can convert it to an array using Array.from() method or spread operator.