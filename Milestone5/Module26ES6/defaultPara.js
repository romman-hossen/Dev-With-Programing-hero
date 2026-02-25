function add (a, b ){
    const sum = a + b;
    console.log(a,b,sum) 
}
function add (a, b = 0){
    const sum = a + b;
    console.log(a,b,sum)
}
add(56); //it returns 56 undefined NaN

add(56); //it returns 56 0 56 initial e jodi keo man na dei tahole default hisebe 0 nibe r jodi man nei tahole sei man sohokare jog korbe .
add(56,78) ; // js is asynchronous  thats why it runs character by character

// for string default 
function fullname (firstName , lastName){
    const fullName = firstName + " " + lastName;
    console.log(fullName)
}
fullname ('Romman',) // retuns undifined 
function fullname (firstName , lastName = ""){
    const fullName = firstName + " " + lastName;
    console.log(firstName,lastName,fullName)
}
fullname ('Romman') // Retund name if we dont get lastName 
fullname ('Romman','hossen')

function mul(num1 , num2 = 1){
    const  mul  = num1 * num2;
    console.log(num1,num2, mul)
}
mul(4,45);

// default  value on apply array parameter[],object parameter{} etc  


