import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Posts = () => {
    const data =useLoaderData();
    console.log(data)
    return (
        <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(2, 1fr)',
            // overflow:'hidden'
            gap:"30px",
            
        }}>
            {data.map(item =><div style={{
                border:'1px solid skyblue',
                padding:'10px'
                
            }}>
                <h2>{item.id}</h2>
                <h1 style={{wordWrap:'break-word',
            overflowWrap:'break-word',
            fontSize:'1.5em'}}>{item.title}</h1>
            <Link to={`/posts/${item.id}`}>
            <button>Click me</button>
            </Link>
            </div>
        )}
            
        </div>
    );
};

export default Posts;