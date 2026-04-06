import React from 'react';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Fotter/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {
    const navigation =  useNavigation();
    const isNavigating = Boolean(navigation.location);
    // console.log(isNavigating)
    return (
        <div>
           <Header>
           </Header>  
            <div className='sidebar'>
           <Sidebar></Sidebar>
           {isNavigating && <span>Loading.......</span>}
           <Outlet>
           </Outlet>
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;