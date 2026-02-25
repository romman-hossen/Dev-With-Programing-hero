//  Exploring template Literals 
let bfName = 'leora';
let gfName = 'tumpa';
console.log(`${bfName} + ${gfName}`);

// const aboutMe = "tyuuir 
// rjhdfdjhfd
// dfjdfhdfd 
// dfdkfjdkfdf";
const names = 'Romman';
const aboutMe = `i am ${names}`
console.log(aboutMe);
function getCard(name,price,description){
    const div =`
    <div class="card">
    <h2>${name.toUpperCase()}</h2>
    <p> price : $ ${price} </p>
    <p>  ${description} </p>
    </div>
    ${console.log("kmn aso sona tumi bolo")} 
    `
    console.log(div);   
}
getCard('Iphone 15',170000,'going to cox,s bazar give you as a bitch and get free')
