import React from "react";

const UserIdPage = async ({ params }) => {
    const {UserId} = await params;
    console.log("give me data ",UserId)

  const response= await fetch(`https://jsonplaceholder.typicode.com/users/${UserId}`);
  const data =await response.json();
  console.log(data)

  return <div></div>;
};

export default UserIdPage;
