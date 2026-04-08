import React from 'react';
import MySelf from './MySelf';
import Sister from './Sister';
import Brother from './Brother';

const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            <section>
                <MySelf></MySelf>
                <Sister />
                <Brother></Brother>         
            </section>
            
        </div>
    );
};

export default Dad;