const putNumberLS = () => {
    const number = Math.ceil(Math.random()*100);
    console.log(number)
    localStorage.setItem('number',number)
}
const getNumberLS = () => {
    const getNumber =localStorage.number;
    console.log("Get localStorage number from ",getNumber)
}

//get value  object and array 
const putNumberObjLS = () =>{
    const customers = {leora :'jinis kine na ',age :56, home :'sahabag'};
    const stringfy = JSON.stringify(customers)
    localStorage.setItem('customers',stringfy)
    console.log(stringfy)
}
const getItemObjLS = () => {
    const getItem = localStorage.getItem('customers');
    const parse = JSON.parse(getItem)
    console.log(parse)
}
