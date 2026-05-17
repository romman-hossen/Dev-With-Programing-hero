import { getUserById } from '@/app/lib/data';
import React from 'react';

const UsersIdPage = async ({params}) => {
    const {userId} = await params;
    const userDetail =await getUserById(userId)
    console.log(userDetail,'detail')
    return (
        <div>
            <h3>{userDetail.name}</h3>
            
        </div>
    );
};

export default UsersIdPage;