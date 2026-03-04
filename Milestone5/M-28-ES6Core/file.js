const postComment = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        displayPost(data) });
}

const displayPost = (posts) => {
   const postContainer = document.getElementById("post-container");
   const postCard = document.getElementsByClassName("post-card")
   postContainer.innerHTML = "";

//    console.log(postContainer);
   posts.forEach((post) => {
    // console.log(post);
   // 2.create element
    // const postCard = document.createElement("div");
    const div = document.createElement("div");
    div.innerHTML =` 
    <div class="post-card">
     <h2>${post.title}</h2>
     <p>${post.body}</p>
    </div> 
    `;
    postContainer.append(div);
  
  });
}