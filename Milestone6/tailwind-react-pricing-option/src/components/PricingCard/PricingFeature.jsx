import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    // console.log(feature)
    return (
        <div>
            <p className='text-amber-50 flex gap-1 items-center py-2'><CircleCheckBig className='text-cyan-600'></CircleCheckBig>{feature}</p>
        </div>
    );
};

export default PricingFeature;