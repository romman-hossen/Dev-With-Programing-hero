/* exploring how  to work discount on program using  simple condition  */
const price = 400;
// const discount = 0;
// const totalAmount = 0;
if (price >= 5000){
    console.log('You got discount our product 10%')
    const discount = price*10 / 100;
    const totalAmount = price -discount;
    console.log ('total mony discount :',discount)
    console.log('total price :', totalAmount);
}
else if(price >= 2500){
    console.log('You got discount our product 5%')
    const discount = price*5 / 100;
    const totalAmount = price -discount;
    console.log ('total mony discount :',discount)
    console.log('total price :', totalAmount);
}
else if(price >= 1000){
    console.log('You got discount our product 2%')
    const discount = price*2 / 100;
    const totalAmount = price -discount;
    console.log ('total mony discount :',discount)
    console.log('total price :', totalAmount);
}
else if(price >=500){
     console.log('Sorry vhai tui kono discount pabi na ja toke akta candy dilam')
}
else{
    console.log('Fokira sala tui kisu pabi nah !! r o bazar kor') 
}

