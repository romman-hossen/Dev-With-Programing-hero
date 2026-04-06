import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const Post = () => {
    const postData = useLoaderData();
     const params = useParams();
    console.log('user is no',params.id)
    const {body,id} = postData;

    
    // console.log(postData)
    const style = {
        backgroundColor : 'purple',
        display:'flex',
        alignItems:'center',
        borderRadius :'20px'
    }
    return (
        <>
          <div style={style}>
            
            <p><small>{id}</small></p>
            <p>
                {body}
            </p>
         </div>  
        </>
    );
};

export default Post;