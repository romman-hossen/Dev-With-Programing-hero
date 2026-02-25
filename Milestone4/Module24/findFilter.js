const arr = [4,5,6,7,3,5];
let findArray = arr.find(i => i== 7);// this find method check the value that we give him on for each condition if this value match on this array  value then return it ,,else return undefind 
console.log(findArray)
findArray = arr;
console.log(findArray);

let array = [3,5,67,8,2,7,8,7];
const filterArray = array.filter(item => item != 7);//for each loop and filtering 
console.log(filterArray)
array = filterArray;
console.log(filterArray)

let names = ['romman','wasef','wazed','leora'];
const filterName = names.filter(name => name != 'leora'); //that means the item of the array on this name ('leora') is out from this array ..
console.log(filterName)