/**
 * upto 100: ---> 100
 * more than 101-200: --> 90
 * more than 200: --> 70
*/
 function discount(product){
    if(product <= 100){
        const price = product * 100;
        return price;
    }
    else if(product <= 200){
        const price = product * 90;
        return price;
    }
    else{
        const price = product * 70;
        return price;
    }


    }
    // const price = discount(401);
    // console.log(price);

   // layerd discount 
  /**
 * first100 --> 100
 * 101To200 --> 90
 * above200 --> 70ffd
*/
function layeredDiscount(quantity)
{
    const first100Price = 100;
    const first200Price = 90;
    const first300Price = 70;
    if(quantity <= 100)
    {
        const price = quantity * first100Price;
        return price;

    }
    else if(quantity <= 200){
        const last100Price = 100 * first100Price;
        const remainQuantity = quantity - 100;
        const remainingTotal = remainQuantity * first200Price;
        const price = remainingTotal + last100Price;
        return price
    }
    else{
         const last100Price = 100 * first100Price;
         const last200Price = 100 * first200Price;
         const remainQuantity = quantity - 200;
         const remainingTotal = remainQuantity * first300Price;
         const price = last100Price + last200Price + remainingTotal;
         return price;
    }

}
const totalPrice = layeredDiscount(120);
console.log('total price =',totalPrice);

const totalPrice2 = layeredDiscount(220);
console.log('total price =',totalPrice2);