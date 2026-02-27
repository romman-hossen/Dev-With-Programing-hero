// truthy and falsy values 
// falsy values: false, 0, '', null, undefined, NaN
let value = NaN;
value = 0;
value = "";
value = null;
value = undefined;
value = 0n;
value = false;
value = "Hello";
const isTruth = !!value ? "Truthy" : "falsy";
console .log(isTruth)

if(!value){
    console.log("This is a falsy value");
}
// ternary operator
// let age = 18;
// let canVote = (age >= 18) ? "Yes, you can vote" : "No, you cannot vote";
// console.log(canVote);