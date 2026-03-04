const numbers = [1, 2, 3, 4, 5];
// let doubleIt = [];
//  for(const num of numbers){
//     doubleIt.push(num * 2);
//  }
const doubleIt = num => num * 2;
const doubled = numbers.map(doubleIt)
// const doubleIt = numbers.map(num => num *2); // map is a higher order function that takes a callback function as an argument and returns a new array with the results of calling the callback function on each element of the original array. it does not modify the original array. it is a pure function. it is a non mutating method. it is a chainable method. it is a lazy method. it is a functional programming method. it is a declarative method. it is a more concise way to write the same code as above.
console.log(doubled);

const squared = numbers.map(num => num * num); 
console.log(squared)

const friends = [" ", "Tumpa", "Romman", "Sajib", "Sakib"];
const first = friends.map(friend => friend.slice(1,3))
console.log(first);

const phones =[
    {name : "samsung", price : 20000},
    {name : "iphone", price : 100000},
    {name : "xiaomi", price : 15000},
]

const changePrice = phones.map(phone => phone.price*2);
console.log(changePrice);

const names = phones.map((phibe,index,fullaray) =>{
    const capName = phibe.name.toUpperCase();
    // console.log(count);
    console.log(index,capName,fullaray);
})

