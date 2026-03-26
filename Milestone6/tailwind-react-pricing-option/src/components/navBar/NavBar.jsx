import React from "react";
import Link from "./Link";

const NavBar = () => {

  const navLinks = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div>
        {/* {navLinks.map(item => <li key={item.id}><a href={item.path}>{item.name}</a></li>)} */}
        <ul className="flex">
        {navLinks.map(route => <Link route ={route}></Link>)}
        </ul>    
      {/*static navbar*/}
      {/* <ol className='flex gap-5 list-none justify-center'>
         <li><a href="https://www.google.com">Home </a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Configure</a></li>  
         </ol> */}
    </div>
  );
};

export default NavBar;
