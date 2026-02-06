function shopingCal(shirt,pant,shoe){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const totalShirt = shirtPrice * shirt;
    const totalPant = pantPrice * pant;
    const totalShoe = shoePrice * shoe;

    const totalPrice = totalShirt + totalPant + totalShoe;
    return totalPrice;

}
const totalPrice = shopingCal(5,6,7);
console.log(totalPrice)