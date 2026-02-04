// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
 
function temperature(Celsius)
{
    const fahrenheit = (Celsius * 1.8 )+ 32;
    return fahrenheit;
}
const celsius = 35;
const faren = temperature(celsius)
// console.log(celsius,' deg celsius to',faren,' deg fahrenheit')

// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0
function repeated(numbers,find)
{
    // let num = find;
    let count = 0;
     for(const num of numbers)
     {
        if(find == num )
        {
            count++;

        }
     }
     return count;
}
const numbers = [5,6,11,12,98, 5]
const find = 5;
const repet = repeated(numbers,find)
console.log(repet)
console.log(repeated(numbers,25))

// Task-3:
// Write a function to count the number of vowels in a string.
function vowel(str){
    let count = 0;
    for(const letter of str)
    {       
        if(letter.toLowerCase() === 'a' 
            || letter.toLowerCase() === 'e'
             || letter.toLowerCase() === 'i'
              || letter.toLowerCase() === 'o'
               || letter.toLowerCase() === 'u' )
        {
            count++;
        }
    }  
    return count;  
}
const str = vowel('romAanuU')
console.log(str)


