import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    const users = useLoaderData()
    // console.log(users)
    return (
        <div>
            <h1>User data is Available </h1>
            {/* {users.map(item => <div>
                <h1></h1>
            </div>)} */}
            
        </div>
    );
};

export default User;