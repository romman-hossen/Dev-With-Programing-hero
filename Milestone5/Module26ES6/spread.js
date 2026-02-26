// Spread operator 
const numbers = Math.max(1, 56, 3, 4, 5); 
console.log(numbers);

const numArray = [1, 56, 3, 4, 5];
const maxNum = Math.max(...numArray);
console.log(...numArray); // this will work because the spread operator (...) allows us to pass the elements of the array as individual arguments to the Math.max() function
console.log(maxNum); // this will not work because Math.max() does not accept an array as an argument

// const nums1 = [1, 56, 3];
// const nums2 = [...nums1];
// console.log(nums2);
// const nums= (x,y, z) => x+y+z;
// console.log(nums(nums2));
const params = [1, 56, 3];
function nums(x,y,z) {
    console.log(...params);
    return  x + y + z;
  
}
console.log(nums(...params)); // this will work because the spread operator (...) allows us to pass the elements of the array as individual arguments to the nums() function
 const arr1 = [1, 56, 3];
 const arr2 =[...arr1];
 arr2.push(56);
 console.log(arr1); // this will work because arr2 is a reference to the same array as arr1
 console.log(arr2); // this will work because arr2 is a reference to the same array as arr1

 const object1 = {a: 1, b: 56, c: 3};
    const object2 = {...object1};
    object1.name = 'John';
    object2.age = 30;
    console.log(object1,object2); // this will work because object2 is a reference to the same object as object1


