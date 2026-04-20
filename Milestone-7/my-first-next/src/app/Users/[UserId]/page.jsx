import React from "react";

const UserIdPage = async ({ params }) => {
    const {UserId} = await params;
    console.log("give me data ",UserId)

  const response= await fetch(`https://jsonplaceholder.typicode.com/users/${UserId}`);
  const data =await response.json();
  console.log(data.name)
  return <div className="text-center mt-20">
    <h1>{data.name}</h1>
    <div className="flex gap-4 justify-center">
         <span>Connect met with : </span>
         Email -
        <span className="text-red-300">{data.email}</span>
        phone-
        <span className="text-accent">{data.phone}</span>
    </div>
  </div>;
};

export default UserIdPage;
