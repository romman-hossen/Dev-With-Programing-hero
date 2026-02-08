function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}
function sub(num1,num2){
    const sub = num1 - num2;
    return sub;
}
function multiply(num1,num2){
    const mul = num1 * num2;
    return mul;
}
function div(num1,num2){
    const div = num1 / num2;
    return div;
}
function mod(num1,num2){
    const mod = num1 % num2;
    return mod;
}

function calculator(a,b,operation){
    if(operation == 'add')
    {
        const result = add(a,b);
        return result;
    }
    else if(operation == 'sub')
    {
        const result = sub(a,b);
        return result;
    }
    else if(operation == 'mul')
    {
        const result = multiply(a,b);
        return result;
    }
    else if(operation == 'div')
    {
        const result = div(a,b);
        return result;
    }
    else if(operation == 'mod')
    {
        const result = mod(a,b);
        return result;
    }
    else
    {
        return "Only 'add', 'sub', 'mul', 'div','mod' operation is allowed."

    }

}
const calc = calculator(10,60,'add');
console.log(calc);

const calc2 = calculator(100,25
    ,'div');
console.log(calc2);

const calc3 = calculator(25,3,'mod');
console.log(calc3);
