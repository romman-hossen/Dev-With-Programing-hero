'use client'; 
import React, { use, useState } from 'react';


const AboutItem = ({res}) => {
    const [count, setCount] = useState(0);
    const todoData = use(res);
    console.log(todoData,"about item data")
    console.log(todoData.length)
    return (
        <div>
            <h3>{count}</h3>
            <h2 className='text-2xl'>Total Data length : {todoData.length}</h2>
            <button onClick={() => setCount(count+1)}>Click me</button>
            
        </div>
    );
};

export default AboutItem;