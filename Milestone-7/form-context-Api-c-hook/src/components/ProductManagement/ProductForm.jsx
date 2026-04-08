import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error,setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();  
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        if(name.length === 0 ){
            setError("Please Provide a Product Name");
            return;
        }
        else if(price.length ===0){
            setError("Please Provide a Price");
            return;
        }
        else if(price < 1){
            setError("Price can not be negative or Zero");
            return;
        }
        else if(quantity.length === 0 ){
            setError("Please Provide product quantity")
            return;
        }
        else if(quantity < 1){
            setError("Quantity could not be less then One");
            return;
        }
        else{
            setError('')

        }

        console.log(name,price,quantity)
        const Product = {
            name,
            price,
            quantity
        }
        handleAddProduct(Product)
        // console.log(Product)
    }

    return (
        <div style={{}}>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Product Name' />
                <br />
                <input type="text" name='price' placeholder='Product price' />
                <br />
                <input type="text" name='quantity' placeholder='Product Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form> 
            <p style={{
                color:"red"
            }
            }><small>{error}</small></p>           
        </div>
    );
};

export default ProductForm;