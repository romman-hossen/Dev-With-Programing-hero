const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
    { name: 'Walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]
function heighPrice(phones)
{
    let max = phones[0];
    for(const place of phones){
        if(place.price > max.price)
        {
            max = place;
        }

    }
    return max;
}
const height = heighPrice(phones)
console.log(height)