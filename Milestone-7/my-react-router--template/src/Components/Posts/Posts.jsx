import { Link, useLoaderData } from 'react-router';
import PostData from './PostData';

const Posts = () => {
    const data =useLoaderData();

 
   

    // console.log(data)
    return (
        <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(2, 1fr)',
            // overflow:'hidden'
            gap:"30px",
            
        }}>
            {data.map(item => <PostData item ={item} key={item.id} ></PostData> )};
    </div>
            )
};

export default Posts;