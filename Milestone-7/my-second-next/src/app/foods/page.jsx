import FoodData from '@/component/FoodData.jsx/FoodData';
import React from 'react';

const FoodPage =async() => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const data = await res.json();
    // console.log(data,"food page data")
    const foodsData = data.data;
    // console.log(foodData,"food page data")
    return (
        <div>
            <h3 className='text-5xl text-center mt-6 text-gray-400'>Welcome to FoodHub</h3>
            <div className='grid  sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8'>
                {foodsData.map((foodData,ind) => <FoodData key={ind} foodData={foodData} />)}
            </div>
            
        </div>
    );
};

export default FoodPage;