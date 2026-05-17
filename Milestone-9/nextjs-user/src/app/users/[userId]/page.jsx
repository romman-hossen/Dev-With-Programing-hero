import React from 'react';

const UsersIdPage = async ({params}) => {
    const {userId} = await params;
    console.log(userId)
    return (
        <div>
            
        </div>
    );
};

export default UsersIdPage;