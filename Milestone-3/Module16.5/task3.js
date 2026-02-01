// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

var string = "";
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
for(var num of numbers)
{   
    string =string + num;
}
 console.log(string);

 
// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person';
const reverese = statement.split(" ")
reverese.reverse()
console .log(reverese)
const position = reverese.join(' ')
console .log( position)
