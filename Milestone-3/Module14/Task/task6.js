/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
 const age = 20 ;
 let tickerPrice = 800 ;
 let price,totalDiscount;


 if(age < 10)
 {
    totalDiscount = "You got free";
    price = 0;
    // console.log('free')
 }
 else if(age >= 10 && age < 26)
 {
    // console.log('You got 50% discount')
    var discount = tickerPrice * 50 / 100;
    totalDiscount ='You got 50% discount';
    price = tickerPrice - discount;
    // console.log(totalAmount)
 }
 else if(age >= 60){
    // console.log('You got 15% discount')
    var discount = tickerPrice * 15 / 100;
    totalDiscount ='You got 15% discount';
    price = tickerPrice - discount;
    // console.log(totalAmount)
 }
 else{
    totalDiscount =' No discount';
    price = tickerPrice;
    // console.log(tickerPrice)
 }
 console.log(totalDiscount)
 console.log(price,'tk')

 