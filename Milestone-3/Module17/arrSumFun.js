// // 
// function sumArray(num)
// {
//     console.log(num);
// }

// let dd = 455;
// let nums = sumArray(dd);

// console.log(nums)

function sumArray(numbers)
{
    let sum = 0;
    for(const num of numbers)
    {
        sum += num;
        console.log(num)
    }
    return sum;

}
const number = [4,5,6,3,];
const nums = sumArray(number)
console.log('total sumArray of sum :',nums);