import Link from 'next/link';
import React from 'react';

const UsersPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data) 
    return (
        <div className='grid grid-cols-2 gap-10 mt-6 md:grid-cols-4 items-center justify-center'>
            {data.map(d => <div className='border p-10 space-y-5 rounded-2xl' key={d.id} d={d}>
                <h3>Name : {d.name}</h3>
                <p>UserName : {d.username}</p>
                <Link href={`/Users/${d.id}`} className='btn btn-accent'>More Details</Link>
                {/* <h3>Email : {d.email}</h3> */}

            </div>)}
        </div>
    );
};

export default UsersPage;