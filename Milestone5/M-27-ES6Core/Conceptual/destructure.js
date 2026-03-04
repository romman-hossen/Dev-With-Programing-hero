//* Exploring Distructure  recap */
let obj = {
    country: 'Bangladesh',
    city: 'Dhaka',
    name: 'Programming Hero',
    age: 5,
    division : {
        name : 'Dhaka',
        population : 20000000,
        Bazar : {
            name : 'New Market',
        
       }   
   },
   isBcs : true,
   isMilionaire : false
}

   
   let {country: desh ,city: rajdhani , name : nam , age:boyos,
       division : {name : neme ,population : jonoshongkha ,
        Bazar : {name : tela}
        },
   } =  obj;
   console.log(desh,rajdhani,jonoshongkha,tela);
   

   const arr = [45,76,45,57,67,78]
   let [first1 ,first2,first3] =[arr[0],arr[4],arr[2]];  // this is destructure 
   console.log(first1,first2,first3)