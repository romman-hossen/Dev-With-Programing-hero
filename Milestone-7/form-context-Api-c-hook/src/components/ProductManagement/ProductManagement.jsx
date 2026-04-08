import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products,setProducts] = useState([]);
    const handleAddProduct = newProduct => {
        const addNewProduct = [...products,newProduct];
        setProducts(addNewProduct)
    }
    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct} />
            <ProductTable products={products}/>    
        </div>
    );
};

export default ProductManagement;