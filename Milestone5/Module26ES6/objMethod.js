const obj = {name: "John", age: 30, city: "New York"};
const prop = Object.keys(obj); // show the property of object 
// console.log(prop); 
// this will work because Object.keys() returns an array of the object's own enumerable property names

const values = Object.values(obj); // shows the value of object 
// console.log(values);

const enter = Object.entries(obj) // event prop and value is separated  by an array
// console.log(enter);

// delete seal freeze
const personality ={movement: "fast", color: "black", size: "medium"};
// Object.freeze(personality); //kono object ke  freeze korar por r kisu change kora jai nah 
Object.seal(personality)
delete personality.movement;
delete personality.size
personality.color = "white";
personality.favorite = "banana";
console.log(personality);



