// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming
function findLongest(string)
{
    const size = string.length;
    const strings = string.split(' ')
    let maxWord = '';//box 

    
    for(const word of strings)
    {
        // const len = word.length();  
         if(word.length > maxWord.length )// box er modde element reke compere kor 
         {
            maxWord = word;
            // console.log(maxWord)
         }
    }
    return maxWord;
}
const longest = findLongest("I am learning Programming to become a programmer");
console.log(longest);

// Task-5:
// Generate a random number between 10 to 20.
console.log(Math.random(10,20));


// for (var i = 0; i < 5; i++) {
//  	 setTimeout(function () {
//  	console.log(i);
//   }, 100);
// }
console.log(Math.pow(5,3))