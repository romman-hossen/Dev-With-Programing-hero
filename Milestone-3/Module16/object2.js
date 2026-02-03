// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reversd = [];
for(let i = 0; i < colors.length; i++)
{
    reversd.unshift(colors)
    console.log(reversd)
}

