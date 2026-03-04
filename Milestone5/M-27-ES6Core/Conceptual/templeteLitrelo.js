
 const age = 0;
 console.log(`I know your age that i gase 
    ${age} 
   ${age > 18 ? 'adult' : 'children'}
   ${age || 100} `)

//    spread operator 
const cars = {
    model : "Toyotoya",
    price : 20000000
}

const car2 = {...cars};
cars.model = "Rolex e454"
cars.price = 30000000;
car2.model = "Tesla 34fd"
console.log('car 2 ',car2)
console.log('car 1 ',cars)