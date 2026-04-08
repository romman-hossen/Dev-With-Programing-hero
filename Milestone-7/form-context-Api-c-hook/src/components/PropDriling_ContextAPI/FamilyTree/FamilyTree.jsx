import React from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css'
const FamilyTree = () => {
    return (
        <div className='family-tree'>
            <h1 className=''>Our Family</h1>     
         <Grandpa></Grandpa>
                 
        </div>
    );
};

export default FamilyTree;