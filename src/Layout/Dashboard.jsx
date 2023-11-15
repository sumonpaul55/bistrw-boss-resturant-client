import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCartArrowDown } from "react-icons/fa";
import { GiOilDrum } from "react-icons/gi";
import { SiCodereview } from "react-icons/si";
import { TbBookmarksFilled } from "react-icons/tb";
import { BiFoodMenu } from "react-icons/bi";
import "./dashboard.css"

const Dashboard = () => {
    return (
        <main className='dashboard'>
            <div className="container mx-auto">
                <div className='flex'>
                    {/* dashboard sidebar */}
                    <div className="w-64 min-h-screen px-2 bg-orange-400 pt-10">
                        <ul className='space-y-6 font-semibold pl-3'>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <FaHome />
                                <NavLink to="">User Home</NavLink>
                            </li>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <GiOilDrum />
                                <NavLink to="">Reservation</NavLink>
                            </li>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <FaCartArrowDown />
                                <NavLink to="">My Cart</NavLink>
                            </li>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <SiCodereview />
                                <NavLink to="">Add a Reviews</NavLink>
                            </li>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <TbBookmarksFilled />
                                <NavLink to="">My Bookings</NavLink>
                            </li>
                            <div className="divider"></div>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <FaCartArrowDown />
                                <NavLink to="">Home</NavLink>
                            </li>
                            <li className='flex items-center gap-2 hover:text-white duration-150'>
                                <BiFoodMenu />
                                <NavLink to="/">Menu</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* dashboard main layout */}
                    <div className='flex-1 p-6'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;