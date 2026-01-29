/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

let sum = 0;
for(let i = 91; i <= 129; i++)
{
    if(i % 2 !== 0)
    {
        let previousSum = sum;
        sum += i;
        console.log(i)
        console.log(i ,'+', previousSum,' :',sum)
    }
    
}
console.log('Total sum of all the odd numbers from 91 to 129 is =',sum,'\n\n');
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
let total = 0;
for(let i = 51; i <= 85; i++)
{
    if(i % 2 === 0)
    {
        let previousSum = total;
        total += i;
        // console.log(i)
        console.log(i ,'+', previousSum,' :',total)
    }
    
}
console.log('Total sum of all the even numbers from 51 to 85 is =',total,'\n\n');



