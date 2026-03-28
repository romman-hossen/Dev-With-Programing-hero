import React, { use } from "react";

const DaisyPricing = ({ pricingPromise }) => {
  const dataPricing = use(pricingPromise);

  return (
    <>
       <div className="grid grid-cols-3 container mx-auto">
      {dataPricing.map((data) => (
     
        <div key={data.id} className="card w-96 bg-base-100 shadow-2xl border">
          <div className="card-body ">
            {data.popular &&<span className="badge badge-xs badge-warning">Most Popular</span>}
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold">{data.name}</h2>
              <span className="text-xl text-amber-100">{data.price}</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
             {data.features.map(feture => (<li className="flex-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
            <span>{feture}</span>
              </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary btn-block">Subscribe</button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default DaisyPricing;
