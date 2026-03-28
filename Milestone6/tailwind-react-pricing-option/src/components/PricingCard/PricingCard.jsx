import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    // console.log(pricing)
    const {name,price,image,description,features} = pricing;
    // console.log(id)
    return (
        <div className='border bg-amber-500 p-6 rounded-2xl flex flex-col
        space-y-4'>
            <div className='flex justify-center'>
            <img className='h-80 w-100' src={image} alt="" />
            </div>
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-5xl'>{price}</h4>      
            </div>
            <div className='bg-amber-400 text-2xl text-black p-2 rounded-2xl flex-1'>
                <p>{description}</p>
                {features.map((feature,index)=> <PricingFeature key={index} feature = {feature}></PricingFeature>)}
            </div> 
            <button className='btn w-full rounded-full'>Subscribe</button>    
        </div>
    );
};
 
export default PricingCard;