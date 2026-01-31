// Task-4
// Count the number of properties.
// Input: 
//let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// Output:
// 4
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
// student.keys()
let count = 0;
for(let prop in student)
{
    count++;

    // console.log(prop)
}
console.log(count)

