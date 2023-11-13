import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Navbar = () => {
    const nablist = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to={`/order/salad`}>Order Food</Link></li>
        <li><Link to={`/login`}>Login</Link></li>
    </>
    return (
        <nav className='absolute z-10 left-0 top-0 right-0 bg-black bg-opacity-30 text-white font-semibold'>
            <div className="navbar min-h-[auto] py-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* navlist */}
                            {nablist}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img src={logo} alt="logo" className='w-12' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {/* nav list */}
                        {nablist}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </nav>
    );
};

export default Navbar;