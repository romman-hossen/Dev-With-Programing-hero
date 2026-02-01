// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let rev_num = [];
for(let i = colors.length-1; i >= 0; i--)
{
  const col =  colors[i];
  rev_num.push(col)
}
console.log(rev_num)

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]
const even= [];
const numbers = [12, 98, 5, 41, 23, 78, 46];
for(const num of numbers)
{
    // console.log(num)
    if(num % 2 === 0)
    {
        console.log(num)
        even.push(num)
       
    }
    else{
        continue;
    }
}
 console.log(even)

 



