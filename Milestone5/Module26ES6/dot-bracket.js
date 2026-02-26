const obj = {name: 'obj', 
              age: 20, 
                city: 'New York',
                 "work": 'developer',
                 '10': 'ten',
                 "home-address": '123 Main St',
                 parents :{
                    father: 'John',
                    "grand-father": 'Jack',
                    // mother:{
                    //     name: 'Jane',
                    //     age: 50
                    // }
                 }
             };
             obj.name = 'John';
             console.log(obj[10]); 
             console.log(obj["home-address"]); 
            //  console.log(obj.parents?.mother?.name);

            const bracket = "grand-father";
            console.log(obj.parents [bracket]); // this will work because the bracket notation allows us to access the property of an object using a variable as the key