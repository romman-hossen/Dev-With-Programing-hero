// const products = [
//     { name: 'chiruni', price: 500},
//     { name: 'shampoo', price: 300},
//     { name: 'shirt', price: 700},
//     { name: 'pant', price: 1200},
// ]
// function sumObj(products){
//     let sum = 0;
//     for(const product of products)
//     {
//         sum = sum + product.price;
//     }
//     return sum;
// }
// const totalSum = sumObj(products);
// console.log(totalSum);
const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 },
]
function sumObj(products){
    let sum = 0;
    let total = 0;
    for(const product of products)
    {
        total = product.price * product.quantity;
        sum = sum + total;
    }
    return sum;
}
const totalSum = sumObj(products);
console.log(totalSum);
