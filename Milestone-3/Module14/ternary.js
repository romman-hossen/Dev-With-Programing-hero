/****Syntax  condition ? expression1 :expression2; ***/
// const age =17;
// const leader =false;
// age>=18 ? console.log ("give me vote"):console.log("boro hou babu age");
// console.log(age)

// age >= 18 ? leader ? 
// console.log(1)
//  : console.log(2) 
//   : console.log('you are out');

// if(age >= 18){
//     if(!leader){
//         console.log('Boss sob free')
//     }
//     else{
//         console.log('50% off bro')
//     }
// }
// else{
//     console.log('Tor jonno 200tk extra')
// }

/*  */
let price = 100;
const isLeader = false;
// if(isLeader === true)
// {
//     price=0;
//     console.log('Apnar jonno free boss')
// }
// else{
//     price += 100;
//     console.log('100 taka extra dite hobe!!!')
// }

// price = isLeader === true ? price = 0 : price += 100;
// console.log('your price is = ',price)

/**nested  ternary */

price = isLeader === true ?
         price > 1000 ? 
          price = price*50/100 :
           price = 0 :
            price += 500;

console.log (price);

// if(isLeader){
//     if(price > 1000)
//     {
//         price = price*50/100;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price = price+500;
// }
// console.log(price)
