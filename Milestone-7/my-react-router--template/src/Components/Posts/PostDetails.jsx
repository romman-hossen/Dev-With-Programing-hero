import React, { use } from 'react';

const PostDetails = ({usePromise}) => {
    // console.log(usePromise)
    const data = use(usePromise)
    console.log(data)
    return (
        <div>
            <h1>{data.id}</h1>
            <p>{data.title}</p>
            
        </div>
    );
};

export default PostDetails;