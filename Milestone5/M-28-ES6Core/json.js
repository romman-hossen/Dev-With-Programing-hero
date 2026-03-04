//  const postContainer = document.getElementByID("post-container");
// // Exploring json 
// // const obj = {
// //     name: "Romman",
// //     roll :  717434,
// //     reg :343434343,
// //     dep : "CST "
// // }
// // console.log(typeof obj)
// // // console.log("Hello i am romman ");
// // const makeJson = JSON.stringify(obj);
// // console.log(typeof makeJson)
// // const makeObj = JSON.parse(makeJson)
// // console.log(makeObj)
// const showJson = () => {
// const url = 'https://jsonplaceholder.typicode.com/posts/1';
// fetch(url)
// // promise of response
//   .then((response) => response.json())
// //   promise of response data 
//   .then((data) => getData(data));
// }
//   const getData = data => {
//     console.log(data);
//     const mkeJson = JSON.stringify(data);
//     console.log(mkeJson)
//   } 

//   const postComment = () => {
//     const url = "https://dummyjson.com/comments";
//     fetch(url)
//     //  const result = fetch(url)
//     // console.log(result) //promise pending 
//     .then ((res) => res.json())
//     .then ((json) => {
//         // console.log(json);
//         displayPost(json.comments)
//     })
//   }

//   const displayPost = (posts) => {
//     // console.log(posts)
//     console.log(postContainer)
//     posts.forEach(post => {
//         console.log(post)
//     });   
//     // const loop = posts.forEach(element => {
//     //     console.log(element) 
//     // });
//     // console.log(loop)
//   }