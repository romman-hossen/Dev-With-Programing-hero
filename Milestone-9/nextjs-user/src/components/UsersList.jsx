import React, { use } from 'react';

const UsersList = ({usersPromise} ) => {
    const data =  use(usersPromise);
    
    return (
       <div className='grid grid-cols-3 gap-5 '>
            {/* {
                data.map(d => <div key={d.id} className='p-4 border-2 rounded-lg text-center'>
                    <h2 className='text-2xl text-accent'>{d.name}</h2>
                    <p className='text-amber-200'>{d.age}</p>
                </div>)
            } */}
            <div className='p-4 border-2 rounded-lg text-center'>
                <h2 className='text-2xl text-accent'>{data.name}</h2>
                    <p className='text-amber-200'>{data.age}</p>
            </div>
            
        </div>
    );
};

export default UsersList;