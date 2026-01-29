/* Display sum of all the odd numbers from 81 to 131.
 */

let firstNum = 81 ;
let lastNum =  131;
let sum = 0;
while(firstNum <= lastNum)
{
    if (firstNum % 2 !== 0) 
        {
        sum = sum +firstNum;
        console.log(sum);     
        }
    firstNum ++;
}
console.log ('Total sum of odd number from 81 to 131 is :',sum,'\n\n')

/*Display sum of all the even numbers from 206 to 311.*/
let start = 206;
let end = 311 ;
let total = 0;
while(start <= end)
{
    if(start % 2 === 0)
    {
        total += start;
        console.log(start,'+',start+2,' is :',total);
    }
    start++;
}
console.log('Display sum of all the even numbers from 206 to 311 is :',total);

