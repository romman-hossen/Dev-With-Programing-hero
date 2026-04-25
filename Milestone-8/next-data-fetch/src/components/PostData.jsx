import React from "react";

const PostData = ({ data }) => {
    const {title,author,age,role,email} = data;
//   console.log(data);
  return (
    <div>
      <div className="card bg-primary text-primary-content ">
        <div className="card-body">
            <span>{}</span>
          <h2 className="card-title">{title}</h2>
          <h3 className="text-2xl text-secondary-content">{author}</h3>
          <p>{age}</p>
          <p className="text-red-300">
            {email}
          </p>
          <div className="card-actions justify-end">
            <button className="btn">{role}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostData;
