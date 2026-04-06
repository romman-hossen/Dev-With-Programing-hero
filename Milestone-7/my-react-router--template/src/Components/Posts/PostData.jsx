import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import PostDetails from './PostDetails';

const PostData = ({item}) => {
       const [showInfo,setShowInfo] = useState(false);
      const usePromise = fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`).then(res => res.json());
    //   console.log(usePromise)
    return (
       <div style={{
                border:'1px solid skyblue',
                padding:'10px'
                
            }}>
                <h2>{item.id}</h2>
                <h1 style={{wordWrap:'break-word',
            overflowWrap:'break-word',
            fontSize:'1.5em'}}>{item.title}</h1>
            <Link to={`/posts/${item.id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={() => setShowInfo(!showInfo)} style={{marginLeft:'30px'}}>{showInfo ?
            "Hide":"Details"} Info</button>
            {
             showInfo && <Suspense fallback={<span>Loading.......</span>}>
                <PostDetails usePromise={usePromise}></PostDetails>
             </Suspense>   
            }
            </div>
    )
};

export default PostData;