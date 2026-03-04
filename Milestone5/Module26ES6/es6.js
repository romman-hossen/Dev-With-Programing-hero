// data type on js 
//1.  primitive data type 
// 2.non-primitive data type 
// primitive data type  ..Copy by value
let x = 10;
x = "ten";
x = true;
x = null;
x = undefined;
// x = Symbol("id");
x = BigInt(9007199254740991);
x = (" "+ 10 ); 
x = (" "- 10);
x= {}
console.log(typeof x);

// non-primitive data type ..Copy by reference
let arr = [1, 2, 3];
let arr2 = arr;
delete arr2[0]
arr.push(4);
console.log(arr,arr2); // true

// undefined  vs null
let array;
console.log(array); // undefined
let obj = { name: "John", age: null };
console.log(obj.address); // undefined
console.log(obj.age); // null