const numbers = [1, 56, 3, 4, 5];;
for (const num of numbers) {

    console.log(num.length,numbers.length); // this will work because the for...of loop allows us to iterate over the elements of an array
}
const obj = {name: "John", age: 30, city: "New York"};
for(const key in obj){
    const keyvalue = obj[key]
    console.log(key ,':',keyvalue); // this will work because the for...in loop allows us to iterate over the properties of an object
}