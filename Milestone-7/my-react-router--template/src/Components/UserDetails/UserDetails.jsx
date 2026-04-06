import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const userLoadData = useLoaderData()
    console.log(userLoadData)
    const {address,company,name,} = userLoadData;
    // console.log(address)
    const navigation = useNavigate();
    const isNavigating = Boolean(navigation.location)
    console.log(isNavigating)
    return (
        <div style={{
            border:'4px solid green',
            padding:'40px',
            color:"pink"
        }}>
            <h1>{address.street}</h1>
            <h2>{company.name}</h2>
            <p>{name}</p>
            <button onClick={() =>navigation(-1)}>Go back </button>  
               {/* //(-1) means tumi ekdhap pisone jabe   */}
        </div>
    );
};

export default UserDetails;