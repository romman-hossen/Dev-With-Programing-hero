// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Input:

// let myObject = {

// name: 'John Doe',
// age: 25,
// city: 'Example City',
// isStudent: true
// };

// Output:


// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true

};
for(let prop in myObject)
    {
        
    let type = myObject[prop]
    // console.log(key)
    // console.log('key :',prop,' | ','type:',typeof myObject[prop])
    console.log(`key: ${prop} | type: ${typeof type}`)
}

