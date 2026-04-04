import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router';
import Footer from '../Fotter/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {
    return (
        <div>
           <Header>
           </Header>  
            <div className='sidebar'>
           <Sidebar></Sidebar>
           <Outlet>
           </Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;