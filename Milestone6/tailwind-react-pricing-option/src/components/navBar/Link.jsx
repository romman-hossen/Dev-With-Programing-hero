import React from "react";

const Link = ({ route }) => {
  return (
    <li className="md:mr-8 hover:bg-amber-200 text-black ">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
