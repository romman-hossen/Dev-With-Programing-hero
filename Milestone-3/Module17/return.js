function double10X(num){
    const double = num * 10;
    return double;
}
// console.log(double10X(45))
double10X(30);
const tenX = double10X(60);
// console.log(tenX)

function double10X(num){
    return num * 10;
}
// console.log(double10X(60))

function oddNumber (number){
    console.log(number)
    if(number % 2 === 1)
    {
        return true;
    }
    // else{
    //     return false;
    // }
    return false; //Shortcut process

}
const isOddNumber = oddNumber(47)
console.log('The number is odd :',isOddNumber)

