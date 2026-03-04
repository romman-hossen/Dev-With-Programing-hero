// loop operation 
// const arr = [45,46,34,87,67, 98]
// const maps = arr.map(item => {
//     return item * 2;


// })
const arr = [45,46,34,87,67, 98]
const maps = arr.map( item => item*2)
console.log(maps);

const arrow = (number) => {
    console.log(number)
    return number * 2;
}
const numbs = arrow(...arr)
// arrow(arr)
console.log(numbs)

// let division = {
//         name : 'Dhaka',
//         population : 20000000,
//         Bazar : {
//             name : 'New Market',
        
//        }   
//  }
let users = [
  { id: 1, name: "Rahul", age: 22 },
  { id: 2, name: "Aman", age: 25 },
  { id: 3, name: "Priya", age: 20 }
];
//  let  FilterMethod = users.filter(elem => elem.age > 20 );
//  console.log(FilterMethod);

 let findMethod = users.find(elem => elem.age > 20);
 console.log(findMethod);
 

 