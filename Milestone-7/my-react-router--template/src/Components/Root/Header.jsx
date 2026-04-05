import React from 'react';
import { Link ,NavLink} from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/laptop'>Laptop</NavLink>
                <NavLink to='/mobiles'>Mobile</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/users2'>Users2</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                {/* <NavLink to='/users2'>Users2</NavLink> */}
                {/* <Link to={/users2/id}>Click me </Link> */}
            </nav>
        </div>
    );
};

export default Header;