import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    // console.log(pricing)
    const {id,name,price,image,description,features} = pricing;
    // console.log(id)
    return (
        <div className=' border bg-amber-500 p-6 rounded-2xl'>
            
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-5xl'>{price}</h4>      
            </div>
            <div className='bg-amber-400 text-2xl text-black p-2 rounded-2xl'>
                <p>{description}</p>
                {features.map((feature,index)=> <PricingFeature key={index} feature = {feature}></PricingFeature>)}
            </div> 
            <button>Subscribe</button>    
        </div>
    );
};
 
export default PricingCard;