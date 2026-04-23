
// Simple Way 2
// const GetPosts = async () =>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }

// const GetPosts = async() =>{
//     try{
//        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         return res.json();   
//     }
//     catch(err){
//         // <div>no data found </div>  
//         // throw new Error("Failed to fetch posts")`
//         console.error("Fetch Error:", err.message);
//         throw err;
//     }  
// }
const GetPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        throw new Error ("Failed to fetch post")
    }
    return res.json()
    
}

const PostsPage = async() => {
    // simple way 1
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const data = await res.json();
    const data = await GetPosts();
    return (
        <div>
            <h3>Total Data :{data.length}</h3>            
        </div>
    );
};

export default PostsPage;