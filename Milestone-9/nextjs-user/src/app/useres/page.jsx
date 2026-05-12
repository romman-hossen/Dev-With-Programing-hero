import React from 'react';

const UserPage =async() => {
    const res = await fetch('http://localhost:8000/profile');
    const data = await res.json();
    console.log(data)
    return (
        <div className='grid grid-cols-3 gap-5 '>
            {
                data.map(d => <div key={d.id} className='p-4 border-2 rounded-lg text-center'>
                    <h2 className='text-2xl text-accent'>{d.name}</h2>
                    <p className='text-amber-200'>{d.age}</p>
                </div>)
            }
            
        </div>
    );
};

export default UserPage;