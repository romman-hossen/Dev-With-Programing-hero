import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData.name)
    return (
        <div className='px-4 space-y-6'>
            <h2 className='text-5xl text-center text-amber-300'>Get Our Membership</h2>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-9 space-y-6 md:space-y-0'>
            {
                pricingData.map(pricing => <PricingCard pricing ={pricing} key={pricing.id}></PricingCard> )
            }
            </div>
        </div>
    );
};

export default PricingOptions;