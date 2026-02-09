const products =[

    {name:"Iphone 13 pro max mobiLe",price:100000,},
    {name:" laptop hp core i5",price:50000,},
    {name:"samsung s25 ultra mobile",price:100000,},
    {name:"Macbook air m2 pro lApTop",price:200000,},
    {name:"realme mobile c21 ",price:10000,}

]
function matchedProducts(products,search){
    for(let product of products)
    {
        // console.log(product.price)
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            console.log(product)
            
        }
    }

}
const product = matchedProducts(products,'LAptOP')