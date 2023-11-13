import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import Navbar from '../nvabar/Navbar';

const MainLayout = () => {
    const location = useLocation();
    const controlHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signUp")
    return (
        <>
            {controlHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {controlHeaderFooter || <Footer></Footer>}
        </>
    );
};

export default MainLayout;