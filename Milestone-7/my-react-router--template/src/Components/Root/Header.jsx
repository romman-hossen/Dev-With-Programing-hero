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
            </nav>
        </div>
    );
};

export default Header;