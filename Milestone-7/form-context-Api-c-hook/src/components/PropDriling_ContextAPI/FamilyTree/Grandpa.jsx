import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Unt from './Unt';
import './FamilyTree.css'

const Grandpa = () => {
    return (
        <div>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dad/>
                <Uncle/>
                <Unt/>
            </section>
            
        </div>
    );
};

export default Grandpa;