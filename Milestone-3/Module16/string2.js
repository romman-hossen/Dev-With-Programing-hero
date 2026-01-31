const school = "gaganpur high school";
const partscl = school.slice(2,10);
// console.log(partscl);

// const split = school.split(' ');
const split = school.split(' a ');
// console.log(split)
const str = `Rhaim , karim,jabbar,rahul`;
const strFriends = str.split(' , ');
// console.log(strFriends)
const realFriends = ['Rhaim','karim','jabbar','rahul'];
const friend = realFriends.join('&'); 
console.log(friend)

/* concat */

const firstName = 'Romman';
const lastName = 'Hossen'; 
// const fullName = firstName +' '+ lastName;

const  fullName = firstName.concat(' ').concat(lastName);
console.log(fullName);

// includes that means kono sring er element er modde oi upadan ase ki na ta check kora
console.log(firstName.includes('o'))