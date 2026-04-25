import PostData from "@/components/PostData";

 
const GetPost = async() =>{
    // const res = await fetch('http://localhost:5000/posts',{cache:"force-cache"})
    // const res = await fetch('http://localhost:5000/posts',{cache:'no-store'})
    const res = await fetch('http://localhost:5000/posts', { next: { revalidate: 3 } })
    if(!res.ok){
        throw new Error("Failed to fetch post")
        
    }
    return res.json();

}
const PostPage =async () => {
    const postData = await GetPost();
    console.log(postData)
    
    return (
        <div className="grid grid-cols-4 gap-8 container mx-auto my-5">
            {postData.map(data => <PostData key={data.id} data={data} />)}
        </div>
    );
};

export default PostPage;