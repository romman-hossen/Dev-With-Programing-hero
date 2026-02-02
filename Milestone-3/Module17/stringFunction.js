function stringNum(name){

    const size = name.length;
    console.log(name,size)
    if(size % 2 === 0)
    {
        console.log('even size')
        return true;
    }
    console.log('odd size')
    return false;
}
// console.log(stringNum('Romman'))
// stringNum('Roman')
function doublenum(num,isDouble)
{
    if(isDouble)
    {
        const result = num * 2;
        return result;

    }
    else{
        const result = num *3;
        return result;
    }
}
console.log(doublenum(39,true))