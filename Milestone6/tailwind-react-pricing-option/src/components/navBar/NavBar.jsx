import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const NavBar = () => {

  const [open,setOpen] = useState(false)
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
  const links = navLinks.map(route => <Link key={route.id} route ={route}></Link>)

  return (
    <nav className="flex justify-between mx-6 my-4">
      <span className="flex gap-2" onClick={() => setOpen(!open)}>
        {open ? <X className="md:hidden"></X>: <Menu className="md:hidden"></Menu>}
        <ul className={`md:hidden absolute duration-1000 px-6 space-y-2 py-1 bg-blue-900 ${open?'top-10' : '-top-60'}`}>
          {links}
        </ul>
        <h3>My Navbar</h3>
      </span>
   
        {/* {navLinks.map(item => <li key={item.id}><a href={item.path}>{item.name}</a></li>)} */}
        <ul className="md:flex hidden">
         {links}
        </ul>    
      {/*static navbar*/}
      {/* <ol className='flex gap-5 list-none justify-center'>
         <li><a href="https://www.google.com">Home </a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Configure</a></li>  
         </ol> */}
         <button>Sign Up</button>
    </nav>
  );
};

export default NavBar;
