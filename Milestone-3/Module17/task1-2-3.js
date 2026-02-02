// Task-1
// Take four parameters. Multiply the four numbers and then return the result
function multiply(num1,num2,num3,num4)
{
    const multi = num1*num2*num3*num4;
    console.log(multi)
    // return multi;
}
// const multiply4 = multiply(4,5,6,8);
multiply(4,5,6,8);
// console.log('multiply of 4 numbers :',multiply4)

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function oddEven(number)
{
    if(number % 2 === 1 )
    {
        const mul = number * 2;
        return mul;
    }
    else
    {
        const mul = number / 2;
        return mul;

    }
}
const result = oddEven(59);
// console.log(result);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function  make_avg(arrNum)
{
    const arrSize = arrNum.length;
    let sum = 0;
    for(const array of arrNum)
    {
         sum = sum + array;
    }
    const average = sum / arrSize;
    return average;
}
const totalAvg = make_avg([45,56,6,4,34]);
console.log(totalAvg);


