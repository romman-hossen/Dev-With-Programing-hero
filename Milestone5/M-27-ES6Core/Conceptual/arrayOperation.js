const phones = [
  { name: "iPhone 15", price: 120000 },
  { name: "Samsung Galaxy S24", price: 105000 },
  { name: "Redmi Note 13", price: 25000 },
  { name: "OnePlus 12", price: 75000 },
  { name: "Realme 12 Pro", price: 32000 }
];
let pones = {
    name: "Samsung Galaxy S24",
    price: 105000
}
let pone = "name" ;
console.log(pones[pone]);
const filterRich = phones.filter((phone) => phone.price > 100000 && phone.name.includes("iPhone"))
// console.log(filterRich)
const arr = [45,56,67,23,34,89];
const foreach = arr.forEach((item,index,array) => console.log(item,index,array));

// Reduce method on js 
const arrays = [45,67,87,3,89,67,69];
const reduCe = arrays.reduce((accumulator,element) => {
    console.log(accumulator,element)
    return accumulator + element;
},0)
console.log(reduCe);